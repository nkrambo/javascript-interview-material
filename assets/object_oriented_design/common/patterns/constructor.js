
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
const objectLiteral = {};

// Object.create() method
const objectCreate = Object.create(Object.prototype);

// object constructor
const objectConstructor = new Object();

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
objectLiteral.someKey = 'Hello World';

// get
let value = objectLiteral.someKey;

// 2. Square bracket syntax

// set
objectCreate['someKey'] = 'Hello World';

// get
let someKey = objectCreate['someKey'];

// 3. Object.defineProperty

// set
Object.defineProperty(objectConstructor, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

// if the above feels a little difficult to read, a short-hand could
// be written as follows:
const defineProp = (obj, key, value) => {
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

// 4. Object.defineProperties

// set
Object.defineProperties(person, {
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
* That is where prototypes are useful, which we'll look at next.
*/

function BasicCar(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = () => {
    return `${this.model} has done ${this.miles} miles`;
  };
}

// use
const civic = new BasicCar('Honda Civic', 2009, 20000);
const mondeo = new BasicCar('Ford Mondeo', 2010, 5000);

BasicCar.toString();

/**
* Constructors with Prototypes
*
* Functions, like almost all objects in JavaScript, contain a "prototype" object.
* When we call a JavaScript constructor to create an object, all the properties
* of the constructor's prototype are then made available to the new object. In
* this fashion, multiple Car objects can be created which access the same prototype.
*
* We can extend the original example so that a single instance of toString() will
* now be shared between all of the BasicCar objects.
*/

function ProtoCar(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
ProtoCar.prototype.toString = function() {
  return `${this.model} has done ${this.miles} miles`;
};

// use
const model3 = new ProtoCar('Tesla Model 3', 2017, 0);
const modelY = new ProtoCar('Tesla Model Y', 2018, 0);

ProtoCar.toString();

/**
* ES6 Classes (syntactical sugar)
*
* JavaScript classes introduced in ECMAScript 6 are syntactical sugar over JavaScript's
* existing prototype-based inheritance. The class syntax is not introducing a new
* object-oriented inheritance model to JavaScript. JavaScript classes provide a
* much simpler and clearer syntax to create objects and deal with inheritance.
*
* Here are the basics...
*
* The body of a class is the part that is in curly brackets {}. This is where you
* define class members, such as methods or constructors.
*
* The bodies of class declarations and class expressions are executed in strict mode.
*
* The constructor method is a special method for creating and initializing an object
* created with a class. There can only be one special method with the name "constructor"
* in a class.
*
* Methods declared within the class body are attached to the prototype.
*
* The extends keyword is used in class declarations or class expressions to create
* a class as a child of another class.
*
* The super keyword is used to call functions on an object's parent.
*
* A few things to note:
*
* - Classes can only contain method definitions, not data properties all of the
*   object's properties must be defined in the constructor;
*
* - When defining methods, you use shorthand method definitions;
*
* - Unlike when creating objects, you do not separate method definitions in class
*   bodies with commas;
*/

// class declaration
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // prototype
  calcArea() {
    return this.height * this.width;
  }
}

export { BasicCar, ProtoCar };
