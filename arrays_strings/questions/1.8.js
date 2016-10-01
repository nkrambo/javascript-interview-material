
// Zero Matrix

// @param {array arrays} matrix A matrix MxN
// @return {array} Returns the same modified array

function zeroMatrix(matrix) {

  // type check
  if (!Array.isArray(matrix) || matrix.length === 0) {
    throw new Error('Not valid matrix');
  }

  const positions = [];

  // step through
  for (let i = 0; i < matrix.length; i++) {
    // puts us at O(n^2)
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        positions.push([i, j]);
      }
    }
  }

  while (positions.length) {
    const pos = positions.pop();
    const row = pos[0];
    const col = pos[1];

    // clear rows
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }

    // clear cols
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
}






/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrix(matrix) {
  if (!matrix) {
    throw new Error('invalid matrix');
  }
  if (matrix.length === 0) {
    return matrix;
  }

  let rows = new Array(matrix.length),
    cols = new Array(matrix[0].length);

  rows.fill(false);
  cols.fill(false);

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (rows[y] || cols[x]) {
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
}

