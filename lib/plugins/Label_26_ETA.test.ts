import { MessageDecoder } from '../MessageDecoder';
import { Label_26_ETA } from './Label_26_ETA';

describe('Label_26_ETA', () => {
  let plugin: Label_26_ETA;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_26_ETA(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-26-eta-compact");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["26"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "26", text: '' });
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
  });

  test("decodes #1: 2226KIAHAF0099/22 0647LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `2226KIAHAF0099/22
0647LFPG09L`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0099",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KIAH",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:26:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "06:47:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:26",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "06:47",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #2: 2239LFPGAF024X/22 2315KLAX25L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `2239LFPGAF024X/22
2315KLAX25L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF024X",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KLAX",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:39:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:15:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "22:39",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "23:15",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "25L",
    });
  });

  test("decodes #3: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #4: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #5: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #7: DPT01G74447/22222249KAVPKORD****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74447/22222249KAVPKORD****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #8: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: DPT01G74450/22222327KORDKTVC****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74450/22222327KORDKTVC****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: 2326LFPGAF0010/22 2341KJFK22L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `2326LFPGAF0010/22
2341KJFK22L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0010",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KJFK",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "23:26:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:41:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "23:26",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "23:41",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "22L",
    });
  });

  test("decodes #11: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `-
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: DPT01G74188/22230152KIADKEWR****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74188/22230152KIADKEWR****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: DPT01G74188/22230152KIADKEWR****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74188/22230152KIADKEWR****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: DPT01G74188/22230152KIADKEWR****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74188/22230152KIADKEWR****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: DPT01G74188/22230152KIADKEWR****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74188/22230152KIADKEWR****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: 220226 KMSP KSTL7 /FN 1609 KSTL", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `220226 KMSP KSTL7
/FN 1609
KSTL`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "-",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: DPT01G74523/22230251KIADKBUF****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74523/22230251KIADKBUF****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: DPT01G74523/22230251KIADKBUF****************************", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: "DPT01G74523/22230251KIADKBUF****************************",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #25: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #26: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #27: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #28: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #29: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #30: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #31: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #32: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #33: 0251RJTTAF0279/22 0336LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0251RJTTAF0279/22
0336LFPG09L `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:51:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:51",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

  test("decodes #34: 0256RPLLAF0249/22 0341LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0256RPLLAF0249/22
0341LFPG08R`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0249",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RPLL",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "02:56:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:41:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "02:56",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:41",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #35: -", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `-
`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: 0305ZSPDAF0111/22 0320LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0305ZSPDAF0111/22
0320LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0111",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "ZSPD",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:05:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:20:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:05",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:20",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #37: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #38: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #39: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #40: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #41: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #42: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #43: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #44: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #45: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #46: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #47: 0306RJTTAF0279/22 0336LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0306RJTTAF0279/22
0336LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0279",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "RJTT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:06:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:36:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:06",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:36",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #48: 0308SOCAAF0837/22 0323LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0308SOCAAF0837/22
0323LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0837",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "SOCA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:08:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:23:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:08",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #49: 0308SOCAAF0837/22 0323LFPG08R", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0308SOCAAF0837/22
0323LFPG08R `,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF0837",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "SOCA",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:08:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:23:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:08",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:23",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "08R",
    });
  });

  test("decodes #50: 0311KBOSAF333F/22 0356LFPG09L", () => {
    const decodeResult = plugin.decode({
      label: "26",
      text: `0311KBOSAF333F/22
0356LFPG09L`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-26-eta-compact");
    expect(decodeResult.formatted.description).toBe("Compact ETA / Arrival Report");
    expect(decodeResult.formatted.items).toHaveLength(10);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Compact ETA / Arrival Report",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "flight_number",
      code: "FLIGHT",
      label: "Flight Number",
      value: "AF333F",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "ORG",
      label: "Origin",
      value: "KBOS",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "LFPG",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "03:11:00",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "03:56:00",
    });
    expect(decodeResult.formatted.items[6]).toEqual({
      type: "report_time",
      code: "RPTTIME",
      label: "Report Time (UTC, HHMM)",
      value: "03:11",
    });
    expect(decodeResult.formatted.items[7]).toEqual({
      type: "day",
      code: "DAY",
      label: "Day of Month",
      value: "22",
    });
    expect(decodeResult.formatted.items[8]).toEqual({
      type: "eta_time",
      code: "ETATIME",
      label: "ETA (UTC, HHMM)",
      value: "03:56",
    });
    expect(decodeResult.formatted.items[9]).toEqual({
      type: "arrival_runway",
      code: "ARRRWY",
      label: "Expected Landing Runway",
      value: "09L",
    });
  });

});
