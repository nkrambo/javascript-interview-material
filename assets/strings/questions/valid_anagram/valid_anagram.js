
/**
* Valid Anagram
*
* Tags: Map, Sort
* Leetcode: 242
*
* Given two strings s and t, write a function to determine if t is an anagram of s.
*
* Note:
*
* You may assume the string contains only lowercase alphabets.
*
* Follow up:
*
* What if the inputs contain unicode characters? How would you adapt your solution
* to such case?
*/

/**
* isAnagram()
*
* Solution:
*
* As a quick first step to solving this would be to compare the lengths of each
* string. If they are different, then they cannot possibly be permutations and we
* return false.
*
* Otherwise, we can use a Map() to keep track of the characters, and their count,
* as we iterate over s.
*
* We can then iterate over t and decrement, or remove, characters from the map
* as we come across them. If the two strings are permutations of each other, there
* should be an exact same count of characters in both. Therefore, there should be no
* leftover characters in the map.
*
* We can return false if there are characters left in the map, or if we come across a
* a completely new character.
*
* Time: O(n + m)
* Space: O(n)
*
* Where n is the length of s, m is the length of t
*
* @param  {string} s string of (n) length
* @param  {string} t string of (n) length
* @return {boolean} returns true if s and t are permutations of each other, otherwise false.
*/

function isAnagram(s, t) {
  // length check, short-circuit
  if (s.length !== t.length) return false;

  // count characters in s
  const chars = new Map();
  for (const char of s) {
    chars.set(char, chars.get(char) + 1 || 1); // increment or set to 1
  }

  // check t against s map
  for (const char of t) {
    const count = chars.get(char);

    // if character doesn't exist
    if (!count) return false;

    // remove if last count, or decrement
    if (count === 1) {
      chars.delete(char);
    } else {
      chars.set(char, count - 1);
    }
  }

  return chars.size === 0;
}

/**
* isAnagramSort()
*
* Solution:
*
* This is a simple solution that compares the strings by sorting them.
* Permutations will be always identical sorted strings. We have to chain a
* few methods together to acheive this, which places our runtime higher than
* the alternative approach.
*
* Time: O((n log n) + (m log m))
* Space: O(1)
*
* Where n is the length of s, m is the length of t
*
* @param  {string} t string of (n) length
* @param  {string} s string of (n) length
* @return {boolean} returns true if s and t are permutations of each other, otherwise false.
*/

function isAnagramSort(s, t) {
  // length check, short-circuit
  if (s.length !== t.length) return false;

  // compare the sorted strings
  return s.split('').sort().join() === t.split('').sort().join();
}

export { isAnagram, isAnagramSort };
