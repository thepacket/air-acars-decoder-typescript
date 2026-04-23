import { MessageDecoder } from '../MessageDecoder';
import { Label_5Z_AA } from './Label_5Z_AA';

describe('Label_5Z_AA', () => {
  let plugin: Label_5Z_AA;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_5Z_AA(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-5z-aa");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["5Z"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "5Z", text: '' });
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
  });

  test("decodes #1: OS KDFW /ALT00002307", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KDFW /ALT00002307",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDFW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:07:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #2: OS KDFW /ALT00002307", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KDFW /ALT00002307",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDFW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:07:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #3: OS KDFW /ALT00002307", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KDFW /ALT00002307",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDFW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:07:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #4: OS KDFW /ALT00002307", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KDFW /ALT00002307",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDFW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:07:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #5: OS KDFW /ALT00002307", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KDFW /ALT00002307",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDFW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:07:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #6: OS KDFW /FTM PLS INFORM MOC THAT WE COULD NOT CONNET AP B DU…", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: `OS KDFW /FTM
PLS INFORM MOC THAT 
WE COULD NOT CONNET AP B
DURING FLIGHT 
REPORT IS ON EML
TKS DAVID`,
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KDFW",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "FTM (Free-Text Message)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "free_text",
      code: "FTEXT",
      label: "Free Text",
      value: `PLS INFORM MOC THAT
WE COULD NOT CONNET AP B
DURING FLIGHT
REPORT IS ON EML
TKS DAVID`,
    });
  });

  test("decodes #7: OS KCLT /ALT00002304", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KCLT /ALT00002304",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:04:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #8: OS KCLT /ALT00002304", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KCLT /ALT00002304",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:04:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #9: OS KCLT /ALT00002304", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KCLT /ALT00002304",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:04:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #10: OS KCLT /ALT00002304", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KCLT /ALT00002304",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KCLT",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "23:04:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #11: 22 DISP CMP736 PTY.JFK B.NOCHES. POR FAVOR CONFIRMAR LA PUER…", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: `22
DISP   
CMP736 PTY.JFK
B.NOCHES. POR FAVOR
CONFIRMAR LA PUERTA DE
ARRIBO. GRACIAS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: /ET EXP TIME / KIAH KDCA 22 014004/EON 0218 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KDCA 22 014004/EON 0218 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: /ET EXP TIME / KIAH KLAX 22 013959/EON 0420 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KLAX 22 013959/EON 0420 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: /ET EXP TIME / KIAH KLAX 22 013959/EON 0420 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KLAX 22 013959/EON 0420 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: /ET EXP TIME / KIAH KLAX 22 013959/EON 0420 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KLAX 22 013959/EON 0420 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: /ET EXP TIME / KIAH KLAX 22 013959/EON 0420 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KLAX 22 013959/EON 0420 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: /ET EXP TIME / KIAH KLAX 22 013959/EON 0420 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KLAX 22 013959/EON 0420 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: /ET EXP TIME / KIAH KMAF 22 013922/EON 0225 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KMAF 22 013922/EON 0225 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: /C3 GATE REQ / KIAH KMSP 22 013943 1872 ---- ---- ---- ----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KIAH KMSP 22 013943 1872 ---- ---- ---- ----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: /C3 GATE REQ / KIAH KMSP 22 013943 1872 ---- ---- ---- ----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KIAH KMSP 22 013943 1872 ---- ---- ---- ----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: /R3 HOWGOZIT REQ / KIAH KMSP 22 013935 1872 22 KIAH", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/R3 HOWGOZIT REQ   / KIAH KMSP 22 013935 1872 22 KIAH",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: 22 DISP CMP736 PTY.JFK B.NOCHES. POR FAVOR CONFIRMAR LA PUER…", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: `22
DISP   
CMP736 PTY.JFK
B.NOCHES. POR FAVOR
CONFIRMAR LA PUERTA DE
ARRIBO. GRACIAS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 22 DISP CMP736 PTY.JFK B.NOCHES. POR FAVOR CONFIRMAR LA PUER…", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: `22
DISP   
CMP736 PTY.JFK
B.NOCHES. POR FAVOR
CONFIRMAR LA PUERTA DE
ARRIBO. GRACIAS`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: /ET EXP TIME / KIAH KMAF 22 013922/EON 0225 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KIAH KMAF 22 013922/EON 0225 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: /C3 GATE REQ / KORD KDSM 22 013900 2265", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KORD KDSM 22 013900 2265                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: /C3 GATE REQ / KORD KDSM 22 013900 2265", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KORD KDSM 22 013900 2265                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: /C3 GATE REQ / KORD KDSM 22 013900 2265", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KORD KDSM 22 013900 2265                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: /R3 HOWGOZIT REQ / KORD KSMF 22 013922 1828 22 KORD", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/R3 HOWGOZIT REQ   / KORD KSMF 22 013922 1828 22 KORD",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: /R3 HOWGOZIT REQ / KORD KSMF 22 013922 1828 22 KORD", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/R3 HOWGOZIT REQ   / KORD KSMF 22 013922 1828 22 KORD",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: OS KPHX /IR KPHX0149", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KPHX /IR KPHX0149",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KPHX",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "01:49:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "IR (In Range)",
    });
  });

  test("decodes #31: /C3 GATE REQ / KDEN KBNA 22 013900 1300 ---- ---- ---- ----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KDEN KBNA 22 013900 1300 ---- ---- ---- ----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: /B6 LDG DATA REQ / KSFO KBUR 22 013900 KBUR R15 /----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/B6 LDG DATA REQ   / KSFO KBUR 22 013900 KBUR R15 /----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: /B6 LDG DATA REQ / KSFO KBUR 22 013900 KBUR R15 /----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/B6 LDG DATA REQ   / KSFO KBUR 22 013900 KBUR R15 /----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: /C3 GATE REQ / KDEN KDRO 22 013900 1390 ---- ---- ---- ----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KDEN KDRO 22 013900 1390 ---- ---- ---- ----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: /C3 GATE REQ / KORD KDSM 22 013900 2265", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KORD KDSM 22 013900 2265                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: /C3 GATE REQ / KORD KDSM 22 013900 2265", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KORD KDSM 22 013900 2265                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: /ET EXP TIME / KORD KSAT 22 013840/EON 0330 AUTO", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/ET EXP TIME       / KORD KSAT 22 013840/EON 0330 AUTO",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: /CG PAX CONX REQ / KDFW KEWR 22 013834", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/CG PAX CONX REQ   / KDFW KEWR 22 013834",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: /CG PAX CONX REQ / KDFW KEWR 22 013834", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/CG PAX CONX REQ   / KDFW KEWR 22 013834",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: /CG PAX CONX REQ / KDFW KEWR 22 013834", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/CG PAX CONX REQ   / KDFW KEWR 22 013834",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: /CG PAX CONX REQ / KDFW KEWR 22 013834", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/CG PAX CONX REQ   / KDFW KEWR 22 013834",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: OS KSFO /IR KSFO0149", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KSFO /IR KSFO0149",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KSFO",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "01:49:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "IR (In Range)",
    });
  });

  test("decodes #43: /C3 MSYIAH", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 MSYIAH",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: /IR TYS0100001/UM /WC /IB /ETA 0212", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/IR TYS0100001/UM   /WC   /IB   /ETA 0212",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: 22KMIA REQUEST GATE ASSIGNMENT ETA0222", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "22KMIA REQUEST GATE ASSIGNMENT ETA0222",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: /C3 GATE REQ / KDEN KDFW 22 013801 2239", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KDEN KDFW 22 013801 2239                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: /C3 GATE REQ / KDEN KDFW 22 013801 2239", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/C3 GATE REQ       / KDEN KDFW 22 013801 2239                    ",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: M74AIB0282/RL RJAA-LEMD", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "M74AIB0282/RL RJAA-LEMD",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: OS KEWR /ALT00000223", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "OS KEWR /ALT00000223",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "airline",
      code: "AIRLINE",
      label: "Airline",
      value: "American Airlines / US Airways",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Airline Designated Downlink (AA Variant 1)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "icao",
      code: "DST",
      label: "Destination",
      value: "KEWR",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "ETA",
      label: "Estimated Time of Arrival",
      value: "02:23:00",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "command",
      code: "CMD",
      label: "Command",
      value: "OS (Operational Status (Out-Safe))",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "subcommand",
      code: "SUBCMD",
      label: "Sub-command",
      value: "ALT (Altimeter / Arrival Data)",
    });
  });

  test("decodes #50: /B6 LDG DATA REQ / KSFO KBUR 22 013809 KBUR R08 /----", () => {
    const decodeResult = plugin.decode({
      label: "5Z",
      text: "/B6 LDG DATA REQ   / KSFO KBUR 22 013809 KBUR R08 /----",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-5z-aa");
    expect(decodeResult.formatted.description).toBe("Airline Designated Downlink (AA / US Airways Variant 1)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
