
import { ListNode } from '../../data_structures/list_node/list_node';

/**
* Remove Nth Node From End of List
*
* Tags: Linked List, Two Pointers
* Leetcode: 19
*
* Given a linked list, remove the nth node from the end of the list and return
* its head.
*
* Example:
*
* Given 1 → 2 → 3 → 4 → 5, and n = 2
* Return 1 → 2 → 3 → 5
*
* Note:
*
* Given n will always be valid.
*
* Try to do this in one pass.
*/

/**
* Defintion for a singly-linked list.
*
* function ListNode(val) {
*   this.val = val;
*   this.next = null;
* }
*/

/**
* removeNthFromEnd()
*
* Solution:
*
* We notice that the problem could be simply reduced to another one:
*
* Remove the (L - n + 1)th node from the beginning in the list , where L is the list length.
*
* This problem is easy to solve once we found list length L.
*
* Time: O(n)
* Space: O(1)
*
* The algorithm makes two traversals of the list, first to calculate list length
* and the second to find the (L - n)th node.
*
* First we will add an auxiliary "sentinel" node, which points to the list head.
* The "sentinel" node is used to simplify some corner cases such as a list with
* only one node, or removing the head of the list. On the first pass, we find the
* list length L. Then we set a pointer to the sentinel node and start to move it
* through the list till it comes to the (L - n) th node. We relink next pointer
* of the (L - n)th node to the (L - n + 2)th node and we are done.
*
* Example:
*
* n = 2, (3)
*
*            _ _ _ _
*           |       ↓
*   S → 1 → 2 → 3 → 4 → null
*
* Remove the (L - n + 1)th element from a list. (S) represents our "sentinel"
*
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/

function removeNthFromEnd(head, n) {
  // set sentinel
  const sentinel = new ListNode(0);
  sentinel.next = head;

  // pointer
  let first = head;

  // count length
  let length = 0;
  while (first !== null) {
    length += 1;
    first = first.next;
  }

  // subtract n
  length -= n;

  // traverse again
  first = sentinel;
  while (length > 0) {
    length -= 1;
    first = first.next;
  }

  // remove node
  first.next = first.next.next;

  // return updated list
  return sentinel.next;
}

/**
* removeNthFromEndSP()
*
* Solution:
*
* The above algorithm could be optimized to one pass.
*
* Instead of one pointer, we could use two pointers. The first pointer advances
* the list by (n + 1) steps from the beginning, while the second pointer starts
* from the beginning of the list.
*
* Now, both pointers are exactly separated by nn nodes apart. We maintain this
* constant gap by advancing both pointers together until the first pointer arrives
* past the last node. The second pointer will be pointing at the nth node counting
* from the last.
*
* We relink the next pointer of the node referenced by the second pointer to
* point to the node's next next node.
*
* Example:
*
* n = 2, (4)
*
* 1) 2 pointers and sentinel
*
*  1st
*   |
*   S → 1 → 2 → 3 → 4 → 5 → null
*   |   |
*  2nd  head
*
* 2) Move first pointer
*
*              1st
*               |
*   S → 1 → 2 → 3 → 4 → 5 → null
*   |   |
*  2nd  head
*
* 3) Move second pointer
*
*                           1st
*                            |
*   S → 1 → 2 → 3 → 4 → 5 → null
*       |       |
*     head     2nd
*
* 4) Remove node
*
*                           1st
*                _ _ _ _
*               |       ↓    |
*   S → 1 → 2 → 3 → 4 → 5 → null
*       |       |
*     head     2nd
*
* 5) Return list
*
*   S → 1 → 2 → 3 → 5 → null
*       |
*     head
*
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/

function removeNthFromEndSP(head, n) {
  // set sentinel
  const sentinel = new ListNode(0);
  sentinel.next = head;

  // two pointers
  let first = sentinel;
  let second = sentinel;

  // advance first pointer so that the gap between first and second is n nodes apart
  for (let i = 1; i <= n + 1; i += 1) {
    first = first.next;
  }

  // move first to the end, maintaining the gap
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // remove node
  second.next = second.next.next;

  // return updated list
  return sentinel.next;
}

export { removeNthFromEnd, removeNthFromEndSP };
