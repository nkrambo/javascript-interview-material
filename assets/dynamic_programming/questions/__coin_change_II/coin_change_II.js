
/**
* Coin Change, Minimum Coins
*
* Tags: Bottom Up, Classic Problems
*
* Given a total and coins of certain denominations find number of ways total can
* be formed from coins assuming infinity supply of coins.
*
* Assume that the denominations will always be sorted.
*
* Example:
* Input: 11, [1, 5, 6, 8]
* Output: 1, [5, 6]
*/

/**
* coinMinimum()
*
* Solution:
*
* Across the top we have 0 to 'total' and down the side we have the coin 'denominations'.
*
* +-----+--------------------------------------------------------------------------+
* |     |   0     1     2     3     4     5     6     7     8     9     10    11   |
* +--------------------------------------------------------------------------------+
* |     |   ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞    |
* +--------------------------------------------------------------------------------+
* |  1  |   0     1     2     3     4     5     6     7     8     9     10    11   |
* +--------------------------------------------------------------------------------+
* |  5  |   0     1     2     3     4     1     2     3     4     5     2     3    |
* +--------------------------------------------------------------------------------+
* |  6  |   0     1     2     3     4     1     1     2     3     4     2     2    |
* +--------------------------------------------------------------------------------+
* |  8  |   0     1     2     3     4     1     1     2     1     2     2     2    |
* +--------------------------------------------------------------------------------+
*
* Let's step through our grid.
*
*
* The formula for this is easy:
*
*     if (j < denominations[i]) {
*       T[i][j] = T[i - 1][j]
*     } else {
*       T[i][j] = min(T[i - 1][j], T[i][j - denominations[i]] + 1)
*     }
*
* Time: O(n * k)
* Space: O(n * k)
*
* Where n is the number of coins and k is the total.
*
* @param {number} total change required
* @param {array} denominations available
* @return {number} returns the minimum number of coins require to make total
*/

function coinMinimum(total, denominations) {
  const cols = total + 1; // add 1 for 0 col
  const rows = denominations.length + 1; // add 1 for Infinity row

  // build matrix, 0s by default
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = new Array(cols).fill(0);
  }

  // add Infinity row
  matrix[0].fill(Infinity);

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {

      if (j < denominations[i-1]) {
        matrix[i][j] = matrix[i-1][j];

      } else {
        matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-denominations[i-1]] + 1);
      }
    }
  }

  return matrix[rows-1][cols-1];
}

export default coinMinimum;
