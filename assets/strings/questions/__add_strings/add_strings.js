
/**
* Add Strings
*
* Given two non-negative numbers num1 and num2 represented as string, return
* the sum of num1 and num2.
*
* Notes:
*
* 1. The length of both num1 and num2 is < 5100.
* 2. Both num1 and num2 contains only digits 0-9.
* 3. Both num1 and num2 does not contain any leading zero.
* 4. You must not use any built-in library or convert the inputs to integer directly.
*/

/**
* addStrings()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {string} num1 string representation of number < 5100, containing only 0-9
* @param {string} num2 string representation of number < 5100, containing only 0-9
* @return {number} returns sum of num1 and num2 as integer
*/

function addStrings(num1, num2) {

  // type check
  if (typeof num1 !== 'string' || typeof num2 !== 'string') {
    throw new TypeError('addStrings: Expects 2 arguments of [string] type.');
  }

  
}

export default addStrings;
