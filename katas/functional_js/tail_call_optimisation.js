
// A tail call is a function call that is the last action of a function.
// Tail call optimisation is when the language compiler recognises tail calls and
// reuses the same call frame for them. This means that if you write recursive functions
// with tail calls, the limits of the call stack will never be exceeded by them as it will
// reuse the same frame over and over.

// Here is the recursive function from above rewritten to take advantage of tail call optimisation:

const factorial = function ( n, base ) {
  if ( n === 0 ) {
    return base;
  }
  base *= n;
  return factorial( n - 1, base );
};

console.log(factorial( 10, 1 )); // 3628800

// Support for proper tail calls is included in ES6
