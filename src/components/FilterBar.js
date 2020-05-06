import React, { useState, useContext } from "react";
import Sidebar from "react-sidebar";
import Filters from "./Filters";
import LocationContext from "../contexts/LocationContext";

const FilterBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setSelectedMarket } = useContext(LocationContext);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <div onClick={() => setSelectedMarket(null)}>
      <Sidebar
        sidebar={<Filters setSidebarOpen={setSidebarOpen} />}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: 325 } }}
      >
        <h2
          className="filters-menu-title"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          Filters >>
        </h2>
        {/* <div
          className="filter-icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i class="fas fa-filter"></i>
        </div> */}
      </Sidebar>
    </div>
  );
};

export default FilterBar;
