
/**
* Power of Two
*
* Types: Bit Manipulation
*
* Given an integer, write a function to determine if it is a power of two.
*
* Solution:
*
* We can solve this with a 1 line ternary expression.
*
* The first part of the expression is quite simple, if num is less than or equal
* to zero then it cannot be a power of two... so we return false.
*
* The second part is a little trickier. The basic idea is that if num is a power
* of two, its binary form always contains only a single '1' bit. That is, the
* 'leftmost' bit will be a 1 and the remaining bits will be 0s.
*
* If you think about how base 2 and binary works, this makes sense. As we move
* right to left across a binary representation we increase by powers of two.
*
* That is:
*
* 64, 32, 16, 8, 4, 2, 1
*
* So naturally, we can only have 1 bit in the representation true if the number is
* a power of two.
*
* So logically, if num is a power of two then (num - 1) would be represented with
* all 1s. This is true for all (powers of two - 1). For example,
*
* 2 = '10'
* 1 = '01'
*
* 4 = '100'
* 3 = '011'
*
* 32 = '100000'
* 31 = '011111'
*
* 256 = '100000000'
* 255 = '011111111'
*
* and so on...
*
* We know that, (a & b) = 1, only if a and b are both 1s. That is,
*
* 1 & 1 = 1
* 1 & 0 = 0
* 0 & 1 = 0
* 0 & 0 = 0
*
* Therefore, putting it all together, if num is a power of two, then num & (num - 1)
* must equal 0.
*
* For example, if num is 16.
* 16 = '10000'
* (num - 1) is 15, which is '01111'
*
* '10000' & '01111' = '00000'
*
* So we would return true.
*
* Therefore, in all other cases where num & (num - 1) does not equal all 0s, it
* cannot be a power of two.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num to check is power of two
* @return {boolean} Returns true if num is a power of 2, otherwise false
*/

function powerOfTwo(num) {
  return num <= 0 ? false : (num & (num - 1)) === 0;
}

export default powerOfTwo;
