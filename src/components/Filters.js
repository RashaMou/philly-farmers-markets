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

  const handleOpenCheck = () => {
    dispatch({ type: 'openCheck' });
  };

  const resetFilters = () => {
    setFilteredMarkets(masterMarketsArray);
    dispatch({ type: 'uncheckAll' });
  };

  return (
    <div>
      <div className='filters-header'>
        <h2>Filter Markets By:</h2>
      </div>
      <div className='filters-info'>
        <div className='filter-group'>
          <div className='filter-group-header-container'>
            <h2 className='title is-5'>Neighborhoods</h2>
          </div>
          <ul className='filter-group-list'>
            {state.neighborhoods.map((neighborhood, index) => {
              return (
                <li key={index}>
                  <input
                    className='checkbox'
                    type='checkbox'
                    id={neighborhood.name}
                    name={neighborhood.name}
                    checked={state.neighborhoods[neighborhood.id - 1].isChecked}
                    onChange={() =>
                      handleCheck(neighborhood.id, neighborhood.data)
                    }
                  />
                  <label htmlFor={neighborhood.name}>{neighborhood.name}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='filter-group'>
          <div className='filter-group-header-container'>
            <h2 className='title is-5'>Food Assistance</h2>
          </div>
          <ul className='filter-group-list'>
            {state.foodAssistance.map((program, index) => {
              return (
                <li key={index}>
                  <input
                    className='checkbox'
                    type='checkbox'
                    id={program.name}
                    name={program.name}
                    checked={state.foodAssistance[program.id - 11].isChecked}
                    onChange={() => handleCheck(program.id, program.data)}
                  />
                  <label htmlFor={program.name}>{program.name}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='filter-group'>
          <div className='filter-group-header-container'>
            <h2 className='title is-5'>Open Today</h2>
          </div>
          <ul className='filter-group-list'>
            <li>
              <input
                className='checkbox'
                type='checkbox'
                id='today'
                name='today'
                checked={state.open}
                onChange={handleOpenCheck}
              />
              <label htmlFor='today'>Yes</label>
            </li>
          </ul>
        </div>
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
          <button className='button reset' onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
