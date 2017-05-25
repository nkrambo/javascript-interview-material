
/**
* Rotate Array
*
* Rotate an array of n elements to the right by k steps.
*
* Example:
* Input: [1, 2, 3, 4, 5, 6, 7], 3
* Output: [5, 6, 7, 1, 2, 3, 4]
*
* Try to come up as many solutions as you can, there are at least 3 different
* ways to solve this problem.
*/

/**
* rotateArrayBrute()
*
* Solution:
*
* The simplest brute force approach is to rotate all the elements of the array
* in k steps by rotating the elements by 1 unit in each step.
*
* Fairly simple. For every k steps, we grab the last element as the previous.
*
* Then... for every element in the array we swap the current value for it's previous,
* starting with swapping the first element with the last, then we step forward
* through the array as normal swapping the current with it's previous.
*
* Time: O(n * k)
* Space: O(1)
*
* All the numbers are shifted by one step - O(n), k times - O(k).
* No additional space needed.
*
* @param {array} nums array of integers
* @param {number} k number of steps to rotate
* @return {void} modify nums in-place
*/

function rotateArrayBrute(nums, k) {
  let temp;
  let prev;

  for (let i = 0; i < k; i += 1) {
    prev = nums[nums.length - 1];

    for (let j = 0; j < nums.length; j += 1) {
      temp = nums[j];
      nums[j] = prev;
      prev = temp;
    }
  }
}

/**
* rotateArrayExtra()
*
* Solution:
*
* We use an extra array in which we place every element of the array at its correct
* position i.e. the number at index i in the original array is placed at the index
* (i + k).
*
* We are using the modulo operand to help calculate our desired indices. That is,
* (i + k) % nums.length. This is a little tricky, so if we break it down...
*
* We know that:
*
* 1. i % i = 0
* 2. i % (i + n) = i
* 3. (i + n) % i = n
*
* Let's take an array [1, 2, 3], for example. And let's say that k = 1. So we
* want a result of [3, 1, 2]. A rotation of 1 step.
*
* Using our formula to build a temp array...
*
* Iteration 1:
* (0 + 1) % 3 = 1, case 2
* temp[1] = array[0]            temp[undefined, 1, undefined]
*
* Iteration 2:
* (0 + 2) % 3 = 2, case 2
* temp[2] = array[1]            temp[undefined, 1, 2]
*
* Iteration 3:
* (0 + 3) % 3 = 0, case 1
* temp[0] = array[2]            temp[3, 1, 2]
*
* It's quite simple really.
*
* Then we do is copy the temp array to the original one to modify.
*
* Time: O(n)
* Space: O(n)
*
* One pass is used to put the numbers in the new array. And another pass to copy
* the new array to the original one. Another array of the same size is used.
*
* @param {array} nums array of integers
* @param {number} k number of steps to rotate
* @return {void} modify nums in-place
*/

function rotateArrayExtra(nums, k) {
  const temp = new Array(nums.length);

  // use modulo operand to place correctly
  for (let i = 0; i < nums.length; i += 1) {
    temp[(i + k) % nums.length] = nums[i];
  }

  // copy results into original array from temp
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = temp[i];
  }
}

/**
* rotateArrayCyclic()
*
* Solution:
*
* We can directly place every number of the array at its required correct position.
* But if we do that, we will destroy the original element. Thus, we need to store
* the number being replaced in a temptemp variable. Then, we can place the replaced
* number(temp) at its correct position and so on, n times, where n is the length
* of array. We have chosen nn to be the number of replacements since we have to
* shift all the elements of the array(which is n). But, there could be a problem
* with this method, if n where k = k (since a value of k larger than nn eventually
* leads to a k equivalent to k). In this case, while picking up numbers to be placed
* at the correct position, we will eventually reach the number from which we
* originally started. Thus, in such a case, when we hit the original number's index
* again, we start the same process with the number following it.
*
* Now let's look at the proof of how the above method works. Suppose, we have n
* as the number of elements in the array and k is the number of shifts required.
* Further, assume n.Now, when we start placing the elements at their correct
* position, in the first cycle all the numbers with their index ii satisfying i
* get placed at their required position. This happens because when we jump k steps
* every time, we will only hit the numbers k steps apart. We start with index i = 0,
* having i. Thus, we hit all the numbers satisfying the above condition in the
* first cycle. When we reach back to the original index, we have placed elements
* at their correct position, since we hit only that many elements in the first cycle.
*
* Now, we increment the index for replacing the numbers. This time, we place other n/k
* elements at their correct position, different from the ones placed correctly in
* the first cycle, because this time we hit all the numbers satisfy the condition i.
* When we hit the starting number again, we increment the index and repeat the
* same process from i = 1 for all the indices satisfying i. This happens till we
* reach the number with the index i again, which occurs for i = k. We will reach
* such a number after a total of k cycles. Now, the total count of numbers exclusive
* numbers placed at their correct position will be (k * n/k) = n.
*
* Thus, all the numbers will be placed at their correct position.
*
* Time: O(n)
* Space: O(1)
*
* @param {array} nums array of integers
* @param {number} k number of steps to rotate
* @return {void} modify nums in-place
*/

function rotateArrayCyclic(nums, k) {
  k %= nums.length;
  let count = 0;

  for (let start = 0; count < nums.length; start += 1) {
    let current = start;
    let prev = nums[start];

    do {
      const next = (current + k) % nums.length;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count += 1;
    } while (start !== current);
  }
}

/**
* rotateArrayReverse()
*
* Solution:
*
* This approach is based on the fact that when we rotate the array k times, k elements
* from the back end of the array come to the front and the rest of the elements from
* the front shift backwards.
*
* In this approach, we firstly reverse all the elements of the array. Then, reversing
* the first k elements followed by reversing the rest (n - k) elements gives us the
* required result.
*
* Let n = 7 and k = 3.
*
* Original List                       : 1 2 3 4 5 6 7
* After reversing all numbers         : 7 6 5 4 3 2 1
* After reversing first k numbers     : 5 6 7 4 3 2 1
* After reversing last n - k numbers  : 5 6 7 1 2 3 4 => Result
*
* Time: O(n)
* Space: O(1)
*
* n elements are reversed a total of 3 times. No additional space is needed.
*
* @param {array} nums array of integers
* @param {number} k number of steps to rotate
* @return {void} modify nums in-place
*/

function rotateArrayReverse(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1); // reverse all
  reverse(nums, 0, k - 1);           // reverse k numbers
  reverse(nums, k, nums.length - 1); // reverse n - k numbers
}

/**
* reverse()
*
* Helper method to reverse an array.
*
* We simply iterate inward from the start and end indices and swap values.
*
* Time: O(n)
* Space: O(1)
*
* n elements are reversed.
*
* @param {array} nums array of integers
* @param {number} start index
* @param {number} end index
* @return {void} modify nums in-place
*/

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
}

export { rotateArrayBrute, rotateArrayExtra, rotateArrayCyclic, rotateArrayReverse };
