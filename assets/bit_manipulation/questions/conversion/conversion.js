
/**
* Conversion
*
* Write a function to determine the number of bits you would need to flip
* to convert integer A to integer B.
*
* Example:
* Input: 29 (or: 11101), 15 (or: 01111)
* Output: 2
*
* Solution:
*
* This seemingly complex problem is actually rather straightforward. To approach
* this, we need to know which bits in two numbers are different. Simple, we can
* XOR them.
*
* Each 1 in the XOR represents a bit that is different between a and b. Therefore,
* to check the number of bits that are different between a and b, we simply need
* to count the number of bits in a ^ b that are 1.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} a integer, base
* @param {number} b integer to convert a to
* @return {number} Returns number of bits required to flip
*/

function conversion(a, b) {
  let count = 0;

  for (let c = a ^ b; c !== 0; c >>= 1) {
    count += c & 1;
  }

  return count;
}

export default conversion;
