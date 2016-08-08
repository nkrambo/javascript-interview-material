
// recursively
const isEven = function(n) {

  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  return isEven(n-2);
}

// while loop
const isEven = function(n) {

  while(n > 0) {
    n -= 2;
  }

  if (n === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(48));