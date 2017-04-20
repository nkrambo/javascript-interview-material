
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
* Time: O(n)
* Space: O(n)
*
* @param {number} n number of lines of Pascal's
* @return {array} of n lines long
*/

function pascalsTriangle(n) {

}

export default pascalsTriangle;