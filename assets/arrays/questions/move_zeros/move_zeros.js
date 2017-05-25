
/**
* Move Zeros
*
* Tags: Two Pointer
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
* It's good to realize here that both the requirements are mutually exclusive, i.e.,
* you can solve the individual sub-problems and then combine them for the final
* solution.
*
* So.. that's exactly what we'll do.
*
* We start by counting up the zeros in nums. Then, we create a results array and
* build it from nums, grabbing out in-order only values that are not zeros. We
* then push the zeros onto the end of the results Finally, we update the nums
* input array to reflect the results array, so that we meet the 'in-place'
* requirement. Note, that if this wasn't a requirement we could simply return the
* results array as is.
*
* Time: O(n)
* Space: O(n)
*
* We iterate nums 3 times and also numZeros once as well. This means we get O(3n + 1),
* or simply a O(n) runtime. We create a results array which will always be exactly
* a length of n. Therefore, we have a O(n) space complexity as well.
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
  while (numZeroes > 0) {
    result.push(0);
    numZeroes -= 1;
  }

  // Combine the result, if you didn't need to do this in-place you could just
  // return results as is
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = result[i];
  }
}

/**
* moveZerosOptimal()
*
* Solution:
*
* This approach works the same way as above, i.e. , first fulfills one requirement
* and then another. The catch? It does it in a clever way.
* We can think of the problem as also trying to bring all the non-zero elements
* to the front of the array while keeping their relative order.
*
* This is a 2 pointer approach. The fast pointer does the job of processing new
* elements. If the newly found element is not a 0, we record it just after the
* last found non-zero element. The position of last found non-zero element is denoted
* by the slow pointer 'lastNonZeroFoundAt' variable. As we keep finding new non-zero
* elements, we just overwrite them at the 'lastNonZeroFoundAt + 1' 'th index.
*
* This overwrite will not result in any loss of data because we already processed
* what was there(if it were non-zero, it already is now written at it's corresponding
* index,or if it were 0 it will be handled later in time).
*
* After the fast index reaches the end of array, we now know that all the non-zero
* elements have been moved to beginning of array in their original order. Now comes
* the time to fulfil other requirement, 'Move all 0s to the end'. We now simply
* need to fill all the indexes after the 'lastNonZeroFoundAt' index with 0.
*
* Time: O(n)
* Space: O(1)
*
* With this approach we still have a O(n) runtime but we have improved our space
* complexity to constant time.
*
* @param {array} nums array of positve and negative integers
* @return {array} returns the same array with zeros moved to the end
*/

function moveZerosOptimal(nums) {
  let lastNonZeroFoundAt = 0;

  // If the current element is not 0, then we need to
  // append it just in front of last non 0 element we found.
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt += 1;
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
