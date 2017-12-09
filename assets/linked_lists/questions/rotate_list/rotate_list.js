
import { ListNode } from '../../data_structures/list_node/list_node';

/**
* Rotate List
*
* Tags: Linked List, Two Pointers
* Leetcode: 61
*
* Given a list, rotate the list to the right by k places, where k is non-negative.
*
* Example:
*
* Given: 1 → 2 → 3 → 4 → 5 → NULL and k = 2,
* Return: 4 → 5 → 1 → 2 → 3 → NULL
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
* rotateRight()
*
* Solution:
*
* Not too hard, this one.
*
* We use a sentinel node and two pointers to solve this one.
*
* Move a 'fast' pointer up k positions. Then move the 'slow' and 'fast' k block
* up 1 node at a time until 'fast' hits the end of the list. Once this happens,
* we have a handle on the end of the list and the kth from last node.
*
* We then update our pointers to rotate the list.
*
* We point the end of the list to the old head node. Then set the start of the
* list to the slow and place in our null value.
*
* Time: O(n)
* Space: O(1)
*
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/

function rotateRight(head, k) {
  const sentinel = new ListNode(0);
  sentinel.next = head;

  // two pointers
  let fast = head;
  let slow = head;

  // move k spots
  for (let i = 1; i <= k; i += 1) {
    fast = fast.next;
  }

  // move k block, until fast hits end
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // update pointers to rotate
  fast.next = sentinel.next;
  sentinel.next = slow.next;
  slow.next = null;

  return sentinel.next;
}

export default rotateRight;
