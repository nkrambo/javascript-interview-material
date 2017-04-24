
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
* @param {array} arr of values
* @param {function} fn callback
* @param {array} start value
* @return {array} returns a new array modified with callback
*/

function reduce(arr, fn, start) {
  arr.forEach((n) => {
    start = fn(start, n);
  });

  return start;
}

export default reduce;
