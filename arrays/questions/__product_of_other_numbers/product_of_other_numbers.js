
/**
* Product of Other Numbers
*
* You have an array of integers, and for each index you want to find the
* product of every integer except the integer at that index.
*
* Write a function that takes an array
* of integers and returns an array of the products.
*
* For example, given:
* [1, 7, 3, 4]
*
* Your function would return:
* [84, 12, 28, 21]
*
* By calculating:
* [7*3*4, 1*3*4, 1*7*4, 1*7*3]
*
* Do not use division in your solution.
*/

/**
* productOfOthers()
*
* Solution:
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {array} arr array of integers
* @return {array} returns array of the products of all other numbers except index
*/

function productOfOthers(array) {

  // type check
  if (!Array.isArray(array)) {
    throw new Error('productOfOthers: Expects 1 argument of [array]');
  }

  if (array.length <= 1) {
    throw new Error('productOfOthers: Array must be minimum length of 2');
  }

  const results = [];

  for (let i = 0; i < array.length; i++) {

    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    results.push(product);
  }

  return results;
}

export default productOfOthers;
