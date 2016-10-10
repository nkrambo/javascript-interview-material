
/**
* Ransom Note
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
* Time: O(1)
* Space: O(1)
*
* @param {string} ransomeNote string of (n) length, lowercase
* @param {string} magazine string of (n) length, lowercase
* @return {boolean} returns true if the ransom note can be constructed from the
* magainze, otherwise false
*/

function ransomNote(ransomeNote, magazine) {

}

// const canConstruct = function(ransomNote, magazine) {
//
//   if (ransomNote.length > magazine.length) {
//     return false;
//   }
//
//   const magChars = [];
//   for (let i = 0; i < 128; i++) {
//     magChars[i] = 0;
//   }
//
//   for (let char of magazine) {
//     magChars[char.charCodeAt(0)] += 1;
//   }
//
//   for (let char of ransomNote) {
//
//     if (magChars[char.charCodeAt(0)] === 0) {
//       return false;
//     } else {
//       magChars[char.charCodeAt(0)] -= 1;
//     }
//   }
//
//   return true;
// };

export default ransomNote;