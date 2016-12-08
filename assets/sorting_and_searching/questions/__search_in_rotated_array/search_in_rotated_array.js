
/**
* Search in Rotated Array
*
* Given a sorted array of n integers that has been rotated an unknown number
* of times, write code to find an element in the array. You may assume that the
* array was originally sorted in increasing order.
*
* Example:
* Input: [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5
* Output: 8 (index of 5 in array)
*
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

function searchRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // calculate mid index
    const mid = Math.floor((left + right) / 2);

    // found element
    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[left]) { // correct order
      if (nums[left] <= target && target < nums[mid]) {
        // target is within the correct order part
        right = mid - 1;
      } else {
        // target is not within the correct order part
        left = mid + 1;
      }
    } else { // incorrect order
      if(nums[mid] < target && target <= nums[right]) {
        // target is within the correct order part
        left = mid + 1;
      } else {
        // target is not within the correct order part
        right = mid - 1;
      }
    }
  }

  // fell through without finding
  return -1;
}

function search(arr, left, right, x) {

  // either the left or right must be normally ordered. Find out which side is
  // normally ordered, and then use the normally ordered half to figure out which
  // side to search to find x.
  if (arr[left] < arr[mid]) { // left is normally ordered
    if (x >= arr[left] && x < arr[mid]) {
      return search(arr, left, mid - 1, x) // search left
    } else {
      return search(arr, mid + 1, right, x) // search right
    }
  } else if (arr[mid] < arr[left]) { // right is normally ordered
    if (x > arr[mid] && x <= arr[right]) {
      return search(arr, mid + 1, right, x) // search right
    } else {
      return search(arr, left, mid - 1, x) // search left
    }
  } else if (arr[left] === arr[mid]) { // left half is all repeats
    if (arr[mid] !== arr[right]) { // if right is different, search it
      return search(arr, mid + 1, right, x);
    } else { // else, we have to search both halves
      const result = search(arr, left, mid - 1, x); // search left
      if (result === -1) {
        return search(arr, mid + 1, right, x); // search right
      } else {
        return result;
      }
    }
  }
  return -1;
}

export default searchRotatedArray;
