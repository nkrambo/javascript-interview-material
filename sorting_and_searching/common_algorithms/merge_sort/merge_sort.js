
/**
* Merge Sort
*
* Types: Common Algorithm, Sorting, Divide and Conquer, Recursive, Top-Down
*
* Merge sort is an efficient, general-purpose, comparison-based sorting algorithm.
* It is less efficient than Quick Sort.
*
* Javascript has access to Array.prototype.sort(), which runs in O(n log n), which
* is actually the same as our solution below. So, you could argue that this
* implementation is useless in the context of Javascript. However, in the spirit
* of technical problem solving, it's beneficial to have an understanding of this
* implementation, especially if you intend to work in other languages without a
* built-in sort() method.
*
* Conceptually, a merge sort works as follows:
*
* 1. Divide the unsorted list into n sublists, each containing 1 element (a list
*    of 1 element is considered sorted).
*
* 2. Repeatedly merge sublists to produce new sorted sublists until there is only
*    1 sublist remaining. This will be the sorted list.
*
* There are two general approaches to this algorithm. A top-down recursive approach
* is most common, but it can also be done with a bottom-up iterative approach.
* Both methods have the same time and space complexity.
*
* Our solution is a top-down recursive approach composed of 2 functions. The mergeSort()
* function divides each array further and further in the middle until we have single
* elements and then we merge them all back together via sorting. Our merge function
* does all the heavy lifting.
*
* Time: O(n log n)
* Space: O(n)
*
* @param {array} array array of integers
* @returns {array} returns a new sorted, ascending array
*/

function mergeSort(array) {
  // type check
  if (!Array.isArray(array)) {
    new TypeError('mergeSort: Expects a single parameter of [array] type.');
  }

  // base case
  if (array.length <= 1) return array;

  // grab the middle element, lean right if even
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

/**
* merge()
*
* Merges two sublists back together. Shift either left or right onto the result
* depending on which is lower (assuming both exist), and simply pushes on a list
* if the other doesn't exist.
*
* @param {array} left
* @param {array} right
*/

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return result.concat(left.length ? left : right);
}

export default mergeSort;
