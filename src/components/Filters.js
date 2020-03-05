import React, { useState, useContext } from 'react';
import Checkbox from './Checkbox';
import LocationContext from '../contexts/LocationContext';
import filterMarkets from '../helpers/filterMarkets';
import getMarkets from '../helpers/getMarkets';

const Filters = () => {
  const { setFilters, filters, markets, setMarkets } = useContext(
    LocationContext
  );
  const [checkboxValues, setCheckboxValues] = useState({
    neighborhoods: [
      { value: 'West', isChecked: false },
      { value: 'South', isChecked: false },
      { value: 'Center City', isChecked: false },
      { value: 'Southwest', isChecked: false },
      { value: 'Bridesburg/Kensington/Port Richmond', isChecked: false },
      { value: 'Northeast', isChecked: false },
      { value: 'Germantown/ Chestnut Hill', isChecked: false },
      { value: 'Roxborough/ Manayunk', isChecked: false },
      { value: 'North', isChecked: false },
      { value: 'Northwest', isChecked: false }
    ],
    foodAssistance: [
      { value: 'SNAP', isChecked: false },
      { value: 'Philly Food Bucks', isChecked: false },
      { value: 'Farmers Market Nutrition Program', isChecked: false }
    ],
    open: [
      {
        value: 'Open this month',
        isChecked: false
      },
      {
        value: 'Open today',
        isChecked: false
      }
    ]
  });

  const handleCheckNeighborhoods = event => {
    let neighborhoods = checkboxValues.neighborhoods;
    neighborhoods.forEach(neighborhood => {
      if (neighborhood.value === event.target.value)
        neighborhood.isChecked = event.target.checked;
    });
    setCheckboxValues({ ...checkboxValues, neighborhoods: neighborhoods });
    const checkedValues = neighborhoods.filter(neighborhood => {
      return neighborhood.isChecked === true;
    });
    const checkedNeighborhoods = checkedValues.map(value => {
      return value.value;
    });
    setFilters({ ...filters, checkedNeighborhoods });
  };

  const handleCheckFoodAssistance = event => {
    let foodAssistance = checkboxValues.foodAssistance;
    foodAssistance.forEach(program => {
      if (program.value === event.target.value)
        program.isChecked = event.target.checked;
    });
    setCheckboxValues({ ...checkboxValues, foodAssistance: foodAssistance });
    const checkedValues = foodAssistance.filter(program => {
      return program.isChecked === true;
    });
    const checkedFoodAssistance = checkedValues.map(value => {
      return value.value;
    });

    // console.log(checkedFoodAssistance);
    setFilters({ ...filters, checkedFoodAssistance });
  };

  const handleCheckOpen = event => {
    let open = checkboxValues.open;
    open.forEach(time => {
      if (time.value === event.target.value)
        time.isChecked = event.target.checked;
    });
    setCheckboxValues({ ...checkboxValues, open: open });
    const checkedValues = open.filter(time => {
      return time.isChecked === true;
    });
    const checkedOpen = checkedValues.map(value => {
      return value.value;
    });

    // console.log(checkedOpen);
    setFilters({ ...filters, checkedOpen });
  };

  const resetFilters = event => {
    getMarkets(setMarkets);
    let neighborhoods = checkboxValues.neighborhoods;
    neighborhoods.forEach(
      neighborhood => (neighborhood.isChecked = event.target.checked)
    );
    setCheckboxValues({ ...checkboxValues, neighborhoods: neighborhoods });

    let foodAssistance = checkboxValues.foodAssistance;
    foodAssistance.forEach(
      program => (program.isChecked = event.target.checked)
    );
    setCheckboxValues({ ...checkboxValues, foodAssistance: foodAssistance });

    let open = checkboxValues.open;
    open.forEach(time => (time.isChecked = event.target.checked));
    setCheckboxValues({ ...checkboxValues, open: open });
  };

  return (
    <div>
      <h2>Neighborhoods</h2>
      <ul>
        {checkboxValues.neighborhoods.map((neighborhood, index) => {
          return (
            <Checkbox
              key={index}
              handleCheck={handleCheckNeighborhoods}
              {...neighborhood}
            />
          );
        })}
      </ul>
      <h2>Food Assistance Programs</h2>
      <ul>
        {checkboxValues.foodAssistance.map((program, index) => {
          return (
            <Checkbox
              key={index}
              handleCheck={handleCheckFoodAssistance}
              {...program}
            />
          );
        })}
      </ul>
      <h2>Open</h2>
      <ul>
        {checkboxValues.open.map((time, index) => {
          return (
            <Checkbox key={index} handleCheck={handleCheckOpen} {...time} />
          );
        })}
      </ul>
      <button onClick={() => filterMarkets(markets, filters, setMarkets)}>
        Save
      </button>
      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

export default Filters;
