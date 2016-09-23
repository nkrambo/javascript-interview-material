
// Binary Heaps
// Min-Heaps and Max-Heaps

// Definition: A binary heap is a complete binary tree (that is, totally filled other
// than the rightmost elements on the last level).

// A min-heap is where each node is smaller than it's children, with the
// root always being the smallest.

// A max-heap is where each node is larger than it's children, with the root always
// being the largest. Other than that, there are no other special rules for inserting,
// like we have with a BST, for example.

// Commonly used in priority queues.

// Common operations are:

// insert() - Time: O(log n)
// We always insert an element in the bottom right, to maintain the complete
// tree property and 'bubble up' it up to the correct position.

// extractMin() or extractMax() - Time: O(log n)
// Finding the minimum or maximum is easy, it's always the root. The trickier part is replacing it.
// First, remove the min/max element (root) and swap it with the last (bottom, right) element.
// Then we 'bubble down' the element until the tree is correct. Again, because this is not a BST
// you'll have to compare both left and right children nodes when traversing.

class Heap {
  constructor() {
    this.root = null;
  }

  // insert
  insert(value) {
    // create node
    const node = {
      value,
      parent: null,
      left: null,
      right: null
    };

    // check root
    if (this.root === null) {
      this.root = node;
      return;
    }

    // use a BFS to find a leaf node to insert into.
    // this way we maintain, 'complete tree' property
    const queue = [this.root];

    while (queue.length) {

      // dequeue
      const current = queue.shift();

      // check for leafs to return
      if (current.left === null) {
        node.parent = current;
        current.left = node;
        break;

      } else if (current.right === null) {
        node.parent = current;
        current.right = node;
        break;
      }

      // enqueue
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    this.bubbleUp(node);
    return;
  }
}

class MinHeap extends Heap {

  bubbleUp(node) {

  }

  // extract min
  extractMin() {

  }
}

class MaxHeap extends Heap {

  bubbleUp(node) {

  }

  // extract max
  extractMax() {}
}

export { MinHeap, MaxHeap };
