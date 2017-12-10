
import { ListNode } from '../../data_structures/list_node/list_node';

/**
* Merge Two Sorted Lists
*
* Tags: Linked List
* Leetcode: 21
*
* Merge two sorted linked lists and return it as a new list. The list should be
* made by splicing together the nodes of the two input lists.
*/

/**
* mergeTwoLists()
*
* Solution:
*
* There are actually a few ways that we could approach this problem. We could solve
* this iteratively and recursively. We'll look at both.
*
* Let's look at the iterative approach first.
*
* This is pretty straight forward. We need to create a new list to hold our merged
* values. We create a sentinel node and set a current pointer.
*
* Now we just iterate over 'pairs' of values in l1 and l2 and check for the lowest
* of these two values to place into our new list. If we take from l1, we bump l1
* along, but leave l2 to compare it again to l1's next value. We repeat this step
* so on until we emptied either l1 or l2.
*
* Once there is only 1 list of values (or a single value) left, we know that because
* the lists were already sorted that we can just append these to the merged list
* and they will be in the correct place.
*
* We then return the sentinel.next, remember that the new root is set to 0 and
* shouldn't be included in our return... it's a sentinel value.
*
* Time: O(l1 + l2)
* Space: O(l1 + l2)
*
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

function mergeTwoLists(l1, l2) {
  // create a new list root node, set current pointer
  const sentinel = new ListNode(0);
  let curr = sentinel;

  // compare pairs of values in both lists
  while (l1 && l2) {
    // if l1 value is less than the l2, take it and bump l1
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;

    // otherwise, take l2 value and bump along l2
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    // move new list along
    curr = curr.next;
  }

  // when we run out of pairs, grab append any remaining
  curr.next = l1 || l2;

  // ignore sentinel 0 value
  return sentinel.next;
}

export default mergeTwoLists;
