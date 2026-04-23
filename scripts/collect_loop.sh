#!/bin/bash
# Collect loop: fetch a page of 100 Airframes.io messages (excl. _d,Q0,H1),
# route through the locally-created plugins, stop when every target plugin
# has 50 messages or after 30 minutes.
set -u
cd "$(dirname "$0")/.."

LOG=scripts/buckets/_loop.log
: > "$LOG"

START=$(date +%s)
ROUND=0
OFFSET=0
ZERO_STREAK=0

# Which labels exclude_labels query uses: _d (very high volume), Q0, H1 per
# the spec; we also exclude labels we've already capped so the API spends its
# window returning something useful.
EXCL_BASE="_d,Q0,H1"

while :; do
  ROUND=$((ROUND + 1))
  NOW=$(date +%s)
  ELAPSED=$(( NOW - START ))

  # Build dynamic exclude list: add every target label that's already at cap
  # so deep pages don't get stuffed with the common ones.
  CAPPED=$(for b in scripts/buckets/Label_*.json; do
    node -e "const d=JSON.parse(require('fs').readFileSync('$b','utf8'));if((d.entries||[]).length>=50){const n=require('path').basename('$b','.json');const lbl=n.match(/^Label_([A-Z0-9]+)_/);if(lbl)console.log(lbl[1])}" 2>/dev/null
  done | tr '\n' ',' | sed 's/,$//')
  EXCLUDE="$EXCL_BASE"
  [ -n "$CAPPED" ] && EXCLUDE="$EXCL_BASE,$CAPPED"

  HTTP_STATUS=$(curl -s -o scripts/buckets/_last_page.json -w "%{http_code}" \
    "https://api.airframes.io/messages?limit=100&offset=${OFFSET}&timeframe=last-month&exclude_labels=${EXCLUDE}")
  if [ "$HTTP_STATUS" != "200" ]; then
    echo "[round $ROUND] API error HTTP=$HTTP_STATUS" | tee -a "$LOG"
    sleep 1
    continue
  fi

  OUT=$(cat scripts/buckets/_last_page.json | \
    npx ts-node --transpile-only scripts/route_messages.ts 2>&1)
  RC=$?
  if [ $RC -ne 0 ]; then
    echo "[round $ROUND] router error rc=$RC" | tee -a "$LOG"
    echo "$OUT" | tail -20 | tee -a "$LOG"
    sleep 1
    continue
  fi

  MISSING=$(echo "$OUT" | grep '^LABELS_MISSING=' | tail -1 | cut -d= -f2)
  ADDED=$(echo "$OUT" | grep '^ADDED=' | tail -1 | cut -d= -f2)
  echo "[round $ROUND t=${ELAPSED}s offset=${OFFSET} excl=${EXCLUDE}] added=${ADDED} labels_missing=${MISSING}" \
    | tee -a "$LOG"

  if [ -z "$MISSING" ] || [ "$MISSING" = "0" ]; then
    echo "[round $ROUND] all labels full — stopping" | tee -a "$LOG"
    break
  fi

  if [ "${ADDED:-0}" = "0" ]; then
    ZERO_STREAK=$((ZERO_STREAK + 1))
  else
    ZERO_STREAK=0
  fi

  OFFSET=$((OFFSET + 100))
  # Reset to head whenever we've had 15 consecutive dry rounds or we've walked
  # 50k messages deep — new real-time messages keep arriving at offset 0.
  if [ "$OFFSET" -ge 50000 ] || [ "$ZERO_STREAK" -ge 15 ]; then
    echo "[round $ROUND] resetting offset to 0 (streak=${ZERO_STREAK})" | tee -a "$LOG"
    OFFSET=0
    ZERO_STREAK=0
    sleep 5
  fi

  sleep 1
done

# Final summary line with per-plugin counts
echo "=== final counts ===" | tee -a "$LOG"
cat scripts/buckets/_last_page.json | \
  npx ts-node --transpile-only scripts/route_messages.ts 2>&1 | \
  grep -E '^(Label_|ADDED|LABELS_MISSING)' | tee -a "$LOG"
