
/**
* Binary Tree
*
* A binary tree is a tree data structure in which each node has at most two children,
* which are referred to as the left child and the right child.
*
* Binary trees are seldom used solely for their structure. Much more typical is
* to define a labeling function on the nodes, which associates some value to each
* node. Binary trees labelled this way are used to implement binary search trees
* and binary heaps, and are used for efficient searching and sorting.
*/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
  * insert()
  *
  * We use a BFS to find a leaf node to insert into from left to right
  *
  * @param {*} value to insert
  * @return {object} returns the node with value if it exists, otherwise null
  */

  insert(value) {
    // create node
    const node = {
      value,
      left: null,
      right: null,
    };

    // check root
    if (this.root === null) {
      this.root = node;
      return;
    }

    // we'll use a BFS to find a leaf node to insert into.
    // this means we fill up each level from left -> right first
    // make sure to return on insertion, otherwise you'll insert twice because of
    // additional nodes in the queue
    const queue = [this.root];
    while (queue.length) {
      // dequeue
      const current = queue.shift();

      // check to insert
      if (current.left === null) {
        current.left = node;
        return;
      } else if (current.right === null) {
        current.right = node;
        return;
      }

      // enqueue
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
}

export default BinaryTree;
