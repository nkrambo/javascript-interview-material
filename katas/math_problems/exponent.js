
// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

const pow = function(base, exp) {
  let count = 1,
      result;

  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  while(count <= exp) {
    result = base * base;
    count++;
  }

  return result;
};