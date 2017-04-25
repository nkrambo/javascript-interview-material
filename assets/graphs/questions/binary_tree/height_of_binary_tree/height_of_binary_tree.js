
/**
* Maximum Height of Binary Tree
*
* Tags: Recursive
*
* Given the root of binary tree return the maximum height of the tree.
*
* For example: Given the following binary tree, height is 4.
*
*           10
*         ↙    ↘
*       5       12
*             ↙    ↘
*           11      17
*                      ↘
*                       24
*
* https://www.youtube.com/watch?v=_SiwrPXG9-g
*/

function height(root) {
  // base case
  if (root == null) return 0;

  // recurse
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // get max of left or right
  return Math.max(leftHeight, rightHeight) + 1;
}

export default height;
