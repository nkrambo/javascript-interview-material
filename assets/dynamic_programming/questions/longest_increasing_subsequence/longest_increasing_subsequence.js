
/**
* Longest Increasing Subsequence
*
* Tags: Bottom Up, Classic Problems
*
* Find a subsequence in given array in which the subsequence's elements are in
* sorted order, lowest to highest, and in which the subsequence is as long as possible.
*
* Example:
* Input: [3, 4, -1, 0, 6, 2, 3]
* Output: 4, [-1, 0, 2, 3]
*
* Example:
* Input: [2, 5, 1, 8, 3]
* Output: 3, [2, 5, 8]
*/

/**
* longestIncreasingSub()
*
* Solution:
*
* Firstly, it should be noted that this problem can be solved with a binary search
* implementation in O(n log n) runtime, which is faster than the polynomial time
* we achieve with this dynamic programming implementation. This alternative
* approach is under the 'Sorting and Seaching' section.
*
* With thiw dynamic programming approach, we can start with a single array instead
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
* Time: O(n^2)
* Space: O(n)
*
* Where n is the length of 'nums'.
*
* @param {array} nums positive and negative integers
* @return {number} returns the longest increasing subsequence of nums
*/

function longestIncreasingSub(nums) {
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

export default longestIncreasingSub;
