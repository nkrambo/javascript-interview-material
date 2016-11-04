
/**
* Set Bit
*
* Set bit shifts 1 over by i bits, creating a value like 00010000. By performing
* an OR with num, only the value at bit i will change. All other bits of the mask
* are zero and will not affect num.
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
