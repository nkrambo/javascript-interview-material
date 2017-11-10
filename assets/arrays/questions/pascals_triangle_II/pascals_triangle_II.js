
/**
* Pascals Triangle II
*
* Tags: Array,
* Leetcode: 119
*
* Given an index k, return the kth row of the Pascal's triangle.
*
* For example, given k = 3,
*
* Return [1, 3 , 3, 1].
*
* Note:
*
* Could you optimize your algorithm to use only O(k) extra space?
*/

/**
* getRow()
*
* Solution:
*
* In mathematics, Pascal's Triangle is a triangular array of the binomial coefficients.
*
* The rows of Pascal's triangle are conventionally enumerated starting with row
* n = 0 at the top (the 0th row). The entries in each row are numbered from the
* left beginning with k = 0 and are usually staggered relative to the numbers in
* the adjacent rows. The triangle may be constructed in the following manner: In
* row 0 (the topmost row), there is a unique nonzero entry 1. Each entry of each
* subsequent row is constructed by adding the number above and to the left with
* the number above and to the right, treating blank entries as 0.
*
* For example, the initial number in the first (or any other) row is 1 (the sum
* of 0 and 1), whereas the numbers 1 and 3 in the third row are added to produce
* the number 4 in the fourth row.
*
*               1
*             1   1           Each number is the sum of
*           1   2   1         the two directly above it.
*         1   3   3   1
*       1   4   6   4   1
*
* This is basically a simple form of dynamic programming, going bottom up.
*
* We build each row using the values from the previous row, specifically, each
* value at T[r][c] = T[r-1][c] + T[r-1][c-1]. Pretty simple. Of course we need
* some values to get us going, so we set the results initially to [[1], [1, 1]],
* and we catch any edge cases that may fall under this.
*
* Also, note that we'll need to start iterating our rows from the 3rd onward, as
* we've already started the results. In addition, we need to start iterating each
* column from the 1st and end 1 from the last, these two values will always be 1,
* in Pascal's triangle. We need to make sure we insert 1's at the start and end
* of each row. If we didn't do this, we wouldn't be abble to grab values for T[r-1][c-1]
* as they wouldn't exist.
*
* @param {number} rowIndex
* @return {number[]}
*/

function getRow(rowIndex) {
  const T = [[1], [1, 1]];

  // catch edge cases
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  // start from 3rd row
  for (let row = 2; row <= rowIndex; row += 1) {
    // add row with initial 1
    T[row] = [1];

    // we have to iterate in-between the first and last 1's
    for (let col = 1; col <= row - 1; col += 1) {
      T[row][col] = T[row - 1][col] + T[row - 1][col - 1];
      // add next value as 1, will get over-written unless last
      T[row].push(1);
    }
  }

  // return the kth row
  return T[rowIndex];
}

export default getRow;
