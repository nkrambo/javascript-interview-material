
/**
* Remove Element
*
* Tags: Array, Two Pointer
* Leetcode: 27
*
* Given an array and a value, remove all instances of that value in place and
* return the new length.
*
* Do not allocate extra space for another array, you must do this in place with
* constant memory.
*
* The order of elements can be changed. It doesn't matter what you leave beyond
* the new length.
*
* Example:
*
* Given [3, 2, 2, 3], val = 3
* Return 2, with the array being [2, 2]
*/

/**
* removeElement1()
*
* Solution:
*
* This is a pretty easy problem, but one may get confused by the term "in-place"
* and thought it is impossible to remove an element from the array without making
* a copy of the array.
*
* Hints:
*
* - Try two pointers.
* - Did you use the property of "the order of elements can be changed"?
* - What happens when the elements to remove are rare?
*
* Since the question asked us to remove all elements of the given value in-place,
* we have to handle it with O(1) extra space. How to solve it? We can keep two
* pointers i and j, where i is the slow-runner while j is the fast-runner.
*
* When nums[j] equals to the given value, skip this element by incrementing j.
* As long as nums[j] ≠ val, we copy nums[j] to nums[i] and increment both indexes
* at the same time. Repeat the process until j reaches the end of the array and
* the new length is i.
*
* Time: O(n)
* Assume the array has a total of n elements, both i and j traverse at most 2n steps.
*
* Space: O(1)
*
* @param {number[]} nums
* @param {number} val
* @return {number}
*/

function removeElement1(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j += 1) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i += 1;
    }
  }

  return i;
}

/**
* removeElement2()
*
* When elements to remove are rare!
*
* Solution:
*
* Now consider cases where the array contains few elements to remove. For example,
* nums = [1, 2, 3, 5, 4], val = 4. The previous algorithm will do unnecessary copy
* operation of the first four elements. Another example is nums = [4, 1, 2, 3, 5], val = 4.
* It seems unnecessary to move elements [1, 2, 3, 5] one step left as the problem
* description mentions that the order of elements could be changed.
*
* When we encounter nums[i] = val, we can swap the current element out with the
* last element and dispose the last one. This essentially reduces the array's
* size by 1.
*
* Note that the last element that was swapped in could be the value you want to
* remove itself. But don't worry, in the next iteration we will still check this
* element.
*
* Time: O(n)
* Both i and n traverse at most nn steps. In this approach, the number of assignment
* operation is equal to the number of elements to remove. So it is more efficient
* if elements to remove are rare.
*
* Space: O(1)
*
* @param {number[]} nums
* @param {number} val
* @return {number}
*/

function removeElement2(nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      // reduce array size by one
      n -= 1;
    } else {
      i += 1;
    }
  }

  return n;
}

export { removeElement1, removeElement2 };
