
/**
 * Binary Heaps
 * Min-Heaps and Max-Heaps
 *
 * Definition: A binary heap is a complete binary tree (that is, totally filled other
 * than the rightmost elements on the last level).
 *
 * A min-heap is where each node is smaller than it's children, with the
 * root always being the smallest.
 *
 * A max-heap is where each node is larger than it's children, with the root always
 * being the largest. Other than that, there are no other special rules for inserting,
 * like we have with a BST, for example.
 *
 * Heaps are commonly used in priority queues.
 *
 *
 *
 *
 * Often it is more time and space efficient to implement a binary heap
 * using a dynamic array instead of objects.
 */


// insert() - Time: O(log n)
// We always insert an element in the bottom right, to maintain the complete
// tree property and 'bubble up' it up to the correct position.

// extractMin() or extractMax() - Time: O(log n)
// Finding the minimum or maximum is easy, it's always the root. The trickier part is replacing it.
// First, remove the min/max element (root) and swap it with the last (bottom, right) element.
// Then we 'sink down' the element until the tree is correct. Again, because this is not a BST
// you'll have to compare both left and right children nodes when traversing.


class Heap {

  /**
   * Minimum heap constructor.
   *
   * @public
   * @constructor
   * @param {Function} fn Function used for comparison between nodes.
   */

  constructor(fn) {
    this._heap = [];
    if (typeof fn === 'function') {
      this._compare = fn;
    } else {
      this._compare = (a, b) => a - b;
    }
  }

  /**
   * Returns current value which is on the top of the heap.
   * Complexity: O(1).
   *
   * @public
   * @return {Number|Object} Current top value.
   */

  top() {
    return this._heap[0];
  }

  /**
   * Adds new element to the heap.
   * Complexity: O(log N).
   *
   * @public
   * @param {Number|Object} value Value which will be inserted.
   * @return {Number} Index of the inserted value.
   */

   add(value) {
     this._heap.push(value);
     
   }
}



