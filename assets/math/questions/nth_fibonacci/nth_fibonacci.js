
/**
* Nth Fibonacci
*
* Types: Maths, Fibonacci, Recursive, Bottom Up
*
* Write a function fib() that a takes an integer nn and returns the nth
* fibonacci number.
*
* Let's say our fibonacci series is 0-indexed and starts with 0. So:
*
* fib(0); // => 0
* fib(1); // => 1
* fib(2); // => 1
* fib(3); // => 2
* fib(4); // => 3
* ...
*/

/**
* fib()
*
* Solution:
*
* The nth fibonacci number is defined in terms of the two previous fibonacci
* numbers, so this seems to lend itself to recursion.
*
* As with any recursive function, we just need a base case and a recursive case:
*
* Base case: n is 0 or 1. Return n.
* Recursive case: Return fib(n - 1) + fib(n - 2).
*
* See fibRecursive() below.
*
* This is a very terse approach, but the runtime is particulary bad, exponential
* in fact. Exponential costs are terrible. Way worse than O(n^2) or even O(n^100).
*
* Each call to fibRecursive() makes two more calls. Our recurrence tree above
* essentially gets twice as big each time we add 1 to n. So as n gets really big,
* our runtime quickly spirals out of control.
*
* In general, whenever you have a recursive solution to a problem, think about
* what's actually happening on the call stack. An iterative solution might be
* more efficient.
*
* A much better approach is to go bottom-up. We start with the 0th fibonacci number
* and iteratively computing subsequent numbers until we get to n.
*
* With this approach we get O(n) time complexity and constant space complexity.
*
* Time: O(n)
* Space: O(1)
*
* @param {number} n number of sequence
* @return {number} returns the fibonacci number at sequence[n]
*/

function fib(n) {
  // edge cases
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  // we'll be building the fibonacci series from the bottom up
  // so we'll need to track the previous 2 numbers at each step

  let prevPrev = 0; // 0th fibonacci
  let prev = 1; // 1st fibonacci
  let current; // Declare current

  for (let x = 1; x < n; x += 1) {
    // To get nth fibonacci ... do n - 1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

/**
* fibRecursive()
*
* Time: O(2^n), terrible
* Space: O(n)
*
* @param {number} n number of sequence
* @return {number} returns the fibonacci number at sequence[n]
*/

function fibRecursive(n) {
  // base cases
  if (n === 0 || n === 1) {
    return n;
  }

  // recurse
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

export { fib, fibRecursive };
