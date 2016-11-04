
/**
* Insertion
*
* You are given two 32-bit numbers. N and M, and two bit positions, i and j.
* Write a method to insert M into N such that M starts at bit j and ends ar bit i.
* You can assume that the bits j through i have enough space to fit all of M. That is,
* if M = 10011, you can assume that there at least 5 bits between j and i. You would not,
* for example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.
*
* Example:
*
* Input: N = 10000000000, M = 10011, i = 2, j = 6
* Output: N = 10001001100
*
* Solution:
*
* This problem can be approached in three key steps:
*
* 1. Clear the bits j though i in n.
* 2. Shift m so that it lines up with bits j though i.
* 3. Merge m and n.
*
* The trickiest part is step 1. That is, clearning the bits in n.
*
* We can do this with a mask. This mask will have all 1s, except for 0s in the bits
* j through i. We create this mask by creating the left half of the mask first, and
* then the right half.
*
* For example, if i = 2, j = 4. Then our mask should be 11100011.
*/

/**
* Insertion
*
* Time:
*
* @param {number} n 32-bit number
* @param {number} m 32-bit number
* @param {number} i bit position
* @param {number} j bit position
* @return {number} Returns a 32-bit number
*/

function insertion(n, m, i, j) {

}

export default insertion;
