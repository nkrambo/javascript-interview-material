
/**
* Iterator Protocols
*
* A couple of additions to ES6 aren't new built-ins or syntax, but protocols.
* These protocols can be implemented by any object respecting some conventions.
*
* There are two protocols: The 'iterable' protocol and the 'iterator' protocol.
*
* The iterable protocol
*
* The iterable protocol allows JavaScript objects to define or customize their
* iteration behavior, such as what values are looped over in a for..of construct.
* Some built-in types are built-in iterables with a default iteration behavior,
* such as Array, Map or Set, while other types (such as Object) are not.
*
* In order to be iterable, an object must implement the @@iterator method, meaning
* that the object (or one of the objects up its prototype chain) must have a property
* with a @@iterator key which is available via constant Symbol.iterator.
*
* Whenever an object needs to be iterated (such as at the beginning of a for..of loop),
* its @@iterator method is called with no arguments, and the returned iterator is
* used to obtain the values to be iterated.
*/



/**
* The Iterator Protocol
*
* Iterators, by themselves, are not that interesting: they are plumbing that supports
* more interesting behavior. The iterator protocol enables any object to be iterable.
*/

const someString = 'hi';

// String's default iterator returns the string's characters one by one
const it = someString[Symbol.iterator]();
it.next();                             // { value: 'h', done: false }
it.next();                             // { value: 'i', done: false }
it.next();                             // { value: undefined, done: true }

/**
* Syntaxes expecting iterables
*
* Some statements and expressions are expecting iterables, for example the for-of
* loops, spread operator, yield*, and destructuring assignment.
*/

// for-of (ES6)
for (let value of ['a', 'b', 'c']) {
  // console.log(value);
}

// spread operator (ES6)
const myArray = [...'abc', 'd', 'e'];                              // ['a', 'b', 'c', 'd', 'e']

function myFunction(x, y, z) {

}

const args = [0, 1, 2];
myFunction(...args);

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1.push(...arr2);     // [0, 1, 2, 3, 4, 5]

// // generators
// function* gen() {
//   yield* ['a', 'b', 'c'];
// }
//
// gen().next(); // { value: 'a', done: false }

/**
* ES6 Iterators and Generators
*
* ES6 introduces two very important new concepts: iterators and generators. Generators
* depend on iterators, so we'll start with iterators.
*
* While iterators don't provide anything that wasn't possible prior to ES6, they
* do standardize an important and common activity.
*/

class Log {
  constructor() {
    this.messages = [];
  }

  add(message) {
    this.messages.push({ message, timestamp: Date.now() });
  }

  [Symbol.iterator]() {
    return this.messages;
  }
}






function range(start, end) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if(start < end) {
        return { value: start += 1, done: false };
      }

      return { done: true, value: end };
    }
  }
}


export { range };
