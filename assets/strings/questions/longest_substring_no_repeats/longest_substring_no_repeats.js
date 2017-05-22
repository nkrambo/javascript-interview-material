
/**
* Longest Substring No Repeated Characters
*
* Tags: Map, Two Pointers
* Leetcode: 3
*
* Given a string, find the length of the longest substring without repeating characters.
*
* Example 1:
*
* Input: 'abcabcbb'
* Output: 3 ('abc')
*
* Example 2:
*
* Input: 'bbbbb'
* Output: 1 ('b')
*
* Example 3:
*
* Input: 'pwwkew'
* Output: 3 ('wke')
*
* Note:
*
* The answer must be a substring, 'pwke' is a subsequence and not a substring.
*/

/**
* longestSubstringBrute()
*
* Solution:
*
* We can brute force this one by check all the substrings one by one to see if it
* has no duplicate character.
*
* Suppose we have a helper function allUnique(s) which will return true if the
* characters in the substring are all unique, otherwise false. We can iterate through
* all the possible substrings of the given string s and call the function allUnique.
*
* If it turns out to be true, then we update our answer of the maximum length of
* substring without duplicate characters.
*
* Now let's fill the missing parts:
*
* To enumerate all substrings of a given string, we enumerate the start and end
* indices of them. Suppose the start and end indices are i and j, respectively.
* Then we have 0 ≤ i < j ≤ n (here end index j is exclusive by convention). Thus,
* using two nested loops with i from 0 to n - 1 and j from i+1 to n, we can
* enumerate all the substrings of s.
*
* To check if one string has duplicate characters, we can use a set. We iterate
* through all the characters in the string and put them into the set one by one.
* Before putting one character, we check if the set already contains it. If so,
* we return false. After the loop, we return true.
*
* Time: O(n^3)
* Space: O(k)
*
* Where k is the size of the Set. The size of the Set is upper bounded by the size
* of the string n and the size of the charset/alphabet m.
*
* @param {string} s string of (n) length
* @return {number} returns length of the longest substring with no repeated characters
*/

function longestSubstringBrute(s) {
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j <= s.length; j += 1) {
      if (allUnique(s, i, j)) {
        max = Math.max(max, j - i)
      }
    }
  }

  return max;
}

/**
* allUnique()
*
* @param {string} s string of (n) length
* @param {string} start index of s
* @param {string} end index of s
* @return {boolean} returns true if all the characters in s are unique, otherwise false
*/

function allUnique(s, start, end) {
  const seen = new Set();

  for (let i = start; i < end; i += 1) {
    if (seen.has(s[i])) return false;
    seen.add(s[i]);
  }

  return true;
}


export { longestSubstringBrute, allUnique };
