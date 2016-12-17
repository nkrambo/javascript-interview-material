
/**
* First Common Ancestor
*
* Design an algorithm and write code to find the first common ancestor of two
* nodes in a binary tree. Avoid storing additional nodes in a data structure.
*
* This is not necessarily a BST.
*/

/**
* With parent links
*
* Solution:
*
* If this were a BST, we could modify the 'find' method for the two nodes and see
* where the paths diverge. Unfortunately, this is not a BST, so we need a different
* approach.
*
* Time: O(D)
* Space: O(1)
*
* Where D is the depth of the deeper node.
*
* @param {object} p binary tree
* @param {object} q binary tree
* @return {object} returns a node that is the first common ancestor of p, q
*/

function withParents(p, q) {

  // get difference in depths between nodes
  const delta = Math.abs(depth(p) - depth(q));
  let first = delta > 0 ? q : p; // shallow
  let second = delta > 0 ? p : q; // deep

  second = goUpBy(second, delta);

  // find where paths intersect
  while (first !== second && first !== null && second !== null) {
    first = first.parent;
    second = second.parent;
  }

  return first === null || second === null ? null : first;
}

/**
* goUpBy()
*
* @param {object} node
* @param {object} delta the difference in depths
* @return {object} returns node at delta distance up from node
*/

function goUpBy(node, delta) {
  while (delta > 0 && node !== null) {
    node = node.parent;
    delta -= 1;
  }

  return node;
}

/**
* depth()
*
* @param {object} node
* @return {number} returns the depth value of a binary tree node
*/

function depth(node) {
  let depth = 0;
  while (node !== null) {
    node = node.parent;
    depth += 1;
  }

  return depth;
}

/**
* Without parent links
*
* Solution:
*
* With no links to parents, we take a different approach. We follow a chain in
* which p and q are on the same side. That is, if p and q are both on the left side of
* the node, branch left to look for the common ancestor. If they are both on the right,
* branch right. When p and q are no longer on the same side, you must have found the
* common ancestor.
*
* Time: O(1)
* Space: O(1)
*
* @param {object} tree binary tree
* @param {object} p binary tree node
* @param {object} q binary tree node
* @return {object} returns a node that is the first common ancestor of p, q
*/

function withoutParents(root, p, q) {

  // // check tree root
  // if (root === null) return null;
  //
  // // if one of these matches, it is the LCA
  // if (root === p || root === q) return root;
  //
  // let left = withoutParents(root.left, p, q);
  // let right = withoutParents(root.right, p, q);
  //
  // // if p and q are on both sides
  // if (left && right) return root;
  //
  // // either one node is on one branch,
  // // or none were found in any branches
  // return left ? left : right;
}

export { withParents, withoutParents };
