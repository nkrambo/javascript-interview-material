
// palindrom permutation
// @param {string} str String of n length
// @return {boolean} Returns true if the string is a permutation of a palindrome, otherwise returns false.

function isPalidromePermutation(str) {

  // type check
  if (typeof str !== 'string') {
    throw new Error('Must pass in a string.');
  }

  // we know that each character must balance with the exception of 1, being the middle.
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (chars.has(char)) {
      chars.delete(char);
    } else {
      chars.add(char);
    }
  }

  return chars.size <= 1;
}
