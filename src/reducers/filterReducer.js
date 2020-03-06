export const initialState = {
  checkboxes: [
    { id: 1, name: 'West Philly', data: 'West', isChecked: false },
    { id: 2, name: 'South Philly', data: 'South Philly', isChecked: false },
    { id: 3, name: 'Center City', data: 'Center City', isChecked: false },
    {
      id: 4,
      name: 'Southwest Philly',
      data: 'Southwest Philly',
      isChecked: false
    },
    {
      id: 5,
      name: 'Bridesburg/Kensington/Port Richmond',
      data: 'Bridesburg/Kensington/Port Richmond',
      isChecked: false
    },
    { id: 6, name: 'Northeast', data: 'Northeast', isChecked: false },
    {
      id: 7,
      name: 'Germantown/ Chestnut Hill',
      data: 'Germantown/ Chestnut Hill',
      isChecked: false
    },
    {
      id: 8,
      name: 'Roxborough/ Manayunk',
      data: 'Roxborough/ Manayunk',
      isChecked: false
    },
    { id: 9, name: 'North Philly', data: 'North Philly', isChecked: false },
    {
      id: 10,
      name: 'Northwest Philly',
      data: 'Northwest Philly',
      isChecked: false
    }
  ],
  filters: []
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'check':
      console.log('action.payload', action.payload);
      return {
        ...state,
        checkboxes: state.checkboxes.map(checkbox => {
          console.log('checkbox', checkbox);
          if (checkbox.id === action.payload.id) {
            return { ...checkbox, isChecked: !checkbox.isChecked };
          } else return { ...checkbox };
        }),
        filters: [...state.filters, action.payload.name]
      };

    case 'add filter':
      return {
        ...state
      };
    default:
      return state;
  }
};
