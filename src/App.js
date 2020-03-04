import React from 'react';
import FilterBar from './components/FilterBar';
import MarketsMap from './components/MarketsMap';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>Farmer's Markets in Philly</h1>
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
