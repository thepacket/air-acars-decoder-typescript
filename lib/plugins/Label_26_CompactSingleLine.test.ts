import { MessageDecoder } from '../MessageDecoder';
import { Label_26_CompactSingleLine } from './Label_26_CompactSingleLine';

describe('Label_26_CompactSingleLine', () => {
  let plugin: Label_26_CompactSingleLine;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_26_CompactSingleLine(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-26-compact-single-line');
    expect(plugin.qualifiers()).toEqual({ labels: ['26'] });
  });

  test('decodes the AF7321 analyst example (LFMN → LFPG)', () => {
    const r = plugin.decode({
      label: '26',
      text: '0521LFMNAF7321/230526LFPG08R',
    });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-26-compact-single-line');
    expect(r.formatted.description).toBe(
      'Compact ETA / Arrival Report (single-line)',
    );

    expect(r.raw.flight_number).toBe('AF7321');
    expect(r.raw.departure_icao).toBe('LFMN');
    expect(r.raw.arrival_icao).toBe('LFPG');
    expect(r.raw.day).toBe(23);
    expect(r.raw.report_time).toBe('05:21');
    expect(r.raw.eta).toBe('05:26');
    expect(r.raw.arrival_runway).toBe('08R');
    // Month and year bytes are not in this variant.
    expect(r.raw.month).toBeUndefined();
    expect(r.raw.year).toBeUndefined();
  });

  test('decodes the AF1055 analyst example (DAAG → LFPG)', () => {
    const r = plugin.decode({
      label: '26',
      text: '0746DAAGAF1055/230801LFPG08L',
    });

    expect(r.decoded).toBe(true);
    expect(r.raw.flight_number).toBe('AF1055');
    expect(r.raw.departure_icao).toBe('DAAG');
    expect(r.raw.arrival_icao).toBe('LFPG');
    expect(r.raw.day).toBe(23);
    expect(r.raw.report_time).toBe('07:46');
    expect(r.raw.eta).toBe('08:01');
    expect(r.raw.arrival_runway).toBe('08L');
  });

  test('surfaces expected formatted items', () => {
    const r = plugin.decode({
      label: '26',
      text: '0521LFMNAF7321/230526LFPG08R',
    });

    expect(r.formatted.items).toEqual(
      expect.arrayContaining([
        { type: 'message_type', code: 'MSGTYP', label: 'Message Type', value: 'Compact ETA / Arrival Report (single-line)' },
        { type: 'report_time', code: 'RPTTIME', label: 'Report Time (UTC, HHMM)', value: '05:21' },
        { type: 'day', code: 'DAY', label: 'Day of Month', value: '23' },
        { type: 'eta_time', code: 'ETATIME', label: 'ETA (UTC, HHMM)', value: '05:26' },
        { type: 'arrival_runway', code: 'ARRRWY', label: 'Arrival Runway', value: '08R' },
      ]),
    );
  });

  test('accepts a runway without L/R/C suffix', () => {
    const r = plugin.decode({
      label: '26',
      text: '1205KJFKAF0999/010100EGLL09',
    });
    expect(r.decoded).toBe(true);
    expect(r.raw.departure_icao).toBe('KJFK');
    expect(r.raw.arrival_icao).toBe('EGLL');
    expect(r.raw.arrival_runway).toBe('09');
    expect(r.raw.day).toBe(1);
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '26', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
    expect(r.decoder.name).toBe('label-26-compact-single-line');
  });

  test('does not decode obviously invalid text', () => {
    const r = plugin.decode({ label: '26', text: 'Bogus message' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('rejects out-of-range report time', () => {
    const r = plugin.decode({
      label: '26',
      text: '2570LFMNAF7321/230526LFPG08R',
    });
    expect(r.decoded).toBe(false);
  });

  test('rejects out-of-range ETA', () => {
    const r = plugin.decode({
      label: '26',
      text: '0521LFMNAF7321/232670LFPG08R',
    });
    expect(r.decoded).toBe(false);
  });

  test('rejects out-of-range day', () => {
    const r = plugin.decode({
      label: '26',
      text: '0521LFMNAF7321/320526LFPG08R',
    });
    expect(r.decoded).toBe(false);
  });
});
