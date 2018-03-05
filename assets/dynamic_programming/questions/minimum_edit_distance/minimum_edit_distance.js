
/**
* Minimum Edit Distance
*
* Tags: Bottom Up, Classic Problems
*
* Given two strings, s1 and s2, how many minimum edits (update, delete or add)
* is needed to convert s1 to s2.
*
* Example:
* Input: 'abcdef', 'azced'
* Output: 3
*/

/**
* minEditDistance()
*
* Solution:
*
* We can solve this one with dynamic programming. As usual, let's build out a
* matrix to help us. Across the top we have the characters from s1 and down the
* side s2. You can see that we also have an extra column and row on the inside of
* the strings. These represent the number of edits required if the s1 and s2 were
* completely different. This is important for our formula to work properly.
*
* What are we trying to solve at each cell? Well, the number of edits. Let's step
* through the matrix. We'll use our example from above.
*
* At 'a' and 'a', the number of edits between these strings is 0. Next, 'ab' and
* 'a' has 1 edit, we need to add 'b'. Likewise, for the others in cells in this
* row, we increase by 1 because we comparing a string of 1 character against
* strings increasing by 1, so we'll always need to add the new character.
*
* Next, we have 'az' and 'a', one delete edit. Then 'az' and 'ab', one update edit
* and so on. Like all dynamic programming problems we solve each cell with from
* sub-problems we've already solved, using a formula.
*
* The formula here is, if i and j are equal we take the top-left value. If they
* are different we take the minimum of the left, top-left and top... then add 1
* for the current edit. You can see now, why the additional inner row and column
* are important for this to work.
*
* Once we have solved the matrix our answer will be in the bottom-right cell. In
* our case 3.
*
* +-------------------------------------------------+
* |     |         a     b     c     d     e     f   |
* +-------------------------------------------------+
* |     |   0     1     2     3     4     5     6   |
* +-------------------------------------------------+
* |  a  |   1     0     1     2     3     4     5   |
* +-------------------------------------------------+
* |  z  |   2     1     1     2     3     4     5   |
* +-------------------------------------------------+
* |  c  |   3     2     2     1     2     3     4   |
* +-------------------------------------------------+
* |  e  |   4     3     3     2     2     2     4   |
* +-------------------------------------------------+
* |  d  |   5     4     4     3     2     3     3   |
* +-------------------------------------------------+
*
* So, the formula for this one is:
*
*     if (s1[i] === s2[j]) {
*       T[i][j] = T[i-1][j-1]
*     } else {
*       T[i][j] = min(T[i-1][j], T[i-1][j-1], T[i][j-1]) + 1
*     }
*
* Time: O(n * k)
* Space: O(n * k)
*
* Where n is the length of s1 and k is the length s2
*
* @param {string} s1
* @param {string} s2
* @return {number} the number of minimum edits required between s1 and s2
*/

function minEditDistance(s1, s2) {
  const cols = s1.length + 1; // add 1 for the inner column
  const rows = s2.length + 1; // add 1 for the inner row

  // build matrix, 0s by default
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = new Array(cols).fill(0);
  }

  // set inner column and row values
  matrix.forEach((row, i) => {
    row[0] = i;
  });

  matrix[0].forEach((col, i, arr) => {
    arr[i] = i;
  });

  // solve sub-problems
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      // matching character, take top-left
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];

      // otherwise, take min of (top-left, left, top) and add 1
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
      }
    }
  }

  // return bottom-right
  return matrix[rows - 1][cols - 1];
}

export default minEditDistance;
