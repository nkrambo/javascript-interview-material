
/**
* Zero Matrix
*
* Tags: Matrix
*
* Write an algorithm such that if an element in an MxN matrix is 0, it's entire
* row and column are set to 0.
*/

/**
* zeroMatrix()
*
* Solution:
*
* At first glance, you might think that we could just iterate, looking for zeros,
* and set columns and rows accordingly. The problem with this is that soon the
* entire matrix will be set to zero.
*
* What we actually need to do, is first iterate the matrix to find all the co-ordinates
* of zeros and then iterate a second time to mutate rows and columns, in-place.
*
* Time: O(n^2)
* Space: O(m)
*
* Where n is the length of the string input and m is the number of zeros. This is
* the best runtime we can do, as we must touch each position in the matrix.
*
* @param {array} matrix MxN
* @return {array} returns the same modified array
*/

function zeroMatrix(matrix) {

  // find zero co-ordinates
  const ords = [];
  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 0) ords.push([i, j]);
    });
  });

  // update matrix rows, columns
  ords.forEach((ord) => {

    // clear rows, we can use fill() horizontally
    matrix[ord[0]].fill(0);

    // clear cols, we must manually re-assign vertically
    matrix.forEach((el, index) => {
      matrix[index][ord[1]] = 0;
    });
  });

  return matrix;
}

export default zeroMatrix;
