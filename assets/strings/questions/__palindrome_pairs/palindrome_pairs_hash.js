
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
* Assumption: No duplicated strings in the 'words' array.
*/

/**
* palindromePairsHash()
*
* Solution:
*
* There are several cases to be considered when determining if two concatenated
* strings form a palindrome. Let's call them s1 and s2.
*
* 1. If s1 is an empty string (e.g, ''). Then for any s2 that is a valid palindrome,
*    (s1 + s2) and (s2 + s1) are also valid palindromes.
*
*   +---s1---+---s2---+
*   |        |   aba  |
*
* 2. If s2 is the reverse of s1. Then (s1 + s2) is a palindrome.
*
*   +---s1---+---s2---+
*   |   abc  |   cba  |
*
* 3. If s1 is longer than s2, has the (prefix) reverse of s2 and a palindrome (suffix).
*
*   +----s1---+---s2---+
*   |  abcdd  |  cba   |
*
* 4. If s2 is longer than s1, has a (prefix) palindrome and the (suffix) reverse of s1.
*
*   +---s1---+----s2---+
*   |  abc   |  ddcba  |
*
* To start with, if we analyse the above cases, we can see a common requirement
* occurring. In all cases, except 1 which is really an edge case anyways, we
* need to check the reverse of either s1 or s2 entirely or in part.
*
* This means it would be great to have quick access to these reverse values, and
* also the indices of these, so we can actually compose our results.
*
* We can use a hash map with a little helper function to achieve this. We compose
* reverse() function to reverse a string, then we iterate over our input 'words'
* array and build a map with reversed values as keys and indices as values.
*
* Now we have constant access to all these goodies to help us.
*
* Next, we'll iterate 'words' array again to handle each word separately.
*
* To actually handle our cases we need to consider each word character. We step
* over each character and partition it into 'prefix' and 'suffix' and index j.
*
* Now we can check for 2 cases.
*
* 1. If our map contains a value equal to the 'prefix', and the 'suffix' is a valid
*    palindrome. So, word = map.has(prefix) + isPalindrome(suffix), then we push the
*    indices of the 'prefix' and our current 'i' to results. This covers case 3.
*
* 2. Same for checking the 'suffix' side of our current word. If the map contains
*    a value equal to the 'suffix' and the 'prefix' is a valid palindrome.
*    So, word = isPalindrome(prefix) + map.has(suffix). Then we push a result in the
*    same fashion. This covers case 4.
*
* Because a single character, like 'a' and a space, '', are considered valid palindromes,
* we cover our cases 1 and 2. That is, 'prefix' or 'suffix' is the complete reverse
* of another string in the words array. And.. also if we have a single occurance
* of a space, '', and have a string that is a valid palindrome by itself. We compose
* a simple helper function to check if a string is valid palindrome.
*
* Also notice that we track the position of each word, i.e, index 'i'.
* This is to avoid the situation like ['c'], i.e. the word itself is a palindrome.
* We don't want to concatenate 'cc' as a palindrome. So we check:
* 1. The key in the map is different from the current word.
* 2. If they are the same, they must have different indices.
*
* Notice we also check that we don't pull out the reverse of our current index.
*
* Then simply return results.
*
* Time: O(n * k^2)
* Space: O(n)
*
* Where (n) is the length of the 'words' array input, and (k) is the average
* length of each word.
*
* It can be further optimized to O(n * k) if we use a modified version of Manacher's
* algorithm to find the longest palindromic sub-string up to a certain index.
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

  // edge case
  if (words.length < 2) {
    throw new Error('palindromePairsHash: Words[] must have a minimum length of 2.');
  }

  // build a map of reversed words as keys and indices as values
  const map = new Map();
  for (let i = 0; i < words.length; i += 1) {
    map.set(reverse(words[i]), i);
  }

  // iterate and handle each word
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];

    // step over characters
    for (let j = 0; j < word.length; j += 1) {

      // partition string at index j, prefix and suffix
      const prefix = word.substring(0, j);
      const suffix = word.substring(j);

      // case 3:
      // Our current word has the prefix reverse (s1 - 'abc') of another word in our map,
      // and a valid palindrome suffix, (s1 - 'dd').
      //
      //   +----s1----+-----s2----+
      //   |   abcdd  |    cba    |

      if (map.has(prefix) && isPalindrome(suffix) && map.get(prefix) !== i) {
        pairs.push([i, map.get(prefix)]);
      }

      // case 4:
      // Our current word is the suffix (s1 - 'abc') reverse of another word in our map,
      // which has a valid palindrome prefix, (s2 - 'dd').
      //
      //   +----s1----+-----s2----+
      //   |    abc   |   ddcba   |

      if (map.has(suffix) && isPalindrome(prefix) && map.get(suffix) !== i) {
        pairs.push([map.get(suffix), i]);
      }

      // We also check against the current index i, to make sure we do not include
      // that. The above logic also covers us for cases 1 and 2.
    }
  }

  return pairs;
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
* false if we encounter a mis-match, otherwise true. It's a simple two pointer
* solution.
*
* Time: O(n)
* Space: O(1)
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

export default palindromePairsHash;
