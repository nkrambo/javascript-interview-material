
/**
* Best Time to Buy and Sell Stock II
*
* Tags: Greedy, Array
* Leetcode: 122
*
* Say you have an array for which the ith element is the price of a given stock
* on day i.
*
* Design an algorithm to find the maximum profit. You may complete as many transactions
* as you like (ie, buy one and sell one share of the stock multiple times). However,
* you may not engage in multiple transactions at the same time (ie, you must sell
* the stock before you buy again).
*/

/**
* maxProfit()
*
* Solution:
*
* This is actully pretty straight forward. We just check to see if the next price
* is greater than our current price, if it is, then we sell and add to our running
* total profit.
*
* @param {number[]} prices
* @return {number}
*/

function maxProfit(prices) {
  let total = 0;
  for (let i = 0; i < prices.length - 1; i += 1) {
    if (prices[i + 1] > prices[i]) {
      total += prices[i + 1] - prices[i];
    }
  }

  return total;
}

export default maxProfit;
