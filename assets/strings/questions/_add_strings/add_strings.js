
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
* @return {string} returns sum of num1 and num2 as a string
*/

// function addStrings(num1, num2) {
//   let sum = '';
//   let carry = 0;
//   let i = num1.length - 1;
//   let j = num2.length - 1;
//
//   while (i >= 0 || j >= 0) {
//     if (i >= 0) carry += num1[i--] - '0';
//     if (j >= 0) carry += num2[j--] - '0';
//
//     sum = `${carry % 10}${sum}`;
//     carry = carry / 10;
//   }
//
//   return carry > 0 ? '1' + sum : sum;
// }
//
// export default addStrings;
