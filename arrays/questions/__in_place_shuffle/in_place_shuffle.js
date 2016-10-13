
/**
* In-Place Shuffle
*
* Write a function for doing an in-place shuffle of an array.
* The shuffle must be 'uniform', meaning each item in the original array must
* have the same probability of ending up in each spot in the final array.
*
* Assume that you have a function getRandom(floor, ceiling) for getting a
* random integer that is >= floor and <= ceiling.
*
*/

/**
* inPlaceShuffle()
*
* Solution:
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {array} arr array of integers
* @return {void} modifies arr in-place, uniform shuffle
*/

function inPlaceShuffle(arr) {

  // type check
  if (!Array.isArray(arr)) {
    throw new TypeError('inPlaceShuffle: Expects single argument of [array] type.');
  }

  // if 1 or 0 items, just return
  if (arr.length <= 1) return;


}

/**
* getRandom()
*
* @param {number} floor lower bound
* @param {number} ceiling upper bound
* @return {number} returns a random number >= floor and <= ceiling
*/

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

export default inPlaceShuffle;
