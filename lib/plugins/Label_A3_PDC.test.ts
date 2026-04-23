import { MessageDecoder } from '../MessageDecoder';
import { Label_A3_PDC } from './Label_A3_PDC';

describe('Label_A3_PDC', () => {
  let plugin: Label_A3_PDC;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_A3_PDC(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-a3-pdc");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["A3"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "A3", text: '' });
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
  });

  test("decodes #1: /CTUDCYA.DC1/CLD 2226 260422 ZUUU PDC 842 CSC9819 CLRD TO UA…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/CTUDCYA.DC1/CLD 2226 260422 ZUUU PDC 842
	CSC9819 CLRD TO UAAA OFF 02L VIA BOKIR9W
	SQUAWK 1531 ADT 2200 NEXT FREQ 130.350 ATIS H
	INITIAL ALT 1800M
	FL 10400M
	APP FREQUENCY 126.35ADAC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "CTUDCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSC9819",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:26:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZUUU",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "UAAA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:26",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "842",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CSC9819",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "02L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "BOKIR9W",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "1531",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "22:00",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "130.350 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "H",
    });
  });

  test("decodes #2: /CTUDCYA.DC1/CLD 2226 260422 ZUUU PDC 842 CSC9819 CLRD TO UA…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/CTUDCYA.DC1/CLD 2226 260422 ZUUU PDC 842
	CSC9819 CLRD TO UAAA OFF 02L VIA BOKIR9W
	SQUAWK 1531 ADT 2200 NEXT FREQ 130.350 ATIS H
	INITIAL ALT 1800M
	FL 10400M
	APP FREQUENCY 126.35ADAC`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "CTUDCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSC9819",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:26:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZUUU",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "UAAA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:26",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "842",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CSC9819",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "02L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "BOKIR9W",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "1531",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "22:00",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "130.350 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "H",
    });
  });

  test("decodes #3: /FUKDLYA.DC1/CLD 2221 260422 RJTT PDC 169 SKY003 CLRD TO RJF…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 2221 260422 RJTT PDC 169
SKY003 CLRD TO RJFF OFF 05 VIA GUSRO1
 DEPARTURE FPR MNTN F200 EXP F360
SQUAWK 3304 NEXT FREQ 121.700 ATIS Q
TSAT 22358C8C`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "SKY003",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:21:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJFF",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:21",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "169",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "SKY003",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "05",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "GUSRO1",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN F200 EXP F360",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3304",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.700 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "Q",
    });
  });

  test("decodes #4: /FUKDLYA.DC1/CLD 2221 260422 RJTT PDC 169 SKY003 CLRD TO RJF…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 2221 260422 RJTT PDC 169
SKY003 CLRD TO RJFF OFF 05 VIA GUSRO1
 DEPARTURE FPR MNTN F200 EXP F360
SQUAWK 3304 NEXT FREQ 121.700 ATIS Q
TSAT 22358C8C`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "SKY003",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:21:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJFF",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:21",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "169",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "SKY003",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "05",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "GUSRO1",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN F200 EXP F360",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3304",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.700 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "Q",
    });
  });

  test("decodes #5: /AUHCAYA.DC1/CLD 2241 260422 OMAA PDC 071 ETD72W CLRD TO EID…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/AUHCAYA.DC1/CLD 2241 260422 OMAA PDC 071
	ETD72W CLRD TO EIDW OFF 31L 5000 FT VIA ORNEL1U
	SQUAWK 3407 ADT 2339 NEXT FREQ 125.100 
	TSAT 2318 DEP FREQ 128.100
	CTOT 2339 QNH 1004 
	ON MISMATCH CTCT 125.100 
	CHECK ATIS6D11`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "AUHCAYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ETD72W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:41:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "OMAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "EIDW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:41",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "071",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ETD72W",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "31L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "5000 FT VIA ORNEL1U",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3407",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "23:39",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "125.100 MHz",
    });
  });

  test("decodes #6: /HKGCPYA.DC1/CLD 2237 260422 VHHH PDC 533 UAE9859 CLRD TO OM…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HKGCPYA.DC1/CLD 2237 260422 VHHH PDC 533
	UAE9859 CLRD TO OMDW OFF 25C VIA PECAN1D
	SQUAWK 5312 NEXT FREQ 122.150 ATIS P
	CLIMB VIA SID TO 5000FT. ACK PDC. CTC DELIVERY ON 122.15 WHEN READY TO START3210`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HKGCPYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAE9859",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "OMDW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "533",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAE9859",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "25C",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "PECAN1D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "5312",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "122.150 MHz",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "P",
    });
  });

  test("decodes #7: /HKGCPYA.DC1/CLD 2237 260422 VHHH PDC 533 UAE9859 CLRD TO OM…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HKGCPYA.DC1/CLD 2237 260422 VHHH PDC 533
	UAE9859 CLRD TO OMDW OFF 25C VIA PECAN1D
	SQUAWK 5312 NEXT FREQ 122.150 ATIS P
	CLIMB VIA SID TO 5000FT. ACK PDC. CTC DELIVERY ON 122.15 WHEN READY TO START3210`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HKGCPYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAE9859",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "OMDW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "533",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAE9859",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "25C",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "PECAN1D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "5312",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "122.150 MHz",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "P",
    });
  });

  test("decodes #8: /FUKDLYA.DC1/CLD 2237 260422 RJTT PDC 181 SKY513 CLRD TO ROA…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 2237 260422 RJTT PDC 181
SKY513 CLRD TO ROAH OFF 05 VIA LAXAS4
 DEPARTURE FPR MNTN F200 EXP F380
SQUAWK 3342 NEXT FREQ 121.700 ATIS R
TSAT 2245339D`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "SKY513",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ROAH",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "181",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "SKY513",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "05",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "LAXAS4",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN F200 EXP F380",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3342",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.700 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "R",
    });
  });

  test("decodes #9: /FUKDLYA.DC1/CLD 2236 260422 RJTT PDC 180 QFA26 CLRD TO YSSY…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 2236 260422 RJTT PDC
 180
QFA26 CLRD TO YSSY OFF
 05 VIA VAMOS4 DEPARTURE
 DRAKY TRANSITION FPR
 MNTN A090 EXP F260
SQUAWK 6114 NEXT FREQ
 121.625 ATIS R
TSAT 2255A29A`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "QFA26",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:36:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "YSSY",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:36",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "180",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "QFA26",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "05",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "VAMOS4",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE DRAKY TRANSITION FPR MNTN A090 EXP F260",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "6114",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.625 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "R",
    });
  });

  test("decodes #10: /FUKDLYA.DC1/CLD 2252 260422 RJTT PDC 191 JAL47 CLRD TO EFHK…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 2252 260422 RJTT PDC 191
JAL47 CLRD TO EFHK OFF 34R VIA ROVER4B
 DEPARTURE INUBO TRANSITION FPR MNTN F250 EXP
 F310
SQUAWK 3177 NEXT FREQ 121.625 ATIS R
TSAT 22504661`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JAL47",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:52:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "EFHK",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "22:52",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-22",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "191",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "JAL47",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34R",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "ROVER4B",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE INUBO TRANSITION FPR MNTN F250 EXP F310",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3177",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.625 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "R",
    });
  });

  test("decodes #11: /HDQGLXH.DC1/CLD 0137 260423 KMDW PDC 471 EJA359 KMDW-KTEB A…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HDQGLXH.DC1/CLD 0137 260423 KMDW PDC 471
EJA359 KMDW-KTEB
ATC CLEARANCE:
CLR AS FILED.
FILED FLIGHT PLAN:
KMDW LEWKE GIJ EVOTE
NELLS KEEHO JHW LVZ5
KTEB
SQUAWK: 6513
REQUESTED ALT: 410
AIRCRAFT EQUIP/TYPE:
C680/L
PROPOSED ETD: 0200Z
EDCT: NOT IN EFFECT
ATC INSTRUCTIONS:
CLEARED MDWAY8 DEPARTURE
MAINTAIN 3000FT EXP 410
10 MIN AFT DP,DPFRQ
133.9 TERM TFC CTC
GROUND CTL FOR PUSH DEP
FREQ MAY CHANGE
END OF CLEARANCE26F6
`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(9);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HDQGLXH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KMDW",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "471",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "EJA359 KMDW-KTEB ATC CLEARANCE: CLR AS FILED. FILED FLIGHT PLAN: KMDW LEWKE GIJ EVOTE NELLS KEEHO JHW LVZ5 KTEB",
    });
  });

  test("decodes #12: 80/L PROPOSED ETD: 0200Z EDCT: NOT IN EFFECT ATC INSTRUCTION…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `80/L
PROPOSED ETD: 0200Z
EDCT: NOT IN EFFECT
ATC INSTRUCTIONS:
CLEARED MDWAY8 DEPARTURE
MAINTAIN 3000FT EXP 410
10 MIN AFT DP,DPFRQ
133.9 TERM TFC CTC
GROUND CTL FOR PUSH DEP
FREQ MAY CHANGE
END OF CLEARANCE26F`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: /SHADCYA.DC1/CLD 0136 260423 ZSSS PDC 819 CSN3596 CLRD TO ZG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/SHADCYA.DC1/CLD 0136 260423 ZSSS
	PDC 819
	CSN3596 CLRD TO ZGGG OFF 36L VIA NXD71D
	SQUAWK 5021 ADT 0136 NEXT FREQ 121.750 ATIS V
	INITIAL ALT 900M
	FL 7800M
	REPORT YOU ACK DCL WHEN RDY  55D5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "SHADCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3596",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:36:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZSSS",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:36",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "819",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CSN3596",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "36L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "NXD71D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "5021",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "01:36",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.750 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "V",
    });
  });

  test("decodes #14: /SHADCYA.DC1/CLD 0136 260423 ZSSS PDC 819 CSN3596 CLRD TO ZG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/SHADCYA.DC1/CLD 0136 260423 ZSSS
	PDC 819
	CSN3596 CLRD TO ZGGG OFF 36L VIA NXD71D
	SQUAWK 5021 ADT 0136 NEXT FREQ 121.750 ATIS V
	INITIAL ALT 900M
	FL 7800M
	REPORT YOU ACK DCL WHEN RDY  55D5`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "SHADCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3596",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:36:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZSSS",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:36",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "819",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CSN3596",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "36L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "NXD71D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "5021",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "01:36",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.750 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "V",
    });
  });

  test("decodes #15: /CTUACYA.DC1/CLD 0134 260423 PANC PDC 750 UPS80 CLRD TO ZSPD…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/CTUACYA.DC1/CLD 0134 260423 PANC
	 PDC 750
	UPS80 CLRD TO ZSPD
	THIS IS LID (LANDING INFORMATION DELIVER) FOR UPS80, EXPECT DUM91A ARRIVAL ILS Z APP RWY 34R TO ZSPD. PARKING POSITION: 333. ON INITIAL CONTACT SHANGHAI APPROACH, PILOT ONLY NEED TO REPORT DETAILED STAR AND RWY RECEIVED BY LID.
	7507677`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "CTUACYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UPS80",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "750",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UPS80",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "THIS IS LID (LANDING INFORMATION DELIVER) FOR UPS80, EXPECT DUM91A ARRIVAL ILS Z",
    });
  });

  test("decodes #16: /CTUACYA.DC1/CLD 0134 260423 PANC PDC 750 UPS80 CLRD TO ZSPD…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/CTUACYA.DC1/CLD 0134 260423 PANC
	 PDC 750
	UPS80 CLRD TO ZSPD
	THIS IS LID (LANDING INFORMATION DELIVER) FOR UPS80, EXPECT DUM91A ARRIVAL ILS Z APP RWY 34R TO ZSPD. PARKING POSITION: 333. ON INITIAL CONTACT SHANGHAI APPROACH, PILOT ONLY NEED TO REPORT DETAILED STAR AND RWY RECEIVED BY LID.
	7507677`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(12);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "CTUACYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UPS80",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:34:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "PANC",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:34",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "750",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UPS80",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "THIS IS LID (LANDING INFORMATION DELIVER) FOR UPS80, EXPECT DUM91A ARRIVAL ILS Z",
    });
  });

  test("decodes #17: /FUKDLYA.DC1/CLD 0131 260423 RJTT PDC 313 CSN3086 CLRD TO ZG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0131 260423 RJTT PDC
 313
CSN3086 CLRD TO ZGGG OFF
 05 VIA NINOX4 DEPARTURE
 FPR MNTN F200 EXP F300
SQUAWK 3241 ADT 0207
 NEXT FREQ 121.625 ATIS
 X
TSAT 0145AB1D`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CSN3086",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZGGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:31",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "313",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CSN3086",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "05",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "NINOX4",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN F200 EXP F300",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3241",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:07",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.625 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "X",
    });
  });

  test("decodes #18: /PVGDCYA.DC1/CLD 0131 260423 ZSPD PDC 154 DAL388 CLRD TO KDT…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/PVGDCYA.DC1/CLD 0131 260423 ZSPD
	PDC 154
	DAL388 CLRD TO KDTW OFF 34L VIA LAM92D
	SQUAWK 0142 ADT 0131 NEXT FREQ 121.950 ATIS E
	INITIAL ALT 900M
	FL 7500M
	WHEN AIRBORNE CTC APP125.40 W/O INSTRUC0B69`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "PVGDCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL388",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:31",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "154",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL388",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "LAM92D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0142",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "01:31",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.950 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "E",
    });
  });

  test("decodes #19: /PVGDCYA.DC1/CLD 0131 260423 ZSPD PDC 154 DAL388 CLRD TO KDT…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/PVGDCYA.DC1/CLD 0131 260423 ZSPD
	PDC 154
	DAL388 CLRD TO KDTW OFF 34L VIA LAM92D
	SQUAWK 0142 ADT 0131 NEXT FREQ 121.950 ATIS E
	INITIAL ALT 900M
	FL 7500M
	WHEN AIRBORNE CTC APP125.40 W/O INSTRUC0B69`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "PVGDCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "DAL388",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:31:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDTW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:31",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "154",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "DAL388",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "LAM92D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0142",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "01:31",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.950 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "E",
    });
  });

  test("decodes #20: /HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630 CPA536 CLRD TO RJG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630
	CPA536 CLRD TO RJGG OFF 25C VIA DALOL1D
	SQUAWK 3547 NEXT FREQ 122.150 ATIS T
	CLIMB VIA SID TO 5000FT. ACK PDC. CTC DELIVERY ON 122.15 WHEN READY TO STARTDD0B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HKGCPYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "630",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "25C",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "DALOL1D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3547",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "122.150 MHz",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "T",
    });
  });

  test("decodes #21: /HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630 CPA536 CLRD TO RJG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630
	CPA536 CLRD TO RJGG OFF 25C VIA DALOL1D
	SQUAWK 3547 NEXT FREQ 122.150 ATIS T
	CLIMB VIA SID TO 5000FT. ACK PDC. CTC DELIVERY ON 122.15 WHEN READY TO STARTDD0B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HKGCPYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "630",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "25C",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "DALOL1D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3547",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "122.150 MHz",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "T",
    });
  });

  test("decodes #22: /HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630 CPA536 CLRD TO RJG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630
	CPA536 CLRD TO RJGG OFF 25C VIA DALOL1D
	SQUAWK 3547 NEXT FREQ 122.150 ATIS T
	CLIMB VIA SID TO 5000FT. ACK PDC. CTC DELIVERY ON 122.15 WHEN READY TO STARTDD0B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HKGCPYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "630",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "25C",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "DALOL1D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3547",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "122.150 MHz",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "T",
    });
  });

  test("decodes #23: /HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630 CPA536 CLRD TO RJG…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HKGCPYA.DC1/CLD 0137 260423 VHHH PDC 630
	CPA536 CLRD TO RJGG OFF 25C VIA DALOL1D
	SQUAWK 3547 NEXT FREQ 122.150 ATIS T
	CLIMB VIA SID TO 5000FT. ACK PDC. CTC DELIVERY ON 122.15 WHEN READY TO STARTDD0B`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HKGCPYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:37:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VHHH",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJGG",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:37",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "630",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CPA536",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "25C",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "DALOL1D",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3547",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "122.150 MHz",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "T",
    });
  });

  test("decodes #24: /FUKDLYA.DC1/CLD 0154 260423 RJAA PDC 812 THA641 CLRD TO VTB…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0154 260423 RJAA PDC 812
	THA641 CLRD TO VTBS OFF 34L VIA OLVAN2 DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F360
	SQUAWK 6004 ADT 0210 NEXT FREQ 121.900 ATIS L
	TSAT 0154 NEXT FREQ FOR PUSHBACK52A2`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "THA641",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:54:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VTBS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:54",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "812",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "THA641",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "OLVAN2",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F360",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "6004",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:10",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.900 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "L",
    });
  });

  test("decodes #25: /FUKDLYA.DC1/CLD 0154 260423 RJAA PDC 812 THA641 CLRD TO VTB…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0154 260423 RJAA PDC 812
	THA641 CLRD TO VTBS OFF 34L VIA OLVAN2 DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F360
	SQUAWK 6004 ADT 0210 NEXT FREQ 121.900 ATIS L
	TSAT 0154 NEXT FREQ FOR PUSHBACK52A2`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "THA641",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:54:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VTBS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:54",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "812",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "THA641",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "OLVAN2",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F360",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "6004",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:10",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.900 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "L",
    });
  });

  test("decodes #26: /BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 057 ETD403 CLRD TO OMA…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 057
	ETD403 CLRD TO OMAA OFF 20L VIA PASTO1G L301 ALT060
	SQUAWK 0712
	SELECT ACCEPT TO ACK CLR & CTC GROUND FREQ FOR PUSH BACK & START UP
	8672`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "BKKDCXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ETD403",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:55:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VTBS",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "OMAA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:55",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "057",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ETD403",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "20L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "PASTO1G",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "L301 ALT060",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0712",
    });
  });

  test("decodes #27: /BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 057 ETD403 CLRD TO OMA…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 057
	ETD403 CLRD TO OMAA OFF 20L VIA PASTO1G L301 ALT060
	SQUAWK 0712
	SELECT ACCEPT TO ACK CLR & CTC GROUND FREQ FOR PUSH BACK & START UP
	8672`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "BKKDCXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ETD403",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:55:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VTBS",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "OMAA",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:55",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "057",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ETD403",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "20L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "PASTO1G",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "L301 ALT060",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0712",
    });
  });

  test("decodes #28: /BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 058 REU888 CLRD TO FME…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 058
	REU888 CLRD TO FMEE OFF 20L VIA VANKO1G Y8 PUT P627 ALT060
	SQUAWK 0717
	SELECT ACCEPT TO ACK CLR & CTC GROUND FREQ FOR PUSH BACK & START UP
	DC61`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "BKKDCXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "REU888",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:55:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VTBS",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "FMEE",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:55",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "058",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "REU888",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "20L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "VANKO1G",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "Y8 PUT P627 ALT060",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0717",
    });
  });

  test("decodes #29: /BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 058 REU888 CLRD TO FME…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/BKKDCXA.DC1/CLD 0155 260423 VTBS PDC 058
	REU888 CLRD TO FMEE OFF 20L VIA VANKO1G Y8 PUT P627 ALT060
	SQUAWK 0717
	SELECT ACCEPT TO ACK CLR & CTC GROUND FREQ FOR PUSH BACK & START UP
	DC61`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "BKKDCXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "REU888",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:55:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "VTBS",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "FMEE",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:55",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "058",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "REU888",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "20L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "VANKO1G",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "Y8 PUT P627 ALT060",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0717",
    });
  });

  test("decodes #30: /FUKDLYA.DC1/CLD 0159 260423 RJBB PDC 321 EVA177 CLRD TO RCT…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0159 260423 RJBB PDC 321
	EVA177 CLRD TO RCTP OFF 06L
	 VIA OMGOR1 DEPARTURE FPR MNTN
	 A050 EXP F380
	SQUAWK 3710 ADT 0227 NEXT FREQ
	 121.600 ATIS O
	D23C`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "EVA177",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:59:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJBB",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCTP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:59",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "321",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "EVA177",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "06L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "OMGOR1",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN A050 EXP F380",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3710",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:27",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.600 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "O",
    });
  });

  test("decodes #31: /FUKDLYA.DC1/CLD 0159 260423 RJBB PDC 321 EVA177 CLRD TO RCT…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0159 260423 RJBB PDC 321
	EVA177 CLRD TO RCTP OFF 06L
	 VIA OMGOR1 DEPARTURE FPR MNTN
	 A050 EXP F380
	SQUAWK 3710 ADT 0227 NEXT FREQ
	 121.600 ATIS O
	D23C`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "EVA177",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:59:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJBB",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RCTP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "01:59",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "321",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "EVA177",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "06L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "OMGOR1",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN A050 EXP F380",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3710",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:27",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.600 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "O",
    });
  });

  test("decodes #32: /MEDBAYA.DC1/CLD 0206 260423 OEMA PDC 055 SVA9658 CLRD TO VI…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/MEDBAYA.DC1/CLD 0206 260423 OEMA PDC 055
	SVA9658 CLRD TO VIDP OFF 35 VIA MEDRO1K
	SQUAWK 5264 ATIS Q
	EOBT 0240
	FL080  5905`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "MEDBAYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "SVA9658",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "OEMA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VIDP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:06",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "055",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "SVA9658",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "35",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "MEDRO1K",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "5264",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "Q",
    });
  });

  test("decodes #33: /FUKDLYA.DC1/CLD 0213 260423 RJTT PDC 343 SKY613 CLRD TO ROR…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0213 260423 RJTT PDC 343
SKY613 CLRD TO RORS OFF 05 VIA LAXAS4
 DEPARTURE FPR MNTN F200 EXP F360
SQUAWK 2220 ADT 0252 NEXT FREQ 121.700
 ATIS Y
TSAT 022847F2`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "SKY613",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:13:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RORS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:13",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "343",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "SKY613",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "05",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "LAXAS4",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE FPR MNTN F200 EXP F360",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "2220",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:52",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.700 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "Y",
    });
  });

  test("decodes #34: /FUKDLYA.DC1/CLD 0225 260423 RJAA PDC 825 ALK455 CLRD TO VCB…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0225 260423 RJAA PDC 825
	ALK455 CLRD TO VCBI OFF 34L VIA OLVAN2 DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F340
	SQUAWK 3610 ADT 0320 NEXT FREQ 121.900 ATIS M
	 NEXT FREQ FOR PUSHBACK1C18`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ALK455",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:25:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VCBI",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:25",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "825",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ALK455",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "OLVAN2",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F340",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3610",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "03:20",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.900 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "M",
    });
  });

  test("decodes #35: /FUKDLYA.DC1/CLD 0225 260423 RJAA PDC 825 ALK455 CLRD TO VCB…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0225 260423 RJAA PDC 825
	ALK455 CLRD TO VCBI OFF 34L VIA OLVAN2 DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F340
	SQUAWK 3610 ADT 0320 NEXT FREQ 121.900 ATIS M
	 NEXT FREQ FOR PUSHBACK1C18`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "ALK455",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:25:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJAA",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VCBI",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:25",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "825",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "ALK455",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "34L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "OLVAN2",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SAMUS TRANSITION FPR MNTN F240 EXP F340",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3610",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "03:20",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.900 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "M",
    });
  });

  test("decodes #36: /FUKDLYA.DC1/CLD 0228 260423 RJBB PDC 326 UAE9801 CLRD TO OM…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0228 260423 RJBB PDC 326
	UAE9801 CLRD TO OMDW OFF 06L VIA RINKU1
	 DEPARTURE SOUJA TRANSITION FPR MNTN A050 EXP
	 F280
	SQUAWK 3160 ADT 0344 NEXT FREQ 121.900 ATIS P
	 CALL DELIVERY WHEN READY FOR PUSHBACK ON NEXT
	 FREQB4F1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAE9801",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:28:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJBB",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "OMDW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:28",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "326",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAE9801",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "06L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "RINKU1",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SOUJA TRANSITION FPR MNTN A050 EXP F280",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3160",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "03:44",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.900 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "P",
    });
  });

  test("decodes #37: /FUKDLYA.DC1/CLD 0228 260423 RJBB PDC 326 UAE9801 CLRD TO OM…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0228 260423 RJBB PDC 326
	UAE9801 CLRD TO OMDW OFF 06L VIA RINKU1
	 DEPARTURE SOUJA TRANSITION FPR MNTN A050 EXP
	 F280
	SQUAWK 3160 ADT 0344 NEXT FREQ 121.900 ATIS P
	 CALL DELIVERY WHEN READY FOR PUSHBACK ON NEXT
	 FREQB4F1`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(18);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "UAE9801",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:28:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJBB",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "OMDW",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:28",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "326",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "UAE9801",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "06L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "RINKU1",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SOUJA TRANSITION FPR MNTN A050 EXP F280",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3160",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "03:44",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.900 MHz",
    });
    expect(decodeResult.formatted.items[17]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "P",
    });
  });

  test("decodes #38: /XMNDCYA.DC1/CLD 0229 260423 ZSAM PDC 990 CES5636 CLRD TO ZS…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/XMNDCYA.DC1/CLD 0229 260423 ZSAM
PDC 990
CES5636 CLRD TO ZSSS OFF 23 VIA DOVPU7Y
SQUAWK 0742 ADT 0229 NEXT FREQ 121.950 ATIS M
INITIAL ALT 900M
FL 8100M
READBACK UNNECESSARY.  AIRBORNE 121.35FDED`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "XMNDCYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "CES5636",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:29:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZSAM",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "ZSSS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:29",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "990",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "CES5636",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "23",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "DOVPU7Y",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "0742",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "adt",
      code: "ADT",
      label: "ADT (UTC / flow token)",
      value: "02:29",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.950 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "M",
    });
  });

  test("decodes #39: /HELCLXA.DC1/CLD 0232 260423 EFHK PDC 643 FIN4PV CLRD TO EFO…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/HELCLXA.DC1/CLD 0232 260423 EFHK PDC
643
FIN4PV CLRD TO EFOU OFF
04R VIA TEVRU5C
SQUAWK 6012 NEXT FREQ
121.800
QNH 1011
TSAT 0300
CLIMB TO 4000 FT
659E`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(15);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "HELCLXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "FIN4PV",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:32:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "EFHK",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "EFOU",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:32",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "643",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "FIN4PV",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "04R",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "TEVRU5C",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "6012",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.800 MHz",
    });
  });

  test("decodes #40: /FUKDLYA.DC1/CLD 0234 260423 RJOO PDC 048 JAL114 CLRD TO RJT…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0234 260423 RJOO PDC 048
	JAL114 CLRD TO RJTT OFF 32L
	 VIA ASUKA4 DEPARTURE SHTLE
	 TRANSITION SHTLE Y71 XAC MNTN
	 F160 EXP F270
	SQUAWK 3431 NEXT FREQ 121.700
	 ATIS F
	3DA7`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JAL114",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:34:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJOO",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:34",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "048",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "JAL114",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "32L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "ASUKA4",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SHTLE TRANSITION SHTLE Y71 XAC MNTN F160 EXP F270",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3431",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.700 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "F",
    });
  });

  test("decodes #41: /FUKDLYA.DC1/CLD 0234 260423 RJOO PDC 048 JAL114 CLRD TO RJT…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/FUKDLYA.DC1/CLD 0234 260423 RJOO PDC 048
	JAL114 CLRD TO RJTT OFF 32L
	 VIA ASUKA4 DEPARTURE SHTLE
	 TRANSITION SHTLE Y71 XAC MNTN
	 F160 EXP F270
	SQUAWK 3431 NEXT FREQ 121.700
	 ATIS F
	3DA7`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(17);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "FUKDLYA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "JAL114",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:34:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJOO",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "02:34",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "048",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "JAL114",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "32L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "ASUKA4",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "DEPARTURE SHTLE TRANSITION SHTLE Y71 XAC MNTN F160 EXP F270",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "3431",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "next_frequency",
      code: "NEXTFRQ",
      label: "Next Frequency",
      value: "121.700 MHz",
    });
    expect(decodeResult.formatted.items[16]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "F",
    });
  });

  test("decodes #42: /ICNDLXA.DC1/CLD 0304 260423 RKSI PDC 098 AIC313 CLRD TO VID…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/ICNDLXA.DC1/CLD 0304 260423 RKSI PDC 098
	AIC313 CLRD TO VIDP OFF 33L VIA BOPTA2A  THEN AS FILED FL 260
	SQUAWK 4135 WHEN READY FOR PUSHBACK,CONTACT CLEARANCE DELIVERY 121.6 ATIS B 
	
	1853`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "ICNDLXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AIC313",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:04:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RKSI",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VIDP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "03:04",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "098",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AIC313",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "33L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "BOPTA2A",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "THEN AS FILED FL 260",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "4135",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "B",
    });
  });

  test("decodes #43: /ICNDLXA.DC1/CLD 0304 260423 RKSI PDC 098 AIC313 CLRD TO VID…", () => {
    const decodeResult = plugin.decode({
      label: "A3",
      text: `/ICNDLXA.DC1/CLD 0304 260423 RKSI PDC 098
	AIC313 CLRD TO VIDP OFF 33L VIA BOPTA2A  THEN AS FILED FL 260
	SQUAWK 4135 WHEN READY FOR PUSHBACK,CONTACT CLEARANCE DELIVERY 121.6 ATIS B 
	
	1853`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-a3-pdc");
    expect(decodeResult.formatted.description).toBe("Pre-Departure Clearance (PDC)");
    expect(decodeResult.formatted.items).toHaveLength(16);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Pre-Departure Clearance (PDC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "facility",
      code: "FACILITY",
      label: "ATC Facility",
      value: "ICNDLXA",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype",
      value: "DC1",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AIC313",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:04:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RKSI",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "VIDP",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "time",
      code: "TIME",
      label: "Clearance Time (UTC)",
      value: "03:04",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "date",
      code: "DATE",
      label: "Date",
      value: "2026-04-23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "pdc_sequence",
      code: "PDCSEQ",
      label: "PDC Sequence",
      value: "098",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "callsign",
      code: "CALLSIGN",
      label: "Callsign",
      value: "AIC313",
    });
    expect(decodeResult.formatted.items[11]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "33L",
    });
    expect(decodeResult.formatted.items[12]).toEqual({
      type: "sid",
      code: "SID",
      label: "SID",
      value: "BOPTA2A",
    });
    expect(decodeResult.formatted.items[13]).toEqual({
      type: "route",
      code: "ROUTE",
      label: "Route",
      value: "THEN AS FILED FL 260",
    });
    expect(decodeResult.formatted.items[14]).toEqual({
      type: "squawk",
      code: "SQK",
      label: "Squawk",
      value: "4135",
    });
    expect(decodeResult.formatted.items[15]).toEqual({
      type: "atis_code",
      code: "ATIS",
      label: "ATIS Code",
      value: "B",
    });
  });

});
