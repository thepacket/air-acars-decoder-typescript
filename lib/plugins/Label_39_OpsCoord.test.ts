import { MessageDecoder } from '../MessageDecoder';
import { Label_39_OpsCoord } from './Label_39_OpsCoord';

describe('Label_39_OpsCoord', () => {
  let plugin: Label_39_OpsCoord;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_39_OpsCoord(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-39-ops-coord");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["39"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "39", text: '' });
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
  });

  test("decodes #1: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #2: 222239 KAUS KBOS7 2349 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239 KAUS KBOS7
2349                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "23:49",
    });
  });

  test("decodes #3: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #4: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #5: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #6: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #7: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #8: 222239 DTW MDW3 2251 N 01 1 CHAIR", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239  DTW  MDW3
2251 N                         
01                  
1 CHAIR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "MDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "22:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #9: 222239 KDTW KLGA7 2307 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239 KDTW KLGA7
2307                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "23:07",
    });
  });

  test("decodes #10: 222239 KSAT KBOS8 /FN 0816 2335 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `222239 KSAT KBOS8
/FN 0816
2335                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KSAT",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "233",
    });
  });

  test("decodes #11: 291, ,194,210,353,370,, , , , , , ,01:39,3000,120,20,300,120…", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: "291, ,194,210,353,370,, , , , , , ,01:39,3000,120,20,300,120,9800,19500,19500180C",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 220139 KJFK KMIA7 0236 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KJFK KMIA7
0236                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KJFK",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KMIA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:36",
    });
  });

  test("decodes #13: 291, ,194,210,353,370,, , , , , , ,01:39,3000,120,20,300,120…", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: "291, ,194,210,353,370,, , , , , , ,01:39,3000,120,20,300,120,9800,19500,19500180C",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: 220139 KATL KBOS8 /FN 0300 0232 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KATL KBOS8
/FN 0300
0232                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "023",
    });
  });

  test("decodes #15: 220139 JFK RDU3 0202 N 02 23R", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  JFK  RDU3
0202 N                         
02               23R
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "JFK",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "RDU",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:02",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "02",
    });
  });

  test("decodes #16: UA 01:31,UA 01:35,FV 01:29,AUTO 01:36,", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `UA 01:31,UA 01:35,FV 01:29,AUTO 01:36,

`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: UA 01:31,UA 01:35,FV 01:29,AUTO 01:36,", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `UA 01:31,UA 01:35,FV 01:29,AUTO 01:36,

`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: 220139 KFLL KLGA8 /FN 2321 0251 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KFLL KLGA8
/FN 2321
0251                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KFLL",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "025",
    });
  });

  test("decodes #19: 220139 KATL KDCA8 /FN 0378 0225 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KATL KDCA8
/FN 0378
0225                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDCA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "022",
    });
  });

  test("decodes #20: 220139 KATL KDCA8 /FN 0378 0225 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KATL KDCA8
/FN 0378
0225                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDCA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "022",
    });
  });

  test("decodes #21: 220139 KTPA KRDU8 /FN 1275 0227 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KTPA KRDU8
/FN 1275
0227                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KTPA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KRDU",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "022",
    });
  });

  test("decodes #22: UA 01:31,UA 01:35,FV 01:29,IN PROCESS,", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `UA 01:31,UA 01:35,FV 01:29,IN PROCESS,

`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 220139 KMSP KCLT7 0300 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KMSP KCLT7
0300                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "03:00",
    });
  });

  test("decodes #24: 220139 KMSP KCLT7 0300 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KMSP KCLT7
0300                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "03:00",
    });
  });

  test("decodes #25: 220139 KDTW KAUS8 /FN 2578 0224 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KDTW KAUS8
/FN 2578
0224                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "022",
    });
  });

  test("decodes #26: 220139 KDTW KAUS8 /FN 2578 0224 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KDTW KAUS8
/FN 2578
0224                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "022",
    });
  });

  test("decodes #27: 220139 KTPA KJFK8 /FN 2092 0159 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KTPA KJFK8
/FN 2092
0159                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KTPA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KJFK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "015",
    });
  });

  test("decodes #28: 220139 KTPA KJFK8 /FN 2092 0159 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KTPA KJFK8
/FN 2092
0159                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KTPA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KJFK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "015",
    });
  });

  test("decodes #29: 220139 KTPA KJFK8 /FN 2092 0159 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KTPA KJFK8
/FN 2092
0159                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KTPA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KJFK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "015",
    });
  });

  test("decodes #30: 220139 JAX LGA3 0205 N 01 4", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  JAX  LGA3
0205 N                         
01                 4
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "JAX",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:05",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #31: 220139 JAX LGA3 0205 N 01 4", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  JAX  LGA3
0205 N                         
01                 4
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "JAX",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:05",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "01",
    });
  });

  test("decodes #32: 220139 ORF LGA3 0210 N", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  ORF  LGA3
0210 N                         
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "ORF",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:10",
    });
  });

  test("decodes #33: 220139 ORF LGA3 0210 N", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  ORF  LGA3
0210 N                         
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "ORF",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:10",
    });
  });

  test("decodes #34: 220139 ORF LGA3 0210 N", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  ORF  LGA3
0210 N                         
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "ORF",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:10",
    });
  });

  test("decodes #35: 220139 KBOS KMCO8 /FN 1513 0229 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KBOS KMCO8
/FN 1513
0229                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KMCO",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "022",
    });
  });

  test("decodes #36: 220139 KDCA KATL8 /FN 1140 0210 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KDCA KATL8
/FN 1140
0210                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDCA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "021",
    });
  });

  test("decodes #37: 220139 KDTW KEWR7 0242 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KDTW KEWR7
0242                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KEWR",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:42",
    });
  });

  test("decodes #38: 220139 KMSP KPHX8 /FN 2297 0239 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KMSP KPHX8
/FN 2297
0239                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KPHX",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "023",
    });
  });

  test("decodes #39: 220139 KJFK KTPA7 0220 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KJFK KTPA7
0220                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KJFK",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KTPA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:20",
    });
  });

  test("decodes #40: 220139 KMSP KPHX8 /FN 2297 0239 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KMSP KPHX8
/FN 2297
0239                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KPHX",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "023",
    });
  });

  test("decodes #41: 220139 KMSP KPHX8 /FN 2297 0239 /TCI", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KMSP KPHX8
/FN 2297
0239                                   
/TCI     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KPHX",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "8",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "023",
    });
  });

  test("decodes #42: 220139 BGR LGA3 0201", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  BGR  LGA3
0201                           
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "BGR",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:01",
    });
  });

  test("decodes #43: 220139 BGR LGA3 0201", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  BGR  LGA3
0201                           
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "BGR",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:01",
    });
  });

  test("decodes #44: 220139 KCLT KMSP7 0238 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KCLT KMSP7
0238                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:38",
    });
  });

  test("decodes #45: 220139 KBNA KLGA7 0234 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KBNA KLGA7
0234                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:34",
    });
  });

  test("decodes #46: 220139 KBNA KLGA7 0234 /TCI [ ]", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139 KBNA KLGA7
0234                                   
/TCI [  ]







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "7",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:34",
    });
  });

  test("decodes #47: 220139 CLT LGA3 0300 4", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  CLT  LGA3
0300                           
                   4
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "LGA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "03:00",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "service_code",
      code: "SVCCODE",
      label: "Service Code",
      value: "4",
    });
  });

  test("decodes #48: 220139 XNA DTW3 0231 N", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  XNA  DTW3
0231 N                         
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "XNA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:31",
    });
  });

  test("decodes #49: 220139 XNA DTW3 0231 N", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  XNA  DTW3
0231 N                         
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "XNA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:31",
    });
  });

  test("decodes #50: 220139 XNA DTW3 0231 N", () => {
    const decodeResult = plugin.decode({
      label: "39",
      text: `220139  XNA  DTW3
0231 N                         
                    
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-39-ops-coord");
    expect(decodeResult.formatted.description).toBe("Operational Coordination Message");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Operational Coordination (Label 39)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "iata",
      code: "ORG",
      label: "Origin",
      value: "XNA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "iata",
      code: "DST",
      label: "Destination",
      value: "DTW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "estimated_time",
      code: "ETA",
      label: "Estimated Time (UTC, HHMM)",
      value: "02:31",
    });
  });

});
