
/**
* Single Number
*
* Types: Bit Manipulation
*
* Given an array of integers, every element appears twice except for one. Find
* that single one.
*
* Note:
* Your algorithm should have a linear runtime complexity. Could you implement it
* without using extra memory?
*
* Solution:
*
* This is quite staight forward. We simply iterate over each number in our input
* array and use the bitwise XOR assignment operator (^=) to compare the binary
* representation of the first element to the next, then the next, etc... Note
* that we start our index from 1 and explicitly pass in the number at index 0 first,.
* as a variable 'unique'. This way we don't modifiy the orignal 'nums' array and
* produce any side effects. This means we are comparing nums[0] and nums[1] first...
* then so on.
*
* So how does this XOR work exactly?
*
* Well, if two bits are same, then result is 0, if two bits are not same the result
* is 1. In other words, the result is only true with 1 truth and 1 false. Such as:
*
* 1 ^ 1 = 0
* 0 ^ 0 = 0
* 0 ^ 1 = 1
* 1 ^ 0 = 1
*
* So, when we have two numbers that are the same, say [9, 9], the bitwise XOR
* operation is:
*
* 1001 ^ 1001 = 0000 // 9 ^ 9 = 0
*
* However, if we introduce a different number say, 3. So we have [9, 3, 9]. Or in
* binary [1001, 0011, 1001].
*
* If we do bitwise XOR operations starting from first number, we have:
*
* 1001 ^ 0011 = 1010 // 9 ^ 3 = 10
* 1010 ^ 1001 = 0011 // 10 ^ 9 = 3
*
* So... we end up with our final result 3, which is unique within our collection.
*
* The trick with XOR'ing all our consecutive values together is that, no matter
* what position they appear in a sequence, same numbers will 'cancel' each other
* out, or clear their bit representations, to equal 0. Essentially, 'toggling' their
* binary representations 'on' and 'off', for every even number it appears.
*
* If a number only appears once in a sequence, then it's binary representation will
* be kept 'in-tact' as it only appeared an odd number of times.
*
* Some notes on this implementation. This will return a 0, if there is no unique
* value in the nums array, but also if the unique number in nums is actually 0 too.
*
* Also, the returned result will not be correct if the nums array holds more than
* 1 unique value.
*
* Time: O(n)
* Space: O(1)
*
* We need to touch every element in nums, so our best case runtime is O(n). We
* don't need any additional space.
*
* @param {array} nums array of integers
* @return {number} Returns the unique value in nums
*/

function singleNumber(nums) {
  let unique = nums[0];

  // notice we start index from 1, not 0
  for (let i = 1; i < nums.length; i += 1) {
    unique ^= nums[i];
  }

  return unique;
}

export default singleNumber;
