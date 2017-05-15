
/**
* Three Sum
*
* Types: 3sum Problem, Classic Problem, Two Pointer
*
* Given an array nums of n integers, are there elements a, b, c in nums such that
* a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
*
* Example:
* Input: [-1, 0, 1, 2, -1, -4]
* Output: [[-1, 0, 1],
*          [-1, -1, 2]]
*
* The solution set must not contain duplicate triplets.
*/

/**
* threeSum()
*
* Solution:
*
* Unlike the Two Sum problem, using a Hash Map here will only make things much more
* complicated. We therefore, take a different 'sorting' approach.
*
* Time: O(n^2)
* Space: O(1)
*
* @param {array} nums array of positve and negative integers
* @return {array} returns a matrix set of integers resulting in 0
*/

// function threeSum(nums) {
//   const result = [];
//
//   // type check
//   if (!Array.isArray(nums)) {
//     throw new TypeError('threeSum: Expects a single argument of [array] type.');
//   }
//
//   // edge case, minimum 3 intergers
//   if (nums.length < 3) {
//     throw new Error('nums[] must be a minimum of 3 integers.');
//   }
//
//   // sort nums by increasing order O(n log n)
//   // that is, from most negative to most positve, like [-3, -1, 1, 3]
//   nums.sort((a, b) => a > b);
//
//   // step over
//   for (let i = 0; i < nums.length - 2; i += 1) {
//
//     if (i === 0 || nums[i] > nums[i - 1]) {
//       const target = 0 - nums[i];
//       let j = i + 1;
//       let k = nums.length - 1;
//
//       while (j < k) {
//         if(nums[j] + nums[k] === target) {
//           result.push([nums[i], nums[j], nums[k]]);
//           j += 1;
//           k -= 1;
//
//           while (j < k && nums[j] === nums[j - 1]) {j += 1;}
//           while (j < k && nums[k] === nums[k + 1]) {k -= 1;}
//
//         } else if (nums[j] + nums[k] < target) {
//           j += 1;
//         } else {
//           k -= 1;
//         }
//       }
//     }
//   }
//
//   return result;
// }
//
// export default threeSum;
