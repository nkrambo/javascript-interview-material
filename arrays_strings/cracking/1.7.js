
// assumptions: rotate clockwise
// you can only rotate a NxN matrix in place, not a NxM
// in place being, return the same array, instead of a new one

// http://stackoverflow.com/questions/21346343/traverse-an-array-diagonally

// rotate a matrix 90 degrees CW
// @param {array} matrix - NxN array of arrays
// @return {array} Returns the same rotated array

function rotateMatrix(matrix) {

  // type check
  if (!Array.isArray(matrix) ||
      matrix.length === 0 ||
      matrix.length !== matrix[0].length) {
    throw new Error('rotateMatrix(): Expects a single two dimensional array parameter NxN');
  }

  // cannot rotate a 1, 1 matrix
  if (matrix.length < 2) return matrix;

  for (let layer = 0; layer < matrix.length / 2; layer++) {
    const first = layer;
    const last = matrix.length - layer - 1;

    for (let i = first; i < last; i++) {
      const offset = i - first;

      // save top
      const top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }

  return matrix;
}










// transpose and the reverse rows, using new array
function rotateMatrix(matrix) {

  // type check
  if (!Array.isArray(matrix) ||
      matrix.length === 0 ||
      matrix.length !== matrix[0].length) {
    throw new Error('rotateMatrix(): Expects a single two dimensional array parameter NxN');
  }

  // cannot rotate a 1, 1 matrix
  if (matrix.length < 2) return matrix;

  const results = [];
  for (let i = 0; i < matrix.length; i++) {
    results.push([]);
  }

  // transpose
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      results[j].push(matrix[i][j]);
    };
  };

  // reverse
  results.map(function(row) {
    row.reverse();
  });

  return results;
}

