import { MessageDecoder } from '../MessageDecoder';
import { Label_40_FlightProgress } from './Label_40_FlightProgress';

const SAMPLE = [
  'FLT 2963 PHL-PIT SKD ARR 2321L A PLUS 14 / 2335L PLN / 2259L',
  '        TOT',
  '        CTR',
  '        OUT   0150 0145',
  '        OFF   0202 0139',
  '        ON    0252',
  '        IN    0259',
  '',
  'MXE   0208  157/    0119',
  'PENSY 0212  255/692 0112',
  'FLIRT 0216  260/679 0109',
  'KIPPI 0219  260/679 0106',
  'LARRI 0220  260/678 0105',
  'BEETS 0221  260/678 0104',
  'GRAHM 0225  260/678 0101',
  'VINSE 0225  260/677 0101',
  'LEJOY 0236  159/    0095',
  'PLEEZ 0239  117/    0094',
  'NESTO 0240  100/    0094',
  'DEMME 0241  092/    0093',
  'LMBRT 0242  076/    0093',
  'STILR 0243  065/    0093',
  '',
  '       TXO   AIR  TXI  TOTAL',
  'SKDBLK  26 00.48   07  01.21',
  'FLIPLN  26 00.51   07  01.24',
  'ACTUAL  12',
  '',
  'SKD OUT  0200Z',
  'ACT OUT  0150Z',
  '',
  'RVSM ALT',
  '',
  'CA          STBY          FO',
  '',
  '  ----------    ----------  ----------',
].join('\n');

describe('Label_40_FlightProgress', () => {
  let plugin: Label_40_FlightProgress;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_40_FlightProgress(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-40-flight-progress');
    expect(plugin.qualifiers()).toEqual({ labels: ['40'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '40', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('does not decode unrelated label-40 content', () => {
    const r = plugin.decode({ label: '40', text: 'BOGUS MESSAGE' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes N816AW FLT 2963 PHL-PIT flight progress report', () => {
    const r = plugin.decode({ label: '40', text: SAMPLE });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-40-flight-progress');
    expect(r.formatted.description).toBe('Flight Progress / Following Report');

    // Flight ID + route (confirmed)
    expect(r.raw.flight_number).toBe('2963');
    expect(r.raw.departure_iata).toBe('PHL');
    expect(r.raw.arrival_iata).toBe('PIT');

    // Schedule analysis (confirmed)
    expect(r.raw.scheduled_arrival_local).toBe('2321L');
    expect(r.raw.delay_minutes).toBe(14);
    expect(r.raw.predicted_arrival_local).toBe('2335L');
    expect(r.raw.planned_arrival_local).toBe('2259L');

    // OOOI event times (confirmed)
    expect(r.raw.out_actual_utc).toBe('0150');
    expect(r.raw.out_planned_utc).toBe('0145');
    expect(r.raw.off_actual_utc).toBe('0202');
    expect(r.raw.off_planned_utc).toBe('0139');
    expect(r.raw.on_actual_utc).toBe('0252');
    expect(r.raw.in_actual_utc).toBe('0259');

    // Waypoints (confirmed names + times; interpreted wind direction)
    expect(r.raw.waypoints).toHaveLength(14);
    expect(r.raw.waypoints[0]).toMatchObject({ name: 'MXE', time_utc: '0208', wind_direction_deg: 157 });
    expect(r.raw.waypoints[1]).toMatchObject({ name: 'PENSY', time_utc: '0212', wind_direction_deg: 255 });
    expect(r.raw.waypoints[13]).toMatchObject({ name: 'STILR', time_utc: '0243', wind_direction_deg: 65 });

    // On-time analysis (confirmed columns)
    expect(r.raw.skdblk_taxi_out_min).toBe(26);
    expect(r.raw.skdblk_air_time).toBe('00.48');
    expect(r.raw.skdblk_taxi_in_min).toBe(7);
    expect(r.raw.skdblk_block_time).toBe('01.21');
    expect(r.raw.flipln_taxi_out_min).toBe(26);
    expect(r.raw.flipln_air_time).toBe('00.51');

    // Actual taxi-out (interpreted)
    expect(r.raw.actual_taxi_out_min).toBe(12);

    // SKD/ACT OUT push times (interpreted)
    expect(r.raw.scheduled_out_utc).toBe('0200');
    expect(r.raw.actual_out_utc).toBe('0150');

    // RVSM section (confirmed present, blank)
    expect(r.raw.rvsm_alt_present).toBe(true);

    // Formatted items
    const codes = r.formatted.items.map(i => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('FLIGHT');
    expect(codes).toContain('ORG');
    expect(codes).toContain('DST');
    expect(codes).toContain('SKDARR');
    expect(codes).toContain('DELAY');
    expect(codes).toContain('ETA');
    expect(codes).toContain('PLN');
    expect(codes).toContain('OUT');
    expect(codes).toContain('OFF');
    expect(codes).toContain('ON');
    expect(codes).toContain('IN');
    expect(codes).toContain('WPTS');
    expect(codes).toContain('SKDBLK');
    expect(codes).toContain('FLIPLN');
    expect(codes).toContain('ACTTXO');
    expect(codes).toContain('SKDOUT');
    expect(codes).toContain('ACTOUT');
    expect(codes).toContain('RVSM');

    // Wind speed sub-field is NOT extracted (wild guess)
    expect(r.raw.waypoints[1].wind_speed_kt).toBeUndefined();
  });

  test('decodes minimal flight progress (header only, no waypoints)', () => {
    const r = plugin.decode({ label: '40', text: 'FLT 100 JFK-LAX SKD ARR 1430L A PLUS 5 / 1435L PLN / 1425L' });
    expect(r.decoded).toBe(true);
    expect(r.raw.flight_number).toBe('100');
    expect(r.raw.departure_iata).toBe('JFK');
    expect(r.raw.arrival_iata).toBe('LAX');
    expect(r.raw.delay_minutes).toBe(5);
    expect(r.raw.waypoints).toBeUndefined();
  });
});
