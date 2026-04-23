import { MessageDecoder } from '../MessageDecoder';
import { Label_AA_CPDLC } from './Label_AA_CPDLC';

describe('Label_AA_CPDLC', () => {
  let plugin: Label_AA_CPDLC;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_AA_CPDLC(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-aa-cpdlc");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["AA"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "AA", text: '' });
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
  });

  test("decodes #1: /USADCXA.AT1.N2846U2459D22821DAA3344B2F", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/USADCXA.AT1.N2846U2459D22821DAA3344B2F
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2846U",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2459D22821DAA334 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "4B2F",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #2: /NDJCAYA.AT1.PH-AOC2159CEE1008DF1", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NDJCAYA.AT1.PH-AOC2159CEE1008DF1",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NDJCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "PH-AOC21",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "59CEE100 (4 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "8DF1",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #3: /USADCXA.AT1.N2846U2459D22821DAA3344B2F", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/USADCXA.AT1.N2846U2459D22821DAA3344B2F
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2846U",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2459D22821DAA334 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "4B2F",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #4: /OAKODYA.AT1.N1202021D9D2DD54245A9014B000BDAC", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/OAKODYA.AT1.N1202021D9D2DD54245A9014B000BDAC",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "OAKODYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N12020",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21D9D2DD54245A9014B000 (11 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "BDAC",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #5: /YEGE2YA.AT1.HL761924D9D29E2B1624D9F3AA4F9C1837200C35", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YEGE2YA.AT1.HL761924D9D29E2B1624D9F3AA4F9C1837200C35",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YEGE2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "HL7619",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "24D9D29E2B1624D9F3AA4F9C183720 (15 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "0C35",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #6: /YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D…", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104D8B4E9C18F150549E821CF9D1A4D29A821D089321A0873E754830EA20AF26A48411E0CE8916920893E6C5A7524C314C0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N780AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104…73E754830EA20AF26A48411E0CE8916920893E6C5A7524C3 (70 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "14C0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #7: /YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D…", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104D8B4E9C18F150549E821CF9D1A4D29A821D089321A0873E754830EA20AF26A48411E0CE8916920893E6C5A7524C314C0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N780AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104…73E754830EA20AF26A48411E0CE8916920893E6C5A7524C3 (70 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "14C0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #8: /YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D…", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104D8B4E9C18F150549E821CF9D1A4D29A821D089321A0873E754830EA20AF26A48411E0CE8916920893E6C5A7524C314C0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N780AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104…73E754830EA20AF26A48411E0CE8916920893E6C5A7524C3 (70 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "14C0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #9: /YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D…", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.N780AN20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104D8B4E9C18F150549E821CF9D1A4D29A821D089321A0873E754830EA20AF26A48411E0CE8916920893E6C5A7524C314C0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N780AN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20D9BCAA526A48934D049A6820CE4106AD49F360D48B1104…73E754830EA20AF26A48411E0CE8916920893E6C5A7524C3 (70 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "14C0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #10: /USADCXA.AT1.N2846U2459D22821DAA3344B2F", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/USADCXA.AT1.N2846U2459D22821DAA3344B2F
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N2846U",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2459D22821DAA334 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "4B2F",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #11: /PIKCPYA.CR1.G-TUIN20067CA8E2C78F608F3B", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/PIKCPYA.CR1.G-TUIN20067CA8E2C78F608F3B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "G-TUIN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20067CA8E2C78F60 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "8F3B",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #12: /USADCXA.AT1.N657JB2206815D6F5E0D39126747A93E705556802621", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/USADCXA.AT1.N657JB2206815D6F5E0D39126747A93E705556802621",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N657JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2206815D6F5E0D39126747A93E70555680 (17 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "2621",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #13: /BZVCAYA.CR1.G-VOWS20067E68E343870E5369", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/BZVCAYA.CR1.G-VOWS20067E68E343870E5369",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BZVCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "G-VOWS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20067E68E343870E (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "5369",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #14: /PIKCPYA.AT1.N1301321867CA822C9A7383968", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/PIKCPYA.AT1.N1301321867CA822C9A7383968",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N13013",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21867CA822C9A738 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "3968",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #15: /PIKCPYA.AT1.HB-JMA2186702240415F", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/PIKCPYA.AT1.HB-JMA2186702240415F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "HB-JMA21",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "86702240 (4 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "415F",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #16: /OAKODYA.AT1.N210UAA18662C01A6A93B9F4284FA726A4541124D28B0EA…", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/OAKODYA.AT1.N210UAA18662C01A6A93B9F4284FA726A4541124D28B0EA499F39054A506346930D62091263C88B490509F4E9C985322A09339041A14294FB081A3041364CE3ACD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "OAKODYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N210UA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "A18662C01A6A93B9F4284FA726A4541124D28B0EA499F390…B490509F4E9C985322A09339041A14294FB081A3041364CE (60 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "3ACD",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #17: /OAKODYA.AT1.N210UAA18662C01A6A93B9F4284FA726A4541124D28B0EA…", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/OAKODYA.AT1.N210UAA18662C01A6A93B9F4284FA726A4541124D28B0EA499F39054A506346930D62091263C88B490509F4E9C985322A09339041A14294FB081A3041364CE3ACD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "OAKODYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N210UA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "A18662C01A6A93B9F4284FA726A4541124D28B0EA499F390…B490509F4E9C985322A09339041A14294FB081A3041364CE (60 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "3ACD",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #18: /RPHIAYA.AT1.JA829A21067A9D84832E7D4831A542449088FCD170", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/RPHIAYA.AT1.JA829A21067A9D84832E7D4831A542449088FCD170",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "JA829A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21067A9D84832E7D4831A542449088FC (16 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "D170",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #19: /RPHIAYA.AT1.JA829A21067A9D84832E7D4831A542449088FCD170", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/RPHIAYA.AT1.JA829A21067A9D84832E7D4831A542449088FCD170",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "JA829A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21067A9D84832E7D4831A542449088FC (16 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "D170",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #20: /RPHIAYA.CR1.JA832A200678E8E9509126614C", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/RPHIAYA.CR1.JA832A200678E8E9509126614C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "200678E8E9509126 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "614C",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #21: /RPHIAYA.CR1.JA832A200678E8E9509126614C", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/RPHIAYA.CR1.JA832A200678E8E9509126614C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "200678E8E9509126 (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "614C",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #22: /NIMCAYA.CR1.5Y-KZG21067868E252A54A9D76", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NIMCAYA.CR1.5Y-KZG21067868E252A54A9D76",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "5Y-KZG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21067868E252A54A (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "9D76",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #23: /NIMCAYA.CR1.5Y-KZG21067868E252A54A9D76", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NIMCAYA.CR1.5Y-KZG21067868E252A54A9D76",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "5Y-KZG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21067868E252A54A (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "9D76",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #24: /NIMCAYA.CR1.5Y-KZG21067868E252A54A9D76", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NIMCAYA.CR1.5Y-KZG21067868E252A54A9D76",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "5Y-KZG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "21067868E252A54A (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "9D76",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #25: /YQXD2YA.AT1.C-FRSE230676E84088AB", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.C-FRSE230676E84088AB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "E230676E840 (5.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "88AB",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #26: /YQXD2YA.AT1.C-FRSE230676E84088AB", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.C-FRSE230676E84088AB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "E230676E840 (5.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "88AB",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #27: /YQXD2YA.AT1.C-FRSE230676E84088AB", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/YQXD2YA.AT1.C-FRSE230676E84088AB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "C-FRS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "E230676E840 (5.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "88AB",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #28: /NKCCAYA.AT1.F-GZCK608219DB01148E", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NKCCAYA.AT1.F-GZCK608219DB01148E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NKCCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "F-GZCK",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "608219DB01 (5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "148E",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #29: /MELCAYA.AT1..B-KPF3F86776840A082", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/MELCAYA.AT1..B-KPF3F86776840A082
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: ".B-KP",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "F3F86776840 (5.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "A082",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #30: /MELCAYA.AT1..B-KPF3F86776840A082", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/MELCAYA.AT1..B-KPF3F86776840A082
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: ".B-KP",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "F3F86776840 (5.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "A082",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #31: /MELCAYA.AT1..B-KPF3F86776840A082", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/MELCAYA.AT1..B-KPF3F86776840A082
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: ".B-KP",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "F3F86776840 (5.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "A082",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #32: /NANCDYA.AT1.B-2005250675E840DF19", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NANCDYA.AT1.B-2005250675E840DF19",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NANCDYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "B-",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2005250675E840 (7 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "DF19",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #33: /NANCDYA.AT1.B-2005250675E840DF19", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NANCDYA.AT1.B-2005250675E840DF19",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NANCDYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "B-",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2005250675E840 (7 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "DF19",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #34: /NIMCAYA.CR1.5Y-KZG20867528E252A54A2E77", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NIMCAYA.CR1.5Y-KZG20867528E252A54A2E77",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "5Y-KZG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20867528E252A54A (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "2E77",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #35: /NIMCAYA.CR1.5Y-KZG20867528E252A54A2E77", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NIMCAYA.CR1.5Y-KZG20867528E252A54A2E77",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "5Y-KZG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20867528E252A54A (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "2E77",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #36: /NIMCAYA.CR1.5Y-KZG20867528E252A54A2E77", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NIMCAYA.CR1.5Y-KZG20867528E252A54A2E77",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "5Y-KZG",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "CR1",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "20867528E252A54A (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "2E77",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #37: /FUKJJYA.AT1.JA772F630819D51EC916438062C0", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/FUKJJYA.AT1.JA772F630819D51EC916438062C0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "JA772F",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "630819D51EC9164380 (9 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "62C0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #38: /FUKJJYA.AT1.JA772F630819D51EC916438062C0", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/FUKJJYA.AT1.JA772F630819D51EC916438062C0",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "JA772F",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "630819D51EC9164380 (9 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "62C0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #39: /USADCXA.AT1.N958JB2586769D6B3A2D741667D2961410A0DFDF", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/USADCXA.AT1.N958JB2586769D6B3A2D741667D2961410A0DFDF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N958JB",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2586769D6B3A2D741667D2961410A0 (15 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "DFDF",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #40: /ALGCAYA.AT1.HB-JMI628419D603FC97", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/ALGCAYA.AT1.HB-JMI628419D603FC97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "ALGCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "HB-JMI62",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "8419D603 (4 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "FC97",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #41: /USADCXA.AT1.N351DN2506765D6B3A2D741667D2961410A05CCA", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: `/USADCXA.AT1.N351DN2506765D6B3A2D741667D2961410A05CCA
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "N351DN",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "2506765D6B3A2D741667D2961410A0 (15 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "5CCA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #42: /ALGCAYA.AT1.OO-SFP620619D014CA5054FD", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/ALGCAYA.AT1.OO-SFP620619D014CA5054FD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "ALGCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "OO-SFP62",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "0619D014CA50 (6 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "54FD",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #43: /ALGCAYA.AT1.OO-SFP620619D014CA5054FD", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/ALGCAYA.AT1.OO-SFP620619D014CA5054FD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "ALGCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "OO-SFP62",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "0619D014CA50 (6 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "54FD",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #44: /ALGCAYA.AT1.OO-SFP620619D014CA5054FD", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/ALGCAYA.AT1.OO-SFP620619D014CA5054FD",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "ALGCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "OO-SFP62",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "0619D014CA50 (6 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "54FD",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #45: /BOMCAYA.AT1.SU-GET0050809EA5", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/BOMCAYA.AT1.SU-GET0050809EA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "BOMCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "SU-GET00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "5080 (2 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "9EA5",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #46: /LPAFAYA.AT1.EC-MOMA286701D631EB5386158485080B35A", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/LPAFAYA.AT1.EC-MOMA286701D631EB5386158485080B35A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "LPAFAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "EC-MOMA2",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "86701D631EB5386158485080 (12 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "B35A",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #47: /MELCAYA.AT1.9V-SME641619C04A127D39F52780E32C", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/MELCAYA.AT1.9V-SME641619C04A127D39F52780E32C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "9V-SM",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "E641619C04A127D39F52780 (11.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "E32C",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #48: /MELCAYA.AT1.9V-SME641619C04A127D39F52780E32C", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/MELCAYA.AT1.9V-SME641619C04A127D39F52780E32C",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MELCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "9V-SM",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "E641619C04A127D39F52780 (11.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "E32C",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #49: /MGQCAYA.AT1.A6-BLA208670A824418304AA43", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/MGQCAYA.AT1.A6-BLA208670A824418304AA43",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "MGQCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "A6-BL",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "A208670A824418304 (8.5 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "AA43",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

  test("decodes #50: /NDJCAYA.AT1.D-ABPM220670282343870CE9A6", () => {
    const decodeResult = plugin.decode({
      label: "AA",
      text: "/NDJCAYA.AT1.D-ABPM220670282343870CE9A6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-aa-cpdlc");
    expect(decodeResult.formatted.description).toBe("FANS-1/A CPDLC — Controller–Pilot Data Link Communications");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "FANS-1/A CPDLC — Controller–Pilot Data Link Communications",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "form",
      code: "FORM",
      label: "Envelope Form",
      value: "Form 1 (qualifier.tail)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ATS Facility",
      value: "NDJCAYA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Tail",
      value: "D-ABPM",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "imi",
      code: "SVCQUAL",
      label: "Service Qualifier",
      value: "AT1 (FANS-1/A ATC Type 1 (CPDLC uplink))",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "payload_hex",
      code: "PAYLOAD",
      label: "CPDLC Payload (ASN.1 PER, hex)",
      value: "220670282343870C (8 bytes)",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "crc",
      code: "CRC",
      label: "CRC (16-bit, ARINC-622)",
      value: "E9A6",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "payload_note",
      code: "NOTE",
      label: "Note",
      value: "Payload is ASN.1 PER binary — full message element decode requires a FANS-1/A ASN.1 decoder (e.g. libacars).",
    });
  });

});
