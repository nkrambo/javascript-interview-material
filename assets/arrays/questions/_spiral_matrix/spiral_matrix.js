
/**
* Spiral Matrix
*
* Tags: Array
* Leetcode: 54
*
* Given a matrix of m x n elements (m rows, n columns), return all elements of
* the matrix in spiral order.
*
* Example:
*
* Given the following matrix:
*
* [
*   [ 1, 2, 3 ],
*   [ 4, 5, 6 ],
*   [ 7, 8, 9 ],
* ]
*
* Return: [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

/**
* spiralOrder()
*
* Solution:
*
* Draw the path that the spiral makes.
*
* We know that the path should turn clockwise whenever it would go out of bounds
* or into a cell that was previously visited. If we use these simple rules, then
* we can derive a solution.
*
*
* Let the array have R rows and C columns. seen[r][c] denotes that the cell on the
* r-th row and c-th column was previously visited. Our current position is (r, c),
* facing direction di, and we want to visit R x C total cells.
*
* As we move through the matrix, our candidate next position is (cr, cc). If the
* candidate is in the bounds of the matrix and unseen, then it becomes our next
* position; otherwise, our next position is the one after performing a clockwise
* turn.
*
* Pretty simple...
*
* We need to build a boolean matrix to track the cells that we have seen already.
* It will reflect the input matrix and be initialized to false.
*
* We will also need to track the boundaries of the matrix and the direction.
*
* Time: O(n)
* Space: O(n)
*
* We add every element in the matrix to our final spiral answer, therefore our
* time complexity is n.
*
* We build a boolean matrix, that is seen, therefore our space complexity is also n.
*
* @param {number[][]} matrix
* @return {number[]}
*/

function spiralOrder(matrix) {
  const spiral = [];

  // catch edge, empty matrix
  if (matrix.length === 0) return spiral;

  // rows and columns
  const R = matrix.length;
  const C = matrix[0].length;

  // build boolean matrix, set all to false
  const seen = [];
  for (let i = 0; i < R; i += 1) {
    seen[i] = new Array(C).fill(false);
  }

  // set boundries
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  // indices and direction
  let r = 0;
  let c = 0;
  let dir = 0;

  // iterate every position in matrix (R * C)
  for (let i = 0; i < R * C; i += 1) {
    // push value onto result
    spiral.push(matrix[r][c]);

    // update boolean matrix
    seen[r][c] = true;

    // get candidate cell
    const cr = r + dr[dir];
    const cc = c + dc[dir];

    // if candidate is in bounds and hasn't been seen, move to candidate cell
    if (cr >= 0 && cr < R && cc >= 0 && cc < C && !seen[cr][cc]) {
      r = cr;
      c = cc;

    // otherwise, turn clockwise
    } else {
      dir = (dir + 1) % 4;
      r += dr[dir];
      c += dc[dir];
    }
  }

  return spiral;
}

/**
* spiralOrder()
*
* Solution:
*
* Even simpler than above... We don't need to track seen cells in a separate matrix
* and we don't need to track the direction of traversal.
*
* The answer will be all the elements in clockwise order from the first-outer layer,
* followed by the elements from the second-outer layer, and so on.
*
* We define the k-th outer layer of a matrix as all elements that have minimum
* distance to some border equal to k. For example, the following matrix has all
* elements in the first-outer layer equal to 1, all elements in the second-outer
* layer equal to 2, and all elements in the third-outer layer equal to 3.
*
*       [[1, 1, 1, 1, 1, 1, 1],
*        [1, 2, 2, 2, 2, 2, 1],
*        [1, 2, 3, 3, 3, 2, 1],
*        [1, 2, 2, 2, 2, 2, 1],
*        [1, 1, 1, 1, 1, 1, 1]]
*
* For each outer layer, we want to iterate through its elements in clockwise order
* starting from the top left corner. Suppose the current outer layer has top-left
* coordinates (rowBegin, colBegin) and bottom-right coordinates (rowEnd, colEnd).
*
* Then, the top row is the set of elements (rowBegin, i) for i = colBegin, ..., colEnd,
* in that order.
*
* The rest of the right side is the set of elements (i, colEnd) for i = rowBegin + 1, ..., rowEnd,
* in that order. Then, if there are four sides to this layer (ie., rowBegin < rowEnd and colBegin < colEnd),
* we iterate through the bottom side and left side as shown in the solutions below.
*
* Time: O(n)
* Space: O(n)
*
* @param {number[][]} matrix
* @return {number[]}
*/

function spiralOrderLayers(matrix) {
  const spiral = [];

  // catch edge, empty matrix
  if (matrix.length === 0) return spiral;

  // row pointers
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  // column pointers
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  // iterate over all layers
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // traverse 'right'
    for (let i = colBegin; i <= colEnd; i += 1) spiral.push(matrix[rowBegin][i]);

    // traverse 'down'
    for (let i = rowBegin + 1; i <= rowEnd; i += 1) spiral.push(matrix[i][colEnd]);

    // traverse 'left' and 'up', first check the row or col still exists to prevent duplicates.
    if (rowBegin < rowEnd && colBegin < colEnd) {
      for (let i = colEnd - 1; i > colBegin; i -= 1) spiral.push(matrix[rowEnd][i]);
      for (let i = rowEnd; i > rowBegin; i -= 1) spiral.push(matrix[i][colBegin]);
    }

    // move pointers inward, peel layers off, reducing array
    rowBegin += 1;
    rowEnd -= 1;
    colBegin += 1;
    colEnd -= 1;
  }

  return spiral;
}

export { spiralOrder, spiralOrderLayers };
