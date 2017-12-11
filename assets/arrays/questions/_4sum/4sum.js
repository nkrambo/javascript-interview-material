
/**
* 4Sum
*
* Tags: Array, Map, Two Pointer
* Leetcode: 18
*
* Given an array S of n integers, are there elements a, b, c and d in S such that
* a + b + c + d = target? Find all unique quadruplets in the array which gives the
* sum of target.
*
* Note:
*
* The solution set must not contain duplicate quadruplets.
*
* Example:
*
* Given [1, 0, -1 0, -2, 2], and target 0
* Return
* [
*   [-1, 0, 0, 1],
*   [-2, -1, 1, 2],
*   [-2, 0, 0, 2]
* ]
*/

/**
* fourSum()
*
* Solution:
*
* The trick to solving this one is to reduce the problem into 3Sum and then 2Sum.
*
* Similar to what we do with the 3sum problem.
*
* https://www.sigmainfy.com/blog/4sum-problem-analysis-different-time-complexity.html
*
* Time: O(n^3)
* Space: O(1)
*
* @param {number[]} nums
* @param {number} target
* @return {number[][]}
*/

function fourSum(nums, target) {
  const result = [];

  // short circuit
  if (nums.length < 4) return result;

  // sort
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 4; i += 1) {
    // let quadruplet[0] = nums[i];
    const quadruplet = [nums[i]];
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 3; j += 1) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      quadruplet[1] = nums[j];
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (left > j + 1 && nums[left] === nums[left - 1]) {
          left += 1;
          continue;
        }

        const sumOver = nums[i] + nums[j] + nums[left] + nums[right];
        if (sumOver === target) {
          quadruplet[2] = nums[left++];
          quadruplet[3] = nums[right--];
          result.push(quadruplet);
        } else if (sumOver < target) {
          left += 1;
        } else {
          right -= 1;
        }
      }
    }
  }

  return result;
}

export default fourSum;
