
/**
* Palindrome Pairs
*
* Given a list of unique words. Find all pairs of distinct indices (i, j) in the
* given list, so that the concatenation of the two words, i.e. words[i] + words[j]
* is a palindrome.
*
* Example:
* Input: ['bat', 'tab', 'cat']
* Output: [[0, 1], [1, 0]]
* The palindromes are ['battab', 'tabbat']
*
* Example:
* Input: ['abcd', 'dcba', 'lls', 's', 'sssll']
* Output: [[0, 1], [1, 0], [3, 2], [2, 4]]
* The palindromes are ['dcbaabcd', 'abcddcba', 'slls', 'llssssll']
*/

/**
* palindromePairs()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} words array of unique strings
* @return {array} returns an array of distinct indices, representing valid palindromes
*/

function palindromePairs(words) {

  // type check
  if (!Array.isArray(words)) {
    throw new TypeError('palindromePairs: Expects a single argument of [array] type.');
  }
}

// is palindrome
function isPalindrome(str) {
  
}

export default palindromePairs;
