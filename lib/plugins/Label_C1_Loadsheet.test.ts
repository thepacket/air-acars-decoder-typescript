import { MessageDecoder } from '../MessageDecoder';
import { Label_C1_Loadsheet } from './Label_C1_Loadsheet';

describe('Label_C1_Loadsheet', () => {
  let plugin: Label_C1_Loadsheet;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_C1_Loadsheet(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-c1-loadsheet");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["C1"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "C1", text: '' });
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
  });

  test("decodes #1: .SYDAXQF 222229 AGM AN VH-VYB/FI QF0415/MA 158I - ATIS ATIS …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.SYDAXQF 222229
AGM
AN VH-VYB/FI QF0415/MA 158I
-  ATIS
ATIS YMML N   222222
   APCH: EXP GLS OR ILS APCH
   RWY: 27 FOR ARR, RWY 34 FOR
DEPARTURES VIA MNG NONIX, AND DOSEL
 FROM APRONS 5 THROUGH 10, RWY 27 FOR
ALL OTHER DEPARTURES. 
   WND: 350/10, MAX XW 12, RWY 27
   WX: CAVOK
+ TMP: 17
   QNH: 1028


-----END OF MESSAGE-----
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #2: .PERFFQK 222228 AGM AN CFBJZ/FI QK8111 - AERODATA PERFORMANC…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.PERFFQK 222228
AGM
AN CFBJZ/FI QK8111
-  AERODATA PERFORMANCE UPLINK
-----------
TAKEOFF DATA FLIGHT :8111   REL  1
APR 22 2026 22:28:52Z
WIND      270/11
TEMP      P17
QNH       29.89
GTOW      82408
 
REMA`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "CFBJZ",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "QK8111",
    });
  });

  test("decodes #3: .ATISAXS 222227 AGM AN VH-VQL/FI JQ0000 - YSSY ENR ATIS S 22…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATISAXS 222227
AGM
AN VH-VQL/FI JQ0000
-  
YSSY ENR ATIS S
2226Z
ATIS YSSY S   222226
  APCH: EXP INDEPENDENT VISUAL APCH.
        DO NOT PASS THRU ASSIGNED RWY CL
  RWY: 16L AND R FOR ARRS AND DEPS
+ OPR INFO`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VQL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "JQ0000",
    });
  });

  test("decodes #4: .ATISAXS 222227 AGM AN VH-VQL/FI JQ0000 - YSSY ENR ATIS S 22…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATISAXS 222227
AGM
AN VH-VQL/FI JQ0000
-  
YSSY ENR ATIS S
2226Z
ATIS YSSY S   222226
  APCH: EXP INDEPENDENT VISUAL APCH.
        DO NOT PASS THRU ASSIGNED RWY CL
  RWY: 16L AND R FOR ARRS AND DEPS
+ OPR INFO`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VQL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "JQ0000",
    });
  });

  test("decodes #5: .ATISAXS 222227 AGM AN VH-VQL/FI JQ0000 - YSSY ENR ATIS S 22…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATISAXS 222227
AGM
AN VH-VQL/FI JQ0000
-  
YSSY ENR ATIS S
2226Z
ATIS YSSY S   222226
  APCH: EXP INDEPENDENT VISUAL APCH.
        DO NOT PASS THRU ASSIGNED RWY CL
  RWY: 16L AND R FOR ARRS AND DEPS
+ OPR INFO`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VQL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "JQ0000",
    });
  });

  test("decodes #6: .ATISAXS 222227 AGM AN VH-VQL/FI JQ0000 - YSSY ENR ATIS S 22…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATISAXS 222227
AGM
AN VH-VQL/FI JQ0000
-  
YSSY ENR ATIS S
2226Z
ATIS YSSY S   222226
  APCH: EXP INDEPENDENT VISUAL APCH.
        DO NOT PASS THRU ASSIGNED RWY CL
  RWY: 16L AND R FOR ARRS AND DEPS
+ OPR INFO`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VQL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "JQ0000",
    });
  });

  test("decodes #7: .HDQQAOO 222228 AGM AN N286SY/MA 910I - BLOCK START REPORT--…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 222228
AGM
AN N286SY/MA 910I
-  BLOCK START REPORT--

CA 060650 CAMPILLO    
 117    - B 0:01 CR 0:01
FO 104097 ENGWALL     
 117    - B 0:01 CR 0:01

N286SY
22APR DL 4062 PDX-SEA

AD: 66 CH:  0    IN:  0
CRW: 5 AC:  1 SOULS: 71
CARGO:  1298 ZFW: 0
            GTOW:     0

SCH DEP 22:35
    OUT 22:27
D0 PERF -0:08

* END OF REPORT -- 2228Z


`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N286SY",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "910I",
    });
  });

  test("decodes #8: .HDQQAOO 222228 AGM AN N286SY/MA 910I - BLOCK START REPORT--…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 222228
AGM
AN N286SY/MA 910I
-  BLOCK START REPORT--

CA 060650 CAMPILLO    
 117    - B 0:01 CR 0:01
FO 104097 ENGWALL     
 117    - B 0:01 CR 0:01

N286SY
22APR DL 4062 PDX-SEA

AD: 66 CH:  0    `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N286SY",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "910I",
    });
  });

  test("decodes #9: .SYDAXQF 222228 AGM AN VH-VXG/FI QF0416/MA 404I - ATIS ATIS …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.SYDAXQF 222228
AGM
AN VH-VXG/FI QF0416/MA 404I
-  ATIS
ATIS YSSY S   222226
APCH: EXP INDEPENDENT VISUAL APCH.
      DO NOT PASS THRU ASSIGNED RWY CL
RWY: 16L AND R FOR ARRS AND DEPS
OPR INFO: INDEPENDENT PARL APPROACHES
AND DEPARTURES IN
          PROGRESS.
          FM TIME 2 2 4 0 DOMESTIC JET
DEPARTURES VIA WOL EXP
          RWY 16L
WIND: 140/10, RUNWAY 16R THRESHOLD WIND
350/5 TW 5KTS
VIS: GT 10KM
CLD: FEW045
TMP: 20
QNH: 1029
SIGWX: REPORTED WIND AT 1000 FT 150/12


-----END OF MESSAGE-----
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #10: .ATISAXS 222227 AGM AN VH-VQL/FI JQ0000 - YSSY ENR ATIS S 22…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATISAXS 222227
AGM
AN VH-VQL/FI JQ0000
-  
YSSY ENR ATIS S
2226Z
ATIS YSSY S   222226
  APCH: EXP INDEPENDENT VISUAL APCH.
        DO NOT PASS THRU ASSIGNED RWY CL
  RWY: 16L AND R FOR ARRS AND DEPS
+ OPR INFO`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VQL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "JQ0000",
    });
  });

  test("decodes #11: .MELOJJQ 230139 AGM AN VH-VGD/MA 028A - / PDC 230138 JST410 …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MELOJJQ 230139 
AGM
AN VH-VGD/MA 028A
-  /
PDC 230138
JST410 A320 YSSY 0220
CLEARED TO YBCG VIA
16LKEVIN7 DEP OLSEM:TRAN
ROUTE:DCT OLSEM Y193 BANDA Y43 BERNI DCT
CLIMB VIA SID TO: 5000
DEP FREQ: 123.000
SQUAWK 1552
..

`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VGD",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "028A",
    });
  });

  test("decodes #12: .NDCULUA 230139 AGM AN N492UA - /LANDING DATA ** PART 01 OF …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.NDCULUA 230139
AGM
AN N492UA
-  /LANDING DATA
 ** PART 01 OF 01 **
************************
LANDING DATA BUR RW 15
5976 FT
A320-232 V2527-A5
         *FULL*
TEMP 19C       ALT 30.03
WIND 188/7 MAG
     6KT HW 4KT XW
************************
135.4 - PLANNED LDG WT
142.2 - STRUCTURAL
153.0 - LM (4000 - 3/4)
PERF (GO-AROUND)
                 NO ICE  ICE ACCUM
BLEED/PACKS  ON   179.2     N/A
ENGINE ICE   ON     N/A     N/A
ENG.WING ICE ON     N/A     N/A
                 NO ICE  ICE ACCUM
BLEED/PACKS  OFF  181.9     N/A
ENGINE ICE   ON     N/A     N/A
ENG.WING ICE ON     N/A     N/A
************************
REQUIRED LDG DISTANCE
..................................................
. **ATTENTION** WHEN ENCLOSED IN ASTERISKS, THE  .
.               REQUIRED LANDING DISTANCE        .
.               EXCEEDS AVAILABLE RUNWAY LENGTH. .
..................................................
AUTOBRAKE:
      DRY    GOOD  MEDIUM  POOR AUTOLAND
1    *7414* *7414* *7505* *9371*  +760
2     5324   5335  *6054* *8999*  +710
MAX NODATA NODATA NODATA NODATA NODATA
OFF   4010   4874   5969  *8969*  +710
BUR RW 15 (5976FT)
************************
RWY DRY
************************
9790 BROADBAND ANTENNA INSTALLED - A320
************************
** END OF PART 01 **`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #13: .MELOJJQ 230139 AGM AN VH-VGD/MA 028A - / PDC 230138 JST410 …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MELOJJQ 230139 
AGM
AN VH-VGD/MA 028A
-  /
PDC 230138
JST410 A320 YSSY 0220
CLEARED TO YBCG VIA
16LKEVIN7 DEP OLSEM:TRAN
ROUTE:DCT OLSEM Y193 BANDA Y43 BERNI DCT
CLIMB VIA SID TO: 5000
DEP FREQ: 123.000
SQUAW`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VGD",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "028A",
    });
  });

  test("decodes #14: ........................................ AUTOBRAKE: DRY GOOD…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `........................................
AUTOBRAKE:
      DRY    GOOD  MEDIUM  POOR AUTOLAND
1    *7414* *7414* *7505* *9371*  +760
2     5324   5335  *6054* *8999*  +710
MAX NODATA NODATA NODATA NODATA NODATA
OFF `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #15: .DPCXRFX 230139 AGM AN N150FE - // TAKEOFF . KPHL 09L-FULL-N…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.DPCXRFX 230139
AGM
AN N150FE
- //
TAKEOFF
.
KPHL 09L-FULL-NOSHP
RWY CND: DRY
.
N150FE  B767-300F/CF6-80C2B6F
REL01 MAN01
.
RESTRICTIONS
PERFORMANCE RELATED
MEL: 0 CDL: 1
C:52-36-01 (1)
THR RED 1036 MSL/GRAD 790 FT/NM
EO ACCEL: 1000FT AFE 1036FT MSL
DEP PROC: NADP 2
.
WX 230054Z
WIND: 102/ 5 KT
.     ( 5H/ 1X) KT
MAX X-WIND: 30 KT
OAT: 15 C
QNH: 29.96 IN HG
.
.
.       MTOGW: 311.9 (CLIMB)
. STOP MARGIN: 2088
. --------------------------                       -------ADDL DATA--------
.       FLAPS: 5                                                    SFC: G
.      THRUST: 49 C D-TO 2                         RWY LENGTH: 9500 FT
.          CG: 17.9                                ELEV/PRESS: 36/-1 FT
.        TRIM: 5.3                                 FLAPS UP: 223
.          V1: 146                                 FLAPS  1: 203
.          VR: 147                                 FLAPS  5: 183
.          V2: 151
.        VREF: 143
.        TOGW: 307.8
.          N1: 95.3
. --------------------------
.
.         |      TAKEOFF REF   1/2 |              |      TAKEOFF REF   2/2 |
.         | FLAPS                V1|              |                        |
.       1L| 5                   146|1R          1L|                        |1R
.         | THRUST               VR|              |                ACCEL HT|
.       2L|49 C D-TO 2          147|2R          2L|                  1000FT|2R
.         | CG  TRIM             V2|              | WIND                   |
.       3L|18   5.3             151|3R          3L|105 / 5KT               |3R
.         | RWY/POS    GR WT   TOGW|              | RWY WIND   STD LIM TOGW|
.       4L|09L/----    308.7  307.8|4R          4L| 5KTH  1KTR        311.9|4R
.         |                        |              | SLOPE           REF OAT|
.       5L|                        |5R          5L|U0.0                15 C|5R
.
.
.
.`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #16: .DPCXRFX 230139 AGM AN N150FE - // TAKEOFF . KPHL 09L-FULL-N…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.DPCXRFX 230139
AGM
AN N150FE
- //
TAKEOFF
.
KPHL 09L-FULL-NOSHP
RWY CND: DRY
.
N150FE  B767-300F/CF6-80C2B6F
REL01 MAN01
.
RESTRICTIONS
PERFORMANCE RELATED
MEL: 0 CDL: 1
C:52-36-01 (1)
THR RED 1036 MSL/GRAD 790 FT/NM
EO ACCEL: 1000FT AFE 1036FT MSL
DEP PROC: NADP 2
.
WX 230054Z
WIND: 102/ 5 KT
.     ( 5H/ 1X) KT
MAX X-WIND: 30 KT
OAT: 15 C
QNH: 29.96 IN HG
.
.
.       MTOGW: 311.9 (CLIMB)
. STOP MARGIN: 2088
. --------------------------                       -------ADDL DATA--------
.       FLAPS: 5                                                    SFC: G
.      THRUST: 49 C D-TO 2                         RWY LENGTH: 9500 FT
.          CG: 17.9                                ELEV/PRESS: 36/-1 FT
.        TRIM: 5.3                                 FLAPS UP: 223
.          V1: 146                                 FLAPS  1: 203
.          VR: 147                                 FLAPS  5: 183
.          V2: 151
.        VREF: 143
.        TOGW: 307.8
.      `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #17: .................................................. . **ATTEN…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `
..................................................
. **ATTENTION** WHEN ENCLOSED IN ASTERISKS, THE  .
.               REQUIRED LANDING DISTANCE        .
.               EXCEEDS AVAILABLE RUNWAY LENGTH. .
..........`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #18: .GTWCXXA 230139 AGM AN B-LQA - SA 23/01:37 FMEE 230130Z AUTO…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.GTWCXXA 230139
	AGM
	AN B-LQA
	-  SA 23/01:37
	FMEE 230130Z AUTO 12009KT 9999 ///TCU
	  24/21 Q1014 TEMPO
	  14015G30KT 4000 SHRA FEW010 SCT020CB
	SA 23/01:32
	FMMI 230130Z 18006KT 140V200 9999 FEW017
	  15/15 Q1021 NOSIG
	SA 23/00:56
	FQBR 230100Z 15008KT 9999 FEW020 27/24
	  Q1015
	SA 23/01:12
	FQMA 230100Z 22014KT 9000 -DZ FEW010
	  BKN020 18/17 Q1023 NOSIG`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #19: .ATSXCXA 230139 AGM AN .B-5933/FI CA0859/MA 066A - FROM AOC …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATSXCXA 230139
	AGM
	AN .B-5933/FI CA0859/MA 066A
	-  FROM AOC
	SATU20 LTAA 230120
	METAR LTFM 230120Z 06009KT 9999 SCT018 SCT027 BKN120 09/04 Q1014 
	NOSIG RMK RWY17L 06009KT RWY34L 06007KT RWY16R 06009KT RWY36 
	07007KT RWY18 08008KT=
	
	FTTU31 LTAA 222300
	TAF LTFM 222240Z 2300/2406 05010KT 9999 FEW010 SCT025 BKN120 BECMG 
	2314/2317 16008KT CAVOK BECMG 2319/2322 22012KT BECMG 2402/2405 
	34008KT=
	SATU20 LTAA 230120
	METAR LTAC 230120Z 01003KT 9999 SCT030 BKN080 05/03 Q1010 NOSIG RMK 
	RWY21C 01003KT RWY03L 36003KT RWY21R 01003KT RWY03R 35004KT RWY21L 
	02004KT=
	
	FTTU31 LTAA 222300
	TAF LTAC 222240Z 2300/2324 VRB02KT 9999 SCT040 BKN100 BECMG 
	2302/2305 -SHRA BKN025 BKN080 BECMG 2316/2318 SCT040`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #20: N/A ENG.WING ICE ON N/A N/A NO ICE ICE ACCUM BLEED/PACKS OFF…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `N/A
ENG.WING ICE ON     N/A     N/A
                 NO ICE  ICE ACCUM
BLEED/PACKS  OFF  181.9     N/A
ENGINE ICE   ON     N/A     N/A
ENG.WING ICE ON     N/A     N/A
************************
REQUIRED LDG DISTANCE`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #21: W 4KT XW ************************ 135.4 - PLANNED LDG WT 142…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `W 4KT XW
************************
135.4 - PLANNED LDG WT
142.2 - STRUCTURAL
153.0 - LM (4000 - 3/4)
PERF (GO-AROUND)
                 NO ICE  ICE ACCUM
BLEED/PACKS  ON   179.2     N/A
ENGINE ICE   ON     N/A     `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #22: .NDCULUA 230139 AGM AN N492UA - /LANDING DATA ** PART 01 OF …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.NDCULUA 230139
AGM
AN N492UA
-  /LANDING DATA
 ** PART 01 OF 01 **
************************
LANDING DATA BUR RW 15
5976 FT
A320-232 V2527-A5
         *FULL*
TEMP 19C       ALT 30.03
WIND 188/7 MAG
     6KT H`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #23: .HDQQAOO 230139 AGM AN N309SY/MA 489I - END OF FLIGHT*** END…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 230139
AGM
AN N309SY/MA 489I
-  END OF FLIGHT***
END OF FLIGHT REPORT--

CA 060650 CAMPILLO    
 117 1:53 B 2:18 CR 2:20
FO 104097 ENGWALL     
 117 1:53 B 2:18 CR 2:20

N309SY
22APR DL 3913 SEA-PDX

AD: 45 CH:  1    IN:  1
CRW: 4  AC: 0 SOULS: 51
CARGO:  1362 ZFW: 61961
            GTOW: 67961

 OUT: 0038    OFF: 0106
  IN: 0138     ON: 0135
DOOR: 0139

117:  0:47    CR:  1:01
BLK:  1:00   FLT:  0:29

 SCH D0     BLK      A0
  -0:10   -0:04   -0:14

-- NEXT FLIGHT EST DEP
AC N309SY
 D13 3913 PDX-SEA 221932
CA 060650 CAMPILLO      
 D13 3913 PDX-SEA 221932
FO 104097 ENGWALL       
 D13 3913 PDX-SEA 221932
FF 072153 SHULER        
 D13 3913 PDX-SEA 221932
FA 100635 KIDBY         
 D13 3913 PDX-SEA 221932

* END OF REPORT -- 0139Z


`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N309SY",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "489I",
    });
  });

  test("decodes #24: SCH D0 BLK A0 -0:10 -0:04 -0:14 -- NEXT FLIGHT EST DEP AC N3…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `
 SCH D0     BLK      A0
  -0:10   -0:04   -0:14

-- NEXT FLIGHT EST DEP
AC N309SY
 D13 3913 PDX-SEA 221932
CA 060650 CAMPILLO      
 D13 3913 PDX-SEA 221932
FO 104097 ENGWALL       
 D13 3913 PDX-SEA 221932
FF`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #25: AD: 45 CH: 1 IN: 1 CRW: 4 AC: 0 SOULS: 51 CARGO: 1362 ZFW: 6…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `

AD: 45 CH:  1    IN:  1
CRW: 4  AC: 0 SOULS: 51
CARGO:  1362 ZFW: 61961
            GTOW: 67961

 OUT: 0038    OFF: 0106
  IN: 0138     ON: 0135
DOOR: 0139

117:  0:47    CR:  1:01
BLK:  1:00   FLT:  0:29
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #26: .HDQQAOO 230139 AGM AN N309SY/MA 489I - END OF FLIGHT*** END…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 230139
AGM
AN N309SY/MA 489I
-  END OF FLIGHT***
END OF FLIGHT REPORT--

CA 060650 CAMPILLO    
 117 1:53 B 2:18 CR 2:20
FO 104097 ENGWALL     
 117 1:53 B 2:18 CR 2:20

N309SY
22APR DL 3913 SEA-PDX`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N309SY",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "489I",
    });
  });

  test("decodes #27: .MADMQEB 230135 AGM AN EC-NTX/MA 321I - QUMADMXEB~1OCC// AVA…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MADMQEB 230135
	AGM
	AN EC-NTX/MA 321I
	-  QUMADMXEB~1OCC// AVA97 //
	
	DEP WX UPDATE
	
	SKBO
	METAR :  230100Z 31004KT 280V340 9999 FEW050 13/12 Q1026 NOSIG=
	   TAF :  222255Z 2300/2324 VRB03KT 9999 SCT040
	TEMPO 2309/2312 8000 VCFG SCT020
	BECMG 2315/2316 31012KT 9999 SCT040
	TEMPO 2317/2320 8000 SHRA SCT020TCU BKN050
	TX18/2219Z TN11/2310Z=
	
	SCEL
	METAR :  230100Z 16008KT CAVOK 15/06 Q1020 NOSIG=
	   TAF :  222200Z 2300/2324 19012KT CAVOK TX23/2319Z TN08/2310Z
	      BECMG 2301/2303 15004KT
	      TEMPO 2308/2312 VRB02KT 7000 NSC
	      BECMG 2316/2318 19010KT=
	
	SCIE
	METAR :  230100Z 22008KT CAVOK 13/08 Q1024=
	   TAF :  222200Z 2300/2324 24012KT CAVOK TX19/2318Z TN07/2310Z
	      BECMG 2302/2304 18005KT
	      TEMPO 2308/2312 9999 SCT020
	      BECMG 2316/2318 23010KT=
	
	SCFA
	METAR :  230100Z 21010KT 9999 OVC014 17/14 Q1017 NOSIG=
	TAF COR SCFA 222330Z 2300/2324 21010KT 9999 SCT005 BKN015 TN16/2310Z
	TX20/2318Z
	TEMPO 2300/2310 5000 -DZ BKN005
	BECMG 2304/2306 21004KT
	BECMG 2311/2313 FEW005 BKN015
	BECMG 2314/2316 21014KT FEW015
	BECMG 2322/2324 BKN012=
	
	SEGU
	METAR :  230100Z 23009KT 9999 FEW023 30/23 Q1009 NOSIG RMK A2982=
	   TAF :  222300Z 2300/2324 24004KT 9999 BKN023
	      BECMG 2311/2313 33004KT SCT023
	      BECMG 2318/2320 24004KT BKN023 TX33/2320Z TN26/2310Z=
	
	SPJC
	METAR :  230100Z 18006KT 9999 FEW008 21/18 Q1014 NOSIG RMK PP000=
	   TAF :  222305Z 2300/2324 18004KT 9999 SCT012
	         TX24/2319Z TN20/2311Z
	          BECMG 2301/2303 BKN007
	         TEMPO 2311/2314 3000 BR OVC004
	         BECMG 2316/2318 24012KT CAVOK=
	
	SPQT
	METAR :  230100Z 12002KT CAVOK 26/24 Q1009 NOSIG RMK PP000=
	   TAF :  222300Z 2300/2324 03004KT CAVOK
	    TX32/2320Z TN24/2311Z
	    TEMPO 2308/2312 BKN002 BKN080
	    BECMG 2314/2317 BKN020=
	
	SLDS OCC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #28: .MADMQEB 230135 AGM AN EC-NTX/MA 321I - QUMADMXEB~1OCC// AVA…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MADMQEB 230135
	AGM
	AN EC-NTX/MA 321I
	-  QUMADMXEB~1OCC// AVA97 //
	
	DEP WX UPDATE
	
	SKBO
	METAR :  230100Z 31004KT 280V340 9999 FEW050 13/12 Q1026 NOSIG=
	   TAF :  222255Z 2300/2324 VRB03KT 9999 SCT040
	TEMPO 2309/2312 8000 VCFG SCT020
	BECMG 2315/2316 31012KT 9999 SCT040
	TEMPO 2317/2320 8000 SHRA SCT020TCU BKN050
	TX18/2219Z TN11/2310Z=
	
	SCEL
	METAR :  230100Z 16008KT CAVOK 15/06 Q1020 NOSIG=
	   TAF :  222200Z 2300/2324 19012KT CAVOK TX23/2319Z TN08/2310Z
	      BECMG 2301/2303 15004KT
	      TEMPO 2308/2312 VRB02KT 7000 NSC
	      BECMG 2316/2318 19010KT=
	
	SCIE
	METAR :  230100Z 22008KT CAVOK 13/08 Q1024=
	   TAF :  222200Z 2300/2324 24012KT CAVOK TX19/2318Z TN07/2310Z
	      BECMG 2302/2304 18005KT
	      TEMPO 2308/2312 9999 SCT020
	      BECMG 2316/2318 23010KT=
	
	SCFA
	METAR :  230100Z 21010KT 9999 OVC014 17/14 Q1017 NOSIG=
	TAF COR SCFA 222330Z 2300/2324 21010KT 9999 SCT005 BKN015 TN16/2310Z
	TX20/2318Z
	TEMPO 2300/2310 5000 -DZ BKN005
	BECMG 2304/2306 21004KT
	BECMG 2311/2313 FEW005 BKN015
	BECMG 2314/2316 21014KT FEW015
	BECMG 2322/2324 BKN012=
	
	SEGU
	METAR :  230100Z 23009KT 9999 FEW023 30/23 Q1009 NOSIG RMK A2982=
	   TAF :  222300Z 2300/2324 24004KT 9999 BKN023
	      BECMG 2311/2313 33004KT SCT023
	      BECMG 2318/2320 24004KT BKN023 TX33/2320Z TN26/2310Z=
	
	SPJC
	METAR :  230100Z 18006KT 9999 FEW008 21/18 Q1014 NOSIG RMK PP000=
	   TAF :  222305Z 2300/2324 18004KT 9999 SCT012
	         TX24/2319Z TN20/2311Z
	          BECMG 2301/2303 BKN007
	         TEMPO 2311/2314 3000 BR OVC004
	         BECMG 2316/2318 24012KT CAVOK=
	
	SPQT
	METAR :  230100Z 12002KT CAVOK 26/24 Q1009 NOSIG RMK PP000=
	   TAF :  222300Z 2300/2324 03004KT CAVOK
	    TX32/2320Z TN24/2311Z
	    TEMPO 2308/2312 BKN002 BKN080
	    BECMG 2314/2317 BKN020=
	
	SLDS OCC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #29: .MADMQEB 230135 AGM AN EC-NTX/MA 321I - QUMADMXEB~1OCC// AVA…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MADMQEB 230135
	AGM
	AN EC-NTX/MA 321I
	-  QUMADMXEB~1OCC// AVA97 //
	
	DEP WX UPDATE
	
	SKBO
	METAR :  230100Z 31004KT 280V340 9999 FEW050 13/12 Q1026 NOSIG=
	   TAF :  222255Z 2300/2324 VRB03KT 9999 SCT040
	TEMPO 2309/2312 8000 VCFG SCT020
	BECMG 2315/2316 31012KT 9999 SCT040
	TEMPO 2317/2320 8000 SHRA SCT020TCU BKN050
	TX18/2219Z TN11/2310Z=
	
	SCEL
	METAR :  230100Z 16008KT CAVOK 15/06 Q1020 NOSIG=
	   TAF :  222200Z 2300/2324 19012KT CAVOK TX23/2319Z TN08/2310Z
	      BECMG 2301/2303 15004KT
	      TEMPO 2308/2312 VRB02KT 7000 NSC
	      BECMG 2316/2318 19010KT=
	
	SCIE
	METAR :  230100Z 22008KT CAVOK 13/08 Q1024=
	   TAF :  222200Z 2300/2324 24012KT CAVOK TX19/2318Z TN07/2310Z
	      BECMG 2302/2304 18005KT
	      TEMPO 2308/2312 9999 SCT020
	      BECMG 2316/2318 23010KT=
	
	SCFA
	METAR :  230100Z 21010KT 9999 OVC014 17/14 Q1017 NOSIG=
	TAF COR SCFA 222330Z 2300/2324 21010KT 9999 SCT005 BKN015 TN16/2310Z
	TX20/2318Z
	TEMPO 2300/2310 5000 -DZ BKN005
	BECMG 2304/2306 21004KT
	BECMG 2311/2313 FEW005 BKN015
	BECMG 2314/2316 21014KT FEW015
	BECMG 2322/2324 BKN012=
	
	SEGU
	METAR :  230100Z 23009KT 9999 FEW023 30/23 Q1009 NOSIG RMK A2982=
	   TAF :  222300Z 2300/2324 24004KT 9999 BKN023
	      BECMG 2311/2313 33004KT SCT023
	      BECMG 2318/2320 24004KT BKN023 TX33/2320Z TN26/2310Z=
	
	SPJC
	METAR :  230100Z 18006KT 9999 FEW008 21/18 Q1014 NOSIG RMK PP000=
	   TAF :  222305Z 2300/2324 18004KT 9999 SCT012
	         TX24/2319Z TN20/2311Z
	          BECMG 2301/2303 BKN007
	         TEMPO 2311/2314 3000 BR OVC004
	         BECMG 2316/2318 24012KT CAVOK=
	
	SPQT
	METAR :  230100Z 12002KT CAVOK 26/24 Q1009 NOSIG RMK PP000=
	   TAF :  222300Z 2300/2324 03004KT CAVOK
	    TX32/2320Z TN24/2311Z
	    TEMPO 2308/2312 BKN002 BKN080
	    BECMG 2314/2317 BKN020=
	
	SLDS OCC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #30: .MADMQEB 230135 AGM AN EC-NTX/MA 321I - QUMADMXEB~1OCC// AVA…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MADMQEB 230135
	AGM
	AN EC-NTX/MA 321I
	-  QUMADMXEB~1OCC// AVA97 //
	
	DEP WX UPDATE
	
	SKBO
	METAR :  230100Z 31004KT 280V340 9999 FEW050 13/12 Q1026 NOSIG=
	   TAF :  222255Z 2300/2324 VRB03KT 9999 SCT040
	TEMPO 2309/2312 8000 VCFG SCT020
	BECMG 2315/2316 31012KT 9999 SCT040
	TEMPO 2317/2320 8000 SHRA SCT020TCU BKN050
	TX18/2219Z TN11/2310Z=
	
	SCEL
	METAR :  230100Z 16008KT CAVOK 15/06 Q1020 NOSIG=
	   TAF :  222200Z 2300/2324 19012KT CAVOK TX23/2319Z TN08/2310Z
	      BECMG 2301/2303 15004KT
	      TEMPO 2308/2312 VRB02KT 7000 NSC
	      BECMG 2316/2318 19010KT=
	
	SCIE
	METAR :  230100Z 22008KT CAVOK 13/08 Q1024=
	   TAF :  222200Z 2300/2324 24012KT CAVOK TX19/2318Z TN07/2310Z
	      BECMG 2302/2304 18005KT
	      TEMPO 2308/2312 9999 SCT020
	      BECMG 2316/2318 23010KT=
	
	SCFA
	METAR :  230100Z 21010KT 9999 OVC014 17/14 Q1017 NOSIG=
	TAF COR SCFA 222330Z 2300/2324 21010KT 9999 SCT005 BKN015 TN16/2310Z
	TX20/2318Z
	TEMPO 2300/2310 5000 -DZ BKN005
	BECMG 2304/2306 21004KT
	BECMG 2311/2313 FEW005 BKN015
	BECMG 2314/2316 21014KT FEW015
	BECMG 2322/2324 BKN012=
	
	SEGU
	METAR :  230100Z 23009KT 9999 FEW023 30/23 Q1009 NOSIG RMK A2982=
	   TAF :  222300Z 2300/2324 24004KT 9999 BKN023
	      BECMG 2311/2313 33004KT SCT023
	      BECMG 2318/2320 24004KT BKN023 TX33/2320Z TN26/2310Z=
	
	SPJC
	METAR :  230100Z 18006KT 9999 FEW008 21/18 Q1014 NOSIG RMK PP000=
	   TAF :  222305Z 2300/2324 18004KT 9999 SCT012
	         TX24/2319Z TN20/2311Z
	          BECMG 2301/2303 BKN007
	         TEMPO 2311/2314 3000 BR OVC004
	         BECMG 2316/2318 24012KT CAVOK=
	
	SPQT
	METAR :  230100Z 12002KT CAVOK 26/24 Q1009 NOSIG RMK PP000=
	   TAF :  222300Z 2300/2324 03004KT CAVOK
	    TX32/2320Z TN24/2311Z
	    TEMPO 2308/2312 BKN002 BKN080
	    BECMG 2314/2317 BKN020=
	
	SLDS OCC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #31: .MELOJJQ 230138 AGM AN VH-VGT/MA 025A - / U L A EDNO 02 FROM…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MELOJJQ 230138 
AGM
AN VH-VGT/MA 025A
-  /



U L A    EDNO 02
 
FROM/TO  FLIGHT  A/C REG  DATE     TIME
HLZ CHC  JQ273   VH-VGT   23Apr26  0136z
 
TTL ULDs 3
TTL Bags 85
TTL Cargo 0
 
POS 5 Bulk B 0
           C 0
 
POS 42     N
POS 41 AKH B 11
POS 32 AKH B 35
POS 31     N
 
POS 13     N
POS 12     N
POS 11 AKH B 39`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VGT",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "025A",
    });
  });

  test("decodes #32: .MELOJJQ 230138 AGM AN VH-VGT/MA 025A - / U L A EDNO 02 FROM…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.MELOJJQ 230138 
AGM
AN VH-VGT/MA 025A
-  /



U L A    EDNO 02
 
FROM/TO  FLIGHT  A/C REG  DATE     TIME
HLZ CHC  JQ273   VH-VGT   23Apr26  0136z
 
TTL ULDs 3
TTL Bags 85
TTL Cargo 0
 
POS 5 Bulk B 0
  `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VGT",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "025A",
    });
  });

  test("decodes #33: 36.65 STAB:ALL 5.9 UP A41 B119 C118 SEATROW TRIM KUL FRE1122…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `  36.65
	STAB:ALL                5.9 UP
	A41 B119 C118 
	SEATROW TRIM
	KUL FRE11228 POS 1265 BAG 5246 TRA    0
	SI DOW 127809
	DOI 92.0
	PANTRY CODE  A  
	NOTOC: YES
	B51/E//41//FAK
	LOAD IN CPTS 0/0 1/2204 2/7254 3/5211 4
	/3720 5/1311 
	PREPARED BY MOHAMAD KHAIRUL IDRIS //M 
	KHAIRUL 0 19 3159297
	LICENCE K8-53 E-29FEB28
	LOADING SUPV : EUM MYUNG SUB
	ID : 9304165
	AIRCRAFT TYPE : A330-323               
	PIC NAME: MOHAMMAD HASYIDAN BIN MOH 
	SALLEH
	SIGN & LIC NO.: ......................`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "notoc",
      code: "NOTOC",
      label: "NOTOC (Dangerous Goods)",
      value: "YES B51/E//41//FAK LOAD IN CPTS 0/0 1/2204 2/7254 3/5211 4 /3720 5/1311",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "preparer",
      code: "PREP",
      label: "Prepared By",
      value: "MOHAMAD KHAIRUL IDRIS //M KHAIRUL 0 19 3159297 LICENCE K8-53 E-29FEB28 LOADING SUPV : EUM MYUNG SUB ID : 9304165 AIRCRAFT TYPE : A330-323 PIC NAME: MOHAMMAD HASYIDAN BIN MOH SALLEH SIGN & LIC NO.: ......................",
    });
  });

  test("decodes #34: 36.65 STAB:ALL 5.9 UP A41 B119 C118 SEATROW TRIM KUL FRE1122…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `  36.65
	STAB:ALL                5.9 UP
	A41 B119 C118 
	SEATROW TRIM
	KUL FRE11228 POS 1265 BAG 5246 TRA    0
	SI DOW 127809
	DOI 92.0
	PANTRY CODE  A  
	NOTOC: YES
	B51/E//41//FAK
	LOAD IN CPTS 0/0 1/2204 2/7254 3/5211 4
	/3720 5/1311 
	PREPARED BY MOHAMAD KHAIRUL IDRIS //M 
	KHAIRUL 0 19 3159297
	LICENCE K8-53 E-29FEB28
	LOADING SUPV : EUM MYUNG SUB
	ID : 9304165
	AIRCRAFT TYPE : A330-323               
	PIC NAME: MOHAMMAD HASYIDAN BIN MOH 
	SALLEH
	SIGN & LIC NO.: ......................`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "notoc",
      code: "NOTOC",
      label: "NOTOC (Dangerous Goods)",
      value: "YES B51/E//41//FAK LOAD IN CPTS 0/0 1/2204 2/7254 3/5211 4 /3720 5/1311",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "preparer",
      code: "PREP",
      label: "Prepared By",
      value: "MOHAMAD KHAIRUL IDRIS //M KHAIRUL 0 19 3159297 LICENCE K8-53 E-29FEB28 LOADING SUPV : EUM MYUNG SUB ID : 9304165 AIRCRAFT TYPE : A330-323 PIC NAME: MOHAMMAD HASYIDAN BIN MOH SALLEH SIGN & LIC NO.: ......................",
    });
  });

  test("decodes #35: N/A ENG.WING ICE ON N/A N/A NO ICE ICE ACCUM BLEED/PACKS OFF…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `N/A
ENG.WING ICE ON     N/A     N/A
                 NO ICE  ICE ACCUM
BLEED/PACKS  OFF  181.9     N/A
ENGINE ICE   ON     N/A     N/A
ENG.WING ICE ON     N/A     N/A
************************
REQUIRED LDG DISTANCE`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #36: MESSAGE-----", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: ` MESSAGE-----
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #37: .GTWCXXA 230138 AGM AN B-LRB - SA 23/01:37 YPLM 230130Z AUTO…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.GTWCXXA 230138
	AGM
	AN B-LRB
	-  SA 23/01:37
	YPLM 230130Z AUTO 16014KT 9999 // NCD
	  24/15 Q1016
	SA 23/01:37
	YGEL 230130Z AUTO 27013KT 9999 // OVC058
	  23/10 Q1016
	SA 23/01:37
	YPPD 230130Z AUTO 02004KT 9999 // NCD
	  30/23 Q1013
	SA 23/01:37
	WADD 230130Z 10010KT 9999 FEW018 29/25
	  Q1010 NOSIG`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #38: .GTWCXXA 230138 AGM AN B-LRB - SA 23/01:37 YPLM 230130Z AUTO…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.GTWCXXA 230138
	AGM
	AN B-LRB
	-  SA 23/01:37
	YPLM 230130Z AUTO 16014KT 9999 // NCD
	  24/15 Q1016
	SA 23/01:37
	YGEL 230130Z AUTO 27013KT 9999 // OVC058
	  23/10 Q1016
	SA 23/01:37
	YPPD 230130Z AUTO 02004KT 9999 // NCD
	  30/23 Q1013
	SA 23/01:37
	WADD 230130Z 10010KT 9999 FEW018 29/25
	  Q1010 NOSIG`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #39: W 7KT XW ************************ 135.4 - PLANNED LDG WT 142…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `W 7KT XW
************************
135.4 - PLANNED LDG WT
142.2 - STRUCTURAL
143.0 - LM (4000 - 3/4)
PERF (GO-AROUND)
                 NO ICE  ICE ACCUM
BLEED/PACKS  ON   179.2     N/A
ENGINE ICE   ON     N/A     `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #40: .NDCULUA 230138 AGM AN N492UA - /LANDING DATA ** PART 01 OF …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.NDCULUA 230138
AGM
AN N492UA
-  /LANDING DATA
 ** PART 01 OF 01 **
************************
LANDING DATA BUR RW 08
5802 FT
A320-232 V2527-A5
         *FULL*
TEMP 19C       ALT 30.03
WIND 188/7 MAG
     2KT T`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #41: .PERFFQK 230138 AGM AN CGGNZ/FI QK8161 - FLIGHT :8161 REL 1 …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.PERFFQK 230138
AGM
AN CGGNZ/FI QK8161
-  FLIGHT :8161   REL  1
APR 23 2026 01:38:19Z
WIND      140/07
TEMP      P15
QNH       29.98
GTOW      62000
 
REMARKS
PTOW CALC


-----------
YVR 08R/L4                10804 FT
RT H140                    FLAP  5
FRA       1013            V1   127
RTOP - BLDS ON            VR   132
TRQ  82.3  AT/P44         V2   132
MTOW 62439/A              VFRI 142
                          VCL  154


`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "CGGNZ",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "QK8161",
    });
  });

  test("decodes #42: 10804 FT RT H140 FLAP 5 FRA 1013 V1 127 RTOP - BLDS ON VR 13…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `    10804 FT
RT H140                    FLAP  5
FRA       1013            V1   127
RTOP - BLDS ON            VR   132
TRQ  82.3  AT/P44         V2   132
MTOW 62439/A              VFRI 142
                          `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #43: .HDQQAOO 230138 AGM AN N944SW/MA 869I - BLOCK START REPORT--…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 230138
AGM
AN N944SW/MA 869I
-  BLOCK START REPORT--

CA 084775 TRICOMO     
 117 0:42 B 0:51 CR 0:51
FO 088408 TENNANT     
 117 0:42 B 0:51 CR 0:51

N944SW
22APR UA 5627 SFO-MRY

AD: 47 CH:  0    IN:  0
CRW: 3 AC:  0 SOULS: 50
CARGO:  1418 ZFW: 42998
            GTOW: 46898

MST DEP 01:40
    OUT 01:38
D0 PERF -0:02

* END OF REPORT -- 0138Z


`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N944SW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "869I",
    });
  });

  test("decodes #44: .PERFFQK 230138 AGM AN CGGNZ/FI QK8161 - FLIGHT :8161 REL 1 …", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.PERFFQK 230138
AGM
AN CGGNZ/FI QK8161
-  FLIGHT :8161   REL  1
APR 23 2026 01:38:19Z
WIND      140/07
TEMP      P15
QNH       29.98
GTOW      62000
 
REMARKS
PTOW CALC


-----------
YVR 08R/L4            `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "CGGNZ",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "QK8161",
    });
  });

  test("decodes #45: .HDQQAOO 230138 AGM AN N944SW/MA 869I - BLOCK START REPORT--…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 230138
AGM
AN N944SW/MA 869I
-  BLOCK START REPORT--

CA 084775 TRICOMO     
 117 0:42 B 0:51 CR 0:51
FO 088408 TENNANT     
 117 0:42 B 0:51 CR 0:51

N944SW
22APR UA 5627 SFO-MRY

AD: 47 CH:  0    `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N944SW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "869I",
    });
  });

  test("decodes #46: .DDLIRXA 230137 AGM AN HL7209/MA 455A - WSI FPG INTERSECTION…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.DDLIRXA 230137
	AGM
	AN HL7209/MA 455A
	-  WSI FPG INTERSECTION
	TYPE: TURB CAT
	ID: 27597
	INTERSECTION TIME: 01:35:30Z
	VALID: 00:04:00Z-03:00:00Z
	SEVERITY: OCNL MOD
	ENTRY/EXIT: 3638N13333E / 4009N13950E
	ALT: FL300-FL380
	MVT:
	DISC: VERTICAL WIND SHEAR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #47: .DDLIRXA 230137 AGM AN HL7209/MA 455A - WSI FPG INTERSECTION…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.DDLIRXA 230137
	AGM
	AN HL7209/MA 455A
	-  WSI FPG INTERSECTION
	TYPE: TURB CAT
	ID: 27597
	INTERSECTION TIME: 01:35:30Z
	VALID: 00:04:00Z-03:00:00Z
	SEVERITY: OCNL MOD
	ENTRY/EXIT: 3638N13333E / 4009N13950E
	ALT: FL300-FL380
	MVT:
	DISC: VERTICAL WIND SHEAR`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(2);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
  });

  test("decodes #48: .HDQQAOO 230135 AGM AN N944SW/MA 868I - ** AUTO GENERATED TA…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.HDQQAOO 230135
AGM
AN N944SW/MA 868I
-  ** AUTO GENERATED TAKEOFF PERFORMANCE **
FLT 5627   RLS 1   0135Z
WIND 257/13  17C   30.15
------------------------
   GTOW 46898    CG 11.1
    ZFW 42998    CG 12.7
TO FUEL  3900

A 5 /0  B 8 /0  C 8 /0 
D 8 /0  E 8 /0  F 10/0 
           AFT 1418
 
 
 
 
REMARKS
NONE
 
 
 
 
 
KSFO 28L            FLEX
MTOW 47153    GTOW 46898
BL OPEN A/I OFF   VT 177
FX41C RLN N1 85.1 V2 137
TRIM 7.8          VR 133
FLAPS 20          V1 128
 
KSFO 28L            NORM
MTOW 47981    GTOW 46898
BL OPEN A/I OFF   VT 177
NORM RLN N1 90.6  V2 137
TRIM 7.8          VR 131
FLAPS 20          V1 126
 
KSFO 28L           11381
SPECIAL  ACCEL(AFE) 1087
REACHING D1.8 SFO OR
D0.7 ISFO (D0.7 WEST OF
ISFO) RT H305
 
 
KSFO 28R            FLEX
MTOW 47153    GTOW 46898
BL OPEN A/I OFF   VT 177
FX41C RLN N1 85.1 V2 137
TRIM 7.8          VR 133
FLAPS 20          V1 128
 
KSFO 28R            NORM
MTOW 47981    GTOW 46898
BL OPEN A/I OFF   VT 177
NORM RLN N1 90.6  V2 137
TRIM 7.8          VR 131
FLAPS 20          V1 126
 
KSFO 28R           11870
SPECIAL  ACCEL(AFE) 1087
REACHING D2.3 SFO OR
D1.1 IGWQ (D1.1 WEST OF
IGWQ) RT H305
 
 


`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "N944SW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "MA",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "868I",
    });
  });

  test("decodes #49: N/A ENG.WING ICE ON N/A N/A NO ICE ICE ACCUM BLEED/PACKS OFF…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: ` N/A
ENG.WING ICE ON     N/A     N/A
                 NO ICE  ICE ACCUM
BLEED/PACKS  OFF  165.5     N/A
ENGINE ICE   ON     N/A     N/A
ENG.WING ICE ON     N/A     N/A
************************
REQUIRED LDG DISTANC`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
  });

  test("decodes #50: .ATISAXS 230137 AGM AN VH-VFV/FI JQ0000 - YBSU ENR ATIS E 01…", () => {
    const decodeResult = plugin.decode({
      label: "C1",
      text: `.ATISAXS 230137
AGM
AN VH-VFV/FI JQ0000
-  
YBSU ENR ATIS E
0120Z
ATIS YBSU E   230120
  RWY: 13
+ WIND: 180/18 XW18
  VIS: GT 10KM
+ CLD: SCT030
+ TMP: 25
+ QNH: 1022
END OF ATIS E`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-c1-loadsheet");
    expect(decodeResult.formatted.description).toBe("Loadsheet / Load Info (ground-to-air uplink)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Loadsheet / Load Info — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "marker",
      code: "AGM",
      label: "Marker",
      value: "AGM (Air-Ground Message)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tail",
      code: "TAIL",
      label: "Aircraft Registration",
      value: "VH-VFV",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "address_qualifier",
      code: "ADDRQ",
      label: "Address Qualifier",
      value: "FI",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "sequence",
      code: "SEQ",
      label: "Message Sequence",
      value: "JQ0000",
    });
  });

});
