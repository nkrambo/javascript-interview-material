
/**
* Word Search
*
* Tags: Array, Backtracking
* Leetcode: 79
*
* Given a 2D board and a word, find if the word exists in the grid.
*
* The word can be constructed from letters of sequentially adjacent cell, where
* "adjacent" cells are those horizontally or vertically neighboring. The same
* letter cell may not be used more than once.
*
* Example:
*
* Given:
*
* [
*   ['A', 'B', 'C', 'E'],
*   ['S', 'F', 'C', 'S'],
*   ['A', 'D', 'E', 'E'],
* ]
*
* Word: "ABCCED"  => true
* Word: "SEE"     => true
* Word: "ABCB"    => false
*/

/**
* exist()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {character[][]} board
* @param {string} word
* @return {boolean}
*/

function exist(board, word) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (dfs(board, i, j, word, 1)) return true;
    }
  }

  return false;
}

// check if we can find word, start at (i, j) position
function dfs(board, i, j, word, l) {
  // base case: all the characters are checked
  if (l === word.length) return true;

  // base case:
  if (i < 0 || j < 0 || i === board.length || j === board[0].length) return false;

  // base case:
  if (board[i][j] !== word[i]) return false;

  // perform a bitwise OR assignment to mark the current cell as visited.
  // the bitwise OR of any character will not be the letter which is
  // currently being looked for.
  board[i][j] ^= 256;

  // check all neighbors for existence of next letter.
  const result = dfs(board, i, j + 1, word, l + 1) // right
              || dfs(board, i, j - 1, word, l + 1) // left
              || dfs(board, i + 1, j, word, l + 1) // top
              || dfs(board, i - 1, j, word, l + 1); // bottom

  // perform a bitwise OR assignment to revert the visited cells to the
  // letter they held previously.  OR(OR(X)) = X
  board[i][j] ^= 256;

  return result;
}

export default exist;
