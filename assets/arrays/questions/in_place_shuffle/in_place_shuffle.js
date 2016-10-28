
/**
* In-Place Shuffle
*
* Types: Fisher-Yates, Knuth Shuffle
*
* Write a function for doing an in-place shuffle of an array.
* The shuffle must be 'uniform', meaning each item in the original array must
* have the same probability of ending up in each spot in the final array.
*
* Assume that you have a function getRandom(floor, ceiling) for getting a
* random integer that is >= floor and <= ceiling.
*/

/**
* inPlaceShuffle()
*
* Solution:
*
* A common first idea is to walk through the array and swap each element with a
* random other element. However, this does not give a uniform random distribution.
*
* Suppose our array had 3 elements: [a, b, c]. This means it'll make 3 calls to getRandom(0, 2).
* That's 3 random choices, each with 3 possibilities. So our total number of possible
* sets of choices is 3 * 3 * 3 = 27. Each of these 27 sets of choices is equally
* probable.
*
* But we actually have 3! possible outcomes, which is 6. As follows:
*
* a, b, c
* a, c, b
* b, a, c
* b, c, a
* c, b, a
* c, a, b
*
* But our function has 27 equally-probable sets of choices. 27 is not evenly divisible
* by 6. So some of our 6 possible outcomes will be achievable with more sets of
* choices than other. This is not immediately obvious.
*
* The trick is, we choose a random item to be the first item in the resulting array,
* then choose another random item (from the items remaining) to be the second item
* in the resulting array, etc.
*
* Crucially, once an item is placed at an index it can't be moved. So for the first
* index we choose from n items, for the second index we choose from n-1 items, etc.
*
* Choosing from 'remaining' items, is the key difference between the naieve approach
* and the correct approach.
*
* If we didn't have the 'in-place' requirement, we could allocate a new array,
* then one-by one take a random item from the input array, remove it, put it in
* the first position in the new array, and keep going until the input array is
* empty (well, probably a copy of the input array—best not to destroy the input).
*
* So instead for our solution, we 'place' an item in an index by swapping it with
* the item currently at that index.
*
* Time: O(n)
* Space: O(1)
* Where n is the length of the arr
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

  // walk through from beginning to end
  for (let i = 0; i < arr.length; i += 1) {

    // choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const random = getRandom(i, arr.length - 1);

    // place our random choice in the spot by swapping
    const temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
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
