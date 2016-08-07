
// In javascript there is only function scoping.
// Variable declarations in a function are moved to the top of the function at run-time. However, if there

function() {
  // some code
  // some code

  var myVariable = 0; // this will get hoisted to the top of the function.
}

// However, if you don't declare your variables correctly.
// You can declare global variables by accident.
function() {
  // some code
  // some code

  myVariable = 0; // this will get hoisted to global!!
}

// This is one of the reasons that we use 'use strict'. It will throw an error if your code
// globally hoists a variable.

// https://www.youtube.com/watch?v=sjyJBL5fkp8