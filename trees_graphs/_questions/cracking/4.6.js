
// Write an algorithm to find the 'next' node (i.e, in-order successor) of a given node in a BST.
// You may assume that each node has a reference to it's parent.

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
