const isPowerOfTwo = function(n) {

  // test input
  if (typeof n !== 'number') {
    throw new Error('Error: not a number');
  }

  return n && (n & (n - 1)) === 0;
};

// test cases
console.log(isPowerOfTwo(1)); // false

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(12)); // false