
/**
* Implement strStr()
*
* Tags: Two Pointers, String
* Leetcode: 28
*
* Implement strStr().
*
* Returns the index of the first occurrence of needle in haystack, or -1 if
* needle is not part of haystack.
*/

/**
* strStr()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {string} haystack string to search
* @param {string} needle search value
* @return {number} returns the index of needle within haystack, otherwise -1
*/

// function strStr(haystack, needle) {
//   for (let i = 0; i < haystack.length; i += 1) {
//     for (let j = 0; i < haystack.length; j === 1) {
//       if (j === needle.length) return i;
//       if (i + j === haystack.length) return -1;
//       if (needle.charAt(j) !== haystack.charAt(i + j)) break;
//     }
//   }
// }
//
// export default strStr;
