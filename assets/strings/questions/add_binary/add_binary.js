
/**
* Add Binary
*
* Tags: Math, String
* Leetcode: 67
*
* Given two binary strings, return their sum (also a binary string).
*
* Example:
*
* Given: "11", "1"
* Return: "100"
*/

/**
* addBinary()
*
* Solution:
*
* The idea is to start from last characters of two strings and compute digit sum
* one by one. If sum becomes more than 1, then store carry for next digits.
*
* http://www.geeksforgeeks.org/program-to-add-two-binary-strings/
* https://developer.mozilla.org/en-US/docs/Web/API/DOMString/Binary
*
* Time: O(1)
* Space: O(1)
*
* @param {string} a
* @param {string} b
* @return {string} returns the sum of a and b
*/

function addBinary(a, b) {
  // string builder
  const sb = [];

  // get string lengths and create carry
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  // step over both strings from last
  while (i >= 0 || j >= 0) {
    let sum = carry;

    // compute sum of last digits and carry
    if (j >= 0) sum += b.charAt(j--) - '0'; // eslint-disable-line no-plusplus
    if (i >= 0) sum += a.charAt(i--) - '0'; // eslint-disable-line no-plusplus

    // if current digit sum is 1 or 3, add 1 to result
    sb.push(parseInt(sum % 2, 0));

    // compute carry
    carry = parseInt(sum / 2, 0);
  }

  if (carry !== 0) sb.push(carry);

  // return string
  return sb.reverse().join('');
}

export default addBinary;
