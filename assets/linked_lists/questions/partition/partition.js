
/**
* Partition
*
* Write code to partition a linked list around a value x, such that all nodes
* less than x come before all nodes greater than or equal to x.
*
* If x is contained within the list, the values of x only need to be after the
* elements less than x (see below). The partition element x can appear anywhere
* in the 'right partition'; it does not need to appear between the left and right
* partitions.
*
* Example:
* Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
* Output: 1 -> 2 -> 3 -> 5 -> 8 -> 5 -> 10
*/

/**
* partitionList()
*
* Solution:
*
* We rearrange the elements by growing the partitioned list at the head and the
* tail.

* In this approach we start a 'new' list (using the existing nodes). Elements
* bigger than the pivot element are put at the tail and elements smaller are put
* at the head. Each time we insert an element, we update either the head or the
* tail.
*
*
* Time: O(n)
* Space: O(n)
*
* Both our space and time complexities are O(n), where n is the number of elements
* in the list of the passed in head node.
*
* @param {object} node linked list head node
* @param {integer} pivot value to partition list at
* @return {object} returns the head node of partitioned list
*/

function partitionList(list, pivot) {
  let head = list.head;
  let tail = list.head;
  let current = list.head;

  // step over all list items
  while (current !== null) {
    const next = current.next; // cache next

    // check value against pivot
    if (current.value < pivot) {

      // insert node at head
      current.next = head;
      head = current;

    // otherwise, insert at tail
    } else {
      tail.next = current;
      tail = current;
    }

    // keep stepping
    current = next;
  }

  // set our final tail node.next to null
  tail.next = null;

  return head;
}

export default partitionList;
