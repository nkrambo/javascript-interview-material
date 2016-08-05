
 // One of JavaScript's best features is the ability to create and inherit
 // from objects without classes and class inheritance.

// There are 3 types of prototype inheritance

// 1. Delegation / Differential Inheritance

// Method delegation can preserve memory resources because you only need one copy
// of each method to be shared by all instances.

// ES6 - Using a class to delegate the hello method
class Greeter {
  constructor (name) {
    this.name = name || 'John Doe';
  }
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
}

// ES5 - Using a constructor function to delegate the hello method
function Greeter (name) {
  this.name = name || 'John Doe';
}

Greeter.prototype.hello = function hello () {
  return 'Hello, my name is ' + this.name;
}

// Concatenative Inheritance / Mixins



 // https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9#.v6ofv1u3l