import { MessageDecoder } from '../MessageDecoder';
import { Label_4P_PDC } from './Label_4P_PDC';

const SAMPLE = [
  '-// ATC PA01 YYZOWAC 24APR/0220          C-GEGI/941/AC0810',
  'TIMESTAMP 24APR26 02:20',
  '*PRE-DEPARTURE CLEARANCE*',
  'FLT ACA810    CYYZ',
  'H/A333/W FILED FL370',
  'XPRD 0565',
  'USE SID DEDKI5',
  'DEPARTURE RUNWAY 05',
  'DESTINATION LPPT',
  '*** ADVISE ATC IF RUNUP REQUIRED ***',
  'CONTACT CLEARANCE WITH IDENTIFIER 328W',
  'DEDKI5 RAKAM TOPPS N79B RAFIN',
  '4500N05000W 4530N04000W',
  '4600N03000W // FILED ROUTE',
  'END',
].join('\n');

describe('Label_4P_PDC', () => {
  let plugin: Label_4P_PDC;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_4P_PDC(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-4p-pdc');
    expect(plugin.qualifiers()).toEqual({ labels: ['4P'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '4P', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('does not decode non-PDC label-4P content', () => {
    const r = plugin.decode({ label: '4P', text: 'SOME OTHER MESSAGE' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes ACA810 CYYZ→LPPT PDC', () => {
    const r = plugin.decode({ label: '4P', text: SAMPLE });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('full');
    expect(r.decoder.name).toBe('label-4p-pdc');
    expect(r.formatted.description).toBe('Pre-Departure Clearance (PDC)');

    // Tail (confirmed)
    expect(r.raw.tail).toBe('C-GEGI');

    // Flight number from header (confirmed)
    expect(r.raw.flight_number).toBe('AC0810');

    // ICAO flight number from FLT line (confirmed)
    expect(r.raw.icao_flight_number).toBe('ACA810');

    // Departure airport (confirmed)
    expect(r.raw.departure_icao).toBe('CYYZ');

    // Destination (confirmed)
    expect(r.raw.arrival_icao).toBe('LPPT');

    // Clearance timestamp (confirmed)
    expect(r.raw.clearance_date).toBe('24APR26');
    expect(r.raw.clearance_time_utc).toBe('02:20');

    // Aircraft type (confirmed)
    expect(r.raw.aircraft_type).toBe('A333');

    // Filed altitude (confirmed)
    expect(r.raw.filed_altitude).toBe('FL370');

    // Squawk (confirmed)
    expect(r.raw.squawk).toBe('0565');

    // SID (confirmed)
    expect(r.raw.sid).toBe('DEDKI5');

    // Departure runway (confirmed)
    expect(r.raw.departure_runway).toBe('05');

    // Clearance identifier (confirmed)
    expect(r.raw.clearance_identifier).toBe('328W');

    // Runup advisory (confirmed)
    expect(r.raw.runup_advisory).toBe(true);

    // Route text (confirmed; N79B classification not asserted)
    expect(r.raw.route).toContain('DEDKI5');
    expect(r.raw.route).toContain('RAKAM');
    expect(r.raw.route).toContain('4500N05000W');
    expect(r.raw.route).not.toContain('FILED ROUTE');
    expect(r.raw.route).not.toContain('END');

    // Interpreted fields
    expect(r.raw.atc_facility).toBe('OWAC');
    expect(r.raw.pdc_sequence).toBe('PA01');
    expect(r.raw.pdc_reference).toBe('941');
    expect(r.raw.wake_category).toBe('H');
    expect(r.raw.equipment_suffix).toBe('W');

    // Formatted item codes
    const codes = r.formatted.items.map(i => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('FACILITY');
    expect(codes).toContain('CLRTIME');
    expect(codes).toContain('TAIL');
    expect(codes).toContain('FLIGHT');
    expect(codes).toContain('ORG');
    expect(codes).toContain('DST');
    expect(codes).toContain('ACTYPE');
    expect(codes).toContain('FILALT');
    expect(codes).toContain('XPRD');
    expect(codes).toContain('SID');
    expect(codes).toContain('RWY');
    expect(codes).toContain('CLRID');
    expect(codes).toContain('ROUTE');
    expect(codes).toContain('RUNUP');
  });
});
