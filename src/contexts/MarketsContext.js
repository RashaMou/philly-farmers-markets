import React, { createContext, useReducer, useContext } from "react";

export const MarketsContext = createContext();

export function useMarketsState() {
  return useContext(MarketsContext);
}

// reducer
const marketsStateReducer = (state, action) => {
  switch (action.type) {
    case "ON_SUCCESS": {
      return {
        markets: action.data,
        filteredMarkets: action.data,
        error: null,
      };
    }
    case "ON_FAILURE": {
      return { ...state, error: action.data };
    }
    case "FILTER_MARKETS": {
      return {
        ...state,
        filteredMarkets: "result of filter function",
      };
    }
    case "RESET_MARKETS": {
      return {
        ...state,
        filteredMarkets: state.markets,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  // markets should never change, we should only work from filtered markets. We use markets to reset the filters.
  markets: [],
  filteredMarkets: [],
  error: "",
};

export const MarketStateProvider = ({ children }) => {
  let marketsReducer = useReducer(marketsStateReducer, initialState);
  return (
    <MarketsContext.Provider value={marketsReducer}>
      {children}
    </MarketsContext.Provider>
  );
};
