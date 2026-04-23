import { MessageDecoder } from '../MessageDecoder';
import { Label_A6_ADS } from './Label_A6_ADS';

describe('Label_A6_ADS', () => {
  let plugin: Label_A6_ADS;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_A6_ADS(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-a6-ads");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["A6"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "A6", text: '' });
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
  });

  test("decodes #1: /MLOCAYA.ADS.A7-AMH07200B0063C9", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MLOCAYA.ADS.A7-AMH07200B0063C9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MLOCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-AMH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07200B00 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "63C9 (4-hex standard CRC)",
    });
  });

  test("decodes #2: /RGNCAYA.ADS.A6-BNF017064", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.A6-BNF017064",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A6-BN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "F0170 (2.5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "64 (short — possibly payload byte)",
    });
  });

  test("decodes #3: /RGNCAYA.ADS.A6-BNF017064", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.A6-BNF017064",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A6-BN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "F0170 (2.5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "64 (short — possibly payload byte)",
    });
  });

  test("decodes #4: /BNECAYA.ADS.B-124308031321021F0C14E300", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/BNECAYA.ADS.B-124308031321021F0C14E300",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BNECAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-1243",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08031321021F0C14 (8 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "E300 (4-hex standard CRC)",
    });
  });

  test("decodes #5: /BNECAYA.ADS.B-124308031321021F0C14E300", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/BNECAYA.ADS.B-124308031321021F0C14E300",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BNECAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-1243",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08031321021F0C14 (8 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "E300 (4-hex standard CRC)",
    });
  });

  test("decodes #6: /MLOCAYA.ADS.A7-AMH07200B0063C9", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MLOCAYA.ADS.A7-AMH07200B0063C9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MLOCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-AMH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07200B00 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "63C9 (4-hex standard CRC)",
    });
  });

  test("decodes #7: /ANCATYA.ADS.N2998907020B000D010E010F011FB5", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/ANCATYA.ADS.N2998907020B000D010E010F011FB5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N29989",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07020B000D010E010F01 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "1FB5 (4-hex standard CRC)",
    });
  });

  test("decodes #8: /ANCATYA.ADS.N2998907020B000D010E010F011FB5", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/ANCATYA.ADS.N2998907020B000D010E010F011FB5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N29989",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07020B000D010E010F01 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "1FB5 (4-hex standard CRC)",
    });
  });

  test("decodes #9: /MLOCAYA.ADS.A7-AMH07200B0063C9", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MLOCAYA.ADS.A7-AMH07200B0063C9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MLOCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-AMH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07200B00 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "63C9 (4-hex standard CRC)",
    });
  });

  test("decodes #10: /GVSCAYA.ADS.EC-OMC07030B000D01ABAE", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/GVSCAYA.ADS.EC-OMC07030B000D01ABAE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "GVSCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EC-OM",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "C07030B000D01 (6.5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "ABAE (4-hex standard CRC)",
    });
  });

  test("decodes #11: /RPHIAYA.ADS.JA832A080113235A22F687AD", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RPHIAYA.ADS.JA832A080113235A22F687AD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "080113235A22F6 (7 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "87AD (4-hex standard CRC)",
    });
  });

  test("decodes #12: /RPHIAYA.ADS.JA832A080113235A22F687AD", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RPHIAYA.ADS.JA832A080113235A22F687AD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "080113235A22F6 (7 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "87AD (4-hex standard CRC)",
    });
  });

  test("decodes #13: /SMACAYA.ADS.EC-LXK080313254E24EA140A1807040B000D010F01D20A", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/SMACAYA.ADS.EC-LXK080313254E24EA140A1807040B000D010F01D20A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EC-LXK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "080313254E24EA140A1807040B000D010F01 (18 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "D20A (4-hex standard CRC)",
    });
  });

  test("decodes #14: /SMACAYA.ADS.EC-LXK080313254E24EA140A1807040B000D010F01D20A", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/SMACAYA.ADS.EC-LXK080313254E24EA140A1807040B000D010F01D20A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EC-LXK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "080313254E24EA140A1807040B000D010F01 (18 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "D20A (4-hex standard CRC)",
    });
  });

  test("decodes #15: /SMACAYA.ADS.EC-LXK080313254E24EA140A1807040B000D010F01D20A", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/SMACAYA.ADS.EC-LXK080313254E24EA140A1807040B000D010F01D20A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EC-LXK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "080313254E24EA140A1807040B000D010F01 (18 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "D20A (4-hex standard CRC)",
    });
  });

  test("decodes #16: /FUKJJYA.ADS.N7701907000BCA0D010E010F01150125837B", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.N7701907000BCA0D010E010F01150125837B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N77019",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07000BCA0D010E010F01150125 (13 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "837B (4-hex standard CRC)",
    });
  });

  test("decodes #17: /FUKJJYA.ADS.N7701907000BCA0D010E010F01150125837B", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.N7701907000BCA0D010E010F01150125837B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N77019",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07000BCA0D010E010F01150125 (13 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "837B (4-hex standard CRC)",
    });
  });

  test("decodes #18: /SMACAYA.ADS.EC-NXC080D1322F6222E140A189FD9", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/SMACAYA.ADS.EC-NXC080D1322F6222E140A189FD9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EC-NX",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "C080D1322F6222E140A18 (10.5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "9FD9 (4-hex standard CRC)",
    });
  });

  test("decodes #19: /FUKJJYA.ADS.N728AN07070BCA0D010E010F0115012530C9", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.N728AN07070BCA0D010E010F0115012530C9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N728AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07070BCA0D010E010F01150125 (13 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "30C9 (4-hex standard CRC)",
    });
  });

  test("decodes #20: /MELCAYA.ADS..B-LRS0806140A245026", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MELCAYA.ADS..B-LRS0806140A245026",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: ".B-LRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "0806140A24 (5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "5026 (4-hex standard CRC)",
    });
  });

  test("decodes #21: /FUKJJYA.ADS.N728AN07070BCA0D010E010F0115012530C9", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.N728AN07070BCA0D010E010F0115012530C9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N728AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07070BCA0D010E010F01150125 (13 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "30C9 (4-hex standard CRC)",
    });
  });

  test("decodes #22: /MELCAYA.ADS..B-LRS0806140A245026", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MELCAYA.ADS..B-LRS0806140A245026",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: ".B-LRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "0806140A24 (5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "5026 (4-hex standard CRC)",
    });
  });

  test("decodes #23: /PIKCPYA.ADS.G-TUIN0802144221", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/PIKCPYA.ADS.G-TUIN0802144221",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "G-TUIN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "080214 (3 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "4221 (4-hex standard CRC)",
    });
  });

  test("decodes #24: /BOMCAYA.ADS.A7-BHA011EF3", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/BOMCAYA.ADS.A7-BHA011EF3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BOMCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-BH",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "A011E (2.5 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "F3 (short — possibly payload byte)",
    });
  });

  test("decodes #25: /MELCAYA.ADS..B-LRS07050BCA0D010E0110015303", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MELCAYA.ADS..B-LRS07050BCA0D010E0110015303",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: ".B-LRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07050BCA0D010E011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "5303 (4-hex standard CRC)",
    });
  });

  test("decodes #26: /MELCAYA.ADS..B-LRS07050BCA0D010E0110015303", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MELCAYA.ADS..B-LRS07050BCA0D010E0110015303",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: ".B-LRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07050BCA0D010E011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "5303 (4-hex standard CRC)",
    });
  });

  test("decodes #27: /PIKCPYA.ADS.G-TUIN07010BCC0C010D011001C43D", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/PIKCPYA.ADS.G-TUIN07010BCC0C010D011001C43D",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "G-TUIN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07010BCC0C010D011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "C43D (4-hex standard CRC)",
    });
  });

  test("decodes #28: /MLOCAYA.ADS.SU-GDT07830B0095ED", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MLOCAYA.ADS.SU-GDT07830B0095ED",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MLOCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "SU-GDT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07830B00 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "95ED (4-hex standard CRC)",
    });
  });

  test("decodes #29: /RGNCAYA.ADS.A7-BFJ0805131B8A1B26FFDF", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.A7-BFJ0805131B8A1B26FFDF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-BFJ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "0805131B8A1B26 (7 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "FFDF (4-hex standard CRC)",
    });
  });

  test("decodes #30: /RGNCAYA.ADS.A7-BFJ0805131B8A1B26FFDF", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.A7-BFJ0805131B8A1B26FFDF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-BFJ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "0805131B8A1B26 (7 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "FFDF (4-hex standard CRC)",
    });
  });

  test("decodes #31: /RPHIAYA.ADS.JA832A07000BD50D010E0110019695", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RPHIAYA.ADS.JA832A07000BD50D010E0110019695",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07000BD50D010E011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "9695 (4-hex standard CRC)",
    });
  });

  test("decodes #32: /RPHIAYA.ADS.JA832A07000BD50D010E0110019695", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RPHIAYA.ADS.JA832A07000BD50D010E0110019695",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07000BD50D010E011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "9695 (4-hex standard CRC)",
    });
  });

  test("decodes #33: /MGQCAYA.ADS.4X-EDN072E0B000E010F01C8C2", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MGQCAYA.ADS.4X-EDN072E0B000E010F01C8C2",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MGQCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "4X-EDN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "072E0B000E010F01 (8 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "C8C2 (4-hex standard CRC)",
    });
  });

  test("decodes #34: /BNECAYA.ADS.HL72080170E8", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/BNECAYA.ADS.HL72080170E8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BNECAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "HL7208",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "0170 (2 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "E8 (short — possibly payload byte)",
    });
  });

  test("decodes #35: /BNECAYA.ADS.HL72080170E8", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/BNECAYA.ADS.HL72080170E8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BNECAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "HL7208",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "0170 (2 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "E8 (short — possibly payload byte)",
    });
  });

  test("decodes #36: /FUKJJYA.ADS.N728AN07060B000D010E010F011501253153", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.N728AN07060B000D010E010F011501253153",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N728AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07060B000D010E010F01150125 (13 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "3153 (4-hex standard CRC)",
    });
  });

  test("decodes #37: /FUKJJYA.ADS.N728AN07060B000D010E010F011501253153", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.N728AN07060B000D010E010F011501253153",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N728AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07060B000D010E010F01150125 (13 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "3153 (4-hex standard CRC)",
    });
  });

  test("decodes #38: /MLOCAYA.ADSHZ-AK71074F0B000199", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MLOCAYA.ADSHZ-AK71074F0B000199",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: /RGNCAYA.ADS.TC-LGL01EB25", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.TC-LGL01EB25",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "TC-LGL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "01EB (2 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "25 (short — possibly payload byte)",
    });
  });

  test("decodes #40: /RGNCAYA.ADS.TC-LGL01EB25", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.TC-LGL01EB25",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "TC-LGL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "01EB (2 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "25 (short — possibly payload byte)",
    });
  });

  test("decodes #41: /BOMCAYA.ADS.SU-GET019FA1", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/BOMCAYA.ADS.SU-GET019FA1",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BOMCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "SU-GET",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "019F (2 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "A1 (short — possibly payload byte)",
    });
  });

  test("decodes #42: /FUKJJYA.ADS.C-FIUL08010A28A41C", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.C-FIUL08010A28A41C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "C-FIUL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08010A28 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "A41C (4-hex standard CRC)",
    });
  });

  test("decodes #43: /FUKJJYA.ADS.C-FIUL08010A28A41C", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.C-FIUL08010A28A41C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "C-FIUL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08010A28 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "A41C (4-hex standard CRC)",
    });
  });

  test("decodes #44: /RGNCAYA.ADS.A7-BFJ07040BDB0D010E011001D98A", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.A7-BFJ07040BDB0D010E011001D98A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-BFJ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07040BDB0D010E011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "D98A (4-hex standard CRC)",
    });
  });

  test("decodes #45: /RGNCAYA.ADS.A7-BFJ07040BDB0D010E011001D98A", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/RGNCAYA.ADS.A7-BFJ07040BDB0D010E011001D98A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RGNCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "A7-BFJ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07040BDB0D010E011001 (10 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "D98A (4-hex standard CRC)",
    });
  });

  test("decodes #46: /MELCAYA.ADS.9V-OFN08091329CC26DE14DD8D", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MELCAYA.ADS.9V-OFN08091329CC26DE14DD8D",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "9V-OFN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08091329CC26DE14 (8 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "DD8D (4-hex standard CRC)",
    });
  });

  test("decodes #47: /MELCAYA.ADS.9V-OFN08091329CC26DE14DD8D", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MELCAYA.ADS.9V-OFN08091329CC26DE14DD8D",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "9V-OFN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08091329CC26DE14 (8 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "DD8D (4-hex standard CRC)",
    });
  });

  test("decodes #48: /FUKJJYA.ADS.B-203508010A28BC96", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.B-203508010A28BC96",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-2035",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08010A28 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "BC96 (4-hex standard CRC)",
    });
  });

  test("decodes #49: /FUKJJYA.ADS.B-203508010A28BC96", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/FUKJJYA.ADS.B-203508010A28BC96",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-2035",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "08010A28 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "BC96 (4-hex standard CRC)",
    });
  });

  test("decodes #50: /MLOCAYA.ADS.G-XWBL07FE0B00F06C", () => {
    const decodeResult = plugin.decode({
      label: "A6",
      text: "/MLOCAYA.ADS.G-XWBL07FE0B00F06C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a6-ads");
    expect(decodeResult.formatted.description).toBe("Request ADS Reports (RAR — ADS-C contract, uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Request ADS Report (RAR) — ADS-C contract",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MLOCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "imi",
      code: "IMI",
      label: "IMI (Embedded Message ID)",
      value: "ADS (ADS-C protocol)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "G-XWBL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "ADS-C Payload (hex)",
      value: "07FE0B00 (4 bytes)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (trailing hex)",
      value: "F06C (4-hex standard CRC)",
    });
  });

});
