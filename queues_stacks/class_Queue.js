
// We almost always can just use a normal JS array to implement this
// without writing a class like the following.

class Queue {

  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value) {
    this.length++;
    this.list.push(value);
  }

  dequeue() {

    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Shift the first item off the start of the list and return the value.
    this.length--;
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }
}
