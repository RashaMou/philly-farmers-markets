import React from 'react';
import FilterBar from './components/FilterBar';
import MarketsMap from './components/MarketsMap';
import logo from './assets/logo.png';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <img className='logo' src={logo} alt='Logo' />
      </header>
      <div>
        <FilterBar />
        <MarketsMap
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
