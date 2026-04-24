import { MessageDecoder } from '../MessageDecoder';
import { Label_4S_ACA_Maint } from './Label_4S_ACA_Maint';

describe('Label_4S_ACA_Maint', () => {
  let plugin: Label_4S_ACA_Maint;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_4S_ACA_Maint(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-4s-aca-maint');
    expect(plugin.qualifiers()).toEqual({ labels: ['4S'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '4S', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('does not decode unrelated content (no airport/runway pattern)', () => {
    const r = plugin.decode({ label: '4S', text: 'BOGUS / DATA / HERE' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes C-GEHY AC0571 YVR 26R maintenance report', () => {
    const text =
      'CFWTL / 522 / YVR / 26R / L / 080 / 05 /   /   /    /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   / 6 / 6 / 6 /        /';

    const r = plugin.decode({ label: '4S', text });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-4s-aca-maint');
    expect(r.formatted.description).toBe('ACA Maintenance Report');

    // Routing code (interpreted)
    expect(r.raw.routing_code).toBe('CFWTL');

    // Sequence number (interpreted)
    expect(r.raw.sequence_number).toBe(522);

    // Departure airport (confirmed IATA)
    expect(r.raw.departure_iata).toBe('YVR');

    // Departure runway (confirmed designator)
    expect(r.raw.departure_runway).toBe('26R');

    // Performance parameters (interpreted)
    expect(r.raw.perf_param_1).toBe('080');
    expect(r.raw.perf_param_2).toBe('05');

    // Wild guesses are NOT extracted
    expect(r.raw.l_designator).toBeUndefined();
    expect(r.raw.trailing_codes).toBeUndefined();

    // Formatted codes
    const codes = r.formatted.items.map(i => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('ROUTE');
    expect(codes).toContain('SEQ');
    expect(codes).toContain('ORG');
    expect(codes).toContain('RWY');
    expect(codes).toContain('PERF1');
    expect(codes).toContain('PERF2');
  });

  test('decodes minimal report with only required fields', () => {
    const r = plugin.decode({ label: '4S', text: 'ADDR / 001 / YYZ / 05L / X / 060 / 10 / / / /' });
    expect(r.decoded).toBe(true);
    expect(r.raw.departure_iata).toBe('YYZ');
    expect(r.raw.departure_runway).toBe('05L');
    expect(r.raw.perf_param_1).toBe('060');
    expect(r.raw.perf_param_2).toBe('10');
  });
});
