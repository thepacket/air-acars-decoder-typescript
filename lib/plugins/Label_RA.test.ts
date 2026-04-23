import { MessageDecoder } from '../MessageDecoder';
import { Label_RA } from './Label_RA';

describe('Label_RA', () => {
  let plugin: Label_RA;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_RA(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-ra");
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["RA"]);
  });

  test('reports own plugin name on empty text', () => {
    const r = plugin.decode({ label: "RA", text: '' });
    expect(r.decoder.name).toBe("label-ra");
  });

  test("decodes #1: RECEIVED ON 23 AT 0446UTC PRE-DEPARTURE ATC CLEARANCE WJA378…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "RECEIVED ON 23 AT 0446UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA378  DEPART YYC AT 0530Z FL 330\r\nM/B737/W TRANSPONDER 1765\r\n\r\nROUTE: \r\nLOMLO Q979 IMOTA MAVOB MAVOB7\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDES",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "RECEIVED ON 23 AT 0446UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA378  DEPART YYC AT 0530Z FL 330\r\nM/B737/W TRANSPONDER 1765\r\n\r\nROUTE: \r\nLOMLO Q979 IMOTA MAVOB MAVOB7\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDES"
      }
    ]);
  });

  test("decodes #2: RECEIVED ON 23 AT 0446UTC PRE-DEPARTURE ATC CLEARANCE WJA378…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "RECEIVED ON 23 AT 0446UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA378  DEPART YYC AT 0530Z FL 330\r\nM/B737/W TRANSPONDER 1765\r\n\r\nROUTE: \r\nLOMLO Q979 IMOTA MAVOB MAVOB7\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDESTINATION CYXE\r\nCONTACT CLEARANCE DELIVERY WITH\r\nIDENTIFIER - 990J\r\n\r\nPDC RECEIVED ON 23 AT 0446Z\r\n\r",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "RECEIVED ON 23 AT 0446UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA378  DEPART YYC AT 0530Z FL 330\r\nM/B737/W TRANSPONDER 1765\r\n\r\nROUTE: \r\nLOMLO Q979 IMOTA MAVOB MAVOB7\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDESTINATION CYXE\r\nCONTACT CLEARANCE DELIVERY WITH\r\nIDENTIFIER - 990J\r\n\r\nPDC RECEIVED ON 23 AT 0446Z\r\n\r"
      }
    ]);
  });

  test("decodes #3: TINATION CYXE CONTACT CLEARANCE DELIVERY WITH IDENTIFIER - 9…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "TINATION CYXE\r\nCONTACT CLEARANCE DELIVERY WITH\r\nIDENTIFIER - 990J\r\n\r\nPDC RECEIVED ON 23 AT 0446Z\r\n\r",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "TINATION CYXE\r\nCONTACT CLEARANCE DELIVERY WITH\r\nIDENTIFIER - 990J\r\n\r\nPDC RECEIVED ON 23 AT 0446Z\r\n\r"
      }
    ]);
  });

  test("decodes #4: QUANPOVQY~1WXR01 WEATHER UPLINK ++++++++++ VHHH/HKG HONG KON…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUANPOVQY~1WXR01\n\tWEATHER UPLINK\n\t++++++++++ \n\tVHHH/HKG  HONG KONG INTL\n\tSP  230449 33018KT 9999 FEW008 SCT015 23\n\t/20 Q1009 TEMPO 33022G32KT;\n\tFC  NIL\n\tFT  230200 2303/2409 20010KT 9999 FEW015\n\t SCT030 TX28/2306Z TN21/2322Z TEMPO\n\t2305/2309 33020G30KT 2000 TSRA SHRA FEW0\n\t08CB SCT015 BECMG\n\t2306/2308 01010KT TEMPO 2318/2324 4000 S\n\tHRA FEW010CB SCT015 PROB30\n\tTEMPO 2400/2406 VRB15G25KT 2000 TSRA SHR\n\tA FEW008CB SCT015;",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUANPOVQY~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WXR01\n\tWEATHER UPLINK\n\t++++++++++ \n\tVHHH/HKG  HONG KONG INTL\n\tSP  230449 33018KT 9999 FEW008 SCT015 23\n\t/20 Q1009 TEMPO 33022G32KT;\n\tFC  NIL\n\tFT  230200 2303/2409 20010KT 9999 FEW015\n\t SCT030 TX28/2306Z TN21/2322Z TEMPO\n\t2305/2309 33020G30KT 2000 TSRA SHRA FEW0\n\t08CB SCT015 BECMG\n\t2306/2308 01010KT TEMPO 2318/2324 4000 S\n\tHRA FEW010CB SCT015 PROB30\n\tTEMPO 2400/2406 VRB15G25KT 2000 TSRA SHR\n\tA FEW008CB SCT015;"
      }
    ]);
  });

  test("decodes #5: RECEIVED ON 23 AT 0451UTC PRE-DEPARTURE ATC CLEARANCE WJA479…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "RECEIVED ON 23 AT 0451UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA479  DEPART YYC AT 0535Z FL 380\r\nM/B737/W TRANSPONDER 2112\r\n\r\nROUTE: \r\nBOTAG Q894 BINVO SENSA HOPE5\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDEST",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "RECEIVED ON 23 AT 0451UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA479  DEPART YYC AT 0535Z FL 380\r\nM/B737/W TRANSPONDER 2112\r\n\r\nROUTE: \r\nBOTAG Q894 BINVO SENSA HOPE5\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDEST"
      }
    ]);
  });

  test("decodes #6: PDC 230455 JST476 A320 YMML 0540 CLEARED TO YWLM VIA DOSEL T…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "\r\nPDC 230455\r\nJST476 A320 YMML 0540\r\nCLEARED TO YWLM VIA\r\nDOSEL TWO DEP: DOSEL2\r\nROUTE:DOSEL Y59 TESAT H252 EKIPU DCT\r\nCLIMB VIA SID TO: 5000\r\nDEP FREQ: 118.900\r\nSQUAWK 1413\r\n\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "\r\nPDC 230455\r\nJST476 A320 YMML 0540\r\nCLEARED TO YWLM VIA\r\nDOSEL TWO DEP: DOSEL2\r\nROUTE:DOSEL Y59 TESAT H252 EKIPU DCT\r\nCLIMB VIA SID TO: 5000\r\nDEP FREQ: 118.900\r\nSQUAWK 1413\r\n\r\n"
      }
    ]);
  });

  test("decodes #7: WS 131 YYC-YVR YVR GATE B15/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 131 YYC-YVR\r\nYVR GATE B15/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 131 YYC-YVR\r\nYVR GATE B15/OPS"
      }
    ]);
  });

  test("decodes #8: WS 131 YYC-YVR YVR GATE B15/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 131 YYC-YVR\r\nYVR GATE B15/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 131 YYC-YVR\r\nYVR GATE B15/OPS"
      }
    ]);
  });

  test("decodes #9: WS 131 YYC-YVR YVR GATE B15/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 131 YYC-YVR\r\nYVR GATE B15/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 131 YYC-YVR\r\nYVR GATE B15/OPS"
      }
    ]);
  });

  test("decodes #10: WS 131 YYC-YVR YVR GATE B15/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 131 YYC-YVR\r\nYVR GATE B15/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 131 YYC-YVR\r\nYVR GATE B15/OPS"
      }
    ]);
  });

  test("decodes #11: WS 131 YYC-YVR YVR GATE B15/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 131 YYC-YVR\r\nYVR GATE B15/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 131 YYC-YVR\r\nYVR GATE B15/OPS"
      }
    ]);
  });

  test("decodes #12: MSG FROM GND UID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO01 FOR QR1303/23APR DOH-CAI IS SUCCESSFUL.\n\tAK000915",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO01 FOR QR1303/23APR DOH-CAI IS SUCCESSFUL.\n\tAK000915"
      }
    ]);
  });

  test("decodes #13: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0427 (EGXW - EGXW) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

  test("decodes #14: QUTYOAONH~1DIS01230456 AIRPORT REPORT REQ UPLINK 04:56/23Z R…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTYOAONH~1DIS01230456\n\tAIRPORT REPORT\n\tREQ UPLINK  04:56/23Z\n\t\n\tRJTT OBS 0445/23Z SR1958Z/SS0921Z\n\tUSING RWY :\n\tT/O 05  \n\tT/O 34R \n\tL/D 34L ILS Z\n\tL/D 34R ILS Z\n\t1.RWY COND : WET\n\t2.FNL COND : SMTH\n\t3.SFC WIND : 050/08-12KT (34L)\n\t             030/06-07KT (34R)\n\t             020/09-10KT (05)\n\t4.ATC COND : SHORT CUT\n\t5.SPOT INFO: L2 PBB INOP (L1 ONLY)\n\t               #66        : B787\n\t             VDGS N/A,FLW MARSHALLER\n\t               #49,#67    : ALL ACFT\n\t               #48        : EXC A3 N B\n\t---ARR COND---------------------------\n\tN :FM F340: A125-115 LP       (0430Z/B7\n\tW :FM F390: F310-270 LM-L\n\t            A090-050 L        (0310Z/B3\n\tSW:FM F330: B080-050 L        (0140Z/A3\n\t---DEP COND---------------------------\n\tN :TO F350: B050-A100 CB LP-MOD \n\t            A100-T350 INC LM-L(0300Z/B3\n\tW :TO F280: F240-280 LM INC   (0440Z/A3\n\tSW:TO F400: A060-090 LM-L\n\t            F240-260 LM-L\n\t            F380 NTP LM       (0435Z/B8\n\t\n\tPART 01 CONT.",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTYOAONH~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230456\n\tAIRPORT REPORT\n\tREQ UPLINK  04:56/23Z\n\t\n\tRJTT OBS 0445/23Z SR1958Z/SS0921Z\n\tUSING RWY :\n\tT/O 05  \n\tT/O 34R \n\tL/D 34L ILS Z\n\tL/D 34R ILS Z\n\t1.RWY COND : WET\n\t2.FNL COND : SMTH\n\t3.SFC WIND : 050/08-12KT (34L)\n\t             030/06-07KT (34R)\n\t             020/09-10KT (05)\n\t4.ATC COND : SHORT CUT\n\t5.SPOT INFO: L2 PBB INOP (L1 ONLY)\n\t               #66        : B787\n\t             VDGS N/A,FLW MARSHALLER\n\t               #49,#67    : ALL ACFT\n\t               #48        : EXC A3 N B\n\t---ARR COND---------------------------\n\tN :FM F340: A125-115 LP       (0430Z/B7\n\tW :FM F390: F310-270 LM-L\n\t            A090-050 L        (0310Z/B3\n\tSW:FM F330: B080-050 L        (0140Z/A3\n\t---DEP COND---------------------------\n\tN :TO F350: B050-A100 CB LP-MOD \n\t            A100-T350 INC LM-L(0300Z/B3\n\tW :TO F280: F240-280 LM INC   (0440Z/A3\n\tSW:TO F400: A060-090 LM-L\n\t            F240-260 LM-L\n\t            F380 NTP LM       (0435Z/B8\n\t\n\tPART 01 CONT."
      }
    ]);
  });

  test("decodes #15: QUTYOAONH~1DIS01230456 AIRPORT REPORT REQ UPLINK 04:56/23Z R…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTYOAONH~1DIS01230456\n\tAIRPORT REPORT\n\tREQ UPLINK  04:56/23Z\n\t\n\tRJTT OBS 0445/23Z SR1958Z/SS0921Z\n\tUSING RWY :\n\tT/O 05  \n\tT/O 34R \n\tL/D 34L ILS Z\n\tL/D 34R ILS Z\n\t1.RWY COND : WET\n\t2.FNL COND : SMTH\n\t3.SFC WIND : 050/08-12KT (34L)\n\t             030/06-07KT (34R)\n\t             020/09-10KT (05)\n\t4.ATC COND : SHORT CUT\n\t5.SPOT INFO: L2 PBB INOP (L1 ONLY)\n\t               #66        : B787\n\t             VDGS N/A,FLW MARSHALLER\n\t               #49,#67    : ALL ACFT\n\t               #48        : EXC A3 N B\n\t---ARR COND---------------------------\n\tN :FM F340: A125-115 LP       (0430Z/B7\n\tW :FM F390: F310-270 LM-L\n\t            A090-050 L        (0310Z/B3\n\tSW:FM F330: B080-050 L        (0140Z/A3\n\t---DEP COND---------------------------\n\tN :TO F350: B050-A100 CB LP-MOD \n\t            A100-T350 INC LM-L(0300Z/B3\n\tW :TO F280: F240-280 LM INC   (0440Z/A3\n\tSW:TO F400: A060-090 LM-L\n\t            F240-260 LM-L\n\t            F380 NTP LM       (0435Z/B8\n\t\n\tPART 01 CONT.",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTYOAONH~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230456\n\tAIRPORT REPORT\n\tREQ UPLINK  04:56/23Z\n\t\n\tRJTT OBS 0445/23Z SR1958Z/SS0921Z\n\tUSING RWY :\n\tT/O 05  \n\tT/O 34R \n\tL/D 34L ILS Z\n\tL/D 34R ILS Z\n\t1.RWY COND : WET\n\t2.FNL COND : SMTH\n\t3.SFC WIND : 050/08-12KT (34L)\n\t             030/06-07KT (34R)\n\t             020/09-10KT (05)\n\t4.ATC COND : SHORT CUT\n\t5.SPOT INFO: L2 PBB INOP (L1 ONLY)\n\t               #66        : B787\n\t             VDGS N/A,FLW MARSHALLER\n\t               #49,#67    : ALL ACFT\n\t               #48        : EXC A3 N B\n\t---ARR COND---------------------------\n\tN :FM F340: A125-115 LP       (0430Z/B7\n\tW :FM F390: F310-270 LM-L\n\t            A090-050 L        (0310Z/B3\n\tSW:FM F330: B080-050 L        (0140Z/A3\n\t---DEP COND---------------------------\n\tN :TO F350: B050-A100 CB LP-MOD \n\t            A100-T350 INC LM-L(0300Z/B3\n\tW :TO F280: F240-280 LM INC   (0440Z/A3\n\tSW:TO F400: A060-090 LM-L\n\t            F240-260 LM-L\n\t            F380 NTP LM       (0435Z/B8\n\t\n\tPART 01 CONT."
      }
    ]);
  });

  test("decodes #16: ACKK YYC AWARE - OPS TAB", () => {
    const r = plugin.decode({
      label: "RA",
      text: "ACKK YYC AWARE\r\n- OPS TAB",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "ACKK YYC AWARE\r\n- OPS TAB"
      }
    ]);
  });

  test("decodes #17: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0715 (RPLC - RPVP) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0715 (RPLC - RPVP) FOR TAIL A97440 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0715 (RPLC - RPVP) FOR TAIL A97440 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

  test("decodes #18: CREW MESSAGE DOWNLINK ACK", () => {
    const r = plugin.decode({
      label: "RA",
      text: "CREW MESSAGE\r\nDOWNLINK ACK \r\n\r\n\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "CREW MESSAGE\r\nDOWNLINK ACK \r\n\r\n\r\n"
      }
    ]);
  });

  test("decodes #19: QUARINCXA~1PDC UNAVAIL EFHK DOES NOT SUPPORT PDC OR DCL 623 …", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1PDC UNAVAIL\r\nEFHK DOES NOT SUPPORT PDC OR DCL 623\nREQUEST CLEARANCE VIA VOICE\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "PDC UNAVAIL\r\nEFHK DOES NOT SUPPORT PDC OR DCL 623\nREQUEST CLEARANCE VIA VOICE\r\n"
      }
    ]);
  });

  test("decodes #20: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0427 (EGXW - EGXW) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

  test("decodes #21: QUTYOOANH~1DIS01230457 OPERATION MSG FOR NH855 CREW WE GOT Y…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTYOOANH~1DIS01230457\n\tOPERATION MSG\n\tFOR NH855 CREW\n\t\n\tWE GOT YR MSG.\n\t\n\tTKS YR RPT,OMC,S.OTAKE",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTYOOANH~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230457\n\tOPERATION MSG\n\tFOR NH855 CREW\n\t\n\tWE GOT YR MSG.\n\t\n\tTKS YR RPT,OMC,S.OTAKE"
      }
    ]);
  });

  test("decodes #22: QUTYOOANH~1DIS01230457 OPERATION MSG FOR NH855 CREW WE GOT Y…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTYOOANH~1DIS01230457\n\tOPERATION MSG\n\tFOR NH855 CREW\n\t\n\tWE GOT YR MSG.\n\t\n\tTKS YR RPT,OMC,S.OTAKE",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTYOOANH~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230457\n\tOPERATION MSG\n\tFOR NH855 CREW\n\t\n\tWE GOT YR MSG.\n\t\n\tTKS YR RPT,OMC,S.OTAKE"
      }
    ]);
  });

  test("decodes #23: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0715 (RPLC - RPVP) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0715 (RPLC - RPVP) FOR TAIL A97440 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0715 (RPLC - RPVP) FOR TAIL A97440 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

  test("decodes #24: QUTYOAONH~1DIS01230456 ENROUTE SUMMARY REQ UPLINK 04:56/23Z …", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTYOAONH~1DIS01230456\n\tENROUTE SUMMARY\n\tREQ UPLINK  04:56/23Z\n\t\n\tSUMMARIZED ENRT REPORT\n\tERSC OBS 0430/23Z SR++++Z/SS++++Z\n\tENRT WX/SOUTH COAST          0130-0430Z\n\tALT HKC  -  SUC  -  KEC  - KOHWA -  XAC\n\t410 .   S   S   .   LM3 S   S   L8C .  \n\t390 S   S   S   S   S   S   S   S   .  \n\t370 S   S   S   S   LM8 S   S   S   .  \n\t350 S   S   S   LM7CS   S   L6C S   .  \n\t330 L3C S   S   S   LM3CLM7 LM7 S   S  \n\t310 S   S   S   S   LM3CLM3CLM3TLM3T.  \n\t290 .   .   .   S   S   S   LM6CS   S  \n\t270 .   S   S   LP3C.   LP3CS   LMX L8 \n\t250 .   S   LM3 .   LP3CLP3C.   LM7C.  \n\t230 S   S   .   .   .   LP3C.   LM7C.  \n\t210 .   S   S   .   .   .   .   LM7C.  \n\t190 .   S   L3  .   .   .   .   LM7C.  \n\tRMKS:\n\t\n\t\n\tPART 02 END",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTYOAONH~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230456\n\tENROUTE SUMMARY\n\tREQ UPLINK  04:56/23Z\n\t\n\tSUMMARIZED ENRT REPORT\n\tERSC OBS 0430/23Z SR++++Z/SS++++Z\n\tENRT WX/SOUTH COAST          0130-0430Z\n\tALT HKC  -  SUC  -  KEC  - KOHWA -  XAC\n\t410 .   S   S   .   LM3 S   S   L8C .  \n\t390 S   S   S   S   S   S   S   S   .  \n\t370 S   S   S   S   LM8 S   S   S   .  \n\t350 S   S   S   LM7CS   S   L6C S   .  \n\t330 L3C S   S   S   LM3CLM7 LM7 S   S  \n\t310 S   S   S   S   LM3CLM3CLM3TLM3T.  \n\t290 .   .   .   S   S   S   LM6CS   S  \n\t270 .   S   S   LP3C.   LP3CS   LMX L8 \n\t250 .   S   LM3 .   LP3CLP3C.   LM7C.  \n\t230 S   S   .   .   .   LP3C.   LM7C.  \n\t210 .   S   S   .   .   .   .   LM7C.  \n\t190 .   S   L3  .   .   .   .   LM7C.  \n\tRMKS:\n\t\n\t\n\tPART 02 END"
      }
    ]);
  });

  test("decodes #25: QUTYOAONH~1DIS01230456 ENROUTE SUMMARY REQ UPLINK 04:56/23Z …", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTYOAONH~1DIS01230456\n\tENROUTE SUMMARY\n\tREQ UPLINK  04:56/23Z\n\t\n\tSUMMARIZED ENRT REPORT\n\tERSC OBS 0430/23Z SR++++Z/SS++++Z\n\tENRT WX/SOUTH COAST          0130-0430Z\n\tALT HKC  -  SUC  -  KEC  - KOHWA -  XAC\n\t410 .   S   S   .   LM3 S   S   L8C .  \n\t390 S   S   S   S   S   S   S   S   .  \n\t370 S   S   S   S   LM8 S   S   S   .  \n\t350 S   S   S   LM7CS   S   L6C S   .  \n\t330 L3C S   S   S   LM3CLM7 LM7 S   S  \n\t310 S   S   S   S   LM3CLM3CLM3TLM3T.  \n\t290 .   .   .   S   S   S   LM6CS   S  \n\t270 .   S   S   LP3C.   LP3CS   LMX L8 \n\t250 .   S   LM3 .   LP3CLP3C.   LM7C.  \n\t230 S   S   .   .   .   LP3C.   LM7C.  \n\t210 .   S   S   .   .   .   .   LM7C.  \n\t190 .   S   L3  .   .   .   .   LM7C.  \n\tRMKS:\n\t\n\t\n\tPART 02 END",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTYOAONH~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230456\n\tENROUTE SUMMARY\n\tREQ UPLINK  04:56/23Z\n\t\n\tSUMMARIZED ENRT REPORT\n\tERSC OBS 0430/23Z SR++++Z/SS++++Z\n\tENRT WX/SOUTH COAST          0130-0430Z\n\tALT HKC  -  SUC  -  KEC  - KOHWA -  XAC\n\t410 .   S   S   .   LM3 S   S   L8C .  \n\t390 S   S   S   S   S   S   S   S   .  \n\t370 S   S   S   S   LM8 S   S   S   .  \n\t350 S   S   S   LM7CS   S   L6C S   .  \n\t330 L3C S   S   S   LM3CLM7 LM7 S   S  \n\t310 S   S   S   S   LM3CLM3CLM3TLM3T.  \n\t290 .   .   .   S   S   S   LM6CS   S  \n\t270 .   S   S   LP3C.   LP3CS   LMX L8 \n\t250 .   S   LM3 .   LP3CLP3C.   LM7C.  \n\t230 S   S   .   .   .   LP3C.   LM7C.  \n\t210 .   S   S   .   .   .   .   LM7C.  \n\t190 .   S   L3  .   .   .   .   LM7C.  \n\tRMKS:\n\t\n\t\n\tPART 02 END"
      }
    ]);
  });

  test("decodes #26: WS 337 YEG-YVR YVR GATE B13/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 337 YEG-YVR\r\nYVR GATE B13/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 337 YEG-YVR\r\nYVR GATE B13/OPS"
      }
    ]);
  });

  test("decodes #27: WS 337 YEG-YVR YVR GATE B13/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 337 YEG-YVR\r\nYVR GATE B13/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 337 YEG-YVR\r\nYVR GATE B13/OPS"
      }
    ]);
  });

  test("decodes #28: WS 337 YEG-YVR YVR GATE B13/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 337 YEG-YVR\r\nYVR GATE B13/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 337 YEG-YVR\r\nYVR GATE B13/OPS"
      }
    ]);
  });

  test("decodes #29: WS 337 YEG-YVR YVR GATE B13/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 337 YEG-YVR\r\nYVR GATE B13/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 337 YEG-YVR\r\nYVR GATE B13/OPS"
      }
    ]);
  });

  test("decodes #30: WS 337 YEG-YVR YVR GATE B13/OPS", () => {
    const r = plugin.decode({
      label: "RA",
      text: "WS 337 YEG-YVR\r\nYVR GATE B13/OPS",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "WS 337 YEG-YVR\r\nYVR GATE B13/OPS"
      }
    ]);
  });

  test("decodes #31: QUNDCULUA~1RELEASE VERIFY MRD NO", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUNDCULUA~1RELEASE VERIFY  \r\nMRD NO",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUNDCULUA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "RELEASE VERIFY  \r\nMRD NO"
      }
    ]);
  });

  test("decodes #32: MSG FROM GND UID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000990",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000990"
      }
    ]);
  });

  test("decodes #33: MSG FROM GND UID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000990",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000990"
      }
    ]);
  });

  test("decodes #34: QUNDCULUA~1DISPATCH RELEASE UA383/22 PHNL KDEN SENT: 04:57:3…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUNDCULUA~1DISPATCH RELEASE\r\nUA383/22 PHNL KDEN\r\nSENT: 04:57:30Z\r\n\r\nDISPATCH RELEASE\r\n \r\nUAL383(383) - 22APR26\r\nPHNL/HNL     KDEN/DEN\r\n \r\nN773UA/2473 B772\r\n-----------------------\r\nRLS 1\r\n \r\nFFD AFFIRMATION:\r\nPO EMP NAME",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUNDCULUA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DISPATCH RELEASE\r\nUA383/22 PHNL KDEN\r\nSENT: 04:57:30Z\r\n\r\nDISPATCH RELEASE\r\n \r\nUAL383(383) - 22APR26\r\nPHNL/HNL     KDEN/DEN\r\n \r\nN773UA/2473 B772\r\n-----------------------\r\nRLS 1\r\n \r\nFFD AFFIRMATION:\r\nPO EMP NAME"
      }
    ]);
  });

  test("decodes #35: HI SIR, MU6682 CKG/PKX, PARK BAY 165.FOR REFERENCE ONLY.", () => {
    const r = plugin.decode({
      label: "RA",
      text: "HI SIR, MU6682 CKG/PKX, PARK BAY 165.FOR REFERENCE ONLY.",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "HI SIR, MU6682 CKG/PKX, PARK BAY 165.FOR REFERENCE ONLY."
      }
    ]);
  });

  test("decodes #36: HI SIR, MU6682 CKG/PKX, PARK BAY 165.FOR REFERENCE ONLY.", () => {
    const r = plugin.decode({
      label: "RA",
      text: "HI SIR, MU6682 CKG/PKX, PARK BAY 165.FOR REFERENCE ONLY.",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "HI SIR, MU6682 CKG/PKX, PARK BAY 165.FOR REFERENCE ONLY."
      }
    ]);
  });

  test("decodes #37: RECEIVED ON 23 AT 0456UTC PRE-DEPARTURE ATC CLEARANCE WJA176…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "RECEIVED ON 23 AT 0456UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA176  DEPART YYC AT 0540Z FL 230\r\nM/B738/W TRANSPONDER 4252\r\n\r\nROUTE: \r\nBITGA Q995 OILRS OILRS2\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDESTINATI",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "RECEIVED ON 23 AT 0456UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA176  DEPART YYC AT 0540Z FL 230\r\nM/B738/W TRANSPONDER 4252\r\n\r\nROUTE: \r\nBITGA Q995 OILRS OILRS2\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDESTINATI"
      }
    ]);
  });

  test("decodes #38: RECEIVED ON 23 AT 0456UTC PRE-DEPARTURE ATC CLEARANCE WJA176…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "RECEIVED ON 23 AT 0456UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA176  DEPART YYC AT 0540Z FL 230\r\nM/B738/W TRANSPONDER 4252\r\n\r\nROUTE: \r\nBITGA Q995 OILRS OILRS2\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDESTINATION CYEG\r\nCONTACT CLEARANCE DELIVERY WITH\r\nIDENTIFIER - 990X\r\n\r\nPDC RECEIVED ON 23 AT 0456Z\r\n\r",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "RECEIVED ON 23 AT 0456UTC\r\nPRE-DEPARTURE ATC CLEARANCE\r\nWJA176  DEPART YYC AT 0540Z FL 230\r\nM/B738/W TRANSPONDER 4252\r\n\r\nROUTE: \r\nBITGA Q995 OILRS OILRS2\r\n \r\n \r\n\r\nREMARKS:\r\nUSE SID STAMP2\r\nDEPARTURE RUNWAY 35R\r\nDESTINATION CYEG\r\nCONTACT CLEARANCE DELIVERY WITH\r\nIDENTIFIER - 990X\r\n\r\nPDC RECEIVED ON 23 AT 0456Z\r\n\r"
      }
    ]);
  });

  test("decodes #39: QUTAOUOSC~10000 CURRENT FLIGHT: SC8808 ARR:ZSJN GATE:9 BRIDG…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTAOUOSC~10000\n\tCURRENT FLIGHT:\n\tSC8808 ARR:ZSJN\n\tGATE:9 BRIDGE EQUIP IS UNAVAILABLE, BECAUSE OF WEATHER\n\tWEATHER:\n\tMETAR ZSJN 230400Z 28002MPS 230V330 9999 FEW033 21/13 Q1013 NOSIG=\n\tNEXT FLIGHT:\n\tSC8808 ARR:ZYTL",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTAOUOSC~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "0000\n\tCURRENT FLIGHT:\n\tSC8808 ARR:ZSJN\n\tGATE:9 BRIDGE EQUIP IS UNAVAILABLE, BECAUSE OF WEATHER\n\tWEATHER:\n\tMETAR ZSJN 230400Z 28002MPS 230V330 9999 FEW033 21/13 Q1013 NOSIG=\n\tNEXT FLIGHT:\n\tSC8808 ARR:ZYTL"
      }
    ]);
  });

  test("decodes #40: QUTAOUOSC~10000 CURRENT FLIGHT: SC8808 ARR:ZSJN GATE:9 BRIDG…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUTAOUOSC~10000\n\tCURRENT FLIGHT:\n\tSC8808 ARR:ZSJN\n\tGATE:9 BRIDGE EQUIP IS UNAVAILABLE, BECAUSE OF WEATHER\n\tWEATHER:\n\tMETAR ZSJN 230400Z 28002MPS 230V330 9999 FEW033 21/13 Q1013 NOSIG=\n\tNEXT FLIGHT:\n\tSC8808 ARR:ZYTL",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUTAOUOSC~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "0000\n\tCURRENT FLIGHT:\n\tSC8808 ARR:ZSJN\n\tGATE:9 BRIDGE EQUIP IS UNAVAILABLE, BECAUSE OF WEATHER\n\tWEATHER:\n\tMETAR ZSJN 230400Z 28002MPS 230V330 9999 FEW033 21/13 Q1013 NOSIG=\n\tNEXT FLIGHT:\n\tSC8808 ARR:ZYTL"
      }
    ]);
  });

  test("decodes #41: QUOSLASDY~1 PLEASE SEND ETA UPDATE * AUTOMATED MESSAGE * BE0…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUOSLASDY~1\r\nPLEASE SEND ETA UPDATE\r\n* AUTOMATED MESSAGE *\r\nBE00",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUOSLASDY~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "\r\nPLEASE SEND ETA UPDATE\r\n* AUTOMATED MESSAGE *\r\nBE00"
      }
    ]);
  });

  test("decodes #42: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0427 (EGXW - EGXW) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

  test("decodes #43: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0427 (EGXW - EGXW) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0427 (EGXW - EGXW) FOR TAIL ZZ666 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

  test("decodes #44: QUNDCULUA~1EPNF INFO UA0383/22 PHNL KDEN SENT: 04:57:31Z NO …", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUNDCULUA~1EPNF INFO\r\nUA0383/22 PHNL KDEN   \r\nSENT: 04:57:31Z \r\nNO DANGEROUS GOODS PLANNED  \r\n\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUNDCULUA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "EPNF INFO\r\nUA0383/22 PHNL KDEN   \r\nSENT: 04:57:31Z \r\nNO DANGEROUS GOODS PLANNED  \r\n\r\n"
      }
    ]);
  });

  test("decodes #45: QUAUHASEY~1DIS01230458 FREE TEXT MSG EY0841 TO SVO (UUEE) IS…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUAUHASEY~1DIS01230458\n\tFREE TEXT MSG\n\t\n\tEY0841 TO SVO (UUEE) IS 155 NM OFF-ROUTE.\n\tLOCATION: N5316.2, E04125.8\n\tSOURCE: ACARS\n\tTIME: 04:57Z\n\tAUTOMATICALLY SENT BY MISSION WATCH ALERT SERVICE",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUAUHASEY~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS01230458\n\tFREE TEXT MSG\n\t\n\tEY0841 TO SVO (UUEE) IS 155 NM OFF-ROUTE.\n\tLOCATION: N5316.2, E04125.8\n\tSOURCE: ACARS\n\tTIME: 04:57Z\n\tAUTOMATICALLY SENT BY MISSION WATCH ALERT SERVICE"
      }
    ]);
  });

  test("decodes #46: MSG FROM GND UID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000333",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000333"
      }
    ]);
  });

  test("decodes #47: MSG FROM GND UID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000333",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "MSG FROM GND\n\tUID VALIDATION FOR THE ACKNOWLEDGEMENT OF FINAL LOADSHEET EDNO02 FOR QR774/23APR GRU-DOH IS SUCCESSFUL.\n\tAK000333"
      }
    ]);
  });

  test("decodes #48: QUCANXMCZ~1DIS12230458 B-2027 UNNT 230430Z 19003MPS CAVOK 16…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUCANXMCZ~1DIS12230458\n\tB-2027\n\tUNNT 230430Z 19003MPS CAVOK 16/02 Q1003 R25/120065 R16///////\n\tNOSIG RMK QFE742/0989=\n\tTAF UNNT 230200Z 2303/2403 15003G08MPS 9999 BKN016CB TX20/2310Z\n\tTN04/2323Z PROB40 TEMPO 2306/2317 -TSRA BECMG 2307/2311 19008G15MPS\n\tBECMG 2313/2317 29003G09MPS=\n\tMETAR EKCH 230420Z AUTO 32006KT 300V050 9999 NCD 07/05 Q1022 NOSIG=\n\tTAF EKCH 230227Z 2303/2403 31010KT 9999 SCT006\n\tTEMPO 2303/2305 BKN006=",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUCANXMCZ~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS12230458\n\tB-2027\n\tUNNT 230430Z 19003MPS CAVOK 16/02 Q1003 R25/120065 R16///////\n\tNOSIG RMK QFE742/0989=\n\tTAF UNNT 230200Z 2303/2403 15003G08MPS 9999 BKN016CB TX20/2310Z\n\tTN04/2323Z PROB40 TEMPO 2306/2317 -TSRA BECMG 2307/2311 19008G15MPS\n\tBECMG 2313/2317 29003G09MPS=\n\tMETAR EKCH 230420Z AUTO 32006KT 300V050 9999 NCD 07/05 Q1022 NOSIG=\n\tTAF EKCH 230227Z 2303/2403 31010KT 9999 SCT006\n\tTEMPO 2303/2305 BKN006="
      }
    ]);
  });

  test("decodes #49: QUCANXMCZ~1DIS12230458 B-2027 UNNT 230430Z 19003MPS CAVOK 16…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUCANXMCZ~1DIS12230458\n\tB-2027\n\tUNNT 230430Z 19003MPS CAVOK 16/02 Q1003 R25/120065 R16///////\n\tNOSIG RMK QFE742/0989=\n\tTAF UNNT 230200Z 2303/2403 15003G08MPS 9999 BKN016CB TX20/2310Z\n\tTN04/2323Z PROB40 TEMPO 2306/2317 -TSRA BECMG 2307/2311 19008G15MPS\n\tBECMG 2313/2317 29003G09MPS=\n\tMETAR EKCH 230420Z AUTO 32006KT 300V050 9999 NCD 07/05 Q1022 NOSIG=\n\tTAF EKCH 230227Z 2303/2403 31010KT 9999 SCT006\n\tTEMPO 2303/2305 BKN006=",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUCANXMCZ~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "DIS12230458\n\tB-2027\n\tUNNT 230430Z 19003MPS CAVOK 16/02 Q1003 R25/120065 R16///////\n\tNOSIG RMK QFE742/0989=\n\tTAF UNNT 230200Z 2303/2403 15003G08MPS 9999 BKN016CB TX20/2310Z\n\tTN04/2323Z PROB40 TEMPO 2306/2317 -TSRA BECMG 2307/2311 19008G15MPS\n\tBECMG 2313/2317 29003G09MPS=\n\tMETAR EKCH 230420Z AUTO 32006KT 300V050 9999 NCD 07/05 Q1022 NOSIG=\n\tTAF EKCH 230227Z 2303/2403 31010KT 9999 SCT006\n\tTEMPO 2303/2305 BKN006="
      }
    ]);
  });

  test("decodes #50: QUARINCXA~1FPL AVAILABLE FLIGHT PLAN A0716 (RPVP - YPDN) FOR…", () => {
    const r = plugin.decode({
      label: "RA",
      text: "QUARINCXA~1FPL AVAILABLE\r\nFLIGHT PLAN A0716 (RPVP - YPDN) FOR TAIL A97440 IS AVAILABLE FOR RECALL\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-ra");
    expect(r.formatted.description).toBe("Command / Response");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Command / Response (free-text)"
      },
      {
        "type": "routing_preamble",
        "code": "RPREAM",
        "label": "Routing Preamble",
        "value": "QUARINCXA~1"
      },
      {
        "type": "free_text",
        "code": "FTEXT",
        "label": "Free Text",
        "value": "FPL AVAILABLE\r\nFLIGHT PLAN A0716 (RPVP - YPDN) FOR TAIL A97440 IS AVAILABLE FOR RECALL\r\n"
      }
    ]);
  });

});
