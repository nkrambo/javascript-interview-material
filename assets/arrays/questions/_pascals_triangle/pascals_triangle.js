
/**
* Pascals Triangle
*
* Tags: Array,
* Leetcode: 118
*
* Given numRows, generate the first numRows of Pascal's triangle.
*
* For example, given numRows = 5,
*
* Return:
*
* [
*      [1],
*     [1, 1],
*    [1, 2, 1],
*   [1, 3, 3, 1],
*  [1, 4, 6, 4, 1]
* ]
*/

/**
* generate()
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
* Time: O(n^2)
* Space: O(n^2)
*
* @param {number} numRows number of lines of Pascal's
* @return {array | number [][]} of arrays n lines long
*/

// function generate(numRows) {
//   const result = [[1], [1, 1]];
//
//   if (numRows === 1) return [[1]];
//   if (numRows === 2) return result;
//
//   for (let row = 2; row < numRows; row += 1) {
//     result[row] = [1];
//
//     for (let col = 1; col <= row - 1; col += 1) {
//       result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
//       result[row].push(1);
//     }
//   }
//
//   return result;
// }
//
// export default generate;
