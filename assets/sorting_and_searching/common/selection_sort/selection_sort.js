
/**
* Selection Sort
*
* Types: Common Algorithm, Sorting
*
* The algorithm divides the input list into two parts: the sublist of items already
* sorted, which is built up from left to right at the front (left) of the list,
* and the sublist of items remaining to be sorted that occupy the rest of the list.
*
* Initially, the sorted sublist is empty and the unsorted sublist is the entire
* input list. The algorithm proceeds by finding the smallest (or largest, depending
* on sorting order) element in the unsorted sublist, exchanging (swapping) it with
* the leftmost unsorted element (putting it in sorted order), and moving the sublist
* boundaries one element to the right.
*
* Example:
*
* 64 25 12 22 11 // this is the initial, starting state of the array
*
* 11 25 12 22 64 // sorted sublist = {11}
*
* 11 12 25 22 64 // sorted sublist = {11, 12}
*
* 11 12 22 25 64 // sorted sublist = {11, 12, 22}
*
* 11 12 22 25 64 // sorted sublist = {11, 12, 22, 25}
*
* 11 12 22 25 64 // sorted sublist = {11, 12, 22, 25, 64}
*
* Time: O(n^2)
* Space: O(1)
* Where n is the number of items to be sorted
*
* Selection sort is inefficient on large lists, and generally performs worse than
* the similar insertion sort. Selection sort is noted for its simplicity, and it
* has performance advantages over more complicated algorithms in certain situations.
*
* Heap sort takes this basic algorithm and improves it.
*
* @param {array} arr array of integers
* @returns {array} returns a new sorted array
*/

function selectionSort(arr) {

  // advance the position through the entire array
  for (let j = 0; j < arr.length - 1; j += 1) {
    // assume the min is the first element
    let min = j;

    // test against elements after j to find the smallest
    for (let i = j + 1; i < arr.length; i += 1) {
      // new minimum
      if (arr[i] < arr[j]) min = i;
    }

    // swap
    if (min !== j) {
      const temp = arr[j];
      arr[j] = arr[min];
      arr[min] = temp;
    }
  }
}

export default selectionSort;
