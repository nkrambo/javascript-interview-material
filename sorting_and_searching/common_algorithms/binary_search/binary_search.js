
/**
* Binary Search
*
* Types: Common Algorithm, Search
*
* A binary search algorithm finds an item in a sorted array in O(log n) time.
*
* A brute force search would walk through the whole set, taking O(n) time in the
* worst case.
*
* Let's say we have a sorted array of numbers. To find a number with a binary search, we:
*
* 1. Start with the middle number: is it bigger or smaller than our target number?
*    Since the array is sorted, this tells us if the target would be in the left
*    half or the right half of our array.
*
* 2. We've effectively divided the problem in half. We can 'rule out' the whole
*    half of the array that we know doesn't contain the target number.
*
* 3. Repeat the same approach (of starting in the middle) on the new half-size
*    problem. Then do it again and again, until we either find the number or
*   'rule out' the whole set.
*
* Time: O(log n)
* Space: O(1)
*
* The only non-constant part of our time cost is the number of times our while
* loop runs. Each step of our while loop cuts the range (dictated by floor and ceiling)
* in half, until our range has just one element left.
*
* So how many times must we divide our original array size (n) in half until we
* get down to 1?
*
* n * 1/2 * 1/2 * 1/2 ... = 1
*
* How many 1/2's are there, we don't know but we'll call it (x).
*
* Now we solve for x:
*
*    n * (1/2)^x = 1
*
* >> n * (1^x/2^x) = 1
*
* >> n * (1/2^x) = 1
*
* >> n/2^x = 1
*
* >> n = 2^x
*
* Now to get the x out of the exponent we use logarithms.
*
* Recall that log(10)100 means, 'what power must we raise 10 to, to get 100'?
* The answer is 2.
*
* So in this case, if we take the log(2) of both sides...
*
* >> log(2)n = log(2)^2x
*
* The right hand side asks, 'what power must we raise 2 to, to get 2^x'?
* Well, that's just x!
*
* >> log(2)n​​ = x
*
* So there it is. The number of times we must divide n in half to get down to 1
* is log(2) n
*
* So our total time cost is O(log n).
*
* Careful: we can only use binary search if the input array is already sorted.
*
* @param {array} arr array of integers
* @param {number} value integer to find
* @returns {boolean} returns true if the value is present, otherwise false
*/

function binarySearch(arr, value) {

  // we create 'walls' around possible positions of our value, starting with the
  // last index (ceiling) and the -1 (floor), being to the left of 0th index.
  let floor = -1;
  let ceiling = arr.length;

  // if there isn't at least 1 index between floor and ceiling, we've run out of
  // guesses and the number must not be present.
  while (floor + 1 < ceiling) {

    // find the index ~halfway between the floor and ceiling we use integer division,
    // so we'll favour left if we need to
    const half = Math.floor((ceiling - floor) / 2);
    let currentIndex = floor + half;
    const current = arr[currentIndex];

    // we found our value
    if (current === value) return true;

    // value is to the left
    if (current > value) {
      ceiling = currentIndex;

    // value is to the right
    } else {
      floor = currentIndex;
    }
  }

  return false;
}

export default binarySearch;
