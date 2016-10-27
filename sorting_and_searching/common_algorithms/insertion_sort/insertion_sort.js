
/**
* Insertion Sort
*
* Types: Common Algorithm, Sorting
*
* Imagine you are playing cards. Somebody is giving you cards one by one. When
* you are receiving cards, you are planning to put them in a way so that the
* smaller one is on the left. This means you want to insert them in a sorted way.
*
* The first card you are given is 5. Since you can't sort only one card, you simplicity
* hold onto it and wait for additional cards.
*
* The second card is 2, we want to compare this to the card in 'last' position, our
* 5. If it's larger, it goes to the right, if it's lower it goes left until we find
* the correct position.
*
* As we keep receiving cards, we check the value against the largest value in our
* sorted list (which happens to be next to it, in the previous array-position
* checked). If larger, it leaves the element in place and moves to the next. If
* smaller, it finds the correct position within the sorted list, shifts all the
* larger values up to make a space, and inserts into that correct position.
*
* And that's insertion sort. It's a simple algorithm that builds the final sorted
* array one item at a time. It is much less efficient on large lists than more
* advanced algorithms such as quicksort, heapsort, or merge sort.
*
* It can be efficient for (quite) small data sets, and is more efficient, in practice,
* than bubble sort or selection sort, although it is quite similiar to selection
* sort.
*
* Time: O(n^2)
* Space: O(1)
* Where n is the number of items to be sorted
*
* @param {array} arr array of integers
* @returns {array} returns a new sorted array
*/

function insertionSort(arr) {

  // step over our input array
  for (let i = 1; i < arr.length; i += 1) {
    // grab our current value and also the previous value index
    let value = arr[i];
    let prev = i - 1;

    // while our prev is larger than our current, move left
    while (prev >= 0 && arr[prev] > value) {
      arr[prev + 1] = arr[prev];
      prev -= 1;
    }

    // insert our value
    arr[prev + 1] = value;
  }

  return arr;
}

export default insertionSort;
