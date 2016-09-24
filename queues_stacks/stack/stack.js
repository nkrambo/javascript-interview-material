
// We almost always can just use a normal JS array to implement this
// without writing a class like the following.

class Stack {

  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.list.push(value);
  }

  pop() {
    if (this.length === 0) return;

    // Pop the last item off the end of the list and return the value.
    this.length--;
    return this.list.pop();
  }

  peek() {
    return this.list[this.length - 1];
  }
}
