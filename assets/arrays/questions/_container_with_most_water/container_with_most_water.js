
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
* Time: O(n)
* Space: O(1)
*
* We can do this in a single pass.
*
* @param {number[]} height
* @return {number}
*/

function maxArea(height) {
  let maxarea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return maxarea;
}

// BRUTE FORCE
//
// Initialize ans = 0
// Iterate the array from left to right:
// Initialize max_left = 0 and max_right = 0
// Iterate from the current element to the beginning of array updating: max_left=max(max_left, height[j])
// Iterate from the current element to the end of array updating: max_right=max(max_right, height[j])
// Add min(max_left,max_right)−height[i] to ans

// "maxLeft: 1, maxRight: 3, height: 1"
// "Answer: 0"
// "maxLeft: 1, maxRight: 3, height: 0"
// "Answer: 1"
// "maxLeft: 2, maxRight: 3, height: 2"
// "Answer: 1"
// "maxLeft: 2, maxRight: 3, height: 1"
// "Answer: 2"
// "maxLeft: 2, maxRight: 3, height: 0"
// "Answer: 4"
// "maxLeft: 2, maxRight: 3, height: 1"
// "Answer: 5"
// "maxLeft: 3, maxRight: 3, height: 3"
// "Answer: 5"
// "maxLeft: 3, maxRight: 2, height: 2"
// "Answer: 5"
// "maxLeft: 3, maxRight: 2, height: 1"
// "Answer: 6"
// "maxLeft: 3, maxRight: 2, height: 2"
// "Answer: 6"

// var trap = function(height) {
//     let answer = 0;

//     for (let i = 1; i < height.length - 1; i += 1) {
//         let maxLeft = 0;
//         let maxRight = 0;

//         // search the left part for max bar size
//         for (let j = i; j >= 0; j -= 1) {
//             maxLeft = Math.max(maxLeft, height[j]);
//         }

//         // search the right part for max bar size
//         for (let j = i; j < height.length; j += 1) {
//             maxRight = Math.max(maxRight, height[j]);
//         }

//         answer += Math.min(maxLeft, maxRight) - height[i];
//     }

//     return answer;
// };

export default maxArea;
