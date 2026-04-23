import { MessageDecoder } from '../MessageDecoder';
import { Label_24_Movement } from './Label_24_Movement';

describe('Label_24_Movement', () => {
  let plugin: Label_24_Movement;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_24_Movement(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-24-movement");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["24"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "24", text: '' });
    expect(decodeResult.decoder.name).toBe("label-24-movement");
  });

  test("decodes #1: 222224 KJFK KFLL6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KFLL6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KFLL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #2: 222224 KATL KHSV6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KATL KHSV6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KHSV",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #3: 222224 KJFK KAUS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KAUS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #4: 222224 KJFK KAUS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KAUS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #5: 222224 KJFK KAUS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KAUS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #6: 222224 KJFK KAUS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KAUS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #7: 222224 KJFK KAUS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KAUS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #8: 222224 KJFK KAUS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "222224 KJFK KAUS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "22:24:00",
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
      value: "KAUS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:24",
    });
  });

  test("decodes #9: 222224 KMDW KATL7 /FN 1728", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `222224 KMDW KATL7
/FN 1728`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: 222224 KMDW KATL7 /FN 1728", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `222224 KMDW KATL7
/FN 1728`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: 220124 KMSP KDCA7 /FN 2961", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KMSP KDCA7
/FN 2961`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 220124 KMSP KDCA7 /FN 2961", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KMSP KDCA7
/FN 2961`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: 220124 KMSP KDCA7 /FN 2961", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KMSP KDCA7
/FN 2961`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: 220124 KMSP KDCA7 /FN 2961", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KMSP KDCA7
/FN 2961`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: 220124 KSEA PANC6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "220124 KSEA PANC6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "01:24:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KSEA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "01:24",
    });
  });

  test("decodes #16: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: 220124 RIC LGA0 RIC LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  RIC  LGA0
RIC LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 220124 JFK DCA0 JFK DCA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  JFK  DCA0
JFK DCA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: 220124 JFK DCA0 JFK DCA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  JFK  DCA0
JFK DCA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: 220124 JFK RDU0 JFK RDU", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  JFK  RDU0
JFK RDU`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: 220124 KDTW KSAT7 /FN 1365", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KDTW KSAT7
/FN 1365`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: 220124 KDTW KSAT7 /FN 1365", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KDTW KSAT7
/FN 1365`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: 220124 DTW YUL0 DTW YUL", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  DTW  YUL0
DTW YUL`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: 220124 KDTW KSAT7 /FN 1365", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KDTW KSAT7
/FN 1365`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: 220124 KDTW KSAT7 /FN 1365", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KDTW KSAT7
/FN 1365`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: 220124 KDTW KSAT7 /FN 1365", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KDTW KSAT7
/FN 1365`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: 220124 KSJC KLAX7 /FN 1438", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KSJC KLAX7
/FN 1438`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 220124 KSJC KLAX7 /FN 1438", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KSJC KLAX7
/FN 1438`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: 220124 KSJC KLAX7 /FN 1438", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KSJC KLAX7
/FN 1438`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: 220124 KMSP KCLT6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "220124 KMSP KCLT6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "01:24:00",
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
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "01:24",
    });
  });

  test("decodes #36: 220124 KMSP KCLT6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "220124 KMSP KCLT6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "01:24:00",
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
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "01:24",
    });
  });

  test("decodes #37: 220124 KMSP KCLT6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "220124 KMSP KCLT6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "01:24:00",
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
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "01:24",
    });
  });

  test("decodes #38: 220124 KMSP KDFW7 /FN 2967", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KMSP KDFW7
/FN 2967`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: 220124 KATL KBTV7 /FN 1027", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KATL KBTV7
/FN 1027`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: Note ACARS CREW LIST FOR: SK0984 23APR26 HND 0205 CPH 1525 3…", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `Note
	ACARS CREW LIST FOR: SK0984 23APR26
	HND 0205 CPH 1525 35A LEG  01 OF 01
	CAT DT  EMPNO  B NAME                 QUAL SEN  PREV     NEXT
	FCQ C   23785  C AGDAL NICHOLAS       A5   1143 C.983 /  /F
	FC  CL  23635  C BUELOW STEFAN        A5   1111 CL.983 / /F
	FP  L   99554  C CRONVAL PHILIP       A5   2348 L.983 /  /F
	AP  IR  21503  C HEMPEL CHARLOTTE     ALA2 0154 IR.983 / /F
	AS      28712  C ERIKSSON CHRISTEL    ALA2 0154 983 / -/ /F
	AS      20200  C VENTZEL GROENNING JO ALA2 0212 983 / -/ /F
	ASF     21688  C LARSSON JOHAN MARIO  ALA2 0479 983 / -/ /F
	AHC     29295  C KROELL GITTE H.      ALA2 0047 983 / -/ /FS
	AS  L   21217  C PERNUM MARIE         ALA2 0221 L.983 /  /F
	AH      100982 C FROM FREDERIKKE      ALA2 0857 983 / -/ /F
	AH  R   101521 C PAULS AGNES          ALA2 9999 R.983 /  /F
	AH      54864  N HOMMA ASUKA          AL   9999 BL/      / /
	/983
	AH      102209 C LID MARTHE WOLSTAD   ALA2 9999 983 / -/ /F
	END CREW LIST`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: Note ACARS CREW LIST FOR: SK0984 23APR26 HND 0205 CPH 1525 3…", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `Note
	ACARS CREW LIST FOR: SK0984 23APR26
	HND 0205 CPH 1525 35A LEG  01 OF 01
	CAT DT  EMPNO  B NAME                 QUAL SEN  PREV     NEXT
	FCQ C   23785  C AGDAL NICHOLAS       A5   1143 C.983 /  /F
	FC  CL  23635  C BUELOW STEFAN        A5   1111 CL.983 / /F
	FP  L   99554  C CRONVAL PHILIP       A5   2348 L.983 /  /F
	AP  IR  21503  C HEMPEL CHARLOTTE     ALA2 0154 IR.983 / /F
	AS      28712  C ERIKSSON CHRISTEL    ALA2 0154 983 / -/ /F
	AS      20200  C VENTZEL GROENNING JO ALA2 0212 983 / -/ /F
	ASF     21688  C LARSSON JOHAN MARIO  ALA2 0479 983 / -/ /F
	AHC     29295  C KROELL GITTE H.      ALA2 0047 983 / -/ /FS
	AS  L   21217  C PERNUM MARIE         ALA2 0221 L.983 /  /F
	AH      100982 C FROM FREDERIKKE      ALA2 0857 983 / -/ /F
	AH  R   101521 C PAULS AGNES          ALA2 9999 R.983 /  /F
	AH      54864  N HOMMA ASUKA          AL   9999 BL/      / /
	/983
	AH      102209 C LID MARTHE WOLSTAD   ALA2 9999 983 / -/ /F
	END CREW LIST`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: 220124 KMSP KGEG6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "220124 KMSP KGEG6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "01:24:00",
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
      value: "KGEG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "01:24",
    });
  });

  test("decodes #43: 220124 ORF LGA0 ORF LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  ORF  LGA0
ORF LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: 220124 ORF LGA0 ORF LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  ORF  LGA0
ORF LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: 220124 ORF LGA0 ORF LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  ORF  LGA0
ORF LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: 220124 ORF LGA0 ORF LGA", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  ORF  LGA0
ORF LGA`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: 220124 KATL KBUF7 /FN 2334", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124 KATL KBUF7
/FN 2334`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: 220124 KFLL KBOS6", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: "220124 KFLL KBOS6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Flight Movement Notification (Label 24)",
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
      value: "01:24:00",
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
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "01:24",
    });
  });

  test("decodes #49: 220124 MSP JFK0 MSP JFK", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  MSP  JFK0
MSP JFK`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: 220124 MSP JFK0 MSP JFK", () => {
    const decodeResult = plugin.decode({
      label: "24",
      text: `220124  MSP  JFK0
MSP JFK`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-24-movement");
    expect(decodeResult.formatted.description).toBe("Flight Movement Notification (Label 24)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
