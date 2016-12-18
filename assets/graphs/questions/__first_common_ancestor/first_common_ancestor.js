
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
* Time: O(d)
* Space: O(1)
*
* Where (d) is the depth of the deeper node.
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
* With parent links alternative
*
* Solution:
*
* Similar to the earlier approach, we could trace p's path upwards and check if
* any of the nodes cover q. The first node that covers q (we already know that
* every node on this path will cover p) must be the first common ancestor.
*
* Observe that we don't need to re-check the entire subtree. As we move from a node
* (x) to its parent (y), all the nodes under (x) have already been checked for q.
* Therefore, we only need to check the nodes 'uncovered', which will be the nodes
* under n's sibling.
*
* For example, suppose we're looking for the first common ancestor of node p = 7
* and node q = 17. When we go to p.parent (5), we uncover the subtree rooter at (3).
* We therefore need to search this subtree for q.
*
* Next, we go to node 10, uncovering the subtree rooted at 15. We check this subtree
* for node 17, and there it is!
*
*                    20
*                 ↙     ↘
*              10         30
*            ↙   ↘
*          5       15
*       ↙    ↘        ↘
*     3        7       17
*
* To implement this, we can just traverse upwards from p, storing the parent and
* the sibling node in a variable. (The sibling node is always a child of parent
* and refers to the newly uncovered subtree). At each iteration, sibling gets set
* to the old parent's sibling node and parent gets set to parent.parent.
*
* Again, our final solution will be composed of several functions.
*
* Time: O(t)
* Space: O(1)
*
* Where (t) is the size of the subtree for the first common ancestor. In the worst
* case, this will be O(n), where (n) is the number of nodes in the tree. We can
* derive this runtime by noticing that each node in that subtree is searched once.
*
* @param {object} root binary tree node
* @param {object} p binary tree node
* @param {object} q binary tree node
* @return {object} returns the first common ancestor node
*/

function withParentsAlt(root, p, q) {

  // check if either node is not in the tree
  if (!covers(root, p) || !covers(root, q)) {
    return null;

  // check if p covers q
  } else if (covers(p, q)) {
    return p;

  // check if q covers p
  } else if (q, p) {
    return q;
  }

  // traverse upwards until you find a node that covers q
  let sibling = getSibling(p);
  let parent = p.parent;

  while (!covers(sibling, q)) {
    sibling = getSibling(parent);
    parent = parent.parent;
  }

  return parent;
}

/**
* covers()
*
* @param {object} root binary tree node
* @param {object} p binary tree node
* @return {boolean} returns true if node is covered, otherwise false
*/

function covers(root, p) {

  // DFS
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node === p) return true;

    if (node.left !== null) {
      stack.push(node.left);
    }

    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  // fell through, not covered
  return false;
}

/**
* getSibling()
*
* @param {object} node binary tree node
* @return {object} returns the sibling node, otherwise null
*/

function getSibling(node) {
  if (node === null || node.parent === null) {
    return null;
  }

  let parent = node.parent;
  return parent.left === node ? parent.right : parent.left;
}

/**
* Without parent links
*
* Solution:
*
* With no links to parents, we must take a different approach.
*
* We follow a chain in which p and q are on the same side. That is, if p and q
* are both on the left side of the node, branch left to look for the common ancestor.
* If they are both on the right, branch right. When p and q are no longer on the
* same side, you must have found the common ancestor.
*
* Time: O(n)
* Space: O(1)
*
* This algorithm runs in O(n) time on a balanced tree. We know that we can't really
* do better than that as we need to potentially looks at every node in the tree.
*
* @param {object} tree binary tree
* @param {object} p binary tree node
* @param {object} q binary tree node
* @return {object} returns a node that is the first common ancestor of p, q
*/

function withoutParents(root, p, q) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    const pLeft = covers(node.left, p);
    const qLeft = covers(node.left, q);

    // nodes are on different sides
    if (pLeft !== qLeft) return node;

    const childSide = pLeft ? node.left : node.right;
    stack.push(childSide);
  }

  return null;
}

export { withParents, withParentsAlt, withoutParents };
