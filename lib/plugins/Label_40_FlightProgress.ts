import { DateTimeUtils } from '../DateTimeUtils';
import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 40 (UM40) — Flight Progress / Flight Following Message
 *
 * Uplinked by operations/dispatch to summarise routing, waypoint ETAs,
 * OOOI event times, on-time performance analysis, and an RVSM altimetry
 * check template for the crew.
 *
 * Example header:
 *   FLT 2963 PHL-PIT SKD ARR 2321L A PLUS 14 / 2335L PLN / 2259L
 *
 * Confidence:
 *   confirmed   — flight ID + route (FLT NNNN XXX-XXX); OOOI event times;
 *                 waypoint names and time-over-fix; SKD ARR / A PLUS delay /
 *                 predicted ETA; SKDBLK/FLIPLN on-time columns; RVSM section
 *   interpreted — wind direction (first sub-field before /); trailing
 *                 fuel-or-ETE countdown column at each waypoint; ACTUAL
 *                 taxi-out; SKD/ACT OUT push times
 *   wild guess  — wind speed sub-field (anomalous values, e.g. 679 kt —
 *                 skipped); A14/0313 arrival annotation; TOT/CTR header
 *                 exact semantics
 */
export class Label_40_FlightProgress extends DecoderPlugin {
  name = 'label-40-flight-progress';

