
/**
* Longest Palindromic Subsequence
*
* Tags: Bottom Up, Classic Problems
*
* Given a string find longest palindromic subsequence in this string.
*
* Example:
* Input: 'agbdba'
* Output: 5, 'abdba'
*/

/**
* longestPalindromicSub()
*
* Solution:
*
* Across the top and side we have the length of the input string.
*
* +-----+------------------------------------+
* |     |   0    1     2     3     4     5   |
* +------------------------------------------+
* |  0  |   1    1     1     1     3     5   |
* +------------------------------------------+
* |  1  |        1     1     1     3     3   |
* +------------------------------------------+
* |  2  |              1     1     3     3   |
* +------------------------------------------+
* |  3  |                    1     1     1   |
* +------------------------------------------+
* |  4  |                          1     1   |
* +------------------------------------------+
* |  5  |                                1   |
* +------------------------------------------+
*
* The formula for this is the following:
*
* if (str[i] === str[j]) {
*   T[i][j] = T[i+1][j-1] + 2
* } else {
*   T[i][j] = max(T[i+1][j], T[i][j-1])
* }
*
* Time: O(n * k)
* Space: O(n * k)
*
* @param {string} str sequence
* @return {number} returns the longest palindromic subsequence of str
*/

// function longestPalindromicSub(str) {
//   const rows = cols = str.length;
//
//   // build matrix
//   const matrix = [];
//   for (let i = 0; i < rows; i += 1) {
//     matrix[i] = new Array(cols);
//   }
//
//   // insert 1s
//   matrix.forEach((row, index) => {
//     row[index] = 1;
//   });
//
//   // for () {
//   //   for () {
//   //     if () {
//   //
//   //       if () {
//   //
//   //       } else {
//   //
//   //       }
//   //
//   //     } else {
//   //
//   //     }
//   //   }
//   // }
//
//   // return top-right
//   return matrix[0][matrix.length - 1];
// }
//
// // def longest_palindromic_subsequence(given_string):
// //     rows = cols = string_length = len(given_string)
// //     T = [[0 for _ in range(cols)] for _ in range(rows)]
// //
// //     for row in range(rows):
// //         T[row][row] = 1
// //
// //     for substring_length in range(2, string_length + 1):
// //         for row in range(0, string_length - substring_length + 1):
// //             col = row + substring_length - 1
// //
// //             if given_string[row] == given_string[col]:
// //                 if string_length == 2:
// //                     T[row][col] = 2
// //                 else:
// //                     T[row][col] = 2 + T[row + 1][col - 1]
// //             else:
// //                 T[row][col] = max(T[row + 1][col], T[row][col - 1])
// //
// //     return T[0][-1]
//
// export default longestPalindromicSub;
