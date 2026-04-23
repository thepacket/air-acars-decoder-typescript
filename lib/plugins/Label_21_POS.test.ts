import { MessageDecoder } from '../MessageDecoder';
import { Label_21_POS } from './Label_21_POS';

describe('Label_21_POS', () => {
  let plugin: Label_21_POS;
  const message = { label: '21', text: '' };

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_21_POS(decoder);
  });

  test('matches qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-21-pos');
    expect(plugin.qualifiers).toBeDefined();
    expect(plugin.qualifiers()).toEqual({
      labels: ['21'],
      preambles: ['POS'],
    });
  });

  test('decodes valid', () => {
    message.text =
      'POSN 39.841W 75.790, 220,184218,17222,22051,  34,- 4,204748,KTPA';
    const decodeResult = plugin.decode(message);
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe('full');
    expect(decodeResult.formatted.items).toEqual([
      {
        type: 'aircraft_position',
        code: 'POS',
        label: 'Aircraft Position',
        value: '39.841 N, 75.790 W',
      },
      { type: 'track', code: 'TRK', label: 'Ground Track', value: '220°' },
      {
        type: 'time',
        code: 'TIMESTAMP',
        label: 'Message Timestamp',
        value: '18:42:18',
      },
      { type: 'altitude', code: 'ALT', label: 'Altitude', value: '17222 feet' },
      {
        type: 'ground_speed',
        code: 'GS',
        label: 'Ground Speed',
        value: '220.51 kt',
      },
      { type: 'wind_speed', code: 'WIND', label: 'Wind Speed', value: '34 kt' },
      {
        type: 'outside_air_temperature',
        code: 'OATEMP',
        label: 'Outside Air Temperature (C)',
        value: '-4 degrees',
      },
      {
        type: 'time',
        code: 'ETA',
        label: 'Estimated Time of Arrival',
        value: '20:47:48',
      },
      { type: 'icao', code: 'DST', label: 'Destination', value: 'KTPA' },
    ]);
  });

  test('does not decode invalid', () => {
    message.text = 'POS Bogus message';
    const decodeResult = plugin.decode(message);

    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe('none');
    expect(decodeResult.decoder.name).toBe('label-21-pos');
    expect(decodeResult.formatted.description).toBe('Position Report');
    expect(decodeResult.message).toBe(message);
  });
});
