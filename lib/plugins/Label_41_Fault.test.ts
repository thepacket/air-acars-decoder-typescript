import { MessageDecoder } from '../MessageDecoder';
import { Label_41_Fault } from './Label_41_Fault';

describe('Label_41_Fault', () => {
  let plugin: Label_41_Fault;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_41_Fault(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-41-fault");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["41"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "41", text: '' });
    expect(decodeResult.decoder.name).toBe("label-41-fault");
  });

  test("decodes #1: /FB 0102/AD KLGA/N 37.352,W 77.082,JBU1962,SOM03,HOLDING AT …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0102/AD KLGA/N 37.352,W 77.082,JBU1962,SOM03,HOLDING AT HURTS. EFC,2320Z. FOB NOW 10.3, ATC DOESNT KNOW WHY,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "CMC Maintenance Fault Report (Label 41)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "sub_label",
      code: "SUBLBL",
      label: "Sub-Label",
      value: "/FB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:02:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "37.352 N, 77.082 W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU1962",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "report_time",
      code: "TIME",
      label: "Fault Time (UTC, HHMM)",
      value: "01:02",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "ad_destination",
      code: "ADDR",
      label: "Address (maintenance routing)",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "cmc_message_code",
      code: "MCMCODE",
      label: "CMC Message Code",
      value: "SOM03",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "fault_text",
      code: "FAULT",
      label: "Fault Description",
      value: "HOLDING AT HURTS. EFC",
    });
  });

  test("decodes #2: /FB 0102/AD KLGA/N 37.352,W 77.082,JBU1962,SOM03,HOLDING AT …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0102/AD KLGA/N 37.352,W 77.082,JBU1962,SOM03,HOLDING AT HURTS. EFC,2320Z. FOB NOW 10.3, ATC DOESNT KNOW WHY,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "CMC Maintenance Fault Report (Label 41)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "sub_label",
      code: "SUBLBL",
      label: "Sub-Label",
      value: "/FB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:02:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "37.352 N, 77.082 W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU1962",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "report_time",
      code: "TIME",
      label: "Fault Time (UTC, HHMM)",
      value: "01:02",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "ad_destination",
      code: "ADDR",
      label: "Address (maintenance routing)",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "cmc_message_code",
      code: "MCMCODE",
      label: "CMC Message Code",
      value: "SOM03",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "fault_text",
      code: "FAULT",
      label: "Fault Description",
      value: "HOLDING AT HURTS. EFC",
    });
  });

  test("decodes #3: /FB 0109/AD KLGA/N 35.439,W 78.912,JBU272,SOM03,THEY SAY HOL…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0109/AD KLGA/N 35.439,W 78.912,JBU272,SOM03,THEY SAY HOLDING FOR,LGA,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "CMC Maintenance Fault Report (Label 41)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "sub_label",
      code: "SUBLBL",
      label: "Sub-Label",
      value: "/FB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:09:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "35.439 N, 78.912 W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU272",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "report_time",
      code: "TIME",
      label: "Fault Time (UTC, HHMM)",
      value: "01:09",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "ad_destination",
      code: "ADDR",
      label: "Address (maintenance routing)",
      value: "KLGA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "cmc_message_code",
      code: "MCMCODE",
      label: "CMC Message Code",
      value: "SOM03",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "fault_text",
      code: "FAULT",
      label: "Fault Description",
      value: "THEY SAY HOLDING FOR",
    });
  });

  test("decodes #4: /FB 0091/AD KLGA/N 37.476,W 76.965,JBU1962,SOM03,THANKS. FOB…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0091/AD KLGA/N 37.476,W 76.965,JBU1962,SOM03,THANKS. FOB NOW9.1,,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #5: /FB 0091/AD KLGA/N 37.476,W 76.965,JBU1962,SOM03,THANKS. FOB…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0091/AD KLGA/N 37.476,W 76.965,JBU1962,SOM03,THANKS. FOB NOW9.1,,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: /FB 0091/AD KLGA/N 37.476,W 76.965,JBU1962,SOM03,THANKS. FOB…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0091/AD KLGA/N 37.476,W 76.965,JBU1962,SOM03,THANKS. FOB NOW9.1,,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #7: FTX01,RECEIVED ON 22 AT 2236UTC PRE-DEPARTURE ATC CLEARANCE …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,RECEIVED ON 22 AT
2236UTC
PRE-DEPARTURE ATC
CLEARANCE
WEN3399  DEPART YYC AT
2320Z FL 240
M/DH8D/R TRANSPONDER
7374

ROUTE: 
IPSIT Q810 EPLAN YQU
 
 

REMARKS:
USE SID RODEO2
DEPARTURE RUNWAY 35L
DESTINATION CYXJ
CONTACT CLEARANCE
DELIVERY WITH
IDENTIFIER - 986X

PDC RECEIVED ON 22 AT
2236Z
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #8: FTX01,RECEIVED ON 22 AT 2236UTC PRE-DEPARTURE ATC CLEARANCE …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,RECEIVED ON 22 AT
2236UTC
PRE-DEPARTURE ATC
CLEARANCE
WEN3399  DEPART YYC AT
2320Z FL 240
M/DH8D/R TRANSPONDER
7374

ROUTE: 
IPSIT Q810 EPLAN YQU
 
 

REMARKS:
USE SID RODEO2
DEPARTURE RUNWAY 35L
D`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: /FB 0097/AD KLGA/N 37.464,W 77.392,JBU1962,SOM03,IF WE NEED …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0097/AD KLGA/N 37.464,W 77.392,JBU1962,SOM03,IF WE NEED TO DIVERT,WHAT DO YOU SUGGEST,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: /FB 0097/AD KLGA/N 37.464,W 77.392,JBU1962,SOM03,IF WE NEED …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0097/AD KLGA/N 37.464,W 77.392,JBU1962,SOM03,IF WE NEED TO DIVERT,WHAT DO YOU SUGGEST,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: INR,230139 GATE:D18 CAROUSEL:1 AC TURN: NO TURN INFO NEXT 6 …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `INR,230139

GATE:D18
CAROUSEL:1
AC TURN: NO TURN INFO NEXT 6 HRS
CREW CONNECTIONS

PAX CONNECTIONS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: MSG02,230123,MESSAGE, PDC ADS121 KSFO-CYVR -ATC CLEARANCE- T…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `MSG02,230123,MESSAGE,
PDC ADS121
KSFO-CYVR
-ATC CLEARANCE-
TRUKN2 DEDHD RBL
THEN AS FILED
-FILED FLIGHT PLAN-
KSFO NIITE4 GRTFL RBL KNUTT
HRMNS PAE GRIZZ9 CYVR
-REMARKS-
CLEARED TRUKN2 DEPARTURE DEDHD TRSN
 
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: INR,230139 GATE:D18 CAROUSEL:1 AC TURN: NO TURN INFO NEXT 6 …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `INR,230139

GATE:D18
CAROUSEL:1
AC TURN: NO TURN INFO NEXT 6 HRS
CREW CONNECTIONS

PAX CONNECTIONS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: MSG02067 Cg.C:76L55x?L7 Sas?<\";caxM;iC:).;*3a?o;2;_dL?R;SE4;…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `MSG02067 Cg.C:76L55x?L7
Sas?<";caxM;iC:).;*3a?o;2;_dL?R;SE4;"xsa;Mff(<5;s5;x[xsaxoaL;SE4;4L_xaa
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: FTX01,WARNING PDC NO RECENT DATA RECEIVED ON 22 AT 2337UTC P…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,WARNING PDC NO RECENT
DATA
RECEIVED ON 22 AT
2337UTC
PRE-DEPARTURE ATC
CLEARANCE
WEN3447  DEPART YVR AT
0010Z FL 200
M/DH8D/R TRANSPONDER
0327

ROUTE: 
FASBO TRENA DAVED
 
 

REMARKS:
USE SID YVR4
DEPARTURE RUNWAY 26L
DESTINATION CYXT
CONTACT CLEARANCE
DELIVERY 121.4 WITH
IDENTIFIER 386C

PDC RECEIVED ON 22 AT
2338Z
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: MSG02067 Cg.C:76L55x?L7 Sas?<\";caxM;iC:).;*3a?o;2;_dL?R;SE4;…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `MSG02067 Cg.C:76L55x?L7
Sas?<";caxM;iC:).;*3a?o;2;_dL?R;SE4;"xsa;Mff(<5;s5;x[xsaxoaL;SE4;4L_xaa
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: NO PDC AVAILABLE", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `NO PDC AVAILABLE
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: FTX01,RECEIVED ON 23 AT 0131UTC PRE-DEPARTURE ATC CLEARANCE …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,RECEIVED ON 23 AT
0131UTC
PRE-DEPARTURE ATC
CLEARANCE
WEN3312  DEPART YYC AT
0215Z FL 170
M/DH8D/R TRANSPONDER
4567

ROUTE: 
PEVLU T759 OILRS OILRS2
 
 

REMARKS:
USE SID YYC8
DEPARTURE RUNWAY 35R
DESTINATION CYEG
CONTACT CLEARANCE
DELIVERY WITH
IDENTIFIER - 989G

PDC RECEIVED ON 23 AT
0131Z
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: FTX01,RECEIVED ON 23 AT 0131UTC PRE-DEPARTURE ATC CLEARANCE …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,RECEIVED ON 23 AT
0131UTC
PRE-DEPARTURE ATC
CLEARANCE
WEN3312  DEPART YYC AT
0215Z FL 170
M/DH8D/R TRANSPONDER
4567

ROUTE: 
PEVLU T759 OILRS OILRS2
 
 

REMARKS:
USE SID YYC8
DEPARTURE RUNWAY 35R
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: /FB 0130/AD KBOS/N 39.799,W 74.466,JBU74,MCM03,SINK IN FWD L…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0130/AD KBOS/N 39.799,W 74.466,JBU74,MCM03,SINK IN FWD LAV DRAINS,V SLOWLY,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "CMC Maintenance Fault Report (Label 41)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "sub_label",
      code: "SUBLBL",
      label: "Sub-Label",
      value: "/FB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:30:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.799 N, 74.466 W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "report_time",
      code: "TIME",
      label: "Fault Time (UTC, HHMM)",
      value: "01:30",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "ad_destination",
      code: "ADDR",
      label: "Address (maintenance routing)",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "cmc_message_code",
      code: "MCMCODE",
      label: "CMC Message Code",
      value: "MCM03",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "fault_text",
      code: "FAULT",
      label: "Fault Description",
      value: "SINK IN FWD LAV DRAINS",
    });
  });

  test("decodes #21: /FB 0130/AD KBOS/N 39.799,W 74.466,JBU74,MCM03,SINK IN FWD L…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: " /FB 0130/AD KBOS/N 39.799,W 74.466,JBU74,MCM03,SINK IN FWD LAV DRAINS,V SLOWLY,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "CMC Maintenance Fault Report (Label 41)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "sub_label",
      code: "SUBLBL",
      label: "Sub-Label",
      value: "/FB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:30:00",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.799 N, 74.466 W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JBU74",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "report_time",
      code: "TIME",
      label: "Fault Time (UTC, HHMM)",
      value: "01:30",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "ad_destination",
      code: "ADDR",
      label: "Address (maintenance routing)",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "cmc_message_code",
      code: "MCMCODE",
      label: "CMC Message Code",
      value: "MCM03",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "fault_text",
      code: "FAULT",
      label: "Fault Description",
      value: "SINK IN FWD LAV DRAINS",
    });
  });

  test("decodes #22: FTX01,SORRY I MEANT RLSE 1. AND RLSE 1 SHOULD BE THERE NOW. …", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,SORRY I MEANT RLSE 1. AND RLSE 1 SHOULD BE THERE NOW. THANKS
DXP/FI `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: RKSI/PANC/22APR26/820/---/042/-46/0134/0251/N5856.2/W16539.6…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "RKSI/PANC/22APR26/820/---/042/-46/0134/0251/N5856.2/W16539.6/32998/ 38700/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: KATL/RKSI/22APR26/831/---/042/-44/0133/0846/N5904.0/W16744.0…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "KATL/RKSI/22APR26/831/---/042/-44/0133/0846/N5904.0/W16744.0/33999/129200/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: M69AKE0054PHNL/RKSI/22APR26/1/-98/49/-44/0132/0149/N25.39/W1…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M69AKE0054PHNL/RKSI/22APR26/1/-98/49/-44/0132/0149/N25.39/W177.74/35999/96100/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: FTX01,WS 3614 YLW-YYC YYC GATE A01C/OPS", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,WS 3614 YLW-YYC
YYC GATE A01C/OPS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: MSG0300,230130,MESSAGE,PDC AVAILABLE FOR: KMDW - KTEB ETD: 0…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `MSG0300,230130,MESSAGE,PDC AVAILABLE FOR:
KMDW - KTEB
ETD: 0200Z
DATE: APR 23
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: 0,1,1,12,0,0,0,0,,0,0,0,0,0,0,,0,7,0,0,0,0,,0,10,4,0,0,0,,0,…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "0,1,1,12,0,0,0,0,,0,0,0,0,0,0,,0,7,0,0,0,0,,0,10,4,0,0,0,,0,7,0,0,0,0,,0,0521",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: RECEIVED ON 23 AT 0130UTC PRE-DEPARTURE ATC CLEARANCE JIA516…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `RECEIVED ON 23 AT
0130UTC
PRE-DEPARTURE ATC
CLEARANCE
JIA5169  DEPART PHL AT
0200Z FL 300
CRJ7/L TRANSPONDER 1172
ROUTE KPHL MXE PENSY
J110 FLIRT
BRNAN Q42 PSYKO KOZAR
BONZZ2
KDTW
CLEARED PHL4 DEPARTURE 
MAINTAIN 5000FT
EXP 300 10 MIN AFT
DP,DPFRQ 124.35

`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: RECEIVED ON 23 AT 0130UTC PRE-DEPARTURE ATC CLEARANCE JIA516…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `RECEIVED ON 23 AT
0130UTC
PRE-DEPARTURE ATC
CLEARANCE
JIA5169  DEPART PHL AT
0200Z FL 300
CRJ7/L TRANSPONDER 1172
ROUTE KPHL MXE PENSY
J110 FLIRT
BRNAN Q42 PSYKO KOZAR
BONZZ2
KDTW
CLEARED PHL4 DEPARTURE 
MAI`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: MSG0202I-0,3m3IEt|vX1eI E!MDHjP_$EKPjw~$tzbHjP$|uHbP$#wb$eqo…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `MSG0202I-0,3m3IEt|vX1eI
	E!MDHjP_$EKPjw~$tzbHjP$|uHbP$#wb$eqo1<
	ONE$k@PHb#HbH@jH$X##HjPH%$*uz.SP$1H.zw@L
	eSH$bH.zw@$5w!$KbH$H@PHbz@.$SKL$MHH@$z%H@Pz#zH%$M5$X|E|$KL$K$?wLLzMuH$K##HjPH%$bH.zw@$#wb$OuwMKu$rKCz.KPzw@Ku$EKPHuuzPH$E5LPH~L$wb$ONE$z@PHb#HbH@jH$K@%&wb$L?ww#z@.T$NwLzPzw@$L5LPH~L$~K5$MHjw~H$!@bHuzKMuH$z@$PSzL$*uz.SP$k@#wb~KPzw@$1H.zw@T$ONE$Lz.@Ku$L?ww#z@.$uHK%z@.$Pw$K$uwLL$w#$@KCz.KPzw@$jK?KMzuzP5$SKL$wjj!bbH%$z@$K@%$Kbw!@%$:KuPzjI$sH%zPHbbK@HK@I$qKzbwI$:Hzb!PI$eHu$|CzC$K@%$z@$PSH$:K.S%K%$K@%$eHSbK@$*k1LT$qw@PKjP$Et$E!??wbP$#wb$~wbH$z@#wb~KPzw@T$|L$K$bH~z@%HbI$Kuu$jbHUL$KbH$wMuz.KPH%$Pw$bH?wbP$K@5$HCH@PL$z~?KjPz@.$LK#HP5$Kjjwb%z@.$Pw$X4$1H.!uKPzw@LT`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: M04AKE0402YSSY/RKSI/22APR26/1/ /23/-50/0141/0154/S9.25/E144.…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M04AKE0402YSSY/RKSI/22APR26/1/   /23/-50/0141/0154/S9.25/E144.53/38001/84900/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 0,1,1,12,0,0,0,0,,0,9,0,0,0,0,,0,13,0,0,0,0,,0,12,0,0,1,0,,0…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "0,1,1,12,0,0,0,0,,0,9,0,0,0,0,,0,13,0,0,0,0,,0,12,0,0,1,0,,0,15,0,0,0,0,,0,396E",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: M60AKE0278CYVR/RKSI/22APR26/827/006/015/-45/0140/0810/N5700.…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M60AKE0278CYVR/RKSI/22APR26/827/006/015/-45/0140/0810/N5700.3/W17957.5/35001/120500/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: RKSI/RCMQ/22APR26/ 542/26032/ 30//0140/0154/N 24.969/E121.28…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "RKSI/RCMQ/22APR26/ 542/26032/  30//0140/0154/N 24.969/E121.284/13824/8160/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: 0,1,1,12,0,0,0,0,,0,0,0,0,0,0,,0,7,0,0,0,0,,0,10,4,0,0,0,,0,…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "0,1,1,12,0,0,0,0,,0,0,0,0,0,0,,0,7,0,0,0,0,,0,10,4,0,0,0,,0,7,0,0,0,0,,0,0521",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: MSG0201b~SlA’lb@644y26b #H*H04HyHM40y40*C0l’j~Sj~L0lA’l^ _AL…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `MSG0201b~SlA'lb@644y26b
	#H*H04HyHM40y40*C0l'j~Sj~L0lA'l^
	_AL(_n0s0F6#y\\\\0cq??L
	F6y4*_P0yGF0HFyCCG#0C\\*n0@y_y26@6_H0IM60H*0yH#04HyCCG_206_0F*MH6
	F62M\\yHG*_P0@I^~S@
	\\2H4s\\1#4
	#H*H0l'j~Sj~L0lSPE?^`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: M70AKE0054PHNL/RKSI/22APR26/1/-96/49/-46/0147/0151/N26.23/W1…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M70AKE0054PHNL/RKSI/22APR26/1/-96/49/-46/0147/0151/N26.23/W179.55/36002/92900/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: M61AKE0042KSEA/RKSI/22APR26/1/ /13/-50/0151/0153/N53.74/E169…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M61AKE0042KSEA/RKSI/22APR26/1/   /13/-50/0151/0153/N53.74/E169.56/35002/73800/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: RKSI/VHHH/22APR26/----/27899/ 62/- 52/0153/0251/N 23.481/E11…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "RKSI/VHHH/22APR26/----/27899/  62/- 52/0153/0251/N 23.481/E119.459/37997/30480/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: RKSI/VHHH/22APR26/----/27899/ 62/- 52/0153/0251/N 23.481/E11…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "RKSI/VHHH/22APR26/----/27899/  62/- 52/0153/0251/N 23.481/E119.459/37997/30480/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: SXS5TM,0156,00097,0000,370,0507,MMMM.MMM,MMMM.MMM,", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "SXS5TM,0156,00097,0000,370,0507,MMMM.MMM,MMMM.MMM,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: SXS5TM,0156,00097,0000,370,0507,MMMM.MMM,MMMM.MMM,", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "SXS5TM,0156,00097,0000,370,0507,MMMM.MMM,MMMM.MMM,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: 0,1,1,7,0,0,0,0,,0,5,0,0,0,0,,0,12,0,0,0,0,,0,13,0,0,0,0,,0,…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "0,1,1,7,0,0,0,0,,0,5,0,0,0,0,,0,12,0,0,0,0,,0,13,0,0,0,0,,0,11,0,0,0,0,,0,CDA8",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: M16AKE0530EDDF/RKSI/22APR26/819/---/024/-53/0211/0440/N4111.…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M16AKE0530EDDF/RKSI/22APR26/819/---/024/-53/0211/0440/N4111.9/E10411.1/33102/ 61600/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: M12AKE0077RKSI/CYYZ/23APR26/001/?/ 110/ -51/0212/1324/N3742.…", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: "M12AKE0077RKSI/CYYZ/23APR26/001/?/  110/  -51/0212/1324/N3742.2/E13829.1/35007/156140/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: FTX01,WS 3687 YYC-YXX YXX GATE 1/OPS", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,WS 3687 YYC-YXX
YXX GATE 1/OPS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: YW", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `YW

`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: FTX01,WS 3447 YVR-YXT YXT GATE 1/OPS", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,WS 3447 YVR-YXT
YXT GATE 1/OPS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: FTX01,WS 3406 YYJ-YVR YVR GATE A9/OPS", () => {
    const decodeResult = plugin.decode({
      label: "41",
      text: `FTX01,WS 3406 YYJ-YVR
YVR GATE A9/OPS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-41-fault");
    expect(decodeResult.formatted.description).toBe("Airborne Maintenance / CMC Fault Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
