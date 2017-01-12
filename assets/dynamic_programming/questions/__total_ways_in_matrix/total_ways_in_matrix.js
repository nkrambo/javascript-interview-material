
/**
* Total Ways in Matrix
*
* Tags: Bottom Up, Classic Problems
*
* Given a 2 dimensional matrix, how many ways you can reach bottom right from top
* left provided you can only move down and right.
*/

/**
* totalWays()
*
* Solution:
*
* +-----+------------------------------------------------------------------------+
* |     |   0    1     2     3     4     5     6     7     8     9     10    11  |
* +------------------------------------------------------------------------------+
* |  2  |   T    F     T     F     F     F     F     F     F     F     F     F   |
* +------------------------------------------------------------------------------+
* |  3  |   T    F     T     T     F     T     F     F     F     F     F     F   |                                                                  |
* +------------------------------------------------------------------------------+
* |  7  |   T    F     T     T     F     T     F     T     F     T     T     F   |
* +------------------------------------------------------------------------------+
* |  8  |   T    F     T     T     F     T     F     T     T     T     T     T   |
* +------------------------------------------------------------------------------+
* |  10 |   T    F     T     T     F     T     F     T     T     T     T     T   |
* +------------------------------------------------------------------------------+
*
*
* So, the formula is:
*
*     if (j < nums[i]) {
*       T[i][j] = T[i-1][j]
*     } else {
*       T[i][j] = T[i-1][j-1] || T[i-1][j-nums[i]]
*     }
*
* Time: O(1)
* Space: O(1)
*
* Where...
*
* @param {array} matrix
* @return {number} returns the number of ways to reach bottom right from top left
*/

function totalWays() {

}

export default totalWays;
