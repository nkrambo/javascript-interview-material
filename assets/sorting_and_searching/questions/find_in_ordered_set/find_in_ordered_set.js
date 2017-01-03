
/**
* Find in Ordered Set
*
* Suppose we had an array of n integers in sorted order. How quickly could we
* check if a given integer is in the array?
*/

/**
* findInOrderedSet()
*
* Solution:
*
* Because the set is ordered, we can simply use binary search to find our any
* element in O(log n)
*
* Time: O(log n)
* Space: O(1)
*
* Where n is the length of the string input.
*
* @param {number} target integer value we want to find in nums
* @param {array} nums sorted array of numbers
* @return {boolean} returns true if target is in nums, else returns false.
*/

function findInOrderedSet(target, nums) {

  // see if target appears in nums
  // we think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we /don't/ mean "the last index")
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // if there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (floorIndex + 1 < ceilingIndex) {

    // find the index ~halfway between the floor and ceiling
    // we use integer division, so we'll never get a "half index"
    let distance = ceilingIndex - floorIndex;
    let halfDistance = Math.floor(distance / 2);
    let guessIndex = floorIndex + halfDistance;

    let guessValue = nums[guessIndex];

    if (guessValue === target) return true;

    if (guessValue > target) {

      // target is to the left
      // so move ceiling to the left
      ceilingIndex = guessIndex;

    } else {

      // target is to the right
      // so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;
}

export default findInOrderedSet;
