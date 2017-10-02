
/**
* Palindrome Number
*
* Tags: Math
* Leetcode: 9
*
* Determine whether an integer is a palindrome. Do this without extra space.
*
* Some hints:
*
* Could negative numbers be palindromes? (ie, -1)
*
* If you are thinking of converting the integer to string, note the restriction
* of using extra space.
*
* You could also try reversing an integer. However, if you have solved the problem
* "Reverse Integer", you know that the reversed integer might overflow. How would
* you handle such a case?
*
* There is a more generic way of solving this problem.
*/

/**
* isPalindrome()
*
* Solution:
*
*
* Time: O(log(10) n)
* Space: O(1)
*
* We divided the input by 10 for every iteration, so the time complexity is O(log(10) n)
*
* @param {number} x
* @return {boolean}
*/

// function isPalindrome(x) {
//   // special cases:
//   // 1. when x < 0, x is not a palindrome.
//   // 2. if the last digit is 0, the first digit must also be 0 to be a palindrome
//   if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
//
//   let revertedNumber = 0;
//   while (x > revertedNumber) {
//     revertedNumber = (revertedNumber * 10) + (x % 10);
//     x /= 10;
//   }
//
//   // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
//   // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
//   // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
//   return x === revertedNumber || x === revertedNumber / 10;
// }
//
// export default isPalindrome;
