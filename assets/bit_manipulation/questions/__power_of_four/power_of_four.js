
/**
* Power of Four
*
* Types: Bit Manipulation
*
* Given an integer (signed 32 bits), write a function to check whether it is a
* power of 4.
*
* Example:
* Input: 16
* Output: true
*
* Example:
* Input: 5
* Output: false
*
* Follow up:
* Could you solve it without loops/recursion?
*
* Solution:
*
* // return (Math.log(num) / Math.log(4)) % 1 === 0;
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit unsigned integer
* @return {boolean} Returns true if num is a power of 4, otherwise false
*/

function powerOfFour(num) {
  // return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
  return num <= 0 ? false : (num & (num - 1)) === 0 && (num - 1) % 3 === 0;
}

export default powerOfFour;
