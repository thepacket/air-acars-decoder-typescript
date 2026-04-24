import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';
import { ResultFormatter } from '../utils/result_formatter';

/**
 * Label 4P — Pre-Departure Clearance (PDC)
 *
 * An electronically delivered IFR departure clearance uplinked from ATC
 * (via AOC service provider) to the cockpit, replacing a voice readback.
 * Contains route, altitude, squawk code, SID, runway, and a readback
 * identifier the crew must quote to acknowledge receipt.
 *
 * Example header:
 *   -// ATC PA01 YYZOWAC 24APR/0220          C-GEGI/941/AC0810
 *
 * Confidence:
 *   confirmed   — *PRE-DEPARTURE CLEARANCE* banner; ATC originator; departure
 *                 ICAO (CYYZ); destination ICAO (LPPT); squawk (XPRD NNNN);
 *                 SID (USE SID ...); runway (DEPARTURE RUNWAY NN); filed
 *                 altitude (FILED FLNNN); aircraft type (A333); flight ID
 *                 (ACA810 / AC0810); tail (C-GEGI); clearance identifier
 *                 (CONTACT CLEARANCE WITH IDENTIFIER XXXX); route text;
 *                 TIMESTAMP date/time; RUNUP advisory; END marker
 *   interpreted — header PDC sequence (PA01); ATC facility code (OWAC);
 *                 internal reference number (941); wake turbulence category
 *                 (H); ICAO equipment suffix (W)
 *   wild guess  — N79B track/airway classification (raw route text preserved
 *                 as-is; individual waypoint types not asserted)
 */
export class Label_4P_PDC extends DecoderPlugin {
  name = 'label-4p-pdc';

