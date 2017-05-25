
/**
* Get Bit
*
* This method shifts 1 over by i bits, creating a value that looks like 00010000.
* By performing an AND with num, we clear all bits other than the bit at bit i.
* Finally, we compare that to 0. If that new value is not zero, then bit i must
* have a 1. Otherwise, bit i is a 0.
*
* Example:
* Input: 6, 2
* Output: true
*
* So, our input represented as their binary numbers are:
*
* 00000110   num (6)
* 00000010   i (2)
*
* We create a mask by shifting 1 over by i bits, represented as (1 << i).
*
* 00000100   mask (1 << i)
*
* Then we simply AND together num and our mask, which will clear all bits except i.
* Then we can just return if i = 0 or not.
*
* 00000110   num (6)
*   AND
* 00000100   mask (1 << i)
*/

/**
* getBit()
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit number
* @param {number} i 32-bit number
* @return {number} Returns a 32-bit number
*/

function getBit(num, i) {
  return ((num & (1 << i)) !== 0);
}

export default getBit;
