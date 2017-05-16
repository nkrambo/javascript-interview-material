
/**
* First Unique Character in String
*
* Tags: Map
*
* Given a string, find the first non-repeating character in it and return it's
* index. If it doesn't exist, return -1.
*
* Example:
* Input: 'leetcode'
* Output: 0
*
* Example:
* Input: 'loveleetcode'
* Output: 2
*
* You may assume the string contain only lowercase letters.
*/

/**
* firstUniqueChar()
*
* Solution:
*
* We can solve this one using a Map.
*
* First we iterate the input string and save characters we come across as the keys
* in our map and set the value to the count of how many times these appear.
*
* We then iterate the string once more and return the index of the first character
* that only occurs once, otherwise we continue and return -1 by default.
*
* Time: O(n)
* Space: O(n)
*
* @param {string} str string of (n) length
* @return {number} returns index of first unique character, otherwise -1
*/

function firstUniqueChar(str) {
  // count chars
  const chars = new Map();
  for (const char of str) {
    chars.set(char, chars.get(char) + 1 || 1);
  }

  // grab first unique
  for (const char of str) {
    if (chars.get(char) === 1) {
      return str.indexOf(char);
    }
  }

  return -1;
}

export default firstUniqueChar;
