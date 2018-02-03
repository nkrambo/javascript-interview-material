
/**
* Flatten a mixed value, k-dimensional array
*
* Given an array with any type of value, and any number of dimensions, write a
* function that flattens it.
*/

/**
* We can solve this one by combining the [].reduce and some recursion.
*
* The reduce method, operates on each value of an array and uses an accumulator
* value to return a 'single' value. That is, it reduces an array to a single value
* based on the callback functionality you provide.
*
* Our solution is actually quite simple.
*
* Our reduce method takes the (acc, curr) => {} callback and an initial value of
* an empty array, [].
*
* Then, at each value, if the current value is NOT another nested array, we simply
* concat it's value, otherwise, it must be a nested array and we recusively call
* the flatten function until we reach a value that is NOT an array.
*/

export default function flatten(arr) {
  return arr.reduce((acc, curr) => acc.concat(!Array.isArray(curr) ? curr : flatten(curr)), []);
}
