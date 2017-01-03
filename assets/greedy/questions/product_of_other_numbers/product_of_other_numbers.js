
/**
* Product of Other Numbers
*
* Tags: Greedy
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
* A brute force approach would use two loops to multiply the integer at every
* index by the integer at every nestedIndex, unless index === nestedIndex.
*
* This would give us a runtime of O(n^2).
*
* Well, we're wasting a lot of time doing the same calculations.
* As an example, let's take:
*
*  // input array
* [1, 2, 6, 5, 9]
*
* // array of the products of all integers
* // except the integer at each index:
*
* [540, 270, 90, 108, 60] // [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5]
*
* We're doing some of the same multiplications two or three times!
*
* One example, we're doing 5*9 in the first 3 calculations.
*
* We're redoing multiplications when instead we could be storing the results!
* This would be a great time to use a greedy approach.
*
* We could store the results of each multiplication, then just multiply by one
* new integer each time.
*
* The product of all the integers except the integer at each index can be broken
* down into:
*
* 1. The product of all the integers before each index
* 2. The product of all the integers after each index.
*
* To achieve this, we will walk through our input array greedily twice!
*
* First we get the products of all the integers before each index, and then we
* go backwards to get the products of all the integers after each index.
*
* That's right. Forwards then backwards, saving into one results array.
*
* When we multiply all the products before and after each index, we get our
* answer — the products of all the integers except the integer at each index!
*
* Time: O(n)
* Space: O(n)
*
* We make two passes through our input an array, and the array we build always
* has the same length as the input array.
*
* @param {array} arr array of integers
* @return {array} returns array of the products of all other numbers except index
*/

function productOfOthers(arr) {

  // edge case
  if (arr.length < 3) {
    throw new Error('productOfOthers: Minimum array length of 3 required');
  }

  const result = [];

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let soFar = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = soFar;
    soFar *= arr[i];
  }

  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  soFar = 1;
  for (let j = arr.length - 1; j >= 0; j -= 1) {
    result[j] *= soFar;
    soFar *= arr[j];
  }

  return result;
}

export default productOfOthers;
