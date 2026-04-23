import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';

/**
 * Label A4 — ACARS Form-1 envelope (FSM / CPDLC log-on acknowledgements)
 *
 * Observed wire shape (not yet documented in acars-message-documentation
 * research/A4.md):
 *
 *   /GVADCYA.FS1/FSM 0456 260423 LSZH
 *   SWR2MC CDA RECEIVED
 *   CLEARANCE CONFIRMED
 *   <optional CRC hex>
 *
 * Header is the ARINC 620 Form-1 envelope already used across several
 * other CPDLC-family labels in this repository:
 *
 *   /<ground>.<svc-qualifier>/<sublabel> <seq> <DDMMYY> <airport>
 *     ground         : 7-char ATS facility code (e.g. GVADCYA)
 *     svc-qualifier  : 3-char code (e.g. FS1, AT1)
 *     sublabel       : 3-char message type (FSM, CDA, CLR, …)
 *     seq            : 4-digit sequence / order number
 *     DDMMYY         : date, zero-padded
 *     airport        : 4-char ICAO
 *
 * The plugin surfaces header fields structurally and keeps the body lines
 * as free text — individual airline/ATC operators use different textual
 * conventions for the body (clearance confirmations, request status,
 * free-text advisories) that are not safely parsable from label A4 alone.
 */
export class Label_A4_FSM extends DecoderPlugin {
  name = 'label-a4-fsm';

  qualifiers() {
    return {
      labels: ['A4'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(
      message,
      'ACARS Form-1 FSM / ATC Acknowledgement',
    );
    const text = message.text || '';
    if (!text.trim()) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    const normalized = text.replace(/\r/g, '');
    const [headerRaw, ...bodyLines] = normalized.split('\n');
    const header = headerRaw.trim();

    // /<ground 6-8 chars>.<qual 2-4 chars>/<sublabel 2-4 chars> <seq 3-5 digits> <DDMMYY> <ICAO 3-4 chars>
    const re =
      /^\/(?<ground>[A-Z0-9]{6,8})\.(?<qual>[A-Z0-9]{2,4})\/(?<sub>[A-Z0-9]{2,4})\s+(?<seq>\d{3,5})\s+(?<date>\d{6})\s+(?<icao>[A-Z]{3,4})\s*$/;
    const m = header.match(re);
    if (!m?.groups) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }
    const { ground, qual, sub, seq, date, icao } = m.groups;
    const dd = Number(date.substring(0, 2));
    const mo = Number(date.substring(2, 4));
    const yy = Number(date.substring(4, 6));
    if (dd === 0 || dd > 31 || mo === 0 || mo > 12) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.raw.ground_address = ground;
    decodeResult.raw.service_qualifier = qual;
    decodeResult.raw.sublabel = sub;
    decodeResult.raw.sequence_number = Number(seq);
    decodeResult.raw.date = `20${String(yy).padStart(2, '0')}-${String(mo).padStart(2, '0')}-${String(dd).padStart(2, '0')}`;
    decodeResult.raw.airport_icao = icao;

    const freeText = bodyLines
      .map((l) => l.trim())
      .filter((l) => l.length > 0)
      .join('\n');

    decodeResult.formatted.items.unshift(
      {
        type: 'message_type',
        code: 'MSGTYP',
        label: 'Message Type',
        value: 'ACARS Form-1 FSM / ATC Acknowledgement',
      },
      {
        type: 'ground_address',
        code: 'GNDADDR',
        label: 'Ground ATS Facility',
        value: ground,
      },
      {
        type: 'service_qualifier',
        code: 'SVCQUAL',
        label: 'Service Qualifier',
        value: qual,
      },
      {
        type: 'sublabel',
        code: 'SUBLBL',
        label: 'Sub-Label',
        value: sub,
      },
    );
    decodeResult.formatted.items.push(
      {
        type: 'sequence_number',
        code: 'SEQ',
        label: 'Sequence Number',
        value: seq,
      },
      {
        type: 'date',
        code: 'DATE',
        label: 'Date',
        value: decodeResult.raw.date as string,
      },
      {
        type: 'icao',
        code: 'ICAO',
        label: 'Airport ICAO',
        value: icao,
      },
    );
    if (freeText) {
      decodeResult.raw.free_text = freeText;
      decodeResult.formatted.items.push({
        type: 'free_text',
        code: 'FTEXT',
        label: 'Free Text',
        value: freeText,
      });
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
