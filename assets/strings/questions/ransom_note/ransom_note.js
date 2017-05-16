
/**
* Ransom Note
*
* Tags: Map
*
* Given an arbitrary ransom note string and another string containing letters
* from all the magazines, write a function that will return true if the ransom
* note can be constructed from the magazines; otherwise return false.
*
* Each letter in your magazine string can only be used once in your ransom note.
*
* You may assume that both strings contain only lowercase letters.
*
* Example:
* Input: 'a', 'b'
* Output: false
*
* Example:
* Input: 'aa', 'ab'
* Output: false
*
* Example:
* Input: 'aa', 'aab'
* Output: true
*/

/**
* ransomNote()
*
* Solution:
*
* We can approach this one by iterating over the ransom note and storing the type
* and count of each character that appears into a Map, ignoring spaces.
*
* We then iterate over magazine and decrement our ransom note character Map as we
* come across new characters, again ignoring spaces.
*
* As soon as our Map hits a 0 size, we know that all characters are accounted for,
* and we can return true, otherwise we'll return false by default.
*
* This approach works better than returning at the bottom of our function
* if chars.size === 0. Imagine a short ransom note, say 250 characters, and a
* very long magazine, say 20,000 characters. We only want to iterate the magazine
* for as long as we have outstanding characters in the ransom note, no longer.
*
* Another couple of things.
*
* You might be tempted to short-circuit if the magazine is shorter than the ransom
* note, but this will not always return a true false.
*
* For example:
* ransomNote = 'a b c'; // length = 5
* magazine = 'abc'; // length = 3
*
* In this example, whitespace is account for in our magazine.length property.
* If we had short-cicuited this would return false when, in fact, we can construct
* a ransom note from the magazine.
*
* You could remove whitespace from the strings to work with them a little easier,
* but there really isn't an efficient method to acheive this.
*
* For example:
* ransomNote = ransomNote.replace(/\s/g, '');
*
* The replace method might or might not have a runtime of O(n), however, it's
* just as easy to skip over spaces when we iterate.
*
* Time: O(n + m)
* Space: O(n)
*
* Where n is the length of ransom note.
*
* @param {string} ransomeNote string of (n) length, lowercase
* @param {string} magazine string of (n) length, lowercase
* @return {boolean} returns true if the ransom note can be constructed, otherwise false
*/

function canMakeRansomNote(ransomNote, magazine) {
  // count ransom note characters
  const chars = new Map();

  for (const char of ransomNote) {
    // ignore spaces
    if (char !== ' ') {
      // count up characters
      chars.set(char, chars.get(char) + 1 || 1); // increment by or add 1
    }
  }

  // iterate magazine
  for (const char of magazine) {
    const count = chars.get(char);

    // if character isn't in ransom, move on or if we come across a space
    if (count || char !== ' ') {
      // remove or decrement characters
      if (count === 1) {
        chars.delete(char);
      } else {
        chars.set(char, count - 1);
      }
    }

    // only return true if all chars are accounted for
    if (chars.size === 0) return true;
  }

  return false;
}

export default canMakeRansomNote;
