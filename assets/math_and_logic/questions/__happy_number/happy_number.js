
/**
* Happy Number
*
* Types: Hash Map, Math
*
* Write an algorithm to determine if a number is 'happy'.
*
* A happy number is a number defined by the following process: Starting with any
* positive integer, replace the number by the sum of the squares of its digits,
* and repeat the process until the number equals 1 (where it will stay), or it
* loops endlessly in a cycle which does not include 1. Those numbers for which
* this process ends in 1 are happy numbers.
*
* Example: 19 is a happy numner...
*
* 1^2 + 9^2 = 82
* 8^2 + 2^2 = 68
* 6^2 + 8^2 = 100
* 1^2 + 0^2 + 0^2 = 1
*
* Solution:
*
* We can approach this one with a hash map. 
*
* Time: O(1)
* Space: O(1)
*
* @param {integer} num positive integer
* @return {boolean} returns true if num is 'happy', otherwise false
*/

function isHappy(num) {
  let current = num;
  const hash = new Map();

  // type check
  if (typeof num !== 'number') {
    throw new TypeError('isHappy: Expects single argument of [number] type.');
  }

  while (!hash.has(current)) {
    // if we hit 1, num must be happy
    if(current === 1) return true;

    // otherwise, place current into map
    hash.set(current, true);

    // calculate sum of the squares of current its digits
    const x = current.toString();
    let total = 0;
    for (let i = 0; i < x.length; i += 1) {
      total += Math.pow(parseInt(x[i]), 2);
    }

    // update current
    current = total;
  }

  return false;
}

export default isHappy;
