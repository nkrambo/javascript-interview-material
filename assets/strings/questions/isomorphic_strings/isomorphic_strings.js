
/**
* Isomorphic Strings
*
* Types: Hash Map
*
* Given two strings str1 and str2, determine if they are isomorphic.
*
* Two strings are isomorphic if the characters in str1 can be replaced to get str2.
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
* You may assume both str1 and str2 have the same length.
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
* We iterate str1 and map each character as the 'key' and the corresponding str2
* character as 'value'.
*
* If the character is already in the map, we compare it with str2's character.
* If it's not the same, then we know that the strings are not isomprphic.
*
* Time: O(n)
* Space: O(n)
*
* Where (n) is the length of str1
*
* @param {string} str1 string to check
* @param {string} str2 string to check
* @return {boolean} returns true if the strings are isomorphic, otherwise false
*/

function isIsomorphic(str1, str2) {

  // length check
  if (str1.length !== str2.length) return false;

  // map str1 to str2
  const chars = new Map();
  for (let i in str1) {
    const c1 = str1[i];
    const c2 = str2[i];

    if (!chars.has(c1)) {
      chars.set(c1, c2);
    } else if (chars.get(c1) !== c2) {
      return false;
    }
  }

  return true;
}

export default isIsomorphic;
