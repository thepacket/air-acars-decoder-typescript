import { MessageDecoder } from '../MessageDecoder';
import { Label_BA_CPDLC } from './Label_BA_CPDLC';

describe('Label_BA_CPDLC', () => {
  let plugin: Label_BA_CPDLC;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_BA_CPDLC(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-ba-cpdlc");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["BA"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "BA", text: '' });
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
  });

  test("decodes #1: /USADCXA.AT1.N768JB641167530002C3", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N768JB641167530002C3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N768JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6411675300",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "02C3",
    });
  });

  test("decodes #2: /USADCXA.AT1.N366MP6515675100BFA5", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N366MP6515675100BFA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N366MP",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6515675100",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "BFA5",
    });
  });

  test("decodes #3: /USADCXA.AT1.SE-DMO6209674F00C973", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.SE-DMO6209674F00C973",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "SE-DMO",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6209674F00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "C973",
    });
  });

  test("decodes #4: /USADCXA.AT1.N326DN628D674C00C306", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N326DN628D674C00C306",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N326DN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "628D674C00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "C306",
    });
  });

  test("decodes #5: /USADCXA.AT1.N2047J61876742001AB6", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N2047J61876742001AB6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2047J",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6187674200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1AB6",
    });
  });

  test("decodes #6: /USADCXA.AT1.N2047J61876742001AB6", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N2047J61876742001AB6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2047J",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6187674200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1AB6",
    });
  });

  test("decodes #7: /USADCXA.DR1.F-GSQAC5A3", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.DR1.F-GSQAC5A3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "DR1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "F-G",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "SQA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "C5A3",
    });
  });

  test("decodes #8: /USADCXA.AT1.N2047J61876742001AB6", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N2047J61876742001AB6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2047J",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6187674200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1AB6",
    });
  });

  test("decodes #9: /USADCXA.AT1.N2047J61876742001AB6", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N2047J61876742001AB6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2047J",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6187674200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1AB6",
    });
  });

  test("decodes #10: /USADCXA.AT1.N2047J61876742001AB6", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N2047J61876742001AB6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2047J",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6187674200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1AB6",
    });
  });

  test("decodes #11: /USADCXA.AT1.N657JB62881A09001A40", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N657JB62881A09001A40",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "62881A0900",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1A40",
    });
  });

  test("decodes #12: /USADCXA.AT1.N657JB62881A09001A40", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N657JB62881A09001A40",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "62881A0900",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1A40",
    });
  });

  test("decodes #13: /USADCXA.AT1.N657JB62881A09001A40", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N657JB62881A09001A40",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "62881A0900",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1A40",
    });
  });

  test("decodes #14: /USADCXA.AT1.N657JB62881A09001A40", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N657JB62881A09001A40",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "62881A0900",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1A40",
    });
  });

  test("decodes #15: /USADCXA.AT1.N657JB62881A09001A40", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N657JB62881A09001A40",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "62881A0900",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1A40",
    });
  });

  test("decodes #16: /USADCXA.AT1.N657JB62881A09001A40", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N657JB62881A09001A40",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "62881A0900",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "1A40",
    });
  });

  test("decodes #17: /USADCXA.AT1.TC-LJK618619F1008B41", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.TC-LJK618619F1008B41",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "TC-LJK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "618619F100",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "8B41",
    });
  });

  test("decodes #18: /USADCXA.AT1.TC-LJK618619F1008B41", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.TC-LJK618619F1008B41",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "TC-LJK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "618619F100",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "8B41",
    });
  });

  test("decodes #19: /USADCXA.AT1.N958JB659619DE009EFA", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N958JB659619DE009EFA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "659619DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9EFA",
    });
  });

  test("decodes #20: /USADCXA.AT1.N958JB659619DE009EFA", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N958JB659619DE009EFA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "659619DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9EFA",
    });
  });

  test("decodes #21: /USADCXA.AT1.N958JB659619DE009EFA", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N958JB659619DE009EFA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "659619DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9EFA",
    });
  });

  test("decodes #22: /USADCXA.AT1.N958JB659619DE009EFA", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N958JB659619DE009EFA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "659619DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9EFA",
    });
  });

  test("decodes #23: /USADCXA.AT1.N26996618619ED00D250", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N26996618619ED00D250",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N26996",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "618619ED00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "D250",
    });
  });

  test("decodes #24: /USADCXA.AT1.N958JB659619DE009EFA", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N958JB659619DE009EFA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "659619DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9EFA",
    });
  });

  test("decodes #25: /USADCXA.AT1.N958JB659619DE009EFA", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N958JB659619DE009EFA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "659619DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "9EFA",
    });
  });

  test("decodes #26: /USADCXA.AT1.EI-XLR661819E800E994", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.EI-XLR661819E800E994",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "EI-XLR",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "661819E800",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "E994",
    });
  });

  test("decodes #27: L36ANH8422/FUKJJYA.AT1.JA772F628C19E10055CC", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "L36ANH8422/FUKJJYA.AT1.JA772F628C19E10055CC",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: /YQME2YA.AT1.C-GTSD618419E5004A9A", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/YQME2YA.AT1.C-GTSD618419E5004A9A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-G",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "TSD618419E500",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "4A9A",
    });
  });

  test("decodes #29: /USADCXA.AT1.N24542630A19DE006F64", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N24542630A19DE006F64",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N24542",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "630A19DE00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "6F64",
    });
  });

  test("decodes #30: /USADCXA.CC1.N14523610419DD491069BF", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.CC1.N14523610419DD491069BF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "CC1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N14523",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "610419DD4910",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "69BF",
    });
  });

  test("decodes #31: /USADCXA.AT1.N351DN651419DD000F5A", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N351DN651419DD000F5A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N351DN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "651419DD00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "0F5A",
    });
  });

  test("decodes #32: /USADCXA.AT1.N351DN651419DD000F5A", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N351DN651419DD000F5A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N351DN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "651419DD00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "0F5A",
    });
  });

  test("decodes #33: /ANCATYA.AT1.HL80062B067590C2A5C560CDB208D319B560EA96", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/ANCATYA.AT1.HL80062B067590C2A5C560CDB208D319B560EA96",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "HL8006",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "2B067590C2A5C560CDB208D319B560",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "EA96",
    });
  });

  test("decodes #34: L94ATR0029/MELCAYA.AT1.9V-OFN651219C600D8FD", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "L94ATR0029/MELCAYA.AT1.9V-OFN651219C600D8FD",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: /USADCXA.AT1.N24542628A19D1022871", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N24542628A19D1022871",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N24542",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "628A19D102",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "2871",
    });
  });

  test("decodes #36: L84ANH0816/SGNGWXA.DR1.JA832A218665CF8E5B4A", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "L84ANH0816/SGNGWXA.DR1.JA832A218665CF8E5B4A",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: /USADCXA.AT1.N368DN649219C600F46E", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N368DN649219C600F46E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N368DN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "649219C600",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "F46E",
    });
  });

  test("decodes #38: J96ADL0295/ANCATYA.AT1.N521DN620C19B500B67D", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "J96ADL0295/ANCATYA.AT1.N521DN620C19B500B67D",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: J30AOZ0221/ANCATYA.AT1.HL8362618819BB00ADD1", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "J30AOZ0221/ANCATYA.AT1.HL8362618819BB00ADD1",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: /USADCXA.AT1.N640JB692419A300D425", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N640JB692419A300D425",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N640JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "692419A300",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "D425",
    });
  });

  test("decodes #41: J52AJX0771/RPHIAYA.AT1B-58501610419A00037EE", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "J52AJX0771/RPHIAYA.AT1B-58501610419A00037EE",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: /YEGE2YA.AT1.F-GZNQ2286664A3BB97320D8991A8475C20B64CCA6C1CCC…", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/YEGE2YA.AT1.F-GZNQ2286664A3BB97320D8991A8475C20B64CCA6C1CCC9367D06314585261417314B13716A6E52C14212545990E7848F4A4C2A6125C5A932093F0CA6F92C0A24F41E93B052120C79F4A4849F4E14FB0125D58F569048B4A7419C1214F8D566C5459B709127CE836024B8B420C48E6316AC454D9312CC2040177C765C30662A9C68964E420024A4AB35B306A121498506C045C48526141B02AB1A5892E7CC93584AE11AC28624D9F420D212B832B08C89263B073308190C4A13A2B1621400C82252AEC1CCC000ACFA6F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "YEGE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "F-G",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "ZNQ2286664A3BB97320D8991A8475C20B64CCA6C1CCC9367D06314585261417314B13716A6E52C14212545990E7848F4A4C2A6125C5A932093F0CA6F92C0A24F41E93B052120C79F4A4849F4E14FB0125D58F569048B4A7419C1214F8D566C5459B709127CE836024B8B420C48E6316AC454D9312CC2040177C765C30662A9C68964E420024A4AB35B306A121498506C045C48526141B02AB1A5892E7CC93584AE11AC28624D9F420D212B832B08C89263B073308190C4A13A2B1621400C82252AEC1CCC000AC",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "FA6F",
    });
  });

  test("decodes #43: /YEGE2YA.AT1.F-GZNQ2286664A3BB97320D8991A8475C20B64CCA6C1CCC…", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/YEGE2YA.AT1.F-GZNQ2286664A3BB97320D8991A8475C20B64CCA6C1CCC9367D06314585261417314B13716A6E52C14212545990E7848F4A4C2A6125C5A932093F0CA6F92C0A24F41E93B052120C79F4A4849F4E14FB0125D58F569048B4A7419C1214F8D566C5459",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "YEGE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "F-G",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "ZNQ2286664A3BB97320D8991A8475C20B64CCA6C1CCC9367D06314585261417314B13716A6E52C14212545990E7848F4A4C2A6125C5A932093F0CA6F92C0A24F41E93B052120C79F4A4849F4E14FB0125D58F569048B4A7419C1214F8D566C",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "5459",
    });
  });

  test("decodes #44: /USADCXA.AT1.4X-EDD6186199200FA07", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.4X-EDD6186199200FA07",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "4X-EDD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6186199200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "FA07",
    });
  });

  test("decodes #45: /USADCXA.AT1.N591DT669C199400540E", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N591DT669C199400540E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N591DT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "669C199400",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "540E",
    });
  });

  test("decodes #46: /USADCXA.AT1.4X-EDD6186199200FA07", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.4X-EDD6186199200FA07",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "4X-EDD",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6186199200",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "FA07",
    });
  });

  test("decodes #47: /USADCXA.AT1.N996JL64921990007B3B", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N996JL64921990007B3B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N996JL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "6492199000",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "7B3B",
    });
  });

  test("decodes #48: /USADCXA.AT1.N741NK638E198A000D9A", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N741NK638E198A000D9A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N741NK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "638E198A00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "0D9A",
    });
  });

  test("decodes #49: /USADCXA.AT1.N741NK638E198A000D9A", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N741NK638E198A000D9A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N741NK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "638E198A00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "0D9A",
    });
  });

  test("decodes #50: /USADCXA.AT1.N110DX638E1988000F72", () => {
    const decodeResult = plugin.decode({
      label: "BA",
      text: "/USADCXA.AT1.N110DX638E1988000F72",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-ba-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC Downlink — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC Downlink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Aircraft → Ground (downlink)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GND",
      label: "Ground Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "service_qualifier",
      code: "QUAL",
      label: "Service Qualifier",
      value: "AT1",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N110DX",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "cpdlc_payload",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER hex)",
      value: "638E198800",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC",
      value: "0F72",
    });
  });

});
