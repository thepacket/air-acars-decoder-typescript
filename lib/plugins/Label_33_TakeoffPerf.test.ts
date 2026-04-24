import { MessageDecoder } from '../MessageDecoder';
import { Label_33_TakeoffPerf } from './Label_33_TakeoffPerf';

describe('Label_33_TakeoffPerf', () => {
  let plugin: Label_33_TakeoffPerf;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_33_TakeoffPerf(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-33-takeoff-perf");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["33"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "33", text: '' });
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
  });

  test("decodes #1: 96,E,37.316,-80.431,29997,*****,KIAD,KTYS,23R,5L,9,0,0,,,,,4…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "96,E,37.316,-80.431,29997,*****,KIAD,KTYS,23R,5L,9,0,0,,,,,42.3,0,0,0,,",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(8);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "In-Flight Performance Report (Label 33 — Variant B)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Variant",
      value: "96",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "37.316 N, 80.431 W",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "altitude",
      code: "ALT",
      label: "Altitude",
      value: "29997 feet",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KIAD",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KTYS",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Runway (arrival)",
      value: "23R",
    });
  });

  test("decodes #2: 33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "AVP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "18L",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "18R",
    });
  });

  test("decodes #3: 33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "AVP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "18L",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "18R",
    });
  });

  test("decodes #4: 33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "AVP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "18L",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "18R",
    });
  });

  test("decodes #5: 33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "AVP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "18L",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "18R",
    });
  });

  test("decodes #6: 33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,AVP,CLT,18L,18R,,,,,0,0,,,0,0,0,,69.2,0D43",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "AVP",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "18L",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "18R",
    });
  });

  test("decodes #7: 33,I,BHM,DCA,19,15,,,,,0,0,5/5/5,,0,0,0,,62.1,A902", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,BHM,DCA,19,15,,,,,0,0,5/5/5,,0,0,0,,62.1,A902",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "BHM",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "DCA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "19",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "15",
    });
  });

  test("decodes #8: 3,D,CYDF,CYYZ,24R,23,+18,2991,190,03,70170,,0,0,0,0,0,1,0,,,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "3,D,CYDF,CYYZ,24R,23,+18,2991,190,03,70170,,0,0,0,0,0,1,0,,,,,,,,,,,,,,,,12B7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "D (Departure)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "CYDF",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "24R",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "23",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "temperature",
      code: "OAT",
      label: "Outside Air Temperature",
      value: "+18°C",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "290° @ 91 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "flaps",
      code: "FLAPS",
      label: "Flaps",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "takeoff_weight",
      code: "TOW",
      label: "Takeoff Weight",
      value: "70,170 lbs",
    });
  });

  test("decodes #9: 3,D,CYDF,CYYZ,24R,23,+18,2991,190,03,70170,,0,0,0,0,0,1,0,,,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "3,D,CYDF,CYYZ,24R,23,+18,2991,190,03,70170,,0,0,0,0,0,1,0,,,,,,,,,,,,,,,,12B7",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(11);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "3",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "D (Departure)",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "CYDF",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "CYYZ",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "24R",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "23",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "temperature",
      code: "OAT",
      label: "Outside Air Temperature",
      value: "+18°C",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "wind",
      code: "WIND",
      label: "Wind",
      value: "290° @ 91 kt",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "flaps",
      code: "FLAPS",
      label: "Flaps",
      value: "3",
    });
    expect(decodeResult.formatted.items[10]).toEqual({
      type: "takeoff_weight",
      code: "TOW",
      label: "Takeoff Weight",
      value: "70,170 lbs",
    });
  });

  test("decodes #10: 33,I,CHS,DCA,19,15,,,,,0,0,,,0,0,0,,61.4,E290", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,CHS,DCA,19,15,,,,,0,0,,,0,0,0,,61.4,E290",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "CHS",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "DCA",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "19",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "15",
    });
  });

  test("decodes #11: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #12: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #13: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #14: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #15: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #16: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #17: 2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0628,-21,306, 57,HFD    ,01:42,PUT    ,005,720,341,446,0062,0068,0055,025,230426",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: 2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0628,-21,306, 57,HFD    ,01:42,PUT    ,005,720,341,446,0062,0068,0055,025,230426",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: 4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,RIC,LGA,4,,,,,,1,0,0,0,59.9,0,A8CE",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("RIC");
    expect(decodeResult.raw.arrival_icao).toBe("LGA");
    expect(decodeResult.raw.performance_value).toBeCloseTo(59.9, 1);
  });

  test("decodes #20: 2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0628,-21,306, 57,HFD    ,01:42,PUT    ,005,720,341,446,0062,0068,0055,025,230426",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: 2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "2026-04-23,01:39:37,KEWR,LLBG,0026,N41253W072585,461,FL188,0628,-21,306, 57,HFD    ,01:42,PUT    ,005,720,341,446,0062,0068,0055,025,230426",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: /33 SYS CONF RPT / KIAH KLAS 22 013935 AC TYPE B737 ACARS 2.…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `/33 SYS CONF RPT   / KIAH KLAS 22 013935
AC TYPE B737
ACARS 2.5
MU HW CPN 822-1239-151
MU SER NO 533D0H
CORE CPCI 832-9548-016
AOC CPCI  832-4023-16H
VM CPCI   815-4546-013
/TRIGGER STATUS
INITIAL EON  030
PERIODIC EON 090`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: /33 SYS CONF RPT / KIAH KLAS 22 013935 AC TYPE B737 ACARS 2.…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `/33 SYS CONF RPT   / KIAH KLAS 22 013935
AC TYPE B737
ACARS 2.5
MU HW CPN 822-1239-151
MU SER NO 533D0H
CORE CPCI 832-9548-016
AOC CPCI  832-4023-16H
VM CPCI   815-4546-013
/TRIGGER STATUS
INITIAL EON `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: LDR01,6,J,22,KSFO,KLAX,24R/,25L/,,,,,0,07,,07,,0,0,0,0,0,,,,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "LDR01,6,J,22,KSFO,KLAX,24R/,25L/,,,,,0,07,,07,,0,0,0,0,0,,,,,165.1,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: LDR01,6,J,22,KPHL,KMCO,17L/,18R/,,,,,0,07,,07,,0,0,0,0,0,,,,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "LDR01,6,J,22,KPHL,KMCO,17L/,18R/,,,,,0,07,,07,,0,0,0,0,0,,,,,158.2,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: P40TYOIHNH230137 NOTAM MESSAGE AUTO UPLINK 01:37/23Z NO NEW …", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `P40TYOIHNH230137
	NOTAM MESSAGE
	AUTO UPLINK  01:37/23Z
	
	NO NEW NOTAM    BTN 2200Z - 0439Z
	ERTE/ERTW/ERTA/GNRL/
	
	END OF REPORT`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: P40TYOIHNH230137 NOTAM MESSAGE AUTO UPLINK 01:37/23Z NO NEW …", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `P40TYOIHNH230137
	NOTAM MESSAGE
	AUTO UPLINK  01:37/23Z
	
	NO NEW NOTAM    BTN 2200Z - 0439Z
	ERTE/ERTW/ERTA/GNRL/
	
	END OF REPORT`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: P40TYOIHNH230137 NOTAM MESSAGE AUTO UPLINK 01:37/23Z NO NEW …", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `P40TYOIHNH230137
	NOTAM MESSAGE
	AUTO UPLINK  01:37/23Z
	
	NO NEW NOTAM    BTN 2200Z - 0439Z
	RJFU/RJTT/RJAA/RJSS/ERTA/ERTE/ERTW/
	
	PART 1  CONTINUE`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: P40TYOIHNH230137 NOTAM MESSAGE AUTO UPLINK 01:37/23Z NO NEW …", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `P40TYOIHNH230137
	NOTAM MESSAGE
	AUTO UPLINK  01:37/23Z
	
	NO NEW NOTAM    BTN 2200Z - 0439Z
	RJFU/RJTT/RJAA/RJSS/ERTA/ERTE/ERTW/
	
	PART 1  CONTINUE`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: FLT NO LDW TIME 529 638.5 0137Z WIND OAT C QNH 347/21 -4 29.…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `FLT NO     LDW      TIME
529       638.5    0137Z
WIND      OAT C      QNH
347/21      -4     29.65
------------------------
 
 
 
 
 
REMARKS
-------- RWY 03 --------
WET ICE
TRY THRUST RVRSR CREDIT
------`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: 262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,63…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,638.5,23A3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("KHIF");
    expect(decodeResult.raw.arrival_icao).toBe("CYQX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(638.5, 1);
  });

  test("decodes #32: 262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,63…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,638.5,23A3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("KHIF");
    expect(decodeResult.raw.arrival_icao).toBe("CYQX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(638.5, 1);
  });

  test("decodes #33: 262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,63…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,638.5,23A3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("KHIF");
    expect(decodeResult.raw.arrival_icao).toBe("CYQX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(638.5, 1);
  });

  test("decodes #34: 262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,63…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "262,B,22,KHIF,CYQX,03/,/,8,WET ICE,0,DRY,,,,,,1,0,0,0,0,0,638.5,23A3",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("KHIF");
    expect(decodeResult.raw.arrival_icao).toBe("CYQX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(638.5, 1);
  });

  test("decodes #35: /33 SYS CONF RPT / KORD KONT 22 013653 AC TYPE B737 ACARS 2.…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `/33 SYS CONF RPT   / KORD KONT 22 013653
AC TYPE B737
ACARS 2.5
MU HW CPN 822-1239-151
MU SER NO 4K2F61
CORE CPCI 832-9548-016
AOC CPCI  832-4023-16H
VM CPCI   815-4546-013
/TRIGGER STATUS
INITIAL EON `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: P,R,2026-04-23 01:36:34, 21520430,22APR,4123,KORD,KDTW,5448,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,R,2026-04-23 01:36:34,  21520430,22APR,4123,KORD,KDTW,5448,KDTW,66396,4500,22R,6,21L,6,,0,0,0,0,,,,,,0,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: 33,I,CLT,TYS,23R,5L,,,,,0,0,5,5,0,0,0,,72.0,7C48", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "33,I,CLT,TYS,23R,5L,,,,,0,0,5,5,0,0,0,,72.0,7C48",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(7);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Takeoff / Departure Performance Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "subtype",
      code: "SUBTYPE",
      label: "Subtype / Sequence",
      value: "33",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "phase",
      code: "PHASE",
      label: "Phase",
      value: "I",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "CLT",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "TYS",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "runway",
      code: "RWY",
      label: "Departure Runway",
      value: "23R",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "secondary_runway",
      code: "RWY2",
      label: "Secondary Runway / Intersection",
      value: "5L",
    });
  });

  test("decodes #38: P,H,23APR26 01:35:37,21521408,22APR,5582,KMKE,KORD,3596,KORD…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,H,23APR26 01:35:37,21521408,22APR,5582,KMKE,KORD,3596,KORD,38478,2911,7R,6,,6,,0,Y,0,0,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: P,H,23APR26 01:35:37,21521408,22APR,5582,KMKE,KORD,3596,KORD…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,H,23APR26 01:35:37,21521408,22APR,5582,KMKE,KORD,3596,KORD,38478,2911,7R,6,,6,,0,Y,0,0,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: 4,G,22,JFK,JAX,08,14,,,,,0,0,0,0,70.4,0,6337", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,JFK,JAX,08,14,,,,,0,0,0,0,70.4,0,6337",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("JFK");
    expect(decodeResult.raw.arrival_icao).toBe("JAX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(70.4, 1);
  });

  test("decodes #41: P,H,23APR26 01:35:29,21521408,22APR,5582,KMKE,KORD,3596,KORD…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,H,23APR26 01:35:29,21521408,22APR,5582,KMKE,KORD,3596,KORD,38478,2911,7RR,6,,6,,0,Y,0,0,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: P,H,23APR26 01:35:29,21521408,22APR,5582,KMKE,KORD,3596,KORD…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,H,23APR26 01:35:29,21521408,22APR,5582,KMKE,KORD,3596,KORD,38478,2911,7RR,6,,6,,0,Y,0,0,,,,,,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: /33 SYS CONF RPT / KORD KPDX 22 013550 AC TYPE B737 ACARS 2.…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `/33 SYS CONF RPT   / KORD KPDX 22 013550
AC TYPE B737
ACARS 2.5
MU HW CPN 822-1239-151
MU SER NO 47YLKM
CORE CPCI 832-9548-016
AOC CPCI  832-4023-16H
VM CPCI   815-4546-013
/TRIGGER STATUS
INITIAL EON  030
PERIODIC EON 090`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: /33 SYS CONF RPT / KORD KPDX 22 013550 AC TYPE B737 ACARS 2.…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: `/33 SYS CONF RPT   / KORD KPDX 22 013550
AC TYPE B737
ACARS 2.5
MU HW CPN 822-1239-151
MU SER NO 47YLKM
CORE CPCI 832-9548-016
AOC CPCI  832-4023-16H
VM CPCI   815-4546-013
/TRIGGER STATUS
INITIAL EON `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: P,R,2026-04-23 01:35:49, 21522081,22APR,6452,KLRD,KDFW,5104,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,R,2026-04-23 01:35:49,  21522081,22APR,6452,KLRD,KDFW,5104,KDFW,52726,3780,18R,6,17C,6,,0,0,0,0,,,,,,0,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: P,R,2026-04-23 01:35:49, 21522081,22APR,6452,KLRD,KDFW,5104,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,R,2026-04-23 01:35:49,  21522081,22APR,6452,KLRD,KDFW,5104,KDFW,52726,3780,18R,6,17C,6,,0,0,0,0,,,,,,0,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: P,R,2026-04-23 01:35:49, 21522081,22APR,6452,KLRD,KDFW,5104,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,R,2026-04-23 01:35:49,  21522081,22APR,6452,KLRD,KDFW,5104,KDFW,52726,3780,18R,6,17C,6,,0,0,0,0,,,,,,0,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: P,R,2026-04-23 01:35:49, 21522081,22APR,6452,KLRD,KDFW,5104,…", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "P,R,2026-04-23 01:35:49,  21522081,22APR,6452,KLRD,KDFW,5104,KDFW,52726,3780,18R,6,17C,6,,0,0,0,0,,,,,,0,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.formatted.description).toBe("Takeoff / Departure Performance Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: 4,G,22,JFK,JAX,08,14,,,,,0,0,0,0,70.4,0,6337", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,JFK,JAX,08,14,,,,,0,0,0,0,70.4,0,6337",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("JFK");
    expect(decodeResult.raw.arrival_icao).toBe("JAX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(70.4, 1);
  });

  test("decodes #50: 4,G,22,JFK,JAX,08,14,,,,,0,0,0,0,70.4,0,6337", () => {
    const decodeResult = plugin.decode({
      label: "33",
      text: "4,G,22,JFK,JAX,08,14,,,,,0,0,0,0,70.4,0,6337",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("partial");
    expect(decodeResult.decoder.name).toBe("label-33-takeoff-perf");
    expect(decodeResult.raw.departure_icao).toBe("JFK");
    expect(decodeResult.raw.arrival_icao).toBe("JAX");
    expect(decodeResult.raw.performance_value).toBeCloseTo(70.4, 1);
  });

  test('decodes Variant C: 39,D,23,KSEA,KSAN (analyst report sample)', () => {
    const decodeResult = plugin.decode({
      label: '33',
      text: '39,D,23,KSEA,KSAN,27,,,,,,,,0,,0,0,0,0,0,0,0,0,0,0,138.0,3123',
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('partial');
    expect(decodeResult.decoder.name).toBe('label-33-takeoff-perf');
    expect(decodeResult.raw.subtype).toBe('39');
    expect(decodeResult.raw.phase).toBe('D');
    expect(decodeResult.raw.departure_icao).toBe('KSEA');
    expect(decodeResult.raw.arrival_icao).toBe('KSAN');
    expect(decodeResult.raw.performance_value).toBeCloseTo(138.0, 1);
    const codes = decodeResult.formatted.items.map((i) => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('SUBTYPE');
    expect(codes).toContain('PHASE');
    expect(codes).toContain('ORG');
    expect(codes).toContain('DST');
    expect(codes).toContain('PERF');
  });

});
