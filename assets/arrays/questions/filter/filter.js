
/**
* Filter
*
* The filter() method creates a new array with all elements that pass the test
* implemented by the provided function.
*
* const newArray = arr.filter(callback[, thisArg])
*
* filter() calls a provided callback function once for each element in an array,
* and constructs a new array of all the values for which callback returns a value
* that coerces to true. callback is invoked only for indexes of the array which
* have assigned values; it is not invoked for indexes which have been deleted or
* which have never been assigned values. Array elements which do not pass the callback
* test are simply skipped, and are not included in the new array.
*
* callback is invoked with three arguments:
*
* 1. the value of the element
* 2. the index of the element
* 3. the Array object being traversed
*
* filter() does not mutate the array on which it is called.
*
* @param {array} arr to pass callback over
* @return {array} returns a new array modified with callback
*/

function map(arr, fn) {
  const results = [];
  arr.forEach((n) => {
    if (fn(n)) {
      results.push(n);
    }
  });

  return results;
}

export default map;
