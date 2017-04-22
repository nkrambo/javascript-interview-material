
/**
* Reduce
*
* The reduce() method applies a function against an accumulator and each element
* in the array (from left to right) to reduce it to a single value.
*
* arr.reduce(callback, [initialValue])
*
* reduce executes the callback function once for each element present in the array,
* excluding holes in the array, receiving four arguments:
*
* accumulator
* currentValue
* currentIndex
* array
*
* @param {array} arr callback
* @param {function} fn callback
* @param {array} start value
* @return {array} returns a new array modified with callback
*/

function reduce(arr, fn, start) {
  for (let i = 0; i < arr.length; i += 1) {
    start = fn(start, arr[i]);
  }

  return start;
}

export default reduce;
