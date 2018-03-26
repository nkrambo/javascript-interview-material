
/**
* Longest Common Substring
*
* Tags: Bottom Up, Classic Problems
*
* Given two strings, s1 and s1, find the length of the longest common substring.
*
* Example:
* Input: 'abcdaf', 'zbcdf'
* Output: 3, 'bcd'
*
* Note: This is different to common subsequence as the common string must be
* contiguous.
*/

/**
* longestCommonSubStr()
*
* Solution:
*
* This is a simpler problem of the longest common subsequence problem. You will
* notice that they are very similiar.
*
* Per usual, we start with a matrix to help us solve sub-problems. We'll use our
* example from above.
*
* Across the top, we have s1 chars. Down the side we have the s2 chars. We also
* have a row and column filled with 0s.
*
* +-----+------------------------------------------+
* |     |        a     b     c     d     a     f   |
* +------------------------------------------------+
* |     |   0    0     0     0     0     0     0   |
* +------------------------------------------------+
* |  z  |   0    0     0     0     0     0     0   |
* +------------------------------------------------+
* |  b  |   0    0     1     0     0     0     0   |
* +------------------------------------------------+
* |  c  |   0    0     0     2     0     0     0   |
* +------------------------------------------------+
* |  d  |   0    0     0     0     3     0     0   |
* +------------------------------------------------+
* |  f  |   0    0     0     0     0     0     1   |
* +------------------------------------------------+
*
* Let's step through our matrix.
*
* First we are comparing 'z' to 'a' for a substring, which there isn't so we set
* count to 0 for that cell. In fact, 'z' is 0 for all it's cells.
*
* Next, we are comparing 'b' to 'a', 0 again. But on the next cell we have 'b' and
* 'b', so the characters match. When we have a match, we take the result from the
* top left cell and add 1 for the current cell to get our result. So we take 0 + 1,
* which is 1. This makes sense, because the top left cell contains the count for
* a substring 'so far'. That is, 0 for 'z' in 'a'. If there is no match we set the
* cell to 0.
*
* You can see we repeat this method for all cells. If you step down, we can see
* that we have another match for 'c' and 'c'. We take the top left 1, which represents
* the count 'so far' for 'zb' in 'ab' and we add 1 for the matching 'c'.
*
* Essentially, you can see that the count increases by 1 for every contiguous match
* that we encounter, otherwise we get set back to 0. You can see an example of this
* with the matching final 'f'. Previously, 'd' did not match 'a', so we start at
* 1 again for 'f'.
*
* Our final result is the highest number (count) in our completed matrix, 3.
*
* The formula for this is easy:
*
*     if (s1[i] === s2[j]) {
*       T[i][j] = T[i-1][j-1] + 1
*     } else {
*       T[i][j] = 0
*     }
*
* Time: O(n * k)
* Space: O(n * k)
*
* Where n is the length of s1 and k is the length of s2.
*
* @param {string} s1
* @param {string} s2
* @return {number} returns the longest common substring of s2 in s1
*/

function longestCommonSubStr(s1, s2) {
  let count = 0;
  const cols = s1.length + 1; // add 1 to represent 0 valued col for DP
  const rows = s2.length + 1; // add 1 to represent 0 valued row for DP

  // build matrix, fill with 0s by default
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = new Array(cols).fill(0);
  }

  // solve sub-problems
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      // if 'match' grab top-left + 1, recalculate count
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        count = Math.max(matrix[i][j], count);
      }
    }
  }

  return count;
}

export default longestCommonSubStr;
