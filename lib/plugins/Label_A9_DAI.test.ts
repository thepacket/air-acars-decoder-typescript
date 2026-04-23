import { MessageDecoder } from '../MessageDecoder';
import { Label_A9_DAI } from './Label_A9_DAI';

describe('Label_A9_DAI', () => {
  let plugin: Label_A9_DAI;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_A9_DAI(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-a9-dai");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["A9"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "A9", text: '' });
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
  });

  test("decodes #1: /YHMATYA.TI2/CYHM ARR ATIS Y 2200Z 32010KT 280V040 15SM FEW0…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/YHMATYA.TI2/CYHM ARR ATIS Y
2200Z 32010KT 280V040
15SM FEW030 FEW040
FEW070 SCT250 21/03
A2991 APCH RNAV Z RWY
30. LDG AND DEP RWY 30.
BIRD ACT INVOF ARPT.
INFORM CYHM ATC INFO YCAF3`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "CYHM",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "Y (Yankee)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2200Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "320° @ 10 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "15 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 3,000 ft, Few 4,000 ft, Few 7,000 ft, Scattered 25,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+21°C / +3°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.91 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "approach",
      code: "APCH",
      label: "Approach",
      value: "RNAV Z RWY 30",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "30",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "hazard",
      code: "HAZARD",
      label: "Wildlife Hazard",
      value: "BIRD ACT INVOF ARPT",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "atis_acknowledge",
      code: "ATIS_ACK",
      label: "Acknowledge on Contact",
      value: "Inform CYHM ATC — Info Y (ref CAF3)",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `32010KT 280V040
15SM FEW030 FEW040
FEW070 SCT250 21/03
A2991 APCH RNAV Z RWY
30. LDG AND DEP RWY 30.
BIRD ACT INVOF ARPT.
INFORM CYHM ATC INFO YCAF3`,
    });
  });

  test("decodes #2: /ATSLAXA.TI2/KMIA ARR ATIS I 2153Z MIA ARR INFO I 2153Z. 090…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSLAXA.TI2/KMIA ARR ATIS I
	2153Z MIA ARR INFO I 2153Z.
	09016G21KT 10SM FEW045 SCT060
	SCT250 24/14 A3009 (THREE ZERO
	ZERO NINER) RMK AO2 SLP188
	T02440139. APCHS BEING
	CONDUCTED TO PARL CONVERGING
	AND INTERSECTING RWYS.
	ARRIVALS EXPECT ILS RWY 8R,
	RWY 9, RWY 12 . RNAV OR GPS
	APCH RWY 8L. LDA RWY 12 TO
	HOLD SHORT OF RWY 9 IS 8100FT.
	LDA RWY 9 TO HOLD SHORT OF RWY
	12 IS 9750FT. IF UNA TO HOLD
	SHORT NTFY APCH ON INITIAL CTC
	OR ASAP. RWY 8L, RWY 8R FREQ
	118.3 RWY 9, RWY 12 FREQ
	123.9. NOTICE TO AIR MEN. TWY
	N CLSD BTN TWY, Z AND TWY M2,
	TWY P CLSD BTN TWY, Z AND TWY
	Q2. DHP, VKZ VOR OTS. BIRDS
	INVOF MIA. ALL ACFT READ BACK
	ALL HOLD SHRT INSTRUCTIONS AND
	ASSIGNED ALT. ...ADVS YOU HAVE
	INFO I.362F`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KMIA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "I (India)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2153Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "090° @ 16 kt (gust 21 kt)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 4,500 ft, Scattered 6,000 ft, Scattered 25,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+24°C / +14°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "30.09 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "taxiway_closures",
      code: "TWYCLSD",
      label: "Taxiway Closures",
      value: "TWY N (TWY Z AND TWY M2); TWY P (TWY Z AND TWY Q2. DHP VKZ VOR OTS. BIRDS INVOF MIA. ALL ACFT READ BACK ALL)",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `MIA ARR INFO I 2153Z.
	09016G21KT 10SM FEW045 SCT060
	SCT250 24/14 A3009 (THREE ZERO
	ZERO NINER) RMK AO2 SLP188
	T02440139. APCHS BEING
	CONDUCTED TO PARL CONVERGING
	AND INTERSECTING RWYS.
	ARRIVALS EXPECT ILS RWY 8R,
	RWY 9, RWY 12 . RNAV OR GPS
	APCH RWY 8L. LDA RWY 12 TO
	HOLD SHORT OF RWY 9 IS 8100FT.
	LDA RWY 9 TO HOLD SHORT OF RWY
	12 IS 9750FT. IF UNA TO HOLD
	SHORT NTFY APCH ON INITIAL CTC
	OR ASAP. RWY 8L, RWY 8R FREQ
	118.3 RWY 9, RWY 12 FREQ
	123.9. NOTICE TO AIR MEN. TWY
	N CLSD BTN TWY, Z AND TWY M2,
	TWY P CLSD BTN TWY, Z AND TWY
	Q2. DHP, VKZ VOR OTS. BIRDS
	INVOF MIA. ALL ACFT READ BACK
	ALL HOLD SHRT INSTRUCTIONS AND
	ASSIGNED ALT. ...ADVS YOU HAVE
	INFO I.362F`,
    });
  });

  test("decodes #3: /HKGATYA.TI2/VHHH DEP ATIS P 2207Z DEPARTURES, RWY 25C. RWY …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/HKGATYA.TI2/VHHH DEP ATIS P
	2207Z
	DEPARTURES, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	WIND 220/07KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA=
	ACKNOWLEDGE INFO P ON
	FIRST CTC WITH DELIVERY
	.B446`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "P (Papa)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2207Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "acknowledge_atis_letter",
      code: "ACK_ATIS",
      label: "Acknowledge ATIS Info",
      value: "P (Papa)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "acknowledge_contact",
      code: "ACK_CTC",
      label: "Acknowledge On First Contact With",
      value: "DELIVERY",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `DEPARTURES, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	WIND 220/07KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA=
	ACKNOWLEDGE INFO P ON
	FIRST CTC WITH DELIVERY
	.B446`,
    });
  });

  test("decodes #4: /HKGATYA.TI2/VHHH DEP ATIS P 2207Z DEPARTURES, RWY 25C. RWY …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/HKGATYA.TI2/VHHH DEP ATIS P
	2207Z
	DEPARTURES, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	WIND 220/07KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA=
	ACKNOWLEDGE INFO P ON
	FIRST CTC WITH DELIVERY
	.B446`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "P (Papa)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2207Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "acknowledge_atis_letter",
      code: "ACK_ATIS",
      label: "Acknowledge ATIS Info",
      value: "P (Papa)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "acknowledge_contact",
      code: "ACK_CTC",
      label: "Acknowledge On First Contact With",
      value: "DELIVERY",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `DEPARTURES, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	WIND 220/07KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA=
	ACKNOWLEDGE INFO P ON
	FIRST CTC WITH DELIVERY
	.B446`,
    });
  });

  test("decodes #5: /HKGATYA.TI2/VHHH ARR ATIS G 2206Z ARRIVALS, RWY 25C. EXP IL…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/HKGATYA.TI2/VHHH ARR ATIS G
	2206Z
	ARRIVALS, RWY 25C.
	EXP ILS  APCH, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	EXP RWY 25R AFTER
	2300Z.
	WIND 200/06KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA= ACKNOWLEDGE
	INFO G ON FIRST CTC
	WITH APP.EFAB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "G (Golf)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2206Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "acknowledge_atis_letter",
      code: "ACK_ATIS",
      label: "Acknowledge ATIS Info",
      value: "G (Golf)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "acknowledge_contact",
      code: "ACK_CTC",
      label: "Acknowledge On First Contact With",
      value: "APP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `ARRIVALS, RWY 25C.
	EXP ILS  APCH, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	EXP RWY 25R AFTER
	2300Z.
	WIND 200/06KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA= ACKNOWLEDGE
	INFO G ON FIRST CTC
	WITH APP.EFAB`,
    });
  });

  test("decodes #6: /HKGATYA.TI2/VHHH ARR ATIS G 2206Z ARRIVALS, RWY 25C. EXP IL…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/HKGATYA.TI2/VHHH ARR ATIS G
	2206Z
	ARRIVALS, RWY 25C.
	EXP ILS  APCH, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	EXP RWY 25R AFTER
	2300Z.
	WIND 200/06KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA= ACKNOWLEDGE
	INFO G ON FIRST CTC
	WITH APP.EFAB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "G (Golf)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2206Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "acknowledge_atis_letter",
      code: "ACK_ATIS",
      label: "Acknowledge ATIS Info",
      value: "G (Golf)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "acknowledge_contact",
      code: "ACK_CTC",
      label: "Acknowledge On First Contact With",
      value: "APP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `ARRIVALS, RWY 25C.
	EXP ILS  APCH, RWY 25C.
	RWY 25L IS CLSD FOR
	MAINT.
	RWY 25R NON
	OPERATIONAL.
	EXP RWY 25R AFTER
	2300Z.
	WIND 200/06KT VIS 10KM
	CLD FEW 1500FT SCT
	3000FT T27 DP23 QNH
	1007HPA= ACKNOWLEDGE
	INFO G ON FIRST CTC
	WITH APP.EFAB`,
    });
  });

  test("decodes #7: /YHMATYA.TI2/CYHM ARR ATIS Y 2200Z 32010KT 280V040 15SM FEW0…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/YHMATYA.TI2/CYHM ARR ATIS Y
2200Z 32010KT 280V040
15SM FEW030 FEW040
FEW070 SCT250 21/03
A2991 APCH RNAV Z RWY
30. LDG AND DEP RWY 30.
BIRD ACT INVOF ARPT.
INFORM CYHM ATC INFO YCAF3`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "CYHM",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "Y (Yankee)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2200Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "320° @ 10 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "15 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 3,000 ft, Few 4,000 ft, Few 7,000 ft, Scattered 25,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+21°C / +3°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.91 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "approach",
      code: "APCH",
      label: "Approach",
      value: "RNAV Z RWY 30",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "30",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "hazard",
      code: "HAZARD",
      label: "Wildlife Hazard",
      value: "BIRD ACT INVOF ARPT",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "atis_acknowledge",
      code: "ATIS_ACK",
      label: "Acknowledge on Contact",
      value: "Inform CYHM ATC — Info Y (ref CAF3)",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `32010KT 280V040
15SM FEW030 FEW040
FEW070 SCT250 21/03
A2991 APCH RNAV Z RWY
30. LDG AND DEP RWY 30.
BIRD ACT INVOF ARPT.
INFORM CYHM ATC INFO YCAF3`,
    });
  });

  test("decodes #8: D . TWY, G BTN RWY, 35 AND TWY J . TWY K1 CLSD, TWY K6 CLSD …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: ` D .
TWY, G BTN RWY, 35 AND
TWY J . TWY K1 CLSD, TWY
K6 CLSD TWY S4 CLSD .
RWY 9 RIGHT HOLD PAD
CLSD. TOWER FREQ 118.5
FOR ALL RUNWAYS. ALL RWY
CONDITION CODES 5 5 5 AT
1600Z. ...ADVS YOU HAVE
INFO Z.643B
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(4);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "taxiway_closures",
      code: "TWYCLSD",
      label: "Taxiway Closures",
      value: "TWY G (RWY 35 AND TWY J); TWY K1; TWY K6; TWY S4",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "runway_closures",
      code: "RWYCLSD",
      label: "Runway Closures",
      value: "RWY 9 RIGHT hold pad",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "tower_frequency",
      code: "TWRFRQ",
      label: "Tower Frequency",
      value: "118.5 MHz (all runways. all rwy condition codes 5 5 5 at 1600z. ...advs you have info z.643b)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `D .
TWY, G BTN RWY, 35 AND
TWY J . TWY K1 CLSD, TWY
K6 CLSD TWY S4 CLSD .
RWY 9 RIGHT HOLD PAD
CLSD. TOWER FREQ 118.5
FOR ALL RUNWAYS. ALL RWY
CONDITION CODES 5 5 5 AT
1600Z. ...ADVS YOU HAVE
INFO Z.643B`,
    });
  });

  test("decodes #9: /ATSBRXA.TI2/KSFO ARR ATIS M 2156Z SFO ATIS INFO M 2156Z. 03…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSBRXA.TI2/KSFO ARR ATIS M
	2156Z SFO ATIS INFO M 2156Z. 03003KT 10SM FEW025
	SCT030 BKN038 17/11 A3017 (THREE ZERO ONE
	SEVEN). SIMUL CLSLY SPCD DPNDNT ILS RY 28R AND
	ILS RY 28L APP IN USE. DEPG RWYS 28L, 28R.
	DEPG ACFT SHOULD BE PREPARED FOR A SHORT
	NOTICE RY CHANGE. RY 1L, 1R CLSD. TWY A1, A2,
	F1, J, L2, CLSD. TWY A CLSD BTN B AND, L, TWY
	B CLSD BTN TWY F AND, TWY G, TWY H CLSD BTN TY
	B AND, RY 1R, TWY L CLSD BTN RWY19L AND E AND,
	BETWEEN A1 AND M, TWY M1 BETWEEN B AND RWY1L.
	TWY A CLSD BTN GATES D8 AND D7. GATES D7 AND
	D6 WILL PUSH ON TWY A TAIL NORTH. SFO VOR OTS.
	MULTIPLE CRANES VCY OF SFO CHECK NOTAMS. NO
	HOLDING PADS AVAILABLE IF NOT FULLY READY ON
	TAXI ADVISE GROUND. ...ADVS YOU HAVE INFO M.12A1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KSFO",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "M (Mike)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2156Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "030° @ 3 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 2,500 ft, Scattered 3,000 ft, Broken 3,800 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+17°C / +11°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "30.17 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "taxiway_closures",
      code: "TWYCLSD",
      label: "Taxiway Closures",
      value: "TWY A (B AND L); TWY B (TWY F AND TWY G); TWY H (TY B AND RY 1R); TWY L (RWY19L AND E AND BETWEEN A1 AND M TWY M1 BETWEEN B AND RWY1L.); TWY A (GATES D8 AND D7. GATES D7 AND D6 WILL PUSH ON TWY A TAIL NORTH. SFO VOR OTS. MULTIPLE CRANES VCY OF SFO CHECK NOTAMS. NO HOLDING PADS AVAILABLE IF NOT FULLY READY ON TAXI ADVISE GROUND. ...ADVS YOU HAVE INFO M.12A1)",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `SFO ATIS INFO M 2156Z. 03003KT 10SM FEW025
	SCT030 BKN038 17/11 A3017 (THREE ZERO ONE
	SEVEN). SIMUL CLSLY SPCD DPNDNT ILS RY 28R AND
	ILS RY 28L APP IN USE. DEPG RWYS 28L, 28R.
	DEPG ACFT SHOULD BE PREPARED FOR A SHORT
	NOTICE RY CHANGE. RY 1L, 1R CLSD. TWY A1, A2,
	F1, J, L2, CLSD. TWY A CLSD BTN B AND, L, TWY
	B CLSD BTN TWY F AND, TWY G, TWY H CLSD BTN TY
	B AND, RY 1R, TWY L CLSD BTN RWY19L AND E AND,
	BETWEEN A1 AND M, TWY M1 BETWEEN B AND RWY1L.
	TWY A CLSD BTN GATES D8 AND D7. GATES D7 AND
	D6 WILL PUSH ON TWY A TAIL NORTH. SFO VOR OTS.
	MULTIPLE CRANES VCY OF SFO CHECK NOTAMS. NO
	HOLDING PADS AVAILABLE IF NOT FULLY READY ON
	TAXI ADVISE GROUND. ...ADVS YOU HAVE INFO M.12A1`,
    });
  });

  test("decodes #10: /ATSBRXA.TI2/KSFO ARR ATIS M 2156Z SFO ATIS INFO M 2156Z. 03…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSBRXA.TI2/KSFO ARR ATIS M
	2156Z SFO ATIS INFO M 2156Z. 03003KT 10SM FEW025
	SCT030 BKN038 17/11 A3017 (THREE ZERO ONE
	SEVEN). SIMUL CLSLY SPCD DPNDNT ILS RY 28R AND
	ILS RY 28L APP IN USE. DEPG RWYS 28L, 28R.
	DEPG ACFT SHOULD BE PREPARED FOR A SHORT
	NOTICE RY CHANGE. RY 1L, 1R CLSD. TWY A1, A2,
	F1, J, L2, CLSD. TWY A CLSD BTN B AND, L, TWY
	B CLSD BTN TWY F AND, TWY G, TWY H CLSD BTN TY
	B AND, RY 1R, TWY L CLSD BTN RWY19L AND E AND,
	BETWEEN A1 AND M, TWY M1 BETWEEN B AND RWY1L.
	TWY A CLSD BTN GATES D8 AND D7. GATES D7 AND
	D6 WILL PUSH ON TWY A TAIL NORTH. SFO VOR OTS.
	MULTIPLE CRANES VCY OF SFO CHECK NOTAMS. NO
	HOLDING PADS AVAILABLE IF NOT FULLY READY ON
	TAXI ADVISE GROUND. ...ADVS YOU HAVE INFO M.12A1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KSFO",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "M (Mike)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "2156Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "030° @ 3 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 2,500 ft, Scattered 3,000 ft, Broken 3,800 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+17°C / +11°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "30.17 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "taxiway_closures",
      code: "TWYCLSD",
      label: "Taxiway Closures",
      value: "TWY A (B AND L); TWY B (TWY F AND TWY G); TWY H (TY B AND RY 1R); TWY L (RWY19L AND E AND BETWEEN A1 AND M TWY M1 BETWEEN B AND RWY1L.); TWY A (GATES D8 AND D7. GATES D7 AND D6 WILL PUSH ON TWY A TAIL NORTH. SFO VOR OTS. MULTIPLE CRANES VCY OF SFO CHECK NOTAMS. NO HOLDING PADS AVAILABLE IF NOT FULLY READY ON TAXI ADVISE GROUND. ...ADVS YOU HAVE INFO M.12A1)",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `SFO ATIS INFO M 2156Z. 03003KT 10SM FEW025
	SCT030 BKN038 17/11 A3017 (THREE ZERO ONE
	SEVEN). SIMUL CLSLY SPCD DPNDNT ILS RY 28R AND
	ILS RY 28L APP IN USE. DEPG RWYS 28L, 28R.
	DEPG ACFT SHOULD BE PREPARED FOR A SHORT
	NOTICE RY CHANGE. RY 1L, 1R CLSD. TWY A1, A2,
	F1, J, L2, CLSD. TWY A CLSD BTN B AND, L, TWY
	B CLSD BTN TWY F AND, TWY G, TWY H CLSD BTN TY
	B AND, RY 1R, TWY L CLSD BTN RWY19L AND E AND,
	BETWEEN A1 AND M, TWY M1 BETWEEN B AND RWY1L.
	TWY A CLSD BTN GATES D8 AND D7. GATES D7 AND
	D6 WILL PUSH ON TWY A TAIL NORTH. SFO VOR OTS.
	MULTIPLE CRANES VCY OF SFO CHECK NOTAMS. NO
	HOLDING PADS AVAILABLE IF NOT FULLY READY ON
	TAXI ADVISE GROUND. ...ADVS YOU HAVE INFO M.12A1`,
    });
  });

  test("decodes #11: /SINCAYA.TI2/WSSS ARR ATIS W 0130Z METREPORT 0130Z ILS APCHR…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/SINCAYA.TI2/WSSS ARR ATIS W  0130Z 
	METREPORT 0130Z
	 ILS APCHRWY 02L
	SIMUL INDEPENDENT ILS
	AND VISUAL APPROACHES
	ARE BEING CONDUCTED ON
	RWY 02.
	RWY 02C/20C RAPID EXIT
	TAXIWAY INDICATOR
	LIGHTS OFF
	WIND 130/ 04KT VRB
	BTN010 AND150
	VIS 10KM
	CLD FEW 1600FT
	T30 DP25
	QNH 1009HPA
	NOSIG
	ACK ATIS W
	81E5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "WSSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "W (Whiskey)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `METREPORT 0130Z
	 ILS APCHRWY 02L
	SIMUL INDEPENDENT ILS
	AND VISUAL APPROACHES
	ARE BEING CONDUCTED ON
	RWY 02.
	RWY 02C/20C RAPID EXIT
	TAXIWAY INDICATOR
	LIGHTS OFF
	WIND 130/ 04KT VRB
	BTN010 AND150
	VIS 10KM
	CLD FEW 1600FT
	T30 DP25
	QNH 1009HPA
	NOSIG
	ACK ATIS W
	81E5`,
    });
  });

  test("decodes #12: /SINCAYA.TI2/WSSS ARR ATIS W 0130Z METREPORT 0130Z ILS APCHR…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/SINCAYA.TI2/WSSS ARR ATIS W  0130Z 
	METREPORT 0130Z
	 ILS APCHRWY 02L
	SIMUL INDEPENDENT ILS
	AND VISUAL APPROACHES
	ARE BEING CONDUCTED ON
	RWY 02.
	RWY 02C/20C RAPID EXIT
	TAXIWAY INDICATOR
	LIGHTS OFF
	WIND 130/ 04KT VRB
	BTN010 AND150
	VIS 10KM
	CLD FEW 1600FT
	T30 DP25
	QNH 1009HPA
	NOSIG
	ACK ATIS W
	81E5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "WSSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "W (Whiskey)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `METREPORT 0130Z
	 ILS APCHRWY 02L
	SIMUL INDEPENDENT ILS
	AND VISUAL APPROACHES
	ARE BEING CONDUCTED ON
	RWY 02.
	RWY 02C/20C RAPID EXIT
	TAXIWAY INDICATOR
	LIGHTS OFF
	WIND 130/ 04KT VRB
	BTN010 AND150
	VIS 10KM
	CLD FEW 1600FT
	T30 DP25
	QNH 1009HPA
	NOSIG
	ACK ATIS W
	81E5`,
    });
  });

  test("decodes #13: /FUKDLYA.TI2/RJTT ARR ATIS X 0139Z M0130 (APCH)ILS Z RWY34L/…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/FUKDLYA.TI2/RJTT ARR ATIS X
	0139Z M0130
	
	(APCH)ILS Z RWY34L/ILS Z RWY34R
	LDG RWY 34L/34R
	DEP RWY 05/34R
	DEP FREQ 126.0 FM RWY05.
	         120.8 FM RWY34R,
	SIMUL PARL ILS APCHS TO RWY34L/R 
	ARE INPR,
	
	M
	230130Z 35005KT 30KM -RA FEW030CU 
	SCT050SC OVC100AS 18/10
	Q1011/A2987=
	
	Q/TWO NINE EIGHT SEVEN
	STP
	
	F470`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "X (X-ray)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0139Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "350° @ 5 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+18°C / +10°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.87 inHg",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "34L/34R",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `M0130
	
	(APCH)ILS Z RWY34L/ILS Z RWY34R
	LDG RWY 34L/34R
	DEP RWY 05/34R
	DEP FREQ 126.0 FM RWY05.
	         120.8 FM RWY34R,
	SIMUL PARL ILS APCHS TO RWY34L/R 
	ARE INPR,
	
	M
	230130Z 35005KT 30KM -RA FEW030CU 
	SCT050SC OVC100AS 18/10
	Q1011/A2987=
	
	Q/TWO NINE EIGHT SEVEN
	STP
	
	F470`,
    });
  });

  test("decodes #14: /FUKDLYA.TI2/RJTT ARR ATIS X 0139Z M0130 (APCH)ILS Z RWY34L/…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/FUKDLYA.TI2/RJTT ARR ATIS X
	0139Z M0130
	
	(APCH)ILS Z RWY34L/ILS Z RWY34R
	LDG RWY 34L/34R
	DEP RWY 05/34R
	DEP FREQ 126.0 FM RWY05.
	         120.8 FM RWY34R,
	SIMUL PARL ILS APCHS TO RWY34L/R 
	ARE INPR,
	
	M
	230130Z 35005KT 30KM -RA FEW030CU 
	SCT050SC OVC100AS 18/10
	Q1011/A2987=
	
	Q/TWO NINE EIGHT SEVEN
	STP
	
	F470`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "X (X-ray)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0139Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "350° @ 5 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+18°C / +10°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.87 inHg",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "34L/34R",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `M0130
	
	(APCH)ILS Z RWY34L/ILS Z RWY34R
	LDG RWY 34L/34R
	DEP RWY 05/34R
	DEP FREQ 126.0 FM RWY05.
	         120.8 FM RWY34R,
	SIMUL PARL ILS APCHS TO RWY34L/R 
	ARE INPR,
	
	M
	230130Z 35005KT 30KM -RA FEW030CU 
	SCT050SC OVC100AS 18/10
	Q1011/A2987=
	
	Q/TWO NINE EIGHT SEVEN
	STP
	
	F470`,
    });
  });

  test("decodes #15: /ATSCXXA.TI2/YBBN DEP ATIS X 0119Z ATIS YBBN X 230119 APCH: …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSCXXA.TI2/YBBN DEP ATIS X
0119Z ATIS YBBN X   230119
   APCH: EXP INST APCH
   RWY: 19L AND R
   OPR INFO: INDEPENDENT PARALLEL
DEPARTURES IN PROGRESS
+ WND: 140/14, MAX XW 16.
   VIS: GREATER THAN 10 KM 
   CLD: FEW040
+ TMP: 25
   QNH: 1022B84F
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "YBBN",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "X (X-ray)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0119Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 4,000 ft",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `ATIS YBBN X   230119
   APCH: EXP INST APCH
   RWY: 19L AND R
   OPR INFO: INDEPENDENT PARALLEL
DEPARTURES IN PROGRESS
+ WND: 140/14, MAX XW 16.
   VIS: GREATER THAN 10 KM 
   CLD: FEW040
+ TMP: 25
   QNH: 1022B84F`,
    });
  });

  test("decodes #16: /ICNDLXA.TI2/RKSI ARR ATIS T 0130Z EXP SIMUL PARALLEL ILS AP…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ICNDLXA.TI2/RKSI ARR ATIS T
	0130Z
	EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RKSI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
  });

  test("decodes #17: /ICNDLXA.TI2/RKSI ARR ATIS T 0130Z EXP SIMUL PARALLEL ILS AP…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ICNDLXA.TI2/RKSI ARR ATIS T
	0130Z
	EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RKSI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
  });

  test("decodes #18: /ATSCXXA.TI2/YBBN DEP ATIS X 0119Z ATIS YBBN X 230119 APCH: …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSCXXA.TI2/YBBN DEP ATIS X
0119Z ATIS YBBN X   230119
   APCH: EXP INST APCH
   RWY: 19L AND R
   OPR INFO: INDEPENDENT PARALLEL
DEPARTURES IN PROGRESS
+ WND: 140/14, MAX XW 16.
   VIS: GREATER THAN 10 KM 
   C`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "YBBN",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "X (X-ray)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0119Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `ATIS YBBN X   230119
   APCH: EXP INST APCH
   RWY: 19L AND R
   OPR INFO: INDEPENDENT PARALLEL
DEPARTURES IN PROGRESS
+ WND: 140/14, MAX XW 16.
   VIS: GREATER THAN 10 KM 
   C`,
    });
  });

  test("decodes #19: /TPECAYA.TI2/RCTP ARR ATIS H 0130Z EXP ILS APCH RWY23R AND R…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/TPECAYA.TI2/RCTP ARR ATIS H
0130Z 
EXP ILS APCH
RWY23R AND RWY23L
ARR/DEP.
WIND 240/23KT 
VIS  10 KM OR MORE 
CLD
 FEW  2000FT 
T 30 DP 21 QNH 1006HPA 
WS ALL RWY 
NOSIG
LOW LVL WS ADVISORY IN
EFFECT. CTN B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RCTP",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "H (Hotel)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH
RWY23R AND RWY23L
ARR/DEP.
WIND 240/23KT 
VIS  10 KM OR MORE 
CLD
 FEW  2000FT 
T 30 DP 21 QNH 1006HPA 
WS ALL RWY 
NOSIG
LOW LVL WS ADVISORY IN
EFFECT. CTN B`,
    });
  });

  test("decodes #20: /SELATYA.TI2/RKSS ARR ATIS P 0100Z EXP ILS RWY32R APP DEP RW…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/SELATYA.TI2/RKSS ARR ATIS P
	0100Z EXP ILS RWY32R APP
	DEP RWY32L
	SEOUL APP FREQ WILL BE 119.1
	SEOUL DEP FREQ WILL BE 125.15
	RWY32R TOUCHDOWN WND 070 AT 4 KTS
	CAV-OK
	TP 18 C
	DP 04
	QNH 1012 HPA 2988 INCHES
	TREND WEATHER
	NOSIG
	GPS SIGNALS ARE UNRELIABLE OR LOST INTERMITTENTLY IN INCHEON F I R
	ADVISE ON INITIAL CONTACT YOU HAVE INFO PA8AC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RKSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "P (Papa)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0100Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS RWY32R APP
	DEP RWY32L
	SEOUL APP FREQ WILL BE 119.1
	SEOUL DEP FREQ WILL BE 125.15
	RWY32R TOUCHDOWN WND 070 AT 4 KTS
	CAV-OK
	TP 18 C
	DP 04
	QNH 1012 HPA 2988 INCHES
	TREND WEATHER
	NOSIG
	GPS SIGNALS ARE UNRELIABLE OR LOST INTERMITTENTLY IN INCHEON F I R
	ADVISE ON INITIAL CONTACT YOU HAVE INFO PA8AC`,
    });
  });

  test("decodes #21: /SELATYA.TI2/RKSS ARR ATIS P 0100Z EXP ILS RWY32R APP DEP RW…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/SELATYA.TI2/RKSS ARR ATIS P
	0100Z EXP ILS RWY32R APP
	DEP RWY32L
	SEOUL APP FREQ WILL BE 119.1
	SEOUL DEP FREQ WILL BE 125.15
	RWY32R TOUCHDOWN WND 070 AT 4 KTS
	CAV-OK
	TP 18 C
	DP 04
	QNH 1012 HPA 2988 INCHES
	TREND WEATHER
	NOSIG
	GPS SIGNALS ARE UNRELIABLE OR LOST INTERMITTENTLY IN INCHEON F I R
	ADVISE ON INITIAL CONTACT YOU HAVE INFO PA8AC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RKSS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "P (Papa)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0100Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS RWY32R APP
	DEP RWY32L
	SEOUL APP FREQ WILL BE 119.1
	SEOUL DEP FREQ WILL BE 125.15
	RWY32R TOUCHDOWN WND 070 AT 4 KTS
	CAV-OK
	TP 18 C
	DP 04
	QNH 1012 HPA 2988 INCHES
	TREND WEATHER
	NOSIG
	GPS SIGNALS ARE UNRELIABLE OR LOST INTERMITTENTLY IN INCHEON F I R
	ADVISE ON INITIAL CONTACT YOU HAVE INFO PA8AC`,
    });
  });

  test("decodes #22: /FUKDLYA.TI2/RJBB ARR ATIS O 0138Z M0130 (APCH)ILS Z RWY06R …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/FUKDLYA.TI2/RJBB ARR ATIS O
	0138Z M0130
	
	(APCH)ILS Z RWY06R
	LDG RWY 06R
	DEP RWY 06L
	DEP FREQ 119.2.
	
	M
	230130Z 05015KT 4500M RA BR FEW008ST 
	BKN045SC 15/14 Q1008/A2977=
	
	Q/TWO NINE SEVEN SEVEN
	STP
	
	EED5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RJBB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "O (Oscar)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0138Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "050° @ 15 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+15°C / +14°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.77 inHg",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "06R",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `M0130
	
	(APCH)ILS Z RWY06R
	LDG RWY 06R
	DEP RWY 06L
	DEP FREQ 119.2.
	
	M
	230130Z 05015KT 4500M RA BR FEW008ST 
	BKN045SC 15/14 Q1008/A2977=
	
	Q/TWO NINE SEVEN SEVEN
	STP
	
	EED5`,
    });
  });

  test("decodes #23: /FUKDLYA.TI2/RJBB ARR ATIS O 0138Z M0130 (APCH)ILS Z RWY06R …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/FUKDLYA.TI2/RJBB ARR ATIS O
	0138Z M0130
	
	(APCH)ILS Z RWY06R
	LDG RWY 06R
	DEP RWY 06L
	DEP FREQ 119.2.
	
	M
	230130Z 05015KT 4500M RA BR FEW008ST 
	BKN045SC 15/14 Q1008/A2977=
	
	Q/TWO NINE SEVEN SEVEN
	STP
	
	EED5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RJBB",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "O (Oscar)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0138Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "050° @ 15 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+15°C / +14°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.77 inHg",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "06R",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `M0130
	
	(APCH)ILS Z RWY06R
	LDG RWY 06R
	DEP RWY 06L
	DEP FREQ 119.2.
	
	M
	230130Z 05015KT 4500M RA BR FEW008ST 
	BKN045SC 15/14 Q1008/A2977=
	
	Q/TWO NINE SEVEN SEVEN
	STP
	
	EED5`,
    });
  });

  test("decodes #24: /FUKDLYA.TI2/RJFF ARR ATIS K 0138Z M0130 (APCH)RNP RWY16L LD…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/FUKDLYA.TI2/RJFF ARR ATIS K
0138Z M0130

(APCH)RNP RWY16L
LDG RWY 16L
DEP RWY 16L/16R
DEP FREQ 127.9
ADZ FUKUOKA APP IF UNA
 RNP 
APCH
INFORM YR LDG RWY TO
 FUKUOKA 
TWR ON INITIAL CTC.

M
230130Z 06006KT`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RJFF",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "K (Kilo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0138Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "060° @ 6 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "16L",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `M0130

(APCH)RNP RWY16L
LDG RWY 16L
DEP RWY 16L/16R
DEP FREQ 127.9
ADZ FUKUOKA APP IF UNA
 RNP 
APCH
INFORM YR LDG RWY TO
 FUKUOKA 
TWR ON INITIAL CTC.

M
230130Z 06006KT`,
    });
  });

  test("decodes #25: /FUKDLYA.TI2/RJFF ARR ATIS K 0138Z M0130 (APCH)RNP RWY16L LD…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/FUKDLYA.TI2/RJFF ARR ATIS K
0138Z M0130

(APCH)RNP RWY16L
LDG RWY 16L
DEP RWY 16L/16R
DEP FREQ 127.9
ADZ FUKUOKA APP IF UNA RNP 
APCH
INFORM YR LDG RWY TO FUKUOKA 
TWR ON INITIAL CTC.

M
230130Z 06006KT 010`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RJFF",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "K (Kilo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0138Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "060° @ 6 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "16L",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `M0130

(APCH)RNP RWY16L
LDG RWY 16L
DEP RWY 16L/16R
DEP FREQ 127.9
ADZ FUKUOKA APP IF UNA RNP 
APCH
INFORM YR LDG RWY TO FUKUOKA 
TWR ON INITIAL CTC.

M
230130Z 06006KT 010`,
    });
  });

  test("decodes #26: /SNNATXA.TI2/EINN ARR ATIS U 0030Z EXPECT I L S CATEGORY 1 L…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/SNNATXA.TI2/EINN ARR ATIS U
	0030Z 
	EXPECT I L S CATEGORY 1
	LDG RWY06
	TKOF RWY06
	TRL FL060
	
	09006KT
	CAVOK
	
	11/05
	QNH Q1023
	
	TREND NOSIG
	
	ADVISE AT FIRST CONTACT YOU HAVE ATIS INFO UE4CB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "EINN",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "U (Uniform)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0030Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "090° @ 6 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+11°C / +5°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "1023 hPa",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXPECT I L S CATEGORY 1
	LDG RWY06
	TKOF RWY06
	TRL FL060
	
	09006KT
	CAVOK
	
	11/05
	QNH Q1023
	
	TREND NOSIG
	
	ADVISE AT FIRST CONTACT YOU HAVE ATIS INFO UE4CB`,
    });
  });

  test("decodes #27: /BJSATYA.TI2/ZSPD ARR ATIS F 0130Z EXP ILS APCH INDEPENDENT …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/BJSATYA.TI2/ZSPD ARR ATIS F
	0130Z EXP ILS APCH
	INDEPENDENT PARL INSTR APCH 
	LDG RWY 35L & 34R
	WIND RWY 35L TDZ 020/6MPS MID 020/5MPS
	END 020/5MPS
	RWY 34R TDZ 030/7MPS MID 000/0MPS END
	020/6MPS
	VIS RWY 35L TDZ 10000M MID 10000M END
	10000M
	VIS RWY 34R TDZ 10000M MID 10000M END
	10000M
	CLD BKN 780M
	T 13 /DP 11
	QNH 1012 HPA
	CAUTION THE BIRDS NEAR THE RUNWAY
	RWY 35R/35L/34R/34L RWYCC 5/5/5 ISSUED
	AT 0105 WET/WET/WET DPT NR/NR/NR COV
	100PCT/100PCT/100PCT.
	ADZ YOU HAVE INFO F.51E4`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "F (Foxtrot)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+5°C / +5°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "approach",
      code: "APCH",
      label: "Approach",
      value: `INDEPENDENT PARL INSTR APCH 
	LDG RWY 35L`,
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "35L",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH
	INDEPENDENT PARL INSTR APCH 
	LDG RWY 35L & 34R
	WIND RWY 35L TDZ 020/6MPS MID 020/5MPS
	END 020/5MPS
	RWY 34R TDZ 030/7MPS MID 000/0MPS END
	020/6MPS
	VIS RWY 35L TDZ 10000M MID 10000M END
	10000M
	VIS RWY 34R TDZ 10000M MID 10000M END
	10000M
	CLD BKN 780M
	T 13 /DP 11
	QNH 1012 HPA
	CAUTION THE BIRDS NEAR THE RUNWAY
	RWY 35R/35L/34R/34L RWYCC 5/5/5 ISSUED
	AT 0105 WET/WET/WET DPT NR/NR/NR COV
	100PCT/100PCT/100PCT.
	ADZ YOU HAVE INFO F.51E4`,
    });
  });

  test("decodes #28: /BJSATYA.TI2/ZSPD ARR ATIS F 0130Z EXP ILS APCH INDEPENDENT …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/BJSATYA.TI2/ZSPD ARR ATIS F
	0130Z EXP ILS APCH
	INDEPENDENT PARL INSTR APCH 
	LDG RWY 35L & 34R
	WIND RWY 35L TDZ 020/6MPS MID 020/5MPS
	END 020/5MPS
	RWY 34R TDZ 030/7MPS MID 000/0MPS END
	020/6MPS
	VIS RWY 35L TDZ 10000M MID 10000M END
	10000M
	VIS RWY 34R TDZ 10000M MID 10000M END
	10000M
	CLD BKN 780M
	T 13 /DP 11
	QNH 1012 HPA
	CAUTION THE BIRDS NEAR THE RUNWAY
	RWY 35R/35L/34R/34L RWYCC 5/5/5 ISSUED
	AT 0105 WET/WET/WET DPT NR/NR/NR COV
	100PCT/100PCT/100PCT.
	ADZ YOU HAVE INFO F.51E4`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "F (Foxtrot)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+5°C / +5°C",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "approach",
      code: "APCH",
      label: "Approach",
      value: `INDEPENDENT PARL INSTR APCH 
	LDG RWY 35L`,
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "35L",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH
	INDEPENDENT PARL INSTR APCH 
	LDG RWY 35L & 34R
	WIND RWY 35L TDZ 020/6MPS MID 020/5MPS
	END 020/5MPS
	RWY 34R TDZ 030/7MPS MID 000/0MPS END
	020/6MPS
	VIS RWY 35L TDZ 10000M MID 10000M END
	10000M
	VIS RWY 34R TDZ 10000M MID 10000M END
	10000M
	CLD BKN 780M
	T 13 /DP 11
	QNH 1012 HPA
	CAUTION THE BIRDS NEAR THE RUNWAY
	RWY 35R/35L/34R/34L RWYCC 5/5/5 ISSUED
	AT 0105 WET/WET/WET DPT NR/NR/NR COV
	100PCT/100PCT/100PCT.
	ADZ YOU HAVE INFO F.51E4`,
    });
  });

  test("decodes #29: /ATSCXXA.TI2/VDTI ARR ATIS D 0130Z VDTI ATIS INFO D 0130Z EX…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSCXXA.TI2/VDTI ARR ATIS D
	0130Z VDTI ATIS INFO D
	0130Z EXPECT ILS
	 RUNWAY-IN-USE 23
	17007KT 9999 FEW017  29/23 Q1009
	TRANSITION LEVEL FLIGHT LEVEL 130
	FOR DEPARTURE INFORMS TO TOWER
	FOR ARRIVAL INFORMS TO APPROACH
	ON INITIAL CONTACT11A3`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VDTI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "D (Delta)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "170° @ 7 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "9999 m",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 1,700 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+29°C / +23°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "1009 hPa",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `VDTI ATIS INFO D
	0130Z EXPECT ILS
	 RUNWAY-IN-USE 23
	17007KT 9999 FEW017  29/23 Q1009
	TRANSITION LEVEL FLIGHT LEVEL 130
	FOR DEPARTURE INFORMS TO TOWER
	FOR ARRIVAL INFORMS TO APPROACH
	ON INITIAL CONTACT11A3`,
    });
  });

  test("decodes #30: /ATSCXXA.TI2/VDTI ARR ATIS D 0130Z VDTI ATIS INFO D 0130Z EX…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSCXXA.TI2/VDTI ARR ATIS D
	0130Z VDTI ATIS INFO D
	0130Z EXPECT ILS
	 RUNWAY-IN-USE 23
	17007KT 9999 FEW017  29/23 Q1009
	TRANSITION LEVEL FLIGHT LEVEL 130
	FOR DEPARTURE INFORMS TO TOWER
	FOR ARRIVAL INFORMS TO APPROACH
	ON INITIAL CONTACT11A3`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VDTI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "D (Delta)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "170° @ 7 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "9999 m",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 1,700 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+29°C / +23°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "1009 hPa",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `VDTI ATIS INFO D
	0130Z EXPECT ILS
	 RUNWAY-IN-USE 23
	17007KT 9999 FEW017  29/23 Q1009
	TRANSITION LEVEL FLIGHT LEVEL 130
	FOR DEPARTURE INFORMS TO TOWER
	FOR ARRIVAL INFORMS TO APPROACH
	ON INITIAL CONTACT11A3`,
    });
  });

  test("decodes #31: /DATSCXS.TI2/PANC ARR ATIS T 0053Z - PANC ATIS INFO T 0053Z.…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/DATSCXS.TI2/PANC ARR ATIS T
	0053Z -  PANC ATIS INFO T 0053Z. VRB05KT 10SM
	OVC055 05/02 A3003 (THREE ZERO ZERO THREE).
	7R, VISUAL APPROACHES IN USE. LANDING RWY 7R,
	7L, DEPARTING RWY 33. NOTICE TO AIRMEN. TWY Q
	CLSD. TWY E CLSD BTWN TWY, L AND TWY M . LLWS
	ADZYS IN EFFECT. CAUTION FOR BIRD ACTIVITY IN
	THE ARPT AREA. HAZD WX INFO FOR ANC AREA AVBL
	FM FSS. CONTACT TOWER 118.3 FOR TAXI. RWY 25L
	5 5 5 2239, RWY 25R 5 5 5 2240, RWY15 5 5 5
	2239. ...ADVS YOU HAVE INFO T.3849`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(13);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0053Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "variable @ 5 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Overcast 5,500 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+5°C / +2°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "30.03 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "taxiway_closures",
      code: "TWYCLSD",
      label: "Taxiway Closures",
      value: "TWY Q; TWY E",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "hazardous_wx",
      code: "HAZDWX",
      label: "Hazardous Weather Area",
      value: "ANC area",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `-  PANC ATIS INFO T 0053Z. VRB05KT 10SM
	OVC055 05/02 A3003 (THREE ZERO ZERO THREE).
	7R, VISUAL APPROACHES IN USE. LANDING RWY 7R,
	7L, DEPARTING RWY 33. NOTICE TO AIRMEN. TWY Q
	CLSD. TWY E CLSD BTWN TWY, L AND TWY M . LLWS
	ADZYS IN EFFECT. CAUTION FOR BIRD ACTIVITY IN
	THE ARPT AREA. HAZD WX INFO FOR ANC AREA AVBL
	FM FSS. CONTACT TOWER 118.3 FOR TAXI. RWY 25L
	5 5 5 2239, RWY 25R 5 5 5 2240, RWY15 5 5 5
	2239. ...ADVS YOU HAVE INFO T.3849`,
    });
  });

  test("decodes #32: /DATSCXS.TI2/PANC ARR ATIS T 0053Z - PANC ATIS INFO T 0053Z.…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/DATSCXS.TI2/PANC ARR ATIS T
	0053Z -  PANC ATIS INFO T 0053Z. VRB05KT 10SM
	OVC055 05/02 A3003 (THREE ZERO ZERO THREE).
	7R, VISUAL APPROACHES IN USE. LANDING RWY 7R,
	7L, DEPARTING RWY 33. NOTICE TO AIRMEN. TWY Q
	CLSD. TWY E CLSD BTWN TWY, L AND TWY M . LLWS
	ADZYS IN EFFECT. CAUTION FOR BIRD ACTIVITY IN
	THE ARPT AREA. HAZD WX INFO FOR ANC AREA AVBL
	FM FSS. CONTACT TOWER 118.3 FOR TAXI. RWY 25L
	5 5 5 2239, RWY 25R 5 5 5 2240, RWY15 5 5 5
	2239. ...ADVS YOU HAVE INFO T.3849`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(13);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0053Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "variable @ 5 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Overcast 5,500 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+5°C / +2°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "30.03 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "taxiway_closures",
      code: "TWYCLSD",
      label: "Taxiway Closures",
      value: "TWY Q; TWY E",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "hazardous_wx",
      code: "HAZDWX",
      label: "Hazardous Weather Area",
      value: "ANC area",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `-  PANC ATIS INFO T 0053Z. VRB05KT 10SM
	OVC055 05/02 A3003 (THREE ZERO ZERO THREE).
	7R, VISUAL APPROACHES IN USE. LANDING RWY 7R,
	7L, DEPARTING RWY 33. NOTICE TO AIRMEN. TWY Q
	CLSD. TWY E CLSD BTWN TWY, L AND TWY M . LLWS
	ADZYS IN EFFECT. CAUTION FOR BIRD ACTIVITY IN
	THE ARPT AREA. HAZD WX INFO FOR ANC AREA AVBL
	FM FSS. CONTACT TOWER 118.3 FOR TAXI. RWY 25L
	5 5 5 2239, RWY 25R 5 5 5 2240, RWY15 5 5 5
	2239. ...ADVS YOU HAVE INFO T.3849`,
    });
  });

  test("decodes #33: /HKGATYA.TI2/VHHH DEP ATIS T 0106Z DEPARTURES, RWY 25C/L. IN…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/HKGATYA.TI2/VHHH DEP ATIS T
	0106Z
	DEPARTURES, RWY 25C/L.
	INDEPENDENT PARALLEL
	DEPARTURE IN PROGRESS.
	WIND RWY 25C 220/09KT
	RWY 25L 220/10KT VIS
	RWY 25C 10KM RWY 25L
	10KM CLD FEW 1200FT SCT
	3000FT T28 DP22 QNH
	1008HPA TREND TEMPO VIS
	4000M MOD SHRA=
	ACKNOWLEDGE INFO T ON
	FIRST CTC WITH DELIVERY
	.377B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0106Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "acknowledge_atis_letter",
      code: "ACK_ATIS",
      label: "Acknowledge ATIS Info",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "acknowledge_contact",
      code: "ACK_CTC",
      label: "Acknowledge On First Contact With",
      value: "DELIVERY",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `DEPARTURES, RWY 25C/L.
	INDEPENDENT PARALLEL
	DEPARTURE IN PROGRESS.
	WIND RWY 25C 220/09KT
	RWY 25L 220/10KT VIS
	RWY 25C 10KM RWY 25L
	10KM CLD FEW 1200FT SCT
	3000FT T28 DP22 QNH
	1008HPA TREND TEMPO VIS
	4000M MOD SHRA=
	ACKNOWLEDGE INFO T ON
	FIRST CTC WITH DELIVERY
	.377B`,
    });
  });

  test("decodes #34: /HKGATYA.TI2/VHHH DEP ATIS T 0106Z DEPARTURES, RWY 25C/L. IN…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/HKGATYA.TI2/VHHH DEP ATIS T
	0106Z
	DEPARTURES, RWY 25C/L.
	INDEPENDENT PARALLEL
	DEPARTURE IN PROGRESS.
	WIND RWY 25C 220/09KT
	RWY 25L 220/10KT VIS
	RWY 25C 10KM RWY 25L
	10KM CLD FEW 1200FT SCT
	3000FT T28 DP22 QNH
	1008HPA TREND TEMPO VIS
	4000M MOD SHRA=
	ACKNOWLEDGE INFO T ON
	FIRST CTC WITH DELIVERY
	.377B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0106Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "acknowledge_atis_letter",
      code: "ACK_ATIS",
      label: "Acknowledge ATIS Info",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "acknowledge_contact",
      code: "ACK_CTC",
      label: "Acknowledge On First Contact With",
      value: "DELIVERY",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `DEPARTURES, RWY 25C/L.
	INDEPENDENT PARALLEL
	DEPARTURE IN PROGRESS.
	WIND RWY 25C 220/09KT
	RWY 25L 220/10KT VIS
	RWY 25C 10KM RWY 25L
	10KM CLD FEW 1200FT SCT
	3000FT T28 DP22 QNH
	1008HPA TREND TEMPO VIS
	4000M MOD SHRA=
	ACKNOWLEDGE INFO T ON
	FIRST CTC WITH DELIVERY
	.377B`,
    });
  });

  test("decodes #35: /JNBATYA.TI2/FAOR ATIS D 0101Z. EXP ZONE IMC ARR RWY03R DEP …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/JNBATYA.TI2/FAOR ATIS D 0101Z. EXP ZONE IMC ARR RWY03R DEP RWY03R CLEARANCE DELIVERY ON 121 DECIMAL 9 TRL FL090 WIND 070/8KTS VRB BTN 040 AND 100 VIS ABV 10KM CLD NOT AVBL T13 DP12 QNH 1027HPA NOSIG
	CONFIRM ATIS D
	99C5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "FAOR",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Combined",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "D (Delta)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0101Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `. EXP ZONE IMC ARR RWY03R DEP RWY03R CLEARANCE DELIVERY ON 121 DECIMAL 9 TRL FL090 WIND 070/8KTS VRB BTN 040 AND 100 VIS ABV 10KM CLD NOT AVBL T13 DP12 QNH 1027HPA NOSIG
	CONFIRM ATIS D
	99C5`,
    });
  });

  test("decodes #36: /DATSCXS.TI2/KDCA DEP ATIS R 0052Z - KDCA ATIS INFO R 0052Z.…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/DATSCXS.TI2/KDCA DEP ATIS R
0052Z -  KDCA ATIS INFO
R 0052Z. 23005KT 10SM
FEW075 FEW090 21/11
A2993 (TWO NINER NINER
THREE) RMK AO2 SLP134
T02060106. ARRIVALS
EXPECT RIVER VISUAL RWY
19 RNP 19 APCH AVBL ON
REQUEST. LNDG AND DEPG
RWYS 19, 15. MULTIPLE
APPROACHES IN EFFECT.
SOUTH ADVISORY. NOTICE
TO AIRMEN. RWY 22 CLSD.
TWYS Z CLSD. NUMEROUS
CRANES IN VICINITY OF
AIRPORT. BIRD ACTIVITY.
READ BACK ALL ALTITUDES,
HELICOPTER FREQUENCY
121.275. READBACK
ALTITUDE. DEPARTURES
TURN ON TRANSPONDERS 
BEFORE TAXI. READBACK
ALL RWY ASSIGNMENTS AND
HOLD SHORT INSTRUCTIONS.
DO NOT ENTER PROHIBITED
AIRSPACE N OF ARPT.
...ADVS YOU HAVE INFO R.E848`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(13);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KDCA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "R (Romeo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0052Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "230° @ 5 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 7,500 ft, Few 9,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+21°C / +11°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.93 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "hazard",
      code: "HAZARD",
      label: "Wildlife Hazard",
      value: "BIRD ACTIVITY",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway_closures",
      code: "RWYCLSD",
      label: "Runway Closures",
      value: "RWY 22",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `-  KDCA ATIS INFO
R 0052Z. 23005KT 10SM
FEW075 FEW090 21/11
A2993 (TWO NINER NINER
THREE) RMK AO2 SLP134
T02060106. ARRIVALS
EXPECT RIVER VISUAL RWY
19 RNP 19 APCH AVBL ON
REQUEST. LNDG AND DEPG
RWYS 19, 15. MULTIPLE
APPROACHES IN EFFECT.
SOUTH ADVISORY. NOTICE
TO AIRMEN. RWY 22 CLSD.
TWYS Z CLSD. NUMEROUS
CRANES IN VICINITY OF
AIRPORT. BIRD ACTIVITY.
READ BACK ALL ALTITUDES,
HELICOPTER FREQUENCY
121.275. READBACK
ALTITUDE. DEPARTURES
TURN ON TRANSPONDERS 
BEFORE TAXI. READBACK
ALL RWY ASSIGNMENTS AND
HOLD SHORT INSTRUCTIONS.
DO NOT ENTER PROHIBITED
AIRSPACE N OF ARPT.
...ADVS YOU HAVE INFO R.E848`,
    });
  });

  test("decodes #37: ER FREQUENCY 121.275. READBACK ALTITUDE. DEPARTURES TURN ON …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `ER FREQUENCY
121.275. READBACK
ALTITUDE. DEPARTURES
TURN ON TRANSPONDERS 
BEFORE TAXI. READBACK
ALL RWY ASSIGNMENTS AND
HOLD SHORT INSTRUCTIONS.
DO NOT ENTER PROHIBITED
AIRSPACE N OF ARPT.
...ADVS YOU HAVE INFO `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `ER FREQUENCY
121.275. READBACK
ALTITUDE. DEPARTURES
TURN ON TRANSPONDERS 
BEFORE TAXI. READBACK
ALL RWY ASSIGNMENTS AND
HOLD SHORT INSTRUCTIONS.
DO NOT ENTER PROHIBITED
AIRSPACE N OF ARPT.
...ADVS YOU HAVE INFO`,
    });
  });

  test("decodes #38: EST. LNDG AND DEPG RWYS 19, 15. MULTIPLE APPROACHES IN EFFEC…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `EST. LNDG AND DEPG
RWYS 19, 15. MULTIPLE
APPROACHES IN EFFECT.
SOUTH ADVISORY. NOTICE
TO AIRMEN. RWY 22 CLSD.
TWYS Z CLSD. NUMEROUS
CRANES IN VICINITY OF
AIRPORT. BIRD ACTIVITY.
READ BACK ALL ALTITUDES,
HELICOPT`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(3);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "hazard",
      code: "HAZARD",
      label: "Wildlife Hazard",
      value: "BIRD ACTIVITY",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "runway_closures",
      code: "RWYCLSD",
      label: "Runway Closures",
      value: "RWY 22",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EST. LNDG AND DEPG
RWYS 19, 15. MULTIPLE
APPROACHES IN EFFECT.
SOUTH ADVISORY. NOTICE
TO AIRMEN. RWY 22 CLSD.
TWYS Z CLSD. NUMEROUS
CRANES IN VICINITY OF
AIRPORT. BIRD ACTIVITY.
READ BACK ALL ALTITUDES,
HELICOPT`,
    });
  });

  test("decodes #39: /DATSCXS.TI2/KDCA DEP ATIS R 0052Z - KDCA ATIS INFO R 0052Z.…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/DATSCXS.TI2/KDCA DEP ATIS R
0052Z -  KDCA ATIS INFO
R 0052Z. 23005KT 10SM
FEW075 FEW090 21/11
A2993 (TWO NINER NINER
THREE) RMK AO2 SLP134
T02060106. ARRIVALS
EXPECT RIVER VISUAL RWY
19 RNP 19 APCH AVBL ON
REQU`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KDCA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "R (Romeo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0052Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "230° @ 5 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 7,500 ft, Few 9,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+21°C / +11°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.93 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `-  KDCA ATIS INFO
R 0052Z. 23005KT 10SM
FEW075 FEW090 21/11
A2993 (TWO NINER NINER
THREE) RMK AO2 SLP134
T02060106. ARRIVALS
EXPECT RIVER VISUAL RWY
19 RNP 19 APCH AVBL ON
REQU`,
    });
  });

  test("decodes #40: PECT SID EGOBA2E OSPOT2E RWY 34R EXPECT SID BOPTA2Y NOPIK2Y …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `PECT SID EGOBA2E OSPOT2E
	RWY 34R EXPECT SID BOPTA2Y NOPIK2Y
	DEPARTURE FREQ 121.4 FOR RWY 34R AND 125.15 FOR RWY 33L
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	3140`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `PECT SID EGOBA2E OSPOT2E
	RWY 34R EXPECT SID BOPTA2Y NOPIK2Y
	DEPARTURE FREQ 121.4 FOR RWY 34R AND 125.15 FOR RWY 33L
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	3140`,
    });
  });

  test("decodes #41: PECT SID EGOBA2E OSPOT2E RWY 34R EXPECT SID BOPTA2Y NOPIK2Y …", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `PECT SID EGOBA2E OSPOT2E
	RWY 34R EXPECT SID BOPTA2Y NOPIK2Y
	DEPARTURE FREQ 121.4 FOR RWY 34R AND 125.15 FOR RWY 33L
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	3140`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(1);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `PECT SID EGOBA2E OSPOT2E
	RWY 34R EXPECT SID BOPTA2Y NOPIK2Y
	DEPARTURE FREQ 121.4 FOR RWY 34R AND 125.15 FOR RWY 33L
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	3140`,
    });
  });

  test("decodes #42: /DATSCXS.TI2/KEWR DEP ATIS K 0051Z - KEWR ATIS INFO K 0051Z.…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/DATSCXS.TI2/KEWR DEP ATIS K
0051Z -  KEWR ATIS INFO K 0051Z. 10004KT 10SM FEW030 BKN110 11/06 A2998 (TWO NINER NINER EIGHT). ILS RWY 22L APCH IN USE. DEPARTING RY 22R FROM INT W 10,150 FEET TODA. USE CAUTION FOR BIRDS AND CRANES IN THE VICINITY OF EWR. READBACK ALL RUNWAY HOLD SHORT INSTRUCTIONS AND ASSIGNED ALT. ...ADVS YOU HAVE INFO K.5A4C`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KEWR",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "K (Kilo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0051Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "100° @ 4 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 3,000 ft, Broken 11,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+11°C / +6°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.98 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: "-  KEWR ATIS INFO K 0051Z. 10004KT 10SM FEW030 BKN110 11/06 A2998 (TWO NINER NINER EIGHT). ILS RWY 22L APCH IN USE. DEPARTING RY 22R FROM INT W 10,150 FEET TODA. USE CAUTION FOR BIRDS AND CRANES IN THE VICINITY OF EWR. READBACK ALL RUNWAY HOLD SHORT INSTRUCTIONS AND ASSIGNED ALT. ...ADVS YOU HAVE INFO K.5A4C",
    });
  });

  test("decodes #43: /BJSATYA.TI2/ZBAA ARR ATIS V 0130Z EXP ILS APCH DEPENDENT PA…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/BJSATYA.TI2/ZBAA ARR ATIS V
	0130Z EXP ILS APCH
	DEPENDENT PARL INSTR APCH 
	LDG RWY 36L & 36R & 01
	WIND VRB DEG 1 MPS
	VIS 8000
	NSC
	T 17 /DP 08
	QNH 1013 HPA
	VISUAL APPROACH IS IN PROGRESS.
	ADZ YOU HAVE INFO V.50C0`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "ZBAA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "V (Victor)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "8000 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "approach",
      code: "APCH",
      label: "Approach",
      value: `DEPENDENT PARL INSTR APCH 
	LDG RWY 36L`,
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "36L",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH
	DEPENDENT PARL INSTR APCH 
	LDG RWY 36L & 36R & 01
	WIND VRB DEG 1 MPS
	VIS 8000
	NSC
	T 17 /DP 08
	QNH 1013 HPA
	VISUAL APPROACH IS IN PROGRESS.
	ADZ YOU HAVE INFO V.50C0`,
    });
  });

  test("decodes #44: /BJSATYA.TI2/ZBAA ARR ATIS V 0130Z EXP ILS APCH DEPENDENT PA…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/BJSATYA.TI2/ZBAA ARR ATIS V
	0130Z EXP ILS APCH
	DEPENDENT PARL INSTR APCH 
	LDG RWY 36L & 36R & 01
	WIND VRB DEG 1 MPS
	VIS 8000
	NSC
	T 17 /DP 08
	QNH 1013 HPA
	VISUAL APPROACH IS IN PROGRESS.
	ADZ YOU HAVE INFO V.50C0`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "ZBAA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "V (Victor)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "8000 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "approach",
      code: "APCH",
      label: "Approach",
      value: `DEPENDENT PARL INSTR APCH 
	LDG RWY 36L`,
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "runways",
      code: "RWY",
      label: "Runways in Use",
      value: "36L",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH
	DEPENDENT PARL INSTR APCH 
	LDG RWY 36L & 36R & 01
	WIND VRB DEG 1 MPS
	VIS 8000
	NSC
	T 17 /DP 08
	QNH 1013 HPA
	VISUAL APPROACH IS IN PROGRESS.
	ADZ YOU HAVE INFO V.50C0`,
    });
  });

  test("decodes #45: /ICNDLXA.TI2/RKSI ARR ATIS T 0130Z EXP SIMUL PARALLEL ILS AP…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ICNDLXA.TI2/RKSI ARR ATIS T
	0130Z
	EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RKSI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
  });

  test("decodes #46: /ICNDLXA.TI2/RKSI ARR ATIS T 0130Z EXP SIMUL PARALLEL ILS AP…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ICNDLXA.TI2/RKSI ARR ATIS T
	0130Z
	EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "RKSI",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "T (Tango)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1012 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP SIMUL PARALLEL ILS APCH RWY 33R AND ILS APCH RWY 34L
	EXP LDG RWY INFO FROM SEOUL APP
	WIND 050/6KT
	CAVOK
	T 17
	DP 4
	QNH 1012
	CAUTION BIRD ACTIVITY
	EXP REBIT 1Y OLMEN 1Y GUKDO 2E KARBU 2E ARRIVAL
	VACATE RWY33R VIA TWY ECHO NOT AVAILABLE UNLESS AUTHORIZED BY ATC PRIOR TO LANDING
	GPS SIGNAL UNRELIABLE DUE TO GPS INTERFERENCE IN SEOUL APCH AREA
	A4AB`,
    });
  });

  test("decodes #47: /BJSATYA.TI2/ZGSZ ARR ATIS H 0130Z EXP ILS APCH 15 EXP ILS O…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/BJSATYA.TI2/ZGSZ ARR ATIS H
	0130Z EXP ILS APCH 15
	EXP ILS OR VIS APCH 16R
	WIND 190/6MPS
	VIS 9999M
	CLD SCT 780M /BKN 1200M
	T 27 /DP 25
	QNH 1008 HPA
	INDEPENDENT PARALLEL DEPARTURES
	DEPENDENT PARALLEL APPROACHES
	EXPECT RNP ILS DME Z APPROACH
	MISSED APPROACH ALTITUDE SETTING
	1200METERS
	WHEN AIRBORNE CONTACT ZHUHAI APPROACH
	ADZ YOU HAVE INFO H.0C68`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "ZGSZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "H (Hotel)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "9999 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH 15
	EXP ILS OR VIS APCH 16R
	WIND 190/6MPS
	VIS 9999M
	CLD SCT 780M /BKN 1200M
	T 27 /DP 25
	QNH 1008 HPA
	INDEPENDENT PARALLEL DEPARTURES
	DEPENDENT PARALLEL APPROACHES
	EXPECT RNP ILS DME Z APPROACH
	MISSED APPROACH ALTITUDE SETTING
	1200METERS
	WHEN AIRBORNE CONTACT ZHUHAI APPROACH
	ADZ YOU HAVE INFO H.0C68`,
    });
  });

  test("decodes #48: /BJSATYA.TI2/ZGSZ ARR ATIS H 0130Z EXP ILS APCH 15 EXP ILS O…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/BJSATYA.TI2/ZGSZ ARR ATIS H
	0130Z EXP ILS APCH 15
	EXP ILS OR VIS APCH 16R
	WIND 190/6MPS
	VIS 9999M
	CLD SCT 780M /BKN 1200M
	T 27 /DP 25
	QNH 1008 HPA
	INDEPENDENT PARALLEL DEPARTURES
	DEPENDENT PARALLEL APPROACHES
	EXPECT RNP ILS DME Z APPROACH
	MISSED APPROACH ALTITUDE SETTING
	1200METERS
	WHEN AIRBORNE CONTACT ZHUHAI APPROACH
	ADZ YOU HAVE INFO H.0C68`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "ZGSZ",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "H (Hotel)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0130Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "9999 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EXP ILS APCH 15
	EXP ILS OR VIS APCH 16R
	WIND 190/6MPS
	VIS 9999M
	CLD SCT 780M /BKN 1200M
	T 27 /DP 25
	QNH 1008 HPA
	INDEPENDENT PARALLEL DEPARTURES
	DEPENDENT PARALLEL APPROACHES
	EXPECT RNP ILS DME Z APPROACH
	MISSED APPROACH ALTITUDE SETTING
	1200METERS
	WHEN AIRBORNE CONTACT ZHUHAI APPROACH
	ADZ YOU HAVE INFO H.0C68`,
    });
  });

  test("decodes #49: /RIOCDYA.TI2/SBGR ARR ATIS B 0107Z ATIS B EXP ILS W CAT I RW…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/RIOCDYA.TI2/SBGR ARR ATIS B
	0107Z ATIS B
	EXP ILS W CAT I RWY 10L/ LDG 10L DEP 10L IN USE
	TWY BB CLSD DUE TO WORKS
	RWY 10R CLSD DUE TO WORKS
	WIND 170 04 KT 
	VIS 10 KM OR MORE
	OVC 1400 FT 
	T 20 / DP 17
	QNH 1021 HPA
	CLR DELIVERY 1 2 1 DECIMAL 0
	TOWER FREQ 1 3 5 DECIMAL 2 
	END OF ATIS B
	
	6D69`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "SBGR",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Arrival",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "B (Bravo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0107Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "1400 m",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "runway_closures",
      code: "RWYCLSD",
      label: "Runway Closures",
      value: "RWY 10R",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `ATIS B
	EXP ILS W CAT I RWY 10L/ LDG 10L DEP 10L IN USE
	TWY BB CLSD DUE TO WORKS
	RWY 10R CLSD DUE TO WORKS
	WIND 170 04 KT 
	VIS 10 KM OR MORE
	OVC 1400 FT 
	T 20 / DP 17
	QNH 1021 HPA
	CLR DELIVERY 1 2 1 DECIMAL 0
	TOWER FREQ 1 3 5 DECIMAL 2 
	END OF ATIS B
	
	6D69`,
    });
  });

  test("decodes #50: /ATSG7XA.TI2/KEWR DEP ATIS K 0051Z EWR ATIS INFO K 0051Z. 10…", () => {
    const decodeResult = plugin.decode({
      label: "A9",
      text: `/ATSG7XA.TI2/KEWR DEP ATIS K
0051Z EWR ATIS INFO K 0051Z.
10004KT 10SM FEW030
BKN110 11/06 A2998 (TWO
NINER NINER EIGHT). ILS
RWY 22L APCH IN USE.
DEPARTING RY 22R FROM
INT W 10,150 FEET TODA.
USE CAUTION FOR BIRDS
AND CRANES IN THE
VICINITY OF EWR.
READBACK ALL RUNWAY HOLD
SHORT INSTRUCTIONS AND
ASSIGNED ALT. ...ADVS
YOU HAVE INFO K.737E
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a9-dai");
    expect(decodeResult.formatted.description).toBe("Deliver ATIS Information (D-ATIS uplink)");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "D-ATIS (Deliver ATIS Information) — ground-to-air uplink",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "icao",
      code: "ATIS_ARPT",
      label: "Airport",
      value: "KEWR",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "atis_type",
      code: "ATIS_TYPE",
      label: "ATIS Type",
      value: "Departure",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "atis_letter",
      code: "ATIS_LETTER",
      label: "Info ID",
      value: "K (Kilo)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "ATIS_TIME",
      label: "Valid Time",
      value: "0051Z",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "100° @ 4 kt",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "visibility",
      code: "VIS",
      label: "Visibility",
      value: "10 SM",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "sky",
      code: "SKY",
      label: "Sky",
      value: "Few 3,000 ft, Broken 11,000 ft",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "temp_dew",
      code: "TMP/DEW",
      label: "Temp / Dew",
      value: "+11°C / +6°C",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "altimeter",
      code: "ALTIM",
      label: "Altimeter",
      value: "29.98 inHg",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "atis_text",
      code: "ATIS_BODY",
      label: "ATIS Text",
      value: `EWR ATIS INFO K 0051Z.
10004KT 10SM FEW030
BKN110 11/06 A2998 (TWO
NINER NINER EIGHT). ILS
RWY 22L APCH IN USE.
DEPARTING RY 22R FROM
INT W 10,150 FEET TODA.
USE CAUTION FOR BIRDS
AND CRANES IN THE
VICINITY OF EWR.
READBACK ALL RUNWAY HOLD
SHORT INSTRUCTIONS AND
ASSIGNED ALT. ...ADVS
YOU HAVE INFO K.737E`,
    });
  });

});
