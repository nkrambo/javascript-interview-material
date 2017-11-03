
/**
* Maximum Depth of Binary Tree
*
* Tags: Recursive, DFS, Tree
* Leetcode: 104
*
* Given a binary tree, find its maximum depth.
*
* The maximum depth is the number of nodes along the longest path from the root
* node down to the farthest leaf node. This is also known as it's height.
*
* For example: Given the following binary tree, maximum depth is 4.
*
*           10
*         ↙    ↘
*       5       12
*             ↙    ↘
*           11      17
*                      ↘
*                       24
*
*/

/**
* Definition for a binary tree node.
*
* function TreeNode(val) {
*   this.val = val;
*   this.left = this.right = null;
* }
*/

/**
* maxDepth()
*
* This is also just simply the height of the tree.
*
* We basically do a DFS and wind up the stack until we hit a leaf node, returning 0.
*
* We then un-wind taking the maximum between the left and right and adding 1 for
* current level we're on.
*
* We return a ternary so that we can handle the case in which the root node does
* not have a left or right child.
*
* https://www.youtube.com/watch?v=_SiwrPXG9-g&t=306s
*
* Time: O(n)
* Space: O(n)
*
* @param {object} root binary tree node
* @return {number} returns the maximum depth of tree
*/

function maxDepth(root) {
  // base case
  if (!root) return 0;

  // traverse left and right
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // we have to handle the case that, either the root's left or right is null.
  // return the min between (left and right) + 1 for the current level
  return (left === 0 || right === 0) ? left + right + 1 : Math.max(left, right) + 1;
}

export default maxDepth;
