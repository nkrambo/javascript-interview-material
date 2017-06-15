
/**
* Longest Palindromic Subsequence
*
* Tags: Dynamic Programming
* Leetcode: 516
*
* Given a string s, find the longest palindromic subsequence's length in s. You
* may assume that the maximum length of s is 1000.
*
* Example 1:
*
* Input: 'bbbab'
* Output: 4
* One possible longest palindromic subsequence is 'bbbb'.
*
* Example: 2:
*
* Input: 'cbbd'
* Output: 2
* One possible longest palindromic subsequence is 'bb'.
*/

/**
* longestPalindromeSubseq()
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
* @param {string} s string
* @return {number} returns the longest palindromic subsequence of s
*/

// function longestPalindromeSubseq(s) {
//
// }
//
// export default longestPalindromeSubseq;
