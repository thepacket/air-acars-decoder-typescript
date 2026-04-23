import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { DateTimeUtils } from '../DateTimeUtils';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 15 — FST01 Flight Status / Position Report
 *
 * Observed examples (Airframes.io + upstream
 * acars-message-documentation/research/15.md):
 *
 *   FST01EGPHEGLLN51690W0006670 62  28  24     19106      267  05590550
 *   FST01OKBKEGLLN487840E0048467430  80 284M 58C 4322830030747713682512581215
 *   FST01LPFREGKKN38369W0074904280  66  16      5084      428  14281217
 *   FST01VIDPEGLLN531282E0203454380 208 496 M64C 6730026526640716083214431235
 *   FST01EGKKKMCON373488W0756927380 156 495 M53C 4427422721045313002518521710
 *
 * Wire format (confirmed / interpreted portions only — see analyst
 * classification):
 *
 *   FST 01 <origin4> <dest4> <N|S><lat:5-6> <E|W><lon:6-7> …ignored… <eta4><sta4>
 *
 * This plugin surfaces only the fields classified *confirmed* or
 * *interpreted*:
 *   - Report type FST, sub-version (01)
 *   - Origin / destination ICAO
 *   - Aircraft position
 *   - ETA / STA time pair (the last 8 digits of the body)
 *
 * All middle-body fields (altitude, groundspeed, OAT, fuel/weight,
 * wind direction/speed) were classified as *wild guess* by the analyst
 * because the upstream docs only give raw examples and no field spec —
 * they are intentionally NOT surfaced here. Surfacing them would invent
 * semantics the docs don't support.
 */
export class Label_15_FST extends DecoderPlugin {
  name = 'label-15-fst';

  qualifiers() {
    return {
      labels: ['15'],
      preambles: ['FST01'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Position Report');

    const text = message.text || '';
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // FST01 <origin4> <dest4> then a position token. Lat/lon widths are
    // coupled — two variants observed on the wire:
    //   6-digit lat + 7-digit lon (precise form; 2 int + 4 dec on lat,
    //                              3 int + 4 dec on lon)
    //   5-digit lat + 6-digit lon (coarse form;  2 int + 3 dec on lat,
    //                              3 int + 3 dec on lon)
    // The precise form is tried first so ambiguous inputs resolve to it.
    const precise =
      /^FST(?<sub>\d{2})(?<origin>[A-Z]{4})(?<dest>[A-Z]{4})(?<latDir>[NS])(?<latRaw>\d{6})(?<lonDir>[EW])(?<lonRaw>\d{7})/;
    const coarse =
      /^FST(?<sub>\d{2})(?<origin>[A-Z]{4})(?<dest>[A-Z]{4})(?<latDir>[NS])(?<latRaw>\d{5})(?<lonDir>[EW])(?<lonRaw>\d{6})/;
    const m = text.match(precise) ?? text.match(coarse);
    if (!m?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }
    const { sub, origin, dest, latDir, latRaw, lonDir, lonRaw } = m.groups;

    // Integer part is 2 digits for latitude, 3 for longitude. Remaining
    // digits are decimal fractional. Scale = 10^fractionDigits.
    //   N487840 → 48.7840°  (6 - 2 = 4 → /10000)
    //   N51690  → 51.690°   (5 - 2 = 3 → /1000)
    //   W0756927 → 75.6927° (7 - 3 = 4 → /10000)
    //   W007490  → 7.490°   (6 - 3 = 3 → /1000)
    const latScale = 10 ** (latRaw.length - 2);
    const lonScale = 10 ** (lonRaw.length - 3);
    const latitude =
      (Number(latRaw) / latScale) * (latDir === 'S' ? -1 : 1);
    const longitude =
      (Number(lonRaw) / lonScale) * (lonDir === 'W' ? -1 : 1);

    if (Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Trailing time pair — the final 8 characters of the trimmed body,
    // split into two HHMM values (observed as ETA/STA on all samples).
    const trailing = text.replace(/\s+/g, '').trim().slice(-8);
    let etaHHMM: string | null = null;
    let staHHMM: string | null = null;
    if (/^\d{8}$/.test(trailing)) {
      const eta = trailing.slice(0, 4);
      const sta = trailing.slice(4, 8);
      const validHHMM = (s: string) =>
        Number(s.substring(0, 2)) <= 23 && Number(s.substring(2, 4)) <= 59;
      if (validHHMM(eta) && validHHMM(sta)) {
        etaHHMM = eta;
        staHHMM = sta;
      }
    }

    // ── Raw + standard formatters ──
    ResultFormatter.departureAirport(decodeResult, origin);
    ResultFormatter.arrivalAirport(decodeResult, dest);
    ResultFormatter.position(decodeResult, { latitude, longitude });
    decodeResult.raw.report_type = 'FST';
    decodeResult.raw.report_version = sub;

    if (etaHHMM) {
      decodeResult.raw.eta = `${etaHHMM.substring(0, 2)}:${etaHHMM.substring(2, 4)}`;
      ResultFormatter.eta(
        decodeResult,
        DateTimeUtils.convertHHMMSSToTod(etaHHMM + '00'),
      );
    }
    if (staHHMM) {
      decodeResult.raw.sta = `${staHHMM.substring(0, 2)}:${staHHMM.substring(2, 4)}`;
    }

    // ── Formatted ──
    decodeResult.formatted.items.unshift(
      {
        type: 'message_type',
        code: 'MSGTYP',
        label: 'Message Type',
        value: 'Flight Status (FST)',
      },
      {
        type: 'report_version',
        code: 'VER',
        label: 'Report Sub-version',
        value: sub,
      },
    );
    if (etaHHMM) {
      decodeResult.formatted.items.push({
        type: 'eta_time',
        code: 'ETATIME',
        label: 'ETA (UTC, HHMM)',
        value: `${etaHHMM.substring(0, 2)}:${etaHHMM.substring(2, 4)}`,
      });
    }
    if (staHHMM) {
      decodeResult.formatted.items.push({
        type: 'sta_time',
        code: 'STATIME',
        label: 'Scheduled Time of Arrival (UTC, HHMM)',
        value: `${staHHMM.substring(0, 2)}:${staHHMM.substring(2, 4)}`,
      });
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
