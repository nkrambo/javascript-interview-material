
/**
* Median of Two Sorted Arrays
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
* Time: O(m + n)
* Space: O(1)
*
* @param {array} nums1 sorted array of integers
* @param {array} nums2 sorted array of integers
* @return {number} returns the median of nums1 and nums2 combined
*/

function findMedian(nums1, nums2) {
  const joined = [];
}

/**
* findMedian()
*
* Solution:
*
* Using JS methods available, we could first simply concat and sort our inputs.
* Then we know that, if the resulting array is even, we return the average of the
* two middle values, otherwise we know the array is odd and we return the middle
* value.
*
* Time: O(n log n)
* Space: O(n + m)
*
* @param {array} nums1 sorted array of integers
* @param {array} nums2 sorted array of integers
* @return {number} returns the median of nums1 and nums2 combined
*/

function findMedianAlt(nums1, nums2) {
  const join = nums1.concat(nums2).sort();

  // even or length of 2, add and divide middle two values
  if (join.length % 2 === 0 || join.length <= 2) {
    const lower = join[(join.length / 2) - 1];
    const upper = join[join.length / 2];

    return (lower + upper) / 2;

  // odd, grab middle value
  } else {
    return join[Math.floor(join.length / 2)];
  }
}

export { findMedian, findMedianAlt };
