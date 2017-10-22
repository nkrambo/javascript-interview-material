
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

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  let r = 0;
  let c = 0;
  let di = 0;

  // iterate every position in matrix (R * C)
  for (let i = 0; i < R * C; i += 1) {
    // push value onto result
    spiral.push(matrix[r][c]);

    // update boolean matrix
    seen[r][c] = true;

    const cr = r + dr[di];
    const cc = c + dc[di];

    if (cr >= 0 && cr < R && cc >= 0 && cc < C && !seen[cr][cc]) {
      r = cr;
      c = cc;
    } else {
      di = (di + 1) % 4;
      r += dr[di];
      c += dc[di];
    }
  }

  return spiral;
}

/**
* spiralOrder()
*
* Solution:
*
* The answer will be all the elements in clockwise order from the first-outer layer,
* followed by the elements from the second-outer layer, and so on.
*
* We define the k-th outer layer of a matrix as all elements that have minimum
* distance to some border equal to k. For example, the following matrix has all
* elements in the first-outer layer equal to 1, all elements in the second-outer
* layer equal to 2, and all elements in the third-outer layer equal to 3.
*
* [[1, 1, 1, 1, 1, 1, 1],
*  [1, 2, 2, 2, 2, 2, 1],
*  [1, 2, 3, 3, 3, 2, 1],
*  [1, 2, 2, 2, 2, 2, 1],
*  [1, 1, 1, 1, 1, 1, 1]]
*
* For each outer layer, we want to iterate through its elements in clockwise order
* starting from the top left corner. Suppose the current outer layer has top-left
* coordinates (r1, c1) and bottom-right coordinates (r2, c2).
*
* Then, the top row is the set of elements (r1, c) for c = c1,...,c2, in that order.
* The rest of the right side is the set of elements (r, c2) for r = r1 + 1, ..., r2,
* in that order. Then, if there are four sides to this layer (ie., r1 < r2 and c1 < c2),
* we iterate through the bottom side and left side as shown in the solutions below.
*
* Time: O(1)
* Space: O(1)
*
* @param {number[][]} matrix
* @return {number[]}
*/

function spiralOrderLayers(matrix) {
  const spiral = [];

  // catch edge, empty matrix
  if (matrix.length === 0) return spiral;

  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c += 1) spiral.push(matrix[r1][c]);

    for (let r = r1 + 1; r <= r2; r += 1) spiral.push(matrix[r][c2]);

    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c -= 1) spiral.push(matrix[r2][c]);
      for (let r = r2; r > r1; r -= 1) spiral.push(matrix[r][c1]);
    }

    r1 += 1;
    r2 -= 1;
    c1 += 1;
    c2 -= 1;
  }

  return spiral;
}

export { spiralOrder, spiralOrderLayers };
