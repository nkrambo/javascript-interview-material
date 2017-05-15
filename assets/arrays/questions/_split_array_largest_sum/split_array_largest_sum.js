
/**
* Split Arary Largest Sum
*
* Types: Binary Search, Greedy
*
* Given an array which consists of non-negative integers and an integer m, you
* can split the array into m non-empty continuous sub arrays. Write an algorithm
* to minimize the largest sum among these m subarrays.
*
* Example:
* Input: [7, 2, 5, 10, 8], 2
* Output: 18
*
* There are four ways to split nums into two subarrays. The best way is to split
* it into [7, 2, 5] and [10, 8], where the largest sum among the two subarrays
* is only 18.
*/

/**
* splitArray()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} nums array of positive integers ≤ 14,000
* @param {number} m number of times to split array, 1 ≤ m ≤ length(nums)
* @return {number} return the largest sum amoung m arrays
*/

// function splitArray(nums, m) {
//   let max = 0;
//   let sum = 0;
//
//   // edge case
//   if (m === 1) return sum;
//
//   for (let num = 0; num < nums.length; num += 1) {
//     max = Math.max(num, max);
//     sum += num;
//   }
//
//   //binary search
//   let left = max;
//   let right = sum;
//
//   while (left <= right) {
//     const mid = (left + right) / 2;
//
//     if (valid(mid, nums, m)) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//
//   return left;
// }
//
// function valid(target, nums, m) {
//   let count = 1;
//   let total = 0;
//
//   for (let num = 0; num < nums.length; num +=1 ) {
//     total += num;
//
//     if (total > target) {
//       total = num;
//       count += 1;
//
//       if (count > m) return false;
//     }
//   }
//
//   return true;
// }
//
// export default splitArray;
