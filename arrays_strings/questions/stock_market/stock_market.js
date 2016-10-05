
// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

// No "shorting"—you must buy before you sell.
// You may not buy and sell in the same time step (at least 1 minute must pass).

/*
 * @param {array} stockPricesYesterday Array of Apple stock prices at minutes past opening time.
 * @return {number} The maximum profit that could have been made.
 */

// Time - O(n^2) since we loop through all possible sale points and compare to running maxProfit.

function getMaxProfit(stockPricesYesterday) {

  // type check
  if (!Array.isArray(stockPricesYesterday)) {
    throw new Error('getMaxProfit: Expects single paramenter of "Array" type');
  }

  // edge case, make sure we have at least 2 prices
  if (stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  let maxProfit = 0;

  for (let i = 0; i < stockPricesYesterday.length; i++) {
    for (let j = i + 1; j < stockPricesYesterday.length; j++) {
      const profit = stockPricesYesterday[j] - stockPricesYesterday[i];

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}


// Using a greedy approach
// Time - O(n)
// Space - O(1)

function getMaxProfit(stockPricesYesterday) {

  // make sure we have at least 2 prices
  if (stockPricesYesterday.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
  }

  // we'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // start at the second (index 1) time
  // we can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // if we started at index 0, we'd try to buy /and/ sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be /negative/--we'd return 0!
  for (var i = 1; i < stockPricesYesterday.length; i++) {
      var currentPrice = stockPricesYesterday[i];

      // see what our profit would be if we bought at the
      // min price and sold at the current price
      var potentialProfit = currentPrice - minPrice;

      // update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);

      // update minPrice so it's always
      // the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

export default getMaxProfit;
