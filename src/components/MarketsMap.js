import React, { useContext, useEffect, useState } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import LocationContext from '../contexts/LocationContext';
import getMarkets from '../helpers/getMarkets';

const MarketsMap = () => {
  const { markets, setMarkets, selectedMarket, setSelectedMarket } = useContext(
    LocationContext
  );

  useEffect(() => {
    getMarkets(setMarkets);
  }, []);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 39.952583, lng: -75.165222 }}
      onClick={() => setSelectedMarket(null)}
      defaultOptions={{ mapTypeControl: false }}
    >
      {markets.map((market, index) => {
        return (
          <Marker
            key={index}
            position={{ lat: market.geometry.y, lng: market.geometry.x }}
            onClick={() => {
              setSelectedMarket(market);
            }}
            icon={{
              url: require('../assets/marker3.png'),
              scaledSize: { width: 65, height: 65 }
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
