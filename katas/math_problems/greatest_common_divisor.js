// GREATEST COMMON DIVISOR
// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

// "Euclid's algorithm."
const gcd = function(x, y) {
  if (!y) {
      return x;
  }
  return gcd(y, x % y);
};
