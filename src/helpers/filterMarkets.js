const filterMarkets = (markets, filters, cb) => {
  const allFilters = Object.values(filters).flat();

  let filteredMarkets = [];

  markets.forEach(market => {
    const marketAttributes = Object.values(market.attributes);
    allFilters.forEach(filter => {
      if (marketAttributes.includes(filter)) {
        filteredMarkets.push(market);
      } else return markets;
    });
  });
  cb(filteredMarkets);
};

export default filterMarkets;
