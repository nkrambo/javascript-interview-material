
/**
* Plus One
*
* Tags: Array, Math
* Leetcode: 66
*
* Given a non-negative integer represented as a non-empty array of digits, plus
* one to the integer.
*
* You may assume the integer does not contain any leading zeros, except the number
* 0 itself.
*
* The digits are stored such that the most significant digit is at the head of
* the list.
*
* For example,
*
* Given: [9]
* Return: [1, 0]
*
* Given: [1, 1]
* Return: [1, 2]
*/

/**
* plusOne()
*
* Solution:
*
* This is pretty stright forward. We treat it like any normal long addition,
* except we are simply adding 1.
*
* The rules of long addition say to start with the least significant number and
* add 1 to it, if it creates a carry, then we move left and add 1 to that column
* too, until there are no carries to resolve.
*
* To achieve this, we'll traverse the input from right (least significant) to
* left (most significant). If the current value is less than 9 we simply add 1
* and return, otherwise we zero out and carry the 1 and repeat.
*
* This will cover most use cases. It won't cover the cases where the most
* significant value is 9 and so are the right values, like [9] or [9, 9] or [9, 9, 9]
*
* We catch these cases separately when they fall through our for ... loop.
*
* Time: O(n)
* Space: O(1)
*
* @param {number[]} digits
* @return {number[]}
*/

function plusOne(digits) {
  // traverse right to left
  // return when most significant value is less than 9, like [8], [2, 2]
  // this will cover most cases
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    // we've resolved all carries, return digits
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    // otherwise must be greater than 9, we 0 out and carry the 1 left
    digits[i] = 0;
  }

  // fell through, most significant value must be a 9, like [9] or [9, 9] ... etc
  // we now have to return [1, 0] and [1, 0, 0], respectively
  const newNumber = new Array(digits.length).fill(0); // take input length, fill with 0s
  newNumber.unshift(1); // add 1

  return newNumber;
}

export default plusOne;
