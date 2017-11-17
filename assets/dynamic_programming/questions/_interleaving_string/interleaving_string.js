
/**
* Interleaving String
*
* Tags: Dynamic Programming, String
* Leetcode: 97
*
* Given strings s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
*
* Example:
*
* Given:
* s1 = 'aabcc',
* s2 = 'dbbca',
*
* When s3 = 'aadbbcbcac', return true.
* When s3 = 'aadbbbaccc', return false.
*/

/**
* isInterleaveRecursive()
*
* Solution:
*
* First, let's confirm what we mean exactly by interleaving.
*
* s3 is an interleaving of s1 and s2 if it contains all the characters from s1
* and s2 but also preserves the order in which the characters occur in s1 and s2.
*
* Let's take another example to cement this concept.
*
* s1 = 'aab'
* s2 = 'axy'
*
* s3 = 'aaxaby' → true
* s3 = 'abaaxy' → false
*
* You can see that our first s3 returns true as it meets both our conditions of
* interleaving. The second s3 has the same amount and type of characters from
* both s1 and s2 but they are out of order, so it returns false.
*
* How would we brute force this?
*
* We would need to find every string possible by all interleavings of s1 and s2
* and compare each result to s3.
*
* We could do this recursively.
*
* Time: O(2(m + n)) - m is the length of s1 and nn is the length of s2.
* Space: O(m + n) - the size of stack for recursive calls can go upto m + n.
*
* @param {string} s1
* @param {string} s2
* @param {string} s3
* @return {boolean}
*/

function isInterleaveRecursive(s1, s2, s3) {
  return helper(s1, 0, s2, 0, null, s3);
}

function helper(s1, i, s2, j, res = '', s3) {
  // base case
  if (res === s3 && i === s1.length && j === s2.length) return true;

  let ans = false;

  if (i < s1.length) ans |= helper(s1, i + 1, s2, j, res + s1.charAt(i), s3);
  if (j < s2.length) ans |= helper(s1, i, s2, j + 1, res + s2.charAt(j), s3);

  return ans;
}

/**
* isInterleave()
*
* Solution:
*
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
* https://www.youtube.com/watch?v=ih2OZ9-M3OM
* http://www.geeksforgeeks.org/check-whether-a-given-string-is-an-interleaving-of-two-other-given-strings-set-2/
*
* Time: O(n^2)
* Space: O(1)
*
* @param {string} s1
* @param {string} s2
* @param {string} s3
* @return {boolean}
*/

function isInterleave(s1, s2, s3) {
  // short-circuit
  // s3 cannot be interleaving of s1 and s2 if it's length is not s1.length + s2.length
  if (s3.length !== s1.length + s2.length) return false;

  const rows = s1.length;
  const cols = s2.length;

  // build boolean matrix, false default
  // + 1 to rows and cols for 0s
  const dp = [];
  for (let i = 0; i < rows + 1; i += 1) {
    dp[i] = new Array(cols + 1).fill(false);
  }

  // step over s1 and s2
  for (let i = 0; i <= rows; i += 1) {
    for (let j = 0; j <= cols; j += 1) {
      // two empty strings have an empty string as interleaving
      if (i === 0 && j === 0) {
        dp[i][j] = true;

      // s1 is empty
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt((i + j) - 1);
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt((i + j) - 1);
      } else {
        dp[i][j] = (dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt((i + j) - 1)) || (dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt((i + j) - 1));
      }
    }
  }

  // return bottom right result
  return dp[rows][cols];
}

export { isInterleaveRecursive, isInterleave };
