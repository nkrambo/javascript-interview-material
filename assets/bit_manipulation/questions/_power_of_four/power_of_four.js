
/**
* Power of Four
*
* Tags: Bit Manipulation
* Leetcode: 342
*
* Given an integer (signed 32 bits), write a function to check whether it is a
* power of 4.
*
* Example 1:
*
* Input: 16
* Output: true
*
* Example 2:
*
* Input: 5
* Output: false
*
* Follow up:
*
* Could you solve it without loops/recursion?
*/

/**
* isPowerOfFour()
*
* Solution:
*
* So we can solve this one with a 1 line ternary.
*
* This is very similar to the 'power of two' problem.
*
* The first part of the expression is quite simple, if num is less than or equal
* to zero then it cannot be a power of four... so we return false.
*
* The second part checks first that num is a power of two and then further checks
* that it is a power of four.
*
* Checking for a power of two: num & (num -1) === 0
*
* We know that any number that is the power of four must also be a power of two.
* So we can start by checking for this.
*
* The basic idea is that if num is a power of two, its binary form always contains
* only a single '1' bit. That is, the 'leftmost' bit will be a 1 and the remaining
* bits will be 0s.
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
* That's the first part of our logic out of the way.
*
* Now for the remaining part. Checking for a power of four: (num - 1) % 3 === 0
*
* It's true that any number that is a power of four.. that num - 1 % 3 === 0.
*
* Take 16, for example.
* (16 - 1) = 15
* 15 % 3 === 0.
*
* Take 64, for example.
* (64 - 1) = 63
* 63 % 3 === 0.
*
* How do we prove that this is the case for every power of four though?
*
* Mathematical Induction to the resuce!
*
* Without getting too mathematical, induction is an axiom that is very useful
* for helping solve computer science problems. It is basically a proof technique
* that we can use to mathematically prove that our logic is correct. It is closely
* related to recursion, which is why it is so handy in computer science.
*
* It goes like this..
*
* If a statement involving a natural number n holds true, then all values of n + 1
* must also be true.
*
* We start with a base case, usually n = 0 or n = 1 and prove that this statement
* holds true. Then we have an inductive step to prove that n + 1 is also true.
*
* 0 + 1 + 2 ... n = n(n + 1) / 2
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit unsigned integer
* @return {boolean} Returns true if num is a power of 4, otherwise false
*/

// function isPowerOfFour(num) {
//   return num <= 0 ? false : (num & (num - 1)) === 0 && (num - 1) % 3 === 0;
// }
//
// export default isPowerOfFour;
