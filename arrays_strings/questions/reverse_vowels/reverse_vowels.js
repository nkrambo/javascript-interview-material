
/**
* Reverse Vowels
*
* Write a function that takes a string as input and reverse only
* the vowels of a string.
*
* Example:
* Input: 'hello'
* Output: 'holle'
*
* Example:
* Input: 'leetcode'
* Output: 'leotcede'
*
*/

/**
* reverseVowels()
*
* Solution:
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {string} returns a string with vowels reversed
*/

function reverseVowels(str) {

  // type check
  if (typeof str !== 'string') {
    throw new TypeError('reverseVowels: Expects a single argument of [string] type.');
  }

  // edge case
  if (str.length < 1) return str;

  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  const pulledVowels = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      pulledVowels.push(s[i]);
    }
  }

  if (pulledVowels.length === 0) {
    return s;
  }

  pulledVowels.reverse();

  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      result.push(pulledVowels.shift());
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
};

export default reverseVowels;
