
/**
* Rotate Array
*
* Rotate an array of n elements to the right by k steps.
*
* Example:
* Input: [1, 2, 3, 4, 5, 6, 7], 3
* Output: [5, 6, 7, 1, 2, 3, 4]
*
* Try to come up as many solutions as you can, there are at least 3 different
* ways to solve this problem.
*/

/**
* rotateArrayBrute()
*
* Solution:
*
* The simplest brute force approach is to rotate all the elements of the array
* in k steps by rotating the elements by 1 unit in each step.
*
* Fairly simple. For every k steps, we grab the last element as the previous.
*
* Then... for every element in the array we swap the current value for it's previous,
* starting with swapping the first element with the last, then we step forward
* through the array as normal swapping the current with it's previous.
*
* Time: O(n * k)
* Space: O(1)
*
* All the numbers are shifted by one step - O(n), k times - O(k).
* No additional space needed.
*
* @param {array} nums array of integers
* @param {number} k number of steps to rotate
* @return {void} modify nums in-place
*/

function rotateArrayBrute(nums, k) {
  let temp;
  let prev;

  for (let i = 0; i < k; i += 1) {
    prev = nums[nums.length - 1];

    for (let j = 0; j < nums.length; j += 1) {
      temp = nums[j];
      nums[j] = prev;
      prev = temp;
    }
  }
}

export { rotateArrayBrute };
