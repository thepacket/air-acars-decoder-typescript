import { MessageDecoder } from '../MessageDecoder';
import { Label_52_AGM } from './Label_52_AGM';

describe('Label_52_AGM', () => {
  let plugin: Label_52_AGM;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_52_AGM(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-52-agm");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["52"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "52", text: '' });
    expect(decodeResult.decoder.name).toBe("label-52-agm");
  });

  test("decodes #1: 2604223222757", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222757",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #2: 2604223222757", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222757",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #3: 2604223222722", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222722",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #4: 2604223222722", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222722",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #5: 2604223222722", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222722",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #6: 2604223222723", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222723",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #7: 2604223222723", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222723",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #8: 2604223222651", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222651",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #9: 2604223222522", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222522",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #10: 2604223222430", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604223222430",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "22",
    });
  });

  test("decodes #11: 2604234013947", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013947",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #12: 2604234013821", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013821",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #13: 2604234013742", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013742",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #14: 2604234013444", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013444",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #15: 2604234013430", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013430",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #16: 2604234013430", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013430",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #17: 2604234013430", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013430",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #18: 2604234013329", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013329",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #19: 2604234013329", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013329",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #20: 2604234013117", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234013117",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #21: 2604234014300", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234014300",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #22: 2604234014936", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234014936",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #23: 2604234014936", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234014936",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #24: 2604234015409", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234015409",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #25: 2604234015413", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234015413",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #26: 2604234015931", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234015931",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #27: 2604234015931", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234015931",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #28: 2604234020044", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234020044",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #29: 2604234020044", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234020044",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #30: 2604234020044", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234020044",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #31: 2604234020309", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234020309",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #32: 2604234020656", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234020656",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #33: 2604234020656", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234020656",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #34: 2604234021010", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021010",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #35: 2604234021037", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021037",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #36: 2604234021207", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021207",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #37: 2604234021207", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021207",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #38: 2604234021207", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021207",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #39: 2604234021730", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021730",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #40: 2604234021730", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234021730",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #41: 2604234022021", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022021",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #42: 2604234022020", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022020",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #43: 2604234022003", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022003",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #44: 2604234022011", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022011",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #45: 2604234022727", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022727",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #46: 2604234022832", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022832",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #47: 2604234022915", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022915",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #48: 2604234022915", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234022915",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #49: 2604234023030", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234023030",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

  test("decodes #50: 2604234023030", () => {
    const decodeResult = plugin.decode({
      label: "52",
      text: "2604234023030",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-52-agm");
    expect(decodeResult.formatted.description).toBe("AGM — Ground UTC Request");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AGM — Ground UTC Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "year",
      code: "YEAR",
      label: "Year",
      value: "2026",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "month",
      code: "MONTH",
      label: "Month",
      value: "04 (April)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day",
      value: "23",
    });
  });

});
