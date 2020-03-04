import React from 'react';
import Sidebar from './components/Sidebar';
import MapContainer from './components/MarketMap';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>Farmer's Markets in Philly</h1>
      </header>
      <div>
        <Sidebar />
        <SearchInput />
        <MapContainer />
      </div>
    </div>
  );
}

export default App;
