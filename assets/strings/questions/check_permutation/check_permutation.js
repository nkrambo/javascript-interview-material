
/**
* Check Permutation, also known as 'Is Valid Anagram'
*
* Types: Hash Map
*
* Given two strings, write a method to check if one is a permutation of
* the other.
*/

/**
* isPermutation()
*
* Solution:
*
* As a quick first step to solving this would be to compare the lengths of each
* string. If they are different, then they cannot possibly be permutations and we
* return false.
*
* Otherwise, we can use a Map() to keep track of the characters, and their count,
* as we iterate over str1.
*
* We can then iterate over str2 and decrement, or remove, characters from the map
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
* Where n is the length of str1, m is the length of str2
*
* @param  {string} str2 First string of (n) length
* @param  {string} str1 Second string of (n) length
* @return {boolean} Returns true if str1 and str2 are permutations of each other, otherwise false.
*/

function isPermutation(str1, str2) {

  // length check, short-circuit
  if (str1.length !== str2.length) return false;

  // count characters in str1
  const chars = new Map();
  for (let char of str1) {
    chars.set(char, chars.get(char) + 1 || 1); // increment or set to 1
  }

  // check str2 against str1 map
  for (let char of str2) {
    let count = chars.get(char);

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
* isPermutationSort()
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
* Where n is the length of str1, m is the length of str2
*
* @param  {string} str2 First string of (n) length
* @param  {string} str1 Second string of (n) length
* @return {boolean} Returns true if str1 and str2 are permutations of each other, otherwise false.
*/

function isPermutationSort(str1, str2) {

  // length check, short-circuit
  if (str1.length !== str2.length) return false;

  // compare the sorted strings
  return str1.split('').sort().join() === str2.split('').sort().join();
}

export { isPermutation, isPermutationSort };
