
/**
* Search in Rotated Array
*
* Tags: Binary Search, Array
* Leetcode: 33
*
* Suppose an array sorted in ascending order is rotated at some pivot unknown to
* you beforehand.
*
* (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
*
* You are given a target value to search. If found in the array return its index,
* otherwise return -1.
*
* You may assume no duplicate exists in the array.
*/

/**
* Solution:
*
* If this problems smells like binary search to you, you're right!
*
* In classic binary search, we compare x with the midpoint to determine if x belongs
* on the left or the right side. The complication here is that the array is rotated
* and may have an inflection point. Consider, for example, the following two arrays:
*
* array 1:   [10, 15, 20,  0,  5]
* array 2:   [50,  5, 20, 30, 40]
*
* Notice that both arrays have a midpoint of 20, but 5 appears on the left side of
* one and on the right side of the other. Therefore, comparing x with the midpoint
* is insufficient.
*
* However, if we look a little deeper, we can see that one half of the array must
* be ordered normally (in increasing order). We can therefore look at the normally
* ordered half to determine whether we should search the left or the right half.
*
* For example, if we are searching for 5 in array 1, we can look at the left element
* (10) and middle element (20). Since 10 < 20, the left half must be ordered
* normally. And, since 5 is not between those, we know that we must search the
* right half.
*
* In array 2, we can see that since 50 > 20, the right half must be ordered normally.
* We turn to the middle (20) and right (40) element to check if 5 would fall between
* them. The value 5 would not; therefore, we search the left half.
*
* The tricky condition is if the left and the middle are identical, as in the example
* array [2, 2, 2, 3, 4, 2]. In this case, we can check if the right most element
* is different. If it is, we can search just the right side. Otherwise we have no
* choice but to search both halves.
*
* Time: O(log n)
* Space: O(n)
*
* This code will run in O(log n) if all the elements are unique. However, with
* many duplicates, the algorithm actually takes O(n). This is because with many
* duplicates, we will often have to search both the left and right sides of the
* array (or subarrays).
*
* @param {array} nums array of integers
* @param {number} target the integer to find
* @return {number} returns the index of the target if it exists, else -1
*/

function search(nums, target) {
  // we create index 'range' around possible positions of our target
  let left = 0;
  let right = nums.length - 1;

  // while there are unchecked positions in our 'range', keep checking midpoint
  while (left <= right) {
    // calculate midpoint, favour left if we need to
    const mid = Math.floor((left + right) / 2);

    // found element, return index
    if (nums[mid] === target) return mid;

    // left is normally ordered
    if (nums[mid] >= nums[left]) {
      // target is within the normally ordered half, move right side of 'range' inward
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;

      // target is not within the normally order half, move left side of 'range' inward
      } else {
        left = mid + 1;
      }

    // the left half is not in normal order, the right half MUST be normally ordered
    // if target is not within the normally order half, move right side of 'range' inward
    } else if (nums[mid] < target && target <= nums[right]) {
      left = mid + 1;

    // target is not within the normally order half, move right side of 'range' inward
    } else {
      right = mid - 1;
    }
  }

  // fell through, target doesn't exist
  return -1;
}

export default search;
