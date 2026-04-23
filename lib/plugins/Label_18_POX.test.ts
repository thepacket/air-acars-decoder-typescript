import { MessageDecoder } from '../MessageDecoder';
import { Label_18_POX } from './Label_18_POX';

describe('Label_18_POX', () => {
  let plugin: Label_18_POX;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_18_POX(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-18-pox");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["18"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "18", text: '' });
    expect(decodeResult.decoder.name).toBe("label-18-pox");
  });

  test("decodes #1: POX,CZ0321,22APR26,222444,ZGGG,YMML,S36.278,E144.651,236,149…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CZ0321,22APR26,222444,ZGGG,YMML,S36.278,E144.651,236,149,0.587,-160,-172.7,022,-028,2249,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CZ0321",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:24:44",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "YMML",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:24:44",
    });
  });

  test("decodes #2: POX,CSN5217 ,22APR26,223158,PANC,KLAX,N061.17,E-150.03,003, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN5217   ,22APR26,223158,PANC,KLAX,N061.17,E-150.03,003, 492,283,-107.4,-113.2,001,  5.0,030458, 30240,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN5217",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:31:58",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:31:58",
    });
  });

  test("decodes #3: POX,CSN438 ,22APR26,224224,KORD,ZSPD,N042.24,E0-87.89,072, 9…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN438    ,22APR26,224224,KORD,ZSPD,N042.24,E0-87.89,072, 981,432, -19.4, -26.2,009, 10.8,122024, 32640,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN438",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:42:24",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KORD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:42:24",
    });
  });

  test("decodes #4: POX,CSN438 ,22APR26,224224,KORD,ZSPD,N042.24,E0-87.89,072, 9…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN438    ,22APR26,224224,KORD,ZSPD,N042.24,E0-87.89,072, 981,432, -19.4, -26.2,009, 10.8,122024, 32640,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN438",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:42:24",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KORD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:42:24",
    });
  });

  test("decodes #5: N40 00.3 W085 04.6,25996,224617,0065", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "N40 00.3 W085 04.6,25996,224617,0065",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: POX,CSN5217 ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN5217   ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, 455,772, 114.6,-117.1,027,-42.2,030558, 30360,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN5217",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:44:58",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:44:58",
    });
  });

  test("decodes #7: POX,CSN5217 ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN5217   ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, 455,772, 114.6,-117.1,027,-42.2,030558, 30360,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN5217",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:44:58",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:44:58",
    });
  });

  test("decodes #8: 224513,C-GKXQ/PD0763,N2114.53 W08647.56,108847,12764, 68,043…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "224513,C-GKXQ/PD0763,N2114.53 W08647.56,108847,12764, 68,043001",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: POX,CSN5217 ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN5217   ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, 455,772, 114.6,-117.1,027,-42.2,030558, 30360,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN5217",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:44:58",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:44:58",
    });
  });

  test("decodes #10: POX,CSN5217 ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN5217   ,22APR26,224458,PANC,KLAX,N060.35,E-148.60,271, 455,772, 114.6,-117.1,027,-42.2,030558, 30360,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN5217",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:44:58",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22 (22APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:44:58",
    });
  });

  test("decodes #11: 013929,C-GKYV/PD0277,N5002.35 W09430.23,119820,12813,379,266…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "013929,C-GKYV/PD0277,N5002.35 W09430.23,119820,12813,379,266073",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: POX,CSN3093,23APR26,013844,ZHHH,RCKH,N 24461241,E120975012,3…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN3093,23APR26,013844,ZHHH,RCKH,N 24461241,E120975012,30000,14440,732,------,25961,  54,- 30,0204,----,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3093",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:38:44",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZHHH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCKH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:38:44",
    });
  });

  test("decodes #13: POX,CSN3093,23APR26,013844,ZHHH,RCKH,N 24461241,E120975012,3…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN3093,23APR26,013844,ZHHH,RCKH,N 24461241,E120975012,30000,14440,732,------,25961,  54,- 30,0204,----,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3093",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:38:44",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZHHH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCKH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:38:44",
    });
  });

  test("decodes #14: POX,CSN3093,23APR26,013844,ZHHH,RCKH,N 24461241,E120975012,3…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN3093,23APR26,013844,ZHHH,RCKH,N 24461241,E120975012,30000,14440,732,------,25961,  54,- 30,0204,----,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3093",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:38:44",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZHHH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCKH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:38:44",
    });
  });

  test("decodes #15: 013705,C-GZQW/PD0308,N4915.30 W10051.94,120659,12697,370,208…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "013705,C-GZQW/PD0308,N4915.30 W10051.94,120659,12697,370,208060",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: (2BBLH /2306 5000 TSRA BKN015 FEW018CB)04)06PIREP: UNAVAILAB…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `(2BBLH
	/2306 5000 TSRA BKN015 FEW018CB)04)06PIREP: UNAVAILABLE FOR NFNA))05NOTAM: FOR NOTAMS SEND TEXT MESSAGE WITH ADDRESS NOTAM KXXX WHERE KXXX IS AIRPORT IDENT)(Z`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: (2BBLH /2306 5000 TSRA BKN015 FEW018CB)04)06PIREP: UNAVAILAB…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `(2BBLH
	/2306 5000 TSRA BKN015 FEW018CB)04)06PIREP: UNAVAILABLE FOR NFNA))05NOTAM: FOR NOTAMS SEND TEXT MESSAGE WITH ADDRESS NOTAM KXXX WHERE KXXX IS AIRPORT IDENT)(Z`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: (2ABLH 6423APR26) 01NFFN) 02METAR: NFFN 230100Z 18007KT 9999…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `(2ABLH
	6423APR26)
	01NFFN)
	02METAR: NFFN 230100Z 18007KT 9999 -SHRA SCT028TCU SCT048 OVC110)0225/23 Q1014 TEMPO FM0200 3000 TSRA FEW018CB)02)04TAF: NFFN 222322Z 2300/2324 32010KT 9999 -SHRA SCT025 SCT045)04BKN100)04PROB40 TEMPO 2302/2308 3000 TSRA BKN016 FEW018CB)04BECMG 2304/2306 12006KT)04BECMG 2322/2324 30010KT)04)06PIREP: UNAVAILABLE FOR NFFN))05NOTAM: FOR NOTAMS SEND TEXT MESSAGE WITH ADDRESS NOTAM KXXX WHERE KXXX IS AIRPORT IDENT)
	01NFNA)
	02METAR: NFNA 230100Z 14007KT 9999 BKN020 BKN045 28/24 Q1013)02)04TAF: NFNA 222318Z 2300/2324 10010KT 9999 -SHRA SCT018 BKN045)04BKN100)04PROB40 TEMPO 2302(Z`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: (2ABLH 6423APR26) 01NFFN) 02METAR: NFFN 230100Z 18007KT 9999…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `(2ABLH
	6423APR26)
	01NFFN)
	02METAR: NFFN 230100Z 18007KT 9999 -SHRA SCT028TCU SCT048 OVC110)0225/23 Q1014 TEMPO FM0200 3000 TSRA FEW018CB)02)04TAF: NFFN 222322Z 2300/2324 32010KT 9999 -SHRA SCT025 SCT045)04BKN100)04PROB40 TEMPO 2302/2308 3000 TSRA BKN016 FEW018CB)04BECMG 2304/2306 12006KT)04BECMG 2322/2324 30010KT)04)06PIREP: UNAVAILABLE FOR NFFN))05NOTAM: FOR NOTAMS SEND TEXT MESSAGE WITH ADDRESS NOTAM KXXX WHERE KXXX IS AIRPORT IDENT)
	01NFNA)
	02METAR: NFNA 230100Z 14007KT 9999 BKN020 BKN045 28/24 Q1013)02)04TAF: NFNA 222318Z 2300/2324 10010KT 9999 -SHRA SCT018 BKN045)04BKN100)04PROB40 TEMPO 2302(Z`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: (2/KJA", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "(2/KJA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: (2/KJA", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "(2/KJA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: (2/KJA", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "(2/KJA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: (2/KJA", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "(2/KJA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: (2/KJA", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "(2/KJA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: M50ACZ0305POX,CZ0305,23APR26,013310,ZGGG,NZAA,S29.089,E161.0…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "M50ACZ0305POX,CZ0305,23APR26,013310,ZGGG,NZAA,S29.089,E161.048,370,234,0.838,0121,-078.6,078,-053,0320,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: POX,CSG2518 ,23APR26,013250,EGPK,ZGGG,N060.73,E0014.05,370, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSG2518   ,23APR26,013250,EGPK,ZGGG,N060.73,E0014.05,370, 694,832,  62.7,  -8.1,057,-59.0,111350, 33840,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSG2518",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:32:50",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "EGPK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:32:50",
    });
  });

  test("decodes #27: POX,CSG2518 ,23APR26,013250,EGPK,ZGGG,N060.73,E0014.05,370, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSG2518   ,23APR26,013250,EGPK,ZGGG,N060.73,E0014.05,370, 694,832,  62.7,  -8.1,057,-59.0,111350, 33840,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSG2518",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:32:50",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "EGPK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:32:50",
    });
  });

  test("decodes #28: QUCANXMCZ~PTIX60000", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "QUCANXMCZ~PTIX60000",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: QUCANXMCZ~PDOX", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "QUCANXMCZ~PDOX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: M80ACZ0346POX,CZ0346,16APR26,014228,EHAM,ZBAD,N56.090,E085.1…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "M80ACZ0346POX,CZ0346,16APR26,014228,EHAM,ZBAD,N56.090,E085.140,390,245,0.840,0112,-071.8,045,-057,0507,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: M79ACZ0346POX,CZ0346,16APR26,014129,EHAM,ZBAD,N56.163,E084.9…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "M79ACZ0346POX,CZ0346,16APR26,014129,EHAM,ZBAD,N56.163,E084.909,390,246,0.844,0112,-075.2,045,-057,0507,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: POX,CSN623,23APR26,014930,ZYCC,RJAA,N 38271243,E140601353,32…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `POX,CSN623,23APR26,014930,ZYCC,RJAA,N 38271243,E140601353,32003,1464
0,760, 15074,25503, 107,- 42,0236,----,`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN623",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:49:30",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZYCC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:49:30",
    });
  });

  test("decodes #33: POX,CSN3093,23APR26,015145,ZHHH,RCKH,N 23260199,E120199787,1…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN3093,23APR26,015145,ZHHH,RCKH,N 23260199,E120199787,10000,13920,575,------,27441,  26,   2,0204,----,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3093",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:51:45",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZHHH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCKH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:51:45",
    });
  });

  test("decodes #34: POX,CSN327 ,23APR26,015540,ZGGG,KLAX,N037.56,E-122.05,350, 1…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN327    ,23APR26,015540,ZGGG,KLAX,N037.56,E-122.05,350, 183,828, 134.0, -83.8,090,-54.6,024340, 29480,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN327",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:55:40",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:55:40",
    });
  });

  test("decodes #35: M37ATG0659N 29.327,E124.667,43003, 24.2,432", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "M37ATG0659N 29.327,E124.667,43003, 24.2,432",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: M98ACZ0346POX,CZ0346,16APR26,015840,EHAM,ZBAD,N54.825,E088.7…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "M98ACZ0346POX,CZ0346,16APR26,015840,EHAM,ZBAD,N54.825,E088.710,390,232,0.838,0118,-057.9,053,-056,0507,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: QUCANXMCZ~PDOX", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "QUCANXMCZ~PDOX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: QUCANXMCZ~PDOX", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "QUCANXMCZ~PDOX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: M36ATG0671N 41.766,E140.908,28118,038.4,390.3", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "M36ATG0671N 41.766,E140.908,28118,038.4,390.3",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: POX,CSN6753,23APR26,020706,ZJSY,ZSPD,N 24123850,E117650214,3…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `POX,CSN6753,23APR26,020706,ZJSY,ZSPD,N 24123850,E117650214,33140,194
80,761,  5346,26173,  61,- 38,0321,----,`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN6753",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:07:06",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZJSY",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "02:07:06",
    });
  });

  test("decodes #41: POX,CSN3727,23APR26,021037,ZGGG,ZSYW,N 24060493,E117453617,2…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN3727,23APR26,021037,ZGGG,ZSYW,N 24060493,E117453617,29100,13600,536,-10137,31773, 198,- 28,0309,----,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3727",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:10:37",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSYW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "02:10:37",
    });
  });

  test("decodes #42: POX,CSN3087,23APR26,021148,ZGSZ,RCTP,N 23037332,E119358285,2…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN3087,23APR26,021148,ZGSZ,RCTP,N 23037332,E119358285,27000,34160,745,  5737,25750,  35,- 23,0245,----,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3087",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:11:48",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZGSZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCTP",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "02:11:48",
    });
  });

  test("decodes #43: POX,CSN5217 ,23APR26,021258,PANC,KLAX,N037.58,E-122.54,309, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSN5217   ,23APR26,021258,PANC,KLAX,N037.58,E-122.54,309, 174,814, 147.4, -80.7,086,-44.6,030858, 28280,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN5217",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:12:58",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "02:12:58",
    });
  });

  test("decodes #44: POX,CSN623,23APR26,021536,ZYCC,RJAA,N 35812671,E140903373,10…", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: `POX,CSN623,23APR26,021536,ZYCC,RJAA,N 35812671,E140903373,10065,1308
0,353,-15008,24165,  15,-  5,0247,----,`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN623",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:15:36",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZYCC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "02:15:36",
    });
  });

  test("decodes #45: N39 45.5 W077 23.4,21067,021722,0095", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "N39 45.5 W077 23.4,21067,021722,0095",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: N39 45.5 W077 23.4,21067,021722,0095", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "N39 45.5 W077 23.4,21067,021722,0095",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: N39 45.5 W077 23.4,21067,021722,0095", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "N39 45.5 W077 23.4,21067,021722,0095",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: 15", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "15",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: 15", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "15",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: POX,CSG2518 ,23APR26,022450,EGPK,ZGGG,N061.73,E0026.43,369, …", () => {
    const decodeResult = plugin.decode({
      label: "18",
      text: "POX,CSG2518   ,23APR26,022450,EGPK,ZGGG,N061.73,E0026.43,369, 647,823,  64.3,  -4.6,102,-51.8,111750, 34280,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-18-pox");
    expect(decodeResult.formatted.description).toBe("POX Positional / In-Flight Progress Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "POX Positional / In-Flight Progress Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "preamble",
      code: "PRE",
      label: "Preamble",
      value: "POX",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSG2518",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:24:50",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "EGPK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23 (23APR26)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "02:24:50",
    });
  });

});
