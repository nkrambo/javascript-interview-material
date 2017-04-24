
/**
* Count Instances
*
* Using the Array.reduce() method we can return an object with the count of all
* instaces in an array.
*
* @param {array} arr
* @return {number} returns a new array modified with callback
*/

function countInstances(arr) {
  return arr.reduce((acc, val) => {
    if (val in acc) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }

    return acc;
  }, {});
}

export default countInstances;
