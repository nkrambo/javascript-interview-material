
/**
* Majority Element
*
* Types: Bit Manipulation
*
* Given an array of size n, find the majority element. The majority element is
* the element that appears more than (n / 2) times.
*
* You may assume that the array is non-empty and the majority element always exist
* in the array.
*
* Solution:
*
* There are many ways to solve this problem. In fact, there are easily at least
* 7 approaches to this problem. Anywhere from using a hash map, sorting, divide
* and conquer and so on. We're going to focus on a bit manipulation approach.
*
* Time: O(1)
* Space: O(1)
*
* @param {array} nums array of integers, of n length
* @return {number} Returns the value of the integer that appears more than n / 2 times
*/

function majorityElement(nums) {
  let major = 0;

  for (let i = 0, mask = 1; i < 32; i += 1, mask <<= 1) {
    let bitCounts = 0;

    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] & mask) bitCounts += 1;

      if (bitCounts > nums.length / 2) {
        major |= mask;
        break;
      }
    }
  }

  return major;
}

export default majorityElement;
