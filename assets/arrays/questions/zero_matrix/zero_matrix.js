
/**
* Zero Matrix
*
* Types:
*
* Write an algorithm such that if an element in an MxN matrix is 0, it's entire
* row and column are set to 0.
*
*/

/**
* zeroMatrix()
*
* Solution:
* At first glance, you might think that we could just iterate, looking for zeros,
* and set columns and rows accordingly. The problem with this is that soon the entire
* matrix will be set to zero.
*
* What we actually need to do, is first iterate the matrix to find all the co-ordinates
* of zeros and then iterate a second time to mutate rows and columns, in-place.
*
* Time: O(n^2)
* Space: O(m)
* Where n is the length of the string input.
* Where m is the number of zeros.
* This is the best runtime we can do, as we must touch each position in the matrix.
*
* @param {array} matrix A matrix MxN
* @return {array} returns the same modified array
*/

function zeroMatrix(matrix) {

  // type check
  if (!Array.isArray(matrix) || matrix.length === 0) {
    throw new TypeError('zeroMatrix: Expects a single argument of array.');
  }

  // find zero co-ordinates
  const positions = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        positions.push([i, j]);
      }
    }
  }

  // update matrix rows, columns
  while (positions.length) {
    const pos = positions.pop();
    const row = pos[0];
    const col = pos[1];

    // clear rows
    for (let i = 0; i < matrix[row].length; i += 1) {
      matrix[row][i] = 0;
    }

    // clear cols
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
}

export default zeroMatrix;
