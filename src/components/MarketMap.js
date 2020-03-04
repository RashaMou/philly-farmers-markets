import React, { useContext } from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import LocationContext from '../contexts/LocationContext';

const MapContainer = props => {
  const { coordinates } = useContext(LocationContext);

  const MarketMap = withGoogleMap(props => (
    <GoogleMap defaultZoom={13} defaultCenter={coordinates}></GoogleMap>
  ));

  return (
    <div>
      <MarketMap
        className='map'
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapContainer;
