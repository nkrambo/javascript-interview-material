
/**
* Make Change
*
* Tags: Bottom Up, Dynamic Programming
*
* Your quirky boss found out that you're a programmer and has a weird
* request about something they've been wondering for a long time.
*
* Write a function that, given: an amount of money, an array of coin denominations.
* Computes the number of ways to make amount of money with coins of
* the available denominations.
*
* Example: for amount = (4)cents and denominations = [1, 2, 3] (cents)
* your program would output 4 - the number of ways to make 4¢ with those denominations:
*
* 1¢, 1¢, 1¢, 1¢
* 1¢, 1¢, 2¢
* 1¢, 3¢
* 2¢, 2¢
*
*/

/**
* coinChange()
*
* Solution:
*
* There's a couple of ways to tackle this problem, top-down recursively for example.
* What's not immediately obvious is that a bottom up approach will work very well.
*
* To start, we build up an array 'ways', where the index is the amount and the
* value at each index is the number of ways of getting that amount.
*
* To further simplify the problem, we can work with only the first coin in denominations,
* then add in the second coin, then the third, etc.
*
* This is what 'ways' would look like for just our first coin: 1¢
*
* // 1c denomination
* const ways = [
*   1,  // 0c:  no coins
*   1,  // 1c:  1 1c coin
*   1,  // 2c:  2 1c coins
*   1,  // 3c:  3 1c coins
*   1,  // 4c:  4 1c coins
*   1,  // 5c:  5 1c coins
* ];
*
* Now a 2c coin...
*
* const ways = [
*   1,      // 0c:  no change
*   1,      // 1c:  no change
*   1 + 1,  // 2c:  new [(2)]
*   1 + 1,  // 3c:  new [(2, 1)]
*   1 + 2,  // 4c:  new [(2, 1, 1), (2, 2)]
*   1 + 2,  // 5c:  new [(2, 1, 1, 1), (2, 2, 1)]
* ];
*
* Time: O(n * m)
* Space: O(n)
*
* Where n is the amount of money and m is the number of denominations.
*
* @param {number} amount amount of money to make change from
* @param {array} denominations array of available coin denominations
* @return {array} returns an array of arrays, with possible methods to make change
*/

function coinChange(amount, denominations) {
  // intialize an array of zeros with indices up to amount
  const ways = [];
  for (let i = 0; i <= amount; i += 1) {
    ways[i] = 0;
  }
  ways[0] = 1;

  for (let j = 0; j < denominations.length; j += 1) {
    const coin = denominations[j];
    for (let higherAmount = coin; higherAmount <= amount; higherAmount += 1) {
      const remainder = higherAmount - coin;
      ways[higherAmount] += ways[remainder];
    }
  }

  return ways[amount];
}

export default coinChange;
