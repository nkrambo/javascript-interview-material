
/**
* Paths with Sum
*
* You are given a binary tree in which each node contains an integer value
* (which might be positive or negative). Design an algorithm to count the
* number of paths that sum to a given value. The path does not need to start
* or end at the root or a leaf, but it must go downwards (traveling only from
* the parent nodes to the child nodes).
*/

/**
* pathSumBrute()
*
* Solution:
*
* Let's pick a potential sum, say 8, and then draw a binary tree based on this.
* This tree intentionally has a number of paths with this sum.
*
*                  10
*               ↙     ↘
*             5         -3
*          ↙    ↘          ↘
*        3        2          11
*      ↙   ↘        ↘
*    3      -2        1
*
* In a brute force approach, we just look at all possible paths. To do this, we
* traverse tp each node. At each node, we recursively try all paths downwards,
* tracking the sum as we go. As soon as we hit our target sum, we increment the
* total.
*
* Time: O(n log n)
* Space: O(1)
*
*
*
* @param {object} root binary tree node
* @param {number} target value path should sum to
* @return {number} returns the number of paths that sum to target, or -1
*/

function pathSumBrute(root, target) {
  if (root === null) return 0;

  // count paths with sum starting from root
  const pathsFromRoot = countPaths(root, target, 0);

  // try nodes on the left and right
  const pathOnLeft = pathSumBrute(root.left, target);
  const pathOnRight = pathSumBrute(root.right, target);

  return pathsFromRoot + pathOnLeft + pathOnRight;
}

/**
* countPaths()
*
* @param {object} node binary tree node
* @param {number} target value path should sum to
* @param {number} currentSum current sum of path
* @return {number} returns the number of paths that sum to target, or -1
*/

function countPaths(node, target, currentSum) {
  if (node === null) return 0;

  currentSum += node.value;
  let totalPaths = 0;

  // found a path from root
  if (currentSum === target) totalPaths += 1;

  // recurse left and right
  totalPaths += countPaths(node.left, target, currentSum);
  totalPaths += countPaths(node.right, target, currentSum);

  return totalPaths;
}

export { pathSumBrute };
