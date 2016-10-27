
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
* such limit, too, but it is much higher - it is O(n^2). When you need a guaranteed
* upper bound on the timing of your code, use merge sort over quick sort.
*
* Time: O(n log n)
* Space: O(n)
*
* @param {array} arr array of integers
* @param {number} left index of the left-most element
* @param {number} right index of the right-most element
* @returns {array} returns a new sorted, ascending array
*/

function quickSort(arr, left, right) {
  let pivot;
  let partIndex;

  if (left < right) {
    pivot = right;
    partIndex = partition(arr, pivot, left, right);

    // sort left and right
    quickSort(arr, left, partIndex - 1);
    quickSort(arr, partIndex + 1, right);
  }

  return arr;
}

/**
* partition()
*
* @param {array} arr array of integers
* @param {number} pivot
* @param {number} left index
* @param {number} right index
* @returns {number} returns
*/

function partition(arr, pivot, left, right) {
   let pivotValue = arr[pivot];
   let partIndex = left;

   for (let i = left; i < right; i += 1) {
    if(arr[i] < pivotValue) {
      swap(arr, i, partIndex);
      partIndex += 1;
    }
  }

  // swap values
  swap(arr, right, partIndex);

  return partIndex;
}

/**
* swap()
*
* @param {array} arr array of integers
* @param {number} i index
* @param {number} j index
* @returns {void} modifies array in-place by swapping values at indexes i, j
*/

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

export default quickSort;
