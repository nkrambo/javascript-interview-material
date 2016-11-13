
/**
* Pairwise Swap
*
* Write a program to swap odd and even bits in an integer with as few
* instructions as possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit
* 3 are swapped, and so on).
*
* Example:
* Input: 21 (010101)
* Output: 42 (101010)
*
* Solution:
*
* Operating on individual pairs of bits would be difficult, and probably not that
* efficient either. Instead, we can approach this as operating on the odd bits
* first, and then the even bits.
*
* Can we take a number n and move the odd bits over by 1? Sure. We can mask all
* odd bits with 10101010 in binary (which is 0xAA), then shift them right by 1 to
* put them in the even spots.
*
* For the even bits, we do an equivalent operation. Finally, we merge these two
* values. This takes a total of 5 instructions.
*
* Notice, that a 32 bit integer with all even bits set as 1 and all odd bits as
* 0 is represented as 0xaaaaaaaa. For the oposite we use 0x55555555. That is,
*
* 0xaaaaaaaa = 1010 1010 1010 1010 1010 1010 1010 1010
* 0x55555555 = 0101 0101 0101 0101 0101 0101 0101 0101
*
* Time: O(1)
* Space: O (1)
*
* @param {number} num integer
* @return {number} Returns the swapped bit representation of num.
*/

function pairwiseSwap(num) {
  return (((num & 0xaaaaaaaa) >>> 1) | ((num & 0x55555555) << 1));
}

export default pairwiseSwap;
