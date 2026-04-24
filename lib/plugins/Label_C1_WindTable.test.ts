import { MessageDecoder } from '../MessageDecoder';
import { Label_C1_WindTable } from './Label_C1_WindTable';

describe('Label_C1_WindTable', () => {
  let plugin: Label_C1_WindTable;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_C1_WindTable(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe('label-c1-wind-table');
    expect(plugin.qualifiers()).toEqual({ labels: ['C1'] });
  });

  test('does not decode empty text', () => {
    const r = plugin.decode({ label: 'C1', text: '' });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('does not decode loadsheet messages (no FL wind entries)', () => {
    const r = plugin.decode({
      label: 'C1',
      text: '.FRAGDLH\n190925\nAGM\nAN HB-JVA/MA 277A\nPRELIMINARY LOAD INFO 11:25\nZFW 37329\nTOW 43129\nEND',
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe('none');
  });

  test('decodes B-329K wind table (TOD, three FL columns, M-prefix headwinds)', () => {
    const text =
      '       11400/               M41             M45             M54\n' +
      'TOD       MORA/MEA     FL280  075/16   FL300  081/17   FL340  081/22\n' +
      '              /               M41             M45             M54\n' +
      '\n' +
      '-- -- -- END OF';
    const r = plugin.decode({ label: 'C1', text });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.decoder.name).toBe('label-c1-wind-table');
    expect(r.formatted.description).toBe('Flight Level Wind Table (C1)');

    // Waypoint reference (confirmed)
    expect(r.raw.waypoint_reference).toBe('TOD');

    // Altitude reference (confirmed)
    expect(r.raw.altitude_reference).toBe('MORA/MEA');

    // Three FL wind entries (confirmed)
    expect(r.raw.wind_table).toHaveLength(3);
    expect(r.raw.wind_table[0]).toEqual({ fl: 28000, direction: 75, speed: 16 });
    expect(r.raw.wind_table[1]).toEqual({ fl: 30000, direction: 81, speed: 17 });
    expect(r.raw.wind_table[2]).toEqual({ fl: 34000, direction: 81, speed: 22 });

    // Headwind components — deduplicated (interpreted: M = Minus/headwind)
    expect(r.raw.headwind_components_kt).toEqual([41, 45, 54]);

    // Formatted item codes
    const codes = r.formatted.items.map((i) => i.code);
    expect(codes).toContain('MSGTYP');
    expect(codes).toContain('WPT');
    expect(codes).toContain('ALTREF');
    expect(codes).toContain('WND280');
    expect(codes).toContain('WND300');
    expect(codes).toContain('WND340');
    expect(codes).toContain('HW280');
    expect(codes).toContain('HW300');
    expect(codes).toContain('HW340');

    // Wind formatted values
    const wnd280 = r.formatted.items.find((i) => i.code === 'WND280');
    expect(wnd280?.value).toBe('075° / 16 kt');
    const wnd300 = r.formatted.items.find((i) => i.code === 'WND300');
    expect(wnd300?.value).toBe('081° / 17 kt');
    const wnd340 = r.formatted.items.find((i) => i.code === 'WND340');
    expect(wnd340?.value).toBe('081° / 22 kt');

    // Headwind formatted values
    const hw280 = r.formatted.items.find((i) => i.code === 'HW280');
    expect(hw280?.value).toBe('41 kt');
    const hw340 = r.formatted.items.find((i) => i.code === 'HW340');
    expect(hw340?.value).toBe('54 kt');
  });

  test('decodes minimal wind table (no TOD, no MORA/MEA, single FL entry)', () => {
    const r = plugin.decode({ label: 'C1', text: 'FL350 270/45' });

    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe('partial');
    expect(r.raw.waypoint_reference).toBeUndefined();
    expect(r.raw.altitude_reference).toBeUndefined();
    expect(r.raw.wind_table).toHaveLength(1);
    expect(r.raw.wind_table[0]).toEqual({ fl: 35000, direction: 270, speed: 45 });
    expect(r.raw.headwind_components_kt).toBeUndefined();
  });
});
