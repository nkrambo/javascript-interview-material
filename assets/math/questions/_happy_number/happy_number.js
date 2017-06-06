
/**
* Happy Number
*
* Tags: Hash Map, Math
* Leetcode: 202
*
* Write an algorithm to determine if a number is 'happy'.
*
* A happy number is a number defined by the following process: Starting with any
* positive integer, replace the number by the sum of the squares of its digits,
* and repeat the process until the number equals 1 (where it will stay), or it
* loops endlessly in a cycle which does not include 1. Those numbers for which
* this process ends in 1 are happy numbers.
*
* Example: 19 is a happy numner...
*
* 1^2 + 9^2 = 82
* 8^2 + 2^2 = 68
* 6^2 + 8^2 = 100
* 1^2 + 0^2 + 0^2 = 1
*
* Solution:
*
* We can approach this one with a hash map.
*
* Time: O(1)
* Space: O(1)
*
* @param {integer} n positive integer
* @return {boolean} returns true if num is 'happy', otherwise false
*/

// function isHappy(n) {
//
// }
//
// export default isHappy;
