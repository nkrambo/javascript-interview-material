
/**
* House Robber
*
* Types: Dynamic Programming
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
* It would be overwhelming thinking of all possibilities to rob houses.
*
* Let's start with the simplest case first.
*
* If we only had one house to rob, then the maximum would be whatever is in the
* house. That's simple.
*
* const homes = [100];
*
* If we had two homes, then the maximum would be the highest of the two.
* Also, simple.
*
* const homes = [10, 100];
* let maximum = Math.max(homes[0], homes[1]);
*
* If we have 3 homes, things get harder. We have two options.
*
* 1. Rob the 3rd house and add it's amount to the first house.
* 2. Do not rob the 3rd house and stick to the maximum of the first 2.
*
* Clearly, you want to choose the largest of the two options at each step.
* This can be done by keeping track of the two previous maximum values.
*
* Time: O(n)
* Space: O(1)
* Where (n) is the number of houses.
*
* @param {array} homes amount of cash available in each home on street
* @return {number} returns the maximum amount of cash without alerting police
*/

function robHomes(homes) {

  // type check
  if (!Array.isArray(homes)) {
    throw new TypeError('homes: Expects single argument of [array] type.');
  }

  let prevMax = 0;
  let currentMax = 0;

  for (let i = 0; i < homes.length; i += 1) {
    let temp = currentMax;
    currentMax = Math.max((prevMax + homes[i]), currentMax)
    prevMax = temp;
  }

  return currentMax;
}

export default robHomes;
