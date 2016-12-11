
/**
* Successor
*
* Write an algorithm to find the 'next' node (i.e, in-order successor) of a given
* node in a BST. You may assume that each node has a reference to it's parent.
*/

/**
* findNext()
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

function findNext(node) {

  if (node === null) return null;

  // if we have a right child, get the smallest of that sub-tree
  if (node.right !== null) {
    return findSmallest(node.right);

  // there's no right child, we go up until we find an ancestor with a
  // value larger than node
  } else {
    while (node) {
      if (node.parent.value > node.value) return node;
      node = node.parent;
    }
  }
}

function findSmallest(root) {
  let current = root;

  while (current) {
    if (current.left === null) return current;
    current = current.left;
  }
}

export default findNext;
