export const initialState = {
  neighborhoods: [
    { id: 1, name: 'West Philly', data: 'West', isChecked: false },
    { id: 2, name: 'South Philly', data: 'South', isChecked: false },
    { id: 3, name: 'Center City', data: 'Center City', isChecked: false },
    {
      id: 4,
      name: 'Southwest Philly',
      data: 'Southwest',
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
    { id: 9, name: 'North Philly', data: 'North', isChecked: false },
    {
      id: 10,
      name: 'Northwest Philly',
      data: 'Northwest',
      isChecked: false
    }
  ],
  foodAssistance: [
    { id: 11, name: 'SNAP', data: 'ACCEPT_SNAP_ACCESS', isChecked: false },
    {
      id: 12,
      name: 'Philly Food Bucks',
      data: 'ACCEPT_PHILLY_FOOD_BUCKS_',
      isChecked: false
    },
    {
      id: 13,
      name: "Farmer's Market Nutrition Program",
      data: 'ACCEPT_FMNP',
      isChecked: false
    }
  ],
  openToday: false,
  filters: []
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'check':
      return {
        ...state,
        neighborhoods: state.neighborhoods.map(neighborhood => {
          if (neighborhood.id === action.payload.id) {
            return { ...neighborhood, isChecked: !neighborhood.isChecked };
          } else return { ...neighborhood };
        }),
        foodAssistance: state.foodAssistance.map(program => {
          if (program.id === action.payload.id) {
            return { ...program, isChecked: !program.isChecked };
          } else return { ...program };
        }),
        filters: [...state.filters, action.payload.data]
      };

    case 'uncheckAll':
      return {
        ...state,
        neighborhoods: state.neighborhoods.map(neighborhood => {
          return { ...neighborhood, isChecked: false };
        }),
        foodAssistance: state.foodAssistance.map(program => {
          return { ...program, isChecked: false };
        }),
        filters: []
      };

    // case 'openCheck':
    //   return {
    //     ...state,
    //     open: !state.open,
    //     filters: [...state.filters, 'openToday']
    //   };

    default:
      return state;
  }
};
