
/**
* Longest Increasing Subsequence
*
* Tags: Dynamic Programming, Binary Search
* Leetcoed: 300
*
* Given an unsorted array of integers, find the length of longest increasing
* subsequence.
*
* Example:
*
* Given [10, 9, 2, 5, 3, 7, 101, 18]
*
* The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
* Note that there may be more than one LIS combination, it is only necessary for
* you to return the length.
*
* Your algorithm should run in O(n2) complexity.
*
* Follow up: Could you improve it to O(n log n) time complexity?
*/

/**
* lengthOfLISBrute()
*
* Solution:
*
* The simplest approach is to try to find all increasing subsequences and then
* returning the maximum length of longest increasing subsequence. In order to do
* this, we make use of a recursive helper function which returns the length of the
* LIS possible from the current element(corresponding to curpos) onwards(including
* the current element). Inside each function call, we consider two cases:
*
* 1. The current element is larger than the previous element included in the LIS.
*    In this case, we can include the current element in the LIS. Thus, we find
*    out the length of the LIS obtained by including it. Further, we also find out
*    the length of LIS possible by not including the current element in the LIS.
*    The value returned by the current function call is, thus, the maximum out of
*    the two lengths.
*
* 2. The current element is smaller than the previous element included in the LIS.
*    In this case, we can't include the current element in the LIS. Thus, we find
*    out only the length of the LIS possible by not including the current element
*    in the LIS, which is returned by the current function call.
*
* Time: O(n^n)
* Space: O(n^2)
*
* Where n is the length of 'nums'.
*
* @param {array} nums positive and negative integers
* @return {number} returns the longest increasing subsequence of nums
*/

function lengthOfLISBrute(nums) {
  return helper(nums, Number.MIN_VALUE, 0);
}

function helper(nums, prev, curpos) {
  // base case
  if (curpos === nums.length) return 0;

  let taken = 0;
  if (nums[curpos] > prev) {
    taken = 1 + helper(nums, nums[curpos], curpos + 1);
  }

  const nottaken = helper(nums, prev, curpos + 1);

  return Math.max(taken, nottaken);
}

/**
* lengthOfLIS()
*
* Solution:
*
* Firstly, it should be noted that this problem can be solved with a binary search
* implementation in O(n log n) runtime, which is faster than the polynomial time
* we achieve with this dynamic programming implementation. This alternative
* approach is under the 'Sorting and Seaching' section.
*
* With this dynamic programming approach, we can start with a single array instead
* of the matrix we normally see. Let's use our example from above.
*
* +------------------------------------------+
* |   3    4    -1     0     6     2     3   | nums
* +------------------------------------------+
* |   1    2     1     2     3     3     4   | DP
* +------------------------------------------+
*
* Let's step through this...
*
* On the top here we have the input sequence 'nums'. On the bottom, we have an
* array for tracking the results of increasing subsequences for pointers i, j.
* Let's call this array DP.
*
* Firstly, we know that a single value by itself is a valid increasing subsequence,
* therefore we know that if the input sequence has at least 1 value, we have a
* minimum valid increasing subsequence of 1. It makes sense then that we can
* initialise our DP array to all 1s, as each index of 'nums' is, by definition,
* its own increasing subsequence.
*
* So initally we have this...
*
* +------------------------------------------+
* |   3    4    -1     0     6     2     3   | nums
* +------------------------------------------+
* |   1    1     1     1     1     1     1   | DP
* +------------------------------------------+
*
* Now, remember we're looking for the longest 'increasing' subsequence, which means
* that we'll need to compare every value in 'nums', with every other value in
* 'nums' to see if values increase, decrease or are the same. Already we can see
* that we're probably looking at a polynomial runtime.
*
* To do this, we need two pointers, i, j. i is 1 step ahead and then for every i,
* we check every j (elements before) if the value is less. If the value is not
* less then we know that there is no 'increasing' sequence, so we skip. If the
* value is less, however, then we know we need to update results in DP at index i.
*
* If nums[j] is less than nums[i], we know that nums[i] result should, at least,
* be the result at nums[j], plus 1 to include itself. But, what if this result
* is less then what we already have at nums[i]? Well we take the max between the
* two, as after all, we're looking for the max subsequence.
*
*     j    i
* +------------------------------------------+
* |   3    4    -1     0     6     2     3   | nums
* +------------------------------------------+
* |   1    2     1     1     1     1     1   | DP
* +------------------------------------------+
*
* That's basically it... Once we traverse the nums array and build out our DP results,
* our final answer will be the maximum value in DP, 4 in this case.
*
* So the formula for this algorithm looks like the following:
*
*     if (nums[j] < nums[i]) {
*       T[i] = max(T[i], T[j] + 1)
*     }
*
* https://leetcode.com/problems/longest-increasing-subsequence/solution/
* http://www.geeksforgeeks.org/longest-increasing-subsequence/
* https://www.youtube.com/watch?v=CE2b_-XfVDk&t=2s
*
* Time: O(n^2)
* Space: O(n)
*
* Where n is the length of 'nums'.
*
* @param {array} nums positive and negative integers
* @return {number} returns the longest increasing subsequence of nums
*/

function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  // set DP to 1 by default, define result
  const dp = new Array(nums.length).fill(1);
  let result = 1;

  // solve sub-problems
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    // update max result
    result = Math.max(result, dp[i]);
  }

  return result;
}

export { lengthOfLISBrute, lengthOfLIS };
