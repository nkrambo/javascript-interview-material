
/**
* Check Sub Tree
*
* T1 and T2 are two very large binary trees, with T1 much bigger than T2.
* Create an algorithm to determine if T2 is a subtree of T1.
*
* A tree T2 is a subtree of T1 if there exists a node n in T1 such that the
* subtree of n is identical to T2. That is, if you cut off the tree at node n,
* the two trees would be identical.
*
* Solution:
*
*
*/

/**
* Contains tree
*
* @param {object} tree1 Parent tree
* @param {object} tree2 Subtree to check for in tree1
* @return {boolean} Returns true if the subtree exists, otherwise returns false
*/

function containsTree(tree1, tree2) {
  if (!tree1 || !tree1.root) {
    throw new Error('trees1 must be valid non-empty trees');
  }
  if (!tree2 || !tree2.root) {
    return true;
  }
  return findRoot(tree1.root, tree2.root);
}


function findRoot(node1, node2) {
  if (!node1 || !node2) {
    return false;
  }
  else if (node1.val === node2.val && sameTree(node1, node2)) {
    return true;
  }
  else {
    return findRoot(node1.left, node2) || findRoot(node1.right, node2);
  }
}

function sameTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  } else if (!node1 && node2 || node1 && !node2) {
    return false;
  } else if (node1.val === node2.val) {
    return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
  } else {
    return false;
  }
}

export default containsTree;
