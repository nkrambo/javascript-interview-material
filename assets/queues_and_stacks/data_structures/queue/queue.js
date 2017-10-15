
/**
* Queues
*
* A queue implements FIFO (first-in first-out) ordering. As in a line or a queue
* at a ticket stand, items are removed from the data structure in the same order
* that they were added.
*
* A queue can also be implemented with a linked list. In fact, they are essentially
* the same thing, as long as items can are added and removed from opposite sides.
* As in a doubly-linked list only.
*
* Usually in Javascript we don't need to create an abstract queue data structure
* and can instead use a simple array object.
*
* We can achieve the FIFO properties with the .push() and .shift() methods. Or,
* enqueue and dequeue, respectively.
*
*      shift(0) ← [1, 2, 3] ← push(4)
*
* Key Operations:
*
* enqueue:  O(1)
* dequeue:  O(n)
* peek:     O(1)
*/

class Queue {
  /**
  * @constructor
  *
  * Our queue is using a JavaScript array as a list rather than memory.
  */

  constructor() {
    this.items = [];
    this.length = 0;
  }

  /**
  * enqueue()
  *
  * This will push values to the end of the queue.
  *
  * @param {*} value the value to enqueue
  * @return {void}
  */

  enqueue(value) {
    this.length += 1;
    this.items.push(value);
  }

  /**
  * dequeue()
  *
  * @return {*} returns the first item in the queue and removes that item
  */

  dequeue() {
    if (this.length === 0) return null;

    this.length -= 1;
    return this.items.shift();
  }

  /**
  * peek()
  *
  * @return {*} returns the value of the first item in the queue but does not remove item
  */

  peek() {
    return this.items[0];
  }
}

export default Queue;
