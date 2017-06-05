
/**
* Isomorphic Strings
*
* Tags: Map, String
* Leetcode: 205
*
* Given two strings s and t, determine if they are isomorphic.
*
* Two strings are isomorphic if the characters in s can be replaced to get t.
*
* All occurrences of a character must be replaced with another character while
* preserving the order of characters. No two characters may map to the same
* character but a character may map to itself.
*
* Example:
* Input: 'egg', 'add'
* Output: true
*
* Example:
* Input: 'foo', 'bar'
* Output: false
*
* Example:
* Input: 'paper', 'title'
* Output: true
*
* You may assume both s and t have the same length.
*/

/**
* isIsomorphic()
*
* Solution:
*
* Even though the question says that both input strings will be the same length,
* we write a quick check for this and return false anyways.
*
* We can approach this one using a Map.
*
* We iterate s and map each character as the 'key' and the corresponding t
* character as 'value'.
*
* If the character is already in the map, we compare it with t's character.
* If it's not the same, then we know that the strings are not isomprphic.
*
* Time: O(n)
* Space: O(n)
*
* Where (n) is the length of s
*
* @param {string} s string to check
* @param {string} t string to check
* @return {boolean} returns true if the strings are isomorphic, otherwise false
*/

function isIsomorphic(s, t) {
  // length check
  if (s.length !== t.length) return false;

  // map s to t
  const chars = new Map();
  for (let i = 0; i < s.length; i += 1) {
    const c1 = s[i];
    const c2 = t[i];

    if (!chars.has(c1)) {
      chars.set(c1, c2);
    } else if (chars.get(c1) !== c2) {
      return false;
    }
  }

  return true;
}

export default isIsomorphic;
