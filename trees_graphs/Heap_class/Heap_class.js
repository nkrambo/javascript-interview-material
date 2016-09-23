
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
// Then we 'sink down' the element until the tree is correct. Again, because this is not a BST
// you'll have to compare both left and right children nodes when traversing.

// Often it is more time and space efficient to implement a binary heap using a dynamic array.

class Heap {
  constructor() {
    this.root = null;
  }

  getLeaf() {
    // use a BFS to find a leaf node to insert into.
    // this way we maintain, 'complete tree' property
    const queue = [this.root];

    while (queue.length) {
      // dequeue
      const current = queue.shift();

      // check for leaf to return
      if (current.left === null || current.right === null) return current;

      // enqueue
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

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

    // grab leaf and attach node with parent
    const leaf = this.getLeaf();
    node.parent = leaf;
    leaf.left === null ? leaf.left = node : leaf.right = node;

    // bubble into corrent position
    this.bubbleUp(node);
    return;
  }
}

class MinHeap extends Heap {
  bubbleUp(node) {
    while (node.parent && node.value < node.parent.value) {
      // cache parent value
      const parentValue = node.parent.value;

      // swap em
      node.parent.value = node.value;
      node.value = parentValue;

      // keep bubbling
      node = node.parent;
    }
  }

  sink() {
    let current = this.root;

    while (current) {



      // get smallest child
      if (current.left !== null) left = current.left.value;
      if (current.right !== null) right = current.right.value;

      const child = left < right ? 'left' : 'right';

      if (current[child].value < current.value) {
        // cache parent value
        const parentValue = current.value;

        // swap em
        current[child].value = current.value;
        current.value = parentValue;

        // keep sinking
        current = current[child];
      }
    }
  }

  extractMin() {
    const min = this.root.value;
    let leaf = this.getLeaf();

    // insert at root
    this.root.value = leaf.value;

    // remove old leaf
    leaf = null;

    // sink root value
    this.sink();

    return min;
  }
}

class MaxHeap extends Heap {
  bubbleUp(node) {
    while (node.parent.value < node.value) {
      node.parent.value = node.value;
    }
  }

  extractMax() {}
}

export { MinHeap, MaxHeap };
