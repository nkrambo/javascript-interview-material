
/**
* Search Insert Position
*
* Tags: Binary Search, Array
* Leetcode: 35
*
* Given a sorted array and a target value, return the index if the target is found.
* If not, return the index where it would be if it were inserted in order.
*
* You may assume no duplicates in the array.
*
* Examples:
*
* [1, 3, 5, 6], 5
* Returns 2
*
* [1, 3, 5, 6], 2
* Returns 1
*
* [1, 3, 5, 6], 7
* Returns 4
*
* [1, 3, 5, 6], 0
* Returns 0
*/

/**
* searchInsert()
*
* Solution:
*
* Searching in a sorted array... sound familiar?
*
* This is basically a version of a simple binary search algorithm. In this case,
* however, we must return the index of the target instead of a boolean.
*
* This value will always be 'mid', if the target exists, otherwise it will be the
* 'left' index, indicating where the target should exist in the sorted array.
*
* Time: O(log n)
* Space: O(1)
*
* Binary search runs in log n, as we our search sub-array by half every iteration,
* either to the left or right of the middle index.
*
* @param {array} nums of sorted integers
* @param {number} target to find
* @return {boolean} returns the index where target would be inserted, else -1
*/

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    // get middle index
    mid = Math.floor((left + right) / 2);

    // check if target, if yes return index
    if (nums[mid] === target) return mid;

    // if target is less, move in right
    if (target < nums[mid]) {
      right = mid - 1;
    // else target must be greater, move in left
    } else {
      left = mid + 1;
    }
  }

  // target not in nums, return where it would be.
  return left;
}

export default searchInsert;
