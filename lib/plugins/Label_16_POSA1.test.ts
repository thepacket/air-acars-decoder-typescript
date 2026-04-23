import { MessageDecoder } from '../MessageDecoder';
import { Label_16_POSA1 } from './Label_16_POSA1';

describe('Label 16 POSA1', () => {
  let plugin: Label_16_POSA1;
  const message = { label: '16', text: '' };

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_16_POSA1(decoder);
  });

  test('matches qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-16-posa1');
    expect(plugin.qualifiers).toBeDefined();
    expect(plugin.qualifiers()).toEqual({
      labels: ['16'],
      preambles: ['POSA1'],
    });
  });
  test('decodes variant 1', () => {
    message.text =
      'POSA1N37358W 77279,GEARS  ,221626,370,BBOBO  ,222053,,-61,139,1174,829';
    const decodeResult = plugin.decode(message);

    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('full');
    expect(decodeResult.decoder.name).toBe('label-16-posa1');
    expect(decodeResult.formatted.description).toBe('Position Report');
    expect(decodeResult.message).toBe(message);
    expect(decodeResult.formatted.items).toEqual([
      {
        type: 'aircraft_position',
        code: 'POS',
        label: 'Aircraft Position',
        value: '37.358 N, 77.279 W',
      },
      {
        type: 'time',
        code: 'TIMESTAMP',
        label: 'Message Timestamp',
        value: '22:16:26',
      },
      { type: 'track', code: 'TRK', label: 'Ground Track', value: '370°' },
      {
        type: 'time',
        code: 'ETA',
        label: 'Estimated Time of Arrival',
        value: '22:20:53',
      },
      {
        type: 'outside_air_temperature',
        code: 'OATEMP',
        label: 'Outside Air Temperature (C)',
        value: '-61 degrees',
      },
      {
        type: 'aircraft_route',
        code: 'ROUTE',
        label: 'Aircraft Route',
        value: 'GEARS@22:16:26 > BBOBO@22:20:53',
      },
    ]);
  });

  test('decodes redacted', () => {
    message.text =
      'POSA1N38843W 78790,RONZZ  ,005159,390,RAMAY  ,010055,,*****,*****, 744,   0';
    const decodeResult = plugin.decode(message);

    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('full');
    expect(decodeResult.decoder.name).toBe('label-16-posa1');
    expect(decodeResult.formatted.description).toBe('Position Report');
    expect(decodeResult.message).toBe(message);
    expect(decodeResult.formatted.items).toEqual([
      {
        type: 'aircraft_position',
        code: 'POS',
        label: 'Aircraft Position',
        value: '38.843 N, 78.790 W',
      },
      {
        type: 'time',
        code: 'TIMESTAMP',
        label: 'Message Timestamp',
        value: '00:51:59',
      },
      { type: 'track', code: 'TRK', label: 'Ground Track', value: '390°' },
      {
        type: 'time',
        code: 'ETA',
        label: 'Estimated Time of Arrival',
        value: '01:00:55',
      },
      {
        type: 'aircraft_route',
        code: 'ROUTE',
        label: 'Aircraft Route',
        value: 'RONZZ@00:51:59 > RAMAY@01:00:55',
      },
    ]);
  });

  test('decodes Label 16 variant <invalid>', () => {
    message.text = 'N Bogus message';
    const decodeResult = plugin.decode(message);

    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe('none');
    expect(decodeResult.decoder.name).toBe('label-16-posa1');
    expect(decodeResult.formatted.description).toBe('Position Report');
    expect(decodeResult.message).toBe(message);
  });
});
