
/**
* Doubly Linked List
*
* A doubly-linked list takes all the functionality of a singly-linked list and
* extends it for bi-directional movement in a list. We can traverse, in other
* words, a linked list from the first node in the list to the last node in the
* list; and we can traverse from the last node in the list to the first node in
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
*/

class DoublyLinkedList {
  /**
  * @constructor
  */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
  * Insert at the head of the list.
  *
  * @param {any} value
  * @return {ListNode} head node
  */
  unshift(value) {
    // empty list
    if (!this.head && !this.tail) {
      this.head = new ListNode(null, value, null);
      this.tail = this.head;

    // not empty
    } else {
      this.head = new ListNode(null, value, this.head);
      this.head.next.prev = this.head;
    }

    return this.head;
  }

  /**
  * Delete at the head of the list.
  *
  * @param {any} value
  */
  shift() {
    // Empty list
    if (this.head === null && this.tail === null) {
      return null;
    // Not empty list.
    } else {
      var head = this.head;
      this.head = this.head.next;
      head.delete();
      return head.val;
    }
  }

  // Insert at the end of the list.
  push() {
    // Empty list
    if (this.head === null && this.tail === null) {
      this.head = this.tail = new ListNode(null, val, null);
    // Not empty list.
    } else {
      this.tail = new ListNode(this.tail, val, null);
      this.tail.prev.next = this.tail;
    }

    return this.tail;
  }

  // Delete at the end of the list.
  pop() {
    // Empty list
    if (this.head === null && this.tail === null) {
      return null;
    // Not empty list.
    } else {
      var tail = this.tail;
      this.tail = this.tail.prev;
      tail.delete();
      return tail.val;
    }
  }
}

class ListNode {
  /**
  * @constructor
  * @param {ListNode} prev
  * @param {any} value
  * @param {ListNode} next
  */
  constructor(prev = null, value, next = null) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }

  /**
  * @return {void}
  */
  delete() {
    if (this.prev) { this.prev.next = this.next; }
    if (this.next) { this.next.prev = this.prev; }
  }
}

export default DoublyLinkedList;


// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//
//
//
//   // Move a node to the front of the List
//   moveToFront(node) {
//     if (node === this.tail) {
//       this.pop();
//     } else if (node === this.head) {
//       return;
//     } else {
//       node.delete();
//     }
//
//     node.prev = node.next = null;
//
//     // Don't delegate to shift, since we want to keep the same
//     // object.
//
//     // Empty list
//     if (this.head === null && this.tail === null) {
//       this.head = this.tail = node;
//     // At least one node.
//     } else {
//       this.head.prev = node;
//       node.next = this.head;
//       this.head = node;
//     }
//   }
//
//   // Move a node to the end of the List
//   moveToEnd(node) {
//     if (node === this.head) {
//       this.shift();
//     } else if (node === this.tail) {
//       return;
//     } else {
//       node.delete();
//     }
//
//     // Don't delegate to push, since we want to keep the same
//     // object.
//
//     node.prev = node.next = null;
//
//     // Empty list
//     if (this.head === null && this.tail === null) {
//       this.head = this.tail = node;
//     // At least one node.
//     } else {
//       this.tail.next = node;
//       node.prev = this.tail;
//       this.tail = node;
//     }
//   }
// }
