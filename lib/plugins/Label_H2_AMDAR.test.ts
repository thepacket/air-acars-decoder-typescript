import { MessageDecoder } from '../MessageDecoder';
import { Label_H2_AMDAR } from './Label_H2_AMDAR';

describe('Label_H2_AMDAR', () => {
  let plugin: Label_H2_AMDAR;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_H2_AMDAR(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-h2-amdar");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["H2"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "H2", text: '' });
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
  });

  test("decodes #1: 02A222231LEALEGGWN38160W000341222211 14P167 55P172244001G 10…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02A222231LEALEGGWN38160W000341222211  14P167      55P172244001G     102P177297001G     140P187057003G     171P207165002G     201P210163007G     227P210172004G     255P205333003G     288P200243002G     325P202184004G     369P200219003G     416P187251001G     474P177264006G     530P172234007G     592P160207008G     662P142206008G    /N38203W0001921001P047233011G    N38230W0001511250M027242020G    N38277W0001411560M097257018G    N38325W0001291847M160279022G    N38375W0001172079M210290033G    N38430W0001042212M237284034G    N38485W0000902479M295305030G    N38540W0000752752M370307033G    N38595W0000602929M415311031G    N39050W0000453086M452308028G    N39107W0000303278M500298023G    N39163W0000143423M535286023G    N39220E0000013530M565286026G    N39279E0000163715M597294026G    N39335E0000323791M622286027G    N39395E0000483800M625289026G    N39455E0000653800M622288026G    N39515E0000823800M622286027G    N39575E0000983800M627285025G    N40037E0001153799M625282027G    N40097E0001323801M625282028G    ",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(27);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "21",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.338 N, 0.320 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10010 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "4.7 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "02A222231LEALEGGWN38160W00034122221114P16755P172244001G102P177297001G140P187057003G171P207165002G201P210163007G227P210172004G255P205333003G288P200243002G325P202184004G369P200219003G416P187251001G474P177264006G530P172234007G592P160207008G662P142206008G/ (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 38°20.3′ W 000°19.2′ · 10,010 ft · +4.7°C · wind 233°/11 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 38°23.0′ W 000°15.1′ · 12,500 ft · -2.7°C · wind 242°/20 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 38°27.7′ W 000°14.1′ · 15,600 ft · -9.7°C · wind 257°/18 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 38°32.5′ W 000°12.9′ · 18,470 ft · -16°C · wind 279°/22 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 38°37.5′ W 000°11.7′ · 20,790 ft · -21°C · wind 290°/33 kt",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 38°43.0′ W 000°10.4′ · 22,120 ft · -23.7°C · wind 284°/34 kt",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "record_7",
      code: "REC7",
      label: "Record 7",
      value: "N 38°48.5′ W 000°09.0′ · 24,790 ft · -29.5°C · wind 305°/30 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "record_8",
      code: "REC8",
      label: "Record 8",
      value: "N 38°54.0′ W 000°07.5′ · 27,520 ft · -37°C · wind 307°/33 kt",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "record_9",
      code: "REC9",
      label: "Record 9",
      value: "N 38°59.5′ W 000°06.0′ · 29,290 ft · -41.5°C · wind 311°/31 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "record_10",
      code: "REC10",
      label: "Record 10",
      value: "N 39°05.0′ W 000°04.5′ · 30,860 ft · -45.2°C · wind 308°/28 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "record_11",
      code: "REC11",
      label: "Record 11",
      value: "N 39°10.7′ W 000°03.0′ · 32,780 ft · -50°C · wind 298°/23 kt",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "record_12",
      code: "REC12",
      label: "Record 12",
      value: "N 39°16.3′ W 000°01.4′ · 34,230 ft · -53.5°C · wind 286°/23 kt",
    });
    expect(decodeResult.formatted.items[18]).toEqual({
      type: "record_13",
      code: "REC13",
      label: "Record 13",
      value: "N 39°22.0′ E 000°00.1′ · 35,300 ft · -56.5°C · wind 286°/26 kt",
    });
    expect(decodeResult.formatted.items[19]).toEqual({
      type: "record_14",
      code: "REC14",
      label: "Record 14",
      value: "N 39°27.9′ E 000°01.6′ · 37,150 ft · -59.7°C · wind 294°/26 kt",
    });
    expect(decodeResult.formatted.items[20]).toEqual({
      type: "record_15",
      code: "REC15",
      label: "Record 15",
      value: "N 39°33.5′ E 000°03.2′ · 37,910 ft · -62.2°C · wind 286°/27 kt",
    });
    expect(decodeResult.formatted.items[21]).toEqual({
      type: "record_16",
      code: "REC16",
      label: "Record 16",
      value: "N 39°39.5′ E 000°04.8′ · 38,000 ft · -62.5°C · wind 289°/26 kt",
    });
    expect(decodeResult.formatted.items[22]).toEqual({
      type: "record_17",
      code: "REC17",
      label: "Record 17",
      value: "N 39°45.5′ E 000°06.5′ · 38,000 ft · -62.2°C · wind 288°/26 kt",
    });
    expect(decodeResult.formatted.items[23]).toEqual({
      type: "record_18",
      code: "REC18",
      label: "Record 18",
      value: "N 39°51.5′ E 000°08.2′ · 38,000 ft · -62.2°C · wind 286°/27 kt",
    });
    expect(decodeResult.formatted.items[24]).toEqual({
      type: "record_19",
      code: "REC19",
      label: "Record 19",
      value: "N 39°57.5′ E 000°09.8′ · 38,000 ft · -62.7°C · wind 285°/25 kt",
    });
    expect(decodeResult.formatted.items[25]).toEqual({
      type: "record_20",
      code: "REC20",
      label: "Record 20",
      value: "N 40°03.7′ E 000°11.5′ · 37,990 ft · -62.5°C · wind 282°/27 kt",
    });
    expect(decodeResult.formatted.items[26]).toEqual({
      type: "record_21",
      code: "REC21",
      label: "Record 21",
      value: "N 40°09.7′ E 000°13.2′ · 38,010 ft · -62.5°C · wind 282°/28 kt",
    });
  });

  test("decodes #2: 000453086M452308028G N39107W0000303278M500298023G N39163W000…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "000453086M452308028G    N39107W0000303278M500298023G    N39163W0000143423M535286023G    N39220E0000013530M565286026G    N39279E0000163715M597294026G    N39335E0000323791M622286027G    N39395E0000483800M62528902",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "5",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.178 N, 0.050 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "32780 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-50 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "000453086M452308028G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 39°10.7′ W 000°03.0′ · 32,780 ft · -50°C · wind 298°/23 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 39°16.3′ W 000°01.4′ · 34,230 ft · -53.5°C · wind 286°/23 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 39°22.0′ E 000°00.1′ · 35,300 ft · -56.5°C · wind 286°/26 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 39°27.9′ E 000°01.6′ · 37,150 ft · -59.7°C · wind 294°/26 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 39°33.5′ E 000°03.2′ · 37,910 ft · -62.2°C · wind 286°/27 kt",
    });
  });

  test("decodes #3: 57018G N38325W0001291847M160279022G N38375W0001172079M210290…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "57018G    N38325W0001291847M160279022G    N38375W0001172079M210290033G    N38430W0001042212M237284034G    N38485W0000902479M295305030G    N38540W0000752752M370307033G    N38595W0000602929M415311031G    N39050W0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "6",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.542 N, 0.215 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "18470 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-16 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "57018G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 38°32.5′ W 000°12.9′ · 18,470 ft · -16°C · wind 279°/22 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 38°37.5′ W 000°11.7′ · 20,790 ft · -21°C · wind 290°/33 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 38°43.0′ W 000°10.4′ · 22,120 ft · -23.7°C · wind 284°/34 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 38°48.5′ W 000°09.0′ · 24,790 ft · -29.5°C · wind 305°/30 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 38°54.0′ W 000°07.5′ · 27,520 ft · -37°C · wind 307°/33 kt",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 38°59.5′ W 000°06.0′ · 29,290 ft · -41.5°C · wind 311°/31 kt",
    });
  });

  test("decodes #4: 4004G 369P200219003G 416P187251001G 474P177264006G 530P17223…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "4004G     369P200219003G     416P187251001G     474P177264006G     530P172234007G     592P160207008G     662P142206008G    /N38203W0001921001P047233011G    N38230W0001511250M027242020G    N38277W0001411560M0972",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.338 N, 0.320 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10010 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "4.7 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "4004G369P200219003G416P187251001G474P177264006G530P172234007G592P160207008G662P142206008G/ (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 38°20.3′ W 000°19.2′ · 10,010 ft · +4.7°C · wind 233°/11 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 38°23.0′ W 000°15.1′ · 12,500 ft · -2.7°C · wind 242°/20 kt",
    });
  });

  test("decodes #5: 02A222239PHOGPHLIN20543W156276222223- 2P260 69P245053006G 11…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02A222239PHOGPHLIN20543W156276222223-  2P260      69P245053006G     115P235126008G     152P225096015G     165P222096015G     203P210096015G     261P200112010G     334P180138007G     394P167156006G     458P165127008G     513P157134002G     563P147193004G     596P147357003G     636P142056002G    /N21021W156383 799P115318006G    N21019W156416 972P090336004G    N21010W1564501014P085319006G    N20585W1564821018P087321007G    N20557W1565161098P080009002G    N20530W1565531168P075085010G    N20517W1565971263P057072011G    N20513W1570451347P040058016G    N20520W1570941446P007048019G    N20527W1571421561M020028020G    N20537W1571901671M047027016G    N20553W1572371766M067030016G    N20569W1572861868M092028014G    N20585W1573341960M112019014G    N21001W1573832052M130357006G    N21019W1574322142M140326005G    N21035W1574812237M160310009G    N21051W1575312315M177330012G    N21069W1575822390M192330014G    N21087W1580312402M197331013G    ",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(24);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "18",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "21.017 N, 156.750 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10140 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "8.5 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "02A222239PHOGPHLIN20543W156276222223-2P26069P245053006G115P235126008G152P225096015G165P222096015G203P210096015G261P200112010G334P180138007G394P167156006G458P165127008G513P157134002G563P147193004G596P147357003G636P142056002G/N21021W156383799P115318006GN21019W156416972P090336004G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 21°01.0′ W 156°45.0′ · 10,140 ft · +8.5°C · wind 319°/6 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 20°58.5′ W 156°48.2′ · 10,180 ft · +8.7°C · wind 321°/7 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 20°55.7′ W 156°51.6′ · 10,980 ft · +8°C · wind 009°/2 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 20°53.0′ W 156°55.3′ · 11,680 ft · +7.5°C · wind 085°/10 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 20°51.7′ W 156°59.7′ · 12,630 ft · +5.7°C · wind 072°/11 kt",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 20°51.3′ W 157°04.5′ · 13,470 ft · +4°C · wind 058°/16 kt",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "record_7",
      code: "REC7",
      label: "Record 7",
      value: "N 20°52.0′ W 157°09.4′ · 14,460 ft · +0.7°C · wind 048°/19 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "record_8",
      code: "REC8",
      label: "Record 8",
      value: "N 20°52.7′ W 157°14.2′ · 15,610 ft · -2°C · wind 028°/20 kt",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "record_9",
      code: "REC9",
      label: "Record 9",
      value: "N 20°53.7′ W 157°19.0′ · 16,710 ft · -4.7°C · wind 027°/16 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "record_10",
      code: "REC10",
      label: "Record 10",
      value: "N 20°55.3′ W 157°23.7′ · 17,660 ft · -6.7°C · wind 030°/16 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "record_11",
      code: "REC11",
      label: "Record 11",
      value: "N 20°56.9′ W 157°28.6′ · 18,680 ft · -9.2°C · wind 028°/14 kt",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "record_12",
      code: "REC12",
      label: "Record 12",
      value: "N 20°58.5′ W 157°33.4′ · 19,600 ft · -11.2°C · wind 019°/14 kt",
    });
    expect(decodeResult.formatted.items[18]).toEqual({
      type: "record_13",
      code: "REC13",
      label: "Record 13",
      value: "N 21°00.1′ W 157°38.3′ · 20,520 ft · -13°C · wind 357°/6 kt",
    });
    expect(decodeResult.formatted.items[19]).toEqual({
      type: "record_14",
      code: "REC14",
      label: "Record 14",
      value: "N 21°01.9′ W 157°43.2′ · 21,420 ft · -14°C · wind 326°/5 kt",
    });
    expect(decodeResult.formatted.items[20]).toEqual({
      type: "record_15",
      code: "REC15",
      label: "Record 15",
      value: "N 21°03.5′ W 157°48.1′ · 22,370 ft · -16°C · wind 310°/9 kt",
    });
    expect(decodeResult.formatted.items[21]).toEqual({
      type: "record_16",
      code: "REC16",
      label: "Record 16",
      value: "N 21°05.1′ W 157°53.1′ · 23,150 ft · -17.7°C · wind 330°/12 kt",
    });
    expect(decodeResult.formatted.items[22]).toEqual({
      type: "record_17",
      code: "REC17",
      label: "Record 17",
      value: "N 21°06.9′ W 157°58.2′ · 23,900 ft · -19.2°C · wind 330°/14 kt",
    });
    expect(decodeResult.formatted.items[23]).toEqual({
      type: "record_18",
      code: "REC18",
      label: "Record 18",
      value: "N 21°08.7′ W 158°03.1′ · 24,020 ft · -19.7°C · wind 331°/13 kt",
    });
  });

  test("decodes #6: 671M047027016G N20553W1572371766M067030016G N20569W157286186…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "671M047027016G    N20553W1572371766M067030016G    N20569W1572861868M092028014G    N20585W1573341960M112019014G    N21001W1573832052M130357006G    N21019W1574322142M140326005G    N21035W1574812237M160310009G    ",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "6",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "20.922 N, 157.395 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "17660 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-6.7 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "671M047027016G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 20°55.3′ W 157°23.7′ · 17,660 ft · -6.7°C · wind 030°/16 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 20°56.9′ W 157°28.6′ · 18,680 ft · -9.2°C · wind 028°/14 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 20°58.5′ W 157°33.4′ · 19,600 ft · -11.2°C · wind 019°/14 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 21°00.1′ W 157°38.3′ · 20,520 ft · -13°C · wind 357°/6 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 21°01.9′ W 157°43.2′ · 21,420 ft · -14°C · wind 326°/5 kt",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 21°03.5′ W 157°48.1′ · 22,370 ft · -16°C · wind 310°/9 kt",
    });
  });

  test("decodes #7: N20557W1565161098P080009002G N20530W1565531168P075085010G N2…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "    N20557W1565161098P080009002G    N20530W1565531168P075085010G    N20517W1565971263P057072011G    N20513W1570451347P040058016G    N20520W1570941446P007048019G    N20527W1571421561M020028020G    N20537W1571901",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "6",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "20.928 N, 156.860 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10980 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "8 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 20°55.7′ W 156°51.6′ · 10,980 ft · +8°C · wind 009°/2 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 20°53.0′ W 156°55.3′ · 11,680 ft · +7.5°C · wind 085°/10 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 20°51.7′ W 156°59.7′ · 12,630 ft · +5.7°C · wind 072°/11 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 20°51.3′ W 157°04.5′ · 13,470 ft · +4°C · wind 058°/16 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 20°52.0′ W 157°09.4′ · 14,460 ft · +0.7°C · wind 048°/19 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 20°52.7′ W 157°14.2′ · 15,610 ft · -2°C · wind 028°/20 kt",
    });
  });

  test("decodes #8: 7008G 513P157134002G 563P147193004G 596P147357003G 636P14205…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "7008G     513P157134002G     563P147193004G     596P147357003G     636P142056002G    /N21021W156383 799P115318006G    N21019W156416 972P090336004G    N21010W1564501014P085319006G    N20585W1564821018P087321007G",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "21.017 N, 156.750 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10140 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "8.5 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "7008G513P157134002G563P147193004G596P147357003G636P142056002G/N21021W156383799P115318006GN21019W156416972P090336004G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 21°01.0′ W 156°45.0′ · 10,140 ft · +8.5°C · wind 319°/6 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 20°58.5′ W 156°48.2′ · 10,180 ft · +8.7°C · wind 321°/7 kt",
    });
  });

  test("decodes #9: 02E22LGIREGGDN46559E01508721313600M535030024G QN48045E012577…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E22LGIREGGDN46559E01508721313600M535030024G    QN48045E01257721463599M535049035G    QN49069E01032922013601M550069028G    QN50015E00800922163600M565048020G    QN50441E00520522313599M572054015G    QN51219E00236122463599M575007023G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: 02E22LGIREGGDN46559E01508721313600M535030024G QN48045E012577…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E22LGIREGGDN46559E01508721313600M535030024G    QN48045E01257721463599M535049035G    QN49069E01032922013601M550069028G    QN50015E00800922163600M565048020G    QN50441E00520522313599M572054015G    QN51219E00236122463599M575007023G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: 02E23HEGNEGCCN45157E01545700243799M510000025G QN46295E013468…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23HEGNEGCCN45157E01545700243799M510000025G    QN46295E01346800393802M542019022G    QN47385E01140300543797M560027033G    QN48459E00924701093798M567042019G    QN49500E00701901243804M572052019G    QN50513E00431301393799M562037021G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 301393799M562037021G Q", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "301393799M562037021G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: 02E23HEGNEGCCN45157E01545700243799M510000025G QN46295E013468…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23HEGNEGCCN45157E01545700243799M510000025G    QN46295E01346800393802M542019022G    QN47385E01140300543797M560027033G    QN48459E00924701093798M567042019G    QN49500E00701901243804M572052019G    QN50513E00431301393799M562037021G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: 02E23HEGNEGCCN45157E01545700243799M510000025G QN46295E013468…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23HEGNEGCCN45157E01545700243799M510000025G    QN46295E01346800393802M542019022G    QN47385E01140300543797M560027033G    QN48459E00924701093798M567042019G    QN49500E00701901243804M572052019G    QN50513E00431301393799M562037021G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: 02E23HEGNEGCCN45157E01545700243799M510000025G QN46295E013468…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23HEGNEGCCN45157E01545700243799M510000025G    QN46295E01346800393802M542019022G    QN47385E01140300543797M560027033G    QN48459E00924701093798M567042019G    QN49500E00701901243804M572052019G    QN50513E00431",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: 02E23HEGNEGCCN45157E01545700243799M510000025G QN46295E013468…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23HEGNEGCCN45157E01545700243799M510000025G    QN46295E01346800393802M542019022G    QN47385E01140300543797M560027033G    QN48459E00924701093798M567042019G    QN49500E00701901243804M572052019G    QN50513E00431",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: 02E23HEGNEGCCN45157E01545700243799M510000025G QN46295E013468…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23HEGNEGCCN45157E01545700243799M510000025G    QN46295E01346800393802M542019022G    QN47385E01140300543797M560027033G    QN48459E00924701093798M567042019G    QN49500E00701901243804M572052019G    QN50513E00431",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: EDR01 T3 N0RKSIVHHH 7 85787 43168019063283998-557-81 64XE0::…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: `EDR01
T3
N0RKSIVHHH
7  85787 43168019063283998-557-81 64XE0::B8GMY
7  85499 43134219063883998-557-80 64XE0::J820)
7  85210 43100419064483998-557-79 63XE0::RO20)
7  84930 43066019065083997-557-82 62XE0::2X/9W
7  84705 43027919065683998-555-83 62XE0::ZOKW(
3  84482 42989619066283998-557-81 61XE010ZOHSZ`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: EDR01 T3 N0RKSIVHHH 7 85787 43168019063283998-557-81 64XE0::…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: `EDR01
T3
N0RKSIVHHH
7  85787 43168019063283998-557-81 64XE0::B8GMY
7  85499 43134219063883998-557-80 64XE0::J820)
7  85210 43100419064483998-557-79 63XE0::RO20)
7  84930 43066019065083997-557-82 62XE0::2X`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: 01---0488..B-HLO2218N11354E230035F019PS23191015 2153N11456E2…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "01---0488..B-HLO2218N11354E230035F019PS23191015     2153N11456E230049F249MS17265038     2159N11708E230104F330MS37260034     2252N11904E230119F330MS38267048     2421N12025E230134F219MS11257040     ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: 201323010M315265049G Q", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "201323010M315265049G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: 201323010M315265049G Q", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "201323010M315265049G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 02E23ZSNJVHHHN28581E11938300422829M297259088G QN27529E119283…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23ZSNJVHHHN28581E11938300422829M297259088G    QN27529E11928300523410M442262091G    QN26470E11912701023409M432267093G    QN25470E11840501123406M410271096G    QN24451E11807801223011M320268060G    QN23591E11714201323010M315265049G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: 02E23ZSNJVHHHN28581E11938300422829M297259088G QN27529E119283…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23ZSNJVHHHN28581E11938300422829M297259088G    QN27529E11928300523410M442262091G    QN26470E11912701023409M432267093G    QN25470E11840501123406M410271096G    QN24451E11807801223011M320268060G    QN23591E11714",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: 02E23ZSNJVHHHN28581E11938300422829M297259088G QN27529E119283…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23ZSNJVHHHN28581E11938300422829M297259088G    QN27529E11928300523410M442262091G    QN26470E11912701023409M432267093G    QN25470E11840501123406M410271096G    QN24451E11807801223011M320268060G    QN23591E11714",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: 02E23ZSNJVHHHN28581E11938300422829M297259088G QN27529E119283…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23ZSNJVHHHN28581E11938300422829M297259088G    QN27529E11928300523410M442262091G    QN26470E11912701023409M432267093G    QN25470E11840501123406M410271096G    QN24451E11807801223011M320268060G    QN23591E11714",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: A06 N0ZSHCVHHH 7 89272 42497919062612759-255-90 60XE000RG20)", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: `A06

