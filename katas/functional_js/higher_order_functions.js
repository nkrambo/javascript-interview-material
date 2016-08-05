
// In functional programming. Functions are values.

// We can use a function expression to assign a variable to an anonymous function and pass it around.
const triple = function(x) {
  return x * 3;
}

const waffle = triple;
waffle(30) // 90

// Functions that operate on other functions, either by taking them as arguments(callbacks) or
// by returning them, are called higher-order functions/ callbacks.

// Higher order functions are good for function composition.
// Functions can be combined to form new functions through function composition. Here is an example:

// The function addThenSquare is made by combining the functions add and square.
const add = function (x, y) {
  return x + y;
};

const square = function (x) {
  return x * x;
};

const addThenSquare = function (x, y) {
  return square(add(x, y));
};

// Good in-built examples of these are, for example, the filter,
// map, reduce methods on the array object.

// The filter method accepts a function as an argument (usually just named a callback) and
// applies that function to each iteration of the array and returns a filter version of that array.

// var new_array = arr.filter(callback[, thisArg])

const school = [
  { name: 'Nick', role: 'Student' },
  { name: 'Tim', role: 'Student' },
  { name: 'Jeff', role: 'Teacher' },
  { name: 'Sarah', role: 'Student' },
  { name: 'James', role: 'Teacher' },
  { name: 'Tiffany', role: 'Student' }
]

// using filter method, which expects a boolean return
// returns a new array of teachers
const teachers = school.filter(function(person) {
  return person.role === 'Teacher'; // returns true or false
});

// we could abstract this further like this:
const isTeacher = function(person) {
  return person.role === 'Teacher';
}

const teachers = school.filter(isTeacher)


// using map method, which transforms each iteration
// returns a new array of names
const names = school.filter(function(person) {
  return person.name;
});

// We could chain filter and map together to get the names of teachers, for example.
const teacherNames = school
   .filter(function(person) {
     return person.role === 'Teacher';
   })
   .map(function(person) {
     return person.name;
   })


// How to write array.filter from scratch, elequent JS














// For example, you can have functions that create new functions.
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

// You can have functions that change other functions.
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false

// https://www.youtube.com/watch?v=BMUiFMZr7vk
