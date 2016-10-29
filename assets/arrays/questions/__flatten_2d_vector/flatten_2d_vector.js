
/**
* Flatten 2D Vector
*
* Types: Classic Problem
*
* Implement an iterator to flatten a 2d vector.
*
* Example:
* Input: [[1, 2], [3], [4, 5, 6]];
* Output: [1, 2, 3, 4, 5, 6];
*/

/**
* threeSum()
*
* Solution:
*
* So since our focus is with Javascript and not a low-level language, there are a
* few very easy approaches we take to implement this.
*
* 1. Using concat() and apply()
*
* const flattened = [].concat.apply([], vector);
* // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*
* 2. Using reduce()
*
* const flattened = vector.reduce((prev, curr) => {
*   return prev.concat(curr);
* });
* // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*
* 3. Using ES6 spread operator
*
* const flattened = [].concat(...vector);
* // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*
*
* Time: O(n^2)
* Space: O(1)
*
* @param {array} vector array of arrays, 2D vector
* @return {array} returns a flattened array of the vector
*/

function flatten2DVector(vector) {
  const flattened = [];

  for (let i = 0; i < vector.length; i += 1) {
    for (let j = 0; j < vector[i].length; j += 1) {
      flattened.push(vector[i][j]);
    }
  }
}

export default flatten2DVector;
