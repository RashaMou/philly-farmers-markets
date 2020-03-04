import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import Filters from './Filters';

const FilterBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = open => {
    setSidebarOpen(open);
  };

  return (
    <div>
      <Sidebar
        sidebar={
          <div>
            <Filters />
            <h1 onClick={() => setSidebarOpen(false)}>X</h1>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <h2 onClick={() => setSidebarOpen(true)}>Filters</h2>
      </Sidebar>
    </div>
  );
};

export default FilterBar;
