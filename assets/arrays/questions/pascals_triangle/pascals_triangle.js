
/**
* Pascals Triangle
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
* Define a function that returns n lines of Pascal's Triangle.
*
* Time: O(n^2)
* Space: O(n^2)
*
* @param {number} n number of lines of Pascal's
* @return {array | number [][]} of arrays n lines long
*/

function pascalsTriangle(n) {
  const result = [[1], [1, 1]];

  if (n === 1) return [[1]];
  if (n === 2) return result;

  for (let row = 2; row < n; row += 1) {
    result[row] = [1];

    for (let col = 1; col <= row -1; col += 1) {
      result[row][col] = result[row-1][col] + result[row-1][col-1];
      result[row].push(1);
    }
  }

  return result;
}

// def combination(n, k):
//     if k == 0 or k == n:
//         return 1
//     return combination(n - 1, k - 1) + combination(n - 1, k)
//
// def pascals_triangle(rows):
//     for row in range( rows):
//         answer = ""
//         for column in range( row + 1):
//             answer = answer + str(combination(row, column)) + "\t"
//         print(answer)
//
// pascals_triangle(5)

export default pascalsTriangle;
