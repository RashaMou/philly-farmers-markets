import React from 'react';

export const CheckBox = props => {
  return (
    <li>
      <label className='checkbox'>
        <input
          key={props.id}
          onChange={props.handleCheck}
          type='checkbox'
          checked={props.isChecked}
          value={props.value}
        />{' '}
        {props.value}
      </label>
    </li>
  );
};

export default CheckBox;
