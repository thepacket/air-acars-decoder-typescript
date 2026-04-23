import { MessageDecoder } from '../MessageDecoder';
import { Label_27_POS } from './Label_27_POS';

describe('Label_27_POS', () => {
  let plugin: Label_27_POS;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_27_POS(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-27-pos");
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["27"]);
  });

  test('reports own plugin name on empty text', () => {
    const r = plugin.decode({ label: "27", text: '' });
    expect(r.decoder.name).toBe("label-27-pos");
  });

  test("decodes #1: 1/26 Q1008 NOSIG", () => {
    const r = plugin.decode({
      label: "27",
      text: "1/26 Q1008 NOSIG",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #2: 1/26 Q1008 NOSIG", () => {
    const r = plugin.decode({
      label: "27",
      text: "1/26 Q1008 NOSIG",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #3: EDDH,EDDF,EDDV,EDDW,,", () => {
    const r = plugin.decode({
      label: "27",
      text: "EDDH,EDDF,EDDV,EDDW,,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #4: EDFH,EDDK,,, N 50.748,E 4.972,13263,SN2607", () => {
    const r = plugin.decode({
      label: "27",
      text: "EDFH,EDDK,,,\r\nN 50.748,E  4.972,13263,SN2607",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #5: EBBR,ESGG,EKBI,EDDH, N 60.071,E 10.782,19511,SN2288", () => {
    const r = plugin.decode({
      label: "27",
      text: "EBBR,ESGG,EKBI,EDDH,\r\nN 60.071,E 10.782,19511,SN2288",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #6: LIML,ELLX,ZRH,MXP, N 50.702,E 4.945,14790,SN3145", () => {
    const r = plugin.decode({
      label: "27",
      text: "LIML,ELLX,ZRH,MXP,\r\nN 50.702,E  4.945,14790,SN3145",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #7: LIML,ELLX,ZRH,MXP, N 50.702,E 4.945,14790,SN3145", () => {
    const r = plugin.decode({
      label: "27",
      text: "LIML,ELLX,ZRH,MXP,\r\nN 50.702,E  4.945,14790,SN3145",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #8: LIML,ELLX,ZRH,MXP, N 50.702,E 4.945,14790,SN3145", () => {
    const r = plugin.decode({
      label: "27",
      text: "LIML,ELLX,ZRH,MXP,\r\nN 50.702,E  4.945,14790,SN3145",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #9: GMMX,LEVC,LEMG,LEZL,", () => {
    const r = plugin.decode({
      label: "27",
      text: "GMMX,LEVC,LEMG,LEZL,",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #10: LKPR,EDDM,EDDC,LOWW", () => {
    const r = plugin.decode({
      label: "27",
      text: "LKPR,EDDM,EDDC,LOWW",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #11: LKPR,EDDM,EDDC,LOWW", () => {
    const r = plugin.decode({
      label: "27",
      text: "LKPR,EDDM,EDDC,LOWW",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #12: LKPR,EDDM,EDDC,LOWW", () => {
    const r = plugin.decode({
      label: "27",
      text: "LKPR,EDDM,EDDC,LOWW",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #13: METAR LKPR SA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG EDDM S…", () => {
    const r = plugin.decode({
      label: "27",
      text: "METAR\r\nLKPR\r\nSA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG\r\nEDDM\r\nSA 230520 AUTO 00000KT CAVOK 02/M01 Q1026 NOSIG\r\nEDDC\r\nSA 230520 AUTO 26008KT 220V280 CAVOK 07/M00 Q1023 NOSIG\r\nLOWW\r\nSA 230520 30012KT CAVOK 09/00 Q1022 NOS",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #14: METAR LKPR SA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG EDDM S…", () => {
    const r = plugin.decode({
      label: "27",
      text: "METAR\r\nLKPR\r\nSA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG\r\nEDDM\r\nSA 230520 AUTO 00000KT CAVOK 02/M01 Q1026 NOSIG\r\nEDDC\r\nSA 230520 AUTO 26008KT 220V280 CAVOK 07/M00 Q1023 NOSIG\r\nLOWW\r\nSA 230520 30012KT CAVOK 09/00 Q1022 NOS",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #15: METAR LKPR SA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG EDDM S…", () => {
    const r = plugin.decode({
      label: "27",
      text: "METAR\r\nLKPR\r\nSA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG\r\nEDDM\r\nSA 230520 AUTO 00000KT CAVOK 02/M01 Q1026 NOSIG\r\nEDDC\r\nSA 230520 AUTO 26008KT 220V280 CAVOK 07/M00 Q1023 NOSIG\r\nLOWW\r\nSA 230520 30012KT CAVOK 09/00 Q1022 NOS",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #16: METAR LKPR SA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG EDDM S…", () => {
    const r = plugin.decode({
      label: "27",
      text: "METAR\r\nLKPR\r\nSA 230500 27009KT CAVOK 05/M01 Q1023 NOSIG\r\nEDDM\r\nSA 230520 AUTO 00000KT CAVOK 02/M01 Q1026 NOSIG\r\nEDDC\r\nSA 230520 AUTO 26008KT 220V280 CAVOK 07/M00 Q1023 NOSIG\r\nLOWW\r\nSA 230520 30012KT CAVOK 09/00 Q1022 NOSIG\r\n",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #17: LIRP,ELLX,LSZH,LIML, N 50.643,E 5.002,17069,SN3175", () => {
    const r = plugin.decode({
      label: "27",
      text: "LIRP,ELLX,LSZH,LIML,\r\nN 50.643,E  5.002,17069,SN3175",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #18: LIRP,ELLX,LSZH,LIML, N 50.643,E 5.002,17069,SN3175", () => {
    const r = plugin.decode({
      label: "27",
      text: "LIRP,ELLX,LSZH,LIML,\r\nN 50.643,E  5.002,17069,SN3175",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #19: DA KPHX,DS KLAX,LA MMMM.MMM,LT MMMM.MMM,UT 055437,FB 59,AT 1…", () => {
    const r = plugin.decode({
      label: "27",
      text: "DA KPHX,DS KLAX,LA MMMM.MMM,LT MMMM.MMM,UT 055437,FB 59,AT 152,AS 1635,WD -----,WS ----",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #20: DA KPHX,DS KLAX,LA MMMM.MMM,LT MMMM.MMM,UT 055437,FB 59,AT 1…", () => {
    const r = plugin.decode({
      label: "27",
      text: "DA KPHX,DS KLAX,LA MMMM.MMM,LT MMMM.MMM,UT 055437,FB 59,AT 152,AS 1635,WD -----,WS ----",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #21: DA KPHX,DS KLAX,LA MMMM.MMM,LT MMMM.MMM,UT 055437,FB 59,AT 1…", () => {
    const r = plugin.decode({
      label: "27",
      text: "DA KPHX,DS KLAX,LA MMMM.MMM,LT MMMM.MMM,UT 055437,FB 59,AT 152,AS 1635,WD -----,WS ----",
    });
    expect(r.decoded).toBe(false);
    expect(r.decoder.decodeLevel).toBe("none");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([]);
  });

  test("decodes #22: POS01SDM6463 /23230554ULLIUSCC FUEL 74 TEMP- 41 WDIR 1091 WS…", () => {
    const r = plugin.decode({
      label: "27",
      text: "POS01SDM6463   /23230554ULLIUSCC    \r\nFUEL   74\r\nTEMP- 41\r\nWDIR 1091\r\nWSPD 127\r\nLATN 59.876\r\nLONE 31.431\r\nETA0821\r\nTUR \r\nALT  27627\r\n\r\n\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Position Report (POS01)"
      },
      {
        "type": "callsign",
        "code": "CALLSIGN",
        "label": "Callsign",
        "value": "SDM6463"
      },
      {
        "type": "icao",
        "code": "ORG",
        "label": "Origin",
        "value": "ULLI"
      },
      {
        "type": "icao",
        "code": "DST",
        "label": "Destination",
        "value": "USCC"
      },
      {
        "type": "time",
        "code": "TIMESTAMP",
        "label": "Message Timestamp",
        "value": "23:05:54"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "59.876 N, 31.431 E"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "27627 feet"
      },
      {
        "type": "fuel",
        "code": "FUEL",
        "label": "FUEL",
        "value": "74"
      },
      {
        "type": "temp",
        "code": "TEMP",
        "label": "TEMP",
        "value": "- 41"
      },
      {
        "type": "wdir",
        "code": "WDIR",
        "label": "WDIR",
        "value": "1091"
      },
      {
        "type": "wspd",
        "code": "WSPD",
        "label": "WSPD",
        "value": "127"
      },
      {
        "type": "eta",
        "code": "ETA",
        "label": "ETA",
        "value": "0821"
      },
      {
        "type": "alt",
        "code": "ALT",
        "label": "ALT",
        "value": "27627"
      }
    ]);
  });

  test("decodes #23: POS01SDM6463 /23230554ULLIUSCC FUEL 74 TEMP- 41 WDIR 1091 WS…", () => {
    const r = plugin.decode({
      label: "27",
      text: "POS01SDM6463   /23230554ULLIUSCC    \r\nFUEL   74\r\nTEMP- 41\r\nWDIR 1091\r\nWSPD 127\r\nLATN 59.876\r\nLONE 31.431\r\nETA0821\r\nTUR \r\nALT  27627\r\n\r\n\r\n",
    });
    expect(r.decoded).toBe(true);
    expect(r.decoder.decodeLevel).toBe("partial");
    expect(r.decoder.name).toBe("label-27-pos");
    expect(r.formatted.description).toBe("Position Report (POS01)");
    expect(r.formatted.items).toEqual([
      {
        "type": "message_type",
        "code": "MSGTYP",
        "label": "Message Type",
        "value": "Position Report (POS01)"
      },
      {
        "type": "callsign",
        "code": "CALLSIGN",
        "label": "Callsign",
        "value": "SDM6463"
      },
      {
        "type": "icao",
        "code": "ORG",
        "label": "Origin",
        "value": "ULLI"
      },
      {
        "type": "icao",
        "code": "DST",
        "label": "Destination",
        "value": "USCC"
      },
      {
        "type": "time",
        "code": "TIMESTAMP",
        "label": "Message Timestamp",
        "value": "23:05:54"
      },
      {
        "type": "aircraft_position",
        "code": "POS",
        "label": "Aircraft Position",
        "value": "59.876 N, 31.431 E"
      },
      {
        "type": "altitude",
        "code": "ALT",
        "label": "Altitude",
        "value": "27627 feet"
      },
      {
        "type": "fuel",
        "code": "FUEL",
        "label": "FUEL",
        "value": "74"
      },
      {
        "type": "temp",
        "code": "TEMP",
        "label": "TEMP",
        "value": "- 41"
      },
      {
        "type": "wdir",
        "code": "WDIR",
        "label": "WDIR",
        "value": "1091"
      },
      {
        "type": "wspd",
        "code": "WSPD",
        "label": "WSPD",
        "value": "127"
      },
      {
        "type": "eta",
        "code": "ETA",
        "label": "ETA",
        "value": "0821"
      },
      {
        "type": "alt",
        "code": "ALT",
        "label": "ALT",
        "value": "27627"
      }
    ]);
  });

});
