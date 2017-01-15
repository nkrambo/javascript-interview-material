
/**
* Maximum Subsquare With Sides as x
*
* Tags: Bottom Up, Classic Problems
*
* Given a matrix of 0s and Xs. Find largest subsquare matrix in this matrix such
* that sides of that square matrix are entirely made of Xs.
*
* Note: it doesn't matter what values are inside of the square.
*
* For example, say we given the following matrix:
*
*    [['0', '0', '0', '0', 'x'],
*     ['x', '0', 'x', 'x', 'x'],
*     ['x', '0', 'x', '0', 'x'],
*     ['x', 'x', 'x', 'x', 'x'],
*     ['0', '0', 'x', 'x', 'x']];
*
* Here we would return 3, for the square at position matrix[1][2] to matrix[3][4].
* There are two other valid subsquares in this example, but they both have a
* dimensions of 2.
*/

/**
* maximumSubsquare()
*
* Solution:
*
* We can solve this one with a bottom-up dynamic programming approach. Per usual,
* we'll start with a matrix of the same size as the input to help us solve the
* sub-problems.
*
* Let's step through how we do this...
*
*
*
* +--------------------------------------------------------+
* |   (0, 0)     (0, 0)     (0, 0)     (0, 0)     (1, 1)   |
* +--------------------------------------------------------+
* |   (1, 1)     (0, 0)     (1, 1)     (1, 2)     (2, 3)   |
* +--------------------------------------------------------+
* |   (2, 1)     (0, 0)     (2, 1)     (0, 0)     (3, 1)   |
* +--------------------------------------------------------+
* |   (3, 1)     (1, 2)     (3, 3)     (1, 4)     (4, 5)   |
* +--------------------------------------------------------+
* |   (0, 0)     (0, 0)     (4, 1)     (2, 2)     (5, 3)   |
* +--------------------------------------------------------+
*
* So, the formula for this one is a little tricky:
*
*   if (matrix[i][j] === 'X') {
*       if (i === 0 && j === 0) {
*           T[i][j].hori = 1;
*           T[i][j].vert = 1;
*
*       } else if (i == 0) {
*           T[i][j].hori = T[i][j-1].hori + 1;
*           T[i][j].vert = 1;
*
*       } else if (j == 0) {
*           T[i][j].vert = T[i-1][j].vert + 1;
*           T[i][j].hori = 1;
*
*       } else {
*           T[i][j].hori = T[i][j-1].hori + 1;
*           T[i][j].vert = T[i-1][j].vert + 1;
*       }
*   }
*
* Then, of course, on top of this we must then find the largest subsquare.
*
* Time: O(1)
* Space: O(1)
*
* Where ...
*
* @param {array} matrix
* @return {number} the dimension of the largest subsquare of matrix, with all x sides
*/

function maximumSubsquare(matrix) {

  // build matrix, fill with {0, 0} objects by default
  const sums = [];
  for (let i = 0; i < matrix.length; i += 1) {
    sums[i] = new Array(matrix[0].length).fill({vert: 0, hori: 0});
  }

  // solve sub-problems
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {

      // found 'x'!
      if (matrix[i][j] === 'x') {

        // if we hit the top-left, manually set both vert, hori
        if (i === 0 && j === 0) {
          sums[i][j].vert = 1;
          sums[i][j].hori = 1;

        // if we hit top row, manually set vert
        } else if (i === 0) {
          sums[i][j].hori = sums[i][j-1].hori + 1;
          sums[i][j].vert = 1;

        // if we hit first column, manually set hori
        } else if (j === 0) {
          sums[i][j].vert = sums[i-1][j].vert + 1;
          sums[i][j].hori = 1;

        // otherwise, we're good, calculate both vert and hori
        } else {
          sums[i][j].hori = sums[i][j-1].hori + 1;
          sums[i][j].vert = sums[i-1][j].vert + 1;
        }
      }
    }
  }


  // corner and find min of hori or ver at every cell.

  //If this is greater than 1 then see if you can find a number between this min and 1
  //such that on left's ver and top's hori is greater greater than or equal to k.

  // let's calculate the largest subsquare, track it with 'max', 1 default
  let max = 1;

  // iterate from bottom-right to top-left, eseentially 'backward'
  for (let i = sums.length - 1; i >= 0; i -= 1) {
    for (let j = sums[0].length -1; j >= 0; j -= 1) {


      if (sums[i][j].vert === 0 || sums[i][j].vert === 1 || sums[i][j].hori === 1) {
        continue;
      }

      let min = Math.min(sums[i][j].vert, sums[i][j].hori);

      let k = 0;
      for (k = min; k > 1; k -= 1) {
        if (sums[i][j-k+1].vert >= k && sums[i-k+1][j].hori >= k) {
          break;
        }
      }

      if (max < k) max = k;
    }
  }

  return max;
}

export default maximumSubsquare;
