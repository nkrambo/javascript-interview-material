
/**
* Inorder Successor in BST
*
* Tags: BST
* Leetcode: 285
*
* Given a binary search tree and a node in it, find the in-order successor of
* that node in the BST.
*
* Note:
*
* If the given node has no in-order successor in the tree, return null.
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
* findNext()
*
* IF EACH NODE REFERENCED ITS PARENT
*
* Solution:
*
* This solution requires composing 2 functions:
*
* - findNext
* - findSmallest
*
* We know that the next node will either be the smallest of the value's right subtree,
* or if that doesn't exist, it will be the closest ancestor of value with a greater
* value. So we would traverse up to find it. Since we have access to a node's parent,
* this is trivial.
*
* Time: O(log n)
* Space: O(1)
*
* @param {object} node BST node
* @return {object} returns the successor node object
*/

// function findNext(node) {
//   if (node === null) return null;
//
//   // if we have a right child, get the smallest of that sub-tree
//   if (node.right !== null) {
//     return findSmallest(node.right);
//   }
//
//   // there's no right child, we go up until we find an ancestor with a
//   // value larger than node
//   let q = node;
//   let x = q.parent;
//   while (x !== null && x.left !== q) {
//     q = x;
//     x = x.parent;
//   }
//
//   return x;
// }
//
// function findSmallest(root) {
//   let current = root;
//
//   while (current) {
//     if (current.left === null) return current;
//     current = current.left;
//   }
//
//   return null;
// }

/**
* inorderSuccessor()
*
* Time: O(1)
* Space: O(1)
*
* @param {object} root tree node
* @param {object} p node within tree
* @return {object} returns the successor node object
*/

// function inorderSuccessor(root, p) {
//
// }
//
// export { findNext, inorderSuccessor };
