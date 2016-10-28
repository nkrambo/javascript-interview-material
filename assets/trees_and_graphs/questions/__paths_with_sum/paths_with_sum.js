
/**
* Paths with Sum
*
* You are given a binary tree in which each node contains an integer value
* (which might be positive or negative). Design an algorithm to count the
* number of paths that sum to a given value. The path does not need to start
* or end at the root or a leaf, but it must go downwards (traveling only from
* the parent nodes to the child nodes).
*
* Solution:
*
* Example, find the number of paths that amount to 8
*
*                  10
*               ↙     ↘
*             5         -3
*           ↙  ↘          ↘
*         3      2          11
*       ↙  ↘       ↘
*     3    -2       1
*
* The brute force approach to this problem would be to traverse to each node and, at each node,
* we try all possible paths downwards, tracking the sum as we go. When we hit our target we
* increment our results.
*
* This would give us a runtime of O(n log n), we can do better.
*
* Look at our brute force approach, we would repeat a lot of work. For a path of
* 10 -> 5 -> 3 -> -2, we would traverse parts of this path repeatedly.
*
*/

/**
* Count paths with sum
*
* @param {object} tree Tree class to check the paths on
* @return {number} Returns the number of paths with the sum, or -1
*/

function countPathsWithSum(tree) {

}

export default countPathsWithSum;
