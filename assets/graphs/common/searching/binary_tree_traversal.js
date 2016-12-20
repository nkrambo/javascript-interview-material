
/**
* Binary Tree Traversal
*
* Compared to linear data structures like linked lists and one-dimensional arrays,
* which have a canonical method of traversal (namely in linear order), tree structures
* can be traversed in many different ways.
*
* Traversing a tree involves iterating over all nodes in some manner. Because from
* a given node there is more than one possible next node (it is not a linear data
* structure), then, assuming sequential computation (not parallel), some nodes must
* be deferred—stored in some way for later visiting. This is often done via a stack
* (LIFO) or queue (FIFO).
*
* DFS
*
* Trees can be traversed in pre-order, in-order, or post-order. These searches are
* all types of (DFS), as the search tree is deepened as much as possible on each
* child before going to the next sibling.
*/

/**
* In-Order (DFS: left, self, right)
*
* In-order traversal means to 'visit' the left branch, then the current node,
* and finally, the right branch. This is the most common traversal used.
*
* In a BST, in-order traversal retrieves data in sorted order, i.e left to right.
* For example, if we have the following BST an in-order traversal would return:
* [1, 2, 3, 4, 5, 6, 7], all numbers are 'in-order' left to right.
*
* If you know that the tree has an inherent sequence in the nodes, and you want
* to flatten the tree back into its original sequence, than an in-order traversal
* should be used. The tree would be flattened in the same way it was created. A
* pre-order or post-order traversal might not unwind the tree back into the sequence
* which was used to create it.
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* @param {object} node binary tree node
* @param {function} fn optional callback
* @return {array} returns an array of node values in-order
*/

function inOrder(node, fn) {
  const order = [];
  const stack = [];

  while (stack.length || node !== null) {

    // traverse left
    if (node !== null) {
      stack.push(node);
      node = node.left;

    // otherwise, current visit node and push right
    } else {
      node = stack.pop();
      if (fn) fn(node);
      order.push(node.value);
      node = node.right
    }
  }

  return order;
}

/**
* Pre-Order (DFS: self, left, right)
*
* A pre-order traversal always 'visits' the current node first and then pushes
* current.right and current.left onto the stack. This means that all left children
* nodes are visited before any right children.
*
* For example, if we have the following BST an in-order traversal would return:
* [4, 2, 1, 3, 6, 5, 7].
*
* We can see that the root node is the first visited and then the entire left path
* before any right children in the left subtree. Finally, we then visted nodes on
* the root node right subtree in the same manner.
*
* If you know you need to explore the roots before inspecting any leaves, you pick
* pre-order because you will encounter all the roots before all of the leaves.
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* @param {object} node binary tree node
* @param {function} fn optional callback
* @return {array} returns an array of node values pre-order
*/

function preOrder(node, fn) {
  if (node === null) return;

  const order = [];
  const stack = [node];
  while (stack.length) {
    const node = stack.pop();

    if (fn) fn(node);
    order.push(node.value);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return order;
}

/**
* Post-Order (DFS: left, right, self)
*
* Post-order traversal is the most complicated method to traverse of these approaches.
* Basically, we defer visiting a node until we hit a leaf node and then we work
* our way back up the tree toward the root.
*
* If you know you need to explore all the leaves before any nodes, you select
* post-order because you don't waste any time inspecting roots in search for leaves.
*
* For example, if we have the following BST an post-order traversal would return:
* [1, 3, 2, 5, 7, 6, 4].
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* @param {object} node binary tree node
* @param {function} fn optional callback
* @return {array} returns an array of node values post-order
*/

function postOrder(node, fn) {
  const order = [];
  const stack = [];
  let lastNodeVisited = null;

  while (stack.length || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;

    } else {
      const peek = stack[stack.length - 1];

      // if right child exists and traversing node
      // from left child, then move right
      if (peek.right !== null && lastNodeVisited !== peek.right) {
        node = peek.right;
      } else {
        if (fn) fn(peek);
        order.push(peek.value);
        lastNodeVisited = stack.pop();
      }
    }
  }

  return order;
}

/**
* Level-Order (BFS: self, left, right)
*
* Trees can also be traversed in level-order, where we visit every node on a level
* before going to a lower level. This search is referred to as breadth-first search
* (BFS), as the search tree is broadened as much as possible on each depth before
* going to the next depth.
*
* For example, if we have the following BST an level-order traversal would return:
* [4, 2, 6, 1, 3, 5, 7].
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* @param {object} node binary tree node
* @param {function} fn optional callback
* @return {array} returns an array of node values post-order
*/

function levelOrder(node, fn) {
  const order = [];
  const queue = [node];

  while (queue.length) {
    const current = queue.shift();

    if (fn) fn(current);
    order.push(current.value);

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return order;
}

export { inOrder, preOrder, postOrder, levelOrder };
