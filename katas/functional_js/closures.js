
// closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function birdCounter(noun) {
  const count = 0;

  return function() {
    count++;
    console.log(`${count} ${noun}`);
  }
}

const birdCounter = makeCounter();
const dogCounter = makeCounter();

// This generates new private scope (closures) everytime.
birdCounter(); // 1 birds
birdCounter(); // 2 birds
birdCounter(); // 3 birds

dogCounter(); // 1 dogs
dogCounter(); // 2 dogs
dogCounter(); // 3 dogs

// Common real world examples of closures are the module pattern
// for libraries such as jQuery, etc...

// For loops pollute global namespace with the 'var' keyword.
// 'let' will stop this as it's block scoping



function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


