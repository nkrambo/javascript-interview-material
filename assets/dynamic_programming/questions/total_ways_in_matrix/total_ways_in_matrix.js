
/**
* Total Ways in Matrix
*
* Tags: Bottom Up, Classic Problems
*
* Given a 2 dimensional matrix, how many ways you can reach bottom right from top
* left provided you can only move down and right.
*
* For example, say we have the following matrix:
*
* const matrix = [[0, 0, 0, 0],
*                 [0, 0, 0, 0],
*                 [0, 0, 0, 0],
*                 [0, 0, 0, 0]];
*/

/**
* totalWays()
*
* Solution:
*
* We can solve this one, quite easily, with dynamic programming. We'll use the
* example matrix from above (4x4).
*
* We'll start by making a matrix exactly the same size as the input, let's call
* it 'sums'. We'll use each cell in sums to calculate how many moves it takes to
* get to that cell from the top-left and only using 'down' and 'right' moves.
*
* Let's start with the first cell. We know that this is the starting position, so
* we don't need to move here at all, so we can set this to 0.
*
* Next, the cell to the right of start. Well this is simple, there's only 1 way
* to move to here as we can only come from the left starting cell. When you think
* about it, the entire first row except for the start should have a result of 1.
* This is because we can only come left from the start and not from any other
* direction. The same is true for entire first column, we can only travel downward
* from the start.
*
* Next, what about sums[1][1]? Well, this is where it's a little trickier. Because
* we know that we can only move 'right' and 'down', we also know that at each cell
* we must arrive there from the 'left' or the 'top' cell. Therefore, it makes sense
* that the number of ways to get to the current cell is the number of ways to get
* to its top cell plus the number of ways to get to its left cell. In the case of
* sums[1][1], this is 2.
*
* And so that's basically it. Once we resolve all cells with this approach we will
* have our final result in bottom-right, or finish, cell. In this case, 20.
*
* So the formula is one is quite easy:
*
* T[i][j] = T[i-1][j] + T[i][j-1]
*
* +-------------------------+
* |   0     1     1     1   |
* +-------------------------+
* |   1     2     3     4   |
* +-------------------------+
* |   1     3     6    10   |
* +-------------------------+
* |   1     4    10    20   |
* +-------------------------+
*
* Time: O(n * m)
* Space: O(n * m)
*
* Where n is the length of matrix, and m is the length of matrix[0]
*
* @param {array} matrix
* @return {number} returns the number of ways to reach bottom right from top left
*/

function totalWays(matrix) {

  // build sums matrix, mimic input
  const sums = [];
  for (let i = 0; i < matrix.length; i += 1) {
    sums[i] = new Array(matrix[0].length);
  }

  // first row and column to 1s
  // setting the 'start' cell to 0 is irrelevant
  sums[0].fill(1);
  sums.forEach((row) => {
    row[0] = 1;
  });

  // solve sub-problems, start from 1, 1
  for (let i = 1; i < sums.length; i += 1) {
    for (let j = 1; j < sums[0].length; j += 1) {
      sums[i][j] = sums[i-1][j] + sums[i][j-1];
    }
  }

  // return the bottom right
  return sums[sums.length - 1][sums.length - 1];
}

export default totalWays;
