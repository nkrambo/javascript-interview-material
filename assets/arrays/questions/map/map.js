
/**
* Map
*
* The map() method creates a new array with the results of calling a provided
* function on every element in this array.
*
* const newArray = arr.map(callback[, thisArg])
*
* This is a replication of the arr.map function.
*
* Objects that have a map method, like arrays in Javascript, are referred to as
* 'functors' in functional programming.
*
* @param {array} arr to pass callback over
* @return {array} returns a new array modified with callback
*/

function map(arr, fn) {
  const results = [];
  arr.forEach((n) => {
    results.push(fn(n));
  });

  return results;
}

export default map;
