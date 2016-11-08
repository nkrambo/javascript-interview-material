
/**
* Reverse Bits
*
* Types: Bit Manipulation
*
* Reverse bits of a given 32 bits unsigned integer.
*
* Example:
* Input: 43261596 (represented in binary as 00000010100101000001111010011100)
* Output: 964176192 (represented in binary as 00111001011110000010100101000000)
*
* Follow up:
* If this function is called many times, how would you optimize it?
*
* Solution:
*
* Fairly simple approach.
*
* First intitialise our result to 0 so we can build onto it.
*
* We then iterate over our num, 32 bits. In each iteration:
*
* 1. Shift result to the left by 1 bit. Essentially, pad a 0 in.
* 2. If the last bit of num is a 1, we add 1 to our result.
* 3. Update num by shifting to the right by 1.
*
* Let's look at how step 2 works: result |= num & 1
*
* (num & 1) will always return true if the last bit in num is a 1 bit, otherwise
* it will return false.
*
* For example, let say num = 5. 5 is '101', which clearly has a least significant 1 bit.
* '101' & '001' = '001'
*
* However, if n = 2, which has a least significant bit of 0.
* '010' & '001' = '000'
*
* Then we just bitwise OR the end bit onto our result.
*
* Let's walk through an entire example.
*
* Say num = 13
* Using '_' for readability, the binary for 13 is:
*
* 0000_0000_0000_0000_0000_0000_0000_1101
*
* And our result should be:
*
* 1011_0000_0000_0000_0000_0000_0000_0000
*
* We intitialise result to 0; which  0000_0000_0000_0000_0000_0000_0000_0000
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit unsigned integer
* @return {number} Returns the reversed of num
*/

function reverseBits(num) {
  let result =  0;

  for (let i = 0; i < 32; i += 1) {
    result <<= 1;
    result |= num & 1;
    num >>= 1;
  }

  return Math.abs(result);
}

export default reverseBits;
