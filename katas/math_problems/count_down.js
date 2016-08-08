
const countDown = function(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  return countDown(n-1);
}

countDown(10);
