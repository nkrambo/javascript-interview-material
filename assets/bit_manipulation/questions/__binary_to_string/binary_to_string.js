
/**
* Binary to String
*
* Given a real number between 0 and 1 (e.g, 0.72) that is passed in as a double,
* print the binary representation. If the number cannot be represented accurately
* in binary with at most 32 characters, print "ERROR".
*
*/

/**
* Binary to string
*
* Solution:
*
*
* Time:
*
* @param {number} num number between 0 and 1, in base 10, represented as a double
*/

function binaryToString(num) {
  if (num <= 0 || num >= 1) return 'ERROR';

  let binary = '';

  while (num > 0) {
    // set 32 bit limit
    if (binary.length > 32) return 'ERROR';

    let real = num * 2;
    if (real >= 1) {
      binary = `${binary}1`;
      num = real - 1;
    } else {
      binary = `${binary}0`;
      num = real
    }
  }

  return binary;
}

export default binaryToString;
