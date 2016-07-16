
const Queue = class {
  constructor() {
    this.items = [];
  }

  // enqueue
  enqueue(item) {
    this.items.unshift(item);
  }

  // dequeue
  dequeue() {
    return this.items.pop();
  }

  // size
  size() {
    return this.items.length;
  }

  // is empty
  isEmpty() {
    return this.items == [];
  }
}

export default Queue;
