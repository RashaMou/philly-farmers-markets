const filterMarkets = (markets, filters, cb) => {
  let filteredByNeighborhood = [];
  let neighborhoodsFilteredByFoodAssistance = [];

  // filter by neighborhoods
  markets.forEach(market => {
    const marketAttributes = Object.values(market.attributes);
    filters.forEach(filter => {
      if (marketAttributes.includes(filter)) {
        filteredByNeighborhood.push(market); // here we should have the markets filtered by neighborhood
      }
    });
  });

  // if no filters by neighborhood present, add all the markets to the filteredByNeighborhood array
  if (filteredByNeighborhood.length === 0) {
    filteredByNeighborhood = [...markets];
  }

  // filter filteredByNeighborhood array by food assistance
  filteredByNeighborhood.forEach(market => {
    console.log(
      'market.attributes.ACCEPT_SNAP_ACCESS',
      market.attributes.ACCEPT_SNAP_ACCESS
    );
    filters.forEach(filter => {
      if (
        filter === 'ACCEPT_SNAP_ACCESS' &&
        market.attributes.ACCEPT_SNAP_ACCESS === 'Y'
      ) {
        neighborhoodsFilteredByFoodAssistance.push(market);
      }
      if (filter === 'ACCEPT_FMNP' && market.attributes.ACCEPT_FMNP === 'Y') {
        console.log('market fired', market);
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

  // if no food assistance filters exist, then send the filteredByNeighborhood array to the cb, otherwise send the neighborhoodsFilteredByFoodAssistance array to the callback
  if (neighborhoodsFilteredByFoodAssistance !== 0) {
    cb(neighborhoodsFilteredByFoodAssistance);
  } else cb(filteredByNeighborhood);
};

export default filterMarkets;
