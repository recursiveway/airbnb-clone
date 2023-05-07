import Map from 'react-map-gl';
import { useState } from 'react';
const MapAir = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: 37.7577,
    latitude: -122.4376,
    zoom: 11
  })
  const onCha = (evt) => {
    setViewState(evt)
  }
  return <Map
    mapStyle="mapbox://styles/ashutosh221101/clhbw3p8u013i01qy00iobuzd"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
  // onViewportChange={(nextViewport) => { setViewport(nextViewport) }}

  />;
};

export default MapAir;
