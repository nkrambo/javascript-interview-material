
/**
* Binary Tree Zigzag Level Order Traversal
*
* Tags: Tree, BFS, Stack
* Leetcode: 103
*
* Given a binary tree, return the zigzag level order traversal of its nodes' values.
* (ie, from left to right, then right to left for the next level and alternate between).
*
* Example:
*
* Given binary tree [3, 9, 20, null, null, 15, 7]
*
*                  3
*               ↙     ↘
*             9         20
*                     ↙   ↘
*                   15      7
*
* return its zigzag level order traversal as:
*
* [
*   [3],
*   [20, 9],
*   [15, 7]
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
* zigzagLevelOrder()
*
* Solution:
*
* This is like a regular level order traversal where we can use 2 queues to break
* the traversal sequence into sub arrays that represent each level. The only
* additional trick is that we need to return every other level in reverse to
* achieve the zigzag traversal.
*
* This is pretty simple, instead of pushing nodes onto the level sub array, we
* just unshift() them. We could also use a stack, or reverse array helper.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function zigzagLevelOrder(root) {
  // handle null input
  if (!root) return [];

  const zigzag = [];

  // two queues
  const q1 = [root]; // start with the first
  const q2 = [];

  while (q1.length || q2.length) {
    // sub array left-to-right
    let right = [];

    // push all queue nodes into level
    // push all children nodes into q2
    while (q1.length) {
      const node = q1.shift();
      right.push(node.val);
      if (node.left) q2.push(node.left);
      if (node.right) q2.push(node.right);
    }

    if (right.length) {
      zigzag.push(right);
    }
    right = [];

    // sub array right-to-left
    let left = [];
    // push all queue nodes into level
    // push all children nodes into q1
    while (q2.length) {
      const node = q2.shift();
      left.unshift(node.val);
      if (node.left) q1.push(node.left);
      if (node.right) q1.push(node.right);
    }

    if (left.length) {
      zigzag.push(left);
    }
    left = [];
  }

  return zigzag;
}

export default zigzagLevelOrder;
