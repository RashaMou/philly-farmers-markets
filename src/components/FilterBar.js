import React, { useState, useContext } from 'react';
import Sidebar from 'react-sidebar';
import Filters from './Filters';
import LocationContext from '../contexts/LocationContext';

const FilterBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setSelectedMarket } = useContext(LocationContext);

  const onSetSidebarOpen = open => {
    setSidebarOpen(open);
  };

  return (
    <div onClick={() => setSelectedMarket(null)}>
      <Sidebar
        sidebar={
          <div className='filter-sidebar'>
            <Filters />
          </div>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <h2
          className='filters-menu-title'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          Filters >>
        </h2>
      </Sidebar>
    </div>
  );
};

export default FilterBar;