  qualifiers() {
    return {
      labels: ['40'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Flight Progress / Following Report');

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Detection: must contain FLT <digits> <XXX>-<XXX>
    const headerMatch = text.match(/FLT\s+(\d+)\s+([A-Z]{3})-([A-Z]{3})/);
    if (!headerMatch) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const [, flightNum, depIata, arrIata] = headerMatch;

    decodeResult.formatted.items.push({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Flight Progress / Following Report',
    });

    // Flight number + route (confirmed)
    ResultFormatter.flightNumber(decodeResult, flightNum);
    ResultFormatter.departureAirport(decodeResult, depIata, 'IATA');
    ResultFormatter.arrivalAirport(decodeResult, arrIata, 'IATA');

    // Schedule analysis from header line (confirmed)
    const headerLine = text.match(/FLT.+/)?.[0] ?? '';
    const skdMatch = headerLine.match(/SKD ARR\s+(\d{4}L)/);
    if (skdMatch) {
      decodeResult.raw.scheduled_arrival_local = skdMatch[1];
      decodeResult.formatted.items.push({
        type: 'scheduled_arrival',
        code: 'SKDARR',
        label: 'Scheduled Arrival (local)',
        value: skdMatch[1],
      });
    }
    const lateMatch = headerLine.match(/A PLUS\s+(\d+)\s*\/\s*(\d{4}L)/);
    if (lateMatch) {
      decodeResult.raw.delay_minutes = parseInt(lateMatch[1], 10);
      decodeResult.raw.predicted_arrival_local = lateMatch[2];
      decodeResult.formatted.items.push({
        type: 'delay',
        code: 'DELAY',
        label: 'Delay (minutes)',
        value: `+${lateMatch[1]} min`,
      });
      decodeResult.formatted.items.push({
        type: 'predicted_arrival',
        code: 'ETA',
        label: 'Predicted Arrival (local)',
        value: lateMatch[2],
      });
    }
    const plnMatch = headerLine.match(/PLN\s*\/\s*(\d{4}L)/);
    if (plnMatch) {
      decodeResult.raw.planned_arrival_local = plnMatch[1];
      decodeResult.formatted.items.push({
        type: 'planned_arrival',
        code: 'PLN',
        label: 'Flight Plan Arrival (local)',
        value: plnMatch[1],
      });
    }

    // OOOI event times (confirmed)
    const lines = text.replace(/\r/g, '').split('\n');
    for (const line of lines) {
      const oooi = line.match(/^\s*(OUT|OFF|ON|IN)\s+(\d{4})(?:\s+(\d{4}))?/);
      if (oooi) {
        const event = oooi[1].toLowerCase() as 'out' | 'off' | 'on' | 'in';
        const actualZ = oooi[2];
        const plannedZ = oooi[3];
        decodeResult.raw[`${event}_actual_utc`] = actualZ;
        if (plannedZ) decodeResult.raw[`${event}_planned_utc`] = plannedZ;

        const eventLabel: Record<string, string> = {
          out: 'OUT (Off Gate)',
          off: 'OFF (Wheels Up)',
          on:  'ON (Wheels Down)',
          in:  'IN (At Gate)',
        };
        const val = plannedZ
          ? `${actualZ}Z (actual) / ${plannedZ}Z (planned)`
          : `${actualZ}Z`;
        decodeResult.formatted.items.push({
          type: `oooi_${event}`,
          code: oooi[1],
          label: eventLabel[event],
          value: val,
        });
      }
    }

    // Waypoints: NAME  HHMM  DDD/[speed]  NNNN
    // Wind direction is interpreted (first sub-field); speed skipped (wild guess).
    // Trailing column is interpreted as fuel-or-ETE countdown.
    const waypointRe = /^\s*([A-Z]{3,5})\s+(\d{4})\s+(\d{3})\/\d*\s+(\d{4})\s*$/;
    const waypoints: Array<{
      name: string;
      time_utc: string;
      wind_direction_deg: number;
      fuel_or_ete: string;
    }> = [];
    for (const line of lines) {
      const wm = line.match(waypointRe);
      if (wm) {
        waypoints.push({
          name: wm[1],
          time_utc: wm[2],
          wind_direction_deg: parseInt(wm[3], 10),
          fuel_or_ete: wm[4],
        });
      }
    }
    if (waypoints.length > 0) {
      decodeResult.raw.waypoints = waypoints;
      decodeResult.formatted.items.push({
        type: 'waypoints',
        code: 'WPTS',
        label: 'Waypoints',
        value: waypoints.map(w => `${w.name} ${w.time_utc}Z`).join(', '),
      });
    }

    // On-time analysis (confirmed column headers; ACTUAL taxi-out interpreted)
    for (const line of lines) {
      const blockRe = /^\s*(SKDBLK|FLIPLN)\s+(\d+)\s+(\d{2}\.\d{2})\s+(\d+)\s+(\d{2}\.\d{2})/;
      const bm = line.match(blockRe);
      if (bm) {
        const key = bm[1].toLowerCase();
        decodeResult.raw[`${key}_taxi_out_min`] = parseInt(bm[2], 10);
        decodeResult.raw[`${key}_air_time`] = bm[3];
        decodeResult.raw[`${key}_taxi_in_min`] = parseInt(bm[4], 10);
        decodeResult.raw[`${key}_block_time`] = bm[5];
        decodeResult.formatted.items.push({
          type: 'block_time',
          code: bm[1],
          label: bm[1] === 'SKDBLK' ? 'Scheduled Block' : 'Flight Plan Block',
          value: `TXO ${bm[2]} min / AIR ${bm[3]} / TXI ${bm[4]} min / BLK ${bm[5]}`,
        });
      }

      // ACTUAL taxi-out (interpreted: matches OUT→OFF delta of 12 min)
      const actualTxo = line.match(/^\s*ACTUAL\s+(\d+)\s*$/);
      if (actualTxo) {
        decodeResult.raw.actual_taxi_out_min = parseInt(actualTxo[1], 10);
        decodeResult.formatted.items.push({
          type: 'actual_taxi_out',
          code: 'ACTTXO',
          label: 'Actual Taxi-Out (minutes)',
          value: actualTxo[1],
        });
      }

      // SKD OUT / ACT OUT push times (interpreted: stated explicitly in message)
      const pushRe = /^\s*(SKD|ACT) OUT\s+(\d{4})Z/;
      const pm = line.match(pushRe);
      if (pm) {
        const key = pm[1] === 'SKD' ? 'scheduled_out_utc' : 'actual_out_utc';
        decodeResult.raw[key] = pm[2];
        decodeResult.formatted.items.push({
          type: pm[1] === 'SKD' ? 'scheduled_out' : 'actual_out',
          code: `${pm[1]}OUT`,
          label: `${pm[1] === 'SKD' ? 'Scheduled' : 'Actual'} OUT Time (UTC)`,
          value: `${pm[2]}Z`,
        });
      }
    }

    // RVSM altimetry check section (confirmed present; blank = unfilled template)
    if (/RVSM ALT/.test(text)) {
      decodeResult.raw.rvsm_alt_present = true;
      decodeResult.formatted.items.push({
        type: 'rvsm',
        code: 'RVSM',
        label: 'RVSM Altimetry Check',
        value: 'Section present (unfilled template)',
      });
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
