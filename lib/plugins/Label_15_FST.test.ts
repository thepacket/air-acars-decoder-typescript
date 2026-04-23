import { MessageDecoder } from '../MessageDecoder';
import { Label_15_FST } from './Label_15_FST';

describe('Label_15_FST', () => {
  let plugin: Label_15_FST;
  const message = { label: '15', text: '' };

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_15_FST(decoder);
  });

  test('matches Label 15 Preamble FST qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-15-fst');
    expect(plugin.qualifiers).toBeDefined();
    expect(plugin.qualifiers()).toEqual({
      labels: ['15'],
      preambles: ['FST01'],
    });
  });

  test('decodes 6-digit lat / 7-digit lon variant (EGKK → KMCO)', () => {
    message.text =
      'FST01EGKKKMCON373488W0756927380 156 495 M53C 4427422721045313002518521710';
    const decodeResult = plugin.decode(message);

    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('partial');
    expect(decodeResult.decoder.name).toBe('label-15-fst');
    expect(decodeResult.formatted.description).toBe('Position Report');

    expect(decodeResult.raw.report_type).toBe('FST');
    expect(decodeResult.raw.report_version).toBe('01');
    expect(decodeResult.raw.departure_icao).toBe('EGKK');
    expect(decodeResult.raw.arrival_icao).toBe('KMCO');

    const pos = decodeResult.raw.position as { latitude: number; longitude: number };
    expect(pos.latitude).toBeCloseTo(37.3488, 4);
    expect(pos.longitude).toBeCloseTo(-75.6927, 4);

    expect(decodeResult.raw.eta).toBe('18:52');
    expect(decodeResult.raw.sta).toBe('17:10');
  });

  test('decodes 5-digit lat / 7-digit lon variant (EGPH → EGLL, analyst example)', () => {
    message.text =
      'FST01EGPHEGLLN51690W0006670 62  28  24     19106      267  05590550';
    const decodeResult = plugin.decode(message);

    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.raw.departure_icao).toBe('EGPH');
    expect(decodeResult.raw.arrival_icao).toBe('EGLL');

    const pos = decodeResult.raw.position as { latitude: number; longitude: number };
    expect(pos.latitude).toBeCloseTo(51.690, 3);
    // Note: analyst stated 0.0667°W but the arithmetic under the
    // width-coupled lat/lon scheme yields 0.667°W (W000667 / 1000).
    expect(pos.longitude).toBeCloseTo(-0.667, 3);

    expect(decodeResult.raw.eta).toBe('05:59');
    expect(decodeResult.raw.sta).toBe('05:50');

    // Wild-guess fields must not be present (per analyst instruction).
    expect(decodeResult.raw.altitude).toBeUndefined();
    expect(decodeResult.raw.ground_speed).toBeUndefined();
    expect(decodeResult.raw.airspeed).toBeUndefined();
    expect(decodeResult.raw.outside_air_temperature).toBeUndefined();
  });

  test('surfaces expected formatted items for the EGPH example', () => {
    message.text =
      'FST01EGPHEGLLN51690W0006670 62  28  24     19106      267  05590550';
    const r = plugin.decode(message);

    expect(r.formatted.items).toEqual(
      expect.arrayContaining([
        { type: 'message_type', code: 'MSGTYP', label: 'Message Type', value: 'Flight Status (FST)' },
        { type: 'report_version', code: 'VER', label: 'Report Sub-version', value: '01' },
        { type: 'eta_time', code: 'ETATIME', label: 'ETA (UTC, HHMM)', value: '05:59' },
        { type: 'sta_time', code: 'STATIME', label: 'Scheduled Time of Arrival (UTC, HHMM)', value: '05:50' },
      ]),
    );
    // Origin/Destination come from ResultFormatter helpers — spot-check their presence.
    const codes = r.formatted.items.map((i) => i.code);
    expect(codes).toContain('ORG');
    expect(codes).toContain('DST');
    expect(codes).toContain('POS');
  });

  test('decodes additional documented samples (LPFR/VIDP/OKBK)', () => {
    const samples = [
      {
        text: 'FST01OKBKEGLLN487840E0048467430  80 284M 58C 4322830030747713682512581215',
        origin: 'OKBK', dest: 'EGLL', lat: 48.7840, lon: 4.8467, eta: '12:58', sta: '12:15',
      },
      {
        text: 'FST01LPFREGKKN38369W0074904280  66  16      5084      428  14281217',
        origin: 'LPFR', dest: 'EGKK', lat: 38.369, lon: -7.490, eta: '14:28', sta: '12:17',
      },
      {
        text: 'FST01VIDPEGLLN531282E0203454380 208 496 M64C 6730026526640716083214431235',
        origin: 'VIDP', dest: 'EGLL', lat: 53.1282, lon: 20.3454, eta: '14:43', sta: '12:35',
      },
    ];
    for (const s of samples) {
      const r = plugin.decode({ label: '15', text: s.text });
      expect(r.decoded).toBe(true);
      expect(r.raw.departure_icao).toBe(s.origin);
      expect(r.raw.arrival_icao).toBe(s.dest);
      const pos = r.raw.position as { latitude: number; longitude: number };
      expect(pos.latitude).toBeCloseTo(s.lat, 3);
      expect(pos.longitude).toBeCloseTo(s.lon, 3);
      expect(r.raw.eta).toBe(s.eta);
      expect(r.raw.sta).toBe(s.sta);
    }
  });

  test('does not decode empty text', () => {
    message.text = '';
    const r = plugin.decode(message);
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
    expect(r.decoder.name).toBe('label-15-fst');
  });

  test('does not decode obviously invalid text', () => {
    message.text = 'INI Bogus message';
    const r = plugin.decode(message);
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
    expect(r.formatted.description).toBe('Position Report');
  });
});
