import { MessageDecoder } from '../MessageDecoder';
import { Label_17_Route } from './Label_17_Route';

describe('Label_17_Route', () => {
  let plugin: Label_17_Route;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_17_Route(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-17-route");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["17"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "17", text: '' });
    expect(decodeResult.decoder.name).toBe("label-17-route");
  });

  test("decodes #1: 222217 KMSP KATL7 /FN 1028 EDENS 22293502349- 5318 40016777", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `222217 KMSP KATL7
/FN 1028
EDENS   22293502349- 5318  40016777`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:22:17",
    });
  });

  test("decodes #2: 222217 KBWI KDTW6 LEJOY 22233202304-483340560012575", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `222217 KBWI KDTW6
LEJOY   22233202304-483340560012575







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBWI",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:22:17",
    });
  });

  test("decodes #3: 0,KMCOKBOS2306", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "0,KMCOKBOS2306",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Arrival Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMCO",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
  });

  test("decodes #4: 0,KMCOKBOS2306", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "0,KMCOKBOS2306",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Arrival Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMCO",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
  });

  test("decodes #5: 0,KMCOKBOS2306", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "0,KMCOKBOS2306",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Arrival Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMCO",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
  });

  test("decodes #6: 222217 KEWR KMSP6 REXXY 22253590024-543290830012179", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `222217 KEWR KMSP6
REXXY   22253590024-543290830012179







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KEWR",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KMSP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:22:17",
    });
  });

  test("decodes #7: 0,KMIAKLGA2305", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "0,KMIAKLGA2305",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Arrival Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMIA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
  });

  test("decodes #8: 0,KMIAKLGA2305", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "0,KMIAKLGA2305",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Arrival Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMIA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
  });

  test("decodes #9: 222217 KDTW KIAH7 /FN 1718 URH 22243602310-521790182013077", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `222217 KDTW KIAH7
/FN 1718
URH     22243602310-521790182013077`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:22:17",
    });
  });

  test("decodes #10: 222217 KDTW KIAH7 /FN 1718 URH 22243602310-521790182013077", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `222217 KDTW KIAH7
/FN 1718
URH     22243602310-521790182013077`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:22:17",
    });
  });

  test("decodes #11: 01TOICDHK814 /230139EGNXEDDP 524 209.7 +10.8", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01TOICDHK814    /230139EGNXEDDP
524   209.7 +10.8`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 01TOICDHK814 /230139EGNXEDDP 524 209.7 +10.8", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01TOICDHK814    /230139EGNXEDDP
524   209.7 +10.8`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: P,R,2026-04-23 01:39:59,7488,METAR,KHOB,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:39:59,7488,METAR,KHOB,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: POS230138/N 24.410/E120.288/29320/A29093/M 752", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "POS230138/N 24.410/E120.288/29320/A29093/M 752",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: P,R,2026-04-23 01:38:11,6304,METAR,KAMA,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:38:11,6304,METAR,KAMA,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: P,R,2026-04-23 01:38:11,6304,METAR,KAMA,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:38:11,6304,METAR,KAMA,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 01TOICDHK054 /230137EGNXEBBR 583 172.9 +9.6", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01TOICDHK054    /230137EGNXEBBR
583   172.9  +9.6`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: 01TOICDHK054 /230137EGNXEBBR 583 172.9 +9.6", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01TOICDHK054    /230137EGNXEBBR
583   172.9  +9.6`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: 013740", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "013740",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: ETA DEP ZSSS,DES ZGSZ,ETA 0221,FOB 30640,UTC 013713", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `ETA
DEP ZSSS,DES ZGSZ,ETA 0221,FOB 30640,UTC 013713`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: 220117 KATL EHAM7 /FN 0074 ALB 01343500821-553250871104281", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KATL EHAM7
/FN 0074
ALB     01343500821-553250871104281`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "EHAM",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #28: 220117 KATL EHAM7 /FN 0074 ALB 01343500821-553250871104281", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KATL EHAM7
/FN 0074
ALB     01343500821-553250871104281`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "EHAM",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #29: 220117 KATL EHAM7 /FN 0074 ALB 01343500821-553250871104281", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KATL EHAM7
/FN 0074
ALB     01343500821-553250871104281`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KATL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "EHAM",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #30: 0,KMCIKMCO0210", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "0,KMCIKMCO0210",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Arrival Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMCI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KMCO",
    });
  });

  test("decodes #31: M59AMU0779ETA DEP ZSPD,DES NZAA,ETA 0306,FOB 64154,UTC 01360…", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `M59AMU0779ETA
	DEP ZSPD,DES NZAA,ETA 0306,FOB 64154,UTC 013601`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: P,R,2026-04-23 01:32:00,7760,METAR,KSBN,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:32:00,7760,METAR,KSBN,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: P,R,2026-04-23 01:31:31,4924,METAR,KSBN,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:31:31,4924,METAR,KSBN,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: P,R,2026-04-23 01:44:01,4620,METAR,KESC,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:44:01,4620,METAR,KESC,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: 220117 KBNA KLGA6 GVE 01443700234-583400530007476", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KBNA KLGA6
GVE     01443700234-583400530007476







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #36: 220117 KBNA KLGA6 GVE 01443700234-583400530007476", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KBNA KLGA6
GVE     01443700234-583400530007476







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #37: 220117 KBNA KLGA6 GVE 01443700234-583400530007476", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KBNA KLGA6
GVE     01443700234-583400530007476







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #38: 220117 KBNA KLGA6 GVE 01443700234-583400530007476", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KBNA KLGA6
GVE     01443700234-583400530007476







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBNA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #39: 220117 KPBI KBOS6 VIYAP 01463700402-553120210020979", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KPBI KBOS6
VIYAP   01463700402-553120210020979







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KPBI",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #40: 220117 KPBI KBOS6 VIYAP 01463700402-553120210020979", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KPBI KBOS6
VIYAP   01463700402-553120210020979







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KPBI",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #41: M70ADL0167220117 KSEA RJTT7 /FN 0167 NUZAN 01164100457-47255…", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `M70ADL0167220117 KSEA RJTT7
	/FN 0167
	NUZAN   01164100457-472550110063885`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: 01CLERDHK814 /230153EGNXEDDP 40375 260.0 -25.1", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01CLERDHK814    /230153EGNXEDDP
40375 260.0 -25.1`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: 01CLERDHK814 /230153EGNXEDDP 40375 260.0 -25.1", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01CLERDHK814    /230153EGNXEDDP
40375 260.0 -25.1`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: 01CLERDHK814 /230153EGNXEDDP 40375 260.0 -25.1", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01CLERDHK814    /230153EGNXEDDP
40375 260.0 -25.1`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: 01CLERDHK814 /230153EGNXEDDP 40375 260.0 -25.1", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01CLERDHK814    /230153EGNXEDDP
40375 260.0 -25.1`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: 01CLERDHK814 /230153EGNXEDDP 40375 260.0 -25.1", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `01CLERDHK814    /230153EGNXEDDP
40375 260.0 -25.1`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: P,R,2026-04-23 01:56:17,4688,METAR,KSAW,", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "P,R,2026-04-23 01:56:17,4688,METAR,KSAW,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: 220117 KDTW KEWR6 DORET 01563300240-473260551010278", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KDTW KEWR6
DORET   01563300240-473260551010278







`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KEWR",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

  test("decodes #49: M63ANS8025INNZBZL2304260148 46", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: "M63ANS8025INNZBZL2304260148  46",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: 220117 KDTW KSAN7 /FN 0700 OBK 01583400546-523090340034879", () => {
    const decodeResult = plugin.decode({
      label: "17",
      text: `220117 KDTW KSAN7
/FN 0700
OBK     01583400546-523090340034879`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-17-route");
    expect(decodeResult.formatted.description).toBe("Route / Status Report (Label 17)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Route / Status Report (Label 17)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:01:17",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KSAN",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Report Time (UTC)",
      value: "22:01:17",
    });
  });

});
