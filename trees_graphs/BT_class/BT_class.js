
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create node
    const node = {
      value,
      left: null,
      right: null
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

      } else {

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
}

export default BinaryTree;
