
/**
* N-Queens
*
* Tags: Backtracking
* Leetcode: 51
*
* The n-queens puzzle is the problem of placing n queens on an n×n chessboard
* such that no two queens attack each other.
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
*
*
* Given an integer n, return all distinct solutions to the n-queens puzzle.
*
* Each solution contains a distinct board configuration of the n-queens' placement,
* where 'Q' and '.' both indicate a queen and an empty space respectively.
*
* For example, there exist two distinct solutions to the 4-queens puzzle:
*
* [
*   ['.Q..',  // Solution 1
*    '...Q',
*    'Q...',
*    '..Q.'],
*
*   ['..Q.',  // Solution 2
*    'Q...',
*    '...Q',
*    '.Q..']
* ]
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

// function solveNQueens(n) {
//
// }
