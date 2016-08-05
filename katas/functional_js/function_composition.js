
// Functions can be combined to form new functions through function composition. Here is an example:

// The function addThenSquare is made by combining the functions add and square.
const add = function ( x, y ) {
  return x + y;
};

const square = function ( x ) {
  return x * x;
};

const addThenSquare = function ( x, y ) {
  return square(add( x, y ));
};




//
// // Instead of using constructor functions and prototypical inheritence
// // for class inheritence we use composition to create the objects we
// // want with decoupled function expressions, which accept state.
// // USE THIS PATTERN
//
// (function() {
//
//   "use strict"
//
//   const fullName = (state) => ({
//     fullName: () => state.firstName + " " + state.lastName
//   })
//
//   const age = (state) => ({
//     age: () => {
//       const today = new Date()
//       const dob = Date.parse(state.dob)
//       return Math.floor((today - dob) / 31536000000) // divide by 1000*60*60*24*365
//     }
//   })
//
//   // Person factory
//   const person = (firstName, lastName, gender, dob) => {
//
//     let state = {
//       firstName,
//       lastName,
//       gender,
//       dob
//     }
//
//     return Object.assign(
//       {},
//       fullName(state),
//       age(state)
//     )
//   }
//
//   const nick = person("Nick", "Krambousanos", "Male", "Jul 29, 1984")
//
//   console.log(nick.fullName())
//   console.log(nick.age())
//   console.log(nick.gender)
//
// }())
