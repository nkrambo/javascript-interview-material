
/**
* Range Sum Query in 2D Immutable Matrix
*
* Tags: Dynamic Programming, Bottom Up
* Leetcode: 304
*
* Given a 2D matrix matrix, find the sum of the elements inside the rectangle
* defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
*
* Example:
*
* Given matrix = [
*   [3, 0, 1, 4, 2],
*   [5, 6, 3, 2, 1],
*   [1, 2, 0, 1, 5],
*   [4, 1, 0, 1, 7],
*   [1, 0, 3, 0, 5]
* ]
*
* sumRegion(2, 1, 4, 3) → 8
* sumRegion(1, 1, 2, 2) → 11
* sumRegion(1, 2, 2, 4) → 12
*
* Note:
*
* 1. You may assume that the matrix does not change.
* 2. There are many calls to sumRegion function.
* 3. You may assume that row1 ≤ row2 and col1 ≤ col2.
*/

/**
* Your NumMatrix object will be instantiated and called as such:
*
* const obj = Object.create(NumMatrix).createNew(matrix)
* const param_1 = obj.sumRegion(row1, col1, row2, col2)
*/

/**
* NumMatrix()
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
*   T[i][j] = T[i-1][j] + T[i][j-1] + (matrix[i-1][j-1] - T[i-1][j-1])
*
*   +-------------------------------------+
*   |     |   0     1     2     3     4   |
*   +-------------------------------------+
*   |  0  |   0     0     0     0     0   |
*   +-------------------------------------+
*   |  1  |   0     2     2    -1     3   |
*   +-------------------------------------+
*   |  2  |   0     8    11    10    13   |
*   +-------------------------------------+
*   |  3  |   0    13    20    26    32   |
*   +-------------------------------------+
*   |  4  |   0    15    16    30    37   |
*   +-------------------------------------+
*
* Time: O(m * n)
* Space: O(m * n)
*
* Where m is the number of rows in the matrix and n is the number of columns.
* Once we have our result matrix, we can do query lookups in constant time O(1).
*
* @param {array} matrix of immutable of positive and negative integers
*/
//
// function NumMatrix(matrix) {
//
// }
//
// /**
// * @param {number} row1
// * @param {number} col1
// * @param {number} row2
// * @param {number} col2
// * @return {number} returns the sum of the elements defined in range
// */
//
// NumMatrix.prototype.sumRegion = (row1, col1, row2, col2) => {
//
// };
//
// export default NumMatrix;
