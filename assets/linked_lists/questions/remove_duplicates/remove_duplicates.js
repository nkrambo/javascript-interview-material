
/**
* Remove Duplicates
*
* Tags: Map, Two Pointer
*
* Write code to remove duplicates from an unsorted linked list.
*
* Follow up:
*
* How would you solve this problem if a temporary buffer is not allowed.
*/

/**
* removeDuplicates()
*
* Solution:
*
* In order to remove duplicates from a linked list, we need to be able to track
* duplicates. A simple hash table will work here.
*
* We simply iterate through the linked list, adding each element to a hash table.
* When we discover a duplicate element, we remove the element and continue iterating.
* We can do this all in one pass since we are using a linked list.
*
* Time: O(n)
* Space: O(log n)
*
* Where (n) is the number of elements in the linked list. Our space complexity is
* (log n) in the worse case, where each element has a duplicate. That is, n/2 are
* duplicate values.
*
* @param {object} head - unsorted linked list
* @return {object} returns the modified list with duplicate values removed
*/

function removeDuplicates(head) {
  // hash for duplicates
  const seen = new Set();

  // traverse from head, ref prev with two pointer
  let previous = null;
  let current = head;

  while (current !== null) {
    // found duplicate
    if (seen.has(current.val)) {
      previous.next = current.next; // remove

    // otherwise, add node to 'seen' hash
    // and update previous value
    } else {
      seen.add(current.val);
      previous = current;
    }

    current = current.next;
  }

  return head;
}

/**
* removeDuplicatesNoBuffer()
*
* Solution:
*
* If we don't have a buffer, we can iterate with two pointers: 'current' which
* iterates through the linked list, and 'runner', which checks all subsequent nodes
* for duplicates. We use nested while loops to achieve this.
*
* Time: O(n^2)
* Space: O(1)
*
* In this solution we get a better space complexity. However, our runtime is much
* worse than our hash solution. It's quadratic because we have nested while loops
* running each node against each 'current' node.
*
* @param {object} list - unsorted linked list
* @return {object} returns the modified list with duplicate values removed
*/

function removeDuplicatesNoBuffer(head) {
  let current = head;

  // iterate list for each 'current' node
  while (current !== null) {
    let runner = current;

    // look at all subsequent nodes for duplicates
    while (runner.next !== null) {
      // found duplicate
      if (runner.next.val === current.val) {
        runner.next = runner.next.next; // remove

      // keep traversing
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return head;
}

export { removeDuplicates, removeDuplicatesNoBuffer };
