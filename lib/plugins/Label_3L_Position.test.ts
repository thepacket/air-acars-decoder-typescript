import { MessageDecoder } from '../MessageDecoder';
import { Label_3L_Position } from './Label_3L_Position';

describe('Label_3L_Position', () => {
  let plugin: Label_3L_Position;

  beforeEach(() => {
    const decoder = new MessageDecoder();
    plugin = new Label_3L_Position(decoder);
  });

  test('exposes name and qualifiers', () => {
    expect(plugin.decode).toBeDefined();
    expect(plugin.name).toBe("label-3l-position");
    expect(plugin.qualifiers).toBeDefined();
    const qualifiers = plugin.qualifiers();
    expect(qualifiers.labels).toEqual(["3L"]);
  });

  test('reports own plugin name on empty text', () => {
    const decodeResult = plugin.decode({ label: "3L", text: '' });
    expect(decodeResult.decoder.name).toBe("label-3l-position");
  });

  test("decodes #1: S 38.987/E174.401 /UTC 2228", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 38.987/E174.401 /UTC 2228",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.987 S, 174.401 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "38.987° South (-38.987)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "174.401° East (174.401)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:28 UTC",
    });
  });

  test("decodes #2: S 38.987/E174.401 /UTC 2228", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 38.987/E174.401 /UTC 2228",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.987 S, 174.401 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "38.987° South (-38.987)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "174.401° East (174.401)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:28 UTC",
    });
  });

  test("decodes #3: S 38.987/E174.401 /UTC 2228", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 38.987/E174.401 /UTC 2228",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.987 S, 174.401 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "38.987° South (-38.987)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "174.401° East (174.401)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:28 UTC",
    });
  });

  test("decodes #4: S 28.646/E153.595 /UTC 2227", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 28.646/E153.595 /UTC 2227",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "28.646 S, 153.595 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "28.646° South (-28.646)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.595° East (153.595)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:27 UTC",
    });
  });

  test("decodes #5: S 38.802/E148.971 /UTC 2226", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 38.802/E148.971 /UTC 2226",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.802 S, 148.971 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "38.802° South (-38.802)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "148.971° East (148.971)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:26 UTC",
    });
  });

  test("decodes #6: S 35.071/E148.902 /UTC 2225", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 35.071/E148.902 /UTC 2225",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "35.071 S, 148.902 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "35.071° South (-35.071)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "148.902° East (148.902)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:25 UTC",
    });
  });

  test("decodes #7: S 35.071/E148.902 /UTC 2225", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 35.071/E148.902 /UTC 2225",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "35.071 S, 148.902 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "35.071° South (-35.071)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "148.902° East (148.902)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:25 UTC",
    });
  });

  test("decodes #8: S 35.071/E148.902 /UTC 2225", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 35.071/E148.902 /UTC 2225",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "35.071 S, 148.902 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "35.071° South (-35.071)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "148.902° East (148.902)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:25 UTC",
    });
  });

  test("decodes #9: S 40.317/E174.150 /UTC 2226", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 40.317/E174.150 /UTC 2226",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "40.317 S, 174.150 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "40.317° South (-40.317)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "174.150° East (174.15)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:26 UTC",
    });
  });

  test("decodes #10: S 36.751/E143.901 /UTC 2224", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 36.751/E143.901 /UTC 2224",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "36.751 S, 143.901 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "36.751° South (-36.751)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "143.901° East (143.901)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "22:24 UTC",
    });
  });

  test("decodes #11: S 27.609/E153.430 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.609/E153.430 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.609 S, 153.430 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.609° South (-27.609)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.430° East (153.43)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #12: S 27.609/E153.430 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.609/E153.430 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.609 S, 153.430 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.609° South (-27.609)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.430° East (153.43)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #13: S 27.609/E153.430 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.609/E153.430 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.609 S, 153.430 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.609° South (-27.609)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.430° East (153.43)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #14: S 27.609/E153.430 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.609/E153.430 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.609 S, 153.430 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.609° South (-27.609)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.430° East (153.43)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #15: 6635C4C3AR633MFree Text DABYJ LH 507,0026,75VTM0VZVUD**T4TW.…", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "6635C4C3AR633MFree Text DABYJ LH 507,0026,75VTM0VZVUD**T4TW.MDP+WGO-2IGNT IHR KQKN7WY  P:),:7CMU07YC0VRQENRE5AVN(AP4TPE48BDE3B+O+L310 KNAPPK7(ELIXQ-(MYWCRMAW(P2.97PA7U0...6*AC",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #16: 6635C4C3AR633MFree Text DABYJ LH 507,0026,75VTM0VZVUD**T4TW.…", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "6635C4C3AR633MFree Text DABYJ LH 507,0026,75VTM0VZVUD**T4TW.MDP+WGO-2IGNT IHR KQKN7WY  P:),:7CMU07YC0VRQENRE5AVN(AP4TPE48BDE3B+O+L310 KNAPPK7(ELIXQ-(MYWCRMAW(P2.97PA7U0...6*AC",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #17: 6635C4C3AR633MFree Text DABYJ LH 507,0026,75VTM0VZVUD**T4TW.…", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "6635C4C3AR633MFree Text DABYJ LH 507,0026,75VTM0VZVUD**T4TW.MDP+WGO-2IGNT IHR KQKN7WY  P:),:7CMU07YC0VRQENRE5AVN(AP4TPE48BDE3B+O+L310 KNAPPK7(ELIXQ-(MYWCRMAW(P2.97PA7U0...6*AC",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #18: S 31.100/E151.581 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 31.100/E151.581 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "31.100 S, 151.581 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "31.100° South (-31.1)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.581° East (151.581)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #19: S 27.470/E153.159 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.470/E153.159 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.470 S, 153.159 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.470° South (-27.47)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.159° East (153.159)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #20: S 27.470/E153.159 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.470/E153.159 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.470 S, 153.159 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.470° South (-27.47)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.159° East (153.159)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #21: S 27.470/E153.159 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.470/E153.159 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.470 S, 153.159 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.470° South (-27.47)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.159° East (153.159)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #22: S 27.470/E153.159 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 27.470/E153.159 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "27.470 S, 153.159 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "27.470° South (-27.47)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "153.159° East (153.159)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #23: S 31.100/E151.581 /UTC 0137", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 31.100/E151.581 /UTC 0137",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "31.100 S, 151.581 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "31.100° South (-31.1)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.581° East (151.581)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:37 UTC",
    });
  });

  test("decodes #24: S 31.628/E116.155 /UTC 0136", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 31.628/E116.155 /UTC 0136",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "31.628 S, 116.155 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "31.628° South (-31.628)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "116.155° East (116.155)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:36 UTC",
    });
  });

  test("decodes #25: S 34.660/E150.724 /UTC 0135", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 34.660/E150.724 /UTC 0135",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "34.660 S, 150.724 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "34.660° South (-34.66)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.724° East (150.724)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:35 UTC",
    });
  });

  test("decodes #26: S 34.660/E150.724 /UTC 0135", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 34.660/E150.724 /UTC 0135",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "34.660 S, 150.724 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "34.660° South (-34.66)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.724° East (150.724)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:35 UTC",
    });
  });

  test("decodes #27: S 34.660/E150.724 /UTC 0135", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 34.660/E150.724 /UTC 0135",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "34.660 S, 150.724 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "34.660° South (-34.66)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.724° East (150.724)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:35 UTC",
    });
  });

  test("decodes #28: S 34.660/E150.724 /UTC 0135", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 34.660/E150.724 /UTC 0135",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "34.660 S, 150.724 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "34.660° South (-34.66)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.724° East (150.724)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:35 UTC",
    });
  });

  test("decodes #29: S 34.270/E147.241 /UTC 0135", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 34.270/E147.241 /UTC 0135",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "34.270 S, 147.241 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "34.270° South (-34.27)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "147.241° East (147.241)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:35 UTC",
    });
  });

  test("decodes #30: S 38.372/E146.800 /UTC 0134", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 38.372/E146.800 /UTC 0134",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "38.372 S, 146.800 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "38.372° South (-38.372)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "146.800° East (146.8)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:34 UTC",
    });
  });

  test("decodes #31: 381A7F71388/Y", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "381A7F71388/Y",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #32: 381A7F71388/Y", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "381A7F71388/Y",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #33: 38026B61457/22,193/LH719,091/LH719,090/EDDM,094/RKSI,952/EDD…", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "38026B61457/22,193/LH719,091/LH719,090/EDDM,094/RKSI,952/EDDM",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #34: 38026B61457/22,193/LH719,091/LH719,090/EDDM,094/RKSI,952/EDD…", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "38026B61457/22,193/LH719,091/LH719,090/EDDM,094/RKSI,952/EDDM",
    });
    expect(decodeResult.decoded).toBe(false);
    expect(decodeResult.decoder.decodeLevel).toBe("none");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(0);
  });

  test("decodes #35: S 39.825/E174.432 /UTC 0133", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 39.825/E174.432 /UTC 0133",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "39.825 S, 174.432 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "39.825° South (-39.825)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "174.432° East (174.432)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:33 UTC",
    });
  });

  test("decodes #36: S 33.989/E151.478 /UTC 0133", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.989/E151.478 /UTC 0133",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.989 S, 151.478 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.989° South (-33.989)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.478° East (151.478)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:33 UTC",
    });
  });

  test("decodes #37: S 33.989/E151.478 /UTC 0133", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.989/E151.478 /UTC 0133",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.989 S, 151.478 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.989° South (-33.989)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.478° East (151.478)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:33 UTC",
    });
  });

  test("decodes #38: S 37.951/E175.111 /UTC 0133", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 37.951/E175.111 /UTC 0133",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "37.951 S, 175.111 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "37.951° South (-37.951)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "175.111° East (175.111)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:33 UTC",
    });
  });

  test("decodes #39: S 37.951/E175.111 /UTC 0133", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 37.951/E175.111 /UTC 0133",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "37.951 S, 175.111 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "37.951° South (-37.951)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "175.111° East (175.111)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:33 UTC",
    });
  });

  test("decodes #40: S 37.951/E175.111 /UTC 0133", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 37.951/E175.111 /UTC 0133",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "37.951 S, 175.111 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "37.951° South (-37.951)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "175.111° East (175.111)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:33 UTC",
    });
  });

  test("decodes #41: S 20.784/E148.682 /UTC 0132", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 20.784/E148.682 /UTC 0132",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "20.784 S, 148.682 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "20.784° South (-20.784)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "148.682° East (148.682)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:32 UTC",
    });
  });

  test("decodes #42: S 33.892/E151.212 /UTC 0131", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.892/E151.212 /UTC 0131",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.892 S, 151.212 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.892° South (-33.892)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.212° East (151.212)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:31 UTC",
    });
  });

  test("decodes #43: S 33.892/E151.212 /UTC 0131", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.892/E151.212 /UTC 0131",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.892 S, 151.212 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.892° South (-33.892)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.212° East (151.212)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:31 UTC",
    });
  });

  test("decodes #44: S 33.892/E151.212 /UTC 0131", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.892/E151.212 /UTC 0131",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.892 S, 151.212 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.892° South (-33.892)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.212° East (151.212)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:31 UTC",
    });
  });

  test("decodes #45: S 33.892/E151.212 /UTC 0131", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.892/E151.212 /UTC 0131",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.892 S, 151.212 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.892° South (-33.892)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "151.212° East (151.212)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:31 UTC",
    });
  });

  test("decodes #46: S 36.803/E145.570 /UTC 0144", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 36.803/E145.570 /UTC 0144",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "36.803 S, 145.570 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "36.803° South (-36.803)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "145.570° East (145.57)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:44 UTC",
    });
  });

  test("decodes #47: S 36.803/E145.570 /UTC 0144", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 36.803/E145.570 /UTC 0144",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "36.803 S, 145.570 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "36.803° South (-36.803)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "145.570° East (145.57)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:44 UTC",
    });
  });

  test("decodes #48: S 33.916/E150.971 /UTC 0144", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.916/E150.971 /UTC 0144",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.916 S, 150.971 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.916° South (-33.916)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.971° East (150.971)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:44 UTC",
    });
  });

  test("decodes #49: S 33.916/E150.971 /UTC 0144", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.916/E150.971 /UTC 0144",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.916 S, 150.971 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.916° South (-33.916)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.971° East (150.971)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:44 UTC",
    });
  });

  test("decodes #50: S 33.916/E150.971 /UTC 0144", () => {
    const decodeResult = plugin.decode({
      label: "3L",
      text: "S 33.916/E150.971 /UTC 0144",
    });
    expect(decodeResult.decoded).toBe(true);
    expect(decodeResult.decoder.decodeLevel).toBe("full");
    expect(decodeResult.decoder.name).toBe("label-3l-position");
    expect(decodeResult.formatted.description).toBe("Position Report");
    expect(decodeResult.formatted.items).toHaveLength(6);
    expect(decodeResult.formatted.items[0]).toEqual({
      type: "message_type",
      code: "MSGTYP",
      label: "Message Type",
      value: "Position Report (Jetstar 3L — lat/lon + UTC)",
    });
    expect(decodeResult.formatted.items[1]).toEqual({
      type: "direction",
      code: "DIR",
      label: "Direction",
      value: "Downlink (aircraft → ground)",
    });
    expect(decodeResult.formatted.items[2]).toEqual({
      type: "aircraft_position",
      code: "POS",
      label: "Aircraft Position",
      value: "33.916 S, 150.971 E",
    });
    expect(decodeResult.formatted.items[3]).toEqual({
      type: "lat_decoded",
      code: "LAT",
      label: "Latitude",
      value: "33.916° South (-33.916)",
    });
    expect(decodeResult.formatted.items[4]).toEqual({
      type: "lon_decoded",
      code: "LON",
      label: "Longitude",
      value: "150.971° East (150.971)",
    });
    expect(decodeResult.formatted.items[5]).toEqual({
      type: "time",
      code: "TIME",
      label: "Time (UTC)",
      value: "01:44 UTC",
    });
  });

});
