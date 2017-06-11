
/**
* Product of Array Except Self
*
* Tags: Array
* Leetcode: 238
*
* Given an array of n integers where n > 1, nums, return an array output such
* that output[i] is equal to the product of all the elements of nums except nums[i].
*
* Solve it without division and in O(n).
*
* For example, given:
* [1, 7, 3, 4]
*
* Your function would return:
* [84, 12, 28, 21]
*
* By calculating:
* [7*3*4, 1*3*4, 1*7*4, 1*7*3]
*
* Follow Up:
*
* Could you solve it with constant space complexity? (Note: The output array does
* not count as extra space for the purpose of space complexity analysis.)
*/

/**
* productExceptSelf()
*
* Solution:
*
* A brute force approach would use two loops to multiply the integer at every
* index by the integer at every nestedIndex, unless index === nestedIndex.
*
* This would give us a runtime of O(n^2).
*
* Well, we're wasting a lot of time doing the same calculations.
* As an example, let's take:
*
*  // input array
* [1, 2, 6, 5, 9]
*
* // array of the products of all integers
* // except the integer at each index:
*
* [540, 270, 90, 108, 60] // [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5]
*
* We're doing some of the same multiplications two or three times!
*
* One example, we're doing 5*9 in the first 3 calculations.
*
* We're redoing multiplications when instead we could be storing the results!
* This would be a great time to use a greedy approach.
*
* We could store the results of each multiplication, then just multiply by one
* new integer each time.
*
* The product of all the integers except the integer at each index can be broken
* down into:
*
* 1. The product of all the integers before each index
* 2. The product of all the integers after each index.
*
* To achieve this, we will walk through our input array greedily twice!
*
* First we get the products of all the integers before each index, and then we
* go backwards to get the products of all the integers after each index.
*
* That's right. Forwards then backwards, saving into one results array.
*
* When we multiply all the products before and after each index, we get our
* answer — the products of all the integers except the integer at each index!
*
* Time: O(n)
* Space: O(n)
*
* We make two passes through our input an array, and the array we build always
* has the same length as the input array.
*
* @param {array} nums array of integers
* @return {array} returns array of the products of all other numbers except index
*/

// function productExceptSelf(nums) {
//   const result = [];
//
//   // for each integer, we find the product of all the integers
//   // before it, storing the total product so far each time
//   let soFar = 1;
//   for (let i = 0; i < nums.length; i += 1) {
//     result[i] = soFar;
//     soFar *= nums[i];
//   }
//
//   // for each integer, we find the product of all the integers
//   // after it. since each index in products already has the
//   // product of all the integers before it, now we're storing
//   // the total product of all other integers
//   soFar = 1;
//   for (let j = nums.length - 1; j >= 0; j -= 1) {
//     result[j] *= soFar;
//     soFar *= nums[j];
//   }
//
//   return result;
// }
//
// export default productExceptSelf;
