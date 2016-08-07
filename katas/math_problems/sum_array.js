// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

const sum = function(arr) {

  if (arr.length === 0) {
    return 0;
  }

  return arr.shift() + sum(arr);
};

let myArray = [8, 2];

console.log(sum(myArray));