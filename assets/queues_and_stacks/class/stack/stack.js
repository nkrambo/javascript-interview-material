
/**
* Stacks
*
* The stack data structure is precisely what it sounds like: a stack of data. In
* certain types of problems, it can be favourable to store data in a stack rather
* than an array.
*
* A stack uses LIFO (last-in first out) ordering. That is, as in a stack of dinner
* plates, the most recent item added to the stack is the first item to be removed.
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
