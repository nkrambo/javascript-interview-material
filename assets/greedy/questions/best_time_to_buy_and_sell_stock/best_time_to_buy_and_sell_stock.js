
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
* maxProfitBrute()
*
* Solution:
*
* We need to find out the maximum difference (which will be the maximum profit)
* between two numbers in the given array. Also, the second number (selling price)
* must be larger than the first one (buying price).
*
* In formal terms, we need to find max(prices[j] − prices[i]), for every i
* and j such that j > i.
*
* Time: O(n^2)
* Space: O(1)
*
* We get a quadratic time complexity. We can do much better than this. We can
* actually do this in O(n).
*
* @param {number[]} prices
* @return {number}
*/

function maxProfitBrute(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i += 1) {
    for (let j = i + 1; j < prices.length; j += 1) {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

/**
* maxProfit()
*
* Solution:
*
* We'll greedily walk through the array to track the max profit and lowest
* price so far.
*
* Say the given array is:
*
* [7, 1, 5, 3, 6, 4]
*
* If we plot the numbers of the given array on a graph, we get:
*
*
*  (price)
*
*     ^
*     |
*     |
*   8 +
*     |
*     |
*   7 +      +
*     |      |
*     |      |                         (PEAK)
*   6 +      |                           +
*     |      |                           |
*     |      |                           |
*   5 +      |             +             |
*     |      |             |             |
*     |      |             |             |
*   4 +      |             |             |      +
*     |      |             |             |      |
*     |      |             |             |      |
*   3 +      |             |      +      |      |
*     |      |             |      |      |      |
*     |      |   (VALLEY)  |      |      |      |
*   2 +      |      +      |      |      |      |
*     |      |      |      |      |      |      |
*     |      |      |      |      |      |      |
*   1 +      |      |      |      |      |      |
*     |      |      |      |      |      |      |
*     |      |      |      |      |      |      |
*     +------+------+------+------+------+------+------+--->
*     0      1      2      3      4      5      6      7
*
*                            (days)
*
*
* The points of interest are the peaks and valleys in the given graph. We need to
* find the largest peak following the smallest valley. We can maintain two variables,
* minprice and maxprofit corresponding to the smallest valley and maximum profit
* (maximum difference between selling price and minprice) obtained so far respectively.
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
* What happens if the price decreases all day? In this case, we should return 0
* but we could have also thrown an error or even returned a negative profit margin.
*
* Time: O(n)
* Space: O(1)
*
* We only loop through the array once.
*
* @param {number[]} prices
* @return {number}
*/

function maxProfit(prices) {
  // we'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  // start at the second (index 1) time
  // we can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // if we started at index 0, we'd try to buy and sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be negative we'd return 0!
  for (let i = 1; i < prices.length; i += 1) {
    const currentPrice = prices[i];

    // see what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // update currentMaxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  // return 0, if profit margin is negative
  return maxProfit > 0 ? maxProfit : 0;
}

export { maxProfitBrute, maxProfit };
