import React, { useState } from 'react';
import LocationContext from './LocationContext';

const GlobalState = props => {
  const [selectedMarket, setSelectedMarket] = useState(null);

  const [masterMarketsArray, setMasterMarketsArray] = useState([]);
  const [filteredMarkets, setFilteredMarkets] = useState([]);

  return (
    <LocationContext.Provider
      value={{
        filteredMarkets,
        setFilteredMarkets,
        masterMarketsArray,
        setMasterMarketsArray,
        selectedMarket,
        setSelectedMarket
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
