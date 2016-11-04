
/**
* Get Bit
*
* This method shifts 1 over by i bits, creating a value that looks like 00010000.
* By performing an AND with num, we clear all bits other than the bit at bit i.
* Finally, we compare that to 0. If that new value is not zero, then bit i must
* have a 1. Otherwise, bit i is a 0.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit number
* @param {number} i 32-bit number
* @return {number} Returns a 32-bit number
*/

function getBit(num, i) {

}

export default getBit;
