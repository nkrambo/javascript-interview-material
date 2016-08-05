
/*
* Singleton
* Used to restrict an object to one instance of that object across the application.
* An example, is a Redux store
*/

// write a function called `partial` that makes
// the following snippet work
function add( a, b ) {
  return a + b;
}

const partial = function(fn, a) {
  return function(b) {
    return fn(a, b);
  }
}

var add5 = partial( add, 5 );
add5( 4 ); // 9


// make a class called `Square` that inherits from
// `Rectangle` and satisfies the following snippet
function Rectangle( width, height ) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Square(length) {
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype)

// your code here
var square = new Square( 4 );
square.area(); // 16
Square.prototype.area === Rectangle.prototype.area; // true



// write a function called `shout` that accepts
// a string and a callback function, and uses
// `exclaim` and `yell` to transform its input
function exclaim( value, fn ) {
  setTimeout(function() {
    fn( value + '!' );
  }, 100 );
}

function yell( value, fn ) {
  setTimeout(function() {
    fn( value.toUpperCase() );
  }, 100 );
}

function shout(value, fn) {
  return
}

shout( 'hello', function( shouted ) {
  console.log( shouted ); // ‘HELLO!’
});
