
/**
* Three Sum
*
* Tags: Array, Two Pointer
* Leetcode: 15
*
* Given an array nums of n integers, are there elements a, b, c in nums such that
* a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
*
* Example:
*
* Input: [-1, 0, 1, 2, -1, -4]
* Output: [[-1, 0, 1], [-1, -1, 2]]
*
* Note:
*
* The solution set must not contain duplicate triplets.
*/

/**
* threeSumBrute()
*
* Solution:
*
* Notice that we're told that all the triplet results must be unique. This is
* important. Consider the input of [0, 0, 0]. Without this stipulation, we would
* technically return the 6 permuations possible of the input. That's because we
* can make a triple of the input array as it is, then also if we swap the first
* 0 with the last... and so on.
*
* Further, what if we have an input of [0, 0, 0, 0, 0]. Now we have permuautions
* of the same 3 first 0s and also triplets using the rest of the input, that are
* also 0s, that give the same result. You can see why it's important to be clear
* about how your algorithm should handle duplicate triplets.
*
* So, because we're told to not return duplicates. If we get [0, 0, 0, 0, 0].
* We simply return [0, 0, 0].
*
* So, how would we brute force this problem?
*
* Well, we would use 3 pointers, i, j and k.
*
* [-1, 0, 1, 2, -1, -4]
*  ^   ^  ^
*  i   j  k
*
* We keep moving k, checking if {i, j, k} = 0. Once we've exhausted k, we then
* increment j and move k again.
*
* [-1, 0, 1, 2, -1, -4]
*  ^      ^     ^
*  i      j     k
*
* Once we've iterated all {j, k}. We move i and repeat the process.
*
* [-1, 0, 1, 2, -1, -4]
*      ^  ^  ^
*      i  j  k
*
* This will check all possible subsets triplets that may add up to 0.
*
* This gives us a cubic runtime, which is pretty bad.
*
* Time: O(n^3)
* Space: O(1)
*
* @param {number[]} nums
* @return {number[][]}
*/

function threeSumBrute(nums) {
  const result = [];

  // short-circuit, cannot solve for inputs of less than 3
  if (nums.length <= 2) return result;

  // 3 pointers
  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        // check if values sum to 0
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
}

/**
* threeSum()
*
* Solution:
*
* If you have done the 2sum – given a sorted array problem, then the solution
* here is exactly the same, except we must first sort or input.
*
* To solve this in O(n) time, we can keep two indices – one in the beginning (start)
* and the other in the end (end). If the sum of the current two numbers is greater
* than S, we move the end pointer backward by one step. If the sum is smaller than
* S, we move the start pointer forward by one step.
*
* When the two pointers meet each other, we know that no two numbers sum up to S.
* The reason we can make it O(n) is that the array is sorted and we don’t need to
* check all the combinations.
*
* We can use the same technique on the 3sum question. As 2sum solution, let's sort
* the array first. Now if we fix one number X in the array, the problem becomes finding 2 numbers that sum up to -X, which is exactly the 2sum question and can be solved in O(N) time.
*
* https://www.youtube.com/watch?v=-AMHUdZc9ss
*
* Time: O(n^2)
* Space: O(1)
*
* @param {number[]} nums
* @return {number[][]}
*/

function threeSum(nums) {
  const result = [];

  // short circuit, cannot solve with less than 3 items
  if (nums.length < 3) return result;

  // sort nums by increasing order O(n log n)
  // we pass in our comparison callback to sort from most negative to most positve, like [-3, -1, 1, 3]
  nums.sort((a, b) => a - b);

  // step over
  for (let i = 0; i < nums.length - 2; i += 1) {
    //
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      const sum = 0 - nums[i];
      let lo = i + 1;
      let hi = nums.length - 1;

      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          result.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo += 1;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi -= 1;

          lo += 1;
          hi -= 1;
        } else if (nums[lo] + nums[hi] < sum) {
          lo += 1;
        } else {
          hi -= 1;
        }
      }
    }
  }

  return result;
}

export { threeSum };
