
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
* This approach makes use of a trie data structure.
*/

class palindromePairsTrie {
  constructor(words) {
    this.root = {};
    this.pairs = [];

    // add in words on construction
    words.forEach(word => {
      this.addWord(word);
    });

    // check for palindromes
    
  }

  /**
  * addWord()
  * Time: O(n)
  * Space: O(n)
  * Where n is the length of word
  *
  * @param {string} str string to check for palidrome properties
  * @return {boolean} returns true if str is a valid palindrome, otherwise false
  */

  addWord(word) {
    let current = this.root;
    let newWord = false;

    // Work downwards through the trie, adding nodes as needed, and keeping track
    // of whether we add any nodes.
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];

      // if we don't have current char
      if (!current.hasOwnProperty(char)) {
        newWord = true;
        current[char] = {};
      }

      // traverse
      current = current[char];
    }

    // Explicitly mark the end of a word. Otherwise, we might say a word is present
    // if it is a prefix of a different, longer word that was added earlier.
    if (!current.hasOwnProperty('*')) {
      newWord = true;
      current['*'] = {};
    }

    return newWord;
  }

  /**
  * isPalindrome()
  * Time: O(n)
  * Space: O(1)
  * Where n is the length of str
  *
  * @param {string} str string to check for palidrome properties
  * @return {boolean} returns true if str is a valid palindrome, otherwise false
  */

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
