
/**
* Clear Bit
*
* This method operates in almost the reverse of setBit. First, we create a number
* like 11101111 by creating the reverse of it (00010000) and negating it. Then, we
* perform an AND with num. This will clear the ith bit and leave the remainder
* unchanged.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit number
* @param {number} i 32-bit number
* @return {number} Returns a 32-bit number
*/

function clearBit(num, i) {
  const mask = ~(1 << i);
  return num & mask;
}

export default clearBit;
