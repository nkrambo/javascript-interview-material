
/*
 * Object creation
 * The constructor patter is best used when you have a lot of instanaces to create.
 * The three common ways to create new objects in JavaScript are as follows:
 */

// object literal
const newObject = {};

// Object.create method
const newObject = Object.create( Object.prototype );

// Object constructor
const newObject = new Object();


/*
 * Getting and setting properties
 * There are then four ways in which keys and values can then be assigned to an object:
 */

// 1. dot syntax
newObject.someKey = "Hello World"; // set
const value = newObject.someKey; // get

// 2. Square bracket syntax
newObject["someKey"] = "Hello World"; // set
const value = newObject["someKey"]; // get

// 3. Object.defineProperty (ES5)
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// If the above feels a little difficult to read, a short-hand could
// be written as follows:
const defineProp = function ( obj, key, value ) {
  const config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};

// To use, we then create a new empty "person" object
const person = Object.create( Object.prototype );

// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

// 4. Object.defineProperties (ES5)
Object.defineProperties( newObject, {

  "someKey": {
    value: "Hello World",
    writable: true
  },

  "anotherKey": {
    value: "Foo bar",
    writable: false
  }

});


/*
 * Constructor Pattern
 * Basic constructor function, handy for a single instance
 */

function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );



/*
 * Constructor Pattern
 * Using prototypes to avoid repeated methods on muliple instances
 */

function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );


/*
 * Constructor Pattern
 * Using ES6 classes
 * This is just syntax on top of the ES5 constructor function.
 */

class Car {
  constructor(opts) {
    this.model = opts.model;
    this.year = opts.year;
    this.miles = opts.miles;
  }

  // Prototype method
  toString() {
    return `${this.model} has driven ${this.miles} miles`;
  }
}

var civic = new Car({
  model: 'Honda',
  year: 2001,
  miles: 50000
});

// ES5 Example of constructor function
function Car() {
  this.model = opts.model;
  ...
  ...
}
Car.prototype.toString = function() {
  ...
}
