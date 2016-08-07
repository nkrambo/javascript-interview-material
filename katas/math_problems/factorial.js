
// FACTORIAL

// The factorial of a number n is the product of all positive integers
// less than or equal to n. In other words, the factorial of 5 is 5 x 4 x 3 x 2 x 1.
// The mathematical notation for this is 5!

// lower bound = 1
// upper bound = (n)

// using recursion
const factorial = function(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// while loop
const factorial = function(n) {
  if (n <= 1) {
    return 1;
  }

  let result = 1;
  while (n > 1) {
    result *= n;
    n -= 1;
  }
  return result;
}
