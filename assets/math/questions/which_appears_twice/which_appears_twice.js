
/**
* Which Appears Twice
*
* Types: Maths, Triangular Series
*
* I have an array where every number in the range 1...n appears once except for
* one number which appears twice.
*
* Write a function for finding the number that appears twice.
*
* Example:
* Input: [1, 2, 3, 4, 5, 5, 6, 7, 8]
* Output: 5
*
* We can do this with O(1) additional memory.
*/

/**
* appearsTwice()
*
* Solution:
*
* To avoid using up extra memory space, lets use some math!
*
* Because the numbers in 1...n are a triangular series, we can sum all numbers using
* the equation: ((n^2) + n) / 2
*
* Then, we sum all numbers in our input array, which should be the same as our other
* sum but with our repeat number added in twice. So the difference between these two
* sums is the repeated number!
*
* Time: O(n)
* Space: O(1)
*
* @param {array} arr array of unique numbers, except 1
* @return {number} returns the duplicate value in arr
*/

function appearsTwice(arr) {
  // sum all numbers 1...n, O(1) time.
  const n = arr[arr.length - 1];
  const sum = ((n ** 2) + n) / 2;

  // sum array, O(n) time.
  const arrSum = arr.reduce((x, y) => x + y, 0);

  // return the difference
  return Math.abs(arrSum - sum);
}

export default appearsTwice;
