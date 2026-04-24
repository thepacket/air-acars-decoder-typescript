import { MessageDecoder } from '../MessageDecoder';
import { Label_15_REQPOS } from './Label_15_REQPOS';

describe('Label_15_REQPOS', () => {
  let plugin: Label_15_REQPOS;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_15_REQPOS(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-15-reqpos');
    expect(plugin.qualifiers()).toEqual({
      labels: ['15'],
      preambles: ['REQPOS'],
    });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '15', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes bare REQPOS (A7-BBI Qatar Airways position poll)', () => {
    const r = plugin.decode({ label: '15', text: 'REQPOS' });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-15-reqpos');
    expect(r.formatted.description).toBe('Position Request (uplink)');

    expect(r.raw.request_type).toBe('REQPOS');

    const codes = r.formatted.items.map((i) => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('DIR');

    const msgtyp = r.formatted.items.find((i) => i.code === 'MSGTYP');
    expect(msgtyp?.value).toContain('REQPOS');

    const dir = r.formatted.items.find((i) => i.code === 'DIR');
    expect(dir?.value).toContain('ground');
  });

  test('decodes REQPOS with numeric suffix (e.g. REQPOS037)', () => {
    const r = plugin.decode({ label: '15', text: 'REQPOS037' });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.raw.request_type).toBe('REQPOS');
  });

  test('does not decode unrelated label-15 content', () => {
    const r = plugin.decode({ label: '15', text: 'FST01EGPHEGLLN51690W0006670' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });
});
