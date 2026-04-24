import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';

/**
 * Label 44 — Encrypted ACARS (mono-alphabetic substitution cipher)
 *
 * A small portion of label-44 traffic — predominantly from privately-owned,
 * business, and government aircraft — is encrypted before transmission. The
 * body is a substitution-ciphered payload that cannot be recovered without
 * the operator-specific key.
 *
 * Detection: body contains characters (`|`, `;`, `]`, `[`, `~`) that do not
 * appear in standard ACARS plaintext CSV messages but are consistent with
 * substitution cipher output. This plugin is registered last among label-44
 * sub-plugins so it only fires when no plaintext sub-type matches.
 *
 * Confidence:
 *   confirmed   — label 44 = encrypted ACARS (documented in academic
 *                 literature; "Economy Class Crypto" and similar research)
 *   confirmed   — content is not recoverable without the operator key
 *   interpreted — cipher is mono-alphabetic substitution (observed broadly
 *                 across label-44 traffic by researchers; individual
 *                 operators may vary)
 *   wild guess  — any prefix before the ciphertext body (e.g. `02N`) as a
 *                 key identifier or sequence number (skipped)
 */
export class Label_44_Encrypted extends DecoderPlugin {
  name = 'label-44-encrypted';

  qualifiers() {
    return {
      labels: ['44'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(message, 'Encrypted ACARS Message');

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    // Require at least one character that is not present in standard ACARS
    // plaintext CSV formats, indicating substitution cipher output.
    if (!/[|;\][\~]/.test(text)) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.raw.ciphertext = text;

    decodeResult.formatted.items.push(
      {
        type: 'message_type',
        code: 'MSGTYP',
        label: 'Message Type',
        value: 'Encrypted ACARS — substitution cipher (content not recoverable without operator key)',
      },
      {
        type: 'ciphertext',
        code: 'CIPHER',
        label: 'Ciphertext',
        value: text,
      },
    );

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
