
/**
* Counting Bits
*
* Types: Bit Manipulation
*
* Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num
* calculate the number of 1's in their binary representation and return them as
* an array.
*
* Example:
* Input: 5
* Output: [0, 1, 1, 2, 1, 2]
*
* Follow up:
*
* 1. It is very easy to come up with a solution with run time O(n * sizeof(integer)).
*    But can you do it in linear time O(n) /possibly in a single pass?
*
* 2. Space complexity should be O(n).
*
* 3. Can you do it like a boss? Do it without using any built-in functions.
*
* Solution:
*
* We start by intialising a results array with a single value of '0', which represents
* the hamming weight of the first number always in range, obviously zero.
*
* Then it's a matter of iterating over our 'range' so we can handle each hamming
* weight of each number. Notice our '<=' operator in the for loop, watch out for
* 'off by 1'.
*
* This is where it gets tricky. Let's break it down...
*
* result[i >> 1]
*
* When you bitwise shift right by 1, you are essentially dividing the left operand
* by 2. If the number is odd, it will still divide by 2 evenly, flooring the value.
* Take a look at the following, we can see this pattern.
*
* 0 >> 1 // 00000 >> 00000 // 0
* 1 >> 1 // 00001 >> 00000 // 0
* 2 >> 1 // 00010 >> 00001 // 1
* 3 >> 1 // 00011 >> 00010 // 1
* 4 >> 1 // 00100 >> 00010 // 2
* 5 >> 1 // 00101 >> 00010 // 2
* 6 >> 1 // 00110 >> 00011 // 3
* 7 >> 1 // 00111 >> 00011 // 3
* 8 >> 1 // 01000 >> 00100 // 4
*
* Now for the next part.
*
* (i & 1)
*
* We know that any odd number must always have a 1 bit in the 1 column of our binary
* representation. If it doesn't it can only be an even number. What this means is
* that a & 1, will always equal 1 if 'a' is an odd number, otherwise it will equal
* 0 and must be even.
*
* Take a look at the following, you can see this is the case.
*
* 0 & 1 // 00000 & 00001 // 0
* 1 & 1 // 00001 & 00001 // 1
* 2 & 1 // 00010 & 00001 // 0
* 3 & 1 // 00011 & 00001 // 1
* 4 & 1 // 00100 & 00001 // 0
* 5 & 1 // 00101 & 00001 // 1
* 6 & 1 // 01000 & 00001 // 0
* 7 & 1 // 01001 & 00001 // 1
* 8 & 1 // 10000 & 00001 // 0
*
* Putting it all together... We are really dividing each number into 2 parts then.
*
* We shift 'off' the lowbit of the binary, or the bit that represents if it is
* odd or even (1 or 0). This isolates all the other bits for
* us, result[i >> 1], which is equivalent to result[i / 2].
*
* Then we simply add the lowbit back to calculate the correct hamming weight, which
* will add 1 if odd, or zero if even. This (i & 1), equivalent to (i % 2).
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num non negative integer
* @return {array} Returns an array of the number of 1s in the binary representation of numbers i in the range 0 ≤ i ≤ num
*/

function countingBits(num) {
  let result = [0];

  for (let i = 1; i <= num; i += 1) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
}

export default countingBits;
