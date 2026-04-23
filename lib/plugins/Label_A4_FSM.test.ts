import { MessageDecoder } from '../MessageDecoder';
import { Label_A4_FSM } from './Label_A4_FSM';

describe('Label_A4_FSM', () => {
  let plugin: Label_A4_FSM;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_A4_FSM(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-a4-fsm");
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["A4"]);
  });

  test('reports own plugin name on empty text', () => {
    const r = plugin.decode({ label: "A4", text: '' });
    expect(r.decoder.name).toBe("label-a4-fsm");
  });

  test("decodes #1: /GVADCYA.FS1/FSM 0456 260423 LSZH SWR2MC CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVADCYA.FS1/FSM 0456 260423 LSZH\r\nSWR2MC CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\n4800",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVADCYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0456"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR2MC CDA RECEIVED\nCLEARANCE CONFIRMED\n4800"
      }
    ]);
  });

  test("decodes #2: /GVACLXA.FS1/FSM 0456 260423 LSZH SWR883P RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0456 260423 LSZH\r\nSWR883P RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY\r\n54BE\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0456"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR883P RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\n54BE"
      }
    ]);
  });

  test("decodes #3: /HELCLXA.FS1/FSM 0456 260423 EFHK FIN85P CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/HELCLXA.FS1/FSM 0456 260423 EFHK\r\nFIN85P CDA RECEIVED\r\nCLEARANCE CONFIRMED8FEC",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "HELCLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0456"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "EFHK"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FIN85P CDA RECEIVED\nCLEARANCE CONFIRMED8FEC"
      }
    ]);
  });

  test("decodes #4: /HELCLXA.FS1/FSM 0457 260423 EFHK OHWIC RCD REJECTED FLIGHT …", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/HELCLXA.FS1/FSM 0457 260423 EFHK\r\nOHWIC RCD REJECTED\r\nFLIGHT PLAN NOT HELD\r\nREVERT TO VOICE\r\nPROCEDURES3AD8\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "HELCLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0457"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "EFHK"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "OHWIC RCD REJECTED\nFLIGHT PLAN NOT HELD\nREVERT TO VOICE\nPROCEDURES3AD8"
      }
    ]);
  });

  test("decodes #5: /RIOCGYA.FS1/FSM 0455 260423 SBGR QTR774 CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RIOCGYA.FS1/FSM 0455 260423 SBGR\n\tQTR774 CDA RECEIVED\n\tCLEARANCE CONFIRMED\n\t\n\t902E",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RIOCGYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0455"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBGR"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "QTR774 CDA RECEIVED\nCLEARANCE CONFIRMED\n902E"
      }
    ]);
  });

  test("decodes #6: /RIOCGYA.FS1/FSM 0455 260423 SBGR QTR774 CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RIOCGYA.FS1/FSM 0455 260423 SBGR\n\tQTR774 CDA RECEIVED\n\tCLEARANCE CONFIRMED\n\t\n\t902E",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RIOCGYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0455"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBGR"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "QTR774 CDA RECEIVED\nCLEARANCE CONFIRMED\n902E"
      }
    ]);
  });

  test("decodes #7: /GVACLXA.FS1/FSM 0457 260423 LSZH SWR883P CDA RECEIVED CLEAR…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0457 260423 LSZH\r\nSWR883P CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\n1D92\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0457"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR883P CDA RECEIVED\nCLEARANCE CONFIRMED\n1D92"
      }
    ]);
  });

  test("decodes #8: /GVACLXA.FS1/FSM 0457 260423 LSZH SWR2CL RCD REJECTED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0457 260423 LSZH\r\nSWR2CL RCD REJECTED\r\n\r\n\r\nREQUEST TOO EARLY\r\nSEND REQUEST MAX 30MIN BEFORE TOBTF3AA\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0457"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR2CL RCD REJECTED\nREQUEST TOO EARLY\nSEND REQUEST MAX 30MIN BEFORE TOBTF3AA"
      }
    ]);
  });

  test("decodes #9: /GVADCYA.FS1/FSM 0458 260423 LSZH SWR59H RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVADCYA.FS1/FSM 0458 260423 \r\nLSZH\r\nSWR59H RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY\r\n817F",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #10: /GVADCYA.FS1/FSM 0458 260423 LSZH SWR59H CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVADCYA.FS1/FSM 0458 260423 LSZH\r\nSWR59H CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\n31E7",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVADCYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0458"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR59H CDA RECEIVED\nCLEARANCE CONFIRMED\n31E7"
      }
    ]);
  });

  test("decodes #11: /ATSTWXA.FS1/FSM 0458 260423 UTAT TW403 TIS REJECTED ERROR I…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/ATSTWXA.FS1/FSM 0458 260423 UTAT\n\tTW403 TIS REJECTED\n\tERROR IN MESSAGE\n\tREVERT TO VOICE\n\tPROCEDURES086C",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "ATSTWXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0458"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "UTAT"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TW403 TIS REJECTED\nERROR IN MESSAGE\nREVERT TO VOICE\nPROCEDURES086C"
      }
    ]);
  });

  test("decodes #12: /ATSTWXA.FS1/FSM 0458 260423 UTAT TW403 TIS REJECTED ERROR I…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/ATSTWXA.FS1/FSM 0458 260423 UTAT\n\tTW403 TIS REJECTED\n\tERROR IN MESSAGE\n\tREVERT TO VOICE\n\tPROCEDURES086C",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "ATSTWXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0458"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "UTAT"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TW403 TIS REJECTED\nERROR IN MESSAGE\nREVERT TO VOICE\nPROCEDURES086C"
      }
    ]);
  });

  test("decodes #13: /FUKDLYA.FS1/FSM 0459 260423 RJTT JAL85 CDA REJECTED CLEARAN…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/FUKDLYA.FS1/FSM 0459 260423 RJTT\n\tJAL85 CDA REJECTED\n\tCLEARANCE CANCELLED\n\tREVERT TO VOICE PROCEDURES\n\tBED9",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "FUKDLYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0459"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "RJTT"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "JAL85 CDA REJECTED\nCLEARANCE CANCELLED\nREVERT TO VOICE PROCEDURES\nBED9"
      }
    ]);
  });

  test("decodes #14: /FUKDLYA.FS1/FSM 0459 260423 RJTT JAL85 CDA REJECTED CLEARAN…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/FUKDLYA.FS1/FSM 0459 260423 RJTT\n\tJAL85 CDA REJECTED\n\tCLEARANCE CANCELLED\n\tREVERT TO VOICE PROCEDURES\n\tBED9",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "FUKDLYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0459"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "RJTT"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "JAL85 CDA REJECTED\nCLEARANCE CANCELLED\nREVERT TO VOICE PROCEDURES\nBED9"
      }
    ]);
  });

  test("decodes #15: /JEDDAYA.FS1/FSM 0457 260423 OEJN SVA373 RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/JEDDAYA.FS1/FSM 0457 260423 OEJN\n\tSVA373 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tEXPECTED CLEARANCE  AC30",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "JEDDAYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0457"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "OEJN"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SVA373 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nEXPECTED CLEARANCE  AC30"
      }
    ]);
  });

  test("decodes #16: /GVACLXA.FS1/FSM 0500 260423 LSZH SWR2CL RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0500 260423 LSZH\r\nSWR2CL RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY\r\n0BAC\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0500"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR2CL RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\n0BAC"
      }
    ]);
  });

  test("decodes #17: /GVACLXA.FS1/FSM 0500 260423 LSZH SWR2CL CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0500 260423 LSZH\r\nSWR2CL CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\n1E5C\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0500"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR2CL CDA RECEIVED\nCLEARANCE CONFIRMED\n1E5C"
      }
    ]);
  });

  test("decodes #18: /JEDDAYA.FS1/FSM 0500 260423 OEJN SVA373 CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/JEDDAYA.FS1/FSM 0500 260423 OEJN\n\tSVA373 CDA RECEIVED\n\tCLEARANCE CONFIRMED  D23A",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "JEDDAYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0500"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "OEJN"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SVA373 CDA RECEIVED\nCLEARANCE CONFIRMED  D23A"
      }
    ]);
  });

  test("decodes #19: /GVACLXA.FS1/FSM 0501 260423 LSZH SWR3PE RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0501 260423 \r\nLSZH\r\nSWR3PE RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY\r\n779E\r\n",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #20: /GVACLXA.FS1/FSM 0502 260423 LSZH SWR3PE CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0502 260423 LSZH\r\nSWR3PE CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\nD7B9\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0502"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SWR3PE CDA RECEIVED\nCLEARANCE CONFIRMED\nD7B9"
      }
    ]);
  });

  test("decodes #21: /JEDDAYA.FS1/FSM 0503 260423 OEJN SVA227 RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/JEDDAYA.FS1/FSM 0503 260423 OEJN\n\tSVA227 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tEXPECTED CLEARANCE  8CD9",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "JEDDAYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0503"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "OEJN"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "SVA227 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nEXPECTED CLEARANCE  8CD9"
      }
    ]);
  });

  test("decodes #22: /MLBSDCR.FS1/FSM \u0007 CYLT,0504, METAR: CYLT 230400Z 18003KT 15…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/MLBSDCR.FS1/FSM \u0007\n\tCYLT,0504,\n\tMETAR: CYLT 230400Z 18003KT 15SM BKN019 M21/M24 A3036 RMK SC6 DENSITY ALT -5099FT SLP286\n\t\n\tTAF: CYLT 222340Z 2300/2324 10008KT 6SM IC SCT025 BKN100\n\t TEMPO 2300/2306 3SM -SN BR OVC020\n\t FM230600 VRB03KT P6SM BKN025\n\t TEMPO 2306/2310 P6SM -SN\n\t FM231000 12005KT P6SM BKN030\n\t BECMG 2319/2321 VRB03KT RMK NXT FCST BY 230600ZCE01",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #23: /MLBSDCR.FS1/FSM \u0007 CYLT,0504, METAR: CYLT 230400Z 18003KT 15…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/MLBSDCR.FS1/FSM \u0007\n\tCYLT,0504,\n\tMETAR: CYLT 230400Z 18003KT 15SM BKN019 M21/M24 A3036 RMK SC6 DENSITY ALT -5099FT SLP286\n\t\n\tTAF: CYLT 222340Z 2300/2324 10008KT 6SM IC SCT025 BKN100\n\t TEMPO 2300/2306 3SM -SN BR OVC020\n\t FM230600 VRB03KT P6SM BKN025\n\t TEMPO 2306/2310 P6SM -SN\n\t FM231000 12005KT P6SM BKN030\n\t BECMG 2319/2321 VRB03KT RMK NXT FCST BY 230600ZCE01",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #24: /BCNCDYA.FS1/FSM 0520 260423 LEVC ANE2377 RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/BCNCDYA.FS1/FSM 0520 260423 LEVC\r\nANE2377 RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY495B",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "BCNCDYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0520"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LEVC"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "ANE2377 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY495B"
      }
    ]);
  });

  test("decodes #25: /MADCDYA.FS1/FSM 0521 260423 LEMD ANE96WU RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/MADCDYA.FS1/FSM 0521 260423 LEMD\r\nANE96WU RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBYD200",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "MADCDYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0521"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LEMD"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "ANE96WU RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBYD200"
      }
    ]);
  });

  test("decodes #26: /ARNATXA.FS1/FSM 0523 260423 ESSB XA0 RAI REJECTED REVERT TO…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/ARNATXA.FS1/FSM 0523 260423 ESSB\r\nXA0 RAI REJECTED\r\nREVERT TO VOICE\r\nPROCEDURES2418\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "ARNATXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0523"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "ESSB"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "XA0 RAI REJECTED\nREVERT TO VOICE\nPROCEDURES2418"
      }
    ]);
  });

  test("decodes #27: /ARNATXA.FS1/FSM 0524 260423 ESSB XA0 RAI REJECTED REVERT TO…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/ARNATXA.FS1/FSM 0524 260423 ESSB\r\nXA0 RAI REJECTED\r\nREVERT TO VOICE\r\nPROCEDURES3496\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "ARNATXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "ESSB"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "XA0 RAI REJECTED\nREVERT TO VOICE\nPROCEDURES3496"
      }
    ]);
  });

  test("decodes #28: /ARNATXA.FS1/FSM 0524 260423 ESSB XA0 RAI REJECTED REVERT TO…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/ARNATXA.FS1/FSM 0524 260423 ESSB\r\nXA0 RAI REJECTED\r\nREVERT TO VOICE\r\nPROCEDURES3496\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "ARNATXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "ESSB"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "XA0 RAI REJECTED\nREVERT TO VOICE\nPROCEDURES3496"
      }
    ]);
  });

  test("decodes #29: /ARNATXA.FS1/FSM 0524 260423 ESSB XA0 RAI REJECTED REVERT TO…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/ARNATXA.FS1/FSM 0524 260423 ESSB\r\nXA0 RAI REJECTED\r\nREVERT TO VOICE\r\nPROCEDURES3496\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "ARNATXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "ESSB"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "XA0 RAI REJECTED\nREVERT TO VOICE\nPROCEDURES3496"
      }
    ]);
  });

  test("decodes #30: /FUKDLYA.FS1/FSM 0524 260423 RJTT ANA257 CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/FUKDLYA.FS1/FSM 0524 260423 RJTT\r\nANA257 CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n871F",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "FUKDLYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "RJTT"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "ANA257 CDA RECEIVED\nCLEARANCE CONFIRMED\n871F"
      }
    ]);
  });

  test("decodes #31: /YQXE4YA.FS1/FSM 0524 260423 CZQX EIN960 RCL RECEIVED RCL RE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/YQXE4YA.FS1/FSM 0524 260423 CZQX\n\tEIN960 RCL RECEIVED\n\tRCL RECEIVED BY CZQX\n\tEND OF MESSAGE133A",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "YQXE4YA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "CZQX"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "EIN960 RCL RECEIVED\nRCL RECEIVED BY CZQX\nEND OF MESSAGE133A"
      }
    ]);
  });

  test("decodes #32: /YQXE4YA.FS1/FSM 0524 260423 CZQX EIN960 RCL RECEIVED RCL RE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/YQXE4YA.FS1/FSM 0524 260423 CZQX\n\tEIN960 RCL RECEIVED\n\tRCL RECEIVED BY CZQX\n\tEND OF MESSAGE133A",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "YQXE4YA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "CZQX"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "EIN960 RCL RECEIVED\nRCL RECEIVED BY CZQX\nEND OF MESSAGE133A"
      }
    ]);
  });

  test("decodes #33: /YQXE4YA.FS1/FSM 0524 260423 CZQX EIN960 RCL RECEIVED RCL RE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/YQXE4YA.FS1/FSM 0524 260423 CZQX\n\tEIN960 RCL RECEIVED\n\tRCL RECEIVED BY CZQX\n\tEND OF MESSAGE133A",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "YQXE4YA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "CZQX"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "EIN960 RCL RECEIVED\nRCL RECEIVED BY CZQX\nEND OF MESSAGE133A"
      }
    ]);
  });

  test("decodes #34: /GVADCYA.FS1/FSM 0524 260423 LSZH THY5SY RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVADCYA.FS1/FSM 0524 260423 \r\nLSZH\r\nTHY5SY RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY\r\nB81B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #35: /GVACLXA.FS1/FSM 0524 260423 LSZH AUA148 RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0524 260423 \r\nLSZH\r\nAUA148 RCD RECEIVED\r\nREQUEST BEING PROCESSED\r\nSTANDBY\r\n8209\r\n",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #36: /GVADCYA.FS1/FSM 0525 260423 LSZH THY5SY CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVADCYA.FS1/FSM 0525 260423 LSZH\r\nTHY5SY CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\nEC47",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVADCYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0525"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "THY5SY CDA RECEIVED\nCLEARANCE CONFIRMED\nEC47"
      }
    ]);
  });

  test("decodes #37: /GVACLXA.FS1/FSM 0525 260423 LSZH AUA148 CDA RECEIVED CLEARA…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/GVACLXA.FS1/FSM 0525 260423 LSZH\r\nAUA148 CDA RECEIVED\r\nCLEARANCE CONFIRMED\r\n\r\nC755\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "GVACLXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0525"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "LSZH"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "AUA148 CDA RECEIVED\nCLEARANCE CONFIRMED\nC755"
      }
    ]);
  });

  test("decodes #38: /RECCBYA.FS1/FSM 0524 260423 SBRF TAM3715 RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0524 260423 SBRF\n\tTAM3715 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tCC96",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nCC96"
      }
    ]);
  });

  test("decodes #39: /RECCBYA.FS1/FSM 0524 260423 SBRF TAM3715 RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0524 260423 SBRF\n\tTAM3715 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tCC96",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nCC96"
      }
    ]);
  });

  test("decodes #40: /RECCBYA.FS1/FSM 0524 260423 SBRF TAM3715 RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0524 260423 SBRF\n\tTAM3715 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tCC96",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nCC96"
      }
    ]);
  });

  test("decodes #41: /RECCBYA.FS1/FSM 0524 260423 SBRF TAM3715 RCD RECEIVED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0524 260423 SBRF\n\tTAM3715 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tCC96",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0524"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nCC96"
      }
    ]);
  });

  test("decodes #42: /BKKDCXA.FS1/FSM 0526 260423 VTBS EVA067 RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/BKKDCXA.FS1/FSM 0526 260423 VTBS\n\tEVA067 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tD115",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "BKKDCXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0526"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "VTBS"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "EVA067 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nD115"
      }
    ]);
  });

  test("decodes #43: /BKKDCXA.FS1/FSM 0526 260423 VTBS EVA067 RCD RECEIVED REQUES…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/BKKDCXA.FS1/FSM 0526 260423 VTBS\n\tEVA067 RCD RECEIVED\n\tREQUEST BEING PROCESSED\n\tSTANDBY\n\tD115",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "BKKDCXA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0526"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "VTBS"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "EVA067 RCD RECEIVED\nREQUEST BEING PROCESSED\nSTANDBY\nD115"
      }
    ]);
  });

  test("decodes #44: /RECCBYA.FS1/FSM 0525 260423 SBRF TAM3715 RCD REJECTED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0525 260423 SBRF\n\tTAM3715 RCD REJECTED\n\tREQUEST ALREADY RECEIVED\n\tSTANDBY\n\t21F5",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0525"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD REJECTED\nREQUEST ALREADY RECEIVED\nSTANDBY\n21F5"
      }
    ]);
  });

  test("decodes #45: /RECCBYA.FS1/FSM 0525 260423 SBRF TAM3715 RCD REJECTED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0525 260423 SBRF\n\tTAM3715 RCD REJECTED\n\tREQUEST ALREADY RECEIVED\n\tSTANDBY\n\t21F5",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0525"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD REJECTED\nREQUEST ALREADY RECEIVED\nSTANDBY\n21F5"
      }
    ]);
  });

  test("decodes #46: /RECCBYA.FS1/FSM 0525 260423 SBRF TAM3715 RCD REJECTED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0525 260423 SBRF\n\tTAM3715 RCD REJECTED\n\tREQUEST ALREADY RECEIVED\n\tSTANDBY\n\t21F5",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0525"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD REJECTED\nREQUEST ALREADY RECEIVED\nSTANDBY\n21F5"
      }
    ]);
  });

  test("decodes #47: /RECCBYA.FS1/FSM 0525 260423 SBRF TAM3715 RCD REJECTED REQUE…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0525 260423 SBRF\n\tTAM3715 RCD REJECTED\n\tREQUEST ALREADY RECEIVED\n\tSTANDBY\n\t21F5",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0525"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 RCD REJECTED\nREQUEST ALREADY RECEIVED\nSTANDBY\n21F5"
      }
    ]);
  });

  test("decodes #48: /RECCBYA.FS1/FSM 0527 260423 SBRF TAM3715 CDA RECEIVED CLEAR…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0527 260423 SBRF\n\tTAM3715 CDA RECEIVED\n\tCLEARANCE CONFIRMED\n\t\n\t903E",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0527"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 CDA RECEIVED\nCLEARANCE CONFIRMED\n903E"
      }
    ]);
  });

  test("decodes #49: /RECCBYA.FS1/FSM 0527 260423 SBRF TAM3715 CDA RECEIVED CLEAR…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0527 260423 SBRF\n\tTAM3715 CDA RECEIVED\n\tCLEARANCE CONFIRMED\n\t\n\t903E",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0527"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 CDA RECEIVED\nCLEARANCE CONFIRMED\n903E"
      }
    ]);
  });

  test("decodes #50: /RECCBYA.FS1/FSM 0527 260423 SBRF TAM3715 CDA RECEIVED CLEAR…", () => {
    const r = plugin.decode({
      label: "A4",
      text: "/RECCBYA.FS1/FSM 0527 260423 SBRF\n\tTAM3715 CDA RECEIVED\n\tCLEARANCE CONFIRMED\n\t\n\t903E",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-a4-fsm");
    expect(r.formatted.description).toBe("ACARS Form-1 FSM / ATC Acknowledgement");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "ACARS Form-1 FSM / ATC Acknowledgement"
      },
      {
        "type": "ground_address",
        "code": "GNDADDR",
        "label": "Ground ATS Facility",
        "value": "RECCBYA"
      },
      {
        "type": "service_qualifier",
        "code": "SVCQUAL",
        "label": "Service Qualifier",
        "value": "FS1"
      },
      {
        "type": "sublabel",
        "code": "SUBLBL",
        "label": "Sub-Label",
        "value": "FSM"
      },
      {
        "type": "sequence_number",
        "code": "SEQ",
        "label": "Sequence Number",
        "value": "0527"
      },
      {
        "type": "date",
        "code": "DATE",
        "label": "Date",
        "value": "2023-04-26"
      },
      {
        "type": "icao",
        "code": "ICAO",
        "label": "Airport ICAO",
        "value": "SBRF"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TAM3715 CDA RECEIVED\nCLEARANCE CONFIRMED\n903E"
      }
    ]);
  });

});
