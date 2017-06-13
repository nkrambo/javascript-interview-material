
/**
* Sudoku Solver
*
* Tags: Backtracking, Map
* Leetcode: 37
*
* Write a program to solve a Sudoku puzzle by filling the empty cells.
*
* Empty cells are indicated by the character '.'.
*
* You may assume that there will be only one unique solution.
*
* Example:
*
*             Given the following Sudoku board.
*
*   +-----------------+-----------------+-----------------+
*   |  5  |  3  |  .  |  .  |  7  |  .  |  .  |  .  |  .  |
*   |-----------------------------------------------------|
*   |  6  |  .  |  .  |  1  |  9  |  5  |  .  |  .  |  .  |
*   |-----------------------------------------------------|
*   |  .  |  9  |  8  |  .  |  .  |  .  |  .  |  6  |  .  |
*   +-----------------+-----------------+-----------------+
*   |  8  |  .  |  .  |  .  |  6  |  .  |  .  |  .  |  3  |
*   |-----------------------------------------------------|
*   |  4  |  .  |  .  |  8  |  .  |  3  |  .  |  .  |  1  |
*   |-----------------------------------------------------|
*   |  7  |  .  |  .  |  .  |  2  |  .  |  .  |  .  |  6  |
*   +-----------------+-----------------+-----------------+
*   |  .  |  6  |  .  |  .  |  .  |  .  |  2  |  8  |  .  |
*   |-----------------------------------------------------|
*   |  .  |  .  |  .  |  4  |  1  |  9  |  .  |  .  |  5  |
*   |-----------------------------------------------------|
*   |  .  |  .  |  .  |  .  |  8  |  .  |  .  |  7  |  9  |
*   +-----------------+-----------------+-----------------+
*
* Return:
*
*   +-----------------+-----------------+-----------------+
*   |  5  |  3  |  4  |  6  |  7  |  8  |  9  |  1  |  2  |
*   |-----------------------------------------------------|
*   |  6  |  7  |  2  |  1  |  9  |  5  |  3  |  4  |  8  |
*   |-----------------------------------------------------|
*   |  1  |  9  |  8  |  3  |  4  |  2  |  5  |  6  |  7  |
*   +-----------------+-----------------+-----------------+
*   |  8  |  5  |  9  |  7  |  6  |  1  |  4  |  2  |  3  |
*   |-----------------------------------------------------|
*   |  4  |  2  |  6  |  8  |  5  |  3  |  7  |  9  |  1  |
*   |-----------------------------------------------------|
*   |  7  |  1  |  3  |  9  |  2  |  4  |  8  |  5  |  6  |
*   +-----------------+-----------------+-----------------+
*   |  9  |  6  |  1  |  5  |  3  |  7  |  2  |  8  |  4  |
*   |-----------------------------------------------------|
*   |  2  |  8  |  7  |  4  |  1  |  9  |  6  |  3  |  5  |
*   |-----------------------------------------------------|
*   |  3  |  4  |  5  |  2  |  8  |  6  |  1  |  7  |  9  |
*   +-----------------+-----------------+-----------------+
*/

/**
* solveSudoku()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} board matrix NxN of positive integers, 1 - 9
* @return {void} returns nothing, modifies board in-place
*/

// function solveSudoku(board) {
//
// }
//
// export default solveSudoku;