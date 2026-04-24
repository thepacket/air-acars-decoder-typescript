import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';

/**
 * Label 15 — REQPOS (Position Request uplink)
 *
 * `REQPOS` is a ground-to-air position polling command observed on label 15
 * and other labels (e.g. H1: `REQPOS037`). The ground station instructs the
 * aircraft's ACARS Management Unit to downlink its current position.
 *
 * Confidence:
 *   confirmed   — direction is uplink (REQPOS is a command, ground → aircraft)
 *   interpreted — REQPOS = "Request Position" (semantically unambiguous and
 *                 observed in public ACARS logs, e.g. HDQDLUA.H1 REQPOS037;
 *                 not explicitly defined in the supplied label-15 spec)
 *   wild guess  — trailing digits after REQPOS (sequence/msg-id, skipped here)
 *
 * Body format: `REQPOS` optionally followed by a numeric suffix (e.g. `037`).
 */
export class Label_15_REQPOS extends DecoderPlugin {
  name = 'label-15-reqpos';

  qualifiers() {
    return {
      labels: ['15'],
      preambles: ['REQPOS'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Position Request (uplink)');

    const text = (message.text || '').trim();
    const m = text.match(/^REQPOS(\d+)?$/);
    if (!m) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.raw.request_type = 'REQPOS';

    decodeResult.formatted.items.push(
      {
        type: 'message_type',
        code: 'MSGTYP',
        label: 'Message Type',
        value: 'Position Request (REQPOS — ground polls aircraft for position)',
      },
      {
        type: 'direction',
        code: 'DIR',
        label: 'Direction',
        value: 'Uplink (ground → aircraft)',
      },
    );

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
