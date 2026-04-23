import { MessageDecoder } from '../MessageDecoder';
import { Label_36_PosReport } from './Label_36_PosReport';

describe('Label_36_PosReport', () => {
  let plugin: Label_36_PosReport;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_36_PosReport(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-36-pos-report");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["36"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "36", text: '' });
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
  });

  test("decodes #1: 71,M,2228,5,2,KLGA,39.60,-76.18,39.60,-76.18,34,331063,-53,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2228,5,2,KLGA,39.60,-76.18,39.60,-76.18,34,331063,-53,64.9,8423,35,36,463,455,7884FCB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:28:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.600 N, 76.180 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "34000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-53 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:28",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.6, -76.18",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "331° @ 63 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "64.9",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "463 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "455 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7884FCB",
    });
  });

  test("decodes #2: 71,M,2228,5,2,KLGA,39.60,-76.18,39.60,-76.18,34,331063,-53,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2228,5,2,KLGA,39.60,-76.18,39.60,-76.18,34,331063,-53,64.9,8423,35,36,463,455,7884FCB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:28:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.600 N, 76.180 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "34000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-53 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:28",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.6, -76.18",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "331° @ 63 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "64.9",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "463 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "455 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7884FCB",
    });
  });

  test("decodes #3: 71,M,2225,5,3,KORD,39.93,-85.44,39.92,-85.47,26,340022,-32,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2225,5,3,KORD,39.93,-85.44,39.92,-85.47,26,340022,-32,73.0,7454,0,10,320,320,529A87F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:25:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KORD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.930 N, 85.440 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "26000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-32 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:25",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.92, -85.47",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "340° @ 22 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "73",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "320 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "320 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "529A87F",
    });
  });

  test("decodes #4: 71,M,2222,3,3,KPWM,42.63,-86.33,42.64,-86.32,19,335021,-18,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2222,3,3,KPWM,42.63,-86.33,42.64,-86.32,19,335021,-18,73.0,5956,999,10,400,405,650F30B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KPWM",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "42.630 N, 86.330 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "19000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-18 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "42.64, -86.32",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "335° @ 21 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "73",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "400 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "405 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "650F30B",
    });
  });

  test("decodes #5: 71,M,2222,3,3,KPWM,42.63,-86.33,42.64,-86.32,19,335021,-18,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2222,3,3,KPWM,42.63,-86.33,42.64,-86.32,19,335021,-18,73.0,5956,999,10,400,405,650F30B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KPWM",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "42.630 N, 86.330 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "19000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-18 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "42.64, -86.32",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "335° @ 21 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "73",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "400 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "405 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "650F30B",
    });
  });

  test("decodes #6: 71,M,2221,1,1,KBNA,36.20,-86.06,36.19,-86.08,19,337009,-16,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2221,1,1,KBNA,36.20,-86.06,36.19,-86.08,19,337009,-16,65.6,8202,45,31,362,362,580C8BE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:21:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "36.200 N, 86.060 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "19000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-16 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:21",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "1",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "36.19, -86.08",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "337° @ 9 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "65.6",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "362 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "362 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "580C8BE",
    });
  });

  test("decodes #7: 71,M,2220,5,2,KLGA,38.91,-79.03,38.93,-78.99,36,337064,-56,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2220,5,2,KLGA,38.91,-79.03,38.93,-78.99,36,337064,-56,70.1,9331,30,36,454,454,791D07B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:20:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.910 N, 79.030 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "36000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-56 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:20",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "38.93, -78.99",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "337° @ 64 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "70.1",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "454 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "454 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "791D07B",
    });
  });

  test("decodes #8: 71,M,2220,5,2,KLGA,38.91,-79.03,38.93,-78.99,36,337064,-56,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2220,5,2,KLGA,38.91,-79.03,38.93,-78.99,36,337064,-56,70.1,9331,30,36,454,454,791D07B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:20:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.910 N, 79.030 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "36000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-56 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:20",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "38.93, -78.99",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "337° @ 64 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "70.1",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "454 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "454 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "791D07B",
    });
  });

  test("decodes #9: 71,M,2219,2,1,KLGA,40.33,-75.02,40.33,-75.01,25,308046,-35,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2219,2,1,KLGA,40.33,-75.02,40.33,-75.01,25,308046,-35,65.7,9211,35,36,406,420,6990A9B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:19:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.330 N, 75.020 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "25000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-35 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:19",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.33, -75.01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "308° @ 46 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "65.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "406 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "420 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "6990A9B",
    });
  });

  test("decodes #10: 71,M,2219,2,1,KLGA,40.33,-75.02,40.33,-75.01,25,308046,-35,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,2219,2,1,KLGA,40.33,-75.02,40.33,-75.01,25,308046,-35,65.7,9211,35,36,406,420,6990A9B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:19:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.330 N, 75.020 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "25000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-35 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:19",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.33, -75.01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "308° @ 46 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "65.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "406 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "420 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "6990A9B",
    });
  });

  test("decodes #11: 71,M,0139,2,1,KLGA,39.87,-76.84,39.87,-76.84,32,332075,-49,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,2,1,KLGA,39.87,-76.84,39.87,-76.84,32,332075,-49,74.6,10411,30,32,432,433,7421ED8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.870 N, 76.840 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-49 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.87, -76.84",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "332° @ 75 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "74.6",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "432 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "433 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7421ED8",
    });
  });

  test("decodes #12: 71,M,0139,2,1,KLGA,39.87,-76.84,39.87,-76.84,32,332075,-49,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,2,1,KLGA,39.87,-76.84,39.87,-76.84,32,332075,-49,74.6,10411,30,32,432,433,7421ED8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.870 N, 76.840 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-49 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.87, -76.84",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "332° @ 75 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "74.6",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "432 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "433 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7421ED8",
    });
  });

  test("decodes #13: 71,M,0139,5,2,KLGA,40.83,-76.39,40.82,-76.35,30,333071,-44,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,5,2,KLGA,40.83,-76.39,40.82,-76.35,30,333071,-44,61.2,7312,99,30,407,453,767B018",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.830 N, 76.390 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "30000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-44 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.82, -76.35",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "333° @ 71 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "61.2",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "407 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "453 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "767B018",
    });
  });

  test("decodes #14: 71,M,0139,5,2,KLGA,40.83,-76.39,40.82,-76.35,30,333071,-44,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,5,2,KLGA,40.83,-76.39,40.82,-76.35,30,333071,-44,61.2,7312,99,30,407,453,767B018",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.830 N, 76.390 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "30000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-44 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.82, -76.35",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "333° @ 71 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "61.2",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "407 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "453 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "767B018",
    });
  });

  test("decodes #15: 71,M,0139,5,2,KLGA,40.83,-76.39,40.82,-76.35,30,333071,-44,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,5,2,KLGA,40.83,-76.39,40.82,-76.35,30,333071,-44,61.2,7312,99,30,407,453,767B018",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.830 N, 76.390 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "30000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-44 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.82, -76.35",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "333° @ 71 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "61.2",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "407 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "453 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "767B018",
    });
  });

  test("decodes #16: 71,M,0139,1,1,KLGA,39.89,-76.80,39.90,-76.76,32,332075,-49,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,1,1,KLGA,39.89,-76.80,39.90,-76.76,32,332075,-49,74.6,10433,30,32,432,434,743D1DF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.890 N, 76.800 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-49 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "1",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.9, -76.76",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "332° @ 75 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "74.6",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "432 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "434 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "743D1DF",
    });
  });

  test("decodes #17: 71,M,0139,1,1,KLGA,39.89,-76.80,39.90,-76.76,32,332075,-49,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,1,1,KLGA,39.89,-76.80,39.90,-76.76,32,332075,-49,74.6,10433,30,32,432,434,743D1DF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.890 N, 76.800 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-49 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "1",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.9, -76.76",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "332° @ 75 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "74.6",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "432 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "434 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "743D1DF",
    });
  });

  test("decodes #18: 71,M,0139,3,3,KBNA,38.59,-78.31,38.58,-78.37,19,335031,-21,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0139,3,3,KBNA,38.59,-78.31,38.58,-78.37,19,335031,-21,62.0,4698,16,10,383,377,6094294",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.590 N, 78.310 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "19000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-21 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:39",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "38.58, -78.37",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "335° @ 31 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "62",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "383 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "377 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "6094294",
    });
  });

  test("decodes #19: 28,E,23APR26,013918,N 38.735,W 75.029,36990, 10080,KFLL,KHPN…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "28,E,23APR26,013918,N 38.735,W 75.029,36990, 10080,KFLL,KHPN,KHPN,16/,34/,,,,,,,,0,0,0,0,0,0,0,,109.9,007.4,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: 28,E,23APR26,013918,N 38.735,W 75.029,36990, 10080,KFLL,KHPN…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "28,E,23APR26,013918,N 38.735,W 75.029,36990, 10080,KFLL,KHPN,KHPN,16/,34/,,,,,,,,0,0,0,0,0,0,0,,109.9,007.4,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: 71,M,0137,3,3,KLGA,43.16,-86.57,43.16,-86.53,19,327020,-17,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0137,3,3,KLGA,43.16,-86.57,43.16,-86.53,19,327020,-17,65.4,5926,16,10,366,376,603BA32",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.160 N, 86.570 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "19000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-17 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.16, -86.53",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "327° @ 20 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "65.4",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "366 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "376 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "603BA32",
    });
  });

  test("decodes #22: 71,M,0137,3,3,KLGA,43.16,-86.57,43.16,-86.53,19,327020,-17,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0137,3,3,KLGA,43.16,-86.57,43.16,-86.53,19,327020,-17,65.4,5926,16,10,366,376,603BA32",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.160 N, 86.570 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "19000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-17 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.16, -86.53",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "327° @ 20 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "65.4",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "366 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "376 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "603BA32",
    });
  });

  test("decodes #23: 1,0,0,0,10,00,09,02,09,00,06,02,04,00,00,00000,00000,00000,0…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: `1,0,0,0,10,00,09,02,09,00,06,02,04,00,00,00000,00000,00000,00000,00000,7E89
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: 23APR26,013636,EI-DUZ N 41.943,W 72.006,34399 ------, 457250", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: ` 
23APR26,013636,EI-DUZ
N 41.943,W 72.006,34399
------,  457250`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: 28,E,23APR26,013524,N 34.182,W 77.968,35004, 9160,KFLL,KRIC,…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "28,E,23APR26,013524,N 34.182,W 77.968,35004,  9160,KFLL,KRIC,KRIC,34/,/,,,,,,,,0,0,0,0,0,0,0,,129.4,007.0,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: 23APR26,013506,EI-XLR N 42.320,W 71.108,32999 ------, 468375", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: ` 
23APR26,013506,EI-XLR
N 42.320,W 71.108,32999
------,  468375`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: 23APR26,013506,EI-XLR N 42.320,W 71.108,32999 ------, 468375", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: ` 
23APR26,013506,EI-XLR
N 42.320,W 71.108,32999
------,  468375`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: 71,M,0134,2,1,CYYZ,43.73,-80.60,43.73,-80.55,22,312050,-27,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,2,1,CYYZ,43.73,-80.60,43.73,-80.55,22,312050,-27,70.5,8964,30,32,338,376,615BBA1",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.730 N, 80.600 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "22000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-27 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.73, -80.55",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "312° @ 50 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "70.5",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "338 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "376 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "615BBA1",
    });
  });

  test("decodes #29: 71,M,0134,2,1,CYYZ,43.73,-80.60,43.73,-80.55,22,312050,-27,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,2,1,CYYZ,43.73,-80.60,43.73,-80.55,22,312050,-27,70.5,8964,30,32,338,376,615BBA1",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.730 N, 80.600 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "22000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-27 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.73, -80.55",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "312° @ 50 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "70.5",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "338 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "376 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "615BBA1",
    });
  });

  test("decodes #30: 71,M,0134,5,3,KCVG,41.03,-73.16,41.02,-73.19,26,317056,-40,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,5,3,KCVG,41.03,-73.16,41.02,-73.19,26,317056,-40,68.7,6413,30,10,431,425,713B90B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "41.030 N, 73.160 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "26000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-40 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "41.02, -73.19",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "317° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "431 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "425 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "713B90B",
    });
  });

  test("decodes #31: 71,M,0134,5,3,KCVG,41.03,-73.16,41.02,-73.19,26,317056,-40,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,5,3,KCVG,41.03,-73.16,41.02,-73.19,26,317056,-40,68.7,6413,30,10,431,425,713B90B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "41.030 N, 73.160 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "26000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-40 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "41.02, -73.19",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "317° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "431 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "425 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "713B90B",
    });
  });

  test("decodes #32: 71,M,0134,5,3,KCVG,41.03,-73.16,41.02,-73.19,26,317056,-40,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,5,3,KCVG,41.03,-73.16,41.02,-73.19,26,317056,-40,68.7,6413,30,10,431,425,713B90B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "41.030 N, 73.160 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "26000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-40 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "41.02, -73.19",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "317° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "431 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "425 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "713B90B",
    });
  });

  test("decodes #33: 71,M,0134,1,1,CYYZ,43.73,-80.57,43.73,-80.55,22,314049,-26,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,1,1,CYYZ,43.73,-80.57,43.73,-80.55,22,314049,-26,70.5,8980,30,32,337,373,609D431",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.730 N, 80.570 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "22000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-26 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "1",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.73, -80.55",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "314° @ 49 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "70.5",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "337 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "373 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "609D431",
    });
  });

  test("decodes #34: 71,M,0134,1,1,CYYZ,43.73,-80.57,43.73,-80.55,22,314049,-26,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0134,1,1,CYYZ,43.73,-80.57,43.73,-80.55,22,314049,-26,70.5,8980,30,32,337,373,609D431",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.730 N, 80.570 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "22000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-26 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "1",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.73, -80.55",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "314° @ 49 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "70.5",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "337 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "373 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "609D431",
    });
  });

  test("decodes #35: 1 *03 10200 *13 8900> *21 10200 *31 8900 48D3", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: `1
*03               10200
*13                8900>
*21               10200
*31                8900
48D3
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: 1 *03 10200 *13 8900> *21 10200 *31 8900 48D3", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: `1
*03               10200
*13                8900>
*21               10200
*31                8900
48D3
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: 71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,68.7,6446,30,10,430,430,7237AFC",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:33:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.990 N, 73.240 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "27000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-41 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:33",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.98, -73.25",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "318° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7237AFC",
    });
  });

  test("decodes #38: 71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,68.7,6446,30,10,430,430,7237AFC",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:33:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.990 N, 73.240 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "27000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-41 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:33",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.98, -73.25",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "318° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7237AFC",
    });
  });

  test("decodes #39: 71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,68.7,6446,30,10,430,430,7237AFC",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:33:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.990 N, 73.240 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "27000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-41 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:33",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.98, -73.25",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "318° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7237AFC",
    });
  });

  test("decodes #40: 71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,68.7,6446,30,10,430,430,7237AFC",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:33:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.990 N, 73.240 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "27000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-41 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:33",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.98, -73.25",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "318° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7237AFC",
    });
  });

  test("decodes #41: 71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0133,5,2,KCVG,40.99,-73.24,40.98,-73.25,27,318056,-41,68.7,6446,30,10,430,430,7237AFC",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:33:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.990 N, 73.240 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "27000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-41 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:33",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.98, -73.25",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "318° @ 56 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7237AFC",
    });
  });

  test("decodes #42: 28,E,23APR26,013156,N3331.2,W07950.7,34616,6275,KBOS,KJAX,KJ…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "28,E,23APR26,013156,N3331.2,W07950.7,34616,6275,KBOS,KJAX,KJAX,8/,/,,,,,,,,0,0,0,0,0,0,0,,114.2,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: 71,M,0130,2,1,KLGA,40.92,-75.10,40.92,-75.10,20,322055,-21,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0130,2,1,KLGA,40.92,-75.10,40.92,-75.10,20,322055,-21,62.0,8106,99,30,350,388,627FB17",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:30:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.920 N, 75.100 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "20000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-21 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:30",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.92, -75.1",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "322° @ 55 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "62",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "350 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "388 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "627FB17",
    });
  });

  test("decodes #44: 71,M,0130,2,1,KLGA,40.92,-75.10,40.92,-75.10,20,322055,-21,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0130,2,1,KLGA,40.92,-75.10,40.92,-75.10,20,322055,-21,62.0,8106,99,30,350,388,627FB17",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:30:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.920 N, 75.100 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "20000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-21 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:30",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.92, -75.1",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "322° @ 55 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "62",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "350 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "388 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "627FB17",
    });
  });

  test("decodes #45: 71,M,0130,2,1,KLGA,40.92,-75.10,40.92,-75.10,20,322055,-21,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0130,2,1,KLGA,40.92,-75.10,40.92,-75.10,20,322055,-21,62.0,8106,99,30,350,388,627FB17",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:30:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.920 N, 75.100 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "20000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-21 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:30",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "2",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "40.92, -75.1",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "322° @ 55 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "62",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "350 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "388 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "627FB17",
    });
  });

  test("decodes #46: 71,M,0143,5,1,KLGA,39.60,-77.40,39.62,-77.36,33,329071,-51,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0143,5,1,KLGA,39.60,-77.40,39.62,-77.36,33,329071,-51,74.3,10106,30,34,452,457,786B391",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:43:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.600 N, 77.400 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "33000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-51 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:43",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.62, -77.36",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "329° @ 71 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "74.3",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "452 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "457 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "786B391",
    });
  });

  test("decodes #47: 71,M,0144,5,2,CYYZ,43.58,-81.92,43.60,-81.89,32,325060,-49,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0144,5,2,CYYZ,43.58,-81.92,43.60,-81.89,32,325060,-49,69.7,8189,30,32,430,440,754FB8C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:44:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "43.580 N, 81.920 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-49 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:44",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "43.6, -81.89",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "325° @ 60 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "69.7",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "430 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "440 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "754FB8C",
    });
  });

  test("decodes #48: 71,M,0143,5,3,KCVG,41.55,-71.91,41.53,-71.96,22,306053,-31,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0143,5,3,KCVG,41.55,-71.91,41.53,-71.96,22,306053,-31,68.2,5881,30,10,426,403,6644A98",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:43:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "41.550 N, 71.910 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "22000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-31 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:43",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "41.53, -71.96",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "306° @ 53 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.2",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "426 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "403 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "6644A98",
    });
  });

  test("decodes #49: 71,M,0143,5,3,KCVG,41.55,-71.91,41.53,-71.96,22,306053,-31,6…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0143,5,3,KCVG,41.55,-71.91,41.53,-71.96,22,306053,-31,68.2,5881,30,10,426,403,6644A98",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:43:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCVG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "41.550 N, 71.910 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "22000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-31 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:43",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "3",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "41.53, -71.96",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "306° @ 53 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "68.2",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "426 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "403 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "6644A98",
    });
  });

  test("decodes #50: 71,M,0142,5,2,KLGA,39.69,-77.20,39.69,-77.20,32,329070,-49,7…", () => {
    const decodeResult = plugin.decode({
      label: "36",
      text: "71,M,0142,5,2,KLGA,39.69,-77.20,39.69,-77.20,32,329070,-49,74.4,10213,30,34,452,457,7834F65",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-36-pos-report");
    expect(decodeResult.formatted.description).toBe("Periodic Position / Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Periodic Position / Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_tag",
      code: "FLTAG",
      label: "Flight Tag",
      value: "71",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "mode_qualifier",
      code: "MODE",
      label: "Mode Qualifier",
      value: "M",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.690 N, 77.200 W",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32000 feet",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-49 degrees",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC, HHMM)",
      value: "01:42",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "report_sequence",
      code: "SEQ",
      label: "Report Sequence",
      value: "5",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "leg_index",
      code: "LEG",
      label: "Leg Index",
      value: "2",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "previous_position",
      code: "PREVPOS",
      label: "Previous Position",
      value: "39.69, -77.2",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "329° @ 70 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "fuel",
      code: "FUEL",
      label: "Fuel",
      value: "74.4",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "true_airspeed",
      code: "TAS",
      label: "True Airspeed",
      value: "452 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "ground_speed",
      code: "GS",
      label: "Ground Speed",
      value: "457 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "message_serial",
      code: "SERIAL",
      label: "Serial / CRC Token",
      value: "7834F65",
    });
  });

});
