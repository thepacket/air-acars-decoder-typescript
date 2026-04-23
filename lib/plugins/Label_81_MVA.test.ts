import { MessageDecoder } from '../MessageDecoder';
import { Label_81_MVA } from './Label_81_MVA';

describe('Label_81_MVA', () => {
  let plugin: Label_81_MVA;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_81_MVA(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-81-mva");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["81"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "81", text: '' });
    expect(decodeResult.decoder.name).toBe("label-81-mva");
  });

  test("decodes #1: MVA JST0811/22.VHVWX.SYD AA2222", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0811/22.VHVWX.SYD
AA2222     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0811",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVWX",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:22",
    });
  });

  test("decodes #2: MVA JST0811/22.VHVWX.SYD AA2222", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0811/22.VHVWX.SYD
AA2222     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0811",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVWX",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:22:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:22",
    });
  });

  test("decodes #3: MVA JST0510/22.VHVGN.SYD AA2212/2220 SI FB 26", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0510/22.VHVGN.SYD
AA2212/2220
SI FB  26`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0510",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVGN",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:12:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "22:20",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 26",
    });
  });

  test("decodes #4: MVA JST0510/22.VHVGN.SYD AA2212/2220 SI FB 26", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0510/22.VHVGN.SYD
AA2212/2220
SI FB  26`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0510",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVGN",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:12:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:12",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "22:20",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 26",
    });
  });

  test("decodes #5: MVA JST0561/22.VHVQC.MEL AA2235", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0561/22.VHVQC.MEL
AA2235     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0561",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVQC",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:35:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:35",
    });
  });

  test("decodes #6: MVA JST0561/22.VHVQC.MEL AA2235/2241 SI FB 31", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0561/22.VHVQC.MEL
AA2235/2241
SI FB  31`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0561",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVQC",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:35:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:35",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "22:41",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 31",
    });
  });

  test("decodes #7: MVA JST0771/22.VHX3D.MEL AA2245", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0771/22.VHX3D.MEL
AA2245     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0771",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHX3D",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:45:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "22:45",
    });
  });

  test("decodes #8: THANKS", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `THANKS
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: DISPCOPY/JROD", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPCOPY/JROD",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: DISPCOPY/JROD", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPCOPY/JROD",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: MVA JST0606/23.VHXNJ.SYD AA0132/0137 SI FB 24", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0606/23.VHXNJ.SYD
AA0132/0137
SI FB  24`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0606",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHXNJ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:32:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "01:32",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 24",
    });
  });

  test("decodes #12: MVA JST0606/23.VHXNJ.SYD AA0132/0137 SI FB 24", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0606/23.VHXNJ.SYD
AA0132/0137
SI FB  24`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0606",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHXNJ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:32:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "01:32",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 24",
    });
  });

  test("decodes #13: 25,CMB529,KHIF,CYQX,22,BREAKING ACTION AT,GANDER 1/1/1,,,,,,…", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "25,CMB529,KHIF,CYQX,22,BREAKING ACTION AT,GANDER 1/1/1,,,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: 25,CMB529,KHIF,CYQX,22,BREAKING ACTION AT,GANDER 1/1/1,,,,,,…", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "25,CMB529,KHIF,CYQX,22,BREAKING ACTION AT,GANDER 1/1/1,,,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: DISPWE WILL NEED EMT AT GATEGIVING OXYGEN NOW", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPWE WILL NEED EMT AT GATEGIVING OXYGEN NOW",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: 030/090 IAO LGT/LGTP. 270/290 INC LGT. 310 MYOGI INC ALMOST …", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `030/090 IAO LGT/LGTP.
270/290 INC LGT.
310 MYOGI INC ALMOST SMT
H.
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: DISP35YO FEMALE 22DFAITED IN AISLEAWAKE NOWTAKES CANER MEDSS…", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISP35YO FEMALE 22DFAITED IN AISLEAWAKE NOWTAKES CANER MEDSSTARTING STAT MD PATCHWAITING ON MORE INFO NOW",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: MVA JST0606/23.VHXNJ.SYD AA0132", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0606/23.VHXNJ.SYD
AA0132     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0606",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHXNJ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:32:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "01:32",
    });
  });

  test("decodes #19: MVA JST0606/23.VHXNJ.SYD AA0132", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0606/23.VHXNJ.SYD
AA0132     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0606",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHXNJ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:32:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "01:32",
    });
  });

  test("decodes #20: MVA QFA0516/22.VHEBJ.YBBN AA0131", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
QFA0516/22.VHEBJ.YBBN
AA0131     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "QFA0516",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHEBJ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "YBBN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "QFA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "YBBN",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "01:31",
    });
  });

  test("decodes #21: DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPRSV 2 HOUR CALLOUT1 HOUR BRIEF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: BLW 120 IAO LGT 270/290 CLR LGT 390 NON STD PANS Y40N CLR SM…", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `BLW 120 IAO LGT 270/290
CLR LGT 390 NON STD PANS
Y40N CLR SMTH
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: KMCI,KMCO,THANKS I THINK WE HAVE 30MINS O R SUMMIN", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `KMCI,KMCO,THANKS
I THINK WE HAVE 30MINS O
R SUMMIN




`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: DISPNOT YET", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPNOT YET",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: MSG RCVD,KEEP MONITOR", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "MSG RCVD,KEEP MONITOR",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: DISPTHINGS RAN SO MUCHSMOOTHER WHEN BARRYWAS HEREBRING BARRY…", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPTHINGS RAN SO MUCHSMOOTHER WHEN BARRYWAS HEREBRING BARRY BACK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: DISPTNEYRE KEEPING US FL320", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPTNEYRE KEEPING US FL320",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: TO HND CLB SAME 360 INC I-", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `TO HND
CLB SAME
360 INC I-
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: /DISPATCH/YES/MERHABA ROTAMIZ ETILO 5920N 5830N 5740N 5550N …", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `/DISPATCH/YES/MERHABA
ROTAMIZ
ETILO 5920N 5830N
5740N 5550N MELDI
SEKLINDE DEGISTI
PLANIMIZI GUNCELLEYEBILR
MISINIZ
TESEKKURLER



`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: MVA JST1607/23.VHVQQ.PER AA0201", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST1607/23.VHVQQ.PER
AA0201     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST1607",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVQQ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "PER",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:01:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "PER",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:01",
    });
  });

  test("decodes #35: MVA JST1607/23.VHVQQ.PER AA0201/0204 SI FB 36", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST1607/23.VHVQQ.PER
AA0201/0204
SI FB  36`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST1607",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVQQ",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "PER",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:01:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "PER",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:01",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "02:04",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 36",
    });
  });

  test("decodes #36: MVA JST2931/23.VHUVT.PER AA0158/0204 SI FB 32", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST2931/23.VHUVT.PER
AA0158/0204
SI FB  32`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST2931",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHUVT",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "PER",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:58:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "PER",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "01:58",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "02:04",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 32",
    });
  });

  test("decodes #37: MVA JST0407/23.VHVFI.SYD AA0209", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0407/23.VHVFI.SYD
AA0209     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0407",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVFI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:09:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:09",
    });
  });

  test("decodes #38: MVA JST0407/23.VHVFI.SYD AA0209", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0407/23.VHVFI.SYD
AA0209     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0407",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVFI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:09:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:09",
    });
  });

  test("decodes #39: FREE EST RDP 0337ZFOB NOW 26.7TFL 400EFOB 20.5T AT RDPFL 390…", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `FREE
EST RDP 0337ZFOB NOW 26.7TFL 400EFOB 20.5T AT RDPFL 390 AFT RDPETA D
EST 0612ZREQ RD INFO`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: MVA JST0654/23.VHA5E.CBR AA0218/0224 SI FB 36", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0654/23.VHA5E.CBR
AA0218/0224
SI FB  36`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0654",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHA5E",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CBR",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:18:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "CBR",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:18",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "02:24",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 36",
    });
  });

  test("decodes #41: FREE REVD RD INFO AND ACPT ITFLY TO DEST LPPT", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `FREE
REVD RD INFO AND ACPT ITFLY TO DEST LPPT`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: MSF46M23023300KLM100 CYYZEHAM PWR OUTLET DANK VOOR DE INFO. …", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `MSF46M23023300KLM100  CYYZEHAM
PWR OUTLET
DANK VOOR DE INFO.
WE GAAN HET PROBEREN.
GRTZ JERRY/MARNIX
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: GRACIAS SALUDOS", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `GRACIAS
SALUDOS
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: MVA JST0734/23.VHVGH.MEL AA0247/0252 SI FB 29", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0734/23.VHVGH.MEL
AA0247/0252
SI FB  29`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0734",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVGH",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:47:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "MEL",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:47",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "02:52",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 29",
    });
  });

  test("decodes #45: THANK.YOU", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `THANK.YOU
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: MVA JST0534/23.VHVGN.SYD AA0259", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0534/23.VHVGN.SYD
AA0259     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0534",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVGN",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:59:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:59",
    });
  });

  test("decodes #47: MVA JST0534/23.VHVGN.SYD AA0259", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0534/23.VHVGN.SYD
AA0259     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0534",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVGN",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:59:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:59",
    });
  });

  test("decodes #48: DISPYOU WILL NEVER BELIEVEIT BUT WE TOOKOFF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPYOU WILL NEVER BELIEVEIT BUT WE TOOKOFF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: DISPYOU WILL NEVER BELIEVEIT BUT WE TOOKOFF", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: "DISPYOU WILL NEVER BELIEVEIT BUT WE TOOKOFF",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: MVA JST0951/23.VHVWU.SYD AA0254/0302 SI FB 38", () => {
    const decodeResult = plugin.decode({
      label: "81",
      text: `
MVA
JST0951/23.VHVWU.SYD
AA0254/0302
SI FB  38`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-81-mva");
    expect(decodeResult.formatted.description).toBe("Aircraft-Initiated Movement Message (MVA)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Aircraft-Initiated Movement Message (MVA)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "mva_type",
      code: "MVATYPE",
      label: "MVA/MVT Indicator",
      value: "MVA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JST0951",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "VHVWU",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:54:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "carrier",
      code: "CARRIER",
      label: "Carrier Code",
      value: "JST",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "23",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "airport",
      code: "APT",
      label: "Airport of Movement",
      value: "SYD",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "actual_touchdown",
      code: "AAT",
      label: "Actual Touchdown (UTC)",
      value: "02:54",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "actual_on_blocks",
      code: "AAB",
      label: "Actual On Blocks (UTC)",
      value: "03:02",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "supplementary",
      code: "SI",
      label: "Supplementary Info",
      value: "FB (Fuel on Board): 38",
    });
  });

});
