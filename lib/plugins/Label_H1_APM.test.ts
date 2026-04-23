import { MessageDecoder } from '../MessageDecoder';
import { Label_H1_APM } from './Label_H1_APM';

describe('Label_H1_APM', () => {
  let plugin: Label_H1_APM;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_H1_APM(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-h1-apm');
    expect(plugin.qualifiers).toBeDefined();
    expect(plugin.qualifiers()).toEqual({
      labels: ['H1'],
      preambles: ['APM', '#CFBAPM'],
    });
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: 'H1', text: '' });
    expect(decodeResult.decoder.name).toBe('label-h1-apm');
  });

  test('decodes documented APM example', () => {
    const decodeResult = plugin.decode({
      label: 'H1',
      text: 'APM 6 HL8573 KAL075 RKSI CYVR 200426221336,ACMF0021,.837,,,285.2,,,-28.81,,,35001,,,432443,,,5681,5697,,, 84.72, 84.72,,,  5.495,535.0,,,66.7, 66.7, 95.5, 95.5,,,0,0,1,,,,,, 53.6454,,,-1',
    });
    expect(decodeResult.decoder.name).toBe('label-h1-apm');
  });
});
