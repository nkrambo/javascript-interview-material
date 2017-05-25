
/**
* Linked List
*
* Linked lists are a very common data structure that is often used to
* implement other data structures because of its ability to efficiently add
* items to the start, middle, and end.
*
* The basic idea of a linked list is similar to a graph. You have nodes that
* point to other nodes. They look sorta like this:
*
*     1 -> 2 -> 3 -> 4 -> 5
*
* Visualizing them as a JSON-like structure looks like this:
*
*     {
*       value: 1,
*       next: {
*         value: 2,
*         next: {
*           value: 3,
*           next: {...}
*         }
*       }
*     }
*
* Key Operations:
*
* get:    O(n)
* add:    O(1)
* remove: O(1)
*/

class LinkedList {

  /**
  * @constructor
  *
  * Unlike a graph, a linked list has a single node that starts off the entire
  * chain. This is known as the "head" of the linked list.
  *
  * We're also going to track the length.
  */

  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
  * get()
  *
  * First we need a way to retrieve a value in a given position.
  *
  * This works differently than normal lists as we can't just jump to the
  * correct position. Instead we need to move through the individual nodes.
  *
  * @param {number} position the position of the node we want
  * @return {object} returns the node at position, otherwise returns error
  */

  get(position) {
    // check position is in range
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }

    // start with the head of the list
    let current = this.head;

    // move through until we reach position
    let i = 0;
    while (i < position) {
      current = current.next;
      i += 1;
    }

    return current;
  }

  /**
  * add()
  *
  * Next we need a way to add nodes to the specified position.
  * We're going for a generic add method that accepts a value and a position.
  *
  * @param {*} value the value to add to list
  * @param {number} position the position in which to add value
  * @return {void}
  */

  add(value, position) {
    // create a node
    const node = {
      value,
      next: null,
    };

    // inserting into head case
    if (position === 0) {
      node.next = this.head;
      this.head = node;

    // inserting into list, splice between the current node and the previous
    } else {
      // find previous and current
      const prev = this.get(position - 1);
      const current = prev.next;

      // place new node in-between
      node.next = current;
      prev.next = node;
    }

    // increment list length
    this.length += 1;
  }

  /**
  * remove()
  *
  * The last method we need is a remove method. We're just going to look up a
  * node by its position and splice it out of the chain.
  *
  * @param {number} position the position of the node to remove
  * @return {void}
  */

  remove(position) {
    // removing from the head case, set head to the next node
    if (position === 0) {
      this.head = this.head.next;

    // all other positions, get previous node and set to node after current position
    } else {
      const prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    // decrement list length
    this.length -= 1;
  }
}

export default LinkedList;
