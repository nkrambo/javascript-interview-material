
/**
* House Robber
*
* You are a professional robber planning to rob houses along a street. Each house
* has a certain amount of money stashed, the only constraint stopping you from
* robbing each of them is that adjacent houses have security system connected and
* it will automatically contact the police if two adjacent houses were broken
* into on the same night.
*
* Given a list of non-negative integers representing the amount of money of each
* house, determine the maximum amount of money you can rob tonight without alerting
* the police.
*/

/**
* robHomes()
*
* Solution:
*
* At first glance, you might think that you could just return the maximum profit
* for all even indexed homes or odd indexed homes, this would be wrong.
*
* Consider an array of homes, [10, 1200, 15, 20, 1000];
*
* The maximum profit from all the even indexed homes is $1220.
* The profit from all the odds is $1035.
*
* But the actual maximum profit is $2200, by breaking into non-adjacent homes[1]
* and homes[3].
*
* Time: O(1)
* Space: O(1)
*
* @param {array} homes amount of cash available in each home on street
* @return {number} returns the maximum amount of cash without alerting police
*/

function robHomes(homes) {

  // type check
  if (!Array.isArray(homes)) {
    throw new TypeError('homes: Expects single argument of [array] type.');
  }

}

export default robHomes;
