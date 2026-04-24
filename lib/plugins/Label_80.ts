import { DateTimeUtils } from '../DateTimeUtils';
import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { CoordinateUtils } from '../utils/coordinate_utils';
import { ResultFormatter } from '../utils/result_formatter';

// Airline Defined
// 3N01 POSRPT
export class Label_80 extends DecoderPlugin {
  name = 'label-80';

  qualifiers() {
    return {
      labels: ['80'],
      preambles: [],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(
      message,
      'Airline Defined Position Report',
    );

    const lines = message.text.split(/\r?\n/);

    // ARRIVAL notification format: line 2 matches NNN<TAIL> ARRIVAL,.<REG>,...
    if (lines.length >= 2 && /^\d{3}[A-Z0-9-]+\s+ARRIVAL,\./.test(lines[1])) {
      return this.parseArrivalFormat(lines, decodeResult);
    }

    // Asiana compact POS format: line 1 = POS<TAIL><FLT><ORG><DEST><DDMONYY><HHMMSS>
    if (/^POS[A-Z0-9]{5,7}\d{4}[A-Z]{4}[A-Z]{4}\d{2}[A-Z]{3}\d{2}\d{6}/.test(lines[0])) {
      return this.parseAsianaPos(lines, decodeResult);
    }

    if (lines.length === 1 && lines[0].includes(',')) {
      this.parseCsvFormat(lines[0], decodeResult);
    } else {
      const header = lines[0].trim();
      const headerParts = header.split(',');
      for (let i = 0; i < headerParts.length - 1; i++) {
        const moreFields = headerParts[i].split('/');
        for (const more of moreFields) {
          this.parseTags(more.trim(), decodeResult);
        }
      }

      this.parseHeader(
        headerParts[headerParts.length - 1].trim(),
        decodeResult,
      );

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const parts = line.split('/');
        for (const part of parts) {
          this.parseTags(part.trim(), decodeResult);
        }
      }
    }

    if (decodeResult.formatted.items.length > 0) {
      this.setDecodeLevel(decodeResult, true);
    }

    return decodeResult;
  }

  private parseHeader(header: string, results: DecodeResult) {
    //3N01 POSRPT 0581/27 KIAD/MSLP .N962AV/04H 11:02
    const fields = header.split('/');
    if (fields.length < 3) {
      ResultFormatter.unknown(results, header, '/');
      return;
    }
    const msgInfo = fields[0].split(/\s+/);
    if (msgInfo.length === 3) {
      ResultFormatter.unknownArr(results, msgInfo.slice(0, 2), ' ');
      ResultFormatter.flightNumber(results, msgInfo[2]);
    } else {
      ResultFormatter.unknown(results, header, '/');
      return;
    }

    const otherInfo1 = fields[1].split(/\s+/);
    if (otherInfo1.length === 2) {
      ResultFormatter.day(results, parseInt(otherInfo1[0], 10));
      ResultFormatter.departureAirport(results, otherInfo1[1]);
    } else {
      ResultFormatter.unknownArr(results, otherInfo1, ' ');
    }

    const otherInfo2 = fields[2].split(/\s+/);
    if (otherInfo2.length === 2) {
      ResultFormatter.arrivalAirport(results, otherInfo2[0]);
      ResultFormatter.tail(results, otherInfo2[1].replace('.', ''));
    } else {
      ResultFormatter.unknownArr(results, otherInfo2, ' ');
    }

    if (fields.length > 3) {
      ResultFormatter.unknownArr(results, fields.slice(3), '/');
    }
  }

