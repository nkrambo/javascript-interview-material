
/**
* Scramble String
*
* Tags: Dynamic Programming, String
* Leetcode: 87
*
* Given a string str1, we may represent it as a binary tree by partitioning it
* to two non-empty substrings recursively.
*
* Below is one possible representation of str1 = 'great':
*
*        great
*       ↙    ↘
*      gr    eat
*     ↙ ↘    ↙  ↘
*    g   r  e   at
*               ↙ ↘
*              a   t
*
* To scramble the string, we may choose any non-leaf node and swap its two children.
*
* For example, if we choose the node 'gr' and swap its two children, it produces
* a scrambled string 'rgeat'.
*
*        rgeat
*       ↙     ↘
*     rg      eat
*    ↙  ↘     ↙  ↘
*   r    g   e   at
*               ↙  ↘
*              a    t
*
* We say that 'rgeat' is a scrambled string of 'great'.
*
*        rgtae
*       ↙     ↘
*      rg     tae
*     ↙  ↘    ↙  ↘
*    r    g  ta   e
*           ↙  ↘
*          t    a
*
* We say that 'rgtae' is a scrambled string of 'great'.
*
* Given two strings str1 and str2 of the same length, determine if str2 is a
* scrambled string of str1.
*/

/**
* isScramble()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {string} s1 string
* @param {string} s2 string to check if scramble of s1
* @return {boolean} returns true if s2 is a scramble of s1
*/

// function isScramble(s1, s2) {
//
// }
//
// export default isScramble;
