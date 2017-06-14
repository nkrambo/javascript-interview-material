
/**
* N-Queens II
*
* Tags: Backtracking
* Leetcode: 52
*
* Follow up for N-Queens problem.
*
* Now, instead outputting board configurations, return the total number of
* distinct solutions.
*
*
*          a     b     c     d     e     f     g     h
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    8  |     |     |     |  Q  |     |     |     |     |  8
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    7  |     |     |     |     |     |     |  Q  |     |  7
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    6  |     |     |  Q  |     |     |     |     |     |  6
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    5  |     |     |     |     |     |     |     |  Q  |  5
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    4  |     |  Q  |     |     |     |     |     |     |  4
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    3  |     |     |     |     |  Q  |     |     |     |  3
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    2  |  Q  |     |     |     |     |     |     |     |  2
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*    1  |     |     |     |     |     |  Q  |     |     |  1
*       +-----+-----+-----+-----+-----+-----+-----+-----+
*          a     b     c     d     e     f     g     h
*
*
*              One solution to the 8 queens problem
*/

/**
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {number} n number of rows and columns on a NxN chess board
* @return {array} returns all distinct solutions to the n-queens puzzle
*/

// function totalNQueens(n) {
//
// }
//
// export default totalNQueens;
