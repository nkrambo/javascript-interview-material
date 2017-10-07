
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
* http://www.growingwiththeweb.com/2015/08/find-the-median-of-two-sorted-arrays.html
*
* Time: O(log(min(m, n)))
*
* At first, the searching range is [0, m]. And the length of this searching range
* will be reduced by half after each loop. So, we only need log(m) loops. Since
* we do constant operations in each loop, so the time complexity is O(log(m)).
* Since m ≤ n, the time complexity is O(log(min(m, n)))
*
* Space: O(1)
*
* We only need constant memory to store 99 local variables, so the space complexity is O(1).
*
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/

function findMedianSortedArrays(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  if (m > n) {
    // destructuring assignment array matching, swap values
    [nums1, nums2, m, n] = [nums2, nums1, n, m];
  }

  if (n === 0) {
    throw new ValueError('Cannot find media value.');
  }

  let iMin = 0;
  let iMax = m;
  let halfLen = (m + n + 1) / 2;

  while (iMin <= iMax) {
    let i = (iMin + iMax) / 2;
    let j = halfLen - i;

    // i is too small, must increase it
    if (i < m && nums2[j - 1] > nums1[i]) {
      iMin = i + 1;

    // i is too big, must decrease it
    } else if (i > 0 && (nums1[i - 1] > nums2[j])) {
      iMax = i - 1;

    // i is perfect
    } else {
      let maxOfLeft;
      if (i === 0) {
        maxOfLeft = nums2[j - 1];

      } else if (j === 0) {
        maxOfLeft = nums1[i - 1];

      } else {
        maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if (((m + n) % 2) === 1) return maxOfLeft;

      let minOfRight;
      if (i === m) {
        minOfRight = nums2[j];

      } else if (j === n) {
        minOfRight = nums1[i];

      } else {
        minOfRight = Math.min(nums1[i], nums2[j]);
      }
    }
  }

  return (maxOfLeft + minOfRight) / 2;
}

export default findMedianSortedArrays;
