
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

// Practical closures
// Closures have obvious parallels to object oriented programming,
// where objects allow us to associate some data (the object's properties) with one or more methods.

// Consequently, you can use a closure anywhere that you might
// normally use an object with only a single method.

// Closures are used in the module pattern to emulate privacy
// Factory functions and mixins from other libraries are a variation of the module pattern.
// Now we use ES6 modules to acheive this.

// https://coryrylan.com/blog/javascript-module-pattern-basics

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


