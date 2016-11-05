
/**
* Counting Bits
*
* Types: Bit Manipulation
*
* Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num
* calculate the number of 1's in their binary representation and return them as
* an array.
*
* Example:
* Input: 5
* Output: [0, 1, 1, 2, 1, 2]
*
* Follow up:
*
* 1. It is very easy to come up with a solution with run time O(n * sizeof(integer)).
*    But can you do it in linear time O(n) /possibly in a single pass?
*
* 2. Space complexity should be O(n).
*
* 3. Can you do it like a boss? Do it without using any built-in functions.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num non negative integer
* @return {array} Returns an array of the number of 1s in the binary representation of numbers i in the range 0 ≤ i ≤ num
*/

function countingBits(num) {
  let result = [0];

  for (let i = 1; i <= num; i += 1) {
    result[i] = (result[i] || 0) + result[i & (i - 1)] + 1;
  }

  return result;
}

export default countingBits;
