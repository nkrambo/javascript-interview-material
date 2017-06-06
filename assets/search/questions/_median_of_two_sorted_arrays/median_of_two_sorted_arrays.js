
/**
* Median of Two Sorted Arrays
*
* Tags: Binary Search, Array, Divide and Conquer
* Leetcode: 4
*
* There are two sorted arrays nums1 and nums2 of size m and n respectively.
*
* Find the median of the two sorted arrays. The overall run time complexity
* should be O(log (m + n)).
*
* Example:
* Input: [1, 3], [2]
* Output: 2.0
*
* Example:
* Input: [1, 2], [3, 4]
* Output: 2.5
*/

/**
* findMedianSortedArrays()
*
* Solution:
*
* First let's remind ourselves of what the median is... It's the value separating
* the higher half of a data sample from the lower half. In simple terms, it may
* be considered the 'middle' value.
*
* How do we calculate this?
*
* 1. Put all the numbers in numerical order.
* 2. If there is an odd number of results, the median is the middle number.
* 3. If there is an even number of results, the median will be the mean of the two central numbers.
*
*
*
* Time: O(m + n)
* Space: O(1)
*
* @param {array} nums1 sorted array of integers
* @param {array} nums2 sorted array of integers
* @return {number} returns the median of nums1 and nums2 combined
*/

// function findMedianSortedArrays(nums1, nums2) {
//
// }
//
// export default findMedianSortedArrays;
