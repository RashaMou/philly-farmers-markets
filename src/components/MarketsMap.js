import React, { useContext, useEffect, useState } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import LocationContext from '../contexts/LocationContext';

const MarketsMap = () => {
  const { getMarkets, markets } = useContext(LocationContext);
  const [selectedMarket, setSelectedMarket] = useState(null);

  useEffect(() => {
    getMarkets();
  }, []);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 39.952583, lng: -75.165222 }}
    >
      {markets.map(market => {
        return (
          <Marker
            key={market.attributes.OBJECTID}
            position={{ lat: market.geometry.y, lng: market.geometry.x }}
            onClick={() => {
              setSelectedMarket(market);
            }}
          />
        );
      })}
      {selectedMarket && (
        <InfoWindow
          position={{
            lat: selectedMarket.geometry.y,
            lng: selectedMarket.geometry.x
          }}
          onCloseClick={() => {
            setSelectedMarket(null);
          }}
        >
          <div>Market deets</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default withGoogleMap(MarketsMap);
