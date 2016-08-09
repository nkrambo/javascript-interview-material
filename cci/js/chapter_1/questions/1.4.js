
// Palindrome permutation: Given a string, write a function to
// check if it is a permutation of a palindrome. A palindrome is a word
// or phrase that is the same forwards as it is backwards. A permutation is a
// rearrangment of letters. The palindrome does not need to be limited to just
// dictionary words.

// Notes: We know that for a palindrome to exist that there must be an even
// number of each character in a string with the exception of a single odd
// character which may represent the very middle of a palindrome. Essentially,
// a string must be balanced on either side to be a palindrome.
// e.g 'aa bb cc dd' or 'aa bb c dd ee', where 'c' is a single odd character.
// With this knowledge, we know that if a string has more than one unbalanced
// character it cannot be a palindrome.

// Solution: We create a dictionary holding a key for each lowercase letter in the alphabet
// and set it's value to a boolean (False). Then we iterate over each character of the
// input string and toggle each key in the dictionary for that character. A 'True' value represents
// an odd occurence of that character. A 'False' value represents an even, or balanced, occurence of
// that value. After iteration has completed we then check the dictionary for more than 1 unbalanced
// occurence, or 2 or more 'True' values. If so, then it cannot be a palindrome.

// input: string of (n) length. E.g. 'Tact Coa'
// output: Boolean. E.g (Permutations: 'taco cat', 'atco cta' etc...)

const isPalindromePermuation = function(str) {
  const lowerString = str.toLowerCase();

  const chars = [];
  for (let i = 0; i < 26; i++) {
    chars[i] = false;
  }

  for (let i = 0; i < lowerString.length; i++) {
    const idx = lowerString.charCodeAt(i) - 96;
    chars[idx] = !chars[idx];
  }

  const count = chars.filter(function(char) {
    return char === true;
  });

  return count.length > 1 ? false : true;
}

// test cases
console.log(isPalindromePermuation('a')); // true
console.log(isPalindromePermuation('aabbeccdd')); // true
console.log(isPalindromePermuation('abcd')); // false


