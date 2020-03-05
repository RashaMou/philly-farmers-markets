// cb is setMarkets
// filters is an object that contains arrays
const filterMarkets = (markets, filters, cb) => {
  const allFilters = Object.values(filters).flat();
  console.log('allFilters', allFilters);
  console.log('markets', markets);

  let filteredMarkets = [];

  markets.map(market => {
    const marketAttributes = Object.values(market.attributes);
    allFilters.forEach(filter => {
      if (marketAttributes.includes(filter)) {
        filteredMarkets.push(market);
      }
    });
  });
  cb(filteredMarkets);
};

export default filterMarkets;
