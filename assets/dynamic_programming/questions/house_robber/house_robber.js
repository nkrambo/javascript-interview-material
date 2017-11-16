
/**
* House Robber
*
* Tags: Dynamic Programming, Bottom Up
* Leetcode: 198
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
* rob()
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
* Let's grab another example and build a matrix to illustrate this. Let's say we
* have the following homes array: [10, 300, 10, 10, 10, 200]
*
* +-------+-------------------------------------+
* | index |  0     1     2     3     4     5    |
* +---------------------------------------------+
* | value |  10   (300)  10   (10)   10    200  |     (300 + 10)
* +---------------------------------------------+          >
* | cMax  |  10    300  (300)  310   310   510  |        (300)
* +-------+-------------------------------------+
*
* We can see that at index 3, we take the maximum of (300 + 10) or (300). That is,
* the maximum of the previous 'cMax' or the (current value + prev non-adjacent value).
* Then we repeat the process at each step until we get our final answer, $510.
*
* Time: O(n)
* Space: O(1)
*
* Where (n) is the number of houses.
*
* @param {array} nums amount of cash available in each home on street
* @return {number} returns the maximum amount of cash without alerting police
*/

function rob(nums) {
  let prevMax = 0;
  let currentMax = 0;

  nums.forEach((num) => {
    const temp = currentMax;
    currentMax = Math.max((prevMax + num), currentMax);
    prevMax = temp;
  });

  return currentMax;
}

export default rob;
