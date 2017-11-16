
import { TreeNode } from '../../../data_structures/tree_node/tree_node';

/**
* Construct Binary Tree from Preorder and Inorder Traversal
*
* Tags: Tree, DFS
* Leetcode: 105
*
* Given preorder and inorder traversal of a tree, construct the binary tree.
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
* A good way to attempt this question is to work backwards. Approach this question
* by drawing a binary tree, then list down its preorder and inorder traversal. As
* most binary tree problems, you want to solve this recursively.
*
* Let us look at this example tree.
*
*              --- 7 ---
*           ↙             ↘
*        10                 2
*      ↙   ↘              ↙
*    4       3          8
*              ↘      ↙
*                1  11
*
* The preorder and inorder traversals for the binary tree above is:
*
* preorder = [7, 10, 4, 3, 1, 2, 8, 11]
* inorder = [4, 10, 3, 1, 7, 11, 8, 2]
*
* The crucial observation to this problem is the tree's root always coincides with
* the first element in preorder traversal. This must be true because in preorder
* traversal you always traverse the root node before its children. The root node's
* value appear to be 7 from the binary tree above.
*
* We easily find that 7 appears as the 4th index in the inorder sequence. (Notice
* that earlier we assumed that duplicates are not allowed in the tree, so there
* would be no ambiguity). For inorder traversal, we visit the left subtree first,
* then root node, and followed by the right subtree. Therefore, all elements left
* of 7 must be in the left subtree and all elements to the right must be in the
* right subtree.
*
* We see a clear recursive pattern from the above observation. After creating the
* root node (7), we construct its left and right subtree from inorder traversal
* of [4, 10, 3, 1] and [11, 8, 2] respectively. We also need its corresponding
* preorder traversal which could be found in a similar fashion. If you remember,
* preorder traversal follows the sequence of root node, left subtree and followed
* by right subtree. Therefore, the left and right subtree's preorder traversal
* must be [4, 10, 3, 1] and [11, 8, 2] respectively. Since the left and right
* subtree are binary trees in their own right, we can solve recursively!
*
* Time: O(n)
* Space: O(n)
*
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
*/

function buildTree(preorder, inorder) {
  return helper(0, 0, inorder.length - 1, preorder, inorder);
}

function helper(preStart, inStart, inEnd, preorder, inorder) {
  // base case
  // we traversed all of the pre-order or in-order
  if (preStart > preorder.length - 1 || inStart > inEnd) return null;

  // create root node from preorder start
  const root = new TreeNode(preorder[preStart]);

  // find index of current root in inorder
  // you could also use a map
  let inIndex = 0;
  for (let i = inStart; i <= inEnd; i += 1) {
    if (inorder[i] === root.val) {
      inIndex = i;
    }
  }

  // traverse left
  // sub-left-tree is all nodes inOrder[0] - inOrder[inIndex - 1], left side of pre-order root
  // bump left preStart by 1
  root.left = helper((preStart + 1), inStart, (inIndex - 1), preorder, inorder);

  // traverse right
  // sub-right-tree is all nodes inOrder[inIndex - 1] - inOrder[inEnd], right side of pre-order root
  // bump right preStart by 1
  root.right = helper(((preStart + inIndex) - inStart) + 1, (inIndex + 1), inEnd, preorder, inorder);

  return root;
}

export default buildTree;
