const filterMarkets = (markets, filters, cb) => {
  // console.log('filters', filters);

  // let filteredMarketsArray = [];

  // markets.forEach(market => {
  //   const marketAttributes = Object.values(market.attributes); // array
  //   filters.forEach(filter => {
  //     if (marketAttributes.includes(filter)) {
  //       filteredMarketsArray.push(market);
  //     }
  //   });
  // });

  let filteredMarketsArray = [];

  markets.forEach(market => {
    const marketAttributes = Object.values(market.attributes);
    filters.forEach(filter => {
      if (marketAttributes.includes(filter)) {
        filteredMarketsArray.push(market);
      }
      if (
        (filter === 'ACCEPT_FMNP') &
        (market.attributes.ACCEPT_FMNP === 'Y')
      ) {
        filteredMarketsArray.push(market);
      }
      if (
        (filter === 'ACCEPT_SNAP_ACCESS') &
        (market.attributes.ACCEPT_SNAP_ACCESS === 'Y')
      ) {
        filteredMarketsArray.push(market);
      }
      if (
        (filter === 'ACCEPT_PHILLY_FOOD_BUCKS_') &
        (market.attributes.ACCEPT_PHILLY_FOOD_BUCKS_ === 'Y')
      ) {
        filteredMarketsArray.push(market);
      }
    });
    return filteredMarketsArray;
  });

  // removes duplicates
  let unique = [...new Set(filteredMarketsArray)];

  cb(unique);
};

export default filterMarkets;
