import { MessageDecoder } from '../MessageDecoder';
import { Label_SA_MediaAdvisory } from './Label_SA_MediaAdvisory';

describe('Label_SA_MediaAdvisory', () => {
  let plugin: Label_SA_MediaAdvisory;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_SA_MediaAdvisory(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-sa-media-advisory");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["SA"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "SA", text: '' });
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
  });

  test("decodes #1: 0EV222148V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV222148V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:21:48",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:21:48",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #2: 0EV222916VS", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV222916VS",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:16",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:16",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "VS",
    });
  });

  test("decodes #3: 0EV222913VS", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV222913VS",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:13",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:13",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "VS",
    });
  });

  test("decodes #4: 0E22229102", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0E22229102",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0E2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "2",
    });
  });

  test("decodes #5: 0E22229102", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0E22229102",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0E2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "2",
    });
  });

  test("decodes #6: 0E22229102", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0E22229102",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0E2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "2",
    });
  });

  test("decodes #7: 0E22229102", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0E22229102",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0E2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "2",
    });
  });

  test("decodes #8: 0E22229102", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0E22229102",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0E2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:29:10",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "2",
    });
  });

  test("decodes #9: 0EV222852V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV222852V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:28:52",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:28:52",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #10: 0E22228402", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0E22228402",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0E2",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "22:28:40",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:28:40",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "2",
    });
  });

  test("decodes #11: 0EV014010V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV014010V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:10",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:40:10",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #12: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #13: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #14: S91ACZ04270ES013959VS", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S91ACZ04270ES013959VS",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: 0LS014005V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0LS014005V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0LS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:05",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:40:05",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #16: 0LS014005V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0LS014005V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0LS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:05",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:40:05",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #17: 0LS014005V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0LS014005V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0LS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:05",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:40:05",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #18: S04ASQ02240LV014001S/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S04ASQ02240LV014001S/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: S17AOZ05110ES013957VS/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S17AOZ05110ES013957VS/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: 0LS014001V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0LS014001V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0LS",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:40:01",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:40:01",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #21: 0EV013959VS", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013959VS",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:59",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:59",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "VS",
    });
  });

  test("decodes #22: S67AUL02660ES013954VS", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S67AUL02660ES013954VS",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #24: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #25: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #26: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #27: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #28: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #29: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #30: S78AJL05080ES013941VS/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S78AJL05080ES013941VS/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: S35AQR89390LV013932S", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S35AQR89390LV013932S",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: S13ATK63090L2013940S", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "S13ATK63090L2013940S",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #34: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #35: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #36: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #37: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #38: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #39: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #40: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #41: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #42: 0EV013942V/", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013942V/",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:42",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V/",
    });
  });

  test("decodes #43: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #44: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #45: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #46: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #47: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #48: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #49: 0EV013917V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0EV013917V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0EV",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:17",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

  test("decodes #50: 0LH013936V", () => {
    const decodeResult = plugin.decode({
      label: "SA",
      text: "0LH013936V",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-sa-media-advisory");
    expect(decodeResult.formatted.description).toBe("Media Advisory (link/connectivity status)");
    expect(decodeResult.formatted.items).toHaveLength(5);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Media Advisory (link/connectivity status)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "prefix",
      code: "PREFIX",
      label: "Prefix Code",
      value: "0LH",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "time",
      code: "TIMESTAMP",
      label: "Message Timestamp",
      value: "01:39:36",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:39:36",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "suffix",
      code: "SUFFIX",
      label: "Suffix Flag",
      value: "V",
    });
  });

});
