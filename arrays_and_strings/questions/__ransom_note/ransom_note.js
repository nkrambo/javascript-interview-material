
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

function ransomNote() {

}

export default ransomNote;