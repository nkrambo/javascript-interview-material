
/**
* Two Sum
*
* Tags: Map, Classic
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
* @return {array} returns an array set of integers resulting in target, otherwise null
*/

function twoSumBrute(nums, target) {
  // edge cases, minimum 2
  if (nums.length < 2) {
    throw new Error('twoSum: nums[] must be a minimum length of 2.');
  }

  // for each num, check every other num for complement
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }

  return null;
}

/**
* twoSumHash()
*
* Solution:
*
* To improve our run time complexity, we need a more efficient way to check if the
* complement exists in the array. If the complement exists, we need to look up its
* index. What is the best way to maintain a mapping of each element in the array
* to its index? A hash table.
*
* We reduce the look up time from O(n) to O(1) by trading space for speed. A hash
* table is built exactly for this purpose, it supports fast look up in near constant
* time. I say 'near' because if a collision occurred, a look up could degenerate
* to O(n) time. But look up in hash table should be amortized O(1) time as long as
* the hash function was chosen carefully.
*
* A simple implementation uses two iterations. In the first iteration, we add each
* element's value and its index to the table. Then, in the second iteration we
* check if each element's complement (target - nums[i]) exists in the table. Beware
* that the complement must not be nums[i] itself!
*
* Time: O(n)
* Space: O(n)
*
* We traverse nums containing n elements exactly twice. Since the hash table reduces
* the look up time to O(1), we get a O(n) runtime. The extra space required depends
* on the number of items stored in the hash table, which stores exactly n elements.
*
* @param {array} nums array of positve and negative integers
* @param {integer} target to sum pairs of nums to.
* @return {array} returns an array set of integers resulting in target, otherwise null
*/

function twoSumHash(nums, target) {
  const map = new Map();

  // build hash
  nums.forEach((num, i) => {
    map.set(num, i);
  });

  // check for complement
  for (let [i, num] of nums.entries()) {
    const complement = target - num;
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return null;
}

export { twoSumBrute, twoSumHash };
