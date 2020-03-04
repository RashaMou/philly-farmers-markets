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
          <div>
            <h2>{selectedMarket.attributes.NAME}</h2>
            <p>{selectedMarket.attributes.ADDRESS}</p>
            <p>{selectedMarket.attributes.ZIP}</p>
            <h3>Neighborhood:</h3>
            <p>{selectedMarket.attributes.NEIGHBORHOOD}</p>
            <h3>Months Open:</h3>
            <p>{selectedMarket.attributes.MONTHS}</p>
            <h3>Day and time:</h3>
            <p>{selectedMarket.attributes.DAY}</p>
            <p>{selectedMarket.attributes.TIME}</p>
            {selectedMarket.attributes.ACCEPT_FMNP === 'Y' ||
            selectedMarket.attributes.ACCEPT_PHILLY_FOOD_BUCKS_ ||
            selectedMarket.attributes.ACCEPT_SNAP_ACCESS === 'Y' ? (
              <h3>Food Assistance:</h3>
            ) : null}
            {selectedMarket.attributes.ACCEPT_FMNP === 'Y' && (
              <p>Farmers Market Nutrition Program</p>
            )}
            {selectedMarket.attributes.ACCEPT_PHILLY_FOOD_BUCKS_ === 'Y' && (
              <p>Philly Food Bucks</p>
            )}
            {selectedMarket.attributes.ACCEPT_SNAP_ACCESS === 'Y' && (
              <p>SNAP</p>
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default withGoogleMap(MarketsMap);
