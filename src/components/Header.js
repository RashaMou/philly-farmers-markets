import { useState } from "react";
import logo from "../assets/logo.png";

export const Header = ({ handleModalClick }) => {
  const [toggleFilter, setToggleFilter] = useState({
    neighborhoods: false,
    assistance: false,
    open: false,
  });

  const handleFilterClick = (menu) => {
    console.log(menu);
    setToggleFilter({ ...toggleFilter, [menu]: !toggleFilter[menu] });
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="question-container" onClick={handleModalClick}>
        <i onClick={handleModalClick} className="far fa-question-circle"></i>
      </div>
      <div className="chip-container">
        <div className="filter-menu-container">
          <div class="chip" onClick={() => handleFilterClick("neighborhoods")}>
            Neighborhoods
          </div>
          {toggleFilter.neighborhoods && (
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
          )}
        </div>
        <div className="filter-menu-container">
          <div class="chip" onClick={() => handleFilterClick("assistance")}>
            Food Assistance
          </div>
          {toggleFilter.assistance && (
            <div className="filter-menu">
              <div className="filter-menu-title">Food Assistance</div>
              <p>SNAP</p>
              <p>Philly Food Bucks</p>
              <p>Farmer's Market Nutrition Program</p>
            </div>
          )}
        </div>
        <div className="filter-menu-container">
          <div class="chip" onClick={() => handleFilterClick("open")}>
            Open Today
          </div>
          {toggleFilter.open && (
            <div className="filter-menu">
              <div className="filter-menu-title">Open Today</div>
              <p>Yes</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
