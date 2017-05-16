
/**
* Rotate Matrix
*
* Tags: Matrix
*
* Given an image represented by an (n * n) matrix, where each pixel in the image is 4
* bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/**
* rotateMatrix()
*
* Solution:
*
* We start off my doing a stringent type check to make sure we have a valid matrix.
* We can do a quick return if the matrix is too small to rotate, only 1 x 1.
*
* The best approach is to tackle this in layers. We perform a cicular rotation on
* each layer, moving the top edge to the right edge, the right edge to the bottom
* edge, the bottom edge to the left edge, and the left edge to the top edge.
* Essentially, a four-way edge swap.
*
* We do this swap index by index. We perform such a swap on each layer, starting
* from the outermost layer and working our way inwards. Alternatively, we could
* start from the inner layer and work outwards.
*
* Time: O(n^2)
* Space: O(n)
* Where n is the length of the string input.
*
* This is the best we can do because we must touch all elements.
*
* @param {array} matrix (n * n) array of arrays
* @return {array} returns the same rotated array
*/

function rotateMatrix(matrix) {
  // cannot rotate a 1, 1 matrix
  if (matrix.length < 2) return matrix;

  // iterate the layers
  for (let layer = 0; layer < matrix.length / 2; layer += 1) {
    const first = layer;
    const last = matrix.length - layer - 1;

    // iterate indexs and swap
    for (let i = first; i < last; i += 1) {
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

export default rotateMatrix;
