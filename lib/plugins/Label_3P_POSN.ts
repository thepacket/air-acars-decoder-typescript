import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { DateTimeUtils } from '../DateTimeUtils';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 3P — POSN position / route report
 *
 * Per the ACARS message documentation
 * (https://github.com/airframesio/acars-message-documentation/blob/main/research/3P.md),
 * label 3P has two broad families of payload: POSN-prefixed structured
 * position reports and non-POSN free-text (loadsheets, pantry codes,
 * service notes, CPT reports). This plugin only claims the POSN variant,
 * leaving the rest to fall through to downstream decoders.
 *
 * POSN wire format:
 *
 *   POSN39191W125342,OLOFF,223442,340,REDWD,224245,N41W130,M55,00667,1551FAKE
 *   |   |      |     |     |      |   |     |      |       |   |     |
 *   |   |      |     |     |      |   |     |      |       |   |     └── Trailing tag (aircraft/crew token)
 *   |   |      |     |     |      |   |     |      |       |   └──────── Remaining fuel (raw token)
 *   |   |      |     |     |      |   |     |      |       └──────────── OAT (Mdd = -dd °C)
 *   |   |      |     |     |      |   |     |      └──────────────────── Next-next waypoint code
 *   |   |      |     |     |      |   |     └─────────────────────────── ETA at next waypoint (HHMMSS)
 *   |   |      |     |     |      |   └───────────────────────────────── Next waypoint code
 *   |   |      |     |     |      └───────────────────────────────────── Flight level (FLddd)
 *   |   |      |     |     └──────────────────────────────────────────── Time at waypoint (HHMMSS)
 *   |   |      |     └────────────────────────────────────────────────── Current waypoint code
 *   |   |      └────────────────────────────────────────────────────────── Longitude: Wddd.mmm (or E)
 *   |   └────────────────────────────────────────────────────────────── Latitude: Ndd.mmm (or S)
 *   └────────────────────────────────────────────────────────────────── Literal POSN preamble
 */
export class Label_3P_POSN extends DecoderPlugin {
  name = 'label-3p-posn';

  qualifiers() {
    return {
      labels: ['3P'],
      preambles: ['POSN'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Position Report (POSN)');
    const text = (message.text || '').trim();
    if (!text || !text.startsWith('POSN')) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Latitude is Ndd.mmm encoded as Nddmmm (no decimal); longitude is
    // Wddd.mmm as Wdddmmm. Remainder is comma-delimited.
    const re =
      /^POS(?<latDir>[NS])(?<latRaw>\d{5})(?<lonDir>[EW])(?<lonRaw>\d{6}),(?<wpCur>[A-Z0-9]{2,6}),(?<timeCur>\d{6}),(?<alt>\d{2,4}),(?<wpNext>[A-Z0-9]{2,6}),(?<timeNext>\d{6}),(?<wpFar>[A-Z0-9]{2,10}),(?<oat>[MP]\d{1,3}),(?<fuel>\d{3,6}),(?<tail>.+)$/;
    const m = text.match(re);
    if (!m?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }
    const {
      latDir, latRaw, lonDir, lonRaw,
      wpCur, timeCur, alt, wpNext, timeNext, wpFar, oat, fuel, tail,
    } = m.groups;

    // Ndd.mmm: dd + mmm/1000 (note: mmm here is a 3-digit "thousandths"
    // component, not arc-minutes — matches how Label_16_POSA1 and similar
    // plugins in this repo decode the same encoding).
    const latDeg =
      Number(latRaw.substring(0, 2)) + Number(latRaw.substring(2, 5)) / 1000;
    const lonDeg =
      Number(lonRaw.substring(0, 3)) + Number(lonRaw.substring(3, 6)) / 1000;
    const latitude = latDir === 'S' ? -latDeg : latDeg;
    const longitude = lonDir === 'W' ? -lonDeg : lonDeg;
    const altitudeFeet = Number(alt) * 100;
    const oatC = (oat.startsWith('M') ? -1 : 1) * Number(oat.substring(1));

    if (Number(timeCur.substring(0, 2)) > 23 || Number(timeCur.substring(2, 4)) > 59) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    ResultFormatter.position(decodeResult, { latitude, longitude });
    ResultFormatter.altitude(decodeResult, altitudeFeet);
    ResultFormatter.timestamp(
      decodeResult,
      DateTimeUtils.convertHHMMSSToTod(timeCur),
    );
    ResultFormatter.eta(
      decodeResult,
      DateTimeUtils.convertHHMMSSToTod(timeNext),
    );

    decodeResult.raw.current_waypoint = wpCur;
    decodeResult.raw.next_waypoint = wpNext;
    decodeResult.raw.far_waypoint = wpFar;
    decodeResult.raw.outside_air_temperature = oatC;
    decodeResult.raw.fuel_raw = fuel;
    decodeResult.raw.trailing_tag = tail;

    decodeResult.formatted.items.unshift({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Position Report (POSN)',
    });
    decodeResult.formatted.items.push(
      {
        type: 'waypoint',
        code: 'WPT',
        label: 'Current Waypoint',
        value: wpCur,
      },
      {
        type: 'waypoint_next',
        code: 'WPT_NEXT',
        label: 'Next Waypoint',
        value: wpNext,
      },
      {
        type: 'waypoint_far',
        code: 'WPT_FAR',
        label: 'Next-next Waypoint',
        value: wpFar,
      },
      {
        type: 'outside_air_temperature',
        code: 'OATEMP',
        label: 'Outside Air Temperature (C)',
        value: `${oatC} degrees`,
      },
      {
        type: 'fuel_raw',
        code: 'FUEL',
        label: 'Fuel (raw)',
        value: fuel,
      },
      {
        type: 'trailing_tag',
        code: 'TAG',
        label: 'Trailing Tag',
        value: tail,
      },
    );

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
