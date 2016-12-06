
/**
* Descibe how you could use a single array to implement three stacks.
*
* Solution:
*
* We can write a class that holds 3 stacks in one array. This is done by interleaving
* the values from the 3 indices, so the first items are at 0, 1 and 2 and subsequent
* items are every 3 places from those.
*
* This means that we need to calculate our index on our push, pop and peek methods.
*
* On push(), our index will always be:
*
* length * 3 + (stack - 1)
*
* This makes sense when you think about it. We're always increasing our index by
* 3 and then we have to add where our stack is, which is a zero based array, hence
* (stack - 1).
*
* You can see this in practice below... We insert at index 0, for every 3 index
* blocks.
*
* const tripleStack = new ThreeInOne();
*
* tripleStack.push(1, 1);
* tripleStack.push(1, 2);
* tripleStack.push(1, 3);
* tripleStack.push(1, 4);
*
* tripleStack {
*   array: [1, undefined, undefined, 2, undefined, undefined, 3, undefined, undefined, 4],
*   lengths: [4, 0, 0]
* }
*
* This class takes advantage of the fact that JavaScript arrays are dynamic and
* so our stacks can grow to any size. It doesn't reduce the size of the underlying
* array when items are popped but that could easily be added.
*
* On pop() and peek(), calculating our index will be a little different. We want
* to grab the 'top' frame, so we need to calculate our last insert, we can do that
* like so:
*
* (length - 1) * 3 + (stack - 1)
*
* The only difference being that we subtract '1' from length to get the last 'block'
* of 3 indices. Then we add our 'stack' index.
*
* All methods run in constant time.
*/

class ThreeInOne {

  /**
  * All stacks use a single array to store values.
  * We track lengths of stacks in separate array.
  *
  * @constructor
  */

  constructor() {
    this.array = [];
    this.lengths = [0, 0, 0];
  }

  /**
  * push()
  *
  * @param {number} stack to push frame to
  * @param {*} value to push
  * @return {void}
  */

  push(stack, value) {
    // calculate index and push value
    const index = this.getLength(stack) * 3 + stack - 1;
    this.array[index] = value;

    // increment length
    this.lengths[stack - 1] += 1;
  }

  /**
  * getLength()
  *
  * @param {number} stack which stack length
  * @return {number} the length of stack
  */

  getLength(stack) {
    return this.lengths[stack - 1];
  }

  /**
  * pop()
  *
  * @param {number} stack to pop frame from
  * @return {*} returns the top value from stack and removes frame
  */

  pop(stack) {
    const length = this.getLength(stack);

    if (length === 0) return null;

    // grab index and value
    const index = (length - 1) * 3 + stack - 1;
    const value = this.array[index]; // cache

    // 'delete' value and decrement length
    this.array[index] = undefined;
    this.lengths[stack - 1] -= 1;

    return value;
  }

  /**
  * peek()
  *
  * @param {number} stack to peek value from
  * @return {*} returns the top value from stack without removing frame
  */

  peek(stack) {
    const length = this.getLength(stack);

    if (length === 0) return null;

    // grab index and value
    const index = (length - 1) * 3 + stack - 1;

    return this.array[index];
  }

  /**
  * isEmpty()
  *
  * @param {number} stack to check is empty
  * @return {boolean} returns true if stack is empty, otherwise false
  */

  isEmpty(stack) {
    return this.getLength(stack) === 0;
  }
}

export default ThreeInOne;
