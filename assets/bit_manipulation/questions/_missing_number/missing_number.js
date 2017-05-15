
/**
* Missing Number
*
* Types: Bit Manipulation, Triangular Series
*
* Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find
* the one that is missing from the array.
*
* Example:
* Input: [0, 1, 3]
* Output: 2
*
* Note:
* Your algorithm should run in linear runtime complexity. Could you implement it
* using only constant extra space complexity?
*
* Solution:
*
// nums = [0, 1, 3, 4, 5]
// index go from 1 to 5
// res starts with 0
// perform xor so that index and num will cancel out leaving the odd num alone
*
* Time: O(1)
* Space: O(1)
*
* @param {array} nums array of distinct numbers 0, 1, 2, 3 ... n
* @return {number} Returns the missing number from the sequence
*/

// function missingNumber(nums) {
//   let missing = 0;
//
//   for (let i = 1; i <= nums.length; i += 1) {
//     missing = missing ^ i ^ nums[i - 1];
//   }
//
//   return missing;
// }
//
// export default missingNumber;
