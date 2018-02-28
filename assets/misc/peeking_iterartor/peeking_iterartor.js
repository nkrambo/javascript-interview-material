
// Given an Iterator class interface with methods: next() and hasNext(), design
// and implement a PeekingIterator that support the peek() operation -- it essentially
// peek() at the element that will be returned by the next call to next().
//
// Here is an example. Assume that the iterator is initialized to the beginning of the list: [1, 2, 3].
//
// Call next() gets you 1, the first element in the list.
//
// Now you call peek() and it returns 2, the next element. Calling next() after that still return 2.
//
// You call next() the final time and it returns 3, the last element. Calling hasNext() after that should return false.
//
// Follow up: How would you extend your design to be generic and work with all types, not just integer?


class PeekingIterator implements Iterator {
  constructor(iterator) {
    this.iter = iterator;
    this.temp = null;
    if (this.iter.hasNext()) {
      this.temp = this.iter.next();
    }
  }

  peek() {
    return this.temp;
  }

  next() {
    let cache = this.temp;
    if (this.iter.hasNext()) {
      this.temp = this.iter.next();
    } else {
      this.temp = null;
    }
    return cache;
  }

  hasNext() {
    return this.temp;
  }
}
