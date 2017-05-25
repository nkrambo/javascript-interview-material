
/**
* Hamming Weight
*
* Types: Bit Manipulation
*
* Write a function that takes an unsigned integer and returns the number of '1'
* bits it has (also known as the Hamming weight).
*
* For example, the 32-bit integer '11' has binary representation 1011, so the
* function should return 3.
*/

/**
* hammingWeight()
*
* Solution:
*
* With this approach, instead of checking every bit of the number, we repeatedly
* flip the least-significant 1-bit of the number to 0, and add 1 to the sum. As
* soon as the number becomes 0, we know that it does not have any more 1-bits, and
* we return the sum.
*
* The key idea here is to realize that for any number n, doing a bit-wise AND of
* n and n - 1 flips the least-significant 1-bit in n to 0.
*
* Why? Consider the binary representations of n and n - 1.
*
*        least-significant
*                |
* [..., 1, 1, 0, 1, 0, 0]     n
*
*
*           becomes zero
*                |
* [..., 1, 1, 0, 0, 1, 1]     n - 1
*
*
* remains the same
*        |
*   ___________
*  |           |
* [..., 1, 1, 0, 0, 0, 0]     n & (n - 1)
*
* In the binary representation, the least significant 1-bit in n always corresponds
* to a 0-bit in n - 1. Therefore, anding the two numbers nn and n - 1 always flips
* the least significant 1-bit in n to 0, and keeps all other bits the same.
*
* Using this trick, the code becomes very simple.
*
* Time: O(1)
* Space: O(1)
*
* The run time depends on the number of 1-bits in num. Worst case, all bits in num
* are 1-bits. Our run time is O(1).
*
* The space complexity is O(1), no additional space is needed.
*
* @param {number} num unsigned integer
* @return {number} Returns number of 1s in the binary representation of num, hamming weight
*/

function hammingWeight(num) {
  let count = 0;

  // use x & (x-1) to determine if an integer is a power of two
  // every time you perform the operation x & (x-1), a single 1 bit is erased
  while (num !== 0) {
    num &= (num - 1);
    count += 1;
  }

  return count;
}

/**
* hammingWeightFlip()
*
* Solution:
*
* This solution is straight-forward. We check each of the 32 bits of the number.
* If the bit is 1, we add one to the number of 1-bits.
*
* We can check the ith bit of a number using a bit mask. We start with a mask m = 1,
* because the binary representation of 1 is:
*
* 0000 0000 0000 0000 0000 0000 0000 0001
*
* Clearly, a logical AND between any number and the mask 1 gives us the least
* significant bit of this number. To check the next bit, we shift the mask to the
* left by one.
*
* 0000 0000 0000 0000 0000 0000 0000 0010
*
* And so on.
*
* Time: O(1)
* Space: O(1)
*
* The run time depends on the number of bits in n. Because n in this piece of code
* is a 32-bit integer, the time complexity is O(1).
*
* The space complexity is O(1), since no additional space is allocated.
*
* @param {number} num unsigned integer
* @return {number} Returns number of 1s in the binary representation of num, hamming weight
*/

function hammingWeightFlip(num) {
  let bits = 0;
  let mask = 1;

  // iterate all 32 bits
  for (let i = 0; i < 32; i += 1) {
    // check if current index is 1 or 0
    if ((num & mask) !== 0) {
      bits += 1;
    }

    // shift mask left by 1
    mask <<= 1;
  }

  return bits;
}

export { hammingWeight, hammingWeightFlip };
