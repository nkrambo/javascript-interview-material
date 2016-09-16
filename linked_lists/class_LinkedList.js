
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position) {

    // Throw an error if less items than the requested position are available
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }

    // Start with the head of the list.
    var current = this.head;

    // Slide through all of the items using node.next until we reach the
    // specified position.
    for (var index = 0; index < position; index++) {
      current = current.next;
    }

    // Return the node we found.
    return current;
  }

  add(value, position) {
    // First create a node to hold our value.
    var node = {
      value: value,
      next: null
    };

    // We need to have a special case for nodes being inserted at the head.
    // We'll set the "next" field to the current head and then replace it with
    // our new node.
    if (position === 0) {
      node.next = this.head;
      this.head = node;

    // If we're adding a node in any other position we need to splice it in
    // between the current node and the previous node.
    } else {
      // First, find the previous node and the current node.
      var prev = this.get(position - 1);
      var current = prev.next;
      // Then insert the new node in between them by setting its "next" field
      // to the current node and updating the previous node's "next" field to
      // the new one.
      node.next = current;
      prev.next = node;
    }

    // Finally just increment the length.
    this.length++;
  }

  remove(position) {
    // If we're removing the first node we simply need to set the head to the
    // next node in the chain
    if (position === 0) {
      this.head = this.head.next;

    // For any other position we need to look up the previous node and set it
    // to the node after the current position.
    } else {
      var prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    // Then we just decrement the length.
    this.length--;
  }
}
