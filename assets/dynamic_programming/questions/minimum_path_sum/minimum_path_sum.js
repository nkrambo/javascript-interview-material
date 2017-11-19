
/**
* Minimum Path Sum
*
* Tags: Array, Dynamic Programming
* Leetcode: 64
*
* Given a m x n grid filled with non-negative numbers, find a path from top left
* to bottom right which minimizes the sum of all numbers along its path.
*
* Note: You can only move either down or right at any point in time.
*
* Example:
*
* [[1, 3, 1],
*  [1, 5, 1],
*  [4, 2, 1]]
*
* Given the above grid map, return 7. Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
*/

/**
* minPathSumBrute()
*
* Solution:
*
* The brute force approach involves recursion. For each element, we consider two
* paths, rightwards and downwards and find the minimum sum out of those two. It
* specifies whether we need to take a right step or downward step to minimize
* the sum.
*
* cost(i, j) = grid[i][j] + min(cost(i + 1, j), cost(i, j + 1))
*
* Time: O(2^(m + n)) - for every move, we have atmost 2 options.
* Space: O(m + n) - recursion of depth m + n.
*
* @param {number[][]} grid
* @return {number}
*/

function minPathSumBrute(grid) {
  return helper(grid, 0, 0);
}

function helper(grid, i, j) {
  // base 1: we are trying to compare values out of bounds, return an arbitrarily large number
  if (i === grid.length || j === grid[0].length) return Number.MAX_VALUE;

  // base 2: we hit the bottom right cell, the end of the path ... un-wind
  if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j];

  // take the smallest of down and right
  return grid[i][j] + Math.min(helper(grid, i + 1, j), helper(grid, i, j + 1));
}

/**
* minPathSum()
*
* Solution:
*
* We use an extra matrix dp of the same size as the original matrix. In this
* matrix, dp(i, j) represents the minimum sum of the path from the index (i, j)
* to the bottom rightmost element. We start by initializing the bottom rightmost
* element of dp as the last element of the given matrix. Then for each element
* starting from the bottom right, we traverse backwards and fill in the matrix
* with the required minimum sums. Now, we need to note that at every element, we
* can move either rightwards or downwards. Therefore, for filling in the minimum
* sum, we use the equation, taking care of the boundary conditions:
*
* dp(i, j) = grid(i, j) + min(dp(i + 1, j), dp(i, j + 1))
*
* https://leetcode.com/problems/minimum-path-sum/solution/
* http://www.geeksforgeeks.org/dynamic-programming-set-6-min-cost-path/
* https://www.youtube.com/watch?v=lBRtnuxg-gU
*
* Time: O(m * n) - we traverse the entire matrix once
* Space: O(m * n) - another matrix of the same size is used
*
* @param {number[][]} grid
* @return {number}
*/

function minPathSum(grid) {
  // create dp matrix
  const dp = [];
  for (let i = 0; i < grid.length; i += 1) {
    dp[i] = new Array(grid[0].length);
  }

  // step over backwards
  for (let i = grid.length - 1; i >= 0; i -= 1) {
    for (let j = grid[0].length - 1; j >= 0; j -= 1) {
      // we're at the bottom boundary, min cost is current + cell to the right
      if (i === grid.length - 1 && j !== grid[0].length - 1) {
        dp[i][j] = grid[i][j] + dp[i][j + 1];

      // we're at the right boundary, min cost is current + cell below
      } else if (j === grid[0].length - 1 && i !== grid.length - 1) {
        dp[i][j] = grid[i][j] + dp[i + 1][j];

      // we're inbounds, take the min of the right and down
      } else if (j !== grid[0].length - 1 && i !== grid.length - 1) {
        dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);

      // must be the bottom right, seed our dp
      } else {
        dp[i][j] = grid[i][j];
      }
    }
  }

  // return the first value, the toatal min cost
  return dp[0][0];
}

export { minPathSumBrute, minPathSum };
