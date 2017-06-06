
/**
* Two Sum
*
* Tags: Map
* Leetcode: 1
*
* Given an array of integers, return indices of the two numbers such that they
* add up to a specific target.
*
* You may assume that each input would have exactly one solution.
*
* Example:
* Input: [2, 7, 11, 15], 9
* Output: [0, 1]
*/

/**
* twoSumBrute()
*
* Solution:
*
* The brute force approach is simple. Loop through each element (num) and find if
* there is another value that equals to target - num.
*
* Time: O(n^2)
* Space: O(1)
*
* For each element, we try to find its complement by looping through the rest of
* array. Nested loops usually means a quadratic runtime, which is the case here.
* We don't need any additional space. This runtime is not great, we can do better.
*
* @param {array} nums array of positve and negative integers
* @param {integer} target to sum pairs of nums to.
* @return {array} returns an array set of integers resulting in target, otherwise an epmty array
*/

function twoSumBrute(nums, target) {
  const result = [];

  // for each num, check every other num for complement
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === target - nums[i]) {
        result.push(i, j);
      }
    }
  }

  return result;
}

/**
* twoSumMap()
*
* Solution:
*
* To improve our run time complexity, we need a more efficient way to check if the
* complement exists in the array. If the complement exists, we need to look up its
* index.
*
* We reduce the look up time from O(n) to O(1) by trading space for speed. A hash
* table is built exactly for this purpose, it supports fast look up in near constant
* time. We can use javascripts Map() object for this.
*
* Time: O(n)
* Space: O(n)
*
* @param {array} nums array of positve and negative integers
* @param {integer} target to sum pairs of nums to.
* @return {array} returns an array set of integers resulting in target, otherwise an empty array
*/

function twoSumMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

export { twoSumBrute, twoSumMap };
