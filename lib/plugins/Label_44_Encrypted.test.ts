import { MessageDecoder } from '../MessageDecoder';
import { Label_44_Encrypted } from './Label_44_Encrypted';

describe('Label_44_Encrypted', () => {
  let plugin: Label_44_Encrypted;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_44_Encrypted(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-44-encrypted');
    expect(plugin.qualifiers()).toEqual({ labels: ['44'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: '44', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('does not decode plaintext CSV (no cipher marker chars)', () => {
    // Normal label-44 CSV messages should not be claimed by this plugin
    const r = plugin.decode({ label: '44', text: 'N12345,N40123W074456,KJFK,KLAX,0115,1234' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes N475CB encrypted body (contains | ; ] cipher markers)', () => {
    const body = '02N;E,-Irm-0Qm/,A-3AQI0]9Io|NqIo1;qI,m-mI,3mQI,-3]I,33T3';
    const r = plugin.decode({ label: '44', text: body });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-44-encrypted');
    expect(r.formatted.description).toBe('Encrypted ACARS Message');

    expect(r.raw.ciphertext).toBe(body);

    const codes = r.formatted.items.map((i) => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('CIPHER');

    const msgtyp = r.formatted.items.find((i) => i.code === 'MSGTYP');
    expect(msgtyp?.value).toContain('Encrypted');

    const cipher = r.formatted.items.find((i) => i.code === 'CIPHER');
    expect(cipher?.value).toBe(body);
  });

  test('detects cipher via | character alone', () => {
    const r = plugin.decode({ label: '44', text: 'ABC|DEF' });
    expect(r.decoded).toBe(true);
  });

  test('detects cipher via ; character alone', () => {
    const r = plugin.decode({ label: '44', text: 'ABC;DEF' });
    expect(r.decoded).toBe(true);
  });

  test('detects cipher via ] character alone', () => {
    const r = plugin.decode({ label: '44', text: 'ABC]DEF' });
    expect(r.decoded).toBe(true);
  });

  test('detects cipher via ~ character alone', () => {
    const r = plugin.decode({ label: '44', text: 'ABC~DEF' });
    expect(r.decoded).toBe(true);
  });
});
