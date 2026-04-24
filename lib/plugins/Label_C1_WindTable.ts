import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';

/**
 * Label C1 — Flight-Level Wind Table (downlink variant)
 *
 * Some C1 messages carry a multi-column wind/altitude report referenced to a
 * named waypoint (commonly TOD — Top of Descent). Each column represents a
 * candidate flight level with confirmed wind direction/speed in DDD/SS format
 * and an interpreted headwind component prefixed with M (Minus = head):
 *
 *   Example body:
 *     11400/          M41        M45        M54
 *     TOD  MORA/MEA   FL280 075/16  FL300 081/17  FL340 081/22
 *                /    M41        M45        M54
 *     -- -- -- END OF
 *
 * Detection: presence of at least one FL\d{3} DDD/SS wind token.
 * Confidence levels per field:
 *   confirmed   — FL columns, TOD label, MORA/MEA label, DDD/SS wind format
 *   interpreted — M-prefix = headwind (Minus) component, END OF truncation
 *   wild guess  — "11400/" token (skipped), second blank row purpose (skipped)
 */
export class Label_C1_WindTable extends DecoderPlugin {
  name = 'label-c1-wind-table';

  qualifiers() {
    return {
      labels: ['C1'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Flight Level Wind Table (C1)');

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Require at least one confirmed FL DDD/SS wind entry to claim this format
    if (!/FL\d{3}\s+\d{3}\/\d{1,3}/.test(text)) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.formatted.items.push({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Flight Level Wind Table',
    });

    // TOD reference waypoint (confirmed — universally standard abbreviation)
    if (/\bTOD\b/.test(text)) {
      decodeResult.raw.waypoint_reference = 'TOD';
      decodeResult.formatted.items.push({
        type: 'waypoint',
        code: 'WPT',
        label: 'Reference Waypoint',
        value: 'TOD (Top of Descent)',
      });
    }

    // MORA/MEA altitude reference label (confirmed — standard ICAO terminology)
    if (/MORA\/MEA/.test(text)) {
      decodeResult.raw.altitude_reference = 'MORA/MEA';
      decodeResult.formatted.items.push({
        type: 'altitude_reference',
        code: 'ALTREF',
        label: 'Altitude Reference',
        value: 'MORA/MEA (Min Off-Route Altitude / Min Enroute Altitude)',
      });
    }

    // FL<NNN> DDD/SS wind entries (confirmed format)
    const windEntries: Array<{ fl: number; direction: number; speed: number }> = [];
    const windRe = /FL(\d{3})\s+(\d{3})\/(\d{1,3})/g;
    let m: RegExpExecArray | null;
    while ((m = windRe.exec(text)) !== null) {
      windEntries.push({
        fl: parseInt(m[1], 10) * 100,
        direction: parseInt(m[2], 10),
        speed: parseInt(m[3], 10),
      });
    }
    decodeResult.raw.wind_table = windEntries;
    for (const entry of windEntries) {
      const flStr = String(entry.fl / 100).padStart(3, '0');
      decodeResult.formatted.items.push({
        type: 'wind',
        code: `WND${flStr}`,
        label: `Wind at FL${flStr}`,
        value: `${String(entry.direction).padStart(3, '0')}° / ${entry.speed} kt`,
      });
    }

    // M-prefix headwind components (interpreted: M = Minus/headwind, ACARS/FMS convention)
    // Deduplicate — the same values may appear on multiple rows of the table.
    const hwSet = new Set<number>();
    const hwRe = /\bM(\d{2,3})\b/g;
    while ((m = hwRe.exec(text)) !== null) {
      hwSet.add(parseInt(m[1], 10));
    }
    const headwindValues = Array.from(hwSet);
    if (headwindValues.length > 0) {
      decodeResult.raw.headwind_components_kt = headwindValues;
      if (headwindValues.length === windEntries.length) {
        // Pair each headwind component with its corresponding FL entry
        for (let i = 0; i < windEntries.length; i++) {
          const flStr = String(windEntries[i].fl / 100).padStart(3, '0');
          decodeResult.formatted.items.push({
            type: 'headwind',
            code: `HW${flStr}`,
            label: `Headwind Component at FL${flStr}`,
            value: `${headwindValues[i]} kt`,
          });
        }
      } else {
        decodeResult.formatted.items.push({
          type: 'headwind',
          code: 'HW',
          label: 'Headwind Components',
          value: headwindValues.map(v => `${v} kt`).join(', '),
        });
      }
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
