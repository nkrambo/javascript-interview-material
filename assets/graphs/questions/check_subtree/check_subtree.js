
/**
* Check Sub Tree
*
* Tags: Binary Tree, DFS, BFS
*
* T1 and T2 are two very large binary trees, with T1 much bigger than T2.
* Create an algorithm to determine if T2 is a subtree of T1.
*
* A tree T2 is a subtree of T1 if there exists a node n in T1 such that the
* subtree of n is identical to T2. That is, if you cut off the tree at node n,
* the two trees would be identical.
*/

/**
* containsTree()
*
* Solution:
*
* One approach would be to compare string representations of traversals of each
* tree. If T2 is a substring of T1, then it's a subtree. An in-order traversal
* would not work. This is because BST's can print the same in-order traversals
* even if their structure is different.
*
* We should use a pre-order traversal. Even here, trees with different structures
* could still have the same pre-order traversal. We can fix that by representing
* NULL nodes with a speacial character like 'X'. As long as we represent these
* nodes, the pre-order traversal of a tree will be unique. Therefore, two trees
* are identical if they have the same pre-order traversal using this method.
*
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
* Now consider the subtree problem. If T2's pre-order traversal is a substring of
* of T1's pre-order traversal, then T2's root element must be found in T1.
*
* Time: O(n + m)
* Space: O(n + m)
*
* Where n and m are the nodes in T1 and T2, respectively.
*
* @param {object} t1 parent tree
* @param {object} t2 subtree to check for in tree1
* @return {boolean} returns true if the subtree exists, otherwise returns false
*/

function containsTree(t1, t2) {
  if (t2 === null) return true; // an empty tree is always a subtree.

  const t1String = getOrderString(t1.root);
  const t2String = getOrderString(t2.root);

  return t1String.indexOf(t2String) !== -1;
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

/**
* containsTreeAlt
*
* Solution:
*
* An alternative approach would be to traverse T1 and node match we get from T1
* to the root of T2, we call matchTree(). The matchTree() method will compare the
* two trees to see if they're identical.
*
* Time: O(n + km)
* Space: O(log(n) + log(m)), better memory, which can be important for scalability
*
* Where n and m are the nodes in T1 and T2, respectively. And k is the number of
* occurences of T2's root in T1.
*
* @param {object} t1 parent tree
* @param {object} t2 subtree to check for in tree1
* @return {boolean} returns true if the subtree exists, otherwise returns false
*/

function containsTreeAlt(t1, t2) {
  if (t2 === null) return true; // an empty tree is always a subtree.

  const t2Root = t2.root;
  const queue = [t1.root];

  while (queue.length) {
    const node = queue.shift();

    if (node.value === t2Root.value) {
      if(matchTree(node, t2Root)) return true;
    }

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return false;
}

function matchTree(r1, r2) {

  // nothing left in subtree
  if (r1 === null && r2 === null) {
    return true;

  // one tree is empty, no match
  } else if (r1 === null || r2 === null) {
    return false;

  // values don't match
  } else if (r1.value !== r2.value) {
    return false;

  } else {
    return matchTree(r1.left, r2.left) && matchTree(r1.right, r2.right);
  }
}

export { containsTree, containsTreeAlt };
