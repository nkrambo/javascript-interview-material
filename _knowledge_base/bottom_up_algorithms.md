
Going bottom-up is a way to avoid recursion, saving the memory cost that recursion incurs when it builds up the call stack.

Put simply, a bottom-up algorithm "starts from the beginning," while a recursive algorithm often "starts from the end and works backwards."

For example, if we wanted to multiply all the numbers in the range 1...n1...n, we could use this cute, top-down, recursive one-liner:

function product1ToN(n) {
  // we assume n >= 1
  return (n > 1) ? (n * product1ToN(n-1)) : 1;
}

This approach has a problem: it builds up a call stack of size O(n)O(n), which makes our total memory cost O(n)O(n). This makes it vulnerable to a stack overflow error, where the call stack gets too big and runs out of space.

To avoid this, we can instead go bottom-up:

function product1ToN(n) {
  // we assume n >= 1

  var result = 1;
  for (var num = 1; num <= n; num++) {
      result *= num;
  }

  return result;
}

Going bottom-up is a common strategy for dynamic programming problems, which are problems where the solution is composed of solutions to the same problem with smaller inputs (as with the fibonacci problem, above). The other common strategy for dynamic programming problems is memoization.
