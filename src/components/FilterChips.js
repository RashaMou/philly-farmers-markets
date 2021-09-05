import { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useMarketsState } from "../contexts/MarketsContext";

export const FilterChips = () => {
  let [{ neighborhoods }, dispatch] = useMarketsState();

  const [toggleFilter, setToggleFilter] = useState({
    neighborhoods: false,
    assistance: false,
    open: false,
  });

  useEffect(() => {
    console.log(neighborhoods);
  }, []);

  const handleFilterClick = (menu) => {
    setToggleFilter({ ...toggleFilter, [menu]: !toggleFilter[menu] });
  };

  const handleClickAway = (menu) => {
    setToggleFilter({ ...toggleFilter, [menu]: false });
  };

  return (
    <div className="chip-container">
      <div className="filter-menu-container">
        <div
          className={`${toggleFilter.neighborhoods ? "chip rotated" : "chip"}`}
          onClick={() => handleFilterClick("neighborhoods")}
        >
          Neighborhoods
        </div>
        {toggleFilter.neighborhoods && (
          <ClickAwayListener
            onClickAway={() => handleClickAway("neighborhoods")}
          >
            <ul className="filter-menu">
              <div className="filter-menu-title">Neighborhoods</div>
              {neighborhoods.map((neighborhood, index) => {
                return (
                  <li key={index}>
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={neighborhood}
                      name={neighborhood}
                    />
                    <label htmlFor={neighborhood}>{neighborhood}</label>
                  </li>
                );
              })}
            </ul>
          </ClickAwayListener>
        )}
      </div>
      <div className="filter-menu-container">
        <div
          className={`${toggleFilter.assistance ? "chip rotated" : "chip"}`}
          onClick={() => handleFilterClick("assistance")}
        >
          Food Assistance
        </div>
        {toggleFilter.assistance && (
          <ClickAwayListener onClickAway={() => handleClickAway("assistance")}>
            <ul className="filter-menu">
              <div className="filter-menu-title">Food Assistance</div>
              <li>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="snap"
                  name="snap"
                />

                <label htmlFor="snap">SNAP</label>
              </li>
              <li>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="food-bucks"
                  name="food-bucks"
                />
                <label htmlFor="food-bucks">Philly Food Bucks</label>
              </li>
              <li>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="nutrition-program"
                  name="nutrition-program"
                />
                <label htmlFor="nutrition-program">
                  Farmer's Market Nutrition Program
                </label>
              </li>
            </ul>
          </ClickAwayListener>
        )}
      </div>
      <div className="filter-menu-container">
        <div
          className={`${toggleFilter.open ? "chip rotated" : "chip"}`}
          onClick={() => handleFilterClick("open")}
        >
          Open Today
        </div>
        {toggleFilter.open && (
          <ClickAwayListener onClickAway={() => handleClickAway("open")}>
            <div className="filter-menu">
              <div className="filter-menu-title">Open Today</div>
              <input
                className="checkbox"
                type="checkbox"
                id="open"
                name="open"
              />
              <label htmlFor="open">Yes</label>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};
