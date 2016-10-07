
function ransomNote() {

}

export default ransomNote;


// // Given  an arbitrary  ransom  note  string and another string
// // containing letters from  all the magazines,  write a function that will
// // return true if the ransom  note can be constructed from the magazines ; otherwise, it will return false.  
//
// // Each letter  in  the  magazine string can  only be  used once  in  your ransom  note.
//
// // Note:
// // You may assume that both strings contain only lowercase letters.
//
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
//
// // O(n) time complexity
// // O(1) space complexity
//
// // test cases
// console.log(canConstruct('ransom', 'magazine')); // false
// console.log(canConstruct('a', 'a')); // true
// console.log(canConstruct('abcd', 'abcd')); // true
// console.log(canConstruct('abcdef', 'abcde')); // false
// console.log(canConstruct('aaaaaaa', 'aaaaaaabbnn')); // true
//