N0ZSHCVHHH
7  89272 42497919062612759-255-90 60XE000RG20)`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: 02E23MMMXKEWRN36555W07812901253901M632348048G QN37129W077591…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23MMMXKEWRN36555W07812901253901M632348048G    QN37129W07759101283900M632345051G    QN37301W07745301313900M630341054G    QN37473W07731301343900M627346061G    QN38041W07717501373901M622343063G    QN38207W07703601403901M620345061G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: 02E23MMMXKEWRN36555W07812901253901M632348048G QN37129W077591…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23MMMXKEWRN36555W07812901253901M632348048G    QN37129W07759101283900M632345051G    QN37301W07745301313900M630341054G    QN37473W07731301343900M627346061G    QN38041W07717501373901M622343063G    QN38207W07703601403901M620345061G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: 02E23MMMXKEWRN36555W07812901253901M632348048G QN37129W077591…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23MMMXKEWRN36555W07812901253901M632348048G    QN37129W07759101283900M632345051G    QN37301W07745301313900M630341054G    QN37473W07731301343900M627346061G    QN38041W07717501373901M622343063G    QN38207W07703601403901M620345061G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: 02E23MMMXKEWRN36555W07812901253901M632348048G QN37129W077591…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23MMMXKEWRN36555W07812901253901M632348048G    QN37129W07759101283900M632345051G    QN37301W07745301313900M630341054G    QN37473W07731301343900M627346061G    QN38041W07717501373901M622343063G    QN38207W07703",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: 02E23MMMXKEWRN36555W07812901253901M632348048G QN37129W077591…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23MMMXKEWRN36555W07812901253901M632348048G    QN37129W07759101283900M632345051G    QN37301W07745301313900M630341054G    QN37473W07731301343900M627346061G    QN38041W07717501373901M622343063G    QN38207W07703",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 02E23MMMXKEWRN36555W07812901253901M632348048G QN37129W077591…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02E23MMMXKEWRN36555W07812901253901M632348048G    QN37129W07759101283900M632345051G    QN37301W07745301313900M630341054G    QN37473W07731301343900M627346061G    QN38041W07717501373901M622343063G    QN38207W07703",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: 02A230147PHOGPHLIN20541W156276230130 7P252 73P242064006G 127…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02A230147PHOGPHLIN20541W156276230130   7P252      73P242064006G     127P235090015G     181P220077013G     206P212080013G     247P205064004G     275P200115002G     318P187084003G     378P177269001G     440P172131003G     487P170102006G     562P155330003G     619P140010004G     661P132021004G    /N21029W156359 810P115326010G    N21025W156393 959P102338008G    N21023W1564281062P087288005G    N21020W1564661137P082108002G    N21017W1565081254P060053003G    N21013W1565501376P027042011G    N21010W1565921507M010019018G    N21005W1570361651M042017016G    N21001W1570811776M072024018G    N20599W1571261918M105009009G    N20595W1571712043M127355007G    N20590W1572172147M147346012G    N20587W1572672252M167325011G    N20581W1573152366M190335015G    N20580W1573642401M197337017G    N20593W1574132402M197336016G    N21009W1574622402M200338016G    N21023W1575102401M197342015G    N21039W1575582403M200344014G    N21060W1580032401M197343015G    ",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(24);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "18",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "21.038 N, 156.713 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10620 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "8.7 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "02A230147PHOGPHLIN20541W1562762301307P25273P242064006G127P235090015G181P220077013G206P212080013G247P205064004G275P200115002G318P187084003G378P177269001G440P172131003G487P170102006G562P155330003G619P140010004G661P132021004G/N21029W156359810P115326010GN21025W156393959P102338008G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 21°02.3′ W 156°42.8′ · 10,620 ft · +8.7°C · wind 288°/5 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 21°02.0′ W 156°46.6′ · 11,370 ft · +8.2°C · wind 108°/2 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 21°01.7′ W 156°50.8′ · 12,540 ft · +6°C · wind 053°/3 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 21°01.3′ W 156°55.0′ · 13,760 ft · +2.7°C · wind 042°/11 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 21°01.0′ W 156°59.2′ · 15,070 ft · -1°C · wind 019°/18 kt",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 21°00.5′ W 157°03.6′ · 16,510 ft · -4.2°C · wind 017°/16 kt",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "record_7",
      code: "REC7",
      label: "Record 7",
      value: "N 21°00.1′ W 157°08.1′ · 17,760 ft · -7.2°C · wind 024°/18 kt",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "record_8",
      code: "REC8",
      label: "Record 8",
      value: "N 20°59.9′ W 157°12.6′ · 19,180 ft · -10.5°C · wind 009°/9 kt",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "record_9",
      code: "REC9",
      label: "Record 9",
      value: "N 20°59.5′ W 157°17.1′ · 20,430 ft · -12.7°C · wind 355°/7 kt",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "record_10",
      code: "REC10",
      label: "Record 10",
      value: "N 20°59.0′ W 157°21.7′ · 21,470 ft · -14.7°C · wind 346°/12 kt",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "record_11",
      code: "REC11",
      label: "Record 11",
      value: "N 20°58.7′ W 157°26.7′ · 22,520 ft · -16.7°C · wind 325°/11 kt",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "record_12",
      code: "REC12",
      label: "Record 12",
      value: "N 20°58.1′ W 157°31.5′ · 23,660 ft · -19°C · wind 335°/15 kt",
    });
    expect(decodeResult.formatted.items[18]).toEqual({
      type: "record_13",
      code: "REC13",
      label: "Record 13",
      value: "N 20°58.0′ W 157°36.4′ · 24,010 ft · -19.7°C · wind 337°/17 kt",
    });
    expect(decodeResult.formatted.items[19]).toEqual({
      type: "record_14",
      code: "REC14",
      label: "Record 14",
      value: "N 20°59.3′ W 157°41.3′ · 24,020 ft · -19.7°C · wind 336°/16 kt",
    });
    expect(decodeResult.formatted.items[20]).toEqual({
      type: "record_15",
      code: "REC15",
      label: "Record 15",
      value: "N 21°00.9′ W 157°46.2′ · 24,020 ft · -20°C · wind 338°/16 kt",
    });
    expect(decodeResult.formatted.items[21]).toEqual({
      type: "record_16",
      code: "REC16",
      label: "Record 16",
      value: "N 21°02.3′ W 157°51.0′ · 24,010 ft · -19.7°C · wind 342°/15 kt",
    });
    expect(decodeResult.formatted.items[22]).toEqual({
      type: "record_17",
      code: "REC17",
      label: "Record 17",
      value: "N 21°03.9′ W 157°55.8′ · 24,030 ft · -20°C · wind 344°/14 kt",
    });
    expect(decodeResult.formatted.items[23]).toEqual({
      type: "record_18",
      code: "REC18",
      label: "Record 18",
      value: "N 21°06.0′ W 158°00.3′ · 24,010 ft · -19.7°C · wind 343°/15 kt",
    });
  });

  test("decodes #35: 043M127355007G N20590W1572172147M147346012G N20587W157267225…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "043M127355007G    N20590W1572172147M147346012G    N20587W1572672252M167325011G    N20581W1573152366M190335015G    N20580W1573642401M197337017G    N20593W1574132402M197336016G    N21009W1574622402M200338016G    ",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "6",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "20.983 N, 157.362 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "21470 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "-14.7 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "043M127355007G (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 20°59.0′ W 157°21.7′ · 21,470 ft · -14.7°C · wind 346°/12 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 20°58.7′ W 157°26.7′ · 22,520 ft · -16.7°C · wind 325°/11 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 20°58.1′ W 157°31.5′ · 23,660 ft · -19°C · wind 335°/15 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 20°58.0′ W 157°36.4′ · 24,010 ft · -19.7°C · wind 337°/17 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 20°59.3′ W 157°41.3′ · 24,020 ft · -19.7°C · wind 336°/16 kt",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 21°00.9′ W 157°46.2′ · 24,020 ft · -20°C · wind 338°/16 kt",
    });
  });

  test("decodes #36: N21017W1565081254P060053003G N21013W1565501376P027042011G N2…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "    N21017W1565081254P060053003G    N21013W1565501376P027042011G    N21010W1565921507M010019018G    N21005W1570361651M042017016G    N21001W1570811776M072024018G    N20599W1571261918M105009009G    N20595W1571712",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "6",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "21.028 N, 156.847 W",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "12540 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "6 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 21°01.7′ W 156°50.8′ · 12,540 ft · +6°C · wind 053°/3 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 21°01.3′ W 156°55.0′ · 13,760 ft · +2.7°C · wind 042°/11 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 21°01.0′ W 156°59.2′ · 15,070 ft · -1°C · wind 019°/18 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 21°00.5′ W 157°03.6′ · 16,510 ft · -4.2°C · wind 017°/16 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_5",
      code: "REC5",
      label: "Record 5",
      value: "N 21°00.1′ W 157°08.1′ · 17,760 ft · -7.2°C · wind 024°/18 kt",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "record_6",
      code: "REC6",
      label: "Record 6",
      value: "N 20°59.9′ W 157°12.6′ · 19,180 ft · -10.5°C · wind 009°/9 kt",
    });
  });

  test("decodes #37: A06 N0RKSIVHHH 7 80862 42377219075883998-555-78 60XE010JG/9W", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: `A06

