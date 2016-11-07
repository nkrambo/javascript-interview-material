
/**
* Power of Two
*
* Types: Bit Manipulation
*
* Given an integer, write a function to determine if it is a power of two.
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num to check is power of two
* @return {boolean} Returns true if num is a power of 2, otherwise false
*/

function powerOfTwo(num) {
  return num <= 0 ? false : (num & (num - 1)) === 0;
}

export default powerOfTwo;
