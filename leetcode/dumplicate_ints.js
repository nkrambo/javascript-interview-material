
/**
 * Given an array of integers, find if the array contains any
 * duplicates. Your function should return true if any value
 * appears at least twice in the array, and it should return
 * false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function(nums) {

  // edge cases
  if (nums.length < 2) {
    return false;
  }

  const numbers = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numbers.has(nums[i])) {
      return true;
    } else {
      numbers.add(nums[i]);
    }
  }

  return false;

};

// test cases
console.log(containsDuplicate([1, 2, 3])); // false
console.log(containsDuplicate([1, 2, 3, 3])); // true
console.log(containsDuplicate([1])); // error
console.log(containsDuplicate([1, 2, 3, 4, 1])); // true