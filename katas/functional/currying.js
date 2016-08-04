
// Currying is the process of translating a function that takes
// multiple arguments into a series of functions that each take one argument.

const multiply = function ( x, y ) {
  return x * y;
};

const curry = function ( fn ) {
  return function ( x ) {
    return function ( y ) {
      return fn( x, y );
    };
  };
};

const curriedMultiply = curry( multiply );

const double = curriedMultiply( 2 );
const triple = curriedMultiply( 3 );
const quadruple = curriedMultiply( 4 );

console.log(triple( 6 )); // 18

// Currying and partial application are conceptually similar (and you’ll probably never need both),
// but still distinct. The main difference is that currying will always produce a nested chain of
// functions that each accept only one argument, whereas partial application can return functions
// that accept more than one argument. This distinction is clearer when you compare their effects on
// functions that accept at least three arguments:

const multiply = function ( x, y, z ) {
	return x * y * z;
};

const curry = function ( fn ) {
  return function ( x ) {
    return function ( y ) {
      return function ( z ) {
        return fn( x, y, z );
      };
    };
  };
};

const partApply = function ( fn, x ) {
  return function ( y, z ) {
    return fn( x, y, z );
  };
};

const curriedMultiply = curry( multiply );
const partiallyAppliedMultiply = partApply( multiply, 10 );

console.log(curriedMultiply( 10 )( 5 )( 2 )); // 100
console.log(partiallyAppliedMultiply( 5, 2 )); // 100

