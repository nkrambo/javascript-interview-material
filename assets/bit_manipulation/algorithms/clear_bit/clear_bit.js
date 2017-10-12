
/**
* Clear Bit
*
* This method operates in almost the reverse of setBit. First, we create a number
* like 11101111 by creating the reverse of it (00010000) and negating it. Then,
* we perform an AND with num. This will clear the ith bit and leave the remainder
* unchanged. By 'clear', we mean set to 0 if the ith bit is currently 1.
*
* Example:
* Input: 6, 2
* Output: 2
*
* So, our input represented as their binary numbers are:
*
* 00000110   num (6)
* 00000010   i (2)
*
* We create a mask by shifting 1 over by i bits, represented as (1 << i) but then
* we negate it using the NOT operand '~'.
*
* 00000100   normal mask (1 << i)
* 11111011   negated mask
*
* Then if we simply AND together our num and negated mask, we get our result because
* we only clear the ith bit. 1 AND 1 = 1; 0 AND 1 = 0;
*
* 00000110   num (6)
*   AND
* 11111011   negated mask
*
* We get our result of 2...
*
* 00000010
*/

/**
* clearBtest()
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit number
* @param {number} i 32-bit number
* @return {number} Returns a 32-bit number
*/

function clearBtest(num, i) {
  const mask = ~(1 << i);
  return num & mask;
}

export default clearBit;
