
/**
* Permutations
*
* Tags: Backtracking
* Leetcode: 46
*
* Given a collection of distinct numbers, return all possible permutations.
*
* Example:
*
* [1, 2, 3] have the following permutations:
*
* [
*   [1, 2, 3],
*   [1, 3, 2],
*   [2, 1, 3],
*   [2, 3, 1],
*   [3, 1, 2],
*   [3, 2, 1],
* ]
*/

/**
* permute()
*
* Solution:
*
* Combinatorics mathematics tells us that there are !nums.length permutations in
* a set with distinct values. That is, !n permutations. Using our example above
* we can see that this would be n = 3, so 3 * 2 * 1 = 6 possible permutations,
* which is what we have.
*
* https://www.youtube.com/watch?v=nYFd7VHKyWQ
* http://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
*
* Time: O(n * !n)
* Space: O(1)
*
* There are n! permutations and it requires O(n) time to print a a permutation.
*
* @param {number[]} nums
* @return {number[][]}
*/

function permute(nums) {
  const permutations = [];

  backtrack(permutations, [], nums);

  return permutations;
}

function backtrack(permutations, tempList, nums) {
  // we found a new permutation
  if (tempList.length === nums.length) {
    permutations.push([...tempList]);

  // otherwise, keep going
  } else {
    for (let i = 0; i < nums.length; i += 1) {
      if (tempList.includes(nums[i])) continue; // element already exists, skip
      tempList.push(nums[i]);
      backtrack(permutations, tempList, nums);
      tempList.pop();
    }
  }
}

export default permute;
