
/**
* Constructor
*
* In classical object-oriented programming languages, a constructor is a special
* method used to initialize a newly created object once memory has been allocated
* for it. In JavaScript, as almost everything is an object, we're most often
* interested in object constructors.
*
* Object constructors are used to create specific types of objects - both preparing
* the object for use and accepting arguments which a constructor can use to set
* the values of member properties and methods when the object is first created.
*/

/**
* Object Creation
*
* There are 3 common ways to create new objects in JavaScript.
*
* Each of the following options will create a new empty object. Where the "Object"
* constructor in the final example creates an object wrapper for a specific value,
* or where no value is passed, it will create an empty object and return it.
*/

// object literal
const newObject = {};

// Object.create() method
const newObject = Object.create( Object.prototype );

// object constructor
const newObject = new Object();

/**
* Keys and Values
*
* There are then 4 ways in which keys and values can then be assigned to an object.
*
* 1. Dot syntax
* 2. Square bracket syntax
* 3. Object.defineProperty
* 4. Object.defineProperties
*/

// 1. Dot syntax

// set
newObject.someKey = 'Hello World';

// get
let value = newObject.someKey;

// 2. Square bracket syntax

// set
newObject['someKey'] = 'Hello World';

// get
let value = newObject['someKey'];

// 3. Object.defineProperty

// set
Object.defineProperty(newObject, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

// if the above feels a little difficult to read, a short-hand could
// be written as follows:
const defineProp = function (obj, key, value) {
  const config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };

  Object.defineProperty(obj, key, config);
};

// to use, we then create a new empty "person" object
const person = Object.create(Object.prototype);

// populate the object with properties
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

console.log(person);
// outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

// 4. Object.defineProperties

// set
Object.defineProperties(newObject, {
  'someKey': {
    value: 'Hello World',
    writable: true
  },

  'anotherKey': {
    value: 'Foo bar',
    writable: false
  }
});

/**
* Basic Constructors
*
* This is a simple version of the constructor pattern but it does suffer from some
* problems. One is that it makes inheritance difficult and the other is thatfunctions
* such as 'toString()' are redefined for each of the new objects created using the
* Car constructor. This isn't very optimal as the function should ideally be shared
* between all of the instances of the Car type.
*
* That is where prototypes are usuful.
*/

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles';
  };
}

// We can create new instances of the car
const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('Ford Mondeo', 2010, 5000);

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log(civic.toString());
console.log(mondeo.toString());

/**
* Constructors with Prototypes
*
* Functions, like almost all objects in JavaScript, contain a "prototype" object.
* When we call a JavaScript constructor to create an object, all the properties
* of the constructor's prototype are then made available to the new object. In
* this fashion, multiple Car objects can be created which access the same prototype.
*
* We can extend the original example so that a single instance of toString() will
* now be shared between all of the Car objects.
*/

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function() {
  return this.model + ' has done ' + this.miles + ' miles';
};

const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());

/**
* ES6 Classes
*
* JavaScript classes introduced in ECMAScript 6 are syntactical sugar over JavaScript's
* existing prototype-based inheritance. The class syntax is not introducing a new
* object-oriented inheritance model to JavaScript. JavaScript classes provide a
* much simpler and clearer syntax to create objects and deal with inheritance.
*/


// export default constructor;
