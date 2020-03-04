import React from 'react';
import Sidebar from './components/Sidebar';
import MarketsMap from './components/MarketsMap';
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
        <MarketsMap
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
