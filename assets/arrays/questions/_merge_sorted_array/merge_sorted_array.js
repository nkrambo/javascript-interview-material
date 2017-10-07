
/**
* Merge Sorted Array
*
* Tags: Array, Two Pointers
* Leetcode: 88
*
* Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one
* sorted array.
*
* Note:
*
* You may assume that nums1 has enough space (size that is greater or equal to m + n)
* to hold additional elements from nums2. The number of elements initialized in
* nums1 and nums2 are m and n respectively.
*/

/**
* merge()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/

function merge(nums1, m, nums2, n) {
  let i = m - 1;      // length of A
  let j = n - 1;      // length of B
  let k = m + n - 1;  // length of new merged array

  // rename for convienience
  const A = nums1;
  const B = nums2;

  // while we have 'evenly matched' elements in both A and B, pairs of elements
  while (i >= 0 && j >= 0) {

    // if A is greater than B, take A and place in new index
    if (A[i] > B[j]) {
      A[k--] = A[i--];

    // otherwise, take B and place in new index
    } else {
      A[k--] = B[j--];
    }
  }

  // take any 'odd' remaining values in B and place them in A
  while (j >= 0) {
    A[k--] = B[j--];
  }
}

export default merge;
