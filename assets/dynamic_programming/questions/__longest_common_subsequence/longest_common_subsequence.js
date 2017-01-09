
/**
* Longest Common Subsequence
*
* Tags: Bottom Up, Classic Problems
*
* Given two strings s1 and s2, find the longest common subsequence between them.
*
* Example:
* Input: 'abcdaf', 'acbcf'
* Output: 4, 'abcf'
*/

/**
* longestCommonSub()
*
* Solution:
*
* This is a classic problem that we can solve using a bottom-up dynamic programming
* approach. As usual with these problems, let's start by making a grid to solve
* sub-problems to our larger problem.
*
* So again, we're trying to count the longest subsequence, so what are the
* sub-problems? Well, we can places s1 across the top of our grid and s2 down the
* side and then for each cell we can solve the longest sequence for interesting
* characters.
*
* +-----+-------------------------------------+
* |     |   a     b     c     d     a     f   |
* +-------------------------------------------+
* |  a  |   1     1     1     1     1     1   |
* +-------------------------------------------+
* |  c  |   1     1     2     2     2     2   |
* +-------------------------------------------+
* |  b  |   1     2     2     2     2     2   |
* +-------------------------------------------+
* |  c  |   1     2     3     3     3     3   |
* +-------------------------------------------+
* |  f  |   1     2     3     3     3     4   |
* +-------------------------------------------+
*
* Time: O(n^2)
* Space: O(1)
*
* @param {string} s1 base string
* @param {string} s2 string to check for subsequence to s1
* @return {number} returns the longest common subsequence between s1 and s2
*/

function longestCommonSub(s1, s2) {
  let count = 0;

}

export default longestCommonSub;
