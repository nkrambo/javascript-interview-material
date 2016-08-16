
// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = function(s) {

  // type check
  if (typeof s !== 'string') {
    throw new Error('Must pass a string.');
  }

  // edge cases
  if (s.length < 1) {
    return s;
  }

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

// test cases
console.log(reverseVowels('hello'));


