
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
* If each node has a link to its parent, we could trace p and q's paths up until
* they intersect. This is essentially the same problem as finding the intersection
* of two linked lists. The 'linked lists' in this case being the paths from each
* node up to the root.
*
* The first step is, like with linked lists, is to 'chop off' any additional nodes
* on the longest path (deepest node), so that we have paths of the same length.
*
* Once we have paths of equal length, we can just traverse upward comparing nodes
* until we find an intersection, which is the common ancestor.
*
* Take the following binary tree.
*
*               [1]
*             ↙     ↘
*          (2)         3
*        ↙   ↘       ↙   ↘
*      4       5   (6)     7
*
* Let's say we are trying to find the first common ancestor of (2) and (6). By
* looking at this simple tree we can see that it's the root node (1).
*
* As we said above, to derive this, we first need to 'chop off' the extra nodes
* on the longest path (deepest node), so that both our paths are of equal length.
*
* In our above example, our deepest node is (6) with a depth of 3. Our shallow
* node is (2) with a depth of 2. To make these paths equal length we need to
* 'chop off' 1 node from our deep path, which would be the (6) node.
*
* Now our paths are equal length, (2) -> (1) and (3) -> (1). We now simply traverse
* upwards, looking for an intersetion, which in this case will be (1).
*
* Our final solution is composed from a couple of functions to achieve this.
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

  // get difference in depths between nodes (delta)
  const delta = Math.abs(depth(p) - depth(q));
  let shallow = delta > 0 ? q : p;
  let deep = delta > 0 ? p : q;

  // shorten the deepest path by traversing up delta positions
  deep = goUpBy(deep, delta);

  // traverse upwards until we intersect
  while (shallow !== deep && shallow !== null && deep !== null) {
    shallow = shallow.parent;
    deep = deep.parent;
  }

  // we could return either 'deep' or 'shallow'
  return shallow === null || deep === null ? null : shallow;
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
