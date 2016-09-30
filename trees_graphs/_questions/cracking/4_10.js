
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
*/

/**
* Contains tree
*
* Solution: One approach would be to compare string representations
* of traversals of each tree. If T2 is a substring of T1, then it's a subtree.
* An in-order traversal would not work. This is because BST's can print the same
* in-order traversals even if their structure is different.
*
* We should use a pre-order traversal. Even here, trees with different structures could
* still have the same pre-order traversal. We can fix that by representing NULL nodes with
* a speacial character like 'X'. As long as we represent these nodes, the pre-order traversal
* of a tree will be unique.
*
*                  1
*               ↙     ↘
*             2         3
*           ↙  ↘      ↙   ↘
*         4     X    X     X
*       ↙  ↘
*     X     X
*
* Example: 1, 2, 4, X, X, X, 3, X, X
*
* Time - O(n + m)
* Space - O(n + m)
* Where n and m are the nodes in T1 and T2, respectively.
*
* @param {object} t1 Parent tree
* @param {object} t2 Subtree to check for in tree1
* @return {boolean} Returns true if the subtree exists, otherwise returns false
*/

function containsTree(t1, t2) {
  const t1String = getOrderString(t1.root);
  const t2String = getOrderString(t2.root);

  return t1String.indexOf(t2String) >= 0;
}

function getOrderString(root) {
  if (root === null) return;

  let traversal = '';
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node === null) {
      traversal = `${traversal}X`;
      continue;
    }

    traversal = `${traversal}${node.value}`;
    stack.push(node.right);
    stack.push(node.left);
  }
  return traversal;
}

export default containsTree;
