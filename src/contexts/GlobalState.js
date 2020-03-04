import React, { useState } from 'react';
import LocationContext from './LocationContext';
import axios from 'axios';
import qs from 'qs';

const GlobalState = props => {
  const [coordinates, setCoordinates] = useState({
    lat: 39.952583,
    lng: -75.165222
  });

  const [markets, setMarkets] = useState([]);

  const getMarkets = () => {
    axios({
      method: 'post',
      url:
        'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/Farmers_Markets/FeatureServer/0/query',
      data: qs.stringify({
        f: 'json',
        where: '1=1',
        outSr: '4326',
        outFields: '*'
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
      .then(res => {
        console.log('res', res.data.features);
        setMarkets(res.data.features);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [filters, setFilters] = useState({});

  return (
    <LocationContext.Provider
      value={{
        setCoordinates,
        coordinates,
        setMarkets,
        markets,
        getMarkets,
        setFilters
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
