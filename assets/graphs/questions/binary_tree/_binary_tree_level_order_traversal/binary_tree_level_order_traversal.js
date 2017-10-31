
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
* levelOrder()
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
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

// function levelOrder(root) {
//   const order = [];
//   const queue = [];
//
//   // check for null input
//   if (root !== null) {
//     queue.push(root);
//   }
//
//   while (queue.length) {
//     const level = queue.length;
//     const current = queue.shift();
//     const subArray = [];
//
//     for (let i = 0; i < level; i += 1) {
//       if (current.left !== null) {
//         queue.push(current.left);
//       }
//
//       if (current.right !== null) {
//         queue.push(current.right);
//       }
//
//       subArray.push(current.val);
//     }
//
//     order.push(subArray);
//   }
//
//   return order;
// }

function levelOrder(root) {
  const order = [];
  const queue = [];

  // check for null input
  if (root !== null) {
    queue.push(root);
  }

  while (queue.length) {
    const level = queue.length;
    const current = queue.shift();
    const subArray = [];

    for (let i = 0; i < level; i += 1) {
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }

      subArray.push(current.val);
    }

    order.push(subArray);
  }

  return order;
}

export default levelOrder;
