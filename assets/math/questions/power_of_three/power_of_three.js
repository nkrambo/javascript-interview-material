
/**
* Power of Three
*
* Tags: Math
* Leetcode: 326
*
* Given an integer, write a function to determine if it is a power of three.
*
* Follow up:
*
* Could you do it without using any loop / recursion?
*/

/**
* isPowerOfThree()
*
* Solution:
*
* One simple way of finding out if a number n is a power of a number b is to keep
* dividing n by b, as long as the remainder is 0, then n must be a power of b.
*
* This is because n = b^x, is the same as n = b * b ... * b.
*
* Hence it should be possible to divide n by b x times, every time with a remainder
* of 0 and the end result to be 1.
*
* Notice that we need a guard to check that n !== 0, otherwise the while loop will
* never finish. For negative numbers, the algorithm does not make sense, so we will
* include this guard as well.
*
* Time: O(log(3) n) The number of divisions is given by that logarithm.
* Space: O(1)
*
* @param {number} n number to check if power of three
* @return {boolean} returns true if n is a power of three, otherwise false
*/

function isPowerOfThree(n) {
  if (n < 1) return false;

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
}

export default isPowerOfThree;
