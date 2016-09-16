
// Merge sort has a guaranteed upper limit of O(N log2N).
// Quick sort has such limit, too, but it is much higher - it is O(N2).
// When you need a guaranteed upper bound on the timing of your code, use merge sort over quick sort.

// http://khan4019.github.io/front-end-Interview-Questions/sort.html

// Quick sort
function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
  }

  // sort left and right
  quickSort(array, left, partitionIndex - 1);
  quickSort(array, partitionIndex + 1, right);

  return array;
}

function partition(array, pivot, left, right) {
   let pivotValue = arr[pivot];
   let partitionIndex = left;

   for (let i = left; i < right; i++) {
    if(array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, i, j) {
   let temp = array[i];
   array[i] = array[j];
   array[j] = temp;
}




