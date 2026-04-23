import { MessageDecoder } from '../MessageDecoder';
import { Label_B0_AFN } from './Label_B0_AFN';

describe('Label_B0_AFN', () => {
  let plugin: Label_B0_AFN;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_B0_AFN(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-b0-afn");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["B0"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "B0", text: '' });
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
  });

  test("decodes #1: /YBBB.AFN/FMHPAL221,RPC9934,758558,222914/FPOS22082E149046,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHPAL221,RPC9934,758558,222914/FPOS22082E149046,1/FCOADS,01/FCOATC,0125B9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "PAL221",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "RPC9934",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:14",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "PAL221",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "758558",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "22:29:14",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S22082E149046, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "25B9",
    });
  });

  test("decodes #2: /YULE2YA.AFN/FMHACA345,.C-FNOI,C023C9,222317/FCPYYZE2YA,001F…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YULE2YA.AFN/FMHACA345,.C-FNOI,C023C9,222317/FCPYYZE2YA,001F7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YULE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FNOI",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:23:17",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "C023C9",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "22:23:17",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FCP → YYZE2YA, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "01F7",
    });
  });

  test("decodes #3: /YYZE2YA.AFN/FMHACA345,.C-FNOI,C023C9,222314/FPON45131W07615…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YYZE2YA.AFN/FMHACA345,.C-FNOI,C023C9,222314/FPON45131W076154,0/FCOATC,01/FCOADS,017479",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YYZE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FNOI",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:23:14",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "C023C9",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "22:23:14",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N45131W076154, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "7479",
    });
  });

  test("decodes #4: /YULE2YA.AFN/FMHACA345,.C-FNOI,C023C9,222312/FRP0083F", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YULE2YA.AFN/FMHACA345,.C-FNOI,C023C9,222312/FRP0083F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YULE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FNOI",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:23:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "C023C9",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "22:23:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FRP → 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "083F",
    });
  });

  test("decodes #5: /CZUL.AFN/FMHACA345,.C-FNOI,C023C9,222206/FPON45125W076061,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZUL.AFN/FMHACA345,.C-FNOI,C023C9,222206/FPON45125W076061,1/FCOATC,01/FCOADS,014537",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZUL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FNOI",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ACA345",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "C023C9",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "22:22:06",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N45125W076061, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "4537",
    });
  });

  test("decodes #6: /YULE2YA.AFN/FMHKLM695,.PH-AOB,,222155/FRP078A4", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YULE2YA.AFN/FMHKLM695,.PH-AOB,,222155/FRP078A4",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YULE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "KLM695",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "PH-AOB",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "KLM695",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FRP → 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "78A4",
    });
  });

  test("decodes #7: /CZVR.AFN/FMHDLH491,.D-AIGW,,222114/FPON49104W120404,1/FCOAD…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZVR.AFN/FMHDLH491,.D-AIGW,,222114/FPON49104W120404,1/FCOADS,01/FCOATC,015572",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZVR",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DLH491",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "D-AIGW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DLH491",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N49104W120404, 1",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "5572",
    });
  });

  test("decodes #8: /CZVR.AFN/FMHDLH491,.D-AIGW,,222114/FPON49104W120404,1/FCOAD…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZVR.AFN/FMHDLH491,.D-AIGW,,222114/FPON49104W120404,1/FCOADS,01/FCOATC,015572",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZVR",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DLH491",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "D-AIGW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DLH491",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N49104W120404, 1",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "5572",
    });
  });

  test("decodes #9: /CZVR.AFN/FMHDLH491,.D-AIGW,,222114/FPON49104W120404,1/FCOAD…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZVR.AFN/FMHDLH491,.D-AIGW,,222114/FPON49104W120404,1/FCOADS,01/FCOATC,015572",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZVR",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DLH491",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "D-AIGW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DLH491",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N49104W120404, 1",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "5572",
    });
  });

  test("decodes #10: /KUSA.AFN/FMHJBU1501,.N794JB,AAC7AB,222010/FPON39432W075591,…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/KUSA.AFN/FMHJBU1501,.N794JB,AAC7AB,222010/FPON39432W075591,1/FCOADS,01/FCOATC,01C595",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "KUSA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU1501",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N794JB",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:20:10",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "JBU1501",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AAC7AB",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "22:20:10",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N39432W075591, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "C595",
    });
  });

  test("decodes #11: /USADCXA.AFN/FMHAAL258,.N833AA,AB6380,013709/FCPNYCODYA,0744…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHAAL258,.N833AA,AB6380,013709/FCPNYCODYA,07440",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL258",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N833AA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:09",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL258",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB6380",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:37:09",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FCP → NYCODYA, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "7440",
    });
  });

  test("decodes #12: /USADCXA.AFN/FMHJBU33,.N4058J,,013701/FCPYQME2YA,0BE2E", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHJBU33,.N4058J,,013701/FCPYQME2YA,0BE2E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU33",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N4058J",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "JBU33",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FCP → YQME2YA, 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "BE2E",
    });
  });

  test("decodes #13: /CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1/FCOADS,01/FCOATC,01BBB3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N826NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB4866",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N40257W072475, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "BBB3",
    });
  });

  test("decodes #14: /CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1/FCOADS,01/FCOATC,01BBB3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N826NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB4866",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N40257W072475, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "BBB3",
    });
  });

  test("decodes #15: /CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1/FCOADS,01/FCOATC,01BBB3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N826NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB4866",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N40257W072475, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "BBB3",
    });
  });

  test("decodes #16: /CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL266,.N826NW,AB4866,013659/FPON40257W072475,1/FCOADS,01/FCOATC,01BBB3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N826NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL266",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB4866",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:36:59",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N40257W072475, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "BBB3",
    });
  });

  test("decodes #17: L09AUA0143/FUKJJYA.AFN/FMHUAL143,.N38955,A47FDE,013453/FPON5…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "L09AUA0143/FUKJJYA.AFN/FMHUAL143,.N38955,A47FDE,013453/FPON52332E167339,0/FCOATC,01/FCOADS,0124F4",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: /YBBB.AFN/FMHQFA51,.VH-EBK,7C146E,013435/FPOS27118E152455,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHQFA51,.VH-EBK,7C146E,013435/FPOS27118E152455,1/FCOADS,01/FCOATC,01056E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "QFA51",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VH-EBK",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:35",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "QFA51",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "7C146E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:34:35",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S27118E152455, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "056E",
    });
  });

  test("decodes #19: /YBBB.AFN/FMHQFA51,.VH-EBK,7C146E,013435/FPOS27118E152455,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHQFA51,.VH-EBK,7C146E,013435/FPOS27118E152455,1/FCOADS,01/FCOATC,01056E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "QFA51",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VH-EBK",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:35",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "QFA51",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "7C146E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:34:35",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S27118E152455, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "056E",
    });
  });

  test("decodes #20: /CZEG.AFN/FMHAFR23G,.F-GZNQ,3965B0,013344/FPON52193W096441,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZEG.AFN/FMHAFR23G,.F-GZNQ,3965B0,013344/FPON52193W096441,1/FCOADS,01/FCOATC,01CB9A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZEG",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AFR23G",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "F-GZNQ",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:33:44",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AFR23G",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "3965B0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:33:44",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N52193W096441, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "CB9A",
    });
  });

  test("decodes #21: J69ASQ0022/ANCATYA.AFN/FMHSIA22,.9V-SGC,,013232/FCPANCXFXA,0…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "J69ASQ0022/ANCATYA.AFN/FMHSIA22,.9V-SGC,,013232/FCPANCXFXA,05733",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #23: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #24: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #25: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #26: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #27: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #28: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #29: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #30: /CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHDAL74,.N829NW,AB538B,013112/FPON42198W074017,1/FCOADS,01/FCOATC,012849",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N829NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL74",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB538B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:31:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42198W074017, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2849",
    });
  });

  test("decodes #31: /YBBB.AFN/FMHCES711,.B-5975,7803BF,014418/FPOS34118E151490,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHCES711,.B-5975,7803BF,014418/FPOS34118E151490,1/FCOADS,01/FCOATC,018096",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CES711",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "B-5975",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:44:18",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CES711",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "7803BF",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:44:18",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S34118E151490, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "8096",
    });
  });

  test("decodes #32: /YBBB.AFN/FMHCES711,.B-5975,7803BF,014418/FPOS34118E151490,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHCES711,.B-5975,7803BF,014418/FPOS34118E151490,1/FCOADS,01/FCOATC,018096",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CES711",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "B-5975",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:44:18",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CES711",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "7803BF",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:44:18",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S34118E151490, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "8096",
    });
  });

  test("decodes #33: /CZQM.AFN/FMHBAW172,.G-VIIJ,400610,014334/FPON41318W070264,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHBAW172,.G-VIIJ,400610,014334/FPON41318W070264,1/FCOADS,01/FCOATC,0181D9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "BAW172",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "G-VIIJ",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:43:34",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "BAW172",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "400610",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:43:34",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N41318W070264, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "81D9",
    });
  });

  test("decodes #34: /CZQM.AFN/FMHBAW172,.G-VIIJ,400610,014334/FPON41318W070264,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZQM.AFN/FMHBAW172,.G-VIIJ,400610,014334/FPON41318W070264,1/FCOADS,01/FCOATC,0181D9",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZQM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "BAW172",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "G-VIIJ",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:43:34",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "BAW172",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "400610",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:43:34",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N41318W070264, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "81D9",
    });
  });

  test("decodes #35: /USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014218/FCPYQME2YA,06A06", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014218/FCPYQME2YA,06A06",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N813AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:18",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB148E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:42:18",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FCP → YQME2YA, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "6A06",
    });
  });

  test("decodes #36: /YQME2YA.AFN/FMHAAL40,.N813AN,AB148E,014210/FPON42131W070547…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YQME2YA.AFN/FMHAAL40,.N813AN,AB148E,014210/FPON42131W070547,0/FCOATC,01/FCOADS,01A4C7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N813AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:10",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB148E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:42:10",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42131W070547, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "A4C7",
    });
  });

  test("decodes #37: /YQME2YA.AFN/FMHAAL40,.N813AN,AB148E,014210/FPON42131W070547…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YQME2YA.AFN/FMHAAL40,.N813AN,AB148E,014210/FPON42131W070547,0/FCOATC,01/FCOADS,01A4C7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N813AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:10",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB148E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:42:10",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N42131W070547, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "A4C7",
    });
  });

  test("decodes #38: /USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014204/FRP0EFE7", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014204/FRP0EFE7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N813AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:04",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB148E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:42:04",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FRP → 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "EFE7",
    });
  });

  test("decodes #39: /USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014204/FRP0EFE7", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014204/FRP0EFE7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N813AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:04",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB148E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:42:04",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FRP → 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "EFE7",
    });
  });

  test("decodes #40: /USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014204/FRP0EFE7", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHAAL40,.N813AN,AB148E,014204/FRP0EFE7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N813AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:42:04",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AAL40",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB148E",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:42:04",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FRP → 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "EFE7",
    });
  });

  test("decodes #41: /KZAK.AFN/FMHDAL310,.N809NW,AB048D,014135/FPON21135W157248,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/KZAK.AFN/FMHDAL310,.N809NW,AB048D,014135/FPON21135W157248,1/FCOADS,01/FCOATC,011779",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "KZAK",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL310",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N809NW",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:41:35",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL310",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "AB048D",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:41:35",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N21135W157248, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1779",
    });
  });

  test("decodes #42: /PAZA.AFN/FMHCAL5311,B-18780,899017,014114/FPON61172W152413,…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/PAZA.AFN/FMHCAL5311,B-18780,899017,014114/FPON61172W152413,1/FCOADS,01/FCOATC,01C151",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "PAZA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CAL5311",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "B-18780",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:41:14",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CAL5311",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "899017",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:41:14",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N61172W152413, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "C151",
    });
  });

  test("decodes #43: /USADCXA.AFN/FMHUAL177,.N23994,A22D9F,014104/FCPYWGE2YA,0634…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHUAL177,.N23994,A22D9F,014104/FCPYWGE2YA,06342",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAL177",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N23994",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:41:04",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAL177",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "A22D9F",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:41:04",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FCP → YWGE2YA, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "6342",
    });
  });

  test("decodes #44: /YWGE2YA.AFN/FMHUAL177,.N23994,A22D9F,014103/FPON46485W09211…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YWGE2YA.AFN/FMHUAL177,.N23994,A22D9F,014103/FPON46485W092112,0/FCOATC,01/FCOADS,019F8B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YWGE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAL177",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N23994",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:41:03",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAL177",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "A22D9F",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:41:03",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N46485W092112, 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9F8B",
    });
  });

  test("decodes #45: /USADCXA.AFN/FMHUAL177,.N23994,A22D9F,014101/FRP07943", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/USADCXA.AFN/FMHUAL177,.N23994,A22D9F,014101/FRP07943",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAL177",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N23994",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:41:01",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAL177",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "A22D9F",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:41:01",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FRP → 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "7943",
    });
  });

  test("decodes #46: /YBBB.AFN/FMHACA36,.C-FGDT,C0103A,014056/FPOS27313E153249,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHACA36,.C-FGDT,C0103A,014056/FPOS27313E153249,1/FCOATC,01/FCOADS,01F327",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ACA36",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FGDT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:56",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ACA36",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "C0103A",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:40:56",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S27313E153249, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "F327",
    });
  });

  test("decodes #47: /YBBB.AFN/FMHACA36,.C-FGDT,C0103A,014056/FPOS27313E153249,1/…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/YBBB.AFN/FMHACA36,.C-FGDT,C0103A,014056/FPOS27313E153249,1/FCOATC,01/FCOADS,01F327",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "YBBB",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ACA36",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FGDT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:56",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ACA36",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "C0103A",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:40:56",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → S27313E153249, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "F327",
    });
  });

  test("decodes #48: /EVRR.AFN/FMHCSN8021,.B-1242,781360,014521/FPON57483E024032,…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/EVRR.AFN/FMHCSN8021,.B-1242,781360,014521/FPON57483E024032,1/FCOATC,01/FCOADS,010471",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "EVRR",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN8021",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "B-1242",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:45:21",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CSN8021",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "781360",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:45:21",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N57483E024032, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "0471",
    });
  });

  test("decodes #49: /CZYZ.AFN/FMHUAE9988,.A6-EGZ,89621B,014040/FPON45146W087166,…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZYZ.AFN/FMHUAE9988,.A6-EGZ,89621B,014040/FPON45146W087166,1/FCOADS,01/FCOATC,019276",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZYZ",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAE9988",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "A6-EGZ",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:40",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAE9988",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "89621B",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:40:40",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N45146W087166, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9276",
    });
  });

  test("decodes #50: /CZWG.AFN/FMHBAW264,.G-YMML,4007F7,014032/FPON43514W105394,1…", () => {
    const decodeResult = plugin.decode({
      label: "B0",
      text: "/CZWG.AFN/FMHBAW264,.G-YMML,4007F7,014032/FPON43514W105394,1/FCOADS,01/FCOATC,015202",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A CPDLC Logon)");
    expect(decodeResult.formatted.items).toHaveLength(14);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN Contact (FN_CON) — FANS 1/A CPDLC Logon Request",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atsu_address",
      code: "ATSU",
      label: "ATSU Address",
      value: "CZWG",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APP",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "BAW264",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "G-YMML",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:32",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "BAW264",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "icao_24bit",
      code: "ICAO24",
      label: "ICAO 24-bit Address",
      value: "4007F7",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "time",
      code: "TIME",
      label: "Logon Time (UTC)",
      value: "01:40:32",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block_1",
      code: "CAP1",
      label: "Capability Block 1",
      value: "/FPO → N43514W105394, 1",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block_2",
      code: "CAP2",
      label: "Capability Block 2",
      value: "/FCO → ADS, 01",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "capability_block_3",
      code: "CAP3",
      label: "Capability Block 3",
      value: "/FCO → ATC, 01",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "5202",
    });
  });

});
