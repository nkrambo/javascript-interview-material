
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
* Output: [[1, 0], [0, 1], [3, 2], [2, 4]]
* The palindromes are ['dcbaabcd', 'abcddcba', 'slls', 'llssssll']
*
* Solution:
*
* This approach makes use  of a trie data structure.
*/

class palindromePairsTrie {
  constructor(words) {
    this.pairs = [];
  }

  isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
      if (str[start] !== str[end]) return false;
      start += 1;
      end -= 1;
    }

    return true;
  }
}

export default palindromePairsTrie;
