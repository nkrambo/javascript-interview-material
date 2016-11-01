
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
* over each character and partition it into 'left' and 'right' and index j.
*
* Now we can check for 2 cases.
*
* 1. If our map contains a value equal to the 'left', and the 'right' is a valid
*    palindrome. So, word = map.has(left) + isPalindrome(right), then we push the
*    indices of the 'left' and our current 'i' to results. This covers case 3.
*
* 2. Same for checking the 'right' side of our current word. If the map contains
*    a value equal to the 'right' and the 'left' is a valid palindrome.
*    So, word = isPalindrome(left) + map.has(right). Then we push a result in the
*    same fashion. This covers case 4.
*
* Because a single character, like 'a' and a space, '', are considered valid palindromes,
* we cover our cases 1 and 2. That is, 'left' or 'right' is the complete reverse
* of another string in the words array. And.. also if we have a single occurance
* of a space, '', and have a string that is a valid palindrome by itself.
*
* Notice we also check that we don't pull out the reverse of our current index.
*
* Then simply return results.
*
* Time: O(n * k^2)
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

      // partition string at index j, left and right
      const left = word.substring(0, j);
      const right = word.substring(j);

      // case 3:
      // Our current word has the (prefix) reverse of another word in our map,
      // and a valid palindrome (suffix).
      //
      //   +---left---+---right---+
      //   |   abcdd  |    cba    |

      if (map.has(left) && isPalindrome(right) && map.get(left) !== i) {
        pairs.push([i, map.get(left)]);
      }

      // case 4:
      // Our current word is the (suffix) reverse of another word in our map,
      // which has a valid palindrome (prefix)
      //
      //   +---left---+---right---+
      //   |    abc   |   ddcba   |

      if (map.has(right) && isPalindrome(left) && map.get(right) !== i) {
        pairs.push([map.get(right), i]);
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

export default palindromePairsHash;
