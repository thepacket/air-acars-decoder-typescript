import { MessageDecoder } from '../MessageDecoder';
import { Label_37_Obfuscated } from './Label_37_Obfuscated';

describe('Label_37_Obfuscated', () => {
  let plugin: Label_37_Obfuscated;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_37_Obfuscated(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-37-obfuscated');
    expect(plugin.qualifiers()).toEqual({ labels: ['37'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '37', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
    expect(r.decoder.name).toBe('label-37-obfuscated');
  });

  test('decodes WN obfuscated multi-line message (analyst report sample)', () => {
    const r = plugin.decode({
      label: '37',
      text: '03N)85L\nVIFUK5BBMK4\nHU(G29XUOS6\nQEX(8UN,9XHU(G2XUOS6',
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-37-obfuscated');
    expect(r.formatted.description).toBe('Proprietary Encoded Airline Message');
    expect(r.formatted.items).toEqual([
      {
        type: 'message_type',
        code: 'MSGTYP',
        label: 'Message Type',
        value: 'Proprietary Encoded Airline Message (label 37)',
      },
    ]);
  });

  test('decodes single-line obfuscated message', () => {
    const r = plugin.decode({ label: '37', text: '09RD,HI' });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.formatted.items[0].code).toBe('MSGTYP');
  });
});
