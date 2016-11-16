
/**
* Two Sum
*
* Types: Hash Map, 2sum Problem, Classic Problem
*
*
*/

/**
* twoSum()
*
* Solution:
*
* Given an array of integers, return indices of the two numbers such that they
* add up to a specific target.
*
* You may assume that each input would have exactly one solution.
*
* Time: O(1)
* Space: O(1)
*
* @param {array} nums array of positve and negative integers
* @param {integer} target to sum pairs of nums to.
* @return {array} returns a matrix set of integers resulting in target
*/

function twoSumBrute(nums, target) {

  // type check
  if (!Array.isArray(nums)) {
    throw new TypeError('twoSum: Expects single argument of [array] type.');
  }

  // edge cases, minimum 2
  if (nums.length < 2) {
    throw new Error('twoSum: nums[] must be a minimum length of 2.');
  }

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }

  return null;
}

export { twoSumBrute, };
