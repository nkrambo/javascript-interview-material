
/**
* Subset Sum
*
* Tags: Bottom Up, Classic Problems
*
* Given a set of non negative numbers and a total, find if there exists a subset
* in this set whose sum is same as total.
*
* Example:
* Input: [2, 3, 7, 8, 10], 11
* Output: True [7, 3]
*
* Example:
* Input: [2, 3, 7, 8, 10], 14
* Output: False
*/

/**
* subsetSum()
*
* Solution:
*
* This is another classic problem that we can solve though bottom-up dynamic
* programming.
*
* As usual, we'll start by drawing out a simple grid to help us solve some
* sub-problems.
*
* Across the top, we'll have the all the numbers from 0 - total. In our case, 11.
* Then down the side, we'll have the numbers included in the 'nums' array that will
* be passed in to our function. [2, 3, 7, 8, 10].
*
* +-----+------------------------------------------------------------------------+
* |     |   0    1     2     3     4     5     6     7     8     9     10    11  |
* +------------------------------------------------------------------------------+
* |  2  |   T    F     T     F     F     F     F     F     F     F     F     F   |
* +------------------------------------------------------------------------------+
* |  3  |   T    F     T     T     F     F     F     F     F     F     F     F   |                                                                  |
* +------------------------------------------------------------------------------+
* |  7  |   T    F     F     F     F     F     F     F     F     F     F     F   |
* +------------------------------------------------------------------------------+
* |  8  |   T    F     F     F     F     F     F     F     F     F     F     F   |
* +------------------------------------------------------------------------------+
* |  10 |   T    F     F     F     F     F     F     F     F     F     F     F   |
* +------------------------------------------------------------------------------+
*
* Let's step through how we fill this out...
*
* For each cell, we want to solve if out current 'num' sums to the current 'total'.
* Eventually, we build our answer to be the bottom right cell.
*
* In the 0 'total' column, we have 'T' across the board because we can always sum
* to 0 with no number.
*
* Let's look at out first 'num', 2, and step through our sum values. We're asking,
* if we just have 2 does it sum to the current total? So first, does 2 sum to 1,
* well obviously not so this is false. Next, does 2 sum to 2, yup this is true.
* Then the rest of the values will be false because they are all greater than 2.
*
* Next row, 3. Now we are checking the 'nums' [2, 3] to see if they sum to the
* current total. First cell, 3 is less than 1, so we take the result from the cell
* above, F. Same for the next cell, 3 is less than 2 so we take the top cell, T.
* This makes sense, remember we're checking [2, 3] now... so we could just take 2.
*
* Next cell is where it gets interesting.
*
*
*            1    (2)
*         +-----+-----+
*      2  |  F  |  T  |   if (num < total) {
*         +------  ↑  +     result = top
*     (3) |  F  |  T  |   }
*         +-----+-----+
*
*            0     1     2    (3)
*         +-----+-----+-----+-----+
*      2  | (T) ←  F  ←  T  ←  F  |   if (num >= total) {
*         +------------------  ↑  +     result = top - num
*     (3) |  T  |  F  |  T  |  T  |   }
*         +-----+-----+-----+-----+
*
* Time: O(n * k)
* Space: O(n * k)
*
* @param {array} nums non-negative integers
* @param {number} total to check for subset sum
* @return {boolean} returns true if a subset exists that equals total, otherwise false
*/

function subsetSum(nums, total) {

}

export default subsetSum;
