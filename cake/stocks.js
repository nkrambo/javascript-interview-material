
// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns
// the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

const stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday); // returns 6 (buying for $5 and selling for $11)

// brute force, compare evey iteration with as a buy/sell and see which is the highest.
// this would have a time complexity of O(n^2) as we have 2 nested loops... Not great
const getMaxProfit = function(array) {
  let maxProfit = 0;

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {
      // console.log(i, j);

      // for each pair, find the earlier and later times
      var earlierTime = Math.min(i, j);
      var laterTime   = Math.max(i, j);
      console.log([earlierTime, laterTime]);
    }
  }

  return maxProfit;
}