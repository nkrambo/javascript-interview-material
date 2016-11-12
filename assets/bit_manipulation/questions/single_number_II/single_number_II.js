
/**
* Single Number II
*
* Types: Bit Manipulation
*
* Given an array of integers, every element appears three times except for one.
* Find that single one.
*
* Note:
* Your algorithm should have a linear runtime complexity. Could you implement it
* without using extra memory?
*
* Solution:
*
* This solution seems tricky and hard to understand at first glance. However, if
* you consider the problem in Boolean algebra form, everything becomes clear.
*
* What we need to do is store the number of 1s of every bit. Since each of the
* 32 bits follow the same rules, we just need to consider 1 bit. We know a number
* appears 3 times at most, so we need 2 bits to store that. Now we have 4 states,
* 00, 01, 10 and 11, but we only need 3 of them.
*
* In this solution, 00, 01 and 10 are chosen. Let 'ones' represents the first bit,
* 'twos' represents the second bit. Then we need to set rules for 'ones' and 'twos'
* so that they act as we hopes.
*
* The complete loop is 00 -> 10 -> 01 -> 00 (0 -> 1 -> 2 -> 3/0).
*
* For 'ones', we can get 'ones = ones ^ nums[i]; if (twos === 1) then ones = 0',
* that can be tansformed to 'ones = (ones ^ nums[i]) & ~twos'.
*
* Similarly, for 'twos', we can get 'twos = twos ^ nums[i]; if (ones* === 1) then
* twos = 0' and 'twos = (twos ^ nums[i]) & ~ones'. Notice that 'ones*' is the value
* of 'ones' after calculation, that is why twos is calculated later.
*
* Time: O(n)
* Space: O(1)
*
* @param {array} nums array of integers
* @return {number} Returns the unique value in nums
*/

function singleNumberII(nums) {
  let ones = 0;
  let twos = 0;

  for (let i = 0; i < nums.length; i += 1) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }

  return ones;
}

export default singleNumberII;
