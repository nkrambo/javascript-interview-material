
/**
* Invert Binary Tree
*
* Given a binary tree, invert it so that it's left value appear on the right or vice versa.
* Inspired by Max Howell -
* "Google: 90% of our engineers use the software you wrote (Homebrew),
* but you can’t invert a binary tree on a whiteboard so fuck off."
*
* Example:
*
*                  4
*               ↙     ↘
*             2         7
*           ↙  ↘      ↙   ↘
*         1     3    6     9
*
*             Inverted to
*
*                  4
*               ↙     ↘
*             7         4
*           ↙  ↘      ↙   ↘
*         9     6    3     1
*
* Solution:
*
*/

/**
* Invert binary tree
*
* @param {object} tree Tree node
* @return {object} Returns the same tree node
*/

function invertTree(tree) {
  if(tree.root === null) throw new Error('Expected tree class');

  let current = this.root;

  while (current) {
    if (current.left) {}
  }

  var tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

export default invertTree;
