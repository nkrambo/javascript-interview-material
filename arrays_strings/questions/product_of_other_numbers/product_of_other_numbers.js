
// You have an array of integers, and for each index you want to find the
// product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array
// of integers and returns an array of the products.

// For example, given:
//   [1, 7, 3, 4]

// your function would return:
//   [84, 12, 28, 21]

// by calculating:
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

function getProductsOfAllIntsExceptAtIndex(array) {

  // type check
  if (!Array.isArray(array)) {
    throw new Error('getProductsOfAllIntsExceptAtIndex: Expects 1 argument of [array]');
  }

  if (array.length <= 1) {
    throw new Error('getProductsOfAllIntsExceptAtIndex: Array must be minimum length of 2');
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

