
/**
* Flatten Array
*/

/**
* Two Dimensional Array
*
* Implement an iterator to flatten a 2d array.
*
* Example:
* Input: [[1, 2], [3], [4, 5, 6]];
* Output: [1, 2, 3, 4, 5, 6];
*
* There are multiple ways to solve this problem. Note, that the following functions
* will not work on multiple nested arrays, as in 3-Dimensional arrays.
*/

/**
* Using concat() and apply()
*/

function flatten1(arr) {
  return arr.concat.apply([], arr);
}

/**
* Nested `for` loops
*/

function flatten2(arr) {
  const flattened = [];

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      flattened.push(arr[i][j]);
    }
  }

  return flattened;
}

/**
* Reduce
*/

function flatten3(arr) {
  return arr.reduce((prev, curr) => prev.concat(curr), []);
}

/**
* Spread
*/

function flatten4(arr) {
  return [].concat(...arr);
}

/**
* Mixed Array
*
* Implement an iterator to flatten a mixed array. The array may contain any values,
* including nested arrays.
*
* Example:
* Input: [[1, 2], true, {name: 'Nick'}, [4, 5, 6], [7, [8, 9]]];
* Output: [1, 2, 3, 4, 5, 6];
*/

// ES6
function flattenMixed(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenMixed(val) : val), []);
}

export { flatten1, flatten2, flatten3, flatten4, flattenMixed };
