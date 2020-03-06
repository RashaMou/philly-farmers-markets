const filterMarkets = (markets, filters, cb) => {
  const allFilters = Object.values(filters).flat();
  console.log('a;;Filters', allFilters);

  let filteredMarkets = [];

  markets.forEach(market => {
    const marketAttributes = Object.values(market.attributes);
    // console.log('marketAttributes', marketAttributes);
    allFilters.forEach(filter => {
      if (marketAttributes.includes(filter)) {
        filteredMarkets.push(market);
        console.log('market', market);
      }
    });
  });

  console.log('filteredMarkets', filteredMarkets);
  cb(filteredMarkets);
};

export default filterMarkets;
