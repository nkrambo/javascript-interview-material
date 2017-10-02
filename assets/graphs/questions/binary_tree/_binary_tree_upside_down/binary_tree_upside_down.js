
/**
* Binary Tree Upside Down
*
* Tags: Tree
* Leetcode: 156
*
* Given a binary tree where all the right nodes are either leaf nodes with a sibling
* (a left node that shares the same parent node) or empty, flip it upside down
* and turn it into a tree where the original right nodes turned into left leaf
* nodes. Return the new root.
*
* For example:
* Given a binary tree {1, 2, 3, 4, 5},
*
*                  1
*               ↙     ↘
*             2         3
*           ↙   ↘
*         4       5
*
* return the root of the binary tree [4, 5, 2, #, #, 3, 1].
*
*                  4
*               ↙     ↘
*             5         2
*                     ↙   ↘
*                   3       1
*
* Confused what "{1, #, 2, 3}" means?
*
* OJ's Binary Tree Serialization:
*
* The serialization of a binary tree follows a level order traversal, where '#'
* signifies a path terminator where no node exists below.
*
* Here's an example:
*
*                  1
*               ↙     ↘
*             2         3
*                     ↙
*                   4
*                     ↘
*                       5
*
* The above binary tree is serialized as "{1, 2, 3, #, #, 4, #, #, 5}".
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
* upsideDownBinaryTree()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {TreeNode} root
* @return {TreeNode}
*/

// function upsideDownBinaryTree(root) {
//
// }
//
// export default upsideDownBinaryTree;
