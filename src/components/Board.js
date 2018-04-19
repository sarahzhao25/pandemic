import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { CityLines, PlayerHand, GameHeader, CityMarkers, PlayerMarkers } from './index';

const darkTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';

const Board = () => {
  const center = [0, 0];
  const zoomLevel = 2.3;
  const maxBounds = [[70, -100], [-60, 120]];
  return (
    <Map
      center={center}
      zoom={zoomLevel}
      minZoom={zoomLevel}
      maxZoom={zoomLevel}
      maxBounds={maxBounds}
      className="map"
    >
      <GameHeader />
      <PlayerHand />
      <TileLayer url={darkTiles} />
      <PlayerMarkers />
      <CityMarkers />
      <CityLines />
    </Map>
  );
};

export default Board;
