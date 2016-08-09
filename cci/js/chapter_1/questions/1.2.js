
// Check permutation: Given two string, write a method to
// see if one is a permutation of the other.

// input - str1, str2
// output - boolean

// assumptions - whitespace is significant and so is case sensitivity.
// For example, 'God' is not a permutation of 'dog' or 'god '

// Naive - using built-in sorting method
// Time: O(n^2) - This is because of using the split, sort, join functions

const isPermutation = function(s1, s2) {

  // cheap 0(1) check
  if (s1.length !== s2.length) {
    return false;
  }

  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

const isPermutation = function(s1, s2) {

  // cheap 0(1) check
  if (s1.length !== s2.length) {
    return false;
  }

 const s1Chars = [];
 const s2Chars = [];

 for (let i = 0; i < 26; i++) {
   s1Chars[i] = 0;
   s2Chars[i] = 0;
 }

 for (let i = 0; i < s1.length; i++) {
   idx = s1.charCodeAt(i) - s1.charCodeAt('a');
   s1Chars[idx] += 1;
 }

 for (let i = 0; i < s2.length; i++) {
   idx = s2.charCodeAt(i) - s2.charCodeAt('a');
   s1Chars[idx] += 1;
 }

 for (let i = 0; i < 26; i++) {
   while (s1Chars[i] === s2Chars[i]) {
     continue;
   } else {
    return false; 
   }
 }

 return true;
}