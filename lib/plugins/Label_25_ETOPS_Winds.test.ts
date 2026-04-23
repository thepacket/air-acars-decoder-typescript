import { MessageDecoder } from '../MessageDecoder';
import { Label_25_ETOPS_Winds } from './Label_25_ETOPS_Winds';

describe('Label_25_ETOPS_Winds', () => {
  let plugin: Label_25_ETOPS_Winds;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_25_ETOPS_Winds(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-25-etops-winds");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["25"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "25", text: '' });
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
  });

  test("decodes #1: 42 ACARS FUEL SVC RCD\u0007 FUEL DATA RECEIVED FROM EFSR FLT 0363…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 ACARS FUEL SVC RCD
FUEL DATA RECEIVED FROM EFSR
FLT 0363/22APR SHIP 189 SFO-JFK
EFSR DATE/TIME 22APR 2227Z
 
FUEL BOARDED IN GALLONS -   07782
TOTAL FUEL OUT IN POUNDS - 065200
FUEL CAPS PRESENT    
FUEL TYPE - JETA           
     -----  FUEL  BY  TANK  -----
TK/ID TK BEGN      FUEL ADD   TOTAL FUEL
      FUEL WT      TO TANK     THIS TANK
LM     006700       025900       032600
RM     007800       024800       032600
CA     000000       000000       000000
FUELER - HANSEN/ALLEN                   
FUELER RMKS - FUEL CAPS REQUIRED        
                                      
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight",
      code: "FLT",
      label: "Flight",
      value: "0363",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 ACARS FUEL SVC RCD
FUEL DATA RECEIVED FROM EFSR
FLT 0363/22APR SHIP 189 SFO-JFK
EFSR DATE/TIME 22APR 2227Z
 
FUEL BOARDED IN GALLONS -   07782
TOTAL FUEL OUT IN POUNDS - 065200
FUEL CAPS PRESENT    
FUEL TYPE - JETA           
     -----  FUEL  BY  TANK  -----
TK/ID TK BEGN      FUEL ADD   TOTAL FUEL
      FUEL WT      TO TANK     THIS TANK
LM     006700       025900       032600
RM     007800       024800       032600
CA     000000       000000       000000
FUELER - HANSEN/ALLEN                   
FUELER RMKS - FUEL CAPS REQUIRED`,
    });
  });

  test("decodes #2: - JETA ----- FUEL BY TANK ----- TK/ID TK BEGN FUEL ADD TOTAL…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: ` - JETA           
     -----  FUEL  BY  TANK  -----
TK/ID TK BEGN      FUEL ADD   TOTAL FUEL
      FUEL WT      TO TANK     THIS TANK
LM     006700       025900       032600
RM     007800       024800       032600`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `- JETA           
     -----  FUEL  BY  TANK  -----
TK/ID TK BEGN      FUEL ADD   TOTAL FUEL
      FUEL WT      TO TANK     THIS TANK
LM     006700       025900       032600
RM     007800       024800       032600`,
    });
  });

  test("decodes #3: 42 ACARS FUEL SVC RCD\u0007 FUEL DATA RECEIVED FROM EFSR FLT 0363…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 ACARS FUEL SVC RCD
FUEL DATA RECEIVED FROM EFSR
FLT 0363/22APR SHIP 189 SFO-JFK
EFSR DATE/TIME 22APR 2227Z
 
FUEL BOARDED IN GALLONS -   07782
TOTAL FUEL OUT IN POUNDS - 065200
FUEL CAPS PRESENT    
FUEL TYPE`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "flight",
      code: "FLT",
      label: "Flight",
      value: "0363",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 ACARS FUEL SVC RCD
FUEL DATA RECEIVED FROM EFSR
FLT 0363/22APR SHIP 189 SFO-JFK
EFSR DATE/TIME 22APR 2227Z
 
FUEL BOARDED IN GALLONS -   07782
TOTAL FUEL OUT IN POUNDS - 065200
FUEL CAPS PRESENT    
FUEL TYPE`,
    });
  });

  test("decodes #4: F/A ROT COMPLETE TERM END PART 1 OF 1", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                 
F/A ROT COMPLETE     TERM               
 
END PART  1 OF  1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "F/A ROT COMPLETE     TERM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `F/A ROT COMPLETE     TERM               
 
END PART  1 OF  1`,
    });
  });

  test("decodes #5: F/A ROT COMPLETE TERM END PART 1 OF 1", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                 
F/A ROT COMPLETE     TERM               
 
END PART  1 OF  1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "F/A ROT COMPLETE     TERM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `F/A ROT COMPLETE     TERM               
 
END PART  1 OF  1`,
    });
  });

  test("decodes #6: 512489 JONATHAN K LAYO 532408 JOHN CHARL LAYO *CREW F* F/A R…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                           
 512489 JONATHAN K   LAYO               
 532408 JOHN CHARL   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*               `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "512489 JONATHAN K   LAYO",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `512489 JONATHAN K   LAYO               
 532408 JOHN CHARL   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*`,
    });
  });

  test("decodes #7: 512489 JONATHAN K LAYO 532408 JOHN CHARL LAYO *CREW F* F/A R…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                           
 512489 JONATHAN K   LAYO               
 532408 JOHN CHARL   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*               `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "512489 JONATHAN K   LAYO",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `512489 JONATHAN K   LAYO               
 532408 JOHN CHARL   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*`,
    });
  });

  test("decodes #8: 48 MSPG6 CREW P/F PART 1 OF 1 FLT 2262 - 22APR2225 CREW P/F …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `48   MSPG6 
CREW P/F        
PART  1 OF  1 
FLT 2262 - 22APR2225 CREW P/F        
ARR MSP GTE G6 
FLT 9964 JFK 1100L
                     NXT  DEPT  DEPT    
 NAME                FLT  TIME  FROM GTE
*CREW P*                                
 996087 MATTHEW E    LAYO               
 143881 CHRISTOPHE   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*                                
 324417 MARY ANN E  DLAYO               
 372402 CINDY       DLAYO               
 178976 AUBREY JAM  DLAYO               
*CREW F*                                
 834678 KINSLEY R   DLAYO               
 
END PART  1 OF  1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "48   MSPG6",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight",
      code: "FLT",
      label: "Flight",
      value: "2262",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `48   MSPG6 
CREW P/F        
PART  1 OF  1 
FLT 2262 - 22APR2225 CREW P/F        
ARR MSP GTE G6 
FLT 9964 JFK 1100L
                     NXT  DEPT  DEPT    
 NAME                FLT  TIME  FROM GTE
*CREW P*                                
 996087 MATTHEW E    LAYO               
 143881 CHRISTOPHE   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*                                
 324417 MARY ANN E  DLAYO               
 372402 CINDY       DLAYO               
 178976 AUBREY JAM  DLAYO               
*CREW F*                                
 834678 KINSLEY R   DLAYO               
 
END PART  1 OF  1`,
    });
  });

  test("decodes #9: F/A ROT COMPLETE TERM *CREW F* 324417 MARY ANN E DLAYO 37240…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                 
F/A ROT COMPLETE     TERM               
*CREW F*                                
 324417 MARY ANN E  DLAYO               
 372402 CINDY       DLAYO               
 178976 AUBREY JAM  DLAYO        `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "F/A ROT COMPLETE     TERM",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `F/A ROT COMPLETE     TERM               
*CREW F*                                
 324417 MARY ANN E  DLAYO               
 372402 CINDY       DLAYO               
 178976 AUBREY JAM  DLAYO`,
    });
  });

  test("decodes #10: 996087 MATTHEW E LAYO 143881 CHRISTOPHE LAYO *CREW F* F/A RO…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                           
 996087 MATTHEW E    LAYO               
 143881 CHRISTOPHE   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*               `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "996087 MATTHEW E    LAYO",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `996087 MATTHEW E    LAYO               
 143881 CHRISTOPHE   LAYO               
*CREW F*                                
F/A ROT COMPLETE     TERM               
*CREW F*`,
    });
  });

  test("decodes #11: ETERING ON ONE THREE THREE POINT FIVE SEVEN WHEN READY TO PU…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `ETERING ON ONE THREE
THREE POINT FIVE SEVEN
WHEN READY TO PUSHBACK
OR TAXI. HAZD WX INFO
FOR MSP AREA AVBL FM
FSS. CTN, BIRDS NEAR
MSP. READ BACK HS AND
ALT. ALL ACFT TAXI WITH
TRANSPONDER AND ALTITUDE
ENCODING `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "ETERING ON ONE THREE",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `ETERING ON ONE THREE
THREE POINT FIVE SEVEN
WHEN READY TO PUSHBACK
OR TAXI. HAZD WX INFO
FOR MSP AREA AVBL FM
FSS. CTN, BIRDS NEAR
MSP. READ BACK HS AND
ALT. ALL ACFT TAXI WITH
TRANSPONDER AND ALTITUDE
ENCODING`,
    });
  });

  test("decodes #12: 42 MSP DEP INFO N 0053Z. 17016G25KT 10SM BKN250 28/12 A2968 …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 MSP DEP INFO N 0053Z.
17016G25KT 10SM BKN250
28/12 A2968 (TWO NINER
SIX EIGHT) RMK AO2 PK
WND 18028/2357 SLP046
T02780117. DEPARTING RWY
12L, RWY 12R, RWY 17.
NOTICE TO AIRMEN. RWYS
4, 22 CLSD. ALL ACFT CTC
M`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 MSP DEP INFO N 0053Z.
17016G25KT 10SM BKN250
28/12 A2968 (TWO NINER
SIX EIGHT) RMK AO2 PK
WND 18028/2357 SLP046
T02780117. DEPARTING RWY
12L, RWY 12R, RWY 17.
NOTICE TO AIRMEN. RWYS
4, 22 CLSD. ALL ACFT CTC
M`,
    });
  });

  test("decodes #13: :02KBOS02510138AUTO/MPTO", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: ":02KBOS02510138AUTO/MPTO",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: ":02KBOS02510138AUTO/MPTO",
    });
  });

  test("decodes #14: :02KBOS02510138AUTO/MPTO", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: ":02KBOS02510138AUTO/MPTO",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: ":02KBOS02510138AUTO/MPTO",
    });
  });

  test("decodes #15: :02KBOS02510138AUTO/MPTO", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: ":02KBOS02510138AUTO/MPTO",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: ":02KBOS02510138AUTO/MPTO",
    });
  });

  test("decodes #16: :02CYYZ05030246AUTO/MPTO", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: ":02CYYZ05030246AUTO/MPTO",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: ":02CYYZ05030246AUTO/MPTO",
    });
  });

  test("decodes #17: 48 CLTA34 CREW P/F PART 1 OF 1 FLT 2929 - 23APR0133 CREW P/F…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `48   CLTA34
CREW P/F        
PART  1 OF  1 
FLT 2929 - 23APR0133 CREW P/F        
ARR CLT GTE A34
FLT 2491 MSP 0600L
                     NXT  DEPT  DEPT    
 NAME                FLT  TIME  FROM GTE
*CREW P*                                
 342227 ADAM MICHA   LAYO               
 654168 MICHAEL J    LAYO               
*CREW F*                                
 368978 MARTINA      LAYO               
 306150 HEIDI H      LAYO               
 511832 ELIZABETH    LAYO               
 
END PART  1 OF  1
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "48   CLTA34",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight",
      code: "FLT",
      label: "Flight",
      value: "2929",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `48   CLTA34
CREW P/F        
PART  1 OF  1 
FLT 2929 - 23APR0133 CREW P/F        
ARR CLT GTE A34
FLT 2491 MSP 0600L
                     NXT  DEPT  DEPT    
 NAME                FLT  TIME  FROM GTE
*CREW P*                                
 342227 ADAM MICHA   LAYO               
 654168 MICHAEL J    LAYO               
*CREW F*                                
 368978 MARTINA      LAYO               
 306150 HEIDI H      LAYO               
 511832 ELIZABETH    LAYO               
 
END PART  1 OF  1`,
    });
  });

  test("decodes #18: 342227 ADAM MICHA LAYO 654168 MICHAEL J LAYO *CREW F* 368978…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `                           
 342227 ADAM MICHA   LAYO               
 654168 MICHAEL J    LAYO               
*CREW F*                                
 368978 MARTINA      LAYO               
 306150 HEIDI H      LA`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "342227 ADAM MICHA   LAYO",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `342227 ADAM MICHA   LAYO               
 654168 MICHAEL J    LAYO               
*CREW F*                                
 368978 MARTINA      LAYO               
 306150 HEIDI H      LA`,
    });
  });

  test("decodes #19: 48 CLTA34 CREW P/F PART 1 OF 1 FLT 2929 - 23APR0133 CREW P/F…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `48   CLTA34
CREW P/F        
PART  1 OF  1 
FLT 2929 - 23APR0133 CREW P/F        
ARR CLT GTE A34
FLT 2491 MSP 0600L
                     NXT  DEPT  DEPT    
 NAME                FLT  TIME  FROM GTE
*CREW P*     `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "48   CLTA34",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight",
      code: "FLT",
      label: "Flight",
      value: "2929",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `48   CLTA34
CREW P/F        
PART  1 OF  1 
FLT 2929 - 23APR0133 CREW P/F        
ARR CLT GTE A34
FLT 2491 MSP 0600L
                     NXT  DEPT  DEPT    
 NAME                FLT  TIME  FROM GTE
*CREW P*`,
    });
  });

  test("decodes #20: 43 CLTA34 OPEN", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `43   CLTA34
OPEN  
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "43   CLTA34",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `43   CLTA34
OPEN`,
    });
  });

  test("decodes #21: 42 CLT ARR INFO J 0052Z. 20004KT 10SM FEW080 23/04 A3005 (TH…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 CLT ARR INFO J 0052Z.
20004KT 10SM FEW080
23/04 A3005 (THREE ZERO
ZERO FIVE) RMK AO2
SLP186 T02280039.
APPROACH IN USE SIMUL
APCHS IN USE, EXPECT
VISUAL APCH 18L, 18C,
18R. NOTAMS... TWY N
CLSD, TWY E CLSD BTN
TWY, M AND TWY F4 . TWY
DELTA SOUTH OF DELTA 3
RESTRICTED TO GROUP 5
AIRCRAFT. RUNWAY 36C,
36L, AND 18R OUTER
MARKER OUT OF SERVICE.
RUNWAY 36C CATEGORY 3
APPROACHES ARE NOT
AVAILABLE. LIGHTED CRANE
100 FT AGL 1500 FT WEST
RWY, 36C, LIGHTED CRANE
150 FT AGL 5280 FT E
RWY, 36R. AUTHORIZED
DRONE ACTIVITY
CLT010003, AT, AOB 002,
LIGHTED QUAD COPTER.
TRANSPONDERS REQUIRED TO
BE ON WHILE OPERATING ON
RWYS AND TWYS. BIRD
ACTIVITY VICINITY ARPT.
...ADVS YOU HAVE INFO J.
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 CLT ARR INFO J 0052Z.
20004KT 10SM FEW080
23/04 A3005 (THREE ZERO
ZERO FIVE) RMK AO2
SLP186 T02280039.
APPROACH IN USE SIMUL
APCHS IN USE, EXPECT
VISUAL APCH 18L, 18C,
18R. NOTAMS... TWY N
CLSD, TWY E CLSD BTN
TWY, M AND TWY F4 . TWY
DELTA SOUTH OF DELTA 3
RESTRICTED TO GROUP 5
AIRCRAFT. RUNWAY 36C,
36L, AND 18R OUTER
MARKER OUT OF SERVICE.
RUNWAY 36C CATEGORY 3
APPROACHES ARE NOT
AVAILABLE. LIGHTED CRANE
100 FT AGL 1500 FT WEST
RWY, 36C, LIGHTED CRANE
150 FT AGL 5280 FT E
RWY, 36R. AUTHORIZED
DRONE ACTIVITY
CLT010003, AT, AOB 002,
LIGHTED QUAD COPTER.
TRANSPONDERS REQUIRED TO
BE ON WHILE OPERATING ON
RWYS AND TWYS. BIRD
ACTIVITY VICINITY ARPT.
...ADVS YOU HAVE INFO J.`,
    });
  });

  test("decodes #22: L 1500 FT WEST RWY, 36C, LIGHTED CRANE 150 FT AGL 5280 FT E …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `L 1500 FT WEST
RWY, 36C, LIGHTED CRANE
150 FT AGL 5280 FT E
RWY, 36R. AUTHORIZED
DRONE ACTIVITY
CLT010003, AT, AOB 002,
LIGHTED QUAD COPTER.
TRANSPONDERS REQUIRED TO
BE ON WHILE OPERATING ON
RWYS AND TWYS. BIRD`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "L 1500 FT WEST",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `L 1500 FT WEST
RWY, 36C, LIGHTED CRANE
150 FT AGL 5280 FT E
RWY, 36R. AUTHORIZED
DRONE ACTIVITY
CLT010003, AT, AOB 002,
LIGHTED QUAD COPTER.
TRANSPONDERS REQUIRED TO
BE ON WHILE OPERATING ON
RWYS AND TWYS. BIRD`,
    });
  });

  test("decodes #23: RLS 1 TOWT 499.8 TOCG 27.3 FLAP/STAB 01/03.1 UP END ACARS WD…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `RLS 1 
TOWT 499.8 TOCG 27.3
FLAP/STAB 01/03.1 UP 
END ACARS WDR

`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "RLS 1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `RLS 1 
TOWT 499.8 TOCG 27.3
FLAP/STAB 01/03.1 UP 
END ACARS WDR`,
    });
  });

  test("decodes #24: N TWY, M AND TWY F4 . TWY DELTA SOUTH OF DELTA 3 RESTRICTED …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `N
TWY, M AND TWY F4 . TWY
DELTA SOUTH OF DELTA 3
RESTRICTED TO GROUP 5
AIRCRAFT. RUNWAY 36C,
36L, AND 18R OUTER
MARKER OUT OF SERVICE.
RUNWAY 36C CATEGORY 3
APPROACHES ARE NOT
AVAILABLE. LIGHTED CRANE
100 FT AG`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Airline / Sub-type Prefix",
      value: "N",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `N
TWY, M AND TWY F4 . TWY
DELTA SOUTH OF DELTA 3
RESTRICTED TO GROUP 5
AIRCRAFT. RUNWAY 36C,
36L, AND 18R OUTER
MARKER OUT OF SERVICE.
RUNWAY 36C CATEGORY 3
APPROACHES ARE NOT
AVAILABLE. LIGHTED CRANE
100 FT AG`,
    });
  });

  test("decodes #25: N TWY, M AND TWY F4 . TWY DELTA SOUTH OF DELTA 3 RESTRICTED …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `N
TWY, M AND TWY F4 . TWY
DELTA SOUTH OF DELTA 3
RESTRICTED TO GROUP 5
AIRCRAFT. RUNWAY 36C,
36L, AND 18R OUTER
MARKER OUT OF SERVICE.
RUNWAY 36C CATEGORY 3
APPROACHES ARE NOT
AVAILABLE. LIGHTED CRANE
100 FT AG`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Airline / Sub-type Prefix",
      value: "N",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `N
TWY, M AND TWY F4 . TWY
DELTA SOUTH OF DELTA 3
RESTRICTED TO GROUP 5
AIRCRAFT. RUNWAY 36C,
36L, AND 18R OUTER
MARKER OUT OF SERVICE.
RUNWAY 36C CATEGORY 3
APPROACHES ARE NOT
AVAILABLE. LIGHTED CRANE
100 FT AG`,
    });
  });

  test("decodes #26: 42 CLT ARR INFO J 0052Z. 20004KT 10SM FEW080 23/04 A3005 (TH…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 CLT ARR INFO J 0052Z.
20004KT 10SM FEW080
23/04 A3005 (THREE ZERO
ZERO FIVE) RMK AO2
SLP186 T02280039.
APPROACH IN USE SIMUL
APCHS IN USE, EXPECT
VISUAL APCH 18L, 18C,
18R. NOTAMS... TWY N
CLSD, TWY E CLSD BT`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 CLT ARR INFO J 0052Z.
20004KT 10SM FEW080
23/04 A3005 (THREE ZERO
ZERO FIVE) RMK AO2
SLP186 T02280039.
APPROACH IN USE SIMUL
APCHS IN USE, EXPECT
VISUAL APCH 18L, 18C,
18R. NOTAMS... TWY N
CLSD, TWY E CLSD BT`,
    });
  });

  test("decodes #27: LINE, 100FT AGL/ 809FT MSL (2024-ASO-5362-NRA). RWY 36R, TEM…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `LINE,
100FT AGL/ 809FT MSL
(2024-ASO-5362-NRA). RWY 36R,
TEMPORARY CRANES BEGINNING
1091FT
FROM DER, BEGINNING 394FT RIGHT OF
CENTERLINE, 36FT AGL/
786FT MSL
(2023-ASO-1332 THRU 1335-NRA). ALL
OTHER DATA REMAINS AS
PUBLISHED.
2603301452-2607301452EST

      **APPROACH PROCEDURES**

CLT A62470/26 23MAR261447-25JUN261447Z
36C
FDC 6/2470 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS RWY 36C (CAT II AND III), AMDT 17
...
S-ILS 36C CAT II NA EXCEPT FOR
AIRCRAFT EQUIPPED WITH RADIO
ALTIMETER. I-DQG INNER MARKER OTS
2603231447-2606251447EST

CLT A60943/26 06JAN261728-18AUG261728Z
36C
FDC 6/0943 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...
ILS RWY 36C (CAT II-III), AMDT 17...
DISREGARD NOTE: DQG ILS LLZ RWY 36C
UNUSABLE FOR ROLLOUT
GUIDANCE.
2601061728-2608181728EST

CLT A6708/25 30JUN250821-25JUN262111Z
36C
CLT 06/708 CLT NAV ILS RWY 36C IM U/S
2506300821-2606252111EST

CLT A45047/24 13SEP241606-13SEP261604Z
36C
FDC 4/5047 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...



END OF PAGE 05

`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `LINE,
100FT AGL/ 809FT MSL
(2024-ASO-5362-NRA). RWY 36R,
TEMPORARY CRANES BEGINNING
1091FT
FROM DER, BEGINNING 394FT RIGHT OF
CENTERLINE, 36FT AGL/
786FT MSL
(2023-ASO-1332 THRU 1335-NRA). ALL
OTHER DATA REMAINS AS
PUBLISHED.
2603301452-2607301452EST

      **APPROACH PROCEDURES**

CLT A62470/26 23MAR261447-25JUN261447Z
36C
FDC 6/2470 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS RWY 36C (CAT II AND III), AMDT 17
...
S-ILS 36C CAT II NA EXCEPT FOR
AIRCRAFT EQUIPPED WITH RADIO
ALTIMETER. I-DQG INNER MARKER OTS
2603231447-2606251447EST

CLT A60943/26 06JAN261728-18AUG261728Z
36C
FDC 6/0943 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...
ILS RWY 36C (CAT II-III), AMDT 17...
DISREGARD NOTE: DQG ILS LLZ RWY 36C
UNUSABLE FOR ROLLOUT
GUIDANCE.
2601061728-2608181728EST

CLT A6708/25 30JUN250821-25JUN262111Z
36C
CLT 06/708 CLT NAV ILS RWY 36C IM U/S
2506300821-2606252111EST

CLT A45047/24 13SEP241606-13SEP261604Z
36C
FDC 4/5047 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...



END OF PAGE 05`,
    });
  });

  test("decodes #28: 111Z 36C CLT 06/708 CLT NAV ILS RWY 36C IM U/S 2506300821-26…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `111Z
36C
CLT 06/708 CLT NAV ILS RWY 36C IM U/S
2506300821-2606252111EST

CLT A45047/24 13SEP241606-13SEP261604Z
36C
FDC 4/5047 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...


`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Airline / Sub-type Prefix",
      value: "111Z",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "36C",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `111Z
36C
CLT 06/708 CLT NAV ILS RWY 36C IM U/S
2506300821-2606252111EST

CLT A45047/24 13SEP241606-13SEP261604Z
36C
FDC 4/5047 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...`,
    });
  });

  test("decodes #29: G 24.8 TOWT 499.8 TOCG 27.3 FLAP/STAB 01/03.1 UP WX 18413KT …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `G 24.8
TOWT 499.8 TOCG 27.3
FLAP/STAB 01/03.1 UP 
 
WX 18413KT  11C A30.05
 
 
*16L*               11901FT 12HW 04XW   
  T/F  CLIMB RATOW WIND V1 VR V2        
D46/01 508.9 510.0 TW00 53 59 66     X20
DTO/01 5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `G 24.8
TOWT 499.8 TOCG 27.3
FLAP/STAB 01/03.1 UP 
 
WX 18413KT  11C A30.05
 
 
*16L*               11901FT 12HW 04XW   
  T/F  CLIMB RATOW WIND V1 VR V2        
D46/01 508.9 510.0 TW00 53 59 66     X20
DTO/01 5`,
    });
  });

  test("decodes #30: , CHARLOTTE, NC. ILS OR LOC RWY 36C, AMDT 17... ILS RWY 36C …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...
ILS RWY 36C (CAT II-III), AMDT 17...
DISREGARD NOTE: DQG ILS LLZ RWY 36C
UNUSABLE FOR ROLLOUT
GUIDANCE.
2601061728-2608181728EST

CLT A6708/25 30JUN250821-25JUN262`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `,
CHARLOTTE, NC.
ILS OR LOC RWY 36C, AMDT 17...
ILS RWY 36C (CAT II-III), AMDT 17...
DISREGARD NOTE: DQG ILS LLZ RWY 36C
UNUSABLE FOR ROLLOUT
GUIDANCE.
2601061728-2608181728EST

CLT A6708/25 30JUN250821-25JUN262`,
    });
  });

  test("decodes #31: 7 ... S-ILS 36C CAT II NA EXCEPT FOR AIRCRAFT EQUIPPED WITH …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `7
...
S-ILS 36C CAT II NA EXCEPT FOR
AIRCRAFT EQUIPPED WITH RADIO
ALTIMETER. I-DQG INNER MARKER OTS
2603231447-2606251447EST

CLT A60943/26 06JAN261728-18AUG261728Z
36C
FDC 6/0943 CLT IAP CHARLOTTE/DOUGLAS
INTL`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Airline / Sub-type Prefix",
      value: "7",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `7
...
S-ILS 36C CAT II NA EXCEPT FOR
AIRCRAFT EQUIPPED WITH RADIO
ALTIMETER. I-DQG INNER MARKER OTS
2603231447-2606251447EST

CLT A60943/26 06JAN261728-18AUG261728Z
36C
FDC 6/0943 CLT IAP CHARLOTTE/DOUGLAS
INTL`,
    });
  });

  test("decodes #32: AS PUBLISHED. 2603301452-2607301452EST **APPROACH PROCEDURES…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: ` AS
PUBLISHED.
2603301452-2607301452EST

      **APPROACH PROCEDURES**

CLT A62470/26 23MAR261447-25JUN261447Z
36C
FDC 6/2470 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS RWY 36C (CAT II AND III), AMDT 1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Airline / Sub-type Prefix",
      value: "AS",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `AS
PUBLISHED.
2603301452-2607301452EST

      **APPROACH PROCEDURES**

CLT A62470/26 23MAR261447-25JUN261447Z
36C
FDC 6/2470 CLT IAP CHARLOTTE/DOUGLAS
INTL,
CHARLOTTE, NC.
ILS RWY 36C (CAT II AND III), AMDT 1`,
    });
  });

  test("decodes #33: 42 ACARS WDR UPDATE\u0007 FLT 80/22APR SHIP 3423 SEA-CDG RLS 1 WD…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 ACARS WDR UPDATE
FLT 80/22APR SHIP 3423 SEA-CDG RLS 1 
WDR DATE/TIME 23APR 0130Z
SOB/277 
CARGO 0/7.74/7.09/0.80/0.06  
 
FUEL TOTAL 132.3 TAXI 0.9 
TANK 6.5/55.6/0/55.5/6.6 TT 8.2 
RMWT 500.8 ZFWT 368.5 ZFWC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 ACARS WDR UPDATE
FLT 80/22APR SHIP 3423 SEA-CDG RLS 1 
WDR DATE/TIME 23APR 0130Z
SOB/277 
CARGO 0/7.74/7.09/0.80/0.06  
 
FUEL TOTAL 132.3 TAXI 0.9 
TANK 6.5/55.6/0/55.5/6.6 TT 8.2 
RMWT 500.8 ZFWT 368.5 ZFWC`,
    });
  });

  test("decodes #34: LINE, 100FT AGL/ 809FT MSL (2024-ASO-5362-NRA). RWY 36R, TEM…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `LINE,
100FT AGL/ 809FT MSL
(2024-ASO-5362-NRA). RWY 36R,
TEMPORARY CRANES BEGINNING
1091FT
FROM DER, BEGINNING 394FT RIGHT OF
CENTERLINE, 36FT AGL/
786FT MSL
(2023-ASO-1332 THRU 1335-NRA). ALL
OTHER DATA REMAINS`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `LINE,
100FT AGL/ 809FT MSL
(2024-ASO-5362-NRA). RWY 36R,
TEMPORARY CRANES BEGINNING
1091FT
FROM DER, BEGINNING 394FT RIGHT OF
CENTERLINE, 36FT AGL/
786FT MSL
(2023-ASO-1332 THRU 1335-NRA). ALL
OTHER DATA REMAINS`,
    });
  });

  test("decodes #35: 03,2487254753,NULL,NULL,CI5686", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "03,2487254753,NULL,NULL,CI5686",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "03,2487254753,NULL,NULL,CI5686",
    });
  });

  test("decodes #36: 03,2487254753,NULL,NULL,CI5686", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "03,2487254753,NULL,NULL,CI5686",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "03,2487254753,NULL,NULL,CI5686",
    });
  });

  test("decodes #37: 43 NCEB27 OPEN", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `43   NCEB27
	OPEN  `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "43   NCEB27",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `43   NCEB27
	OPEN`,
    });
  });

  test("decodes #38: 43 NCEB27 OPEN", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `43   NCEB27
	OPEN  `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "43   NCEB27",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `43   NCEB27
	OPEN`,
    });
  });

  test("decodes #39: 43 NCEB27 OPEN", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `43   NCEB27
	OPEN  `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "43   NCEB27",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `43   NCEB27
	OPEN`,
    });
  });

  test("decodes #40: 0221, 52", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "0221,  52",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "0221,  52",
    });
  });

  test("decodes #41: 0221, 52", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "0221,  52",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "0221,  52",
    });
  });

  test("decodes #42: 0221, 52", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "0221,  52",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "0221,  52",
    });
  });

  test("decodes #43: 0221, 52", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "0221,  52",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "0221,  52",
    });
  });

  test("decodes #44: 0221, 52", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "0221,  52",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "0221,  52",
    });
  });

  test("decodes #45: 0221, 52", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: "0221,  52",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: "0221,  52",
    });
  });

  test("decodes #46: 42 MCI ATIS INFO O 0053Z. 17012KT 10SM OVC032 19/14 A2987 (T…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAFT WITH WINGSPAN
GREATER THAN 118 FEET.
MIGRATORY WATERFOWL IN
THE KANSAS CITY AREA.
RAMP CONTROL OPEN FREQ
NORTH 128.975 SOUTH
130.825. ...ADVS YOU
HAVE INFO O.
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAFT WITH WINGSPAN
GREATER THAN 118 FEET.
MIGRATORY WATERFOWL IN
THE KANSAS CITY AREA.
RAMP CONTROL OPEN FREQ
NORTH 128.975 SOUTH
130.825. ...ADVS YOU
HAVE INFO O.`,
    });
  });

  test("decodes #47: 42 MCI ATIS INFO O 0053Z. 17012KT 10SM OVC032 19/14 A2987 (T…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAFT WITH WINGSPAN
GREATER THAN 118 FEET.
MIGRATORY WATERFOWL IN
THE KANSAS CITY AREA.
RAMP CONTROL OPEN FREQ
NORTH 128.975 SOUTH
130.825. ...ADVS YOU
HAVE INFO O.
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAFT WITH WINGSPAN
GREATER THAN 118 FEET.
MIGRATORY WATERFOWL IN
THE KANSAS CITY AREA.
RAMP CONTROL OPEN FREQ
NORTH 128.975 SOUTH
130.825. ...ADVS YOU
HAVE INFO O.`,
    });
  });

  test("decodes #48: NZ122 223650 LOADSHEET PRELIM 1140 NZ122/23 23APR26 MEL AKL …", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `NZ122  223650
LOADSHEET PRELIM 1140
NZ122/23 23APR26
MEL AKL ZKOKU 3/14
ZFW 223650  MAX 237682  L
TOF  33770
TOW 257420  MAX 351534
TIF  24820
LAW 232600  MAX 251290
UNDLD  14032
PAX/55/32/167 TTL 258
PAX 254 PLUS 4
MACTOW       28.0
CENTRE                   0
MAIN 1=2             34700
RADIO   
SI BW  168492
BI  259.0
PREPARED BY SARAH/SCOTT 64 9 2563403
LICENCE 56743
AMADEUS ACARS PRELIMINARY LOADSHEET.

ENDPRELIMLOADSHEET`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "title",
      code: "TITLE",
      label: "Title",
      value: "NZ122  223650",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `NZ122  223650
LOADSHEET PRELIM 1140
NZ122/23 23APR26
MEL AKL ZKOKU 3/14
ZFW 223650  MAX 237682  L
TOF  33770
TOW 257420  MAX 351534
TIF  24820
LAW 232600  MAX 251290
UNDLD  14032
PAX/55/32/167 TTL 258
PAX 254 PLUS 4
MACTOW       28.0
CENTRE                   0
MAIN 1=2             34700
RADIO   
SI BW  168492
BI  259.0
PREPARED BY SARAH/SCOTT 64 9 2563403
LICENCE 56743
AMADEUS ACARS PRELIMINARY LOADSHEET.

ENDPRELIMLOADSHEET`,
    });
  });

  test("decodes #49: 42 MCI ATIS INFO O 0053Z. 17012KT 10SM OVC032 19/14 A2987 (T…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAF`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAF`,
    });
  });

  test("decodes #50: 42 MCI ATIS INFO O 0053Z. 17012KT 10SM OVC032 19/14 A2987 (T…", () => {
    const decodeResult = plugin.decode({
      label: "25",
      text: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAF`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-25-etops-winds");
    expect(decodeResult.formatted.description).toBe("Free-text Uplink (ground-to-air)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Free-text Uplink (ground-to-air)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Uplink (ground → aircraft)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "body",
      code: "BODY",
      label: "Body",
      value: `42 MCI ATIS INFO O 0053Z.
17012KT 10SM OVC032
19/14 A2987 (TWO NINER
EIGHT SEVEN) RMK AO2
SLP107 T01940144.
ARRIVALS EXPECT ILS RWY
19L, ILS RWY 19R. NOTICE
TO AIRMEN. TWY D BTN TWY
J AND TWY C 9 CLSD TO
AIRCRAF`,
    });
  });

});
