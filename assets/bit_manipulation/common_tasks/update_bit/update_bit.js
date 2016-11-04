
/**
* Update Bit
*
* To set the ith bit to a value v, we first clear the bit at position i by using
* a mask that looks like 11101111. Then we shift the intended value, v, left by
* i bits. This will create a number with bit i equal to v and all other bits equal
* to 0. Finally, we OR these two numbers, updating the ith bit if v is 1 leaving it
* as 0 otherwise.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit number
* @param {number} i 32-bit number
* @param {boolean} bitIs1 true if bit at i is to be set to 1, otherwise false by default
* @return {number} Returns a 32-bit number
*/

function updateBit(num, i, bitIs1) {
  const value = bitIs1 ? 1 : 0;
  const mask = ~(1 << i);
  return (num & mask) | (value << i);
}

export default updateBit;
