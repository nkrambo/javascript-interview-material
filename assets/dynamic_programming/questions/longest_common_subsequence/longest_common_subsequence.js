
/**
* Longest Common Subsequence
*
* Tags: Bottom Up, Classic Problems
*
* Given two strings s1 and s2, find the longest common subsequence between them.
* That is, the number of letters in a sequence that the two words have in common.
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
* +-----+------------------------------------------+
* |     |        a     b     c     d     a     f   |
* +------------------------------------------------+
* |     |   0    0     0     0     0     0     0   |
* +------------------------------------------------+
* |  a  |   0    1     1     1     1     1     1   |
* +------------------------------------------------+
* |  c  |   0    1     1     2     2     2     2   |
* +------------------------------------------------+
* |  b  |   0    1     2     2     2     2     2   |
* +------------------------------------------------+
* |  c  |   0    1     2     3     3     3     3   |
* +------------------------------------------------+
* |  f  |   0    1     2     3     3     3     4   |
* +------------------------------------------------+
*
* Let's step through our grid...
*
* In our first cell we are looking for the longest subsequence between 'a' and 'a'.
* This is pretty straight forward, since they're the same character, it's 1. We
* then step through every other column and compare it to the first row 'a' in the
* same fashion. As in, next we want the longest in 'a' and 'ab', the 'a' and 'abc',
* and so forth. As you can see the 'best', or longest is 1 across the board. Easy.
*
* Onto the next row and now we include 'c'. That is, now we looking for the longest
* sequence in 'ac' and 'a'. Well this is 1, notice this is also the result from
* above, which makes sense. Same with the next cell 'ac' and 'ab'. Again this is 1.
*
* Next, 'ac' and 'abc'. This is a little more interesting. Now our current s1 and
* s2 values match, 'c' and 'c'. Manually looking at this example we can easily see
* that now our maximum subsequence is 2. That is, 'ac'. There is a pattern forming
* here...
*
* If our row and column values match, then we must obviously increase our count
* by 1 but what are we building the result on top of? Well, we're building it on
* top of the top-left value. In this case, 1. So we get 1 + 1 = 2;
*
*                 'a'
*         +-----+-----+
*         | (1) |  1  |   'a' === 'a'
*         +---- ↖ ----+   result = top-left + 1;
*     'a' |  1  |  2  |
*         +-----+-----+
*
* When you think about it, this makes a lot of sense. We want the count for 'a'
* in 'ab' and we're then including the new matched value, hence the plus 1.
*
* If the values do not match then, how do we calculate our result for that cell?
* We take the maximum value between the cells to the left and top.
*
*                 'd'
*         +-----+-----+
*         |  2  | (2) |   'a' !== 'c'
*         +------  ↑  +   result = Math.max(left, top);
*     'c' | (3) ←  3  |
*         +-----+-----+
*
* This also makes sense when we think about it. Look at the grid about at 'c'
* downward and then 'd' across. This result was calculated using this method. We
* took 3 from the left as it was greater than 2 above.
*
* In the left cell, we have the count from 'acbc' in 'abc', 3. And in the top cell,
* we have the count from 'acb' in 'abcd', 2. It makes sense that we want the hightest
* count from these two comparisions moving forward.
*
* We continue with this method until we resolve all cells and are left with our
* final result of 4, in the bottom-right corner.
*
* So the formula for this algorithm looks like the following:
*
* if (s1[i] === s2[j]) {
*   T[i][j] = T[i-1][j-1] + 1;
* } else {
*   T[i][j] = max(T[i-1][j], T[i][j-1])
* }
*
* Time: O(n * k)
* Space: O(n * k)
*
* @param {string} s1 base string
* @param {string} s2 string to check for subsequence to s1
* @return {number} returns the longest common subsequence between s1 and s2
*/

function longestCommonSub(s1, s2) {
  let maxCount = 0;
  const cols = s1.length + 1;   // Add 1 to represent 0 valued column for DP
  const rows = s2.length + 1;   // Add 1 to represent 0 valued row for DP

  // build matrix with 0 columns
  const grid = [];
  for (let i = 0; i < rows; i += 1) {
    grid[i] = new Array(cols).fill(0);
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      if (s2[i-1] === s1[j-1]) {
        grid[i][j] = grid[i-1][j-1] + 1;
      } else {
        grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1]);
      }

      maxCount = Math.max(maxCount, grid[i][j]);
    }
  }

  return maxCount;
}

export default longestCommonSub;
