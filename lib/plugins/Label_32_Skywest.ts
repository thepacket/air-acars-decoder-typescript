import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 32 — Skywest (OO) position / cruise report
 *
 * Per the ACARS message documentation
 * (https://github.com/airframesio/acars-message-documentation/blob/main/research/32.md),
 * label 32 is used by Skywest. The compact variant observed on the live feed
 * starts with a two-letter classifier (e.g. `N,E` / `P,E` / `H,H`) followed
 * by an ISO timestamp, a short integer pair, a `N dd.ddd W ddd.ddd`
 * position, then a long comma-separated trailer of cruise telemetry
 * (altitude, ground speed, wind, temp, fuel totalizer counters, …).
 *
 * Only the fields that appear at stable positions and have well-defined
 * semantics are surfaced:
 *   - classifiers (report_type_1 / report_type_2)
 *   - ISO-8601 UTC timestamp
 *   - aircraft_position
 *   - altitude (token 7, feet)
 *
 * The remainder of the trailer is kept verbatim in `raw.telemetry_tail`
 * because its positional meaning varies across Skywest sub-variants (short
 * 13-field form vs long 30-field form per the upstream docs).
 */
export class Label_32_Skywest extends DecoderPlugin {
  name = 'label-32-skywest';

  qualifiers() {
    return {
      labels: ['32'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Position / Cruise Report');
    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Typical short form:
    //   P,E,2026-04-23 04:56:50,5630,67624,N 46.132 W 122.529,19862,352,022,-24,340,361,587,0532,
    // Accept either an ISO date-time with a space separator or a legacy
    // DDMMMYY HH:MM:SS form (per upstream docs' `08DEC19 06:49:57`).
    const re =
      /^(?<t1>[A-Z]),(?<t2>[A-Z]),(?<ts>\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}|\d{2}[A-Z]{3}\d{2}\s\d{2}:\d{2}:\d{2}),(?<a>\d+),(?<b>\d+),(?<pos>N\s*\d{2}\.\d{3}\s+W\s*\d{3}\.\d{3}),(?<alt>\d+),(?<tail>.*)$/;
    const m = text.match(re);
    if (!m?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const { t1, t2, ts, pos, alt, tail } = m.groups;
    const posMatch = pos.match(
      /^N\s*(\d{2}\.\d{3})\s+W\s*(\d{3}\.\d{3})$/,
    );
    if (!posMatch) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }
    const latitude = Number(posMatch[1]);
    const longitude = -Number(posMatch[2]);
    const altitude = Number(alt);

    ResultFormatter.position(decodeResult, { latitude, longitude });
    ResultFormatter.altitude(decodeResult, altitude);

    decodeResult.raw.report_type_1 = t1;
    decodeResult.raw.report_type_2 = t2;
    decodeResult.raw.timestamp_iso = ts;
    decodeResult.raw.telemetry_tail = tail;

    decodeResult.formatted.items.unshift({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Skywest Position / Cruise Report',
    });
    decodeResult.formatted.items.push({
      type: 'timestamp_iso',
      code: 'TSISO',
      label: 'Timestamp (UTC)',
      value: ts,
    });
    decodeResult.formatted.items.push({
      type: 'report_classifiers',
      code: 'CLASS',
      label: 'Report Classifiers',
      value: `${t1},${t2}`,
    });

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
