import { MessageDecoder } from '../MessageDecoder';
import { Label_5U_WXR } from './Label_5U_WXR';

describe('Label_5U_WXR', () => {
  let plugin: Label_5U_WXR;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_5U_WXR(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-5u-wxr");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["5U"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "5U", text: '' });
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
  });

  test("decodes #1: OS PHTO/WXRITO ,", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `OS PHTO/WXRITO 
,`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Weather Information Request (WXRQ)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "OS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "PHTO",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "wxr_request",
      code: "WXRREQ",
      label: "Weather Request",
      value: "WXR for ITO",
    });
  });

  test("decodes #2: OS PHOG/WXROGG ,", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `OS PHOG/WXROGG 
,`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Weather Information Request (WXRQ)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "OS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "PHOG",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "wxr_request",
      code: "WXRREQ",
      label: "Weather Request",
      value: "WXR for OGG",
    });
  });

  test("decodes #3: 01 WXRQ 7025/22 PANC/PAOT .N627AS /TYP 1/STA PAOT/STA GAL /S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   7025/22 PANC/PAOT .N627AS
/TYP 1/STA PAOT/STA GAL /STA PAOM`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #4: 01 WXRQ 7025/22 PANC/PAOT .N627AS /TYP 1/STA PAOT/STA GAL /S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   7025/22 PANC/PAOT .N627AS
/TYP 1/STA PAOT/STA GAL /STA PAOM`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #5: OS ZSPD /WXARJAA", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS ZSPD /WXARJAA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: OS ZSPD /WXARJAA", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS ZSPD /WXARJAA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #7: 01 WXRQ 34RY/22 LCLK/EGNX .G-JZBD /TYP 1/STA EGNX/STA EDDF/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   34RY/22 LCLK/EGNX .G-JZBD
/TYP 1/STA EGNX/STA EDDF/STA EBBR`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #8: OS ZSPD /WXAPANC", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS ZSPD /WXAPANC",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: 01 WXRQ 1811/22 SUMU/SCEL .CC-AZO /TYP 1/STA SCEL/STA SAEZ/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   1811/22 SUMU/SCEL .CC-AZO
/TYP 1/STA SCEL/STA SAEZ/STA SACO`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: TI/0/YSSY///", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "TI/0/YSSY///",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: KPNS-SA", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "KPNS-SA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 22A KMIAKFLLKMCO", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "22A   KMIAKFLLKMCO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: M85ATK6589FS ZWWW,UAKK,UZTT,UBBB", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "M85ATK6589FS ZWWW,UAKK,UZTT,UBBB",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: 01 WXRQ 3312/23 SBBR/SBSL .PT-MXH /TYP 1/STA SBSL/STA SBBE/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   3312/23 SBBR/SBSL .PT-MXH
/TYP 1/STA SBSL/STA SBBE/STA SBFZ`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: 01 WXRQ 0073/22 VABB/OERK .VT-IMR /TYP 1/STA OERK/STA OEMA/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   0073/22 VABB/OERK .VT-IMR
/TYP 1/STA OERK/STA OEMA/STA     `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: TYP 1/KPAE//", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "TYP 1/KPAE//",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: OS EGLL /WXACYQX", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXACYQX",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: SA KBOS,KPHL,KJFK,CYYT", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "SA KBOS,KPHL,KJFK,CYYT",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: OS EGLL /WXAKJFK", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "OS EGLL /WXAKJFK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: KBHM-SA", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "KBHM-SA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: WX REQUEST QFA0437/23 ATIS YMML ---- ----", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `
WX REQUEST
QFA0437/23
ATIS  
YMML ---- ----`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: M32ACX0110YPTN YPDN WAPP WAMM-SA", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "M32ACX0110YPTN YPDN WAPP WAMM-SA",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: WX REQUEST QFA0437/23 ATIS YMML ---- ----", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `
WX REQUEST
QFA0437/23
ATIS  
YMML ---- ----`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: 001WX23013416N4229.4W07100.74105170380 024AQ,CYYR,BIKF,,,,,", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `001WX23013416N4229.4W07100.74105170380
024AQ,CYYR,BIKF,,,,,`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: 01 WXRQ 0435/22 KMCO/MMMX .N173AM /TYP 1/STA MMMX/STA MMQT/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   0435/22 KMCO/MMMX .N173AM
/TYP 1/STA MMMX/STA MMQT/STA MMMD`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: WX REQUEST QFA0051/23 TAFOR WSSS YBCS YPDN", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `
WX REQUEST
QFA0051/23
TAFOR 
WSSS YBCS YPDN`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: WX REQUEST QFA0051/23 TAFOR WSSS YBCS YPDN", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `
WX REQUEST
QFA0051/23
TAFOR 
WSSS YBCS YPDN`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: SAWGSAZBSAVT-SA,1", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `SAWGSAZBSAVT-SA,1
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: 01 WXRQ 0379/22 KBWI/KSEA .N253AK /TYP 1/STA KMSP/STA KFSD/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   0379/22 KBWI/KSEA .N253AK
/TYP 1/STA KMSP/STA KFSD/STA KRAP`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: M51ACZ0305 01 WXRQ 0305/22 ZGGG/NZAA .B-32AV /TYP 4/STA NZAA…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `M51ACZ0305  01 WXRQ   0305/22 ZGGG/NZAA .B-32AV
	/TYP 4/STA NZAA/STA NZCH/STA NZOH`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: 01 WXRQ 1510/22 WBKK/RCTP .9M-RAO /TYP 4/STA RCTP/STA RCKH/S…", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: `  01 WXRQ   1510/22 WBKK/RCTP .9M-RAO
/TYP 4/STA RCTP/STA RCKH/STA RJFF`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: M94AAA0027OS RJTT /WXAPANC", () => {
    const decodeResult = plugin.decode({
      label: "5U",
      text: "M94AAA0027OS RJTT /WXAPANC",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5u-wxr");
    expect(decodeResult.formatted.description).toBe("Autonomous Weather Information Request (WXRQ)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
