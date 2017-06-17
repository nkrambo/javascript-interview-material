
/**
* Wiggle Sequence
*
* Tags: Dynamic Programming, Greedy
* Leetcode: 376
*
* A sequence of numbers is called a wiggle sequence if the differences between
* successive numbers strictly alternate between positive and negative. The first
* difference (if one exists) may be either positive or negative. A sequence with
* fewer than two elements is trivially a wiggle sequence.
*
* For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences
* (6, -3, 5, -7, 3) are alternately positive and negative. In contrast, [1, 4, 7, 2, 5]
* and [1, 7, 4, 5, 5] are not wiggle sequences, the first because its first two
* differences are positive and the second because its last difference is zero.
*
* Given a sequence of integers, return the length of the longest subsequence that
* is a wiggle sequence. A subsequence is obtained by deleting some number of
* elements (eventually, also zero) from the original sequence, leaving the remaining
* elements in their original orde
*
* Examples:
*
* Input: [1, 7, 4, 9, 2, 5]
* Output: 6
* The entire sequence is a wiggle sequence.
*
* Input: [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
* Output: 7
* There are several subsequences that achieve this length. One is [1, 17, 10, 13, 10, 16, 8].
*
* Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
* Output: 2
*
* Follow up:
* Can you do it in O(n) time?
*/

/**
* wiggleMaxLength()
*
* Solution:
*
* Any element in the array could correspond to only one of the 3 possible states:
*
* 1. 'up' position, mean nums[i] > nums[i - 1]
* 2. 'down' position, means nums[i] < nums[i - 1]
* 3. 'equals' position, nums[i] === nums[i - 1]
*
* The approach here is to keep track of two variables 'up' and 'down'.
*
* As we iterate over the nums array, each element, nums[i], could be part of a rising
* wiggle or a falling wiggle, depeding on the element before it, nums[i - 1].
*
* The 'up' variable refers to the length of the longest wiggle subsequence obtained
* so far, considering the nums[i] element as the last element ending in an 'up' position.
*
* Similarly, the 'down' variable refers to the length of the longest wiggle
* subsequence obtained so far, considering the nums[i] element as the last element
* ending in an 'up' position.
*
* If nums[i] is in an 'up' position, it means the element before it must be in a
* down position. Therefore: up = down + 1.
*
* If nums[i] is in an 'down' position, it means the element before it must be in a
* up position. Therefore: down = up + 1.
*
* If nums[i] is in an 'equal' position, then up and down remain the same.
*
* For example:
*
* Each iteration our logic would calculate:
*
* nums: [2, 4, 5, 7, 5, 5, 7, 1, 2, 3]
* up  : [1, 2, 2, 2, 2, 2, 4, 4, 6, 6]
* down: [1, 1, 1, 1, 3, 3, 3, 5, 5, 5]
*
* Returns: 6
* As, up[up.length - 1] > down[down.length - 1]
*
* Time: O(n), traverse array once.
* Space: O(1), we only use 2 variables
* Where (n) is the number of elements in nums.
*
* @param {array} nums array of integers
* @return {number} returns length of longest wiggle sequence
*/

// function wiggleMaxLength(nums) {
//   // short-cicuit, return trivial wiggle
//   if (nums.length < 2) return nums.length;
//
//   let down = 1;
//   let up = 1;
//
//   for (let i = 1; i < nums.length; i += 1) {
//     // 'up' position
//     if (nums[i] > nums[i - 1]) {
//       up = down + 1;
//
//     // 'down' position
//     } else if (nums[i] < nums[i - 1]) {
//       down = up + 1;
//     }
//   }
//
//   // return the largest sequence
//   return Math.max(down, up);
// }

/**
* maxWiggleGreedy()
*
* Solution:
*
* As an alternative approach, we can do away with dynamic programming.
*
* We maintain a variable 'prevdiff', which is used to indicate whether the current
* subsequence of numbers lies in an increasing or decreasing wiggle.
*
* If prevdiff > 0, it indicates that we have found the increasing wiggle and are
* looking for a decreasing wiggle now. Thus, we update the length of the found
* subsequence when diff (nums[i] - nums[i - 1]) becomes negative. Similarly, if
* prevdiff < 0, we will update the count when diff (nums[i] - nums[i - 1]) becomes
* positive.
*
* When the complete array has been traversed, we get the required count, which
* represents the length of the longest wiggle subsequence.
*
* Time: O(n), traverse array once.
* Space: O(1)
* Where (n) is the number of elements in nums.
*
* @param {array} nums array of integers
* @return {number} returns length of longest wiggle sequence
*/

// function maxWiggleGreedy(nums) {
//   // short-cicuit, return trivial wiggle
//   if (nums.length < 2) return nums.length;
//
//   // diff the first 2 elements
//   let prevdiff = nums[1] - nums[0];
//   let count = prevdiff !== 0 ? 2 : 1;
//
//   // iterate from 3rd
//   for (let i = 2; i < nums.length; i += 1) {
//     const diff = nums[i] - nums[i - 1];
//     if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
//       count += 1;
//       prevdiff = diff;
//     }
//   }
//
//   return count;
// }
//
// export { wiggleMaxLength, maxWiggleGreedy };
