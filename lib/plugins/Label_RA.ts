import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';

/**
 * Label RA — Command / Response
 *
 * Per the ACARS message documentation
 * (https://github.com/airframesio/acars-message-documentation/blob/main/research/RA.md),
 * label RA is a command/response channel that carries predominantly free-text
 * payloads: ATC pre-departure clearances, dispatcher messages, weather
 * uplinks, etc. The upstream docs explicitly note it "might be too freeform
 * to parse effectively".
 *
 * This plugin therefore takes a conservative approach:
 *
 *   - If the payload begins with a recognizable ACARS routing preamble —
 *     `QU` followed by a 6–10 char address and a service qualifier digit —
 *     surface that token and the remainder as free text.
 *   - Otherwise, surface the whole body as free text.
 *
 * In both cases `decodeLevel` is set to `partial`: we can identify and
 * extract the preamble but the body is not structurally decoded.
 */
export class Label_RA extends DecoderPlugin {
  name = 'label-ra';

  qualifiers() {
    return {
      labels: ['RA'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Command / Response');

    const text = message.text || '';
    if (!text.trim()) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // ACARS routing preamble shape: `QU<addr><qual>` where addr is 6–10
    // uppercase alphanumerics (typical 6) and qual is a single digit or
    // tilde/dot then digit, e.g. `QUANPOVQY~1`, `QUANPOCF9`, `QUHDQITOO.1`.
    const preambleRe = /^(?<preamble>QU[A-Z0-9]{6,10}[~.]?\d?)/;
    const m = text.match(preambleRe);

    decodeResult.formatted.items.push({
      type: 'message_type',
      code: 'MSGTYP',
      label: 'Message Type',
      value: 'Command / Response (free-text)',
    });

    if (m?.groups?.preamble) {
      decodeResult.raw.routing_preamble = m.groups.preamble;
      decodeResult.formatted.items.push({
        type: 'routing_preamble',
        code: 'RPREAM',
        label: 'Routing Preamble',
        value: m.groups.preamble,
      });
      const body = text.slice(m[0].length);
      if (body.trim()) {
        decodeResult.raw.free_text = body;
        decodeResult.formatted.items.push({
          type: 'free_text',
          code: 'FTEXT',
          label: 'Free Text',
          value: body,
        });
      }
    } else {
      decodeResult.raw.free_text = text;
      decodeResult.formatted.items.push({
        type: 'free_text',
        code: 'FTEXT',
        label: 'Free Text',
        value: text,
      });
    }

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
