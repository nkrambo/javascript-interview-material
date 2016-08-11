
// You have an array of integers, and for each index you want to
// find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an
// array of integers and returns an array of the products.

// For example, given:
[1, 7, 3, 4]

// your function would return:
[84, 12, 28, 21]

// by calculating:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

// input: array of n length
// output: array of same length

// A brute force approach would use two loops to multiply the integer
// at every index by the integer at every nestedIndex, unless index === nestedIndex.

const getProductsOfAllIntsExceptAtIndex = function(array) {

  // minimum of 3 indices
  if (array.length < 3) {
    new Error('Minimum of 3 indices required');
  }

  const results = [];

  for (let i = 0; i < array.length; i++) {

    let product = 0;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product = array[i] * array[j];
      }
    }
    results.push(product);
  }

  return results;
}