  qualifiers() {
    return {
      labels: ['4P'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Pre-Departure Clearance (PDC)');

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Detection: confirmed PDC banner must be present
    if (!text.includes('PRE-DEPARTURE CLEARANCE')) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.formatted.items.push({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Pre-Departure Clearance (PDC)',
    });

    const lines = text.replace(/\r/g, '').split('\n');

    // Header: -// ATC <seq> <IATA><facility> <date>/<time> <tail>/<ref>/<flight>
    const hdrRe = /^-\/\/\s+ATC\s+([A-Z0-9]+)\s+([A-Z]{3})([A-Z]+)\s+(\d{2}[A-Z]+\/\d{4})\s+([A-Z0-9-]+)\/(\d+)\/([A-Z0-9]+)/;
    const hdrMatch = text.match(hdrRe);
    if (hdrMatch) {
      const [, seq, airportIata, facility, dateTime, tail, ref, flightId] = hdrMatch;
      // Sequence number (interpreted)
      decodeResult.raw.pdc_sequence = seq;
      // Origin airport IATA from header (confirmed — also seen as ICAO in FLT line)
      decodeResult.raw.header_airport_iata = airportIata;
      // ATC facility code (interpreted)
      decodeResult.raw.atc_facility = facility;
      decodeResult.formatted.items.push({
        type: 'atc_facility',
        code: 'FACILITY',
        label: 'ATC Facility',
        value: facility,
      });
      // Header date/time (confirmed)
      decodeResult.raw.header_datetime = dateTime;
      // Tail number (confirmed)
      decodeResult.raw.tail = tail;
      ResultFormatter.tail(decodeResult, tail);
      // Internal reference (interpreted)
      decodeResult.raw.pdc_reference = ref;
      // Flight ID (confirmed)
      ResultFormatter.flightNumber(decodeResult, flightId);
    }

    // TIMESTAMP line: TIMESTAMP DDMONYY HH:MM (confirmed)
    const tsMatch = text.match(/TIMESTAMP\s+(\d{2}[A-Z]{3}\d{2})\s+(\d{2}:\d{2})/);
    if (tsMatch) {
      decodeResult.raw.clearance_date = tsMatch[1];
      decodeResult.raw.clearance_time_utc = tsMatch[2];
      decodeResult.formatted.items.push({
        type: 'clearance_time',
        code: 'CLRTIME',
        label: 'Clearance Issued (UTC)',
        value: `${tsMatch[1]} ${tsMatch[2]}Z`,
      });
    }

    // FLT line: FLT <ICAO-flight> <ICAO-dep> (confirmed)
    const fltMatch = text.match(/^FLT\s+([A-Z0-9]+)\s+([A-Z]{4})/m);
    if (fltMatch) {
      decodeResult.raw.icao_flight_number = fltMatch[1];
      decodeResult.raw.departure_icao = fltMatch[2];
      ResultFormatter.departureAirport(decodeResult, fltMatch[2]);
    }

    // Aircraft type / wake / equipment / filed altitude (type confirmed; H/W interpreted)
    const acMatch = text.match(/^([HM])\/([A-Z0-9]{2,4})\/([A-Z0-9]+)\s+FILED\s+(FL\d+)/m);
    if (acMatch) {
      decodeResult.raw.wake_category = acMatch[1];       // interpreted
      decodeResult.raw.aircraft_type = acMatch[2];       // confirmed
      decodeResult.raw.equipment_suffix = acMatch[3];    // interpreted
      decodeResult.raw.filed_altitude = acMatch[4];      // confirmed
      decodeResult.formatted.items.push({
        type: 'aircraft_type',
        code: 'ACTYPE',
        label: 'Aircraft Type',
        value: acMatch[2],
      });
      decodeResult.formatted.items.push({
        type: 'filed_altitude',
        code: 'FILALT',
        label: 'Filed Cruise Altitude',
        value: acMatch[4],
      });
    }

    // Squawk code: XPRD NNNN (confirmed)
    const xprdMatch = text.match(/^XPRD\s+(\d{4})/m);
    if (xprdMatch) {
      decodeResult.raw.squawk = xprdMatch[1];
      decodeResult.formatted.items.push({
        type: 'squawk',
        code: 'XPRD',
        label: 'Squawk (Transponder Code)',
        value: xprdMatch[1],
      });
    }

    // SID: USE SID <name> (confirmed)
    const sidMatch = text.match(/^USE SID\s+(\S+)/m);
    if (sidMatch) {
      decodeResult.raw.sid = sidMatch[1];
      decodeResult.formatted.items.push({
        type: 'sid',
        code: 'SID',
        label: 'Standard Instrument Departure',
        value: sidMatch[1],
      });
    }

    // Departure runway (confirmed)
    const rwyMatch = text.match(/^DEPARTURE RUNWAY\s+(\S+)/m);
    if (rwyMatch) {
      decodeResult.raw.departure_runway = rwyMatch[1];
      decodeResult.formatted.items.push({
        type: 'departure_runway',
        code: 'RWY',
        label: 'Departure Runway',
        value: rwyMatch[1],
      });
    }

    // Destination ICAO (confirmed)
    const destMatch = text.match(/^DESTINATION\s+([A-Z]{4})/m);
    if (destMatch) {
      decodeResult.raw.arrival_icao = destMatch[1];
      ResultFormatter.arrivalAirport(decodeResult, destMatch[1]);
    }

    // Clearance readback identifier (confirmed)
    const clrIdMatch = text.match(/^CONTACT CLEARANCE WITH IDENTIFIER\s+(\S+)/m);
    if (clrIdMatch) {
      decodeResult.raw.clearance_identifier = clrIdMatch[1];
      decodeResult.formatted.items.push({
        type: 'clearance_id',
        code: 'CLRID',
        label: 'Clearance Readback Identifier',
        value: clrIdMatch[1],
      });
    }

    // Route text: lines after the clearance identifier, before // FILED ROUTE or END.
    // Stored as raw text; individual waypoint type classification skipped (N79B = wild guess).
    const clrIdIdx = lines.findIndex(l => /^CONTACT CLEARANCE WITH IDENTIFIER/.test(l));
    if (clrIdIdx >= 0) {
      const routeLines: string[] = [];
      for (let i = clrIdIdx + 1; i < lines.length; i++) {
        const l = lines[i].trim();
        if (l === 'END') break;
        // Strip inline // annotations (e.g. "4600N03000W // FILED ROUTE")
        const stripped = l.includes('//') ? l.substring(0, l.indexOf('//')).trim() : l;
        if (stripped) routeLines.push(stripped);
      }
      if (routeLines.length > 0) {
        const routeText = routeLines.join(' ');
        decodeResult.raw.route = routeText;
        decodeResult.formatted.items.push({
          type: 'route',
          code: 'ROUTE',
          label: 'Filed Route',
          value: routeText,
        });
      }
    }

    // RUNUP advisory (confirmed)
    if (/ADVISE ATC IF RUNUP REQUIRED/.test(text)) {
      decodeResult.raw.runup_advisory = true;
      decodeResult.formatted.items.push({
        type: 'advisory',
        code: 'RUNUP',
        label: 'Runup Advisory',
        value: 'Advise ATC if engine runup required',
      });
    }

    this.setDecodeLevel(decodeResult, true, 'full');
    return decodeResult;
  }
}
