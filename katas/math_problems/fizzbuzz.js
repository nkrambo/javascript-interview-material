
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”. For numbers which
// are multiples of both three and five print “FizzBuzz”."


const fizzBuzz = function(n) {

  let i = 1;
  while (i <= n) {
    if(i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
    i++;
  }
}




const fizzBuzz = function(n) {
  for (var i = 1; i <= n; i++) {
    var f = i % 3 == 0,
        b = i % 5 == 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  }
}

fizzBuzz(15);