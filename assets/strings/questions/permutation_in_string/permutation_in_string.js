
/**
* Permutation in String
*
* Tags: Dynamic Programming, String
* Leetcode: 567
*
* Given two strings s1 and s2, write a function to return true if s2 contains the
* permutation of s1. In other words, one of the first string's permutations is
* the substring of the second string.
*
* Example 1:
*
* Input: s1 = "ab" s2 = "eidbaooo"
* Output: True
* Explanation: s2 contains one permutation of s1 ("ba").
*
* Example 2:
* Input:s1= "ab" s2 = "eidboaoo"
* Output: False
*
* Note:
*
* 1. The input strings only contain lower case letters.
* 2. The length of both given strings is in range [1, 10,000].
*/

/**
* checkInclusion()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/

function checkInclusion(s1, s2) {
  // short-ciruit
  if (s2.length < s1.length) return false;

  // count chars of s1
  const chars = new Map();
  for (const char of s1) {
    chars.set(char, chars.get(char) + 1 || 1);
  }

  for (let i = 0; i < s2.length; i += 1) {
    if (chars.has(s2[i])) {
      const clone = new Map(chars);
      if (isPermutation(s2.substring(i, i + s1.length), clone)) {
        return true;
      }
    }
  }

  return false;
}

function isPermutation(s, map) {
  for (const char of s) {
    if (!map.has(char)) return false;

    const count = map.get(char);

    if (count === 1) {
      map.delete(char);
    } else {
      map.set(char, count - 1);
    }
  }

  return map.size === 0;
}

/**
* checkInclusionWindow()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/

function checkInclusionWindow(s1, s2) {

}

export { checkInclusion, checkInclusionWindow };
