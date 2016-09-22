
// Binary Heaps
// Min-Heaps and Max-Heaps

// Definition: A binary heap is a complete binary tree (that is, totally filled other
// than the rightmost elements on the last level).

// A min-heap is where each node is smaller than it's children, with the
// root always being the smallest.

// A max-heap is where each node is larger than it's children, with the root always
// being the largest. Other than that, there are no other special rules for inserting,
// like we have with a BST, for example.

// Common operations are:

// insert() - Time: O(log n)
// We always insert an element in the bottom right, to maintain the complete
// tree property and 'bubble up' it up to the correct position.

// extractMin() or extractMax() - Time: O(log n)
// Finding the minimum or maximum is easy, it's always the root. The trickier part is replacing it.
// First, remove the min/max element (root) and swap it with the last (bottom, right) element.
// Then we 'bubble down' the element until the tree is correct. Again, because this is not a BST
// you'll have to compare both left and right children nodes when traversing.

class MinHeap {

}
