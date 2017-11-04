
/**
* Binary Tree Level Order Traversal
*
* Tags: Tree, BFS
* Leetcode: 102
*
* Given a binary tree, return the level order traversal of its nodes' values.
* (ie, from left to right, level by level).
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
* return its level order traversal as:
*
* [
*   [3],
*   [9, 20],
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
* levelOrderTwoQueues()
*
* Solution:
*
* Trees can also be traversed in level-order, where we visit every node on a level
* before going to a lower level. This search is referred to as breadth-first search
* (BFS), as the search tree is broadened as much as possible on each depth before
* going to the next depth.
*
* For example, if we have the following BST an level-order traversal would return:
* [4, 2, 6, 1, 3, 5, 7].
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* The big difference here is that BFS uses a queue instead of a stack.
*
* A level by level traversal is almost trivial, but to then handle each level
* is a little trickier. When we travese by level using a queue, we shifts nodes
* off the queue in a single sequence. How do we then distinguish between when a
* level starts or finishes?
*
* There's 3 approaces to this:
*
* 1. Use 2 queues
* 2. Use 1 queue and a delimiter
* 3. Use 1 queue and a count
*
* We'll go over each of these.
*
* https://www.youtube.com/watch?v=7uG0gLDbhsI&t=658s
*
* First, using 2 queues.
*
* This one is pretty straight forward.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderTwoQueues(root) {
  // check empty input
  if (!root) return [];

  const levels = [];

  // two queues
  const q1 = [root]; // start with the first
  const q2 = [];

  while (q1.length || q2.length) {
    let level = [];

    while (q1.length) {
      const node = q1.shift();
      level.push(node.val);
      if (node.left) q2.push(node.left);
      if (node.right) q2.push(node.right);
    }

    // push level from q1
    // clear out level for q2
    levels.push(level);
    level = [];

    while (q2.length) {
      const node = q2.shift();
      level.push(node.val);
      if (node.left) q1.push(node.left);
      if (node.right) q1.push(node.right);
    }

    // push level from q2
    // but...don't push an empty array
    if (level.length) {
      levels.push(level);
    }
  }

  return levels;
}

/**
* levelOrderDelimiter()
*
* Solution:
*
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderDelimiter(root) {

}

/**
* levelOrderCount()
*
* Solution:
*
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderCount(root) {

}

export { levelOrderTwoQueues, levelOrderDelimiter, levelOrderCount };
