
/**
* Update Bit
*
* To set the ith bit to a value v, we first clear the bit at position i by using
* a mask that looks like 11101111. Then we shift the intended value, v, left by
* i bits. This will create a number with bit i equal to v and all other bits equal
* to 0. Finally, we OR these two numbers, updating the ith bit if v is 1 leaving it
* as 0 otherwise.
*
* Example:
* Input: 6, 3, true
* Output: 14
*
* So, our input represented as their binary numbers are:
*
* 00000110   num (6)
* 00000011   i (3)
*
* We set our value to either 1 or 0 depending on our third argument.
*
* We create a mask by shifting 1 over by i bits, represented as (1 << i) but then
* we negate it using the NOT operand '~'.
*
* 00001000   normal mask (1 << i)
* 11110111   negated mask
*
* Then if we simply AND together our num and negated mask to clear the bit at i.
*
* Finally, we can OR our cleared number with the ith bit.
*/

/**
* updateBit()
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
