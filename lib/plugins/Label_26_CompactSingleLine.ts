import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { DateTimeUtils } from '../DateTimeUtils';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 26 — Compact single-line ETA / Arrival variant
 *
 * Observed on Air France (AFL/AF) traffic as a terse one-line alternative
 * to the two-line ETA/arrival report handled by `Label_26_ETA`.
 *
 * Wire format (two examples):
 *
 *   0521 LFMN AF7321 / 23 0526 LFPG 08R
 *   0746 DAAG AF1055 / 23 0801 LFPG 08L
 *   |    |    |        |  |    |    |
 *   |    |    |        |  |    |    └── Arrival runway (e.g. 08R / 08L)
 *   |    |    |        |  |    └─────── Destination ICAO (4 chars)
 *   |    |    |        |  └──────────── ETA HHMM UTC
 *   |    |    |        └─────────────── Day of month (DD)
 *   |    |    └──────────────────────── Flight ID (e.g. AF7321)
 *   |    └───────────────────────────── Origin ICAO (4 chars, e.g. LFMN = Nice;
 *   |                                   DAAG = Algiers Houari Boumediene)
 *   └────────────────────────────────── Report / event time HHMM UTC
 *
 * Per analyst classification:
 *   - Report time, origin ICAO, flight ID, delimiter, day, ETA,
 *     destination ICAO: confirmed or interpreted from standard ACARS
 *     conventions.
 *   - Runway: interpreted from standard ICAO runway notation (`dd[LRC]`).
 *   - Per spec: month/year bytes are not present in this variant — the
 *     6 digits after the `/` are DD + HHMM (day-of-month + ETA time),
 *     not DDMMYY.
 *
 * The 2-line variant handled by `Label_26_ETA` is not affected — plugins
 * are tried in registration order; that one runs first and this one only
 * claims messages it rejects.
 */
export class Label_26_CompactSingleLine extends DecoderPlugin {
  name = 'label-26-compact-single-line';

  qualifiers() {
    return {
      labels: ['26'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(
      message,
      'Compact ETA / Arrival Report (single-line)',
    );

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // HHMM(report) + ICAO(4, origin) + FLIGHT(2-3 letters + 1-5 digits + opt
    // letter) + "/" + DD(2) + HHMM(4, ETA) + ICAO(4, dest) + RWY(2 digits +
    // opt L/R/C)
    const re =
      /^(?<rpt>\d{4})(?<origin>[A-Z]{4})(?<flight>[A-Z]{2,3}\d{1,5}[A-Z]?)\/(?<day>\d{2})(?<eta>\d{4})(?<dest>[A-Z]{4})(?<rwy>\d{2}[LRC]?)$/;
    const m = text.match(re);
    if (!m?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const { rpt, origin, flight, day, eta, dest, rwy } = m.groups;

    // HHMM range check to avoid false-matching on random 28-char strings.
    const validHHMM = (s: string) =>
      Number(s.substring(0, 2)) <= 23 && Number(s.substring(2, 4)) <= 59;
    if (!validHHMM(rpt) || !validHHMM(eta)) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const dayNum = Number(day);
    if (dayNum === 0 || dayNum > 31) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // ── raw + standard formatters ──
    ResultFormatter.flightNumber(decodeResult, flight);
    ResultFormatter.departureAirport(decodeResult, origin);
    ResultFormatter.arrivalAirport(decodeResult, dest);
    ResultFormatter.timestamp(
      decodeResult,
      DateTimeUtils.convertHHMMSSToTod(rpt + '00'),
    );
    ResultFormatter.eta(
      decodeResult,
      DateTimeUtils.convertHHMMSSToTod(eta + '00'),
    );
    decodeResult.raw.day = dayNum;
    decodeResult.raw.report_time = `${rpt.substring(0, 2)}:${rpt.substring(2, 4)}`;
    decodeResult.raw.eta = `${eta.substring(0, 2)}:${eta.substring(2, 4)}`;
    decodeResult.raw.arrival_runway = rwy;

    // ── formatted ──
    decodeResult.formatted.items.unshift({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Compact ETA / Arrival Report (single-line)',
    });
    decodeResult.formatted.items.push(
      {
        type: 'report_time',
        code: 'RPTTIME',
        label: 'Report Time (UTC, HHMM)',
        value: `${rpt.substring(0, 2)}:${rpt.substring(2, 4)}`,
      },
      {
        type: 'day',
        code: 'DAY',
        label: 'Day of Month',
        value: String(dayNum),
      },
      {
        type: 'eta_time',
        code: 'ETATIME',
        label: 'ETA (UTC, HHMM)',
        value: `${eta.substring(0, 2)}:${eta.substring(2, 4)}`,
      },
      {
        type: 'arrival_runway',
        code: 'ARRRWY',
        label: 'Arrival Runway',
        value: rwy,
      },
    );

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
