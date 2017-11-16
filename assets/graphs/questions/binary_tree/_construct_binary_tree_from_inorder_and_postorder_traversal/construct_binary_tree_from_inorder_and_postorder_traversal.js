
/**
* Construct Binary Tree from Inorder and Postorder Traversal
*
* Tags: Tree, DFS
* Leetcode: 106
*
* Given inorder and postorder traversal of a tree, construct the binary tree.
*
* Note:
*
* You may assume that duplicates do not exist in the tree.
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
* buildTree()
*
* Solution:
*
* Let's take the following tree.
*
*                  5
*               ↙     ↘
*             4         8
*           ↙         ↙   ↘
*         11        13      4
*       ↙    ↘                ↘
*     7        2                1
*
* inOrder = [7, 11, 2, 4, 5, 13, 8, 4, 1]
* postOrder = [7, 2, 11, 4, 13, 1, 4, 8, 5]
*
* The the basic idea is to take the last element in postorder array as the root, find the position of the root in the inorder array;
*
* Time: O(n)
* Space: O(n)
*
* @param {number[]} inorder
* @param {number[]} postorder
* @return {TreeNode}
*/

// function buildTree(inorder, postorder) {
//   return helper(0, 0, inorder, postorder);
//   return helper(0, 0, inorder.length - 1, preorder, inorder);
// }
//
// function helper(preStart, inStart, inEnd, preorder, inorder) {
//   // base case
//   // we traversed all of the pre-order or in-order
//   if (preStart > preorder.length - 1 || inStart > inEnd) return null;
//
//   // create root node from preorder start
//   const root = new TreeNode(preorder[preStart]);
//
//   // find index of current root in inorder
//   // you could also use a map
//   let inIndex = 0;
//   for (let i = inStart; i <= inEnd; i += 1) {
//     if (inorder[i] === root.val) {
//       inIndex = i;
//     }
//   }
//
//   // traverse left
//   // sub-left-tree is all nodes inOrder[0] - inOrder[inIndex - 1], left side of pre-order root
//   // bump left preStart by 1
//   root.left = helper((preStart + 1), inStart, (inIndex - 1), preorder, inorder);
//
//   // traverse right
//   // sub-right-tree is all nodes inOrder[inIndex - 1] - inOrder[inEnd], right side of pre-order root
//   // bump right preStart by 1
//   root.right = helper(((preStart + inIndex) - inStart) + 1, (inIndex + 1), inEnd, preorder, inorder);
//
//   return root;
// }
//
// export default buildTree;
