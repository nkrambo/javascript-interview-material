
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
        max = Math.max(max, j - i);
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

/**
* longestSubstring()
*
* Solution:
*
* In the naive approach, we repeatedly check a substring to see if it has duplicate
* character. But it is unnecessary. If a substring s{ij} from index i to j - 1 is
* already checked to have no duplicate characters. We only need to check if s[j]
* is already in the substring s{ij}.
*
* To check if a character is already in the substring, we can scan the substring,
* which leads to an O(n^2) algorithm. But we can do better.
*
* By using Map as a sliding window, checking if a character in the current substring
* can be done in O(1).
*
* A sliding window is an abstract concept commonly used in array/string problems.
* A window is a range of elements in the array/string which is usually defined by the
* start and end indices, i.e. (i, j) (left-closed, right-open). A sliding window
* is a window that "slides" its two boundaries to a certain direction.
*
* For example, if we slide (i, j) to the right by 1 element, then it becomes (i + 1, j + 1)
* (left-closed, right-open).
*
* Back to our problem. We use Map to store the characters in current window
* (i, j), j === i initially. Then we slide the index j to the right. If it is not
* in the Map, we slide j further. Doing so until s[j] is already in the Map. At
* this point, we found the maximum size of substrings without duplicate characters
* start with index i. If we do this for all i, we get our answer.
*
* Time: O(n)
* Space: O(k)
*
* In the worst case each character will be visited twice by i and j. O(2n) = O(n)
*
* We need O(k) space for the sliding window, where k is the size of the Set. The
* size of the Set is upper bounded by the size of the string n and the size of the
* charset/alphabet m.
*
* @param {string} s string of (n) length
* @return {number} returns length of the longest substring with no repeated characters
*/

function longestSubstring(s) {
  const slidingWindow = new Set();
  let max = 0;
  let i = 0;
  let j = 0;

  while (i < s.length && j < s.length) {
    // try to extend the range [i, j]
    if (!slidingWindow.has(s.charAt(j))) {
      slidingWindow.add(s.charAt(j++));
      max = Math.max(max, j - i);

    } else {
      slidingWindow.delete(s.charAt(i++));
    }
  }

  return max;
}


/**
* longestSubstringMap()
*
* Solution:
*
* The above solution requires at most 2n steps. In fact, it could be optimized to
* require only n steps. Instead of using a set to tell if a character exists or
* not, we could define a mapping of the characters to its index. Then we can skip
* the characters immediately when we found a repeated character.
*
* The reason is that if s[j] has a duplicate in the range (i, j) with index j,
* we don't need to increase i little by little. We can skip all the elements in
* the range (i, j) and let i to be j + 1 directly.
*
* In other words, the basic idea is, keep a Map which stores the characters in the
* string as keys and their positions as values, and keep two pointers which define
* the max substring.
*
* Move the right pointer to scan through the string, and meanwhile update the Map.
*
* If the character is already in the Map, then move the left pointer to the right
* of the same character last found.
*
* Note that the two pointers can only move forward.
*
* Time: O(n)
* Space: O(k)
*
* @param {string} s string of (n) length
* @return {number} returns length of the longest substring with no repeated characters
*/

function longestSubstringMap(s) {
  const slidingWindow = new Map();
  let max = 0;

  // catch edge
  if (s.length === 0) return 0;

  // step over
  for (let i = 0, j = 0; i < s.length; i += 1) {
    if (slidingWindow.has(s[i])) {
      j = Math.max(j, slidingWindow.get(s[i]) + 1);
    }

    slidingWindow.set(s[i], i);
    max = Math.max(max, (i - j) + 1);
  }

  return max;
}

export { longestSubstringBrute, allUnique, longestSubstring, longestSubstringMap };