N0RKSIVHHH
7  80862 42377219075883998-555-78 60XE010JG/9W`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: 02D23VHHHRCTPN24511E12048601551105P065256036G QN24529E120502…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23VHHHRCTPN24511E12048601551105P065256036G    QN24529E12050201561061P075257035G    QN24541E12051601561043P077258032G    QN24557E12053001561029P080259029G    QN24569E12054501561005P077261029G    QN24580E12056",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: 02D23VHHHRCTPN24511E12048601551105P065256036G QN24529E120502…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23VHHHRCTPN24511E12048601551105P065256036G    QN24529E12050201561061P075257035G    QN24541E12051601561043P077258032G    QN24557E12053001561029P080259029G    QN24569E12054501561005P077261029G    QN24580E12056",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: 02D23VHHHRCTPN24511E12048601551105P065256036G QN24529E120502…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23VHHHRCTPN24511E12048601551105P065256036G    QN24529E12050201561061P075257035G    QN24541E12051601561043P077258032G    QN24557E12053001561029P080259029G    QN24569E12054501561005P077261029G    QN24580E12056",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: 02D23VHHHRCTPN24511E12048601551105P065256036G QN24529E120502…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23VHHHRCTPN24511E12048601551105P065256036G    QN24529E12050201561061P075257035G    QN24541E12051601561043P077258032G    QN24557E12053001561029P080259029G    QN24569E12054501561005P077261029G    QN24580E1205600157 969P085259028G    QN24591E1205750157 933P090258029G    QN25003E1205890158 921P095257027G    QN25015E1210040158 921P095256028G    QN25025E1210180158 920P102257028G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: 02D23VHHHRCTPN24511E12048601551105P065256036G QN24529E120502…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23VHHHRCTPN24511E12048601551105P065256036G    QN24529E12050201561061P075257035G    QN24541E12051601561043P077258032G    QN24557E12053001561029P080259029G    QN24569E12054501561005P077261029G    QN24580E1205600157 969P085259028G    QN24591E1205750157 933P090258029G    QN25003E1205890158 921P095257027G    QN25015E1210040158 921P095256028G    QN25025E1210180158 920P102257028G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: 02A230201ZSAMZSNJN24325E118087230141 37P2700009 78P257209003…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02A230201ZSAMZSNJN24325E118087230141  37P2700009  78P257209003G0009 119P245197004G0009 163P232220004G0009 206P220242005G0009 249P210249008G0009 286P202259010G0009 323P202262015G0009 365P195263017G0009 403P19026",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: 6017G0009 448P190264019G0009 493P185263019G0009 538P18526802…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "6017G0009 448P190264019G0009 493P185263019G0009 538P185268022G0009 580P170259023G0009 616P160251023G0009 633P150249024G0009 654P147246025G0009 669P147245025G0009 698P142245025G0009 741P135248025G0009 790P125255",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: 024G0009/N24270E118088 889P100255025G0009N24280E118102 982P0…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "024G0009/N24270E118088 889P100255025G0009N24280E118102 982P087257033G0009N24290E1181161054P077246037G0009N24301E1181321141P057246037G0009N24313E1181471185P042247038G0009N24325E1181631254P027248038G0009N24339E11",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AMDAR Meteorological Waypoint Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "record_count",
      code: "RECS",
      label: "Waypoint Records",
      value: "4",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "24.483 N, 118.193 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "10540 feet",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "outside_air_temperature",
      code: "OATEMP",
      label: "Outside Air Temperature (C)",
      value: "7.7 degrees",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "leading_fragment",
      code: "FRAG",
      label: "Leading Fragment",
      value: "024G0009/N24270E118088889P100255025G0009N24280E118102982P087257033G0009 (tail of previous multi-part record)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "record_1",
      code: "REC1",
      label: "Record 1",
      value: "N 24°29.0′ E 118°11.6′ · 10,540 ft · +7.7°C · wind 246°/37 kt",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "record_2",
      code: "REC2",
      label: "Record 2",
      value: "N 24°30.1′ E 118°13.2′ · 11,410 ft · +5.7°C · wind 246°/37 kt",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "record_3",
      code: "REC3",
      label: "Record 3",
      value: "N 24°31.3′ E 118°14.7′ · 11,850 ft · +4.2°C · wind 247°/38 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "record_4",
      code: "REC4",
      label: "Record 4",
      value: "N 24°32.5′ E 118°16.3′ · 12,540 ft · +2.7°C · wind 248°/38 kt",
    });
  });

  test("decodes #46: 02D23MMMXKEWRN40270W0744080208 689P045295027G QN40313W074397…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23MMMXKEWRN40270W0744080208 689P045295027G    QN40313W0743970209 652P055292026G    QN40357W0743850210 614P065290024G    QN40400W0743730211 599P067285023G    QN40441W0743620212 599P067287022G    QN40481W0743520213 501P090280022G    QN40523W0743390214 501P087274016G    QN40545W0742880215 501P082278023G    QN40561W0742280216 500P077272015G    QN40563W0741680217 405P097265008G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: 02D23MMMXKEWRN40270W0744080208 689P045295027G QN40313W074397…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23MMMXKEWRN40270W0744080208 689P045295027G    QN40313W0743970209 652P055292026G    QN40357W0743850210 614P065290024G    QN40400W0743730211 599P067285023G    QN40441W0743620212 599P067287022G    QN40481W0743520213 501P090280022G    QN40523W0743390214 501P087274016G    QN40545W0742880215 501P082278023G    QN40561W0742280216 500P077272015G    QN40563W0741680217 405P097265008G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: 20213 501P090280022G QN40523W0743390214 501P087274016G QN405…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "20213 501P090280022G    QN40523W0743390214 501P087274016G    QN40545W0742880215 501P082278023G    QN40561W0742280216 500P077272015G    QN40563W0741680217 405P097265008G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: 02D23MMMXKEWRN40270W0744080208 689P045295027G QN40313W074397…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23MMMXKEWRN40270W0744080208 689P045295027G    QN40313W0743970209 652P055292026G    QN40357W0743850210 614P065290024G    QN40400W0743730211 599P067285023G    QN40441W0743620212 599P067287022G    QN40481W0743520213 501P090280022G    QN40523W0743390214 501P087274016G    QN40545W0742880215 501P082278023G    QN40561W0742280216 500P077272015G    QN40563W0741680217 405P097265008G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: 02D23MMMXKEWRN40270W0744080208 689P045295027G QN40313W074397…", () => {
    const decodeResult = plugin.decode({
      label: "H2",
      text: "02D23MMMXKEWRN40270W0744080208 689P045295027G    QN40313W0743970209 652P055292026G    QN40357W0743850210 614P065290024G    QN40400W0743730211 599P067285023G    QN40441W0743620212 599P067287022G    QN40481W0743520213 501P090280022G    QN40523W0743390214 501P087274016G    QN40545W0742880215 501P082278023G    QN40561W0742280216 500P077272015G    QN40563W0741680217 405P097265008G    Q",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-h2-amdar");
    expect(decodeResult.formatted.description).toBe("AMDAR Meteorological Waypoint Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
