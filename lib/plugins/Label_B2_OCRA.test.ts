import { MessageDecoder } from '../MessageDecoder';
import { Label_B2_OCRA } from './Label_B2_OCRA';

describe('Label_B2_OCRA', () => {
  let plugin: Label_B2_OCRA;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_B2_OCRA(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-b2-ocra");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["B2"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "B2", text: '' });
    expect(decodeResult.decoder.name).toBe("label-b2-ocra");
  });

  test("decodes #1: /PIKCLYA.OC1/CLA 0155 260423 EGGX CLRNCE 871 UPS208 CLRD TO …", () => {
    const decodeResult = plugin.decode({
      label: "B2",
      text: `/PIKCLYA.OC1/CLA 0155 260423 EGGX
CLRNCE 871
UPS208 CLRD TO KEWR VIA
TOBOR
RANDOM ROUTE
5230N020W 5230N030W
52N040W 5030N050W BUDAR
FM TOBOR/0307 MNTN F310
M080
ATC/LEVEL CHANGE
END OF MESSAGEAC78`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b2-ocra");
    expect(decodeResult.formatted.description).toBe("Oceanic Clearance Acknowledgement (OCRA / CLA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #2: /PIKCLYA.OC1/CLA 0155 260423 EGGX CLRNCE 871 UPS208 CLRD TO …", () => {
    const decodeResult = plugin.decode({
      label: "B2",
      text: `/PIKCLYA.OC1/CLA 0155 260423 EGGX
CLRNCE 871
UPS208 CLRD TO KEWR VIA
TOBOR
RANDOM ROUTE
5230N020W 5230N030W
52N040W 5030N050W BUDAR
FM TOBOR/0307 MNTN F310
M080
ATC/LEVEL CHANGE
END OF MESSAGEAC78`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b2-ocra");
    expect(decodeResult.formatted.description).toBe("Oceanic Clearance Acknowledgement (OCRA / CLA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #3: /PIKCLYA.OC1/CLA 0155 260423 EGGX CLRNCE 871 UPS208 CLRD TO …", () => {
    const decodeResult = plugin.decode({
      label: "B2",
      text: `/PIKCLYA.OC1/CLA 0155 260423 EGGX
CLRNCE 871
UPS208 CLRD TO KEWR VIA
TOBOR
RANDOM ROUTE
5230N020W 5230N030W
52N040W 5030N050W BUDAR
FM TOBOR/0307 MNTN F310
M080
ATC/LEVEL CHANGE
END OF MESSAGEAC78`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b2-ocra");
    expect(decodeResult.formatted.description).toBe("Oceanic Clearance Acknowledgement (OCRA / CLA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #4: /PIKCLYA.OC1/CLA 0155 260423 EGGX CLRNCE 871 UPS208 CLRD TO …", () => {
    const decodeResult = plugin.decode({
      label: "B2",
      text: `/PIKCLYA.OC1/CLA 0155 260423 EGGX
CLRNCE 871
UPS208 CLRD TO KEWR VIA
TOBOR
RANDOM ROUTE
5230N020W 5230N030W
52N040W 5030N050W BUDAR
FM TOBOR/0307 MNTN F310
M080
ATC/LEVEL CHANGE
END OF MESSAGEAC78`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b2-ocra");
    expect(decodeResult.formatted.description).toBe("Oceanic Clearance Acknowledgement (OCRA / CLA)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
