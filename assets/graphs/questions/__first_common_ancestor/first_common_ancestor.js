
/**
* First Common Ancestor
*
* Design an algorithm and write code to find the first common ancestor of two nodes in
* a binary tree. Avoid storing additional nodes in a data structure.
* NOTE: This is not necessarily a BST
*
*/

/**
* Common ancestor with parent links
*
* Solution: If each node has a link to their parents we can trace the paths up until they intersect.
* Time - O(D), where D is the depth of the deeper node
*
* @param {object} p Node
* @param {object} q Node
* @return {object} Returns a node that is the first common ancestor of p, q
*/

function commonAncestorWithParents(p, q) {
  const delta = Maths.abs(depth(p) - depth(q)); // difference in depths
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

function goUpBy(node, delta) {
  while (delta > 0 && node !== null) {
    node = node.parent;
    delta--;
  }
  return node;
}

function depth(node) {
  let depth = 0;
  while (node !== null) {
    node = node.parent;
    depth++;
  }
  return depth;
}

/**
* Common ancestor with no links
*
* Solution: With no links to parents, we take a different approach. We follow a chain in
* which p and q are on the same side. That is, if p and q are both on the left side of
* the node, branch left to look for the common ancestor. If they are both on the right,
* branch right. When p and q are no longer on the same side, you must have found the
* common ancestor.
*
* @param {object} tree Binary search tree
* @param {object} p Node
* @param {object} q Node
* @return {object} Returns a node that is the first common ancestor of p, q
*/

function commonAncestor(root, p, q) {

  // check tree root
  if (root === null) return null;

  // if one of these matches, it is the LCA
  if (root === p || root === q) return root;

  let left = commonAncestor(root.left, p, q);
  let right = commonAncestor(root.right, p, q);

  // if p and q are on both sides
  if (left && right) return root;

  // either one node is on one branch,
  // or none were found in any branches
  return left ? left : right;
}

export { commonAncestorWithParents, commonAncestor };
