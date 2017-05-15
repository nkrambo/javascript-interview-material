
/**
* URLify
*
* Write a method to replace all spaces in a string with '%20'. You may assume
* that the string has sufficient space at the end to hold the additional
* characters, and that you are given the 'true' length of the string.
*
* Example:
* Input: 'Mr John Smith', 13
* Output: 'Mr%20John%20Smith'
*
*/

/**
* URLify()
*
* Solution:
* This solution takes the more complicated approach, as this question doesn't lend
* itself to a more Javascript implementation. This is the sort of solution
* that an interviewer would expect to see with Java, for example.
*
* Time: O(n)
* Space: O(1)
* Where n is the length of str.
*
* @param {string} string The string to modify
* @param {number} length The 'true' length of the string
* @return {string} returns the modified string with '' replaced with %20's
*/

// function URLify(str) {
//
//   // type check
//   if (typeof string !== 'string') throw new TypeError('URLify: Expects single argument of [string] type.');
//
//   let spaceCount = 0;
//   let newLength;
//
//   for (let i = 0; i < length; i += 1) {
//
//   }
//
//   newLength = length + spaceCount * 2;
// }
//
// /**
// * URLifyString()
// *
// * Solution:
// * This is a simplified javascript solution, only accepting a string, which simply splits
// * the string at every occurence of a space and joins it back together, replacing with
// * the '%20'.
// *
// * Time: O(n)
// * Space: O(1)
// * Where n is the length of str.
// *
// * @param {string} string The string to modify
// * @return {string} returns the modified string with '' replaced with %20's
// */
//
// function URLifyString(str) {
//
//   // type check
//   if (typeof string !== 'string') throw new TypeError('URLify: Expects single argument of [string] type.');
//
//   // replace '' with %20
//   return string.split(' ').join('%20');
// }
//
// export { URLify, URLifyString };
