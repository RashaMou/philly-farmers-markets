## TODOS

1. fitBounds map
2. Filter by months
3. add filter tags
4. refactor to use useReducer.
5. Fix broken day filters

### Master Market Array

Problem: when we check and save a filter, it mutates the original markets array. So if we uncheck a filter and save again, it will filter the already filtered, mutated array.

Solution: We need one master markets array which is always the reference when we save and reset, and then an display array which determines what is shown.

getMarkets() => setMasterArray

As soon as we get the masterArray in the beginning, set the result to filteredMarkets so that filteredMarkets always starts out full.

Map markers take in filteredMarkets.

filterMarkets(markets, filters, setMarkets) => always takes in masterArray as markets, and returns setFilteredMarkets with the results.
