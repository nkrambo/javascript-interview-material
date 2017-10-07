
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
* This question is more posed for a language that doesn't have dynamic array objects,
* like C++. In Javascript, we could easily just .concat nums1 and nums2 and use
* the .sort() method.
*
* This is farily straight forward to do manually, however. We are provided the
* length of both arrays, but, being javascript, we could have easily grabbed
* their length properties as well.
*
* We are merging nums2 into nums1, meaning that we don't need any additional space.
*
* We simply, grab the last indices of nums1, nums2 and of the, 'will be', modified nums1.
* i, j and k, respectively.
*
* For example,
*
* If we have:
*
* nums1 = [1, 2, 5], m = 3
* nums2 = [4, 8], n = 2
*
* The last index (i) of nums1 = 2 (m -1)
* The last index (i) of nums2 = 1 (n -1)
* The last index of our merged array, which is 4 ((m + n) - 1)
*
* We'll rename our input arrays A, B, to be easier to handle.
*
* We simple, iterate over both arrays from their last indices backward and compare
* each pair of values. If the A's value is greater than B's we take it and place
* it in the far right position of the merged array index, which is A remember.
*
* To be explicit.
*
* On the first iteration, we check if 5 > 8, it's not so we place 8 into position
* A[4] and decrement A[k] and B[j].
*
* A = [1, 2, 5, undefined, 8]
*
* Now we iterate and compare 5 again with the last value of B. Is 5 > 4? Yes.
*
* We place 5 at index k, A[3]. We decrement A[k] again and now also A[i].
*
* A = [1, 2, 5, 5, 8]
*
* We keep going until we have merged all of B into A. Once all of the numbers from
* B have been merged into A, the rest of the numbers in A that were
* not moved are already in the correct place.
*
* Time: O(m + n)
* Space: O(1)
*
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/

function merge(nums1, m, nums2, n) {
  let i = m - 1;      // last index of A
  let j = n - 1;      // last index of B
  let k = m + n - 1;  // last index of new merged array

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

  // if there are any remaining values in B, merge them into A, the rest of the
  // numbers in A are already in-place.
  while (j >= 0) {
    A[k--] = B[j--];
  }
}

export default merge;
