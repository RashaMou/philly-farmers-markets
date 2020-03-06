const filterMarkets = (markets, filters, cb) => {
  console.log('markets', markets);
  console.log('filters', filters);
  console.log('cb', cb);
  const allFilters = Object.values(filters).flat();

  let filteredMarketsArray = [];

  markets.forEach(market => {
    const marketAttributes = Object.values(market.attributes); // array
    allFilters.forEach(filter => {
      console.log('each filter', filter);
      if (marketAttributes.includes(filter)) {
        filteredMarketsArray.push(market);
        console.log('market', market);
      }
    });
  });

  cb(filteredMarketsArray);
};

export default filterMarkets;
