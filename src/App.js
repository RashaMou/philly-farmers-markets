import React from 'react';
import Sidebar from './components/Sidebar';
import MapContainer from './components/MarketMap';
import axios from 'axios';
import qs from 'qs';
import SearchInput from './components/SearchInput';

//API KEY:  AIzaSyD3QmpAqOGjtUvcuLn0aW8iXYK0oHuEMHk

function App() {
  const click = () => {
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
        console.log('res', res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <header className='header'>
        <h1>Farmer's Markets in Philly</h1>
      </header>
      <div>
        <Sidebar />
        <SearchInput />
        <MapContainer click={click} />
      </div>
    </div>
  );
}

export default App;
