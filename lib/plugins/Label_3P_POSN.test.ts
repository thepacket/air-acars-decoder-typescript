import { MessageDecoder } from '../MessageDecoder';
import { Label_3P_POSN } from './Label_3P_POSN';

describe('Label_3P_POSN', () => {
  let plugin: Label_3P_POSN;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_3P_POSN(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-3p-posn");
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["3P"]);
  });

  test('reports own plugin name on empty text', () => {
    const r = plugin.decode({ label: "3P", text: '' });
    expect(r.decoder.name).toBe("label-3p-posn");
  });

  test("decodes #1: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #2: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #3: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #4: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #5: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #6: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #7: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #8: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #9: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #10: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #11: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #12: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #13: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #14: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #15: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #16: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #17: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #18: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #19: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #20: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #21: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #22: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #23: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #24: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #25: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #26: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #27: REQPOS037B", () => {
    const r = plugin.decode({
      label: "3P",
      text: "REQPOS037B",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-3p-posn");
    expect(r.formatted.description).toBe("Position Report (POSN)");
    expect(r.formatted.items).toEqual([]);
  });

});
