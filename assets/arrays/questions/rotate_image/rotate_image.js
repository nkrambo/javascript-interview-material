
/**
* Rotate Image
*
* Tags: Matrix
* Leetcode: 48
*
* You are given an n x n 2D matrix representing an image.
*
* Rotate the image by 90 degrees (clockwise).
*
* Follow up:
* Could you do this in-place?
*/

/**
* rotate()
*
* Solution:
*
* We start off my doing a stringent type check to make sure we have a valid matrix.
*
* We can do a quick return if the matrix is too small to rotate, only 1 x 1.
*
* This might not be completely intuitive but we can actually reverse the rows
* top to bottom and then swap out the symmetix values to rotate CW.
*
* CW rotate
* First reverse up to down, then swap the symmetry
*
*   1 2 3     7 8 9     7 4 1
*   4 5 6  →  4 5 6  →  8 5 2
*   7 8 9     1 2 3     9 6 3
*
* CCW rotate
* First reverse left to right, then swap the symmetry
*
*   1 2 3     3 2 1     3 6 9
*   4 5 6  →  6 5 4  →  2 5 8
*   7 8 9     9 8 7     1 4 7
*
* Time: O(n^2)
* Space: O(1)
*
* Where n is the length of the string input.
*
* This is the best we can do because we must touch all elements.
*
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/

function rotate(matrix) {
  // cannot rotate a 1, 1 matrix
  if (matrix.length < 2) return matrix;

  // first, reverse rows in-place, that is, up to down
  matrix.reverse();

  // second, swap the symmetry
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i + 1; j < matrix[i].length; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}

export default rotate;
