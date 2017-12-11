
/**
* Two Sum II
*
* Tags: Binary Search, Array, Two Pointers
* Leetcode: 167
*
* Given an array of integers that is already sorted in ascending order, find two
* numbers such that they add up to a specific target number.
*
* The function twoSum should return indices of the two numbers such that they add
* up to the target, where index1 must be less than index2. Please note that your
* returned answers (both index1 and index2) are not zero-based.
*
* You may assume that each input would have exactly one solution and you may not
* use the same element twice.
*
* Example:
*
* numbers = [2, 7, 11, 15], target = 9
* Returns [1, 2]
*/

/**
* twoSum()
*
* Solution:
*
* We can apply Two Sum's solutions directly to get O(n^2) time, O(1) space using
* brute force and O(n) time, O(n) space using hash table. However, both existing
* solutions do not make use of the property where the input array is sorted.
*
* We can do better.
*
* We use two pointers, initially pointing to the first and last element respectively.
* Compare the sum of these two elements with target. If the sum is equal to target,
* we found the exactly only solution. If it is less than target, we increase the
* smaller index by one. If it is greater than target, we decrease the larger index
* by one. Move the pointers and repeat the comparison until the solution is found.
*
* Let [... , a, b, c, ... , d, e, f, ...] be the input array that is sorted in
* ascending order and the element b, e be the exactly only solution. Because we
* are moving the smaller index from left to right, and the larger index from right
* to left, at some point one of the pointers must reach either one of b or e.
*
* Without loss of generality, suppose the smaller index reaches b first. At this
* time, the sum of these two elements must be greater than target. Based on our
* algorithm, we will keep moving the larger index to its left until we reach the
* solution.
*
* Time: O(n)
* Space: O(1)
*
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  // move inward
  while (left < right) {
    const sum = numbers[left] + numbers[right];

    // found target
    if (sum === target) {
      return [left + 1, right + 1];

    // too little, move left inward
    } else if (sum < target) {
      left += 1;

    // too much, move right inward
    } else {
      right -= 1;
    }
  }

  // no result found
  return [-1, -1];
}

export default twoSum;
