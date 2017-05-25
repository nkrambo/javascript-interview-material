
/**
* Min-Heaps and Max-Heaps
*
* A binary heap is a complete binary tree (that is, totally filled other
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
* Often it is more time and space efficient to implement a binary heap
* using a dynamic array instead of objects.
*/

class Heap {
  /**
   * Minimum heap constructor.
   *
   * @public
   * @constructor
   * @param {Function} fn Function used for comparison between nodes.
   */

  constructor(fn) {
    this.heap = [];
    if (typeof fn === 'function') {
      this.compare = fn;
    } else {
      this.compare = (a, b) => b - a;
    }
  }

  /**
   * Returns current value which is on the top of the heap.
   *
   * @public
   * @return {Number|Object} Current top value.
   */

  top() {
    return this.heap[0];
  }

  /**
   * Adds new element to the heap.
   * Complexity: O(log N).
   *
   * Notes: We always insert an element in the bottom right (last position), to maintain the complete
   * tree property and 'bubble up' it up to the correct position, swapping nodes as needed.
   *
   * @public
   * @param {Number|Object} value Value which will be inserted.
   * @return {Number} Index of the inserted value.
   */

  add(value) {
    this.heap.push(value);
    this.changeKey(this.heap.length - 1, value);
  }

 /**
  * Changes the key.
  * Complexity: O(log N).
  *
  * @public
  * @param {Number} index Index of the value which should be changed.
  * @return {Number} New position of the element.
  */

  changeKey(index) {
    const elem = this.heap[index];
    let parent = Math.floor(index / 2);
    let temp;

    if (elem !== undefined) {
      while (parent >= 0 && this.compare(elem, this.heap[parent]) > 0) {
        temp = this.heap[parent];
        this.heap[parent] = elem;
        this.heap[index] = temp;
        index = parent;
        parent = Math.floor(parent / 2);
      }
    }

    return parent;
  }

  /**
   * Exchange indexes with start index given as argument
   * to turn the tree into a valid heap, using recusrion. On a single call
   * this method maintains only a single "branch" of the heap.
   *
   * Notes: This operation is also known as 'sinking'. The idea being, when the
   * extract() method is called, we replace the root with the last element and 'sink'
   * it down the tree into it's correct position. This maintains the 'heap' property.
   *
   * Time complexity: O(log N).
   *
   * @private
   * @param {Number} index The parent.
   */

  heapify(index) {
    let extr = index;
    let temp;
    const left = (2 * index) + 1;
    const right = (2 * index) + 2;

    if (left < this.heap.length && this.compare(this.heap[left], this.heap[index]) > 0) {
      extr = left;
    }

    if (right < this.heap.length && this.compare(this.heap[right], this.heap[index]) > 0) {
      extr = right;
    }

    if (index !== extr) {
      temp = this.heap[index];
      this.heap[index] = this.heap[extr];
      this.heap[extr] = temp;
      this.heapify(extr);
    }
  }

  /**
   * Removes and returns the current extremum value
   * which is on the top of the heap.
   * Complexity: O(log N).
   *
   * @public
   * @returns {Number|Object} The extremum value.
   */

  extract() {
    if (this.isEmpty()) {
      throw new Error('The heap is already empty!');
    }

    const root = this.heap.shift();
    this.heapify(0);
    return root;
  }

  /**
   * Returns collection
   *
   * @public
   * @returns {Array} Array of all the values in the heap
   */

  getCollection() {
    return this.heap;
  }

  /**
   * Checks or heap is empty.
   *
   * @public
   * @returns {Boolean} Returns true if heap is empty.
   */

  isEmpty() {
    return this.heap.length === 0;
  }
}

export default Heap;
