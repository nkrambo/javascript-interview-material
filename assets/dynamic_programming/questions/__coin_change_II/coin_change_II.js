
/**
* Coin Change, Minimum Coins
*
* Tags: Bottom Up, Classic Problems
*
* Given a total and coins of certain denominations find number of ways total can
* be formed from coins assuming infinity supply of coins.
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
* |  1  |   0     0     0     0     0     0     0     0     0     0     0     0    |
* +--------------------------------------------------------------------------------+
* |  5  |   0     0     0     0     0     0     0     0     0     0     0     0    |
* +--------------------------------------------------------------------------------+
* |  6  |   0     0     0     0     0     0     0     0     0     0     0     0    |
* +--------------------------------------------------------------------------------+
* |  8  |   0     0     0     0     0     0     0     0     0     0     0     0    |
* +--------------------------------------------------------------------------------+
*
* Let's step through our grid.
*
*
* The formula for this is easy:
*
*     if (j >= denominations[i]) {
*       T[i][j] = T[i - 1][j]
*     } else {
*       T[i][j] = T[i - 1][j] + T[i][j - denominations[i]]
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
  const cols = total + 1; // 1 for value 0 in total
  const rows = denominations.length;
}

// cols = total + 1   # 1 for value 0 in total
// rows = len(coins)
// T = [[1 if col == 0 else 0 for col in range(cols)] for _ in range(rows)]
//
// for i in range(rows):
//     for j in range(cols):
//         if (i - 1) < 0:
//             continue
//         if j < coins[i]:
//             T[i][j] = T[i - 1][j]
//         else:
//             T[i][j] = T[i - 1][j] + T[i][j - coins[i]]
//
// return T[rows - 1][cols - 1]

export default coinMinimum;
