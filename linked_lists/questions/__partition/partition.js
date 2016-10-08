
/**
* Intersection
*
* Given two (singly) linked lists, determine if the two lists intersect. Return
* the intersecting node. Note that the intersection is defined based on reference,
* not value. That is, if the kth node of the first list is the exact same node
* (by reference) as the jth node of the second linked list, then they are intersecting.
*/

/**
* intersection()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list1 linked list
* @param {object} list2 linked list
* @return {object} returns the intersecting node of list1 and list2, otherwise null.
*/

// Partition
// @param {object} list - The LinkedList object to partitionList
// @param {integer} pivot - The value to partition the list at

function partitionList(list, pivot) {

  // type check
  if (!(list instanceof LinkedList)) {
    new Error('partitionList: Expects first parameter of type [object LinkedList]');
  }

  // edge cases
  if (list.length < 2) {
    new Error('partitionList: Cannnot partition list of length 2 nodes or less.');
  }

  let head = list.head;
  let tail = list.head;

  let current = list.head;

  while (current !== null) {

    // insert node at head
    if (current.value < pivot) {
      current.next = head;
      head = current;

    // insert at tail
    } else {
      tail.next = current;
      tail = current;
    }

    current = current.next;
  }

  // tail.next = null;
  // return head;
}

export default partitionList;
