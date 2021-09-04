import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export const FilterChips = () => {
  const [toggleFilter, setToggleFilter] = useState({
    neighborhoods: false,
    assistance: false,
    open: false,
  });

  const handleFilterClick = (menu) => {
    setToggleFilter({ ...toggleFilter, [menu]: !toggleFilter[menu] });
  };

  const handleClickAway = (menu) => {
    setToggleFilter({ ...toggleFilter, [menu]: false });
  };

  return (
    <div className="chip-container">
      <div className="filter-menu-container">
        <div class="chip" onClick={() => handleFilterClick("neighborhoods")}>
          Neighborhoods
        </div>
        {toggleFilter.neighborhoods && (
          <ClickAwayListener
            onClickAway={() => handleClickAway("neighborhoods")}
          >
            <div className="filter-menu">
              <div className="filter-menu-title">Neighborhoods</div>
              <p>West Philly</p>
              <p>South Philly</p>
              <p>Center City</p>
              <p>Southwest Philly</p>
              <p>Bridesburg | Kensington | Port Richmond</p>
              <p>Germantown | Chestnut Hill</p>
              <p>Roxborough | Manayunk</p>
              <p>North Philly</p>
              <p>Northeast Philly</p>
              <p>Northwest Philly</p>
            </div>
          </ClickAwayListener>
        )}
      </div>
      <div className="filter-menu-container">
        <div class="chip" onClick={() => handleFilterClick("assistance")}>
          Food Assistance
        </div>
        {toggleFilter.assistance && (
          <ClickAwayListener onClickAway={() => handleClickAway("assistance")}>
            <div className="filter-menu">
              <div className="filter-menu-title">Food Assistance</div>
              <p>SNAP</p>
              <p>Philly Food Bucks</p>
              <p>Farmer's Market Nutrition Program</p>
            </div>
          </ClickAwayListener>
        )}
      </div>
      <div className="filter-menu-container">
        <div class="chip" onClick={() => handleFilterClick("open")}>
          Open Today
        </div>
        {toggleFilter.open && (
          <ClickAwayListener onClickAway={() => handleClickAway("open")}>
            <div className="filter-menu">
              <div className="filter-menu-title">Open Today</div>
              <p>Yes</p>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};
