
/**
* Longest Palindromic Substring
*
* Tags: String
* Leetcode: 5
*
* Given a string, find the longest palindromic substring of that string. You may
* assume that the maximum length of the string is 1000, and there exists one
* unique longest palindromic substring.
*
* Example 1:
*
* Given "babad"
* Return "bab"
* Note: "aba" is also a valid answer.
*
* Example 2:
*
* Given "cbbd"
* Return "bb"
*/

/**
* longestPalindrome()
*
* Solution:
*
* Time: O(n^3)
* Space: O(1)
*
* @param {string} s string of (n <= 1000) length
* @return {string} returns longest palindromic substring of s
*/

let max = 0;

for (let i = 0; i < s.length; i += 1) {
  for (let j = i + 1; j <= s.length; j += 1) {
    if (allUnique(s, i, j)) {
      max = Math.max(max, j - i)
    }
  }
}

return max;

function longestPalindromeBrute(s) {
  let result = '';

  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j <= s.length; j += 1) {
      if (isPalindrome(s, i, j)) {

      }
    }
  }

  return result;
}

/**
* isPalindrome()
*
* @param {string} s string to check if palindromic
* @param {number} left index
* @param {number} right index
* @return {boolean} returns true if s is palindromic, otherwise false
*/

function isPalindrome(s, left, right) {
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

export { longestPalindromeBrute, isPalindrome };
