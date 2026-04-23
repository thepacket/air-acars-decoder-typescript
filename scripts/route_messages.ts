/**
 * Route messages from Airframes.io through locally created plugins.
 *
 * stdin  : JSON array of Airframes.io message objects (label + text + rest)
 * state  : ./scripts/buckets/<plugin-name>.json  (accumulates up to CAP entries)
 * stdout : per-plugin count lines + a final LABELS_MISSING=N line
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import { MessageDecoder } from '../lib/MessageDecoder';
import * as Plugins from '../lib/plugins/official';

const CAP = 50;

interface Target {
  cls: any;
  name: string;
  label: string;
  test: string;
}

// Locally-created (untracked) plugins — per `git status` — excluding H1.
const TARGETS: Target[] = [
  { cls: (Plugins as any).Label_10_INI, name: 'label-10-ini', label: '10', test: 'Label_10_INI' },
  { cls: (Plugins as any).Label_17_Route, name: 'label-17-route', label: '17', test: 'Label_17_Route' },
  { cls: (Plugins as any).Label_18_POX, name: 'label-18-pox', label: '18', test: 'Label_18_POX' },
  { cls: (Plugins as any).Label_22_Compact_OOOI, name: 'label-22-compact-oooi', label: '22', test: 'Label_22_Compact_OOOI' },
  { cls: (Plugins as any).Label_24_Movement, name: 'label-24-movement', label: '24', test: 'Label_24_Movement' },
  { cls: (Plugins as any).Label_25_ETOPS_Winds, name: 'label-25-etops-winds', label: '25', test: 'Label_25_ETOPS_Winds' },
  { cls: (Plugins as any).Label_26_ETA, name: 'label-26-eta-compact', label: '26', test: 'Label_26_ETA' },
  { cls: (Plugins as any).Label_2F_Position, name: 'label-2f-position', label: '2F', test: 'Label_2F_Position' },
  { cls: (Plugins as any).Label_33_TakeoffPerf, name: 'label-33-takeoff-perf', label: '33', test: 'Label_33_TakeoffPerf' },
  { cls: (Plugins as any).Label_36_PosReport, name: 'label-36-pos-report', label: '36', test: 'Label_36_PosReport' },
  { cls: (Plugins as any).Label_39_OpsCoord, name: 'label-39-ops-coord', label: '39', test: 'Label_39_OpsCoord' },
  { cls: (Plugins as any).Label_3L_Position, name: 'label-3l-position', label: '3L', test: 'Label_3L_Position' },
  { cls: (Plugins as any).Label_41_Fault, name: 'label-41-fault', label: '41', test: 'Label_41_Fault' },
  { cls: (Plugins as any).Label_52_AGM, name: 'label-52-agm', label: '52', test: 'Label_52_AGM' },
  { cls: (Plugins as any).Label_5U_WXR, name: 'label-5u-wxr', label: '5U', test: 'Label_5U_WXR' },
  { cls: (Plugins as any).Label_5Z_AA, name: 'label-5z-aa', label: '5Z', test: 'Label_5Z_AA' },
  { cls: (Plugins as any).Label_81_MVA, name: 'label-81-mva', label: '81', test: 'Label_81_MVA' },
  { cls: (Plugins as any).Label_A0_AFN, name: 'label-a0-afn', label: 'A0', test: 'Label_A0_AFN' },
  { cls: (Plugins as any).Label_A3_PDC, name: 'label-a3-pdc', label: 'A3', test: 'Label_A3_PDC' },
  { cls: (Plugins as any).Label_A6_ADS, name: 'label-a6-ads', label: 'A6', test: 'Label_A6_ADS' },
  { cls: (Plugins as any).Label_A9_DAI, name: 'label-a9-dai', label: 'A9', test: 'Label_A9_DAI' },
  { cls: (Plugins as any).Label_AA_CPDLC, name: 'label-aa-cpdlc', label: 'AA', test: 'Label_AA_CPDLC' },
  { cls: (Plugins as any).Label_B0_AFN, name: 'label-b0-afn', label: 'B0', test: 'Label_B0_AFN' },
  { cls: (Plugins as any).Label_B2_OCRA, name: 'label-b2-ocra', label: 'B2', test: 'Label_B2_OCRA' },
  { cls: (Plugins as any).Label_B9_ATIS_Request, name: 'label-b9-atis-request', label: 'B9', test: 'Label_B9_ATIS_Request' },
  { cls: (Plugins as any).Label_BA_CPDLC, name: 'label-ba-cpdlc', label: 'BA', test: 'Label_BA_CPDLC' },
  { cls: (Plugins as any).Label_C1_Loadsheet, name: 'label-c1-loadsheet', label: 'C1', test: 'Label_C1_Loadsheet' },
  { cls: (Plugins as any).Label_H2_AMDAR, name: 'label-h2-amdar', label: 'H2', test: 'Label_H2_AMDAR' },
  { cls: (Plugins as any).Label_SA_MediaAdvisory, name: 'label-sa-media-advisory', label: 'SA', test: 'Label_SA_MediaAdvisory' },
];

interface BucketEntry {
  id: number | string;
  label: string;
  text: string;
  decoded: boolean;
  decodeLevel: string;
  description: string;
  items: { type: string; code: string; label: string; value: string }[];
}

interface Bucket {
  count: number;
  entries: BucketEntry[];
}

const bucketsDir = path.resolve(__dirname, 'buckets');
fs.mkdirSync(bucketsDir, { recursive: true });

function loadBucket(name: string): Bucket {
  const p = path.join(bucketsDir, `${name}.json`);
  if (fs.existsSync(p)) {
    try {
      return JSON.parse(fs.readFileSync(p, 'utf8')) as Bucket;
    } catch {
      /* fall through */
    }
  }
  return { count: 0, entries: [] };
}

