
/**
* Set Bit
*
* Set bit shifts 1 over by i bits, creating a value like 00010000. By performing
* an OR with num, only the value at bit i will change. All other bits of the mask
* are zero and will not affect num. Keep in mind that bit indexing is zero based.
*
* Example:
* Input: 6, 5
* Output: 38
*
* So, our input represented as their binary numbers are:
*
* 00000110   num (6)
* 00000101   i (5)
*
* We create a mask by shifting 1 over by i bits, represented as (1 << i)
*
* 00100000   mask (1 << i)
*
* Then we OR together our num and mask, meaning only the value at bit i will change
* because 0 OR 0 = 0; 0 OR 1 = 1.
*
* 00000110   num (6)
*    OR
* 00100000   mask (1 << i)
*
* This gives us our result...
*
* 00100110   result (38)
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit number
* @param {number} i 32-bit number
* @return {number} Returns a 32-bit number with set bit at i
*/

function setBit(num, i) {
  return num | (1 << i);
}

export default setBit;
