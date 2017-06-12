
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
* Time: O(1)
* Space: O(1)
*
* @param {object} root binary tree node
* @return {number} returns the maximum depth of tree
*/

// function maxDepth(root) {
//   // base case
//   if (root == null) return 0;
//
//   // recurse
//   const leftHeight = maxDepth(root.left);
//   const rightHeight = maxDepth(root.right);
//
//   // get max of left or right
//   return Math.max(leftHeight, rightHeight) + 1;
// }
//
// export default maxDepth;
