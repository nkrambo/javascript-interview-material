
const Deque = class {
  constructor() {
    this.items = [];
  }

  addFront(item) {
    this.items.push(item)
  }

  addRear(item) {
    this.items.unshift(item)
  }

  removeFront() {
    return this.items.pop()
  }

  removeRear() {
    return this.items.shift()
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items == []
  }
}

export default Deque;
