import { MessageDecoder } from '../MessageDecoder';
import { Label_22_Compact_OOOI } from './Label_22_Compact_OOOI';

describe('Label_22_Compact_OOOI', () => {
  let plugin: Label_22_Compact_OOOI;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_22_Compact_OOOI(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-22-compact-oooi");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["22"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "22", text: '' });
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
  });

  test("decodes #1: N 300437W 953954,-------,224618,2951, , , , 17,16097 12, 135…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 300437W 953954,-------,224618,2951, ,      , ,  17,16097  12, 135,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #2: N 321116W 802136,-------,224554,37952, , , ,M 57,28955 28, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 321116W 802136,-------,224554,37952, ,      , ,M 57,28955  28,  92,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #3: N 351326W 774434,-------,224506,33963, , , ,M 53,31950 33, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 351326W 774434,-------,224506,33963, ,      , ,M 53,31950  33, 101,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #4: N 384948W 801406,-------,224442,34547, , , ,M 53,33500 47, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384948W 801406,-------,224442,34547, ,      , ,M 53,33500  47, 199,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #5: N 384948W 801406,-------,224442,34547, , , ,M 53,33500 47, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384948W 801406,-------,224442,34547, ,      , ,M 53,33500  47, 199,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: N 384948W 801406,-------,224442,34547, , , ,M 53,33500 47, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384948W 801406,-------,224442,34547, ,      , ,M 53,33500  47, 199,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #7: N 384948W 801406,-------,224442,34547, , , ,M 53,33500 47, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384948W 801406,-------,224442,34547, ,      , ,M 53,33500  47, 199,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #8: N 384142W1033809,-------,224442,27000, , , ,M 34,25222 37, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384142W1033809,-------,224442,27000, ,      , ,M 34,25222  37, 120,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: N 373628W 772230,-------,224412,38012, , , ,M 61,34239 35, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 373628W 772230,-------,224412,38012, ,      , ,M 61,34239  35,  93,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: N 373628W 772230,-------,224412,38012, , , ,M 61,34239 35, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 373628W 772230,-------,224412,38012, ,      , ,M 61,34239  35,  93,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: N 282428W 814904,-------,013954,11556, , , ,M 1,27864 7, 358…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 282428W 814904,-------,013954,11556, ,      , ,M  1,27864   7, 358,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: N 282428W 814904,-------,013954,11556, , , ,M 1,27864 7, 358…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 282428W 814904,-------,013954,11556, ,      , ,M  1,27864   7, 358,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: N 282428W 814904,-------,013954,11556, , , ,M 1,27864 7, 358…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 282428W 814904,-------,013954,11556, ,      , ,M  1,27864   7, 358,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: N 314745W 805558,-------,013942,33953, , , ,M 50,35226 23, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 314745W 805558,-------,013942,33953, ,      , ,M 50,35226  23, 101,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: N 305338W 835736,-------,013900,36683, , , ,M 54,30153 31, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 305338W 835736,-------,013900,36683, ,      , ,M 54,30153  31,  91,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: N 373209W1062443,-------,133912,36016, , , ,M 56,25644 38, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 373209W1062443,-------,133912,36016, ,      , ,M 56,25644  38, 174,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: N 390520W1035501,-------,013836,23014, , , ,M 25,24447 37, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 390520W1035501,-------,013836,23014, ,      , ,M 25,24447  37,  90,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: N 415255W 875356,-------,013818,6966, , , , 10, 9299 3, 82,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 415255W 875356,-------,013818,6966, ,      , ,  10, 9299   3,  82,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: N 415255W 875356,-------,013818,6966, , , , 10, 9299 3, 82,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 415255W 875356,-------,013818,6966, ,      , ,  10, 9299   3,  82,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: OFF01YX4589/23230136KLGAKORF013633 78", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "OFF01YX4589/23230136KLGAKORF013633  78",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: OFF01YX4589/23230136KLGAKORF013633 78", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "OFF01YX4589/23230136KLGAKORF013633  78",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: OFF01YX4589/23230136KLGAKORF013633 78", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "OFF01YX4589/23230136KLGAKORF013633  78",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: OFF01YX4589/23230136KLGAKORF013633 78", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "OFF01YX4589/23230136KLGAKORF013633  78",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: N 282609W 821333,-------,013636,26414, , , ,M 31,27018 52, 2…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 282609W 821333,-------,013636,26414, ,      , ,M 31,27018  52, 212,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: N 385645W 811554,-------,013630,36029, , , ,M 56,32584 34, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385645W 811554,-------,013630,36029, ,      , ,M 56,32584  34, 194,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: N 380907W 725609,-------,013548,32003, , , ,M 49,32408 52, 2…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 380907W 725609,-------,013548,32003, ,      , ,M 49,32408  52, 211,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: N 380907W 725609,-------,013548,32003, , , ,M 49,32408 52, 2…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 380907W 725609,-------,013548,32003, ,      , ,M 49,32408  52, 211,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: N 282222W 812244,-------,013454,2600, , , , 13,11448 17, 378…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 282222W 812244,-------,013454,2600, ,      , ,  13,11448  17, 378,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: N 322128W 803318,-------,013442,33976, , , ,M 51,33605 23, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 322128W 803318,-------,013442,33976, ,      , ,M 51,33605  23, 106,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: N 375454W1055555,-------,133412,36006, , , ,M 57,24024 65, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 375454W1055555,-------,133412,36006, ,      , ,M 57,24024  65, 178,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: N 385609W 772801,-------,013406,6340, , , , 6,32795 17, 70,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385609W 772801,-------,013406,6340, ,      , ,   6,32795  17,  70,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: N 385609W 772801,-------,013406,6340, , , , 6,32795 17, 70,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385609W 772801,-------,013406,6340, ,      , ,   6,32795  17,  70,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: N 385609W 772801,-------,013406,6340, , , , 6,32795 17, 70,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385609W 772801,-------,013406,6340, ,      , ,   6,32795  17,  70,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: N 385609W 772801,-------,013406,6340, , , , 6,32795 17, 70,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385609W 772801,-------,013406,6340, ,      , ,   6,32795  17,  70,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: N 385609W 772801,-------,013406,6340, , , , 6,32795 17, 70,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385609W 772801,-------,013406,6340, ,      , ,   6,32795  17,  70,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: N 385609W 772801,-------,013406,6340, , , , 6,32795 17, 70,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 385609W 772801,-------,013406,6340, ,      , ,   6,32795  17,  70,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: N 384236W1032240,-------,013336,31990, , , ,M 47,25151 51, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384236W1032240,-------,013336,31990, ,      , ,M 47,25151  51,  92,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: N 384236W1032240,-------,013336,31990, , , ,M 47,25151 51, 9…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 384236W1032240,-------,013336,31990, ,      , ,M 47,25151  51,  92,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: N 375551W 922728,-------,013324,33952, , , ,M 49,27758 19, 2…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 375551W 922728,-------,013324,33952, ,      , ,M 49,27758  19, 244,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: N 413921W 872956,-------,013318,7969, , , , 7, 5741 3, 86,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 413921W 872956,-------,013318,7969, ,      , ,   7, 5741   3,  86,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: N 373733W 942638,-------,013254,33992, , , ,M 50,23989 24, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 373733W 942638,-------,013254,33992, ,      , ,M 50,23989  24, 199,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: N 310310W 815544,-------,013248,36984, , , ,M 54,29730 31, 1…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 310310W 815544,-------,013248,36984, ,      , ,M 54,29730  31, 106,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: N 392226W 752418,-------,013212,21684, , , ,M 26,33253 36, 8…", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 392226W 752418,-------,013212,21684, ,      , ,M 26,33253  36,  80,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: N 374019W1223126,-------,013154,4606, , , , 5, 3733 6, 133,", () => {
    const decodeResult = plugin.decode({
      label: "22",
      text: "N 374019W1223126,-------,013154,4606, ,      , ,   5, 3733   6, 133,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-22-compact-oooi");
    expect(decodeResult.formatted.description).toBe("Compact OOOI-style Event Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
