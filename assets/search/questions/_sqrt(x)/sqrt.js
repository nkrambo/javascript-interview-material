
/**
* Sqrt(x)
*
* Tags: Binary Search, Math
* Leetcode: 69
*
* Implement sqrt(x).
*
* Compute and return the square root of x.
*/

/**
* mySqrt()
*
* Solution:
*
* This is one of those problems that can be solved in many ways.
*
* The 3 most popular methods are using:
*
* 1) Newton's method
* 2) Binary search
* 3) Bit manipulation
*
* We can use Newton's method for finding successively better approximations to the
* roots (or zeroes) of a real-valued function. It is one example of a root-finding
* algorithm.
*
* The idea of the method is as follows: one starts with an initial guess which is
* reasonably close to the true root, then the function is approximated by its tangent
* line and then computing the x-intercept of this tangent line. This x-intercept
* will typically be a better approximation to the function's root than the original
* guess, and the method can be iterated.
*
* Time: O(1)
* Space: O(1)
*
* https://en.wikipedia.org/wiki/Integer_square_root#Using_only_integer_division
* https://en.wikipedia.org/wiki/Newton%27s_method
*
* @param {number} x number
* @return {number} returns the square root of x
*/

function mySqrt(x) {
  let r = x;
  while (r * r > x) {
    r = ((r + (x / r)) / 2) | 0;
  }

  return r;
}

/**
* mySqrtBit()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number} x number
* @return {number} returns the square root of x
*/

function mySqrtBit(x) {

}

/**
* mySqrtBS()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number} x number
* @return {number} returns the square root of x
*/

function mySqrtBS(x) {
  // catch edge
  if (x === 0) return 0;

  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;

  while (true) { // eslint-disable-line no-constant-condition
    const mid = Math.floor((left + right) / 2);

    if (mid > x / mid) {
      right = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1)) return mid;
      left = mid + 1;
    }
  }
}

export { mySqrt, mySqrtBit, mySqrtBS };
