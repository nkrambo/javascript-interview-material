
/**
* Heap Sort
*
* Types: Common Algorithm, Sorting
*
* The heapsort algorithm can be divided into two parts.
*
* In the first step, a max-heap is built out of the data.
*
* A heap is a specialized tree-based data structure that satisfies the heap property:
* If A is a parent node of B then the key (the value) of node A is ordered with
* respect to the key of node B with the same ordering applying across the heap.
*
* A heap can be classified further as either a 'max heap' or a 'min heap'. In a
* max heap, the keys of parent nodes are always greater than or equal to those of
* the children and the highest key is in the root node. In a min heap, the keys
* of parent nodes are less than or equal to those of the children and the lowest
* key is in the root node.
*
* The most common implementation of a heap is the binary heap, in which the tree
* is a complete binary tree.
*
*       complete binary max-heap
*
*                 100
*               ↙     ↘
*            19        36
*           ↙  ↘      ↙   ↘
*         17    3   25     1
*       ↙   ↘
*     2      7
*
*
* In a heap, the highest (or lowest) priority element is always stored at the root.
* A heap is not a sorted structure and can be regarded as partially ordered. There
* is no particular relationship among nodes on any given level, even among the siblings.
* When a heap is a complete binary tree, it has a smallest possible height—a heap
* with (n) nodes always has (log n) height.
*
* The heap is often implemented with an array, instead of nested objects for space
* and time efficiencies.
*
* The complete binary tree maps the binary tree structure into the array indices:
*
* The first element will contain the root. The next two elements of the array contain
* its children. The next four contain the four children of the two child nodes, etc.
* Thus the children of the node at position n would be at positions 2n and 2n + 1
* in a one-based array, or 2n + 1 and 2n + 2 in a zero-based array.
*
* Example: min-heap zero-based heap
*
*     [15, 20, 36, 48, 52, 40, 38]
*
*                  15
*               ↙     ↘
*            20        36
*           ↙  ↘      ↙   ↘
*         48    52   40     38
*
* This allows moving up or down the tree by doing simple index computations.
* Balancing a heap is done by shift-up or shift-down operations (swapping elements
* which are out of order). As we can build a heap from an array without requiring
* extra memory (for the nodes, for example), heapsort can be used to sort an array
* in-place.
*
* In the second step, a sorted array is created by repeatedly removing the largest
* element from the heap (the root of the heap), and inserting it into the array.
* The heap is updated after each removal to maintain the heap. Once all objects
* have been removed from the heap, the result is a sorted array.
*
* Implementing the algorithm goes as such. The steps are:
*
* 1. Call the heapify() function on the array. This builds a heap from an array
*    in O(n) operations.
*
* 2. Swap the first element of the array with the final element. Decrease the
*    considered range of the array by one.
*
* 3. Call the sink() function on the array to sift the new first element to
*    its appropriate index in the heap.
*
* 4. Go to step (2) unless the considered range of the array is one element.
*
* Time: O(n^2)
* Space: O(1)
* Where n is the number of items to be sorted
*
* Although somewhat slower in practice on most machines than a well-implemented
* quicksort, it has the advantage of a more favorable worst-case O(n log n) runtime.
*
* @param {array} arr array of integers
* @returns {array} returns a new sorted array
*/

function heapSort(arr) {

  // grab the last index
  let end = arr.length - 1;

  // build our max-heap
  heapify(arr, end);

  //
  while (end > 0) {
    swap(arr, end--, 0);
    sink(arr, 0, end);
  }

  return arr;
}

/**
* heapify()
*
* Builds a max-heap from a list in O(n) operations.
*
* @param {array} arr array of integers
* @returns {void} modifies arr into heap data structure
*/

function heapify(arr, end) {

  // break the array into root + two sides, to create tree (heap)
  let mid = Math.floor((end - 1) / 2);

  while (mid >= 0) {
    sink(arr, mid, end);
    mid -= 1;
  }
}

/**
* sink()
*
* Sink the new first element to its appropriate index in the heap.
*
* @param {array} arr array of integers
* @param {number} i index
* @param {number} j index
* @returns {void} modifies arr by swapping values at indices i, j
*/

function sink(arr, start, end) {
   let root = start; // n
   let child = (root * 2) + 1; // 2n + 1
   let toSwap = root;

   while (child <= end) {

    if (arr[toSwap] < arr[child]) {
      swap(arr, toSwap, child);
    }

    if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
      swap(arr, toSwap, child + 1)
    }

    if (toSwap !== root) {
      swap(arr, root, toSwap);
      root = toSwap;
    } else {
      return;
    }

    toSwap = root;
    child = (root * 2) + 1
  }
}

/**
* swap()
*
* @param {array} arr array of integers
* @param {number} i index
* @param {number} j index
* @returns {void} modifies arr by swapping values at indices i, j
*/

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default heapSort;
