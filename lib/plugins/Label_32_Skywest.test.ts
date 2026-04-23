import { MessageDecoder } from '../MessageDecoder';
import { Label_32_Skywest } from './Label_32_Skywest';

describe('Label_32_Skywest', () => {
  let plugin: Label_32_Skywest;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_32_Skywest(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-32-skywest");
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["32"]);
  });

  test('reports own plugin name on empty text', () => {
    const r = plugin.decode({ label: "32", text: '' });
    expect(r.decoder.name).toBe("label-32-skywest");
  });

  test("decodes #1: P,E,2026-04-23 04:56:50,5630,67624,N 46.132 W 122.529,19862,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 04:56:50,5630,67624,N 46.132 W 122.529,19862,352,022,-24,340,361,587,0532,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "46.132 N, 122.529 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "19862 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 04:56:50"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #2: P,E,2026-04-23 04:57:24,3840,70928,N 47.619 W 122.317,3434,2…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 04:57:24,3840,70928,N 47.619 W 122.317,3434,208,022,3,162,182,281,0500,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "47.619 N, 122.317 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "3434 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 04:57:24"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #3: P,R,2026-04-23 04:57:25,10088,75300,N33.620 W112.160,12049,2…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 04:57:25,10088,75300,N33.620 W112.160,12049,244,21,+01,338,315,489,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "33.620 N, 112.160 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "12049 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 04:57:25"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #4: W/BHNDOXNH230457 W/B NH0027/23 A", () => {
    const r = plugin.decode({
      label: "32",
      text: "W/BHNDOXNH230457\n\tW/B             \n\tNH0027/23 A",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #5: W/BHNDOXNH230457 W/B NH0027/23 A", () => {
    const r = plugin.decode({
      label: "32",
      text: "W/BHNDOXNH230457\n\tW/B             \n\tNH0027/23 A",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #6: P,E,2026-04-23 04:58:50,5390,67384,N 46.327 W 122.497,23420,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 04:58:50,5390,67384,N 46.327 W 122.497,23420,354,019,-34,361,380,630,0532,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "46.327 N, 122.497 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "23420 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 04:58:50"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #7: APR,V04,CX 289 20260422 1,0+49.730,+009.634,156,011200", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V04,CX 289 20260422 1,0+49.730,+009.634,156,011200",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #8: P,H,23APR26 04:59:40,3380, 45720,N 37.506 W122.031,5183,358,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,H,23APR26 04:59:40,3380,  45720,N 37.506 W122.031,5183,358, 15,  10,221750,208.0,345,0504,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #9: P,E,2026-04-23 04:59:26,9540, ,N 37.621 W 122.381,371,289,00…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 04:59:26,9540,     ,N 37.621 W 122.381,371,289,009,14,146,161,245,0349,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #10: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #11: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #12: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #13: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #14: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #15: P64OCCOVKL230459 SLOT MESSAGE.... . KLM9857 ALLOCATION. 0634…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P64OCCOVKL230459\r\nSLOT MESSAGE....\r\n.\r\nKLM9857 ALLOCATION. 0634",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #16: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #17: P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,29…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:00:07,6252,66900,N45.570 W122.470,36078,294,29,-62,409,432,764,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "45.570 N, 122.470 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "36078 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:00:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #18: APR,V04,CX 815 20260422 1,0+25.077,+121.392,379,019600", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V04,CX 815 20260422 1,0+25.077,+121.392,379,019600",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #19: P,R,2026-04-23 05:01:25,9500,74700,N33.983 W111.955,19746,26…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:01:25,9500,74700,N33.983 W111.955,19746,268,31,-15,397,392,625,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "33.983 N, 111.955 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "19746 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:01:25"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #20: P,E,2026-04-23 05:01:27,6130,68118,N 46.363 W 123.184,26751,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:01:27,6130,68118,N 46.363 W 123.184,26751,350,020,-42,447,428,722,0538,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "46.363 N, 123.184 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "26751 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:01:27"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #21: P,E,2026-04-23 05:03:07,8950, ,N 37.621 W 122.380,373,281,01…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:03:07,8950,     ,N 37.621 W 122.380,373,281,010,14,145,157,239,0334,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #22: SPTTYOWDJL230503 SPOT-NO ( PVG ) 21", () => {
    const r = plugin.decode({
      label: "32",
      text: "SPTTYOWDJL230503\n\tSPOT-NO  ( PVG )\n\t  21",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #23: SPTTYOWDJL230503 SPOT-NO ( PVG ) 21", () => {
    const r = plugin.decode({
      label: "32",
      text: "SPTTYOWDJL230503\n\tSPOT-NO  ( PVG )\n\t  21",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #24: P,H,23APR26 05:03:40,3300, 45640,N 37.585 W122.298,1351, 10,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,H,23APR26 05:03:40,3300,  45640,N 37.585 W122.298,1351, 10, 12,  15,173125,174.0,269,0504,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #25: P,R,2026-04-23 05:03:25,4856,65700,N43.806 W076.493,29042,32…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:03:25,4856,65700,N43.806 W076.493,29042,325,89,-45,471,451,766,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "43.806 N, 76.493 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "29042 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:03:25"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #26: P,R,2026-04-23 05:03:25,4856,65700,N43.806 W076.493,29042,32…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:03:25,4856,65700,N43.806 W076.493,29042,325,89,-45,471,451,766,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "43.806 N, 76.493 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "29042 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:03:25"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #27: P,E,2026-04-23 05:03:27,5920,67908,N 46.113 W 123.172,29054,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:03:27,5920,67908,N 46.113 W 123.172,29054,325,016,-48,451,437,746,0539,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "46.113 N, 123.172 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "29054 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:03:27"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #28: 220532 KDTW EHAM8 /FN 0134 06…", () => {
    const r = plugin.decode({
      label: "32",
      text: "220532 KDTW EHAM8\r\n/FN 0134\r\n          06                                ",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #29: P,E,2026-04-23 05:04:37,8400, ,N 37.623 W 122.380,265,295,01…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:04:37,8400,     ,N 37.623 W 122.380,265,295,011,14,153,166,252,    ,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #30: P,E,2026-04-23 05:18:20,5740,70149,N 44.662 W 122.960,9870,3…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:18:20,5740,70149,N 44.662 W 122.960,9870,332,020,-2,315,298,463,0536,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "44.662 N, 122.960 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "9870 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:18:20"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #31: APR,V03,CX 208720260422 1,KMIA,PANC,N035.113,W089.296,38003,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V03,CX 208720260422 1,KMIA,PANC,N035.113,W089.296,38003, 611",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #32: P,E,2026-04-23 05:21:23,4090,66784,N 37.598 W 122.325,607,32…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:21:23,4090,66784,N 37.598 W 122.325,607,323,011,13,125,135,205,0521,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "37.598 N, 122.325 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "607 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:21:23"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #33: ,293,,,199,389,389,,,,,,3789", () => {
    const r = plugin.decode({
      label: "32",
      text: ",293,,,199,389,389,,,,,,3789\r\n",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #34: APR,V04,CX 872 20260423 1,0+37.845,-122.616,125,013200", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V04,CX 872 20260423 1,0+37.845,-122.616,125,013200",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #35: P,E,2026-04-23 05:24:10,3630,68422,N 37.593 W 122.313,803,33…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:24:10,3630,68422,N 37.593 W 122.313,803,334,012,12,127,137,208,0525,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "37.593 N, 122.313 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "803 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:24:10"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #36: P,E,2026-04-23 05:24:50,4280,66274,N 48.683 W 122.581,6225,3…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:24:50,4280,66274,N 48.683 W 122.581,6225,310,019,1,258,275,427,0531,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "48.683 N, 122.581 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "6225 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:24:50"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #37: P,R,2026-04-23 05:25:07,5608,66200,N47.615 W122.350,2201,211…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,R,2026-04-23 05:25:07,5608,66200,N47.615 W122.350,2201,211,18,+05,224,217,334,,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "47.615 N, 122.350 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "2201 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:25:07"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,R"
      }
    ]);
  });

  test("decodes #38: /FB 0099/AD CYVR/N 49.227,W123.218,1201 ONRP 0603/23 KJFK/CY…", () => {
    const r = plugin.decode({
      label: "32",
      text: " /FB 0099/AD CYVR/N 49.227,W123.218,1201 ONRP   0603/23 KJFK/CYVR .N981JT\r\n/ON  0525/FOB 0099",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #39: P,E,2026-04-23 05:26:21,4440,67233,N 48.540 W 122.459,15043,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:26:21,4440,67233,N 48.540 W 122.459,15043,335,045,-13,331,375,596,0545,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "48.540 N, 122.459 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "15043 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:26:21"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #40: P,E,2026-04-23 05:26:26,3690,67997,N 48.924 W 122.846,10345,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:26:26,3690,67997,N 48.924 W 122.846,10345,355,032,-4,272,295,462,0543,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "48.924 N, 122.846 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "10345 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:26:26"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #41: 33,I,3,3,DFW,237053,-544794,-369,-1591,20,0125,-17,636,27,10…", () => {
    const r = plugin.decode({
      label: "32",
      text: "33,I,3,3,DFW,237053,-544794,-369,-1591,20,0125,-17,636,27,10,374,377,758,60353CB",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #42: P,E,2026-04-23 05:26:26,3690,67997,N 48.924 W 122.846,10345,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:26:26,3690,67997,N 48.924 W 122.846,10345,355,032,-4,272,295,462,0543,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "48.924 N, 122.846 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "10345 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:26:26"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #43: ,293,,,196,389,389,,,,,,685B", () => {
    const r = plugin.decode({
      label: "32",
      text: ",293,,,196,389,389,,,,,,685B\r\n",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #44: APR,V03,CX 317020260423 2,PANC,KMIA,N060.595,W150.045,12013,…", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V03,CX 317020260423 2,PANC,KMIA,N060.595,W150.045,12013, 957",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #45: P,E,2026-04-23 05:28:26,3640,67947,N 49.019 W 122.998,9512,3…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:28:26,3640,67947,N 49.019 W 122.998,9512,355,015,-4,248,260,406,0542,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "49.019 N, 122.998 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "9512 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:28:26"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

  test("decodes #46: APR,V04,CX 543 20260423 1,0+24.477,+120.559,339,020300", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V04,CX 543 20260423 1,0+24.477,+120.559,339,020300",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #47: HKJK EHAM LS ED 1 RCVD", () => {
    const r = plugin.decode({
      label: "32",
      text: "HKJK EHAM  LS ED 1 RCVD",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #48: APR,V04,CX 319 20260423 1,0+26.652,+121.012,320,023900", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V04,CX 319 20260423 1,0+26.652,+121.012,320,023900",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #49: APR,V04,CX 872 20260423 1,0+37.453,-122.274,082,012900", () => {
    const r = plugin.decode({
      label: "32",
      text: "APR,V04,CX 872 20260423 1,0+37.453,-122.274,082,012900",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #50: P,E,2026-04-23 05:30:26,3610,67917,N 49.087 W 123.164,7264,3…", () => {
    const r = plugin.decode({
      label: "32",
      text: "P,E,2026-04-23 05:30:26,3610,67917,N 49.087 W 123.164,7264,318,022,1,217,236,366,0543,",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-32-skywest");
    expect(r.formatted.description).toBe("Position / Cruise Report");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Skywest Position / Cruise Report"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "49.087 N, 123.164 W"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "7264 feet"
      },
      {
        "type": "timestamp_iso",
        "code": "TSISO",
        "label": "Timestamp (UTC)",
        "value": "2026-04-23 05:30:26"
      },
      {
        "type": "report_classifiers",
        "code": "CLASS",
        "label": "Report Classifiers",
        "value": "P,E"
      }
    ]);
  });

});
