
/**
* Quick Sort
*
* Types: Common Algorithm, Sorting, Divide and Conquer
*
* Quicksort is a divide and conquer algorithm. Quicksort first divides a large
* array into two smaller sub-arrays: the low elements and the high elements.
* Quicksort can then recursively sort the sub-arrays.
*
* The steps are:
*
* 1. Pick an element, called a pivot, from the array.
*
* 2. Partitioning: reorder the array so that all elements with values less than
*    the pivot come before the pivot, while all elements with values greater than
*    the pivot come after it (equal values can go either way). After this partitioning,
*    the pivot is in its final position. This is called the partition operation.
*
* 3. Recursively apply the above steps to the sub-array of elements with smaller
*    values and separately to the sub-array of elements with greater values.
*
* The base case of the recursion is arrays of size zero or one, which never need
* to be sorted.
*
* The pivot selection and partitioning steps can be done in several different ways;
* the choice of specific implementation schemes greatly affects the algorithm's
* performance.
*
* When implemented well, it can be about two or three times faster than its main
* competitors, merge sort and heapsort.
*
* Merge sort has a guaranteed upper limit of O(n log n), while Quick sort has
* such limit, too, but it is much higher - it is O(N^2). When you need a guaranteed
* upper bound on the timing of your code, use merge sort over quick sort.
*
* Time: O(n log n)
* Space: O(n)
*
* @param {array} array array of integers
* @param {array} lo index of left pointer
* @param {array} hi index of right pointer
* @returns {array} returns a new sorted, ascending array
*/

function quickSort(array, lo, hi) {
  let pivot;
  let partIndex;

  if (lo < hi) {
    pivot = hi;
    partIndex = partition(array, pivot, lo, hi);
  }

  // sort left and right
  quickSort(array, lo, partIndex - 1);
  quickSort(array, partIndex + 1, hi);

  return array;
}

/**
* partition()
*
* @param {array} array array of integers
* @param {number} pivot
* @param {number} lo index
* @param {number} hi index
* @returns {number} returns
*/

function partition(array, pivot, lo, hi) {
   let pivotValue = array[pivot];
   let partIndex = lo;

   for (let i = lo; i < hi; i += 1) {
    if(array[i] < pivotValue) {
      swap(array, i, partIndex);
      partIndex += 1;
    }
  }

  // swap values
  swap(array, hi, partIndex);

  return partIndex;
}

/**
* swap()
*
* @param {array} array array of integers
* @param {number} i index
* @param {number} j index
* @returns {void} modifies array in-place by swapping values at indexes i, j
*/

function swap(array, i, j) {
   const temp = array[i];
   array[i] = array[j];
   array[j] = temp;
}

export default quickSort;
