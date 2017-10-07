
/**
* Remove Duplicates from Sorted Array
*
* Tags: Array Two Pointers
* Leetcode: 26
*
* Given a sorted array, remove the duplicates in place such that each element
* appear only once and return the new length.
*
* Do not allocate extra space for another array, you must do this in place with
* constant memory.
*
* Example:
*
* Given [1, 1, 2]
*
* Your function should return length = 2, with the first two elements of nums
* being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

/**
* removeDuplicates()
*
* Solution:
*
* Since the array is already sorted, we can keep two pointers i and j, where i is
* the slow-runner while j is the fast-runner. As long as nums[i] = nums[j], we
* increment j to skip the duplicate.
*
* When we encounter nums[j] ≠ nums[i], the duplicate run has ended so we must copy
* its value to nums[i + 1]. i is then incremented and we repeat the same process
* again until j reaches the end of array.
*
* Time: O(n)
* Assume that n is the length of array. Each of i and j traverses at most n steps.
*
* Space: O(1)
*
* @param {number[]} nums
* @return {number}
*/

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

export default removeDuplicates;
