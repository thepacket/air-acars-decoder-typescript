/**
 * Read scripts/buckets/<Label_*>.json and emit lib/plugins/<Label_*>.test.ts.
 *
 * Each bucket entry becomes one `test(...)` block asserting:
 *   - decoded flag, decodeLevel, decoder.name
 *   - formatted.description
 *   - formatted.items.length + (label,value) for each item
 *
 * The generator mirrors the style of existing *.test.ts files in this folder
 * (see Label_21_POS.test.ts, Label_16_POSA1.test.ts).
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';

interface BucketEntry {
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

const TARGETS: { test: string; name: string; label: string }[] = [
  { test: 'Label_10_INI', name: 'label-10-ini', label: '10' },
  { test: 'Label_17_Route', name: 'label-17-route', label: '17' },
  { test: 'Label_18_POX', name: 'label-18-pox', label: '18' },
  { test: 'Label_22_Compact_OOOI', name: 'label-22-compact-oooi', label: '22' },
  { test: 'Label_24_Movement', name: 'label-24-movement', label: '24' },
  { test: 'Label_25_ETOPS_Winds', name: 'label-25-etops-winds', label: '25' },
  { test: 'Label_26_ETA', name: 'label-26-eta-compact', label: '26' },
  { test: 'Label_2F_Position', name: 'label-2f-position', label: '2F' },
  { test: 'Label_33_TakeoffPerf', name: 'label-33-takeoff-perf', label: '33' },
  { test: 'Label_36_PosReport', name: 'label-36-pos-report', label: '36' },
  { test: 'Label_39_OpsCoord', name: 'label-39-ops-coord', label: '39' },
  { test: 'Label_3L_Position', name: 'label-3l-position', label: '3L' },
  { test: 'Label_41_Fault', name: 'label-41-fault', label: '41' },
  { test: 'Label_52_AGM', name: 'label-52-agm', label: '52' },
  { test: 'Label_5U_WXR', name: 'label-5u-wxr', label: '5U' },
  { test: 'Label_5Z_AA', name: 'label-5z-aa', label: '5Z' },
  { test: 'Label_81_MVA', name: 'label-81-mva', label: '81' },
  { test: 'Label_A0_AFN', name: 'label-a0-afn', label: 'A0' },
  { test: 'Label_A3_PDC', name: 'label-a3-pdc', label: 'A3' },
  { test: 'Label_A6_ADS', name: 'label-a6-ads', label: 'A6' },
  { test: 'Label_A9_DAI', name: 'label-a9-dai', label: 'A9' },
  { test: 'Label_AA_CPDLC', name: 'label-aa-cpdlc', label: 'AA' },
  { test: 'Label_B0_AFN', name: 'label-b0-afn', label: 'B0' },
  { test: 'Label_B2_OCRA', name: 'label-b2-ocra', label: 'B2' },
  { test: 'Label_B9_ATIS_Request', name: 'label-b9-atis-request', label: 'B9' },
  { test: 'Label_BA_CPDLC', name: 'label-ba-cpdlc', label: 'BA' },
  { test: 'Label_C1_Loadsheet', name: 'label-c1-loadsheet', label: 'C1' },
  { test: 'Label_H2_AMDAR', name: 'label-h2-amdar', label: 'H2' },
  { test: 'Label_SA_MediaAdvisory', name: 'label-sa-media-advisory', label: 'SA' },
];

const bucketsDir = path.resolve(__dirname, 'buckets');
const pluginsDir = path.resolve(__dirname, '..', 'lib', 'plugins');

function q(s: string): string {
  // JSON-escape then strip surrounding quotes to keep single-line literals.
  // Fall back to a backtick template literal when the string contains a
  // newline or single quote to stay readable.
  if (s.includes('\n') || s.includes('\r')) {
    const escaped = s
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');
    return '`' + escaped + '`';
  }
  return JSON.stringify(s);
}

function shortPreview(s: string, n = 60): string {
  const one = s.replace(/\s+/g, ' ').trim();
  return one.length > n ? one.slice(0, n) + '…' : one;
}

function generate(target: { test: string; name: string; label: string }): string {
  const bucketPath = path.join(bucketsDir, `${target.test}.json`);
  if (!fs.existsSync(bucketPath)) return '';
  const bucket: Bucket = JSON.parse(fs.readFileSync(bucketPath, 'utf8'));
  const entries = bucket.entries || [];

  const lines: string[] = [];
  lines.push(`import { MessageDecoder } from '../MessageDecoder';`);
  lines.push(`import { ${target.test} } from './${target.test}';`);
  lines.push(``);
  lines.push(`describe('${target.test}', () => {`);
  lines.push(`  let plugin: ${target.test};`);
  lines.push(``);
  lines.push(`  beforeEach(() => {`);
  lines.push(`    const decoder = new MessageDecoder();`);
  lines.push(`    plugin = new ${target.test}(decoder);`);
  lines.push(`  });`);
  lines.push(``);
  lines.push(`  test('exposes name and qualifiers', () => {`);
  lines.push(`    expect(plugin.decode).toBeDefined();`);
  lines.push(`    expect(plugin.name).toBe(${q(target.name)});`);
  lines.push(`    expect(plugin.qualifiers).toBeDefined();`);
  lines.push(`    const qualifiers = plugin.qualifiers();`);
  lines.push(`    expect(qualifiers.labels).toEqual([${q(target.label)}]);`);
  lines.push(`  });`);
  lines.push(``);

  lines.push(`  test('reports own plugin name on empty text', () => {`);
  lines.push(`    const decodeResult = plugin.decode({ label: ${q(target.label)}, text: '' });`);
  lines.push(`    expect(decodeResult.decoder.name).toBe(${q(target.name)});`);
  lines.push(`  });`);
  lines.push(``);

  entries.forEach((e, i) => {
    const preview = shortPreview(e.text, 60).replace(/'/g, '’');
    lines.push(
      `  test(${q(`decodes #${i + 1}: ${preview}`)}, () => {`,
    );
    lines.push(`    const decodeResult = plugin.decode({`);
    lines.push(`      label: ${q(e.label)},`);
    lines.push(`      text: ${q(e.text)},`);
    lines.push(`    });`);
    lines.push(`    expect(decodeResult.decoded).toBe(${e.decoded});`);
    lines.push(`    expect(decodeResult.decoder.decodeLevel).toBe(${q(e.decodeLevel)});`);
    lines.push(`    expect(decodeResult.decoder.name).toBe(${q(target.name)});`);
    lines.push(`    expect(decodeResult.formatted.description).toBe(${q(e.description)});`);
    lines.push(`    expect(decodeResult.formatted.items).toHaveLength(${e.items.length});`);
    e.items.forEach((item, j) => {
      lines.push(
        `    expect(decodeResult.formatted.items[${j}]).toEqual({`,
      );
      lines.push(`      type: ${q(item.type)},`);
      lines.push(`      code: ${q(item.code)},`);
      lines.push(`      label: ${q(item.label)},`);
      lines.push(`      value: ${q(item.value)},`);
      lines.push(`    });`);
    });
    lines.push(`  });`);
    lines.push(``);
  });

  lines.push(`});`);
  lines.push(``);
  return lines.join('\n');
}

function main(): void {
  let wrote = 0;
  for (const t of TARGETS) {
    const body = generate(t);
    if (!body) {
      console.log(`SKIP ${t.test} (no bucket)`);
      continue;
    }
    const out = path.join(pluginsDir, `${t.test}.test.ts`);
    fs.writeFileSync(out, body);
    wrote++;
    console.log(`WROTE ${out}`);
  }
  console.log(`DONE wrote=${wrote}`);
}

main();
