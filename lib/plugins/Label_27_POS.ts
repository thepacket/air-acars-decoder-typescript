import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { DateTimeUtils } from '../DateTimeUtils';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 27 — Multi-line POS01 position report
 *
 * Per the ACARS message documentation
 * (https://github.com/airframesio/acars-message-documentation/blob/main/research/27.md),
 * label 27 carries a position + cruise snapshot using a newline-delimited
 * key/value body after a compact header:
 *
 *   POS01AFL2374   /08080727UUEELFLL
 *   FUEL  156
 *   TEMP- 62
 *   WDIR34802
 *   WSPD  63
 *   LATN 52.131
 *   LONE 19.441
 *   ETA0910
 *   TUR
 *   ALT36000
 *
 * Header layout:
 *   POS01                — literal report-type preamble
 *   <callsign>           — ICAO callsign, e.g. AFL2374
 *   /                    — separator
 *   <DDHHMMSS>           — day-of-month + UTC HHMMSS (observed 8-digit form)
 *   <origin ICAO>        — 4-letter origin
 *   <dest ICAO>          — 4-letter destination
 */
export class Label_27_POS extends DecoderPlugin {
  name = 'label-27-pos';

  qualifiers() {
    return {
      labels: ['27'],
      preambles: ['POS01'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Position Report (POS01)');
    const text = message.text || '';
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const normalized = text.replace(/\r/g, '');
    const [headerRaw, ...bodyLines] = normalized.split('\n');
    const header = headerRaw.trim();

    //   POS01AFL2374   /08080727UUEELFLL
    //   POS01SDM6603   /08080803ULLILOWW
    const headerRe =
      /^POS01(?<cs>[A-Z0-9]{3,8})\s*\/(?<ddhhmmss>\d{8})(?<origin>[A-Z]{4})(?<dest>[A-Z]{4})\s*$/;
    const hm = header.match(headerRe);
    if (!hm?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }
    const { cs, ddhhmmss, origin, dest } = hm.groups;
    const day = Number(ddhhmmss.substring(0, 2));
    const hh = Number(ddhhmmss.substring(2, 4));
    const mm = Number(ddhhmmss.substring(4, 6));
    const ss = Number(ddhhmmss.substring(6, 8));
    if (day > 31 || hh > 23 || mm > 59 || ss > 59) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    ResultFormatter.callsign(decodeResult, cs);
    ResultFormatter.departureAirport(decodeResult, origin);
    ResultFormatter.arrivalAirport(decodeResult, dest);
    ResultFormatter.timestamp(
      decodeResult,
      DateTimeUtils.convertHHMMSSToTod(
        String(hh).padStart(2, '0') +
          String(mm).padStart(2, '0') +
          String(ss).padStart(2, '0'),
      ),
    );
    decodeResult.raw.day = day;

    // Parse the body — each line is `KEY<whitespace>VALUE` where KEY is a
    // short all-caps token (FUEL, TEMP, WDIR, WSPD, LATN/LATS, LONE/LONW,
    // ETA, TUR, ALT, …). Values can be blank.
    const fields: Record<string, string> = {};
    for (const line of bodyLines) {
      const t = line.trim();
      if (!t) continue;
      const mm2 = t.match(/^([A-Z]{2,5})\s*(.*)$/);
      if (!mm2) continue;
      const [, key, val] = mm2;
      fields[key] = val.trim();
    }

    // ── Raw ──
    if ('FUEL' in fields) decodeResult.raw.fuel_remaining = Number(fields.FUEL);
    if ('ALT' in fields) {
      const alt = Number(fields.ALT);
      if (!Number.isNaN(alt)) decodeResult.raw.altitude = alt;
    }
    if ('TEMP' in fields) decodeResult.raw.outside_air_temperature = fields.TEMP;
    if ('WDIR' in fields) decodeResult.raw.wind_dir = fields.WDIR;
    if ('WSPD' in fields) decodeResult.raw.wind_speed_raw = fields.WSPD;
    if ('ETA' in fields) decodeResult.raw.eta_raw = fields.ETA;

    // Lat: LATN 52.131 → +52.131 ; LATS 01.234 → -1.234
    if ('LATN' in fields || 'LATS' in fields) {
      const lat = Number(fields.LATN ?? fields.LATS);
      if (!Number.isNaN(lat)) {
        const signedLat = 'LATS' in fields ? -lat : lat;
        if ('LONE' in fields || 'LONW' in fields) {
          const lon = Number(fields.LONE ?? fields.LONW);
          if (!Number.isNaN(lon)) {
            const signedLon = 'LONW' in fields ? -lon : lon;
            ResultFormatter.position(decodeResult, {
              latitude: signedLat,
              longitude: signedLon,
            });
          }
        }
      }
    }

    if ('ALT' in fields) {
      const alt = Number(fields.ALT);
      if (!Number.isNaN(alt)) {
        ResultFormatter.altitude(decodeResult, alt);
      }
    }

    // ── Formatted (surface remaining raw fields as items for visibility) ──
    decodeResult.formatted.items.unshift({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Position Report (POS01)',
    });
    for (const [k, v] of Object.entries(fields)) {
      if (['LATN', 'LATS', 'LONE', 'LONW'].includes(k)) continue; // surfaced via position
      if (v === '' || v === '----') continue;
      decodeResult.formatted.items.push({
        type: k.toLowerCase(),
        code: k,
        label: k,
        value: v,
      });
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
