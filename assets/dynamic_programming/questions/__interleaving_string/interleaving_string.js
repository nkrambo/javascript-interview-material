
/**
* Interleaving String
*
* Given strings s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
*
* Example:
* Input: 'aab', 'axy', 'aaxabby'
* Output: true
*
* Example:
* Input: 'aab', 'axy', 'abaaxy'
* Output: false
*/

/**
* isInterleave()
*
* Solution:
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
* Time: O(1)
* Space: O(1)
*
* @param {string} s1 string to compose s3
* @param {string} s2 string to compose s3
* @param {string} s3 string to check for interleaving
* @return {boolean} returns true if s3 is an interleaved string of s1 and s2, otherwise false
*/

function isInterleave(s1, s2, s3) {

}

export default isInterleave;
