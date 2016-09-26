
/**
 * Searchs for specific element in a given array using
 * the binary search algorithm.<br><br>
 * Time complexity: O(log N).
 *
 * @example
 *
 * binarySearch([1, 2, 3, 4, 5], 4)); // 3
 *
 * @public
 * @module searching/binarysearch
 * @param {Array} array Input array.
 * @param {Number} value Value of the element which index should be found.
 * @returns {Number} Index of the element or -1 if not found.
 */

function binarySearch(array, value) {
  let left = 0;
  let right = array.length;
  let middle = Math.floor(array.length / 2);

  while (right >= left) {
    const middleValue = array[middle];

    if (middleValue === value) {
      return middle;
    else if (middleValue > value) {
      right = middle + 1;
    } else {
      left = middle - 1;
    }

    // recalculate middle
    middle = Math.floor((left + right) / 2);
  }

  return -1;
}

export default binarySearch;
