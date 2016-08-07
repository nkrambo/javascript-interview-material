
// "Factors" are the numbers you multiply to get another number.
// For instance, factors of 15 are 3 and 5, because 3×5 = 15.
// Some numbers have more than one factorization (more than one way of being factored).
// For instance, 12 can be factored as 1×12, 2×6, or 3×4.

//  A number that can only be factored as 1 times itself is called "prime".
// You cannot find the factors of a negative integer

// We use modulos to determine factors of numbers as the remainder must be 0

// lower bound = 1
// upper bound = ?

// using for loop
const factors = function(n) {
  if (n <= 0) {
    return 1;
  }

  let factors = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  return factors.toString();
}

// using while
const factors = function(n) {
  if (n <= 0) {
    return 1;
  }

  let factors = [];
  let input = n;

  while(n > 0) {
    if (input % n === 0) {
      factors.push(n);
    }
    n -= 1;
  }

  return factors.toString();
}

console.log(factors(99));
