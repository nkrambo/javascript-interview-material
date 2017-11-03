
/**
* Minimum Depth of Binary Tree
*
* Tags: Tree, DFS, BFS
* Leetcode: 111
*
* Given a binary tree, find its minimum depth.
*
* The minimum depth is the number of nodes along the shortest path from the root
* node down to the nearest leaf node.
*/

/**
* minDepth()
*
* Solution:
*
* We basically do a DFS and wind up the stack until we hit a leaf node, returning 0.
*
* We then un-wind taking the minimum between the left and right and adding 1 for
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
* @param {TreeNode} root
* @return {number}
*/

/**
* Definition for a binary tree node.
*
* function TreeNode(val) {
*   this.val = val;
*   this.left = this.right = null;
* }
*/

function minDepth(root) {
  // base case
  if (!root) return 0;

  // traverse left and right
  const left = minDepth(root.left);
  const right = minDepth(root.right);

  // we have to handle the case that, either the root's left or right is null.
  // return the min between (left and right) + 1 for the current level
  return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1;
}

export default minDepth;
