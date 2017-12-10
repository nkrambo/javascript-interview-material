
import { ListNode } from '../../data_structures/list_node/list_node';

/**
* Partition List
*
* Tags: Linked List, Two Pointers
* Leetcode: 86
*
* Given a linked list and a value x, partition it such that all nodes less than
* x come before nodes greater than or equal to x.
*
* You should preserve the original relative order of the nodes in each of the
* two partitions.
*
* Example:
*
* Input:  1 → 4 → 3 → 2 → 5 → 2, x = 3
* Output: 1 → 2 → 2 → 4 → 3 → 5
*/

/**
* Definition for singly-linked list.
*
* function ListNode(val) {
*   this.val = val;
*   this.next = null;
* }
*/

/**
* partition()
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
* Time: O(n)
* Space: O(n)
*
* Both our space and time complexities are O(n), where n is the number of elements
* in the list of the passed in head node.
*
* @param {ListNode} head
* @param {number} x
* @return {ListNode}
*/

function partition(head, x) {
  // dummy heads of the 1st and 2nd queues
  const sen1 = new ListNode(0);
  const sen2 = new ListNode(0);

  // current tails of the two queues;
  let curr1 = sen1;
  let curr2 = sen2;

  // step over all list items
  while (head !== null) {
    // check value against pivot
    if (head.val < x) {
      // insert node at head
      curr1.next = head;
      curr1 = head;

    // otherwise, insert at tail
    } else {
      curr2.next = head;
      curr2 = head;
    }

    // keep stepping
    head = head.next;
  }

  // set our final tail node.next to null, avoid cycle in linked list
  curr2.next = null;
  curr1.next = sen2.next;

  return sen1.next;
}

export default partition;
