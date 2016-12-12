
/**
* Radix Sort
*
* Types: Common Algorithm, Sorting
*
* Radix sort is a sorting algorithm for integers (and some other data types) that
* takes advantage of the fact that integers have a finite number of bits.
*
* In radix sort, we iterate through each digit of the number, grouping numbers by
* each digit. For example, if we have an array of integers, we might first sort
* by the first digit, so that the 0s are grouped together. Then, we sort each of
* these groupings by the next digit. We repeat this process sorting by each subsequent
* digit, until finally the whole array is sorted.
*
* Unlike comparison sorting algorithms, which cannot perform better than O(n log n)
* in the average case, radix sort has a runtime of O(kn), where n is the number
* of elements and k is the number of passes of the sorting algorithm.
*
* There are two types of radix sort:
*
* 1. Least significant digit (LSD)
* 2. Most significant digit (MSD)
*
* LSD
*
* Time: O(kn)
* Space: O(1)
*
* @param {array} arr array of integers
* @returns {array} returns a new sorted array
*/

function radixSort() {

}

export default radixSort;
