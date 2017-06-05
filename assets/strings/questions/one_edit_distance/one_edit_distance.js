
/**
* One Edit Distance
*
* Tags: Map, String
* Leetcode: 161
*
* Given two strings S and T, determine if they are both one edit distance apart.
*
* There are three types of edits:
*
* 1. insert a character
* 2. delete a character
* 3. replace a character
*
* Example:
*
* pale, ple -> true
* pales, pale -> true
* pale, bale -> true
* pale, bae -> false
*/

/**
* isOneEditDistance()
*
* Solution:
*
* We can possibly do a fast return by comparing the lengths of the two strings.
* If the lengths differ by more than 1, we know that they must differ by more than
* 1 edit.
*
* Otherwise we can use a map to track the type and count of characters in s.
* We then also interate over t and compare the occurence of characters, removing
* and decremting as needed.
*
* If the strings are only 1 edit (or less) apart, then the size of the map should
* be less than or equal to 1, representing the 1 edit allowed.
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} s string of (n) length
* @param {string} t string of (n) length
* @return {boolean} returns true if difference is 1 or less edits, otherwise returns false
*/

function isOneEditDistance(s, t) {
  // if lengths differ by more than 1, must be false
  if (Math.abs(s.length - t.length) > 1) return false;

  // count characters in s
  const chars = new Map();
  for (const char of s) {
    chars.set(char, chars.get(char) + 1 || 1); // increment by or set to 1
  }

  // compare t against s
  for (const char of t) {
    const count = chars.get(char);

    if (count) {
      if (count === 1) {
        chars.delete(char);
      } else {
        chars.set(char, count - 1);
      }
    }
  }

  return chars.size <= 1;
}

export default isOneEditDistance;
