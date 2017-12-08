
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
* https://www.youtube.com/watch?v=xouin83ebxE&t=933s
* https://www.youtube.com/watch?v=0DeznFqrgAI
*
* Time: O(1)
* Space: O(1)
*
* @param {number} n
* @return {string[][]}
*/
//
// function solveNQueens(n) {
//   const result = [];
//   const positions = new Array(n);
//   solve(0, positions, result, n);
//   return result;
// }
//
// function solve(row, positions) {
//   if (n == current) {
//       StringBuffer buff = new StringBuffer();
//       List<String> oneResult = new ArrayList<>();
//       for (Position p : positions) {
//           for (int i = 0; i < n; i++) {
//               if (p.col == i) {
//                   buff.append("Q");
//               } else {
//                   buff.append(".");
//               }
//           }
//           oneResult.add(buff.toString());
//           buff = new StringBuffer();
//
//       }
//       result.add(oneResult);
//       return;
//   }
//
//   for (int i = 0; i < n; i++) {
//       boolean foundSafe = true;
//       for (int j = 0; j < current; j++) {
//           if (positions[j].col == i || positions[j].col - positions[j].row == i - current || positions[j].row + positions[j].col == i + current) {
//               foundSafe = false;
//               break;
//           }
//       }
//       if (foundSafe) {
//           positions[current] = new Position(current, i);
//           solve(current + 1, positions, result, n);
//       }
//   }
// }
//
// export default solveNQueens;
