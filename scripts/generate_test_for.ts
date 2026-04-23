/**
 * One-shot test generator for a single plugin.
 *
 *   usage: ts-node scripts/generate_test_for.ts <PluginClass> <label> <bucketPath>
 *
 * Reads messages from `bucketPath` (JSON array of {id,label,text}), runs each
 * through the plugin, and emits `lib/plugins/<PluginClass>.test.ts` with one
 * assertion block per entry — mirroring the style of `generate_tests.ts`.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import { MessageDecoder } from '../lib/MessageDecoder';
import * as Plugins from '../lib/plugins/official';

function q(s: string): string {
  // Use JSON.stringify unconditionally so \r\n and other control chars are
  // escaped as \\r\\n (not dropped by a template-literal rewrite).
  return JSON.stringify(s);
}

function shortPreview(s: string, n = 60): string {
  return s.replace(/\s+/g, ' ').trim().slice(0, n) + (s.length > n ? '…' : '');
}

function main(): void {
  const [, , className, label, bucketPath] = process.argv;
  if (!className || !label || !bucketPath) {
    console.error('usage: generate_test_for.ts <PluginClass> <label> <bucketPath>');
    process.exit(2);
  }
  const cls = (Plugins as any)[className];
  if (!cls) {
    console.error(`unknown plugin class: ${className}`);
    process.exit(2);
  }
  const bucket = JSON.parse(fs.readFileSync(bucketPath, 'utf8'));
  const entries: { id: string | number; text: string }[] =
    bucket.entries ?? bucket;

  const decoder = new MessageDecoder();
  const plugin = new cls(decoder);

  const name: string = plugin.name;

  const lines: string[] = [];
  lines.push(`import { MessageDecoder } from '../MessageDecoder';`);
  lines.push(`import { ${className} } from './${className}';`);
  lines.push(``);
  lines.push(`describe('${className}', () => {`);
  lines.push(`  let plugin: ${className};`);
  lines.push(``);
  lines.push(`  beforeEach(() => {`);
  lines.push(`    const decoder = new MessageDecoder();`);
  lines.push(`    plugin = new ${className}(decoder);`);
  lines.push(`  });`);
  lines.push(``);
  lines.push(`  test('exposes name and qualifiers', () => {`);
  lines.push(`    expect(plugin.decode).toBeDefined();`);
  lines.push(`    expect(plugin.name).toBe(${q(name)});`);
  lines.push(`    const qualifiers = plugin.qualifiers();`);
  lines.push(`    expect(qualifiers.labels).toEqual([${q(label)}]);`);
  lines.push(`  });`);
  lines.push(``);
  lines.push(`  test('reports own plugin name on empty text', () => {`);
  lines.push(`    const r = plugin.decode({ label: ${q(label)}, text: '' });`);
  lines.push(`    expect(r.decoder.name).toBe(${q(name)});`);
  lines.push(`  });`);
  lines.push(``);

  let i = 0;
  for (const e of entries) {
    if (!e.text || !e.text.trim()) continue;
    i++;
    let r: any;
    try {
      r = plugin.decode({ label, text: e.text });
    } catch (err) {
      console.error(`decode threw on entry ${i}: ${(err as Error).message}`);
      continue;
    }
    const preview = shortPreview(e.text, 60).replace(/'/g, '’');
    lines.push(`  test(${q(`decodes #${i}: ${preview}`)}, () => {`);
    lines.push(`    const r = plugin.decode({`);
    lines.push(`      label: ${q(label)},`);
    lines.push(`      text: ${q(e.text)},`);
    lines.push(`    });`);
    lines.push(`    expect(r.decoded).toBe(${!!r.decoded});`);
    lines.push(`    expect(r.decoder.decodeLevel).toBe(${q(r.decoder?.decodeLevel ?? 'none')});`);
    lines.push(`    expect(r.decoder.name).toBe(${q(name)});`);
    lines.push(`    expect(r.formatted.description).toBe(${q(r.formatted?.description ?? '')});`);
    lines.push(`    expect(r.formatted.items).toEqual(${JSON.stringify(r.formatted?.items ?? [], null, 2).replace(/\n/g, '\n    ')});`);
    lines.push(`  });`);
    lines.push(``);
  }

  lines.push(`});`);
  lines.push(``);

  const outPath = path.resolve(__dirname, '..', 'lib', 'plugins', `${className}.test.ts`);
  fs.writeFileSync(outPath, lines.join('\n'));
  console.log(`WROTE ${outPath} (${i} sample tests)`);
}

main();
