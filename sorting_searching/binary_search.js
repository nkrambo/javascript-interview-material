
function binarySearch(array, value) {

  let start = 0;
  let last = array.length - 1;
  let middle = Math.floor(array.length / 2);

  while (array[middle] !== value && start < last){

    // adjust search area
    if (value < array[middle]) {
      last = middle - 1;
    } else if (value > array[middle]) {
      start = middle + 1;
    }

    // recalculate middle
    middle = Math.floor((last + start) / 2);
  }

  // make sure it's the right value
  return array[middle] !== value ? - 1 : middle;
}
