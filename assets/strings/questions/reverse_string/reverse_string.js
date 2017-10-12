
/**
* Reverse String
*
* Tags: Two Pointers, String
* Leetcode: 344
*
* Write a function that takes a string as input and returns the string reversed.
*
* Example:
*
* Given: 'hello'
* Return: 'olleh'
*/

/**
* reverseString()
*
* Solution:
*
* Since strings in JavaScript are immutable, first convert the string into an array
* of characters, do the in-place reversal on that array, and re-join that array
* into a string before returning it. This isn't technically 'in-place' and the
* array of characters will cost O(n) additional space, but it's a
* reasonable way to stay within the spirit of the challenge.
*
* So the more expected solution would be as follows.
*
* In general, an "in-place" algorithm will require swapping elements.
*
* We swap the first and last characters, then the second and second-to-last
* characters, and so on until we reach the middle.
*
* Time: O(n)
* Space: O(1)
*
* Where n is the length of the string input.
*
* @param {string} s string of (n) length
* @return {string} returns a reversed string
*/

function reverseString(s) {
  // edge case
  if (s.length <= 1) return s;

  // split and swap
  const arr = s.split('');
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // swap characters
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // move towards middle
    start += 1;
    end -= 1;
  }

  return arr.join('');
}

export default reverseString;
