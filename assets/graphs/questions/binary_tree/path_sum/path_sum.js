
/**
* Path Sum
*
* Tags: Tree, DFS
* Leetcode: 112
*
* Given a binary tree and a sum, determine if the tree has a root-to-leaf path
* such that adding up all the values along the path equals the given sum.
*
* Example:
*
* Given the below binary tree and sum = 22,
*
*                  5
*               ↙     ↘
*             4         8
*           ↙         ↙   ↘
*         11        13      4
*       ↙    ↘                ↘
*     7        2                1
*
* Return true, as there exist a root-to-leaf path 5 → 4 → 11 → 2 which sum is 22.
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
* hasPathSum()
*
* Solution:
*
* We use a recursive solution for this.
*
* The idea is simple. We recurse down the tree and substract the current node val
* from the sum at each level. If we hit a leaf node and the sum is 0, then we have
* found a valid sum path, root to leaf, and return true.
*
* If we hit a leaf node and the sum does not equal 0 then we have not.
*
* https://www.youtube.com/watch?v=Jg4E4KZstFE
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @param {number} sum
* @return {boolean}
*/

function hasPathSum(root, sum) {
  // base case
  // we hit a leaf child(null) and there is no sum total on path.
  if (root === null) return false;

  // check if we hit a leaf AND if the total path subtracts to 0, that is, we found a sum path
  if (root.left === null && root.right === null && sum - root.val === 0) return true;

  // recurse left and right, subtracting current val from sum as we go
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

export default hasPathSum;
