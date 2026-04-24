import { MessageDecoder } from '../MessageDecoder';
import { Label_4R_ACA } from './Label_4R_ACA';

describe('Label_4R_ACA', () => {
  let plugin: Label_4R_ACA;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_4R_ACA(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-4r-aca');
    expect(plugin.qualifiers()).toEqual({ labels: ['4R'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '4R', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('does not decode unrecognized body', () => {
    const r = plugin.decode({ label: '4R', text: 'BOGUS CONTENT' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes RV1667 RSW→YYZ departure report', () => {
    const text = 'C32AA1         1OSAFL RV1667/23/24 RSW YYZ 283 0149Z 369/0071/0028 1          ';
    const r = plugin.decode({ label: '4R', text });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-4r-aca');
    expect(r.formatted.description).toBe('ACA Departure / In-flight Report');

    // Subtype code (interpreted)
    expect(r.raw.report_subtype).toBe('OSAFL');

    // Flight number (confirmed)
    expect(r.raw.flight_number).toBe('RV1667');

    // Origin / destination (confirmed IATA 3-letter codes)
    expect(r.raw.departure_iata).toBe('RSW');
    expect(r.raw.arrival_iata).toBe('YYZ');

    // Report time 01:49 UTC (confirmed) → 6540 seconds
    expect(r.raw.message_timestamp).toBe(6540);

    // Heading (interpreted)
    expect(r.raw.heading).toBe(283);

    // Formatted item codes
    const codes = r.formatted.items.map((i) => i.code);
    expect(codes).toContain('FLIGHT');
    expect(codes).toContain('ORG');
    expect(codes).toContain('DST');
    expect(codes).toContain('TIMESTAMP');
    expect(codes).toContain('HDG');
    expect(codes).toContain('MSGTYP');

    // Trailing digit (1) is wild guess — not extracted
    expect(r.raw.status_flag).toBeUndefined();
  });

  test('decodes AC0559 LAX→YVR in-flight report (airspeed variant, status flag A)', () => {
    const text = 'C32AAA         1OSAFL AC0559/23/24 LAX YVR 417 0351Z 100/----/0064 A';
    const r = plugin.decode({ label: '4R', text });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.raw.report_subtype).toBe('OSAFL');

    // Flight number (confirmed)
    expect(r.raw.flight_number).toBe('AC0559');

    // Origin / destination (confirmed IATA)
    expect(r.raw.departure_iata).toBe('LAX');
    expect(r.raw.arrival_iata).toBe('YVR');

    // Report time 03:51 UTC (confirmed) → 13860 seconds
    expect(r.raw.message_timestamp).toBe(13860);

    // Airspeed — value > 360, so interpreted as airspeed not heading
    expect(r.raw.airspeed).toBe(417);
    expect(r.raw.heading).toBeUndefined();

    // Trailing letter A — interpreted as status flag
    expect(r.raw.status_flag).toBe('A');

    // Data triplet (100/----/0064) is wild guess — not extracted
    expect(r.raw.altitude).toBeUndefined();

    const codes = r.formatted.items.map((i) => i.code);
    expect(codes).toContain('ASPD');   // airspeed code from ResultFormatter
    expect(codes).toContain('STATUS');
    expect(codes).not.toContain('HDG');
  });
});
