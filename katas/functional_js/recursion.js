
// A recursive function is a function that calls itself until it reaches a base condition.
// Recursive functions are highly declarative. They're also elegant and very satisfying to write!

// Here's an example of a function that recursively calculates the factorial of a number:

const factorial = function ( n ) {
  if ( n === 0 ) {
    return 1;
  }
  return n * factorial( n - 1 );
};

console.log(factorial( 10 )); // 3628800

// Using recursive functions in JavaScript requires some care.
// Every function call adds a new call frame to the call stack, and that call frame is popped off
// the call stack when the function returns. Recursive functions call themselves before they return,
// and so it's very easy for a recursive function to exceed the limits of the call stack and crash the program.
//
// However, this can be avoided with tail call optimisation.


const factorial = function(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x-1);
}

const factorial = function(x) {
  if (x <= 1) {
    return 1;
  }

  let result = 1;
  while (x > 1) {
    result *= x;
    x -= 1;
  }
  return result;
}