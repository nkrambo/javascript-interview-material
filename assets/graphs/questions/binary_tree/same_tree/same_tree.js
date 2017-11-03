
/**
* Same Tree
*
* Tags: Tree, DFS
* Leetcode: 100
*
* Given two binary trees, write a function to check if they are equal or not.
*
* Two binary trees are considered equal if they are structurally identical and
* the nodes have the same value.
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
* isSameTree()
*
* Solution:
*
* Pretty straight forward solution.
*
* We have to compare each tree node's value to see if they're the same. If so,
* then we just keep traversing DSF until we either hit leaf nodes for both trees,
* in which case, the trees must be same, or only one is a leaf node, meaning that
* the trees cannot be the same.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/

function isSameTree(p, q) {
  // base case 1 - we hit leaf nodes for both left and right... good so far
  if (!p && !q) return true;

  // we only only hit a single leaf node, but not both, they can't be the same
  if (!p || !q) return false;

  // check current nodes are the same
  if (p.val === q.val) {
    // keep recursing left and right
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
}

export default isSameTree;
