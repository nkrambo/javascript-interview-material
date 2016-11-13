
/**
* Conversion
*
* Write a function to determine the number of bits you would need to flip
* to convert integer A to integer B.
*
* Example:
*
* Input: 29 (or: 11101), 15 (or: 01111)
* Output: 2
*
* Solution:
*
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

  for (let c = a ^ b; c !== 0; c = c & (c - 1)) {
    count += 1;
  }

  return count;
}

export default conversion;
