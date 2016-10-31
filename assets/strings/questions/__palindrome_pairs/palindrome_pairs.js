
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
* palindromePairsHash()
*
* Solution:
*
* This approach makes use  of a hash map.
*
* Time: O(1)
* Space: O(1)
*
* @param {array} words array of unique strings
* @return {array} returns an array of distinct indices, representing valid palindromes
*/

function palindromePairsHash(words) {
  const pairs = [];

  // type check
  if (!Array.isArray(words)) {
    throw new TypeError('palindromePairs: Expects a single argument of [array] type.');
  }

  // place all words into a hash map for constant lookups, indices as values
  const map = new Map();
  for (let i = 0; i < words.length; i += 1) {
    map.set(words[i], i);
  }

  // iterate words again
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];

    for (let j = 0; j < word.length; j += 1) {
      const str1 = word.substring(0, j);
      const str2 = word.substring(j);

      if (isPalindrome(str1)) {
        const reversed = reverse(str2);
        if (map.get(reversed) !== undefined && map.get(reversed) !== i) {
          pairs.push([map.get(reversed), i]);
        }
      }

      if (isPalindrome(str2)) {
        const reversed = reverse(str1);
        if (str2.length && map.get(reversed) !== undefined && map.get(reversed) !== i) {
          pairs.push([i, map.get(reversed)]);
        }
      }
    }
  }

  return pairs;
}

/**
* palindromePairsTrie()
*
* Solution:
*
* This approach makes use  of a trie data structure.
*
* Time: O(1)
* Space: O(1)
*
* @param {array} words array of unique strings
* @return {array} returns an array of distinct indices, representing valid palindromes
*/

function palindromePairsTrie(words) {

}

/**
* isPalindrome()
*
* Solution:
*
* This is a simple healper method that checks if a string is a valid palidrome.
*
* To be considered a valid palindrome, a string must write the same ways forwards
* as it does backwards. Therefore, the first character must match the last character,
* the second character must match the second last character and so on, until we
* reach the middle. The middle character may or may not be a unique character, like
* in the valid plaindrome 'dad' for instance.
*
* This is quite easy to check. We start by grabbing the 'start' and 'end' of the
* string and check characters for matching, moving towwards the middle, returning
* false if we encounter a mis-match, otherwise true.
*
* Time: O(n)
* Space: O(n)
* Where n is the length of str
*
* @param {string} str string to check for palidrome properties
* @return {boolean} returns true if str is a valid palindrome, otherwise false
*/

function isPalindrome(str) {
  // grab the start and end of the string
  let start = 0;
  let end = str.length - 1;

  // work our way from either end, checking characters
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start += 1;
    end -= 1;
  }

  return true;
}

/**
* reverse()
*
* Solution:
*
* Simple helper to reverse a string. We could use the split('').reverse().join()
* approach, but we get a slightly better runtime writing our own method.
*
* Time: O(n)
* Space: O(n)
* Where n is the length of str
*
* @param {string} str string to check for palidrome properties
* @return {boolean} returns true if str is a valid palindrome, otherwise false
*/

function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }

  return reversed;
}

export { palindromePairsHash, palindromePairsTrie };
