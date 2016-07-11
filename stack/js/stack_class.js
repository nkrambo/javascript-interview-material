
const Stack = class {
  constructor() {
    this.items = []
  }

  // size
  size() {
    return this.items.length
  }

  // push - O(1)
  push(item) {
    this.items.append(item)
  }

  // pop - O(1)
  pop() {
    return this.items.pop()
  }

  // is empty
  isEmpty() {
    return this.items == []
  }

  // peek
  peek() {
    return this.items[this.items.length - 1]
  }
}

// const myStack = Stack();
// myStack.isEmpty();

export default Stack;
