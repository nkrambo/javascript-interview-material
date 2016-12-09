
/**
* Is Unique
*
* Types: Hash Map/Set
*
* Implement an algorithm to determine if a string has all unique characters.
* What if you cannot use additional data structures.
*/

/**
* isUnique()
*
* Solution:
*
* This method uses a Set data strucutre.
*
* First, if we assume that the input will be in ASCII encoding, we can check
* the length of the input to see if it's greater than 128. This is the size of
* the ASCII character set. Therefore, if the string is longer than this all
* characters cannot be unique.
*
* Otherwise, we create a Set instance to track the characters we encounter as
* we iterate over the string, using a for-loop.
*
* As soon as we encounter a character twice, we return false, otherwise we
* keep going.
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {boolean} returns true if all characters in string are unique
*/

function isUnique(str) {

  // assuming ASCII encoding, we can short-circuit
  if (str.length > 128) return false;

  // store characters
  const chars = new Set();

  // check for character in set, else add it to set
  for (let i = 0; i < str.length; i += 1) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }

  return true;
}

/**
* isUniqueSort()
*
* Solution:
*
* This method uses no additional data structure.
*
* Again, check if we can short-circuit, using ASCII character length.
*
* In this approach we use the Array.sort() method to sort the string.
* Then we step over the string and check to see if we have any duplicate
* characters by comparing one iteration with the previous.
*
* Although the split() and sort() methods are convenient, these puts our
* runtime at O(n log n), which is not ideal.
*
* Time: O(n log n)
* Space: O(1)
*
* Where n is the length of the string input.
*
* @param {string} str String of (n) length
* @return {boolean} Returns true if all characters in string are unique
*/

function isUniqueSort(str) {

  // assuming ASCII encoding, we can short-circuit
  if (str.length > 128) return false;

  // split and sort string alpabetically
  str.split('').sort();

  // check each character against the previous
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }

  return true;
}

export { isUnique, isUniqueSort };
