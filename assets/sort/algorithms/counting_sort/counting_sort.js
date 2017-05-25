
/**
* Counting Sort
*
* Tags: Sorting
*
* Counting sort is a very time-efficient (and somewhat space-inefficient) algorithm
* for sorting that avoids comparisons and exploits the O(1) time insertions and
* lookups in a list.
*
* The idea is simple: if you're sorting integers and you know they all fall in the
* range 1..100, you can generate a sorted list this way:
*
* 1. Allocate a list numsToCounts where the indices represent numbers from our
*    input list and the values represent how many times the index number appears.
*    Start each value at 0.
*
* 2. In one pass of the input list, update numsToCounts as you go, so that at
*    the end the values in numsToCounts are correct.
*
* 3. Allocate a list sorted_list where we'll store our sorted numbers.
*
* 4. In one in-order pass of nums_to_counts put each number, the correct number
*    of times, into sortedArray.
*
* Time: O(n)
* Space: O(n)
*
* Additional space for the new array that we end up returning.
*
* You might think because we have nested loops that the runtime would be O(n^2).
* Notice what those loops iterate over. The outer loop runs once for each unique
* number in the array. The inner loop runs once for each time that number occurred.
*
* So in essence we're just looping through the n numbers from our input array,
* except we're splitting it into two steps: (1) each unique number, and (2) each
* time that number appeared.
*
* Here's another way to think about it: in each iteration of our two nested loops,
* we append one item to sortedArray. How many numbers end up in sortedArray in
* the end? Exactly how many were in our input array! n!
*
* @param {array} arr array of integers
* @param {number} maxValue upper bound
* @returns {array} returns a new sorted array
*/

function countingSort(array, maxValue) {
  // array of 0s at indices 0..maxValue
  const numsToCounts = [];
  for (let i = 0; i < maxValue + 1; i += 1) {
    numsToCounts[i] = 0;
  }

  // populate numsToCounts
  array.forEach((num) => {
    numsToCounts[num] += 1;
  });

  // populate the final sorted array
  const sorted = [];

  // for each num in numsToCounts
  for (let i = 0; i < numsToCounts.length; i += 1) {
    const count = numsToCounts[i];

    // for the number of times the item occurs, add it to the sorted array
    for (let x = 0; x < count; x += 1) {
      sorted.push(i);
    }
  }

  return sorted;
}

export default countingSort;
