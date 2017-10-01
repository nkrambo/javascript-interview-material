
/**
* Populating Next Right Pointers in Each Node II
*
* Tags: Tree, DFS
* Leetcode: 117
*
* Follow up for problem "Populating Next Right Pointers in Each Node".
*
* What if the given tree could be any binary tree? Would your previous solution
* still work?
*
* Note:
*
* 1. You may only use constant extra space.
*
* Example:
*
* Given the following binary tree,
*
*                  1
*               ↙     ↘
*             2         3
*           ↙  ↘          ↘
*         4      5         7
*
* After calling your function, the tree should look like:
*
*                  1 → NULL
*               ↙     ↘
*             2    →    3 → NULL
*           ↙  ↘          ↘
*         4   →  5    →     7 → NULL
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
