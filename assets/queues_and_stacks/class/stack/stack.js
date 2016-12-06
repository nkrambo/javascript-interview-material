
/**
* Stacks
*
* Stacks are similar to lists in that they have an order, but they limit you
* to only pushing and popping values at the end of the list, which as we saw
* before are very fast operations when mapping directly to memory.
*
* However, Stacks can also be implemented with other data structures in order
* to add functionality to them.
*
* The most common usage of stacks is places where you have one process adding
* items to the stack and another process removing them from the end–
* prioritizing items added most recently.
*
*
*                           Pop          Push         Peek
* -----------------------------------------------------------------------------
*                 Stack     O(1)         O(1)         O(1)
*
*
*                             _ . - - -- .. _
*         ||||            .-'      /```\     `'-_             /|
*         ||||           (     /`` \___/ ```\    )           | |
*         \__/           |`"-//..__     __..\\-"`|           | |
*          ||            |`"||...__`````__...||"`|           | |
*          ||            |`"||...__`````__...||"`|           \ |
*          ||       _,.--|`"||...__`````__...||"`|--.,_       ||
*          ||    .'`     |`"||...__`````__...||"`|     `'.    ||
*          ||   '.        `/ |...__`````__...| \         .'   ||
*          ||     `'-..__  ``      `````      ``  __..-'`     ||
*                        `""---,,,_______,,,---""`
*/

class Stack {

  /**
  * @constructor
  *
  * We use an array to store our frames. We're also going to track the length.
  */

  constructor() {
    this.items = [];
    this.length = 0;
  }

  /**
  * push()
  *
  * Simple method to push a frame onto our stack. We use the Array.push() method
  * and increment our length.
  *
  * @param {*} value the value to push
  * @return {void}
  */

  push(value) {
    this.length += 1;
    this.items.push(value);
  }

  /**
  * pop()
  *
  * Use the Array.pop() method to pop the top frame from our stack. We also decrement
  * our length by 1.
  *
  * @return {*} the top frame from our stack
  */

  pop() {
    if (this.length === 0) return;
    this.length -= 1;
    return this.items.pop();
  }

  /**
  * peek()
  *
  * Similar to pop(), except we do not remove the frame, we simply 'peek' at its
  * value
  *
  * @return {*} returns the top frame
  */

  peek() {
    return this.items[this.length - 1];
  }
}

export default Stack;
