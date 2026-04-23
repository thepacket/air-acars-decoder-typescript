import { MessageDecoder } from '../MessageDecoder';
import { Label_A0_AFN } from './Label_A0_AFN';

describe('Label_A0_AFN', () => {
  let plugin: Label_A0_AFN;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_A0_AFN(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-a0-afn");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["A0"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "A0", text: '' });
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
  });

  test("decodes #1: /BDOCAYA.AFN/FMHFIN62,.OH-LWC,461F4A,222914/FAK0,ENOB/FARADS…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/BDOCAYA.AFN/FMHFIN62,.OH-LWC,461F4A,222914/FAK0,ENOB/FARADS,0/FARATC,0CC02",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "BDOCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHFIN62",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "OH-LWC",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "461F4A",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:29:14Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · ENOB",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0CC02",
    });
  });

  test("decodes #2: /YQXD2YA.AFN/FMHTAP203,.CS-TUH,,222902/FAK0,CDQX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXD2YA.AFN/FMHTAP203,.CS-TUH,,222902/FAK0,CDQX/FARADS,0/FARATC,0,YQXD2YA2D27",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHTAP203",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "CS-TUH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:29:02Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CDQX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQXD2YA2D27",
    });
  });

  test("decodes #3: /REKCAYA.AFN/FMHFIN62,.OH-LWC,,222837/FCABDOCAYA,07ECA", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/REKCAYA.AFN/FMHFIN62,.OH-LWC,,222837/FCABDOCAYA,07ECA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "REKCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHFIN62",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "OH-LWC",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:37Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCABDOCAYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "07ECA",
    });
  });

  test("decodes #4: /SMACAYA.AFN/FMHAVA026,.N793AV,AAC33E,222842/FAK0,LPPO/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/SMACAYA.AFN/FMHAVA026,.N793AV,AAC33E,222842/FAK0,LPPO/FARADS,0/FARATC,06269",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAVA026",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N793AV",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "AAC33E",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:42Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · LPPO",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 06269",
    });
  });

  test("decodes #5: /NYCODYA.AFN/FMHAZA603,.EI-EJO,4CAA6D,222847/FAK4,KZWYBCBA", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/NYCODYA.AFN/FMHAZA603,.EI-EJO,4CAA6D,222847/FAK4,KZWYBCBA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "NYCODYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAZA603",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EI-EJO",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "4CAA6D",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:47Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FAK4",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "KZWYBCBA",
    });
  });

  test("decodes #6: /YQXE2YA.AFN/FMHTAP203,.CS-TUH,,222839/FCAYQXD2YA,01A22", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXE2YA.AFN/FMHTAP203,.CS-TUH,,222839/FCAYQXD2YA,01A22",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHTAP203",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "CS-TUH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:39Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAYQXD2YA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "01A22",
    });
  });

  test("decodes #7: /OAKODYA.AFN/FMHCCA783,.B-7898,,222807/FCAPOMCAYA,04301", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/OAKODYA.AFN/FMHCCA783,.B-7898,,222807/FCAPOMCAYA,04301",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "OAKODYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHCCA783",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-7898",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:07Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAPOMCAYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "04301",
    });
  });

  test("decodes #8: /OAKODYA.AFN/FMHCCA783,.B-7898,,222807/FCAPOMCAYA,04301", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/OAKODYA.AFN/FMHCCA783,.B-7898,,222807/FCAPOMCAYA,04301",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "OAKODYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHCCA783",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-7898",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:07Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAPOMCAYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "04301",
    });
  });

  test("decodes #9: /GVSCAYA.AFN/FMHAEA058,.EC-OMC,,222836/FAK0,GVSC/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/GVSCAYA.AFN/FMHAEA058,.EC-OMC,,222836/FAK0,GVSC/FARADS,0/FARATC,0,GVSCAYA2BA6",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "GVSCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAEA058",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "EC-OMC",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:36Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · GVSC",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · GVSCAYA2BA6",
    });
  });

  test("decodes #10: /USADCXA.AFN/FMHETH512,.ET-AOR,040048,222829/FAK1,KUSA/FARAT…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/USADCXA.AFN/FMHETH512,.ET-AOR,040048,222829/FAK1,KUSA/FARATC,1,USADCXA/FARADS,1,USADCXA5D16",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "USADCXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHETH512",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "ET-AOR",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "040048",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "22:28:29Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK1 · KUSA",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARATC · 1 · USADCXA",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARADS · 1 · USADCXA5D16",
    });
  });

  test("decodes #11: /PIKCPYA.AFN/FMHUAL124,.N13013,,013957/FCASNNCPXA,06550", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/PIKCPYA.AFN/FMHUAL124,.N13013,,013957/FCASNNCPXA,06550",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL124",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N13013",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:39:57Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCASNNCPXA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "06550",
    });
  });

  test("decodes #12: /BZVCAYA.AFN/FMHOCN132W,.D-AIKE/FAK0,FCCC/FARADS,0/FARATC,05…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/BZVCAYA.AFN/FMHOCN132W,.D-AIKE/FAK0,FCCC/FARADS,0/FARATC,052FB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "BZVCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHOCN132W",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "D-AIKE",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · FCCC",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 052FB",
    });
  });

  test("decodes #13: /RPHIAYA.AFN/FMHANA816,.JA832A/FAK0,RPHI/FARADS,0/FARATC,078…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/RPHIAYA.AFN/FMHANA816,.JA832A/FAK0,RPHI/FARADS,0/FARATC,078EE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHANA816",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RPHI",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 078EE",
    });
  });

  test("decodes #14: /RPHIAYA.AFN/FMHANA816,.JA832A/FAK0,RPHI/FARADS,0/FARATC,078…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/RPHIAYA.AFN/FMHANA816,.JA832A/FAK0,RPHI/FARADS,0/FARATC,078EE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "RPHIAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHANA816",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "JA832A",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RPHI",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 078EE",
    });
  });

  test("decodes #15: /SMACAYA.AFN/FMHLER2920,.9H-HFI,4D2505,013910/FAK0,LPPO/FARA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/SMACAYA.AFN/FMHLER2920,.9H-HFI,4D2505,013910/FAK0,LPPO/FARADS,0/FARATC,0A955",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHLER",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "2920",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "9H-HFI",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "4D2505",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:39:10Z",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · LPPO",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0A955",
    });
  });

  test("decodes #16: /SMACAYA.AFN/FMHLER2920,.9H-HFI,4D2505,013910/FAK0,LPPO/FARA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/SMACAYA.AFN/FMHLER2920,.9H-HFI,4D2505,013910/FAK0,LPPO/FARADS,0/FARATC,0A955",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHLER",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "2920",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "9H-HFI",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "4D2505",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:39:10Z",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · LPPO",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0A955",
    });
  });

  test("decodes #17: /PIKCPYA.AFN/FMHTOM071,.G-TUIN,,013915/FAK0,EGGX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/PIKCPYA.AFN/FMHTOM071,.G-TUIN,,013915/FAK0,EGGX/FARADS,0/FARATC,0,PIKCPYAC762",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "PIKCPYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHTOM071",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "G-TUIN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:39:15Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · EGGX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · PIKCPYAC762",
    });
  });

  test("decodes #18: /YQXD2YA.AFN/FMHTSC110,.C-GUBO,,013850/FAK0,CDQX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXD2YA.AFN/FMHTSC110,.C-GUBO,,013850/FAK0,CDQX/FARADS,0/FARATC,0,YQXD2YA4406",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXD2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHTSC110",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "C-GUBO",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:50Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CDQX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQXD2YA4406",
    });
  });

  test("decodes #19: /SMACAYA.AFN/FMHTOM071,.G-TUIN,40787A,013843/FCAPIKCPYA,08FD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/SMACAYA.AFN/FMHTOM071,.G-TUIN,40787A,013843/FCAPIKCPYA,08FD2",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "SMACAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHTOM071",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "G-TUIN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "40787A",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:43Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAPIKCPYA",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "08FD2",
    });
  });

  test("decodes #20: /FUKJJYA.AFN/FMHCCA992,.B-2035,7808CC,013842/FAK0,RJJJ/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHCCA992,.B-2035,7808CC,013842/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYA22FF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHCCA992",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-2035",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "7808CC",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:42Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYA22FF",
    });
  });

  test("decodes #21: /FUKJJYA.AFN/FMHCCA992,.B-2035,7808CC,013842/FAK0,RJJJ/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHCCA992,.B-2035,7808CC,013842/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYA22FF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHCCA992",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-2035",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "7808CC",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:42Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYA22FF",
    });
  });

  test("decodes #22: /NIMCAYA.AFN/FMHMAU14,.3B-NCE/FAK0,DRRR/FARADS,0/FARATC,0456…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/NIMCAYA.AFN/FMHMAU14,.3B-NCE/FAK0,DRRR/FARADS,0/FARATC,0456E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHMAU14",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "3B-NCE",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · DRRR",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0456E",
    });
  });

  test("decodes #23: /BZVCAYA.AFN/FMHSWR282,.HB-JMH/FAK0,FCCC/FARADS,0/FARATC,01B…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/BZVCAYA.AFN/FMHSWR282,.HB-JMH/FAK0,FCCC/FARADS,0/FARATC,01B75",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "BZVCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHSWR282",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "HB-JMH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · FCCC",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 01B75",
    });
  });

  test("decodes #24: /FUKJJYA.AFN/FMHACA3,.C-FIUL,C01734,013814/FAK0,RJJJ/FARADS,…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHACA3,.C-FIUL,C01734,013814/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYA7D8D",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHACA3",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "C-FIUL",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "C01734",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:14Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYA7D8D",
    });
  });

  test("decodes #25: /FUKJJYA.AFN/FMHACA3,.C-FIUL,C01734,013814/FAK0,RJJJ/FARADS,…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHACA3,.C-FIUL,C01734,013814/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYA7D8D",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHACA3",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "C-FIUL",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "C01734",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:14Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYA7D8D",
    });
  });

  test("decodes #26: /FUKJJYA.AFN/FMHUAL837,.N77019,AA6BA4,013800/FAK0,RJJJ/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHUAL837,.N77019,AA6BA4,013800/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYA3FCA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL837",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N77019",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "AA6BA4",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:00Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYA3FCA",
    });
  });

  test("decodes #27: /ALGCAYA.AFN/FMHMAU14,.3B-NCE/FAK0,DAAA/FARADS,0/FARATC,0D24…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ALGCAYA.AFN/FMHMAU14,.3B-NCE/FAK0,DAAA/FARADS,0/FARATC,0D243",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ALGCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHMAU14",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "3B-NCE",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · DAAA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0D243",
    });
  });

  test("decodes #28: /FUKJJYA.AFN/FMHUAL837,.N77019,AA6BA4,013800/FAK0,RJJJ/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHUAL837,.N77019,AA6BA4,013800/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYA3FCA",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL837",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N77019",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "AA6BA4",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:00Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYA3FCA",
    });
  });

  test("decodes #29: /ANCATYA.AFN/FMHCCA992,.B-2035,,013808/FCAFUKJJYA,0C3FF", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ANCATYA.AFN/FMHCCA992,.B-2035,,013808/FCAFUKJJYA,0C3FF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHCCA992",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-2035",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:08Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAFUKJJYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "0C3FF",
    });
  });

  test("decodes #30: /ANCATYA.AFN/FMHCCA992,.B-2035,,013808/FCAFUKJJYA,0C3FF", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ANCATYA.AFN/FMHCCA992,.B-2035,,013808/FCAFUKJJYA,0C3FF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHCCA992",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-2035",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:38:08Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAFUKJJYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "0C3FF",
    });
  });

  test("decodes #31: /NDJCAYA.AFN/FMHSWR282,.HB-JMH/FCABZVCAYA,02AF3", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/NDJCAYA.AFN/FMHSWR282,.HB-JMH/FCABZVCAYA,02AF3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "NDJCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHSWR282",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "HB-JMH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCABZVCAYA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "02AF3",
    });
  });

  test("decodes #32: /NIMCAYA.AFN/FMHMAU14,.3B-NCE/FCAALGCAYA,0767F", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/NIMCAYA.AFN/FMHMAU14,.3B-NCE/FCAALGCAYA,0767F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHMAU14",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "3B-NCE",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAALGCAYA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "0767F",
    });
  });

  test("decodes #33: /SGNGWXA.AFN/FMHEVA225,B-16738/FAK0,VVHM/FARADS,0/FARATC,001…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/SGNGWXA.AFN/FMHEVA225,B-16738/FAK0,VVHM/FARADS,0/FARATC,0012E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "SGNGWXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHEVA225",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-16738",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · VVHM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0012E",
    });
  });

  test("decodes #34: /ANCATYA.AFN/FMHUAL837,.N77019,,013742/FCAFUKJJYA,02A81", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ANCATYA.AFN/FMHUAL837,.N77019,,013742/FCAFUKJJYA,02A81",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL837",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N77019",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:37:42Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAFUKJJYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "02A81",
    });
  });

  test("decodes #35: /SGNGWXA.AFN/FMHEVA225,B-16738/FAK0,VVHM/FARADS,0/FARATC,001…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/SGNGWXA.AFN/FMHEVA225,B-16738/FAK0,VVHM/FARADS,0/FARATC,0012E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "SGNGWXA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHEVA225",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "B-16738",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · VVHM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0012E",
    });
  });

  test("decodes #36: /ANCATYA.AFN/FMHUAL837,.N77019,,013742/FCAFUKJJYA,02A81", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ANCATYA.AFN/FMHUAL837,.N77019,,013742/FCAFUKJJYA,02A81",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ANCATYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL837",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N77019",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:37:42Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCAFUKJJYA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "02A81",
    });
  });

  test("decodes #37: /ACCFAYA.AFN/FMHUAL187,.N26970,,013700/FCADIISITA,1C28E", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ACCFAYA.AFN/FMHUAL187,.N26970,,013700/FCADIISITA,1C28E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ACCFAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL187",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N26970",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:37:00Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCADIISITA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "1C28E",
    });
  });

  test("decodes #38: /ACCFAYA.AFN/FMHUAL187,.N26970,,013700/FCADIISITA,1C28E", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ACCFAYA.AFN/FMHUAL187,.N26970,,013700/FCADIISITA,1C28E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ACCFAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL187",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N26970",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:37:00Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCADIISITA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "1C28E",
    });
  });

  test("decodes #39: /ACCFAYA.AFN/FMHUAL187,.N26970,,013700/FCADIISITA,1C28E", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/ACCFAYA.AFN/FMHUAL187,.N26970,,013700/FCADIISITA,1C28E",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "ACCFAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL187",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N26970",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:37:00Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability",
      code: "CAPAB",
      label: "FANS Capability Code",
      value: "FCADIISITA",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "ground_facility",
      code: "GNDFAC",
      label: "Ground Facility (full)",
      value: "1C28E",
    });
  });

  test("decodes #40: /YQME2YA.AFN/FMHJBU33,.N4058J,,013646/FAK0,CZQM/FARADS,0/FAR…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQME2YA.AFN/FMHJBU33,.N4058J,,013646/FAK0,CZQM/FARADS,0/FARATC,0,YQME2YACFEF",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHJBU33",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N4058J",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:36:46Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CZQM",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQME2YACFEF",
    });
  });

  test("decodes #41: /NIMCAYA.AFN/FMHBAW59,.G-XWBJ/FAK0,DRRR/FARADS,0/FARATC,0FFD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/NIMCAYA.AFN/FMHBAW59,.G-XWBJ/FAK0,DRRR/FARADS,0/FARATC,0FFD1",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "NIMCAYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHBAW59",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "G-XWBJ",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · DRRR",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0FFD1",
    });
  });

  test("decodes #42: /YQME2YA.AFN/FMHUAL70,.N37018,,013615/FAK4,CZQM/FARADS,4/FAR…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQME2YA.AFN/FMHUAL70,.N37018,,013615/FAK4,CZQM/FARADS,4/FARATC,4,YQME2YA6E17",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL70",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N37018",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:36:15Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK4 · CZQM",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 4",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 4 · YQME2YA6E17",
    });
  });

  test("decodes #43: /YQME2YA.AFN/FMHUAL70,.N37018,,013615/FAK4,CZQM/FARADS,4/FAR…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQME2YA.AFN/FMHUAL70,.N37018,,013615/FAK4,CZQM/FARADS,4/FARATC,4,YQME2YA6E17",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL70",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N37018",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:36:15Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK4 · CZQM",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 4",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 4 · YQME2YA6E17",
    });
  });

  test("decodes #44: /YQME2YA.AFN/FMHUAL70,.N37018,,013615/FAK4,CZQM/FARADS,4/FAR…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQME2YA.AFN/FMHUAL70,.N37018,,013615/FAK4,CZQM/FARADS,4/FARATC,4,YQME2YA6E17",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQME2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL70",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N37018",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:36:15Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK4 · CZQM",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 4",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 4 · YQME2YA6E17",
    });
  });

  test("decodes #45: /FUKJJYA.AFN/FMHUAL143,.N38955,A47FDE,013459/FAK0,RJJJ/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHUAL143,.N38955,A47FDE,013459/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYAE480",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL143",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N38955",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "A47FDE",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:34:59Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYAE480",
    });
  });

  test("decodes #46: /FUKJJYA.AFN/FMHUAL143,.N38955,A47FDE,013459/FAK0,RJJJ/FARAD…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/FUKJJYA.AFN/FMHUAL143,.N38955,A47FDE,013459/FAK0,RJJJ/FARADS,0/FARATC,0,FUKJJYAE480",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "FUKJJYA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHUAL143",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N38955",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "reason",
      code: "REASON",
      label: "Reason / Spare",
      value: "A47FDE",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:34:59Z",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · RJJJ",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · FUKJJYAE480",
    });
  });

  test("decodes #47: /YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FARATC,0,YQXE2YA391B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAAL720",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N797AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:34:35Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CZQX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQXE2YA391B",
    });
  });

  test("decodes #48: /YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FARATC,0,YQXE2YA391B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAAL720",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N797AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:34:35Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CZQX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQXE2YA391B",
    });
  });

  test("decodes #49: /YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FARATC,0,YQXE2YA391B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAAL720",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N797AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:34:35Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CZQX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQXE2YA391B",
    });
  });

  test("decodes #50: /YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FA…", () => {
    const decodeResult = plugin.decode({
      label: "A0",
      text: "/YQXE2YA.AFN/FMHAAL720,.N797AN,,013435/FAK0,CZQX/FARADS,0/FARATC,0,YQXE2YA391B",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a0-afn");
    expect(decodeResult.formatted.description).toBe("AFN — ATS Facilities Notification (FANS 1/A data-link logon)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "AFN — ATS Facilities Notification (FANS 1/A logon)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "ground_address",
      code: "GNDADDR",
      label: "Ground ACARS Address",
      value: "YQXE2YA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "application",
      code: "APPL",
      label: "Application",
      value: "AFN (ATS Facilities Notification)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "aircraft_address",
      code: "ACADDR",
      label: "Aircraft ACARS Address",
      value: "FMHAAL720",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N797AN",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "timestamp",
      code: "TIME",
      label: "Message Time (UTC)",
      value: "01:34:35Z",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "capability_block",
      code: "BLK1",
      label: "Block 1",
      value: "FAK0 · CZQX",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "capability_block",
      code: "BLK2",
      label: "Block 2",
      value: "FARADS · 0",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "capability_block",
      code: "BLK3",
      label: "Block 3",
      value: "FARATC · 0 · YQXE2YA391B",
    });
  });

});
