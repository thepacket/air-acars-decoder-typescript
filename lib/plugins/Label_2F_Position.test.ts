import { MessageDecoder } from '../MessageDecoder';
import { Label_2F_Position } from './Label_2F_Position';

describe('Label_2F_Position', () => {
  let plugin: Label_2F_Position;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_2F_Position(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-2f-position");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["2F"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "2F", text: '' });
    expect(decodeResult.decoder.name).toBe("label-2f-position");
  });

  test("decodes #1: 2227+3612-497/3559", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: "2227+3612-497/3559",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact Periodic Position Report (Label 2F)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:27:00",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "36.120 N, 4.970 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "3559 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC, HHMM)",
      value: "22:27",
    });
  });

  test("decodes #2: PACEPOSREQ", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: "PACEPOSREQ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #3: 2242+3526-11540/36121 LFPG/KLAX/36000/-133/ -54/0.84/237631/…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2242+3526-11540/36121
LFPG/KLAX/36000/-133/ -54/0.84/237631/225602/25.0/SMASH  /SHTNR  / -95/   94`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #4: 2242+4524-6821/38123 LFPG/KJFK/37999/-136/ -45/0.82/194884/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2242+4524-6821/38123
LFPG/KJFK/37999/-136/ -45/0.82/194884/182710/27.0/PLYMM  /ENE    / -69/   30`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #5: 2242+4524-6821/38123 LFPG/KJFK/37999/-136/ -45/0.82/194884/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2242+4524-6821/38123
LFPG/KJFK/37999/-136/ -45/0.82/194884/182710/27.0/PLYMM  /ENE    / -69/   30`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: PACEPOSREQ", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: "PACEPOSREQ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #7: 2239+3905-7590/23610 KIAD/LFPG/23002/ +86/ -28/0.73/266680/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2239+3905-7590/23610
KIAD/LFPG/23002/ +86/ -28/0.73/266680/205807/37.0/CORNE  /DONIL  / -50/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #8: 2239+3905-7590/23610 KIAD/LFPG/23002/ +86/ -28/0.73/266680/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2239+3905-7590/23610
KIAD/LFPG/23002/ +86/ -28/0.73/266680/205807/37.0/CORNE  /DONIL  / -50/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: 2239+3905-7590/23610 KIAD/LFPG/23002/ +86/ -28/0.73/266680/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2239+3905-7590/23610
KIAD/LFPG/23002/ +86/ -28/0.73/266680/205807/37.0/CORNE  /DONIL  / -50/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: 2239+3905-7590/23610 KIAD/LFPG/23002/ +86/ -28/0.73/266680/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `2239+3905-7590/23610
KIAD/LFPG/23002/ +86/ -28/0.73/266680/205807/37.0/CORNE  /DONIL  / -50/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: 0138+4534+2457/36214 WSSS/LFPG/35995/ -60/ -50/0.83/244599/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0138+4534+2457/36214
WSSS/LFPG/35995/ -60/ -50/0.83/244599/223697/29.0/BUD-25 /IRL-24 / +31/   20`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 0130+3832-7522/33580 KATL/LFPG/33004/ +40/ -50/0.84/259985/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0130+3832-7522/33580
KATL/LFPG/33004/ +40/ -50/0.84/259985/201706/36.0/CAA-12 /PAJ-11 / -23/   53`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: 0130+3832-7522/33580 KATL/LFPG/33004/ +40/ -50/0.84/259985/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0130+3832-7522/33580
KATL/LFPG/33004/ +40/ -50/0.84/259985/201706/36.0/CAA-12 /PAJ-11 / -23/   53`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: 0130+3832-7522/33580 KATL/LFPG/33004/ +40/ -50/0.84/259985/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0130+3832-7522/33580
KATL/LFPG/33004/ +40/ -50/0.84/259985/201706/36.0/CAA-12 /PAJ-11 / -23/   53`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: 0130+3832-7522/33580 KATL/LFPG/33004/ +40/ -50/0.84/259985/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0130+3832-7522/33580
KATL/LFPG/33004/ +40/ -50/0.84/259985/201706/36.0/CAA-12 /PAJ-11 / -23/   53`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: M57AAF01870140+4184+14999/32935 RJTT/LFPG/31991/ +45/ -43/0.…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `M57AAF01870140+4184+14999/32935
	RJTT/LFPG/31991/ +45/ -43/0.82/276550/183508/25.0/PUGAL  / -88/  163`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: 0148+4763+1789/36148 ZSPD/LFPG/35999/ -69/ -58/0.81/206152/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0148+4763+1789/36148
ZSPD/LFPG/35999/ -69/ -58/0.81/206152/190602/26.0/DEXIT  /BEGLA  / +78/   55`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: 0159+4224-8153/29516 KDTW/LFPG/28759/ +91/ -39/0.77/227888/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0159+4224-8153/29516
KDTW/LFPG/28759/ +91/ -39/0.77/227888/176395/33.0/JHW    /LNCON  / -33/   51`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: 0203+4841+1503/38134 ZSPD/LFPG/38000/ -68/ -56/0.82/204628/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0203+4841+1503/38134
ZSPD/LFPG/38000/ -68/ -56/0.82/204628/190602/26.0/INBED  /DEX-34 / +56/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: 0203+4841+1503/38134 ZSPD/LFPG/38000/ -68/ -56/0.82/204628/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0203+4841+1503/38134
ZSPD/LFPG/38000/ -68/ -56/0.82/204628/190602/26.0/INBED  /DEX-34 / +56/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: 0209+3463-11723/29795 KLAX/LFPG/28680/ +54/ -36/0.82/288308/…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0209+3463-11723/29795
KLAX/LFPG/28680/ +54/ -36/0.82/288308/209000/33.0/BLAZN  /NNAVY  / -95/   73`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: 0209+3463-11723/29795 KLAX/LFPG/28680/ +54/ -36/0.82/288308/…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0209+3463-11723/29795
KLAX/LFPG/28680/ +54/ -36/0.82/288308/209000/33.0/BLAZN  /NNAVY  / -95/   73`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 0209+3463-11723/29795 KLAX/LFPG/28680/ +54/ -36/0.82/288308/…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0209+3463-11723/29795
KLAX/LFPG/28680/ +54/ -36/0.82/288308/209000/33.0/BLAZN  /NNAVY  / -95/   73`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: 0209+3463-11723/29795 KLAX/LFPG/28680/ +54/ -36/0.82/288308/…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0209+3463-11723/29795
KLAX/LFPG/28680/ +54/ -36/0.82/288308/209000/33.0/BLAZN  /NNAVY  / -95/   73`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: 0218+4895+1202/38119 ZSPD/LFPG/37994/ -79/ -57/0.82/203158/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0218+4895+1202/38119
ZSPD/LFPG/37994/ -79/ -57/0.82/203158/190602/26.0/BOM-37 /INB-36 / +63/   36`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: 0218+4895+1202/38119 ZSPD/LFPG/37994/ -79/ -57/0.82/203158/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0218+4895+1202/38119
ZSPD/LFPG/37994/ -79/ -57/0.82/203158/190602/26.0/BOM-37 /INB-36 / +63/   36`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: 0229+4238-7577/37478 KDTW/LFPG/37002/ +88/ -57/0.83/224096/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0229+4238-7577/37478
KDTW/LFPG/37002/ +88/ -57/0.83/224096/176395/33.0/GDM-03 /PON-02 / -31/   93`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: 0229+4238-7577/37478 KDTW/LFPG/37002/ +88/ -57/0.83/224096/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0229+4238-7577/37478
KDTW/LFPG/37002/ +88/ -57/0.83/224096/176395/33.0/GDM-03 /PON-02 / -31/   93`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: 0229+4238-7577/37478 KDTW/LFPG/37002/ +88/ -57/0.83/224096/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0229+4238-7577/37478
KDTW/LFPG/37002/ +88/ -57/0.83/224096/176395/33.0/GDM-03 /PON-02 / -31/   93`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: 0229+4238-7577/37478 KDTW/LFPG/37002/ +88/ -57/0.83/224096/1…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0229+4238-7577/37478
KDTW/LFPG/37002/ +88/ -57/0.83/224096/176395/33.0/GDM-03 /PON-02 / -31/   93`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: 0245+4028-468/36168 GOBD/LFPG/36003/ +34/ -57/0.83/248209/23…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0245+4028-468/36168
GOBD/LFPG/36003/ +34/ -57/0.83/248209/231698/28.0/CNA    /LUSEM  /-121/   31`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: 0253+4921+1002/36127 WSSS/LFPG/35996/ -81/ -56/0.83/235853/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0253+4921+1002/36127
WSSS/LFPG/35996/ -81/ -56/0.83/235853/223697/29.0/RUD-30 /BOM-29 / +95/   42`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 0253+4921+1002/36127 WSSS/LFPG/35996/ -81/ -56/0.83/235853/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0253+4921+1002/36127
WSSS/LFPG/35996/ -81/ -56/0.83/235853/223697/29.0/RUD-30 /BOM-29 / +95/   42`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: 0253+4921+1002/36127 WSSS/LFPG/35996/ -81/ -56/0.83/235853/2…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0253+4921+1002/36127
WSSS/LFPG/35996/ -81/ -56/0.83/235853/223697/29.0/RUD-30 /BOM-29 / +95/   42`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: 0256+4832-454/37116 TFFR/LFPG/37000/ +85/ -60/0.82/228541/21…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0256+4832-454/37116
TFFR/LFPG/37000/ +85/ -60/0.82/228541/216802/37.0/ROMGO  /LATGO  / -85/   22`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: 0256+4832-454/37116 TFFR/LFPG/37000/ +85/ -60/0.82/228541/21…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0256+4832-454/37116
TFFR/LFPG/37000/ +85/ -60/0.82/228541/216802/37.0/ROMGO  /LATGO  / -85/   22`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: PACEPOSREQ", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: "PACEPOSREQ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: 0259+4763-057/3881 SOCA/LFPG/38488/ +54/ -61/0.82/183798/175…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0259+4763-057/3881
SOCA/LFPG/38488/ +54/ -61/0.82/183798/175307/35.0/BANOX  /ROM-06 / -49/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: 0259+4763-057/3881 SOCA/LFPG/38488/ +54/ -61/0.82/183798/175…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0259+4763-057/3881
SOCA/LFPG/38488/ +54/ -61/0.82/183798/175307/35.0/BANOX  /ROM-06 / -49/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: 0259+4763-057/3881 SOCA/LFPG/38488/ +54/ -61/0.82/183798/175…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0259+4763-057/3881
SOCA/LFPG/38488/ +54/ -61/0.82/183798/175307/35.0/BANOX  /ROM-06 / -49/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: 0259+4763-057/3881 SOCA/LFPG/38488/ +54/ -61/0.82/183798/175…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0259+4763-057/3881
SOCA/LFPG/38488/ +54/ -61/0.82/183798/175307/35.0/BANOX  /ROM-06 / -49/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: 0259+4763-057/3881 SOCA/LFPG/38488/ +54/ -61/0.82/183798/175…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0259+4763-057/3881
SOCA/LFPG/38488/ +54/ -61/0.82/183798/175307/35.0/BANOX  /ROM-06 / -49/   44`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: 0303+4749-201/41104 MMGL/LFPG/41004/ +86/ -65/0.82/173420/16…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0303+4749-201/41104
MMGL/LFPG/41004/ +86/ -65/0.82/173420/162896/34.0/NTS-29 /OLE-28 / -70/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: 0303+4749-201/41104 MMGL/LFPG/41004/ +86/ -65/0.82/173420/16…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0303+4749-201/41104
MMGL/LFPG/41004/ +86/ -65/0.82/173420/162896/34.0/NTS-29 /OLE-28 / -70/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: 0303+4749-201/41104 MMGL/LFPG/41004/ +86/ -65/0.82/173420/16…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0303+4749-201/41104
MMGL/LFPG/41004/ +86/ -65/0.82/173420/162896/34.0/NTS-29 /OLE-28 / -70/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: 0303+4749-201/41104 MMGL/LFPG/41004/ +86/ -65/0.82/173420/16…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0303+4749-201/41104
MMGL/LFPG/41004/ +86/ -65/0.82/173420/162896/34.0/NTS-29 /OLE-28 / -70/   37`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: PACEPOSREQ", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: "PACEPOSREQ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: 0308+5094-001/36115 RJTT/LFPG/36358/+153/ -55/0.83/227580/21…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0308+5094-001/36115
RJTT/LFPG/36358/+153/ -55/0.83/227580/216711/27.0/WAFFU  /SFD    / -22/   30`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: 0308+5094-001/36115 RJTT/LFPG/36358/+153/ -55/0.83/227580/21…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0308+5094-001/36115
RJTT/LFPG/36358/+153/ -55/0.83/227580/216711/27.0/WAFFU  /SFD    / -22/   30`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: 0308+5094-001/36115 RJTT/LFPG/36358/+153/ -55/0.83/227580/21…", () => {
    const decodeResult = plugin.decode({
      label: "2F",
      text: `0308+5094-001/36115
RJTT/LFPG/36358/+153/ -55/0.83/227580/216711/27.0/WAFFU  /SFD    / -22/   30`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-2f-position");
    expect(decodeResult.formatted.description).toBe("Compact Periodic Position Report (Label 2F)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
