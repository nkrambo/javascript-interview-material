
/**
* Populating Next Right Pointers in Each Node
*
* Tags: Tree, DFS
* Leetcode: 116
*
* Given a binary tree,
*
* struct TreeLinkNode {
*   TreeLinkNode *left;
*   TreeLinkNode *right;
*   TreeLinkNode *next;
* }
*
* Populate each next pointer to point to its next right node. If there is no next
* right node, the next pointer should be set to NULL.
*
* Initially, all next pointers are set to NULL.
*
* Note:
*
* 1. You may only use constant extra space.
*
* 2. You may assume that it is a perfect binary tree (ie, all leaves are at the
*    same level, and every parent has two children).
*
* Example:
*
* Given the following perfect binary tree,
*
*                  1
*               ↙     ↘
*             2         3
*           ↙  ↘       ↙  ↘
*         4      5   6     7
*
* After calling your function, the tree should look like:
*
*                  1 → NULL
*               ↙     ↘
*             2    →    3 → NULL
*           ↙  ↘      ↙   ↘
*         4   →  5 → 6  →   7 → NULL
*/

/**
* Definition for binary tree with next pointer.
*
* function TreeLinkNode(val) {
*   this.val = val;
*   this.left = this.right = this.next = null;
* }
*/

/**
* connect()
*
* Solution:
*
* @param {TreeLinkNode} root
* @return {void} Do not return anything, modify tree in-place instead.
*/

// function connect(root) {
//
// };
//
// export default connect;
