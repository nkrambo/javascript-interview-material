
/**
* Median of Two Sorted Arrays
*
* Tags: Binary Search
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
* findMedian()
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

// function findMedian(nums1, nums2) {
  // const A = nums1;
  // const B = nums2;
  // const m = A.length;
  // const n = B.length;
  //
  // // if (m > n) {
  // //
  // //   A, B, m, n = B, A, n, m;
  // // }
  //
  // if (n === 0) {
  //   throw new Error('Value error');
  // }
  //
  // let iMin = 0;
  // let iMax = m;
  // const halfLength = (m + n + 1) / 2;
  // let maxLeft;
  // let maxRight;
  //
  // while (iMin <= iMax) {
  //   const i = (iMin + iMax) / 2;
  //   const j = halfLength - 1;
  //
  //   // i is too small, must increase it
  //   if (i < m && B[j-1] > A[i]) {
  //     iMin = i + 1;
  //
  //   // i is too big, must decrease it
  //   } else if (i > 0 && A[i-1] > B[j]) {
  //     iMax = i - 1;
  //
  //   // i is perfect
  //   } else {
  //
  //     if (i === 0) {
  //       maxLeft = B[j-1];
  //     } else if (j === 0) {
  //       maxLeft = A[i-1];
  //     } else {
  //       maxLeft = Math.max(A[i-1], B[j-1]);
  //     }
  //
  //     if ((m + n) % 2 === 1) {
  //       return maxLeft;
  //     }
  //
  //     if (i === m) {
  //       maxRight = B[j];
  //     } else if (j === n) {
  //       maxRight = A[i];
  //     } else {
  //       maxRight = Math.max(A[i], B[j]);
  //     }
  //
  //     // return (maxLeft + maxRight) / 2.0;
  //     return maxLeft + maxRight;
  //   }
  // }
  //
  // return -1;
// }
//
// export default findMedian;
