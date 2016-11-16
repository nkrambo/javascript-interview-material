
/**
* Move Zeros
*
* Types: Array Transformation
*
* Given an array nums, write a function to move all 0s to the end of it while
* maintaining the relative order of the non-zero elements.
*
* Example:
* Input: [0, 1, 0, 3, 12]
* Output: [1, 3, 12, 0, 0]
*
* Note:
* - You must do this in-place without making a copy of the array.
* - Minimize the total number of operations.
*/

/**
* moveZeros()
*
* Solution:
*
*
* Time: O(n)
* Space: O(n)
*
* @param {array} nums array of positve and negative integers
* @return {array} returns the same array with zeros moved to the end
*/

function moveZeros(nums) {
  // Count the zeroes
  let numZeroes = 0;
  for (let i = 0; i < nums.length; i += 1) {
    numZeroes += (nums[i] === 0);
  }

  // Make all the non-zero elements retain their original order.
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
  }

  // Move all zeroes to the end
  while (numZeroes--) {
    result.push(0);
  }

  // Combine the result
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = result[i];
  }
}

function moveZerosOptimal(nums) {
  let lastNonZeroFoundAt = 0;

  // If the current element is not 0, then we need to
  // append it just in front of last non 0 element we found.
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }

  // After we have finished processing new elements,
  // all the non-zero elements are already at beginning of array.
  // We just need to fill remaining array with 0's.
  for (let i = lastNonZeroFoundAt; i < nums.length; i += 1) {
    nums[i] = 0;
  }
}

export { moveZeros, moveZerosOptimal };
