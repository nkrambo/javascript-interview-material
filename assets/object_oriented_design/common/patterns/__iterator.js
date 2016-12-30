
/**
* Iterator
*
* The iterator pattern is used to traverse a container and access the container's
* elements. The iterator pattern decouples algorithms from containers.
*
* ES6 supports the iterator pattern with any object that provides a next() method,
* which returns an object with two specific properties: done and value.
* Here's an example that shows a reverse array iterator:
*/

function reverseArrayIterator(array) {
  let index = array.length - 1;

  return {
    next() {
      return index >= 0 ? {value: array[index--], done: false} : {done: true};
    }
  };
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


export { reverseArrayIterator, range };
