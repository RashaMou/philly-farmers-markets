import React, { useReducer, useContext } from 'react';
import { filterReducer, initialState } from '../reducers/filterReducer';
import filterMarkets from '../helpers/filterMarkets';
import LocationContext from '../contexts/LocationContext';

const Filters = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { masterMarketsArray, setFilteredMarkets } = useContext(
    LocationContext
  );
  const handleCheck = (id, data) => {
    dispatch({ type: 'check', payload: { id, data } });
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
          {state.checkboxes.map(checkbox => {
            return (
              <li key={checkbox.id}>
                <input
                  className='checkbox'
                  type='checkbox'
                  id={checkbox.name}
                  name={checkbox.name}
                  checked={state.checkboxes[checkbox.id - 1].isChecked}
                  onChange={() => handleCheck(checkbox.id, checkbox.data)}
                />
                <label htmlFor={checkbox.name}>{checkbox.name}</label>
              </li>
            );
          })}
        </ul>
        <div className='buttons'>
          <button
            className='button save'
            onClick={() =>
              filterMarkets(
                masterMarketsArray,
                state.filters,
                setFilteredMarkets
              )
            }
          >
            Save
          </button>
          <button className='button reset'>Reset Filters</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
