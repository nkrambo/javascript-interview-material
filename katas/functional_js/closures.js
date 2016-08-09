
//

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
