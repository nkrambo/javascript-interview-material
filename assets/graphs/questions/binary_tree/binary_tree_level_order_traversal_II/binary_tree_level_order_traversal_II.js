
/**
* Binary Tree Level Order Traversal II
*
* Tags: Tree, BFS
* Leetcode: 107
*
* Given a binary tree, return the bottom-up level order traversal of its nodes'
* values. (ie, from left to right, level by level from leaf to root).
*
* Example:
*
* Given: [3, 9, 20, null, null, 15, 7]
*
*                  3
*               ↙     ↘
*             9         20
*                     ↙   ↘
*                   15     7
*
* Return its bottom-up level order traversal as:
*
* [
*   [15, 7],
*   [9, 20],
*   [3]
* ]
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
* levelOrderBottom()
*
* Solution:
*
* Out solution follows a standard 2 queue appoach for traversing trees level by
* level, except unshift our level sub array onto the results, so that they are
* returned in reverse, or from the bottom up.
*
* You could also push to an array and then reverse the results before returning,
* or you could use a stack too.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderBottom(root) {
  // handle null input
  if (!root) return [];

  const levels = [];

  // two queues
  const q1 = [root]; // start with the first
  const q2 = [];

  while (q1.length || q2.length) {
    let level = [];

    // push all queue nodes into level
    // push all children nodes into q2
    while (q1.length) {
      const node = q1.shift();
      level.push(node.val);
      if (node.left) q2.push(node.left);
      if (node.right) q2.push(node.right);
    }

    // push level from q1
    // clear out level for q2
    levels.unshift(level);
    level = [];

    // push all queue nodes into level
    // push all children nodes into q1
    while (q2.length) {
      const node = q2.shift();
      level.push(node.val);
      if (node.left) q1.push(node.left);
      if (node.right) q1.push(node.right);
    }

    // push level from q2
    // but...don't unshift an empty array
    if (level.length) {
      levels.unshift(level);
    }
  }

  return levels;
}

export default levelOrderBottom;
