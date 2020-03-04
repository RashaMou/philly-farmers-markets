import React, { useState, useContext } from 'react';
import Checkbox from './Checkbox';
import LocationContext from '../contexts/LocationContext';

const Filters = () => {
  const { setFilters } = useContext(LocationContext);

  const [checkboxValues, setCheckboxValues] = useState({
    neighborhoods: [
      { value: 'West', isChecked: false },
      { value: 'South', isChecked: false },
      { value: 'Center City', isChecked: false },
      { value: 'Southwest', isChecked: false }
    ],
    foodAssistance: [
      { value: 'SNAP', isChecked: false },
      { value: 'Philly Food Bucks', isChecked: false },
      { value: 'Farmers Market Nutrition Program', isChecked: false }
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

    console.log(checkedNeighborhoods);
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

    console.log(checkedFoodAssistance);
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
    </div>
  );
};

export default Filters;
