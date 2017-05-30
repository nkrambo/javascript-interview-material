
/**
* Doubly Linked List
*
* A doubly-linked list takes all the functionality of a singly-linked list and
* extends it for bi-directional movement in a list. We can traverse, in other
* words, a linked list from the first node in the list to the last node in the
* list; andw e can traverse from the last node in the list to the first node in
* the list.
*
* 1 ↔ 2 ↔ 3 ↔ 4 ↔ 5
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

// class DoublyLinkedList {
  /**
  * @constructor
  *
  * Like our singly linked list, we have a single "head" node that starts off the
  * entire chain but we also have a "tail" node too.
  *
  * We're also going to track the length.
  */

  // constructor() {
  //   this.head = null;
  //   this.tail = null;
  //   this.length = 0;
  // }

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

  // get(position) {
  //   // check position is in range
  //   if (position >= this.length) {
  //     throw new Error('Position outside of list range');
  //   }
  //
  //   // start with the head of the list
  //   let current = this.head;
  //
  //   // move through until we reach position
  //   let i = 0;
  //   while (i < position) {
  //     current = current.next;
  //     i += 1;
  //   }
  //
  //   return current;
  // }
// }

// https://github.com/nzakas/computer-science-in-javascript/blob/master/data-structures/doubly-linked-list/doubly-linked-list.js

// https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

// export default DoublyLinkedList;
