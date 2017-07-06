
/**
* Container With Most Water
*
* Tags: Array, Two Pointers
* Leetcode: 11
*
* Given n non-negative integers a{1}, a{2}, ... a{n}, where each represents a point
* at coordinate (i, a{i}). n vertical lines are drawn such that the two endpoints
* of line i is at (i, a{i}) and (i, 0). Find two lines, which together x-axis forms
* a container, such that the container contains the most water.
*
* Note:
*
* You may not slant the container and n is at least 2.
*/

/**
* maxArea()
*
* Solution:
*
* Let's use an example to help us illustrate our solution.
*
* Assume height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
*
* What would this look like if we plotted out these co-ordinates according to the
* problem?
*
*
*
*  (height)
*
*     ^
*     |
*     |
*   8 +             +                                  +
*     |             |                                  |
*     |             |                                  |
*   7 +             |                                  |             +
*     |             |                                  |             |
*     |             |                                  |             |
*   6 +             |      +                           |             |
*     |             |      |                           |             |
*     |             |      |                           |             |
*   5 +             |      |             +             |             |
*     |             |      |             |             |             |
*     |             |      |             |             |             |
*   4 +             |      |             |      +      |             |
*     |             |      |             |      |      |             |
*     |             |      |             |      |      |             |
*   3 +             |      |             |      |      |      +      |
*     |             |      |             |      |      |      |      |
*     |             |      |             |      |      |      |      |
*   2 +             |      |      +      |      |      |      |      |
*     |             |      |      |      |      |      |      |      |
*     |             |      |      |      |      |      |      |      |
*   1 +      +      |      |      |      |      |      |      |      |
*     |      |      |      |      |      |      |      |      |      |
*     |      |      |      |      |      |      |      |      |      |
*     +------+------+------+------+------+------+------+------+------+------+--->
*     0      1      2      3      4      5      6      7      8      9      10
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number[]} height
* @return {number}
*/

// function maxArea(height) {
//
// }
//
// export default maxArea;
