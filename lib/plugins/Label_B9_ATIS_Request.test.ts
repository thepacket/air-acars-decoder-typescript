import { MessageDecoder } from '../MessageDecoder';
import { Label_B9_ATIS_Request } from './Label_B9_ATIS_Request';

describe('Label_B9_ATIS_Request', () => {
  let plugin: Label_B9_ATIS_Request;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_B9_ATIS_Request(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-b9-atis-request");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["B9"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "B9", text: '' });
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
  });

  test("decodes #1: /KPHL.TI2/024KPHLA9412", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KPHL.TI2/024KPHLA9412",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KPHL",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KPHL (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "9",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "412",
    });
  });

  test("decodes #2: /RJSS.TI2/000RJSSA8DA5", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJSS.TI2/000RJSSA8DA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJSS (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "8",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "DA5",
    });
  });

  test("decodes #3: /RJSS.TI2/000RJSSA8DA5", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJSS.TI2/000RJSSA8DA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJSS (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "8",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "DA5",
    });
  });

  test("decodes #4: /KSTP.TI2/024KSTPC5F90", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KSTP.TI2/024KSTPC5F90",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KSTP",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KSTP (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F90",
    });
  });

  test("decodes #5: /KSTP.TI2/024KSTPC5F90", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KSTP.TI2/024KSTPC5F90",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KSTP",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KSTP (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F90",
    });
  });

  test("decodes #6: /KSTP.TI2/024KSTPC5F90", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KSTP.TI2/024KSTPC5F90",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KSTP",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KSTP (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F90",
    });
  });

  test("decodes #7: /RJSS.TI2/000RJSSA8DA5", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJSS.TI2/000RJSSA8DA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJSS (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "8",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "DA5",
    });
  });

  test("decodes #8: /RJSS.TI2/000RJSSA8DA5", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJSS.TI2/000RJSSA8DA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJSS (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "8",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "DA5",
    });
  });

  test("decodes #9: /RJSS.TI2/000RJSSA8DA5", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJSS.TI2/000RJSSA8DA5",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJSS (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "8",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "DA5",
    });
  });

  test("decodes #10: /EIDW.TI2/024EIDWA1982", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/EIDW.TI2/024EIDWA1982",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "EIDW",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "EIDW (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "982",
    });
  });

  test("decodes #11: /KCLT.TI2/000KCLTA2431", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KCLT.TI2/000KCLTA2431",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KCLT (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "431",
    });
  });

  test("decodes #12: /KCLT.TI2/000KCLTA2431", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KCLT.TI2/000KCLTA2431",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "000",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KCLT (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "431",
    });
  });

  test("decodes #13: /CYYZ.TI2/040CYYZA1F4A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYYZ.TI2/040CYYZA1F4A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYYZ (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F4A",
    });
  });

  test("decodes #14: /LEMD.TI2/024LEMDC163F", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/LEMD.TI2/024LEMDC163F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "LEMD",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "LEMD (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "63F",
    });
  });

  test("decodes #15: /LEMD.TI2/024LEMDC163F", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/LEMD.TI2/024LEMDC163F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "LEMD",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "LEMD (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "63F",
    });
  });

  test("decodes #16: J07ACI0100/RJAA.TI2/000RJAAAC5B7", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "J07ACI0100/RJAA.TI2/000RJAAAC5B7",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: /CYYZ.TI2/040CYYZA1F4A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYYZ.TI2/040CYYZA1F4A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYYZ (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F4A",
    });
  });

  test("decodes #18: /CYYZ.TI2/040CYYZA1F4A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYYZ.TI2/040CYYZA1F4A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYYZ (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F4A",
    });
  });

  test("decodes #19: /CYYZ.TI2/040CYYZA1F4A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYYZ.TI2/040CYYZA1F4A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYYZ (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F4A",
    });
  });

  test("decodes #20: /CYYZ.TI2/040CYYZA1F4A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYYZ.TI2/040CYYZA1F4A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYYZ (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F4A",
    });
  });

  test("decodes #21: /CYYZ.TI2/040CYYZA1F4A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYYZ.TI2/040CYYZA1F4A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYYZ (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "F4A",
    });
  });

  test("decodes #22: /PANC.TI2/046PANCA995F", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/PANC.TI2/046PANCA995F",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "046",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "PANC (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "9",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "95F",
    });
  });

  test("decodes #23: TI2/024DCA AA146", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "TI2/024DCA AA146",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.raw.atis_subtype).toBe("TI2");
    expect(decodeResult.raw.sequence).toBe("024");
    expect(decodeResult.raw.arrival_icao).toBe("DCA");
    expect(decodeResult.formatted.items).toHaveLength(4);
  });

  test("decodes #24: /KCLE.TI2/024KCLEC5273", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KCLE.TI2/024KCLEC5273",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KCLE",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KCLE (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "273",
    });
  });

  test("decodes #25: /KCLE.TI2/024KCLEC5273", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KCLE.TI2/024KCLEC5273",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KCLE",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KCLE (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "273",
    });
  });

  test("decodes #26: /KCLE.TI2/024KCLEC5273", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KCLE.TI2/024KCLEC5273",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KCLE",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KCLE (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "273",
    });
  });

  test("decodes #27: /KCLE.TI2/024KCLEC5273", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KCLE.TI2/024KCLEC5273",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KCLE",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KCLE (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "273",
    });
  });

  test("decodes #28: /KMCO.TI2/024KMCOA1391", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KMCO.TI2/024KMCOA1391",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KMCO",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KMCO (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "391",
    });
  });

  test("decodes #29: /KMKE.TI2/024KMKEA55FB", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KMKE.TI2/024KMKEA55FB",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KMKE",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KMKE (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "5",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "5FB",
    });
  });

  test("decodes #30: /PANC.TI2/024PANCAB33A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/PANC.TI2/024PANCAB33A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "PANC (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "B",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "33A",
    });
  });

  test("decodes #31: /PANC.TI2/024PANCAB33A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/PANC.TI2/024PANCAB33A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "PANC (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "B",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "33A",
    });
  });

  test("decodes #32: /KSEA.TI2/024KSEAA3BC3", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KSEA.TI2/024KSEAA3BC3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KSEA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KSEA (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "3",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "BC3",
    });
  });

  test("decodes #33: TI2/024GYY AD65A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "TI2/024GYY AD65A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.raw.atis_subtype).toBe("TI2");
    expect(decodeResult.raw.sequence).toBe("024");
    expect(decodeResult.raw.arrival_icao).toBe("GYY");
    expect(decodeResult.formatted.items).toHaveLength(4);
  });

  test("decodes #34: TI2/024GYY AD65A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "TI2/024GYY AD65A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.raw.atis_subtype).toBe("TI2");
    expect(decodeResult.raw.sequence).toBe("024");
    expect(decodeResult.raw.arrival_icao).toBe("GYY");
    expect(decodeResult.formatted.items).toHaveLength(4);
  });

  test("decodes #35: /RJFF.TI2/040RJFFA1876", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJFF.TI2/040RJFFA1876",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJFF",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJFF (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "876",
    });
  });

  test("decodes #36: /RJFF.TI2/040RJFFA1876", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/RJFF.TI2/040RJFFA1876",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "RJFF",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "040",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "RJFF (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "876",
    });
  });

  test("decodes #37: /CYVR.TI2/024CYVRA1D56", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/CYVR.TI2/024CYVRA1D56",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "CYVR",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "CYVR (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "1",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "D56",
    });
  });

  test("decodes #38: /KIAH.TI2/024KIAHA2E97", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KIAH.TI2/024KIAHA2E97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KIAH (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "E97",
    });
  });

  test("decodes #39: /KIAH.TI2/024KIAHA2E97", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KIAH.TI2/024KIAHA2E97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KIAH (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "E97",
    });
  });

  test("decodes #40: /KIAH.TI2/024KIAHA2E97", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KIAH.TI2/024KIAHA2E97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KIAH (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "E97",
    });
  });

  test("decodes #41: /KIAH.TI2/024KIAHA2E97", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KIAH.TI2/024KIAHA2E97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KIAH (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "E97",
    });
  });

  test("decodes #42: /KIAH.TI2/024KIAHA2E97", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KIAH.TI2/024KIAHA2E97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KIAH (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "E97",
    });
  });

  test("decodes #43: /KIAH.TI2/024KIAHA2E97", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KIAH.TI2/024KIAHA2E97",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KIAH (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "A (Alpha)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "2",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "E97",
    });
  });

  test("decodes #44: /KLGA.TI2/024KLGACBAA8", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KLGA.TI2/024KLGACBAA8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KLGA (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "B",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "AA8",
    });
  });

  test("decodes #45: /KLGA.TI2/024KLGACBAA8", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KLGA.TI2/024KLGACBAA8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KLGA (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "B",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "AA8",
    });
  });

  test("decodes #46: /KLGA.TI2/024KLGACBAA8", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KLGA.TI2/024KLGACBAA8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KLGA (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "B",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "AA8",
    });
  });

  test("decodes #47: /KLGA.TI2/024KLGACBAA8", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "/KLGA.TI2/024KLGACBAA8",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "ATIS Request — downlink to ground-station ATIS service",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "ground_station",
      code: "GNDSTN",
      label: "Ground Station ICAO",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_subtype",
      code: "SUBTYPE",
      label: "Sub-type / Service",
      value: "TI2 (Terminal Information v2)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Sequence / Parameter",
      value: "024",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "payload_echo",
      code: "ECHO",
      label: "Payload Target ICAO",
      value: "KLGA (echoes target)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "ATIS Info Letter",
      value: "C (Charlie)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_subqualifier",
      code: "ATIS_SUBQ",
      label: "Sub-qualifier",
      value: "B",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "checksum",
      code: "CHK",
      label: "Checksum",
      value: "AA8",
    });
  });

  test("decodes #48: TI2/024LGA A699A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "TI2/024LGA A699A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.raw.atis_subtype).toBe("TI2");
    expect(decodeResult.raw.sequence).toBe("024");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.formatted.items).toHaveLength(4);
  });

  test("decodes #49: TI2/024LGA A699A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "TI2/024LGA A699A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.raw.atis_subtype).toBe("TI2");
    expect(decodeResult.raw.sequence).toBe("024");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.formatted.items).toHaveLength(4);
  });

  test("decodes #50: TI2/024LGA A699A", () => {
    const decodeResult = plugin.decode({
      label: "B9",
      text: "TI2/024LGA A699A",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-b9-atis-request");
    expect(decodeResult.formatted.description).toBe("ATIS Request (aircraft → ground-station ATIS service)");
    expect(decodeResult.raw.atis_subtype).toBe("TI2");
    expect(decodeResult.raw.sequence).toBe("024");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.formatted.items).toHaveLength(4);
  });

  test('decodes relaxed full format with long network address and IATA airport: /ATSOOXA.TI2/024CLT ABAEF', () => {
    const decodeResult = plugin.decode({ label: 'B9', text: '/ATSOOXA.TI2/024CLT ABAEF' });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('partial');
    expect(decodeResult.decoder.name).toBe('label-b9-atis-request');
    expect(decodeResult.formatted.description).toBe('ATIS Request (aircraft → ground-station ATIS service)');
    expect(decodeResult.raw.ground_station_icao).toBe('ATSOOXA');
    expect(decodeResult.raw.atis_subtype).toBe('TI2');
    expect(decodeResult.raw.sequence).toBe('024');
    expect(decodeResult.raw.arrival_icao).toBe('CLT');
    expect(decodeResult.formatted.items).toEqual(
      expect.arrayContaining([
        { type: 'message_type', code: 'MSGTYP', label: 'Message Type', value: 'ATIS Request — downlink to ground-station ATIS service' },
        { type: 'ground_station', code: 'GNDSTN', label: 'Ground Station / Network Address', value: 'ATSOOXA' },
        { type: 'atis_subtype', code: 'SUBTYPE', label: 'Sub-type / Service', value: 'TI2 (Terminal Information v2)' },
        { type: 'sequence', code: 'SEQ', label: 'Sequence / Parameter', value: '024' },
        { type: 'airport', code: 'AIRPORT', label: 'Requested Airport', value: 'CLT' },
      ]),
    );
  });

  test('decodes stripped-preamble format: TI2/024IAH AF3C5', () => {
    const decodeResult = plugin.decode({ label: 'B9', text: 'TI2/024IAH AF3C5' });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('partial');
    expect(decodeResult.decoder.name).toBe('label-b9-atis-request');
    expect(decodeResult.formatted.description).toBe('ATIS Request (aircraft → ground-station ATIS service)');
    expect(decodeResult.raw.atis_subtype).toBe('TI2');
    expect(decodeResult.raw.sequence).toBe('024');
    expect(decodeResult.raw.arrival_icao).toBe('IAH');
    expect(decodeResult.formatted.items).toEqual(
      expect.arrayContaining([
        { type: 'message_type', code: 'MSGTYP', label: 'Message Type', value: 'ATIS Request — downlink to ground-station ATIS service' },
        { type: 'atis_subtype', code: 'SUBTYPE', label: 'Sub-type / Service', value: 'TI2 (Terminal Information v2)' },
        { type: 'sequence', code: 'SEQ', label: 'Sequence / Parameter', value: '024' },
        { type: 'airport', code: 'AIRPORT', label: 'Requested Airport', value: 'IAH' },
      ]),
    );
  });

  test('decodes stripped-preamble format with 3-char IATA code: TI2/024CVG AD3D0', () => {
    const decodeResult = plugin.decode({ label: 'B9', text: 'TI2/024CVG AD3D0' });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('partial');
    expect(decodeResult.decoder.name).toBe('label-b9-atis-request');
    expect(decodeResult.raw.atis_subtype).toBe('TI2');
    expect(decodeResult.raw.sequence).toBe('024');
    expect(decodeResult.raw.arrival_icao).toBe('CVG');
    expect(decodeResult.formatted.items).toEqual(
      expect.arrayContaining([
        { type: 'message_type', code: 'MSGTYP', label: 'Message Type', value: 'ATIS Request — downlink to ground-station ATIS service' },
        { type: 'atis_subtype', code: 'SUBTYPE', label: 'Sub-type / Service', value: 'TI2 (Terminal Information v2)' },
        { type: 'sequence', code: 'SEQ', label: 'Sequence / Parameter', value: '024' },
        { type: 'airport', code: 'AIRPORT', label: 'Requested Airport', value: 'CVG' },
      ]),
    );
  });

});
