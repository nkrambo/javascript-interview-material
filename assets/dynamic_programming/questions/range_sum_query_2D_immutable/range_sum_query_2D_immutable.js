
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
* 3. You may assume that row1 ≤ row2 and col1 ≤ col2.
*/

/**
* sumQuery()
*
* Solution:
*
*
* +-------------------------+
* |   0     1     1     1   |
* +-------------------------+
* |   1     2     3     4   |
* +-------------------------+
* |   1     3     6    10   |
* +-------------------------+
* |   1     4    10    20   |
* +-------------------------+
*
* Time: O(1)
* Space: O(1)
*
* Where ...
*
* @param {array} matrix of immutable of positive and negative integers
* @param {array} corners co-ordintates, top-left and bottom-right
* @return {number} returns the sum of the cells from corner co-ordinates
*/

function sumQuery(matrix, corners) {

}

export default sumQuery;
