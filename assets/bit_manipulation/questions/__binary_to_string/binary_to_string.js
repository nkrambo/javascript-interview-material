
/**
* Binary to String
*
* Given a real number between 0 and 1 (e.g, 0.72) that is passed in as a double,
* return the binary representation as a string. If the number cannot be represented
* accurately in binary with at most 32 characters, return an error.
*/

/**
* Binary to string
*
* Solution:
*
* When otherwise ambiguous, we'll use the x (b2) and x (b10) to indicate whether
* x is in base 2 or base 10.
*
* Fisrt, let's start off by asking ourselves what a non-interger number looks like
* in binary. By analogy to a decimal number, the binary number 0.101 would look like:
*
* 0.101 (b2) = 1 * (1/2^1 + 0) * (1/2^2 + 1) * 1/2^3
*
* To print the decimal part, we can multiply by 2 and check if 2n is greater than
* or equal to 1. This is essentially 'shifting' the fractional sum. That is,
*
* real = 2 (b10) * n
*      = 2 (b10) * 0.101 (b2)
*      = 1 * (1/2^0 + 0) * (1/2^1 + 1) * 1/2^2
*      = 1.01 (b2)
*
* If r >= 1, then we know that n had a 1 right after the decimal point. By doing
* this continuously, we can check every digit.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num number between 0 and 1, in base 10, represented as a double
* @return {number} returns the binary representation of num up to 32 bits, else throws error
*/

function binaryToString(num) {
  let binary = '';
  let real;

  if (num <= 0 || num >= 1) {
    throw new Error('binaryToString: num is outside of range.');
  }

  while (num > 0) {

    // set 32 bit limit
    if (binary.length >= 32) {
      throw new Error('binaryToString: Bit limit exceeded.');
    }

    real = num * 2;
    if (real >= 1) {
      binary += '1';
      num = real - 1;
    } else {
      binary += '0';
      num = real
    }
  }

  return binary;
}

export default binaryToString;
