
/**
* Stock Market
*
* Suppose we could access yesterday's stock prices as an array, where:
*
* The indices are the time in minutes past trade opening time, which was 9:30am local time.
* The values are the price in dollars of stock at that time.
* So if the stock cost $500 at 10:30am, pricesYesterday[60] = 500.
*
* Write an efficient function that takes pricesYesterday and returns the
* best profit I could have made from 1 purchase and 1 sale of 1 stock yesterday.
*
* For example:
*
* const pricesYesterday = [10, 7, 5, 8, 11, 9];
*
* getMaxProfit(pricesYesterday);
* returns 6 (buying for $5 and selling for $11)
*
* No 'shorting' — you must buy before you sell.
* You may not buy and sell in the same time step (at least 1 minute must pass).
*/

/**
* getMaxProfit()
*
* Solution:
*
* We'll greedily walk through the array to track the max profit and lowest
* price so far.
*
* For every price, we check if:
*
* - we can get a better profit by buying at minPrice and selling at the currentPrice
* - we have a new minPrice
*
* To start, we initialize:
*
* 1. minPrice as the first price of the day
* 2. maxProfit as the first profit we could get
*
* We decided to return a negative profit if the price decreases all day and we
* can't make any money. We could have thrown an error instead, but returning the
* negative profit is cleaner, makes our function less opinionated, and ensures
* we don't lose information.
*
* Time: O(n)
* Space: O(1)
* We only loop through the array once.
*
* @param {array} pricesYesterday array of prices at minutes past opening time.
* @return {number} returns maximum profit that could have been made.
*/

function getMaxProfit(pricesYesterday) {

  // type check
  if (!Array.isArray(pricesYesterday)) {
    throw new TypeError('getMaxProfit: Expects single argument of [array] type.');
  }

  // make sure we have at least 2 prices
  if (pricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // we'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = pricesYesterday[0];
  let maxProfit = pricesYesterday[1] - pricesYesterday[0];

  // start at the second (index 1) time
  // we can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // if we started at index 0, we'd try to buy /and/ sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be /negative/--we'd return 0!
  for (let i = 1; i < pricesYesterday.length; i += 1) {
    let currentPrice = pricesYesterday[i];

    // see what our profit would be if we bought at the
    // min price and sold at the current price
    let potentialProfit = currentPrice - minPrice;

    // update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

export default getMaxProfit;
