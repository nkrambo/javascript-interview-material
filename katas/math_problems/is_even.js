const isEven = function(n) {

  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  return isEven(n-2);
}

console.log(isEven(48));