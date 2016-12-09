
/**
 * Successor
 *
 * Write an algorithm to find the 'next' node (i.e, in-order successor) of a given node in a BST.
 * You may assume that each node has a reference to it's parent.
 *
 * Solution:
 *
 * This solution requires composing 3 functions: findNext, findNode, findSmallest.
 * We first need to find the node from the value passed in. If it's not there, raise exception.
 * We know that the next node will either be the smallest of the value's right subtree, or if
 * that doesn't exist, it will be the closest ancestor of value with a greater value. So we would
 * traverse up to find it.
 *
 */

/**
 * findNext()
 *
 * Time: O(log n)
 *
 * @param {object} value The value from which we want to find next of
 * @return {object} Returns the successor node
 */

function findNext(value) {
  let node = findNode(value);

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

function findNode(value) {
  // start from root
  let current = this.root;

  while (current) {
    // if value is less than current, traverse left
    if (value < current.value) {

      if (current.left === null) return current; // return closest leaf
      current = current.left;

    // if value if larger than current, move right
    } else if (value > current.value) {
      if (current.right === null) return current; // return closest leaf
      current = current.right;

    // value === current.value, we found it!
    } else {
      return current;
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
