
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
  * @return {any|null} head node value
  */
  shift() {
    // empty list
    if (!this.head && !this.tail) return null;

    // not empty
    const head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.value;
  }

  /**
  * Insert at the end of the list.
  *
  * @param {any} value
  * @return {ListNode} tail node
  */
  push(value) {
    // empty list
    if (!this.head && !this.tail) {
      this.head = new ListNode(null, value, null);
      this.tail = this.head;

    // not empty
    } else {
      this.tail = new ListNode(this.tail, value, null);
      this.tail.prev.next = this.tail;
    }

    return this.tail;
  }

  /**
  * Delete at the end of the list.
  *
  * @param {any} value
  * @return {any|null} tail node value
  */
  pop() {
    // empty list
    if (!this.head && !this.tail) return null;

    // not empty
    const tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.value;
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

export { DoublyLinkedList, ListNode };
