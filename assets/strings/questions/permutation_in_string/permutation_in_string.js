
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
* One string will be a permutation of another string only if both of them contain
* the same charaters with the same frequency. We can consider every possible substring
* in the long string s2 of the same length as that of s1 and check the frequency
* of occurence of the characters appearing in the two. If the frequencies of every
* letter match exactly, then only s1's permutation can be a substring of s2.
*
* In order to implement this approach, instead of sorting and then comparing the
* elements for equality, we make use of a hashmap 'chars' which stores the
* frequency of occurence of all the characters in the short string s1. We consider
* every possible substring of s2 of the same length as that of s1, find its corresponding
* hashmap as well, namely 'clone'. Thus, the substrings considered can be viewed as
* a window of length as that of s1 iterating over s2. If the two hashmaps obtained
* are identical for any such window, we can conclude that s1's permutation is a
* substring of s2, otherwise not.
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
* This approach uses a similiar approach to above, except instead of creating a
* clone of chars and usign the substring method we use the 'sliding window'
* technique to compare every possbile permutation of s1 in s2.
*
* Instead of generating the map afresh for every window considered in s2, we can
* create the map just once for the first window in s2. Then, later on when we slide
* the window, we know that we add one preceding character and add a new succeeding
* character to the new window considered. Thus, we can update the map by just updating
* the indices associated with those two characters only. Again, for every updated
* map, we compare all the elements of the hashmap for equality to get the required
* result.
*
* Time: O(1)
* Space: O(1)
*
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/

// function checkInclusionWindow(s1, s2) {
//   // short-ciruit
//   if (s2.length < s1.length) return false;
// }

// export { checkInclusion, checkInclusionWindow };
export { checkInclusion };
