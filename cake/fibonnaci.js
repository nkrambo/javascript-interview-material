
// Write a function fib() that a takes an integer (n)
// and returns the nth fibonacci number.

// Let's say our fibonacci series is 0-indexed and starts with 0. So:

// input: integer
// output: integer

fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3

function fib(n) {
  if (n === 0 || n === 1) {
      return n;
  }

  return fib(n-1) + fib(n-2);
}

// So our total runtime is O(2^n)O(2​n). That's an "exponential time cost," since the nn is in an exponent.
// Exponential costs are terrible. This is way worse than O(n^2)O(n​2​) or even O(n^{100})O(n​100​​).

// Our recurrence tree above essentially gets twice as big each time we add 1 to nn.
// So as nn gets really big, our runtime quickly spirals out of control.


// We can memoize ↴ !
//
// Let's wrap fib() in a class with an instance variable where we store the answer for any nn that we compute:

function Fibber() {
    this.memo = {};
}

Fibber.prototype.fib = function(n) {

    // edge case: negative index
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    }

    // base case: 0 or 1
    else if (n === 0 || n === 1) {
        return n;
    }

    // see if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
        return this.memo[n];
    }

    var result = this.fib(n-1) + this.fib(n-2);

    // memoize
    this.memo[n] = result;

    return result;
};

// Solution
// We use a bottom-up ↴ approach, starting with the 0th fibonacci
// number and iteratively computing subsequent numbers until we get to nn.

// O(n) time and O(1)O(1) space.

function fibIterative(n) {

  // edge cases:
  if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
      return n;
  }

  // we'll be building the fibonacci series from the bottom up
  // so we'll need to track the previous 2 numbers at each step
  var prevPrev = 0;
  var prev = 1;
  var current;

  // since we already initialized the first 2 numbers in
  // the series we take n - 2 steps ahead to reach n
  for (var x = 2; x <= n; x++) {
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
  }

  return current;
}
