
/**
* Invert Binary Tree
*
* Given a binary tree, invert it so that it's left value appear on the right or
* vice versa.
*
* Inspired by Max Howell -
* "Google: 90% of our engineers use the software you wrote (Homebrew),
* but you can’t invert a binary tree on a whiteboard so fuck off."
*
* Example:
*
*                  4
*               ↙     ↘
*             2         7
*           ↙  ↘      ↙   ↘
*         1     3    6     9
*
*             Inverted to
*
*                  4
*               ↙     ↘
*             7         4
*           ↙  ↘      ↙   ↘
*         9     6    3     1
*
*/

/**
* invertTreeRecursive()
*
* Solution:
*
* The inverse of an empty tree is the empty tree. The inverse of a tree with root
* r, and subtrees right and left, is a tree with root r, whose right subtree is
* the inverse of left, and whose left subtree is the inverse of right.
*
* Time: O(h)
* Space: O(n)
*
* Since each node in the tree is visited only once, the time complexity is O(n),
* where n is the number of nodes in the tree. We cannot do better than that, since
* at the very least we have to visit each node to invert it.
*
* Because of recursion, O(h) function calls will be placed on the stack in the
* worst case, where h is the height of the tree. Because h ∈ O(n), the space
* complexity is O(n).
*
* @param {object} tree Tree node
* @return {object} Returns the same tree node but inverted
*/

function invertTreeRecursive(root) {
  if (root === null) return null;

  let right = invertTreeRecursive(root.right);
  let left = invertTreeRecursive(root.left);

  // invert nodes
  root.left = right;
  root.right = left;

  return root;
}

/**
* invertTreeIterative()
*
* Solution:
*
* Alternatively, we can solve the problem iteratively, in a manner similar to
* breadth-first search.
*
* The idea is that we need to swap the left and right child of all nodes in the
* tree. So we create a queue to store nodes whose left and right child have not
* been swapped yet. Initially, only the root is in the queue. As long as the queue
* is not empty, remove the next node from the queue, swap its children, and add
* the children to the queue. Null nodes are not added to the queue. Eventually,
* the queue will be empty and all the children swapped, and we return the original
* root.
*
* Time: O(n)
* Space: O(n)
*
* Since each node in the tree is visited/added to the queue only once, the time
* complexity is O(n), where n is the number of nodes in the tree.
*
* Space complexity is O(n), since in the worst case, the queue will contain all
* nodes in one level of the binary tree. For a full binary tree, the leaf level
* has n / 2 = O(n)​​ leaves.
*
* @param {object} tree Tree node
* @return {object} Returns the same tree node but inverted
*/

function invertTreeIterative(root) {
  if (root === null) return null;
  const queue = [root];

  while (queue.length) {
    // dequeue
    let current = queue.shift();

    // invert nodes
    let temp = current.left;
    current.left = current.right;
    current.right = temp;

    // queue up nodes
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return root;
}

export { invertTreeRecursive, invertTreeIterative };
