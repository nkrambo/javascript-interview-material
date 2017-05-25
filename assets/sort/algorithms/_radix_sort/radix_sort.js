
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
* LSD radix sorts typically use the following sorting order: short keys come before
* longer keys, and keys of the same length are sorted lexicographically. This coincides
* with the normal order of integer representations, such as the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11.
*
* MSD radix sorts use lexicographic order, which is suitable for sorting strings,
* such as words, or fixed-length integer representations. A sequence such as
* "b, c, d, e, f, g, h, i, j, ba" would be lexicographically sorted as
* "b, ba, c, d, e, f, g, h, i, j". If lexicographic ordering is used to sort
* variable-length integer representations, then the representations of the numbers
* from 1 to 10 would be output as 1, 10, 2, 3, 4, 5, 6, 7, 8, 9, as if the shorter
* keys were left-justified and padded on the right with blank characters to make
* the shorter keys as long as the longest key for the purpose of determining sorted order.
*
* Time: O(kn)
* Space: O(k + n)
*
* @param {array} arr array of integers
* @returns {array} returns a new sorted array
*/

// function radixSort() {
//
// }
//
// export default radixSort;