function saveBucket(name: string, b: Bucket): void {
  fs.writeFileSync(path.join(bucketsDir, `${name}.json`), JSON.stringify(b, null, 2));
}

function main(): void {
  const raw = fs.readFileSync(0, 'utf8');
  const messages: { id?: number | string; label?: string; text?: string }[] =
    JSON.parse(raw);

  const decoder = new MessageDecoder();

  const instances = TARGETS.map((t) => ({
    t,
    inst: new t.cls(decoder) as { decode: (m: { label: string; text: string }) => any },
    bucket: loadBucket(t.test),
  }));

  // Global ID set — a given Airframes message ID goes into at most one bucket
  // across all locally-created plugins.
  const seenIds = new Set<string>();
  for (const { bucket } of instances) {
    for (const e of bucket.entries) {
      if (e.id !== undefined && e.id !== null) seenIds.add(String(e.id));
    }
  }

  let added = 0;
  let skippedDup = 0;
  for (const m of messages) {
    const id = m.id;
    const label = (m.label || '').trim();
    const text = m.text || '';
    if (id === undefined || id === null) continue;
    if (!label || !text) continue;

    const idKey = String(id);
    if (seenIds.has(idKey)) {
      skippedDup++;
      continue;
    }

    const candidates = instances.filter((x) => x.t.label === label);
    if (candidates.length === 0) continue;

    for (const { t, inst, bucket } of candidates) {
      if (bucket.entries.length >= CAP) continue;

      let result: any;
      try {
        result = inst.decode({ label, text });
      } catch {
        continue;
      }
      if (!result) continue;

      bucket.entries.push({
        id,
        label,
        text,
        decoded: !!result.decoded,
        decodeLevel: result.decoder?.decodeLevel ?? 'none',
        description: result.formatted?.description ?? '',
        items: result.formatted?.items ?? [],
      });
      bucket.count = bucket.entries.length;
      seenIds.add(idKey);
      added++;
      break;
    }
  }

  const status: string[] = [];
  let missing = 0;
  for (const { t, bucket } of instances) {
    saveBucket(t.test, bucket);
    status.push(`${t.test}: ${bucket.entries.length}/${CAP}`);
    if (bucket.entries.length < CAP) missing++;
  }
  console.log(status.join('\n'));
  console.log(`ADDED=${added}`);
  console.log(`SKIPPED_DUP=${skippedDup}`);
  console.log(`LABELS_MISSING=${missing}`);
}

main();
