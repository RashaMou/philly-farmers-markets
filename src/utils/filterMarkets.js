const filterMarkets = (markets, filters, cb) => {
  let filteredByOpen = [];
  let filteredByNeighborhood = [];
  let neighborhoodsFilteredByFoodAssistance = [];

  // filter by open today
  if (filters.some(item => item.day)) {
    // get name of the day
    let day = '';
    filters.forEach(item => {
      day = item.day;
    });

    //look for name of day as substring in market.attributes.DAY
    markets.forEach(market => {
      if (market.attributes.DAY.includes(day)) {
        filteredByOpen.push(market);
      }
    });
  }

  // if filter by open today is empty, fill it with original markets array
  if (filteredByOpen.length === 0) {
    filteredByOpen = [...markets];
  }

  // filter by neighborhood
  filteredByOpen.forEach(market => {
    const marketAttributes = Object.values(market.attributes);
    filters.forEach(filter => {
      if (marketAttributes.includes(filter)) {
        filteredByNeighborhood.push(market);
      }
    });
  });

  // if no filters by neighborhood present, add all the markets to the filteredByNeighborhood array
  if (filteredByNeighborhood.length === 0) {
    filteredByNeighborhood = [...filteredByOpen];
  }

  // filter filteredByNeighborhood array by food assistance
  filteredByNeighborhood.forEach(market => {
    filters.forEach(filter => {
      if (
        filter === 'ACCEPT_SNAP_ACCESS' &&
        market.attributes.ACCEPT_SNAP_ACCESS === 'Y'
      ) {
        neighborhoodsFilteredByFoodAssistance.push(market);
      }
      if (filter === 'ACCEPT_FMNP' && market.attributes.ACCEPT_FMNP === 'Y') {
        neighborhoodsFilteredByFoodAssistance.push(market);
      }
      if (
        filter === 'ACCEPT_PHILLY_FOOD_BUCKS_' &&
        market.attributes.ACCEPT_PHILLY_FOOD_BUCKS_ === 'Y'
      ) {
        neighborhoodsFilteredByFoodAssistance.push(market);
      }
    });
  });

  if (neighborhoodsFilteredByFoodAssistance.length === 0) {
    cb(filteredByNeighborhood);
  } else cb(neighborhoodsFilteredByFoodAssistance);
};

export default filterMarkets;
