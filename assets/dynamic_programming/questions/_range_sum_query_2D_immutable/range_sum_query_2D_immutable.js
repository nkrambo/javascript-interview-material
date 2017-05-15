
/**
* Range Sum Query in 2D Immutable Matrix
*
* Tags: Bottom Up, Classic Problems
*
* Given a 2D matrix matrix, find the sum of the elements inside the rectangle
* defined by its upper left corner (r1, c1) and lower right corner (r2, c2).
*
* Example:
*
* const matrix = [[2, 0, -3, 4],
*                 [6, 3, 2, -1],
*                 [5, 4, 7, 3],
*                 [2, -6, 8, 1]];
*
* Input: matrix, [[1, 0], [2, 1]]
* Output: 18
*
* Note:
*
* 1. You may assume that the matrix does not change.
* 2. There are many calls to sumRegion function.
* 3. You may assume that r1 ≤ r2 and c1 ≤ c2.
*/

/**
* sumQuery()
*
* Solution:
*
* We can solve this one with dynamic programming. As usual, we start with a matrix
* to help us solve this one from the bottom-up.
*
* We need a matrix that is 1 column and 1 row larger than the input matrix. This
* will give us some simplicity when resolving our sub-problems.
*
* So what are we trying to solve at each cell?
*
* So, the formula is:
*
*     T[i][j] = T[i-1][j] + T[i][j-1] + (matrix[i-1][j-1] - T[i-1][j-1])
*
* +-------------------------------------+
* |     |   0     1     2     3     4   |
* +-------------------------------------+
* |  0  |   0     0     0     0     0   |
* +-------------------------------------+
* |  1  |   0     2     2    -1     3   |
* +-------------------------------------+
* |  2  |   0     8    11    10    13   |
* +-------------------------------------+
* |  3  |   0    13    20    26    32   |
* +-------------------------------------+
* |  4  |   0    15    16    30    37   |
* +-------------------------------------+
*
* Time: O(m * n)
* Space: O(m * n)
*
* Where m is the number of rows in the matrix and n is the number of columns.
* Once we have our result matrix, we can do query lookups in constant time O(1).
*
* @param {array} matrix of immutable of positive and negative integers
* @param {array} corners co-ordintates, top-left and bottom-right
* @return {number} returns the sum of the cells from corner co-ordinates
*/

// function sumQuery(matrix, corners) {
//
// }
//
// export default sumQuery;
