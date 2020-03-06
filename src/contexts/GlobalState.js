import React, { useState } from 'react';
import LocationContext from './LocationContext';

const GlobalState = props => {
  const [coordinates, setCoordinates] = useState({
    lat: 39.952583,
    lng: -75.165222
  });

  const [filters, setFilters] = useState([]);

  const [selectedMarket, setSelectedMarket] = useState(null);

  const [markets, setMarkets] = useState([]);

  return (
    <LocationContext.Provider
      value={{
        setCoordinates,
        coordinates,
        markets,
        setMarkets,
        setFilters,
        filters,
        selectedMarket,
        setSelectedMarket
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
