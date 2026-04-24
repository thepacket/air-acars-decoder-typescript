import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 4S — Air Canada (ACA) Maintenance Report
 *
 * A proprietary aircraft-to-ground downlink carrying post-departure
 * takeoff/maintenance data in a slash-delimited fixed-field format.
 * No official public field specification exists; interpretations are
 * structural and domain-knowledge based.
 *
 * Observed format (fields split on `/`, trimmed):
 *   [0] CFWTL   — ground routing / maintenance handler ID (interpreted)
 *   [1] 522     — report sequence number (interpreted)
 *   [2] YVR     — departure airport IATA (confirmed)
 *   [3] 26R     — departure runway designator (confirmed)
 *   [4] L       — unknown designator (wild guess — skipped)
 *   [5] 080     — takeoff performance param 1, e.g. flap/thrust (interpreted)
 *   [6] 05      — takeoff performance param 2, e.g. OAT/derate (interpreted)
 *   [7–44]      — blank reserved fixed-template slots (skipped)
 *   [45–47]     — trailing single-digit codes, e.g. 6/6/6 (wild guess — skipped)
 *
 * Confidence:
 *   confirmed   — airport (field 2, standard IATA); runway (field 3, standard designator)
 *   interpreted — routing code (field 0); sequence number (field 1);
 *                 perf params (fields 5–6)
 *   wild guess  — field 4 (L designator); trailing 6/6/6 codes (all skipped)
 */
export class Label_4S_ACA_Maint extends DecoderPlugin {
  name = 'label-4s-aca-maint';

  qualifiers() {
    return {
      labels: ['4S'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'ACA Maintenance Report');

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const fields = text.split('/').map(f => f.trim());

    // Detection: need at least 7 fields; field[2] = 3-letter IATA airport;
    // field[3] = runway designator (1-2 digits + optional L/R/C).
    if (
      fields.length < 7 ||
      !/^[A-Z]{3}$/.test(fields[2]) ||
      !/^\d{1,2}[LRC]?$/.test(fields[3])
    ) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.formatted.items.push({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'ACA Maintenance Report',
    });

    // Routing / maintenance handler ID — interpreted
    if (fields[0]) {
      decodeResult.raw.routing_code = fields[0];
      decodeResult.formatted.items.push({
        type: 'routing_code',
        code: 'ROUTE',
        label: 'Maintenance Routing Code',
        value: fields[0],
      });
    }

    // Report sequence number — interpreted
    if (/^\d+$/.test(fields[1])) {
      decodeResult.raw.sequence_number = parseInt(fields[1], 10);
      decodeResult.formatted.items.push({
        type: 'sequence',
        code: 'SEQ',
        label: 'Report Sequence Number',
        value: fields[1],
      });
    }

    // Departure airport — confirmed IATA
    ResultFormatter.departureAirport(decodeResult, fields[2], 'IATA');

    // Departure runway — confirmed standard designator
    decodeResult.raw.departure_runway = fields[3];
    decodeResult.formatted.items.push({
      type: 'departure_runway',
      code: 'RWY',
      label: 'Departure Runway',
      value: fields[3],
    });

    // field[4] — wild guess (L designator), skip

    // Performance parameter 1 (field 5) — interpreted
    if (fields[5] && /^\d+$/.test(fields[5])) {
      decodeResult.raw.perf_param_1 = fields[5];
      decodeResult.formatted.items.push({
        type: 'perf_param',
        code: 'PERF1',
        label: 'Takeoff Performance Param 1',
        value: fields[5],
      });
    }

    // Performance parameter 2 (field 6) — interpreted
    if (fields[6] && /^\d+$/.test(fields[6])) {
      decodeResult.raw.perf_param_2 = fields[6];
      decodeResult.formatted.items.push({
        type: 'perf_param',
        code: 'PERF2',
        label: 'Takeoff Performance Param 2',
        value: fields[6],
      });
    }

    // fields[7–44]: blank reserved slots — skipped
    // fields[45–47]: 6/6/6 trailing codes — wild guess, skipped

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