  private parseTags(part: string, results: DecodeResult) {
    const kvPair = part.split(/\s+/);
    if (kvPair.length < 2) {
      ResultFormatter.unknown(results, part, '/');
      return;
    }
    const tag = kvPair[0];
    const val = kvPair.slice(1).join(' ');

    switch (tag) {
      case 'POS':
        // don't use decodeStringCoordinates because of different position format
        const posRegex = /^(?<latd>[NS])(?<lat>.+)(?<lngd>[EW])(?<lng>.+)/;
        const posResult = val.match(posRegex);
        const lat =
          Number(posResult?.groups?.lat) *
          (posResult?.groups?.latd === 'S' ? -1 : 1);
        const lon =
          Number(posResult?.groups?.lng) *
          (posResult?.groups?.lngd === 'W' ? -1 : 1);
        const position = {
          latitude: Number.isInteger(lat) ? lat / 1000 : lat / 100,
          longitude: Number.isInteger(lon) ? lon / 1000 : lon / 100,
        };
        ResultFormatter.position(results, position);
        break;
      case 'ALT':
        ResultFormatter.altitude(results, parseInt(val.replace('+', ''), 10));
        break;
      case 'FL': // Handle "FL 360"
        ResultFormatter.altitude(results, parseInt(val, 10) * 100);
        break;
      case 'MCH':
        ResultFormatter.mach(results, parseInt(val, 10) / 1000);
        break;
      case 'SPD':
        ResultFormatter.groundspeed(results, parseInt(val, 10));
        break;
      case 'TAS':
        ResultFormatter.airspeed(results, parseInt(val, 10));
        break;
      case 'SAT':
        ResultFormatter.temperature(results, val);
        break;
      case 'FB':
        // ignoring, assuming FOB and avoiding duplicates.
        break;
      case 'FOB':
        // Strip non-numeric like 'N' in 'N009414'
        ResultFormatter.currentFuel(
          results,
          parseInt(val.replace(/\D/g, ''), 10),
        );
        break;
      case 'UTC':
        ResultFormatter.timestamp(
          results,
          DateTimeUtils.convertHHMMSSToTod(val),
        );
        break;
      case 'ETA':
        const hhmm = val.split('.')[0].replace(':', '');
        ResultFormatter.eta(results, DateTimeUtils.convertHHMMSSToTod(hhmm));
        break;
      case 'HDG':
        ResultFormatter.heading(results, parseInt(val, 10));
        break;
      case 'NWYP':
        results.raw.next_waypoint = val;
        break;
      case 'SWN':
        // wind speed, do nothing for
        ResultFormatter.unknown(results, part, '/');
        break;
      case 'DWN':
        // wind direction, do nothing for now
        ResultFormatter.unknown(results, part, '/');
        break;
      case 'AD':
        // do nothing, as it shows in the header
        break;
      default:
        ResultFormatter.unknown(results, part, '/');
    }
  }
  private parseAsianaPos(lines: string[], decodeResult: DecodeResult): DecodeResult {
    // Line 1: POS<TAIL(5-7)><FLT(4)><ORG(4)><DEST(4)><DDMONYY(7)><HHMMSS(6)>
    const hdr = lines[0].match(
      /^POS(?<tail>[A-Z0-9]{5,7})(?<flt>\d{4})(?<org>[A-Z]{4})(?<dst>[A-Z]{4})(?<date>\d{2}[A-Z]{3}\d{2})(?<time>\d{6})/,
    );
    if (!hdr?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }
    const { tail, org, dst, time } = hdr.groups;

    ResultFormatter.tail(decodeResult, tail);
    ResultFormatter.departureAirport(decodeResult, org);
    ResultFormatter.arrivalAirport(decodeResult, dst);
    ResultFormatter.timestamp(decodeResult, DateTimeUtils.convertHHMMSSToTod(time));

    // Line 2: TN <lat>E<lon><time>  <alt>...<fob>
    // TN prefix and sub-fields after altitude are wild guess — skipped.
    if (lines.length >= 2) {
      const l2 = lines[1];
      const posMatch = l2.match(
        /TN\s+(?<lat>\d+\.\d+)E(?<lon>\d+\.\d+)\d{6}\s+(?<alt>\d+)/,
      );
      if (posMatch?.groups) {
        const lat = parseFloat(posMatch.groups.lat);  // implied North (TN prefix)
        const lon = parseFloat(posMatch.groups.lon);  // explicit East hemisphere
        ResultFormatter.position(decodeResult, { latitude: lat, longitude: lon });
        ResultFormatter.altitude(decodeResult, parseInt(posMatch.groups.alt, 10));
      }

      // FOB: last whitespace-delimited numeric token on line 2 (interpreted)
      const tokens = l2.trim().split(/\s+/);
      const lastToken = tokens[tokens.length - 1];
      if (/^\d+$/.test(lastToken) && lastToken.length >= 4) {
        ResultFormatter.currentFuel(decodeResult, parseInt(lastToken, 10));
      }
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }

  private parseArrivalFormat(lines: string[], decodeResult: DecodeResult): DecodeResult {
    // Line 1: e.g. "001CT24002658N2847.3W09913.93275150030"
    // Fields (interpreted unless noted): DD HHMM [skip SS] POS HDG ALT_RAW ETA_MINS
    const line1 = lines[0];

    // Day + time: two-digit day and four-digit HHMM immediately before the two-digit seconds and position
    const dtMatch = line1.match(/(\d{2})(\d{4})\d{2}[NS]/);
    if (dtMatch) {
      ResultFormatter.day(decodeResult, parseInt(dtMatch[1], 10));
      ResultFormatter.timestamp(decodeResult, DateTimeUtils.convertHHMMSSToTod(dtMatch[2]));
    }

    // Position in DDMM.M / DDDMM.M format, followed by HDG(3) ALT_RAW(3) ETA_MIN(4)
    const posMatch = line1.match(
      /([NS])(\d{2,3})(\d{2}\.\d+)([EW])(\d{2,3})(\d{2}\.\d+)(\d{3})(\d{3})(\d{4})/,
    );
    if (posMatch) {
      const latSign = posMatch[1] === 'S' ? -1 : 1;
      const latDeg = parseInt(posMatch[2], 10) + parseFloat(posMatch[3]) / 60;
      const lonSign = posMatch[4] === 'W' ? -1 : 1;
      const lonDeg = parseInt(posMatch[5], 10) + parseFloat(posMatch[6]) / 60;
      ResultFormatter.position(decodeResult, {
        latitude: latSign * latDeg,
        longitude: lonSign * lonDeg,
      });
      ResultFormatter.heading(decodeResult, parseInt(posMatch[7], 10));
      // ETA in minutes (interpreted; aligns with free-text "ETA 30 MIN")
      const etaMin = parseInt(posMatch[9], 10);
      decodeResult.raw.eta_minutes = etaMin;
      decodeResult.formatted.items.push({
        type: 'eta_time',
        code: 'ETAMIN',
        label: 'ETA (minutes to destination)',
        value: etaMin.toString(),
      });
    }

    // Line 2: e.g. "024N788QS ARRIVAL,.N788QS,1-737-208-1400,MILLION AIR AUS"
    // Skip wild-guess 3-digit prefix; extract tail, sub-type, FBO (confirmed/interpreted)
    const line2 = lines[1];
    const arrMatch = line2.match(
      /^\d{3}(?<tail>[A-Z0-9-]+)\s+ARRIVAL,\.(?<reg>[A-Z0-9-]+),(?<contact>[^,]+),(?<fbo>.+)$/,
    );
    if (arrMatch?.groups) {
      const { tail, fbo, contact } = arrMatch.groups;
      ResultFormatter.tail(decodeResult, tail);
      decodeResult.raw.message_subtype = 'ARRIVAL';
      decodeResult.raw.fbo = fbo.trim();
      decodeResult.formatted.items.push(
        { type: 'message_type', code: 'MSGTYP', label: 'Message Sub-type', value: 'Arrival Notification' },
        { type: 'fbo', code: 'FBO', label: 'Destination FBO', value: fbo.trim() },
      );
      // Contact info interpreted as dispatch/operations reference
      const contactTrimmed = contact.trim();
      if (contactTrimmed) {
        decodeResult.raw.contact_info = contactTrimmed;
        decodeResult.formatted.items.push({
          type: 'contact_info',
          code: 'CONTACT',
          label: 'Contact / Reference',
          value: contactTrimmed,
        });
      }
    }

    // Lines 3+: free-text operational instructions (confirmed plain English)
    if (lines.length > 2) {
      const freeText = lines.slice(2).join('\n').trim();
      if (freeText) {
        decodeResult.raw.free_text = freeText;
        decodeResult.formatted.items.push({
          type: 'notes',
          code: 'NOTES',
          label: 'Crew / Dispatch Notes',
          value: freeText,
        });
      }
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }

  private parseCsvFormat(text: string, results: DecodeResult) {
    const csvParts = text.split(',');
    if (csvParts.length !== 9) {
      return;
    }
    const header = csvParts[0].trim().split(/\s+/);
    ResultFormatter.unknown(results, header[0], ' ');
    ResultFormatter.unknown(results, header[1], ' ');
    ResultFormatter.position(
      results,
      CoordinateUtils.decodeStringCoordinates(header[2]),
    );
    ResultFormatter.unknown(results, csvParts[1]);
    ResultFormatter.timestamp(
      results,
      DateTimeUtils.convertHHMMSSToTod(csvParts[2]),
    );
    ResultFormatter.unknownArr(results, csvParts.slice(4, 6), ',');
    ResultFormatter.temperature(
      results,
      (
        (csvParts[6].charAt(0) === 'M' ? -1 : 1) *
        parseInt(csvParts[6].slice(1), 10)
      ).toString(),
    );
    ResultFormatter.airspeed(results, parseInt(csvParts[7], 10));
    ResultFormatter.currentFuel(results, parseInt(csvParts[8], 10));
  }
}
