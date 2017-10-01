
/**
* Flatten Binary Tree to Linked List
*
* Tags: Tree, DFS
* Leetcode: 114
*
* Given a binary tree, flatten it to a linked list in-place.
*
* Example:
*
* Given,
*
*                  1
*               ↙    ↘
*             2        5
*           ↙   ↘        ↘
*         3       4        6
*
* The flattened tree should look like::
*
*                  1
*                    ↘
*                      2
*                        ↘
*                          3
*                            ↘
*                              4
*                                ↘
*                                  5
*                                    ↘
*                                      6
*
* Hints:
*
* If you notice carefully in the flattened tree, each node's right child points
* to the next node of a pre-order traversal.
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
* flatten()
*
* Solution:
*
* @param {TreeNode} root
* @return {void} Do not return anything, modify root in-place instead.
*/

// function flatten(root) {
//
// };
//
// export default flatten;
