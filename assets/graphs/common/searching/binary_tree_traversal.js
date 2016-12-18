
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
* In-Order
*
* In-order traversal means to 'visit' (often, print) the left branch, then the
* current node, and finally, the right branch. This is the most common traversal
* used.
*
* In a BST, in-order traversal retrieves data in sorted order, i.e left to right.
* For example, if we have the following BST an in-order traversal would return:
* [1, 2, 3, 4, 5, 6, 7], all numbers are 'in-order' left to right.
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

export { inOrder };
