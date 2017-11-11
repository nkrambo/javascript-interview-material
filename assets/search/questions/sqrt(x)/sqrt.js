
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
* http://www.geeksforgeeks.org/square-root-of-an-integer/
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
* Since sqrt(x) is composed of binary bits, we calculate sqrt(x) by deciding every
* bit from the most significant to least significant. Since an integer n can have
* O(log n) bits with each bit decided within constant time, this algorithm has time
* limit O(log n), actually, because an Integer can have at most 32 bits, we can
* also say this algorithm takes O(32) = O(1) time.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} x number
* @return {number} returns the square root of x
*/

function mySqrtBit(x) {
  // catch edge
  if (x === 0) return 0;

  // firstly, find the most significant bit
  let h = 0;
  while ((1 << h) * (1 << h) <= x) h += 1;

  h -= 1;
  let b = h - 1;
  let res = (1 << h);

  // find the remaining bits
  while (b >= 0) {
    if ((res | (1 << b)) * (res | (1 << b)) <= x) res |= (1 << b);
    b -= 1;
  }

  return res;
}

/**
* mySqrtBS()
*
* Solution:
*
* Let 's' be the answer.  We know that 0 <=  s <= x.
*
* Consider any random number r.
*
* If r * r <= x, s >= r
*
* If r * r > x, s < r.
*
* 1) Start with 'start' = 0, end = 'x',
*
* 2) Do following while 'start' is smaller than or equal to 'end'.
*
*   a) Compute 'mid' as (start + end)/2
*
*   b) compare mid * mid with x.
*
*   c) If x is equal to mid * mid, return mid.
*
*   d) If x is greater, do binary search between mid + 1 and end. In this case,
*      we also update ans (Note that we need floor).
*
*   e) If x is smaller, do binary search between start and mid-1
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
