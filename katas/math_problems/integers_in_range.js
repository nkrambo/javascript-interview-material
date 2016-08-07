// RANGE
// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const range = function(x, y) {
  let output = range(x, y - 1);
  output.push(y - 1);
  return output;
};