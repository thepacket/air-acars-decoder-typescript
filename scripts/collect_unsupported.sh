#!/bin/bash
# Collect up to 50 messages per label that has no dedicated plugin yet.
# - Discovers the supported-label set by scanning lib/plugins/*.ts.
# - Paginates through Airframes.io REST API (timeframe=last-month).
# - Buckets into scripts/unsupported/<LABEL>.json; caps at 50.
# - Prints "NEW LABEL <X> (n=k)" the first time each label appears.
# - Stops when every discovered unsupported label reaches 50 or after 15
#   consecutive dry rounds at offset=0 (signal that nothing new is coming).
set -u
cd "$(dirname "$0")/.."

BUCKETS=scripts/unsupported
LOG=$BUCKETS/_loop.log
mkdir -p "$BUCKETS"
: > "$LOG"

# Supported-label set (derived from plugin qualifiers()). Loaded once.
SUPPORTED=$(node -e "
const fs=require('fs'),p=require('path');
const dir='lib/plugins';
const set=new Set();
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.ts') || f.endsWith('.test.ts')) continue;
  const t=fs.readFileSync(p.join(dir,f),'utf8');
  const m=t.match(/labels:\s*\[([\s\S]*?)\]/);
  if (m) m[1].split(',').map(s=>s.trim().replace(/^['\"]|['\"]$/g,'')).filter(Boolean).forEach(x=>set.add(x));
}
console.log([...set].join(','));
")
echo "Supported labels: $SUPPORTED" | tee -a "$LOG"

CAP=50
OFFSET=0
ROUND=0
ZERO_STREAK=0

while :; do
  ROUND=$((ROUND + 1))
  HTTP=$(curl -s -o "$BUCKETS/_page.json" -w "%{http_code}" \
    "https://api.airframes.io/messages?limit=100&offset=${OFFSET}&timeframe=last-month")
  if [ "$HTTP" != "200" ]; then
    echo "[r$ROUND] API error HTTP=$HTTP" | tee -a "$LOG"
    sleep 1
    continue
  fi

  # Route this page: bucket messages whose label is NOT in SUPPORTED.
  # Print NEW-LABEL lines on first discovery.
  OUT=$(node -e "
    const fs=require('fs');
    const SUPPORTED=new Set('$SUPPORTED'.split(','));
    const IGNORED=new Set(['_d','Q0','d']);
    const PER_LABEL_CAP={'H1':500};
    const CAP=$CAP;
    const dir='$BUCKETS';
    const page=JSON.parse(fs.readFileSync('$BUCKETS/_page.json','utf8'));
    const existing=new Set(fs.readdirSync(dir).filter(f=>/^[^_].*\.json\$/.test(f)).map(f=>f.replace(/\.json\$/,'')));
    let added=0, newLabels=0, stillMissing=0;
    const buckets={};
    function capOf(l){ return PER_LABEL_CAP[l] ?? CAP; }
    for (const m of page) {
      const lbl=(m.label||'').trim();
      if (!lbl) continue;
      if (IGNORED.has(lbl)) continue;
      if (SUPPORTED.has(lbl) && !(lbl in PER_LABEL_CAP)) continue;
      const file=dir+'/'+lbl+'.json';
      if (!buckets[lbl]) {
        if (fs.existsSync(file)) {
          try { buckets[lbl]=JSON.parse(fs.readFileSync(file,'utf8')); } catch { buckets[lbl]={entries:[]}; }
        } else {
          buckets[lbl]={entries:[]};
        }
      }
      const b=buckets[lbl];
      if (b.entries.length>=capOf(lbl)) continue;
      if (b.ids && b.ids[m.id]) continue;
      if (!b.ids) b.ids={};
      b.entries.push({id:m.id,label:lbl,text:m.text||''});
      b.ids[m.id]=1;
      added++;
      if (!existing.has(lbl) && b.entries.length===1) {
        console.log('NEW_LABEL '+lbl);
        newLabels++;
      }
    }
    for (const [lbl,b] of Object.entries(buckets)) {
      fs.writeFileSync(dir+'/'+lbl+'.json', JSON.stringify({count:b.entries.length,entries:b.entries,ids:b.ids},null,2));
    }
    // Count still-below-cap among all known unsupported buckets
    for (const f of fs.readdirSync(dir)) {
      if (!/^[^_].*\.json\$/.test(f)) continue;
      const lbl=f.replace(/\.json\$/,'');
      const b=JSON.parse(fs.readFileSync(dir+'/'+f,'utf8'));
      if ((b.entries||[]).length<capOf(lbl)) stillMissing++;
    }
    console.log('ADDED='+added);
    console.log('NEW_LABELS='+newLabels);
    console.log('MISSING='+stillMissing);
  " 2>&1)

  # Surface NEW_LABEL lines to the console + log
  echo "$OUT" | grep '^NEW_LABEL ' | tee -a "$LOG"
  ADDED=$(echo "$OUT" | grep '^ADDED=' | tail -1 | cut -d= -f2)
  MISSING=$(echo "$OUT" | grep '^MISSING=' | tail -1 | cut -d= -f2)
  echo "[r$ROUND offset=$OFFSET] added=${ADDED:-0} missing=${MISSING:-?}" | tee -a "$LOG"

  if [ "${ADDED:-0}" = "0" ]; then ZERO_STREAK=$((ZERO_STREAK + 1)); else ZERO_STREAK=0; fi

  # Stop condition: we've seen at least one unsupported label and all known
  # unsupported buckets are full.
  LABELS_KNOWN=$(ls $BUCKETS/[^_]*.json 2>/dev/null | wc -l | tr -d ' ')
  if [ "$LABELS_KNOWN" -gt 0 ] && [ "${MISSING:-1}" = "0" ]; then
    echo "[r$ROUND] all known unsupported labels at cap — stopping" | tee -a "$LOG"
    break
  fi

  OFFSET=$((OFFSET + 100))
  if [ "$OFFSET" -ge 50000 ] || [ "$ZERO_STREAK" -ge 30 ]; then
    echo "[r$ROUND] resetting offset (streak=$ZERO_STREAK, offset=$OFFSET)" | tee -a "$LOG"
    OFFSET=0
    ZERO_STREAK=0
    sleep 3
  fi
  sleep 1
done
