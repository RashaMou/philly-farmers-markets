import React, { useState, useEffect } from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

const MapContainer = props => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    currentLocation();
  }, []);

  useEffect(() => {
    console.log('location', props.location);
    setLocation(props.location);
  }, [props.location]);

  let currentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: parseFloat(position.coords.latitude),
        lng: parseFloat(position.coords.longitude)
      };
      setLocation(pos);
    });
  };

  const MarketMap = withGoogleMap(props => (
    <GoogleMap defaultZoom={13} defaultCenter={location}></GoogleMap>
  ));

  return (
    <div>
      <MarketMap
        className='map'
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapContainer;
