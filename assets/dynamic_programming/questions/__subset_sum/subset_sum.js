
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
*
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
