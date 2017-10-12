
/**
* Best Time to Buy and Sell Stock
*
* Tags: Greedy, Array, Dynamic Programming
* Leetcode: 121
*
* Say you have an array for which the ith element is the price of a given stock
* on day i.
*
* If you were only permitted to complete at most one transaction (ie, buy one and
* sell one share of the stock), design an algorithm to find the maximum profit.
*
* Example 1:
*
* Input: [7, 1, 5, 3, 6, 4]
* Output: 5
*
* max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger
* than buying price)
*
* Example 2:
*
* Input: [7, 6, 4, 3, 1]
* Output: 0
*
* In this case, no transaction is done, i.e. max profit = 0.
*/

/**
* maxProftest()
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
* @param {array} prices array of prices at minutes past opening time.
* @return {number} returns maximum profit that could have been made.
*/

// function maxProftest(prices) {
//   // we'll greedily update minPrice and maxProfit, so we initialize
//   // them to the first price and the first possible profit
//   let minPrice = prices[0];
//   let currentMaxProfit = prices[1] - prices[0];
//
//   // start at the second (index 1) time
//   // we can't sell at the first time, since we must buy first,
//   // and we can't buy and sell at the same time!
//   // if we started at index 0, we'd try to buy and sell at time 0.
//   // this would give a profit of 0, which is a problem if our
//   // maxProfit is supposed to be negative we'd return 0!
//   for (let i = 1; i < prices.length; i += 1) {
//     const currentPrice = prices[i];
//
//     // see what our profit would be if we bought at the
//     // min price and sold at the current price
//     const potentialProfit = currentPrice - minPrice;
//
//     // update currentMaxProfit if we can do better
//     currentMaxProfit = Math.max(currentMaxProfit, potentialProfit);
//
//     // update minPrice so it's always
//     // the lowest price we've seen so far
//     minPrice = Math.min(minPrice, currentPrice);
//   }
//
//   return currentMaxProfit;
// }
//
// export default maxProfit;
