import { MessageDecoder } from '../MessageDecoder';
import { Label_10_INI } from './Label_10_INI';

describe('Label_10_INI', () => {
  let plugin: Label_10_INI;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_10_INI(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-10-ini");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["10"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "10", text: '' });
    expect(decodeResult.decoder.name).toBe("label-10-ini");
  });

  test("decodes #1: POS222246, N 5786,W15332,---,294,19136, 67,32000, 881,-232,-…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "POS222246, N 5786,W15332,---,294,19136,  67,32000, 881,-232,-521,7",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #2: :PRI11NO PARTICIPATING ATIS AIRPORT IN REQUEST", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `:PRI11NO PARTICIPATING ATIS
	AIRPORT IN REQUEST`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #3: /N35.257/W077.443/10/0.74/224/430/KPBI/0016/0051/00015/ELLDE…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N35.257/W077.443/10/0.74/224/430/KPBI/0016/0051/00015/ELLDE/YURCK/2248/ELMSZ/2251/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #4: /N35.257/W077.443/10/0.74/224/430/KPBI/0016/0051/00015/ELLDE…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N35.257/W077.443/10/0.74/224/430/KPBI/0016/0051/00015/ELLDE/YURCK/2248/ELMSZ/2251/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #5: LDR01,189,D,SWA-2600-019,0,N 30.602,W 97.277,19837, 13.2,KAU…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.602,W 97.277,19837, 13.2,KAUS,KDAL,KDAL,13L/,13R/,/,0,0,,,,,,,0,0,0,00,,110.8,11.0,121.8,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #6: LDR01,189,D,SWA-2600-019,0,N 30.602,W 97.277,19837, 13.2,KAU…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.602,W 97.277,19837, 13.2,KAUS,KDAL,KDAL,13L/,13R/,/,0,0,,,,,,,0,0,0,00,,110.8,11.0,121.8,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #7: LDR01,189,D,SWA-2600-019,0,N 30.602,W 97.277,19837, 13.2,KAU…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.602,W 97.277,19837, 13.2,KAUS,KDAL,KDAL,13L/,13R/,/,0,0,,,,,,,0,0,0,00,,110.8,11.0,121.8,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #8: 222210 KBOS KMSP6 109822450242222922212224222922290541720178…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `222210 KBOS KMSP6
10982245024222292221222422292229054172017890`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #9: /N40.592/W087.418/10/0.70/175/203/KAPF/0049/0079/00037/DREGS…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N40.592/W087.418/10/0.70/175/203/KAPF/0049/0079/00037/DREGS/DONVE/2252/BWG  /2315/KMDW/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #10: LDR01,189,D,SWA-2600-019,0,N 32.434,W 81.846,39994, 7.7,KBUF…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 32.434,W 81.846,39994,  7.7,KBUF,KTPA,KTPA,19L/,19R/,/,0,0,,,,,,,0,0,0,00,,110.3,05.5,115.8,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #11: 64 0444 7780N N7700.0 W08000.0 097M 270 0412 SINVU N7651.5 W…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `   64  0444
	7780N   N7700.0 W08000.0 097M  270  0412
	SINVU   N7651.5 W07536.4 139M   61  0404
	7760N   N7700.0 W06000.0 120M  213  0380
	7640N   N7600.0 W04000.0 135M  287  0349
	TOC     N7545.2 W03838.0 156M   25  0345
	(EA6)   N7101.0 W02212.9 152M  400  0303
	7020N   N7000.0 W02000.0 157M   76  0295
	TOC     N6947.2 W01953.7 187M   13  0293
	6518N   N6500.0 W01800.0 182M  292  0261
	(***)   N6100.0 W01620.9 181M  244  0234
	6016N   N6000.0 W01600.0 178M   62  0227
	TOC     N5945.3 W01554.7 180M   15  0225
	SUNOT   N5700.0 W01500.0 177M  169  0206
	KESIX   N5657.0 W01400.0 101M   33  0202
	(***)   N5421.4 W01205.4 162M  169  0183
	LODLA   N5156.2 W01031.7 162M  156  0166
	(***)   N5100.0 W00947.0 157M   63  0159
	TULTA   N4834.6 W00800.0 156M  162  0141
	KORUL   N4450.1 W00655.2 170M  229  0116
	TOD     N4335.4 W00601.8 153M   84  0107
	VES     N4333.4 W00600.4 153M    3  0107
	TOD     N4219.1 W00546.7 172M   75  0099
	OMESI   N4216.6 W00546.3 173M    3  0099
	VETAN   N4157.7 W00543.0 173M   19  0097
	TOD     N4145.8 W00540.9 173M   12  0095
	ZMR     N4131.8 W00538.4 172M   15  0095
	TOD     N4101.6 W00501.7 138M   41  0090
	AVILA   N4037.5 W00433.0 138M   33  0089
	DAQSE   N4020.6 W00408.8 132M   26  0088
	URRIF   N4014.5 W00344.8 108M   20  0087
	YAYHO   N4019.0 W00322.6 108M   26  0085
	LEMD    N4028.3 W00333.7 321M   14  0084
	
	END OF FLIGHT PLAN
	** END OF PART 02 **`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #12: 64 0444 7780N N7700.0 W08000.0 097M 270 0412 SINVU N7651.5 W…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `   64  0444
	7780N   N7700.0 W08000.0 097M  270  0412
	SINVU   N7651.5 W07536.4 139M   61  0404
	7760N   N7700.0 W06000.0 120M  213  0380
	7640N   N7600.0 W04000.0 135M  287  0349
	TOC     N7545.2 W03838.0 156M   25  0345
	(EA6)   N7101.0 W02212.9 152M  400  0303
	7020N   N7000.0 W02000.0 157M   76  0295
	TOC     N6947.2 W01953.7 187M   13  0293
	6518N   N6500.0 W01800.0 182M  292  0261
	(***)   N6100.0 W01620.9 181M  244  0234
	6016N   N6000.0 W01600.0 178M   62  0227
	TOC     N5945.3 W01554.7 180M   15  0225
	SUNOT   N5700.0 W01500.0 177M  169  0206
	KESIX   N5657.0 W01400.0 101M   33  0202
	(***)   N5421.4 W01205.4 162M  169  0183
	LODLA   N5156.2 W01031.7 162M  156  0166
	(***)   N5100.0 W00947.0 157M   63  0159
	TULTA   N4834.6 W00800.0 156M  162  0141
	KORUL   N4450.1 W00655.2 170M  229  0116
	TOD     N4335.4 W00601.8 153M   84  0107
	VES     N4333.4 W00600.4 153M    3  0107
	TOD     N4219.1 W00546.7 172M   75  0099
	OMESI   N4216.6 W00546.3 173M    3  0099
	VETAN   N4157.7 W00543.0 173M   19  0097
	TOD     N4145.8 W00540.9 173M   12  0095
	ZMR     N4131.8 W00538.4 172M   15  0095
	TOD     N4101.6 W00501.7 138M   41  0090
	AVILA   N4037.5 W00433.0 138M   33  0089
	DAQSE   N4020.6 W00408.8 132M   26  0088
	URRIF   N4014.5 W00344.8 108M   20  0087
	YAYHO   N4019.0 W00322.6 108M   26  0085
	LEMD    N4028.3 W00333.7 321M   14  0084
	
	END OF FLIGHT PLAN
	** END OF PART 02 **`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #13: 0110 ---- ----6 0000----0118------------01350136", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `  0110 ---- ----6
0000----0118------------01350136            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #14: LDR01,189,D,SWA-2600-019,0,N 27.766,W 81.466,20130, 8.6,KMCO…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 27.766,W 81.466,20130,  8.6,KMCO,KFLL,KFLL,10L/,10R/,/,0,0,,,,,,,0,0,0,00,,116.2,06.9,123.1,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #15: MET01EGKK", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "MET01EGKK",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: :MET11UTAA/ASB ASHGABAT SA 230100 11006KT 4500 BR BKN033 BKN…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `:MET11UTAA/ASB  ASHGABAT
	  SA  230100 11006KT 4500 BR BKN033 BKN100 13/13 Q1013 R88/CLRD70
	             TEMPO 1000 BR OVC005=
	  FC  WX NOT AVAILABLE
	  CF  WX NOT AVAILABLE
	  FT  222249 2300/2324 12014KT 3000 BR BKN010 SCT020CB
	             TEMPO 2300/2305 04012KT 1000 BR BKN005
	             PROB30 TEMPO 2300/2305 0300 FG VV003
	             BECMG 2305/2307 12016KT 6000 SCT020 SCT030CB
	             BECMG 2306/2318 24014KT 6000 SCT030=`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987, 9.1,KBWI…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987,  9.1,KBWI,KPVD,KPVD,16/,/,/,0,1,,,,,,,0,0,0,00,,113.3,07.1,120.4,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987, 9.1,KBWI…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987,  9.1,KBWI,KPVD,KPVD,16/,/,/,0,1,,,,,,,0,0,0,00,,113.3,07.1,120.4,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #19: LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987, 9.1,KBWI…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987,  9.1,KBWI,KPVD,KPVD,16/,/,/,0,1,,,,,,,0,0,0,00,,113.3,07.1,120.4,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #20: LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987, 9.1,KBWI…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 40.150,W 74.598,30987,  9.1,KBWI,KPVD,KPVD,16/,/,/,0,1,,,,,,,0,0,0,00,,113.3,07.1,120.4,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #21: O DEST1 19131 GW AT SUNOT 194056 DEST2 ALTN EGCC -----------…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `O DEST1 19131
	GW AT SUNOT   194056
	DEST2 ALTN      EGCC
	----------------------------------------
	POSN        LAT     LONG  TRK DIS    FOB
	RJAA    N3545.9 E14023.1            1005
	ARIES   N3556.1 E14015.1 336M   14  0992
	CHUMS   N3542.6 E14048.1 338M   46  0973
	CUPID   N3529.5 E14106.0 140M   20  0968
	GULBO   N3526.5 E14145.2 103M   33  0960
	** END OF PART 01 **`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #22: O DEST1 19131 GW AT SUNOT 194056 DEST2 ALTN EGCC -----------…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `O DEST1 19131
	GW AT SUNOT   194056
	DEST2 ALTN      EGCC
	----------------------------------------
	POSN        LAT     LONG  TRK DIS    FOB
	RJAA    N3545.9 E14023.1            1005
	ARIES   N3556.1 E14015.1 336M   14  0992
	CHUMS   N3542.6 E14048.1 338M   46  0973
	CUPID   N3529.5 E14106.0 140M   20  0968
	GULBO   N3526.5 E14145.2 103M   33  0960
	** END OF PART 01 **`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #23: LDR01,189,D,SWA-2600-019,0,N 33.267,W111.647,32005, 14.2,KTP…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 33.267,W111.647,32005, 14.2,KTPA,KSAN,KSAN,27/,/,/,0,0,,,,,,,0,0,0,00,,132.7,11.2,143.9,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #24: ETA230220,RCKH,VMMC,92", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "ETA230220,RCKH,VMMC,92",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #25: /N38.002/W087.223/10/0.83/171/330/KJWN/0159/0045/00025/RYYMN…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N38.002/W087.223/10/0.83/171/330/KJWN/0159/0045/00025/RYYMN/BNA  /0154/KJWN /0155/KMDW/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #26: 225236/ACKMSG/3737", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "225236/ACKMSG/3737",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #27: 220110 KORD KBOS6 264601370191011801120115----0115", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KORD KBOS6
264601370191011801120115----0115            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #28: 220110 KORD KBOS6 264601370191011801120115----0115", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KORD KBOS6
264601370191011801120115----0115            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #29: 220110 KMSP KPHL6 27030136017001240120005801230123", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KMSP KPHL6
27030136017001240120005801230123            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #30: 220110 KMSP KPHL6 27030136017001240120005801230123", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KMSP KPHL6
27030136017001240120005801230123            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #31: 220110 KMSP KPHL6 27030136017001240120005801230123", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KMSP KPHL6
27030136017001240120005801230123            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: 220110 KMSP KPHL6 27030136017001240120005801230123", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KMSP KPHL6
27030136017001240120005801230123            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 220110 KMSP KPHL6 27030136017001240120005801230123", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `220110 KMSP KPHL6
27030136017001240120005801230123            `,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: M24ACA0992POS230137, N 5299,E16741,---,288,26671, 17,33997, …", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "M24ACA0992POS230137, N 5299,E16741,---,288,26671,  17,33997, 636,-209,-512,7",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998, 7.5,KAUS…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998,  7.5,KAUS,KDAL,KDAL,13R/,13L/,/,0,0,,,,,,,0,0,0,00,,112.6,06.0,118.6,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #36: LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998, 7.5,KAUS…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998,  7.5,KAUS,KDAL,KDAL,13R/,13L/,/,0,0,,,,,,,0,0,0,00,,112.6,06.0,118.6,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #37: LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998, 7.5,KAUS…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998,  7.5,KAUS,KDAL,KDAL,13R/,13L/,/,0,0,,,,,,,0,0,0,00,,112.6,06.0,118.6,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #38: LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998, 7.5,KAUS…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 30.887,W 97.098,22998,  7.5,KAUS,KDAL,KDAL,13R/,13L/,/,0,0,,,,,,,0,0,0,00,,112.6,06.0,118.6,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #39: 4PAD11/ RLS AUTOM. CON PAYLOAD AJUSTADA A H-30 CALCULADA. CO…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `4PAD11/
	RLS AUTOM. CON PAYLOAD AJUSTADA A H-30 CALCULADA. COMPROBAR RUTA, NIVELES y COMBUSTIBLE.`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #40: 4PAD11/ RLS AUTOM. CON PAYLOAD AJUSTADA A H-30 CALCULADA. CO…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `4PAD11/
	RLS AUTOM. CON PAYLOAD AJUSTADA A H-30 CALCULADA. COMPROBAR RUTA, NIVELES y COMBUSTIBLE.`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #41: /N35.087/W089.517/10/0.35/357/055/KMEM/0147/0036/00009/HEXIN…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N35.087/W089.517/10/0.35/357/055/KMEM/0147/0036/00009/HEXIN/HEXIN/0138/REISE/0136/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #42: LDR01,189,D,SWA-2600-019,0,N 32.923,W 80.906,38006, 8.6,KBWI…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "LDR01,189,D,SWA-2600-019,0,N 32.923,W 80.906,38006,  8.6,KBWI,KMCO,KMCO,17L/,17R/,18R/,0,0,,,,,,,0,0,0,00,,130.8,06.8,137.6,,,",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #43: /N40.523/W077.330/10/0.71/353/250/KHTF/0157/0068/00026/KHTF …", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N40.523/W077.330/10/0.71/353/250/KHTF/0157/0068/00026/KHTF /FEKBO/0137/DOBZY/0140/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #44: 4PAD11/ ES NECESARIO COMPROBAR SLOT POR ACARS, CUANDO APAREZ…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `4PAD11/
	ES NECESARIO COMPROBAR SLOT POR ACARS, CUANDO APAREZCA CUALQUIER MINUTO POR
	CLAVES SESENTAS, CLAVE 00, O FUERA DE COTA 15 POR CUALQUIER OTRA CLAVE,
	ES OBLIGATORIO QUE EL COMANDANTE ENVIE EL ACARS DE RETRASO CON LA EXPLICACION.
	MUCHAS GRACIAS Y BUEN VUELO.`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #45: 4PAD11/ ES NECESARIO COMPROBAR SLOT POR ACARS, CUANDO APAREZ…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `4PAD11/
	ES NECESARIO COMPROBAR SLOT POR ACARS, CUANDO APAREZCA CUALQUIER MINUTO POR
	CLAVES SESENTAS, CLAVE 00, O FUERA DE COTA 15 POR CUALQUIER OTRA CLAVE,
	ES OBLIGATORIO QUE EL COMANDANTE ENVIE EL ACARS DE RETRASO CON LA EXPLICACION.
	MUCHAS GRACIAS Y BUEN VUELO.`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #46: 4PAD11/ ES NECESARIO COMPROBAR SLOT POR ACARS, CUANDO APAREZ…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: `4PAD11/
	ES NECESARIO COMPROBAR SLOT POR ACARS, CUANDO APAREZCA CUALQUIER MINUTO POR
	CLAVES SESENTAS, CLAVE 00, O FUERA DE COTA 15 POR CUALQUIER OTRA CLAVE,
	ES OBLIGATORIO QUE EL COMANDANTE ENVIE EL ACARS DE RETRASO CON LA EXPLICACION.
	MUCHAS GRACIAS Y BUEN VUELO.`,
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #47: /N40.590/W077.580/10/0.63/358/193/KELZ/0151/0045/00019/SCAAM…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N40.590/W077.580/10/0.63/358/193/KELZ/0151/0045/00019/SCAAM/KELZ /0146/PAYIV/0136/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #48: /N33.173/W079.377/10/0.75/220/430/KPBI/0243/0042/00015/CAKET…", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "/N33.173/W079.377/10/0.75/220/430/KPBI/0243/0042/00015/CAKET/JEVED/0148/ROKKT/0141/",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #49: 231330/ACKMSG/3532", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "231330/ACKMSG/3532",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #50: 231330/ACKMSG/3316", () => {
    const decodeResult = plugin.decode({
      label: "10",
      text: "231330/ACKMSG/3316",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-10-ini");
    expect(decodeResult.formatted.description).toBe("Flight Initialisation (INI)");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

});
