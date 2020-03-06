import React, { useState, useContext, useEffect, useReducer } from 'react';
import Checkbox from './Checkbox';
import LocationContext from '../contexts/LocationContext';
import filterMarkets from '../helpers/filterMarkets';
import getMarkets from '../helpers/getMarkets';
import { dayOfTheWeek } from '../helpers/dates';

function filterReducer(state, action) {
  switch (action.type) {
    case 'check': {
      return {
        isChecked: !state.isChecked
      };
    }
    default:
      break;
  }
  return state;
}

const initialState = {
  isChecked: false
};

const Filters = props => {
  const { setFilters, filters, markets, setMarkets } = useContext(
    LocationContext
  );

  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    // if nothing is selected and we click save, then get all markets
  }, []);

  const [isChecked, setIsChecked] = useState(false);

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
    // goes through each property in checkboxValues.open and checks if that is the one that is checked
    open.forEach(time => {
      if (time.value === event.target.value)
        time.isChecked = event.target.checked;
    });
    setCheckboxValues({ ...checkboxValues, open: open });

    // returns an array of only the ones that are true
    const checkedOpen = open
      .filter(time => {
        return time.isChecked === true;
      })
      .map(value => {
        return value.value;
      });

    console.log('checkedOpen', checkedOpen);

    if (checkedOpen.includes('Open today')) {
      let today = dayOfTheWeek();
      setFilters({ ...filters, today });
    }
  };

  const saveFilters = () => {
    filterMarkets(markets, filters, setMarkets);
    props.setSidebarOpen(false);
  };

  const resetFilters = event => {
    props.setSidebarOpen(false);
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
      <div className='filters-header'>
        <h2>Filter Markets By:</h2>
      </div>
      <div className='filters-info'>
        <div className='filter-group-header-container'>
          <h2 className='title is-5'>Neighborhoods</h2>
        </div>
        <ul className='filter-group'>
          <li>
            <label className='checkbox'>
              <input
                onChange={() => setIsChecked(!isChecked)}
                type='checkbox'
                checked={isChecked}
                value='West'
              />{' '}
              West
            </label>
          </li>
          {/* {checkboxValues.neighborhoods.map((neighborhood, index) => {
            return (
              <Checkbox
                key={index}
                handleCheck={handleCheckNeighborhoods}
                {...neighborhood}
              />
            );
          })} */}
        </ul>
        <div className='buttons'>
          <button className='button save' onClick={saveFilters}>
            Save
          </button>
          <button className='button reset' onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
