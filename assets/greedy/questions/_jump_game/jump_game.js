
/**
* Jump Game
*
* Types: Greedy
*
* Given an array of non-negative integers, you are initially positioned at the
* first index of the array.
*
* Each element in the array represents your maximum jump length at that position.
*
* Determine if you are able to reach the last index.
*
* Note:
*
* You do not have to hit the last index exactly, just surpass it.
*
* Example 1:
*
* Given [2, 3, 1, 1, 4]
* Return true
*
* Example 2:
*
* Given [3, 2, 1, 0, 4]
* Return false
*/

/**
* canJump()
*
* Solution:
*
*
*
* Time: O(n)
* Space: O(1)
*
* @param {array} nums representing maximum jump at each position
* @return {boolean} returns true if can reach the last index, otherwise false
*/

// I just iterate and update the maximal index that I can reach

// The basic idea is this: at each step, we keep track of the furthest reachable
// index. The nature of the problem (eg. maximal jumps where you can hit a range
// of targets instead of singular jumps where you can only hit one target) is that
// for an index to be reachable, each of the previous indices have to be reachable.
//
// Hence, it suffices that we iterate over each index, and If we ever encounter
// an index that is not reachable, we abort and return false. By the end, we will
// have iterated to the last index. If the loop finishes, then the last index is
// reachable.

// function canJump(nums) {
//   let i = 0;
//
//   for (let reach = 0; i < nums.length && i <= reach; i += 1) {
//     reach = Math.max(i + nums[i], reach);
//   }
//
//   return i === nums.length;
// }
//
//
// // Idea is to work backwards from the last index. Keep track of the smallest index
// // that can "jump" to the last index. Check whether the current index can jump to
// // this smallest index.
//
// function canJumpAlt(nums) {
//   let max = 0;
//
//   for (let i = 0; i < nums.length; i += 1) {
//     if (i > max) return false;
//     max = Math.max(nums[i] + i, max);
//   }
//
//   return true;
// }
//
// export { canJump, canJumpAlt };
