
/**
* Descibe how you could use a single array to implement three stacks.
*
* Solution:
*
* We can write a class that holds 3 stacks in one array. This is done by interleaving
* the values from the 3 indexes, so the first items are at 0, 1 and 2 and
* subsequent items are every 3 places from those.
*
* This class takes advantage of the fact that JavaScript arrays are dynamic and
* doesn't hold the stacks to any size. It doesn't reduce the size of the underlying
* array when items are popped but that could easily be added.
*/

class ThreeInOne {
  /**
  * All stacks use a single array
  We track lengths of stacks in an array.
  *
  *
  * @constructor
  */

  constructor() {
    this.array = [];
    this.lengths = [0, 0, 0];
  }

  /**
  * getLength()
  *
  * text
  *
  * @param {number} stack which stack length
  * @return {number} the length of stack
  */

  getLength(stack) {
    return this.lengths[stack - 1];
  }

  /**
  * push()
  *
  * text
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
  * pop()
  *
  * text
  *
  * @param {number} stack to pop frame from
  * @return {*} returns the top value from stack and removes frame
  */

  pop(stack) {
    const length = this.getLength(stack);

    if (length > 0) {
      const index = (length - 1) * 3 + stack - 1;
      const value = this.array[index];

      this.array[index] = undefined;
      this.lengths[stack - 1] -= 1;
    }

    return value;
  }

  /**
  * peek()
  *
  * text
  *
  * @param {number} stack to peek value from
  * @return {*} returns the top value from stack without removing frame
  */

  peek(stack) {
    const length = this.getLength(stack);

    if (length > 0) {
      const index = (length - 1) * 3 + stack - 1;
      const value = this.array[index];
    }

    return value;
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
