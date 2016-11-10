
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
* 1. Multiply our result by 2.
* 2. If the last bit of num is a 1, we add 1 to our result.
* 3. Update num by shifting to the right by 1, so we can handle the next end bit.
*
* Let's look at how step 2 works: result += num & 1
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
* We loop 32 bits, starting at index 0.
* result = result * 2 = 0000_0000_0000_0000_0000_0000_0000_0000.
* num & 1: ...1101 & ...0001 = ...0001, which is 1. Therefore, result = result + 1
*
* We right shift num by 1 (num >>= 1) to get: ...0110
*
* Then we move on to the next iteration and repeat the process. Eventually, we will
* cover all the bits that may vary in value, that is, the first 4 in this example.
* Then we will only be iterating over 0 values only, which will remain 0 when we
* (n & 1) them. Since there we have i = 4 to i = 31 iterations left, this will
* result in padding 28 0s to the right of result. i.e at the end, we get
* result = 1011_0000_0000_0000_0000_0000_0000_0000
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
    result *= 2;
    result += num & 1;
    num = num >> 1;
  }

  return result;
}

export default reverseBits;
