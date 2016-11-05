
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
* Time: O(n)
* Space: O(1)
*
* @param {array} nums array of integers
* @return {number} Returns the unique value in nums
*/

function singleNumberII(nums) {
  let singleNum = 0;

  for (let i = 0; i < 32; i += 1) {
    let bit = 0;

    for (let j = 0; j < nums.length; j += 1) {
      bit = (bit + ((nums[j] >> i) & 1)) % 3;
    }

    singleNum += bit << i;
  }

  return singleNum;
}

export default singleNumberII;
