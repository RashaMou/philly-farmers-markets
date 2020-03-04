import React, { useContext, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import LocationContext from '../contexts/LocationContext';

const MapContainer = props => {
  const { coordinates, setMarkets, markets } = useContext(LocationContext);

  useEffect(() => {
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
        // an array of market objects. Each object has two properties: attributes, and geometry, both of which are also objects
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const MarketMap = withGoogleMap(props => (
    <GoogleMap defaultZoom={14} defaultCenter={coordinates}>
      {markets.map(market => {
        return (
          <Marker
            key={market.attributes.OBJECTID}
            position={{ lat: market.geometry.y, lng: market.geometry.x }}
          />
        );
      })}
    </GoogleMap>
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
