
/**
* Reverse Linked List
*
* Write a function for reversing a linked list. Do it in-place.
*
* Your function will have one input: the head of the list; and should return the
* new head of the list.
*
* Here's a sample linked list node class:
*
* function LinkedListNode(value) {
*   this.value = value;
*   this.next = null;
* }
*/

/**
* reverseLinkedList()
*
* Solution:
*
* Time: O(n)
* Space: O(1)
* We pass over the list only once, and maintain a constant number of variables in memory.
*
* @param {object} list linked list to reverse
* @return {object} returns the same modified list in-reverse
*/

function reverseLinkedList(list) {
  let current  = headOfList;
  let previous = null;
  let nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {
    // copy a pointer to the next element
    // before we overwrite current.next
    nextNode = current.next;

    // reverse the 'next' pointer
    current.next = previous;

    // step forward in the list
    previous = current;
    current = nextNode;
  }

  return previous;
}

export default reverseLinkedList;
