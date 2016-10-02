
// merge sort
// @param {array integers} array - Takes an array of unsorted integers
// @return {array} Returns a new sorted, ascending array

// We divide each array further and further in the middle until we have
// single elements and then merge them all back together via sorting.
// Merging does all the heavy lifting.

function mergeSort(array) {

  // type check
  if (!Array.isArray(array)) {
    new Error('mergeSort: Expects a single parameter of [array] type.');
  }

  // base
  if (array.length <= 1) return array;

  // grab the middle element, lean right if even
  const middle = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

function merge (left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return result.concat(left.length ? left : right);
}
