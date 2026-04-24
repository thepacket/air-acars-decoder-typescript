import { DecoderPlugin } from '../DecoderPlugin';
import { DecodeResult, Message, Options } from '../DecoderPluginInterface';

/**
 * Label 37 — Proprietary Encoded / Obfuscated Airline Message
 *
 * Used by Southwest Airlines (WN) and others for operational messages
 * transmitted using a proprietary obfuscation/encoding scheme. The payload
 * is not human-readable and cannot be decoded without the airline's
 * proprietary key. Recognition of the label is the only useful output.
 */
export class Label_37_Obfuscated extends DecoderPlugin {
  name = 'label-37-obfuscated';

  qualifiers() {
    return {
      labels: ['37'],
    };
  }

  decode(message: Message, options: Options = {}): DecodeResult {
    const decodeResult = this.initResult(
      message,
      'Proprietary Encoded Airline Message',
    );

    const text = (message.text || '').trim();
    if (!text) {
      this.setDecodeLevel(decodeResult, false);
      return decodeResult;
    }

    decodeResult.formatted.items = [
      {
        type: 'message_type',
        code: 'MSGTYP',
        label: 'Message Type',
        value: 'Proprietary Encoded Airline Message (label 37)',
      },
    ];

    this.setDecodeLevel(decodeResult, true, 'partial');
    return decodeResult;
  }
}
