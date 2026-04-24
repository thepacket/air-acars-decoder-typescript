import { DateTimeUtils } from '../DateTimeUtils';
import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 4R — Air Canada (ACA) Departure / In-flight Report
 *
 * Used by Air Canada and Jazz Aviation (operating on ACA's ACARS infrastructure)
 * to report departure or airborne status data to operations.
 *
 * Observed wire formats:
 *   C32AA1         1OSAFL RV1667/23/24 RSW YYZ 283 0149Z 369/0071/0028 1
 *   C32AAA         1OSAFL AC0559/23/24 LAX YVR 417 0351Z 100/----/0064 A
 *
 * Field extraction (confirmed / interpreted only):
 *   <subtype(5)>  <flight(2+3-4)> [/<skip>/<skip>]  <orig(3)> <dest(3)>
 *     <val(3)>  <HHMMZ>  <…skipped…>  [<status-letter>]
 *
 * The 3-digit value before the time is interpreted as:
 *   ≤ 360 → magnetic heading/track in degrees (e.g. 283° for RV1667 RSW→YVR)
 *   > 360 → airspeed in knots          (e.g. 417 kt for AC0559 LAX→YVR)
 *
 * Confidence:
 *   confirmed   — flight ID, origin, destination, time
 *   interpreted — 5-letter subtype code (OSAFL); 3-digit heading/airspeed;
 *                 trailing letter status flag (A = airborne/active)
 *   wild guess  — /dd/dd date sub-fields; numeric data triplet after time;
 *                 leading system code (C32AA1/C32AAA); trailing digit
 *                 (all skipped)
 */
export class Label_4R_ACA extends DecoderPlugin {
  name = 'label-4r-aca';

  qualifiers() {
    return {
      labels: ['4R'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'ACA Departure / In-flight Report');

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Match the structured body anchored on the 5-letter subtype code followed
    // by flight ID, origin, destination, heading, and UTC time.
    // The /dd/dd date sub-fields are captured but intentionally skipped (wild guess).
    const bodyRe =
      /([A-Z]{5})\s+([A-Z]{2}\d{3,4})(?:\/\d+\/\d+)?\s+([A-Z]{3})\s+([A-Z]{3})\s+(\d{3})\s+(\d{4})Z/;
    const m = text.match(bodyRe);
    if (!m) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const [, subtype, flightId, origin, dest, valStr, hhmm] = m;

    // Subtype code — interpreted
    decodeResult.raw.report_subtype = subtype;

    // Flight ID — confirmed
    ResultFormatter.flightNumber(decodeResult, flightId);

    // Origin / destination airports — confirmed IATA codes (3-letter)
    ResultFormatter.departureAirport(decodeResult, origin, 'IATA');
    ResultFormatter.arrivalAirport(decodeResult, dest, 'IATA');

    // Report time (UTC) — confirmed
    ResultFormatter.timestamp(decodeResult, DateTimeUtils.convertHHMMSSToTod(hhmm));

    // Pre-time 3-digit value — interpreted:
    //   ≤ 360 → heading/track (degrees); > 360 → airspeed (knots)
    const val = parseInt(valStr, 10);
    if (val <= 360) {
      ResultFormatter.heading(decodeResult, val);
    } else {
      ResultFormatter.airspeed(decodeResult, val);
    }

    // Trailing letter status flag — interpreted (A = airborne/active).
    // Trailing digits are wild guess and are skipped.
    const statusMatch = text.match(/Z\s+[\d\/\-]+\s+([A-Z])\s*$/);
    if (statusMatch) {
      decodeResult.raw.status_flag = statusMatch[1];
      decodeResult.formatted.items.push({
        type: 'status_flag',
        code: 'STATUS',
        label: 'Status Flag',
        value: statusMatch[1],
      });
    }

    decodeResult.formatted.items.push({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Report Subtype',
      value: subtype,
    });

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
