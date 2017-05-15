
/**
* Interleaving String
*
* Given strings s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
*
* s3 is said to be interleaving s1 and s2, if it contains all characters of s1 and
* s2 and order of all characters in individual strings is preserved.
*
* Example:
* Input: 'aab', 'axy', 'aaxaby'
* Output: true
*
* Example:
* Input: 'aab', 'axy', 'abaaxy'
* Output: false
*/

/**
* isInterleave()
*
* Solution:
*
* This one can be solved with dynamic programming. We'll start with a matrix to
* help us solve the over-lapping sub-problems.
*
* Across the top we have the characters of s1 and down the side we have s2.
*
* +-----+------------------------+
* |     |   0    a     b     b   |
* +------------------------------+
* |  0  |   T    T     T     F   |
* +------------------------------+
* |  a  |   T    T     F     F   |
* +------------------------------+
* |  x  |   F    T     T     T   |
* +------------------------------+
* |  y  |   F    F     F     T   |
* +------------------------------+
*
* Let's step through how we resolved this matrix...
*
* First,
*
* So the formula for this one is:
*
*     if (s3[i+j] === s1[i]) {
*       T[i][j] = T[i-1][j]
*
*     } else if (s3[i+j] === s2[j]) {
*       T[i][j] = T[i][j-1]
*
*     } else {
*       T[i][j] = false
*     }
*
* Time: O()
* Space: O(1)
*
* @param {string} s1 string to compose s3
* @param {string} s2 string to compose s3
* @param {string} s3 string to check for interleaving
* @return {boolean} returns true if s3 is an interleaved string of s1 and s2, otherwise false
*/

// function isInterleave(s1, s2, s3) {
//
//   // short-circuit, length check
//   if (s3.length !== s1.length + s2.length) return false;
//
//   const cols = s1.length + 1; // add 1 for 0s column
//   const rows = s2.length + 1; // add 1 for 0s row
//
//   // build matrix, false by default
//   const matrix = [];
//   for (let i = 0; i < rows; i += 1) {
//     matrix[i] = new Array(cols).fill(false);
//   }
//
//   // solve sub-problems
//   for (let i = 0; i < rows; i += 1) {
//     for (let j = 0; j < cols; j += 1) {
//       const index = i + j - 1;
//
//       if (i === 0 && j === 0) {
//         matrix[i][j] = true;
//
//       } else if (i === 0) {
//         if (s3[index] === s1[j-1]) {
//           matrix[i][j] = true && matrix[i][j-1];
//         }
//
//       } else if (j === 0) {
//         if (s3[index] === s2[i-1]) {
//           matrix[i][j] = true && matrix[i-1][j];
//         }
//
//       } else {
//
//         if (s3[index] === s1[j - 1]) {
//           matrix[i][j] = matrix[i][j - 1] ? true : false;
//
//         } else if (s3[index] === s2[i - 1]) {
//           matrix[i][j] = matrix[i - 1][j] ? true : false;
//         }
//       }
//     }
//   }
//
//   // return bottom right
//   return matrix[rows-1][cols-1];
// }
//
// export default isInterleave;
