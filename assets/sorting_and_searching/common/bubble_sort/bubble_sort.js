
/**
* Bubble Sort
*
* Types: Common Algorithm, Sorting
*
* Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm
* that repeatedly steps through the list to be sorted, compares each pair of adjacent
* items and swaps them if they are in the wrong order. he pass through the list
* is repeated until no swaps are needed, which indicates that the list is sorted.
*
* It is named for the way smaller or larger elements 'bubble' to the top of the list.
*
* Although the algorithm is simple, it is too slow and impractical for most problems
* even when compared to insertion sort.
*
* Time: O(n^2)
* Space: O(1)
* Where n is the number of items to be sorted
*
* Bubble sort is not a practical sorting algorithm, it has the worst run-time of
* any of the common sorting algorithms. Due to its simplicity, bubble sort is often
* used to introduce the concept of an algorithm but is not used practically.
* Selection sort is another simple sorting algorithm that falls into the same
* category.
*
* @param {array} arr array of integers
* @returns {array} returns a new sorted array
*/

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {

    for(let j = 1; j <= i; j += 1) {

      // swap values
      if(arr[j - 1] > arr[j]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

export default bubbleSort;
