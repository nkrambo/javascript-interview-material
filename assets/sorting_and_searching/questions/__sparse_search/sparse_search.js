
/**
* Sparse Search
*
* Given a sorted array of strings that is interspersed with empty strings,
* write a method to find the location of a given string.
*
* Example:
* Input: ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball'
* Output: 4
*/

/**
* sparseSearch()
*
* Solution:
*
* If it weren't for the empty strings, we could simply use binary search. We would
* compare the target string with the midpoint, and go from there.
*
* With empty strings throughout the array, we can implement a simple modification
* of binary search. All we need to do is fix the comparison against 'mid', in case
* 'mid' is an empty string. We simply move 'mid' to the closest non-empty string.
*
* Time: O(n)
* Space: O(n)
*
* @param {array} words sorted array of strings, also containing empty strings
* @param {string} target string to find in words
* @return {integer} returns the index of string if in words
*/

function sparseSearch(words, target) {

  // we create index 'range' around possible positions of our target
  let left = 0;
  let right = words.length - 1;

  // while there are unchecked positions in our 'range', keep checking midpoint
  while (left <= right) {

    // calculate midpoint, favour left if we need to
    let mid = Math.floor((left + right) / 2);

    // If mid is empty, find closest non-empty string
    if (words[mid] === '') {
      // grab the next values on the 'left' and 'right' of the empty midpoint value
      let nextLeft = mid - 1;
      let nextRight = mid + 1;

      // keep traversing 'outward' from midpoint until we find a non-empty string
      while (true) {
        // if we couldn't find any non-empty strings then target must not exist
        if (nextLeft < left && nextRight > right) {
          return -1;

        // we found a non-empty string in right half
        } else if (nextRight <= right && !words[nextRight] !== '') {
          mid = nextRight;
          break;

        // we found a non-empty string in left half
        } else if (nextLeft >= left && !words[nextLeft] !== '') {
          mid = nextLeft;
          break;
        }

        // keep traversing outward
        nextRight += 1;
        nextLeft -= 1;

      } // end while

    } // end if empty string

    // we found our target
    if (words[mid] === target) return mid;

    // target is to the left, move right side of 'range' inward
    if (words[mid] > target) {
      right = mid - 1;

    // target is to the right, move left side of 'range' inward
    } else {
      left = mid + 1;
    }
  }

  // fell through, target doesn't exist
  return -1;
}

export default sparseSearch;
