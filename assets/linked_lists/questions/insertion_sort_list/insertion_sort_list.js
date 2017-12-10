
import { ListNode } from '../../data_structures/list_node/list_node';

/**
* Insertion Sort List
*
* Tags: Linked List, Sort
* Leetcode: 147
*
* Sort a linked list using insertion sort.
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
* insertionSortList()
*
* Solution:
*
* Remember how insertion sort works...? Here's a refresher.
*
* Imagine you are playing cards. Somebody is giving you cards one by one. When
* you are receiving cards, you are planning to put them in a way so that the
* smaller one is on the left. This means you want to insert them in a sorted way.
*
* The first card you are given is 5. Since you can't sort only one card, you simplicity
* hold onto it and wait for additional cards.
*
* The second card is 2, we want to compare this to the card in 'last' position, our
* 5. If it's larger, it goes to the right, if it's lower it goes left until we find
* the correct position.
*
* As we keep receiving cards, we check the value against the largest value in our
* sorted list (which happens to be next to it, in the previous array-position
* checked). If larger, it leaves the element in place and moves to the next. If
* smaller, it finds the correct position within the sorted list, shifts all the
* larger values up to make a space, and inserts into that correct position.
*
* And that's insertion sort. It's a simple algorithm that builds the final sorted
* array one item at a time. It is much less efficient on large lists than more
* advanced algorithms such as quicksort, heapsort, or merge sort.
*
* It can be efficient for (quite) small data sets, and is more efficient, in practice,
* than bubble sort or selection sort, although it is quite similiar to selection
* sort.
*
* Time: O(n^2)
* Space: O(1)
*
* @param {ListNode} head
* @return {ListNode}
*/

function insertionSortList(head) {
  // catch edge, empty list
  if (head === null) return head;

  const sentinel = new ListNode(0); // new starter of the sorted list
  let curr = head; // the node will be inserted
  let pre = sentinel; // insert node between pre and pre.next
  let next = null; // the next node will be inserted

  // not the end of input list
  while (curr !== null) {
    next = curr.next;

    // find the right place to insert
    while (pre.next !== null && pre.next.val < curr.val) {
      pre = pre.next;
    }

    // insert between pre and pre.next
    curr.next = pre.next;
    pre.next = curr;
    pre = sentinel;
    curr = next;
  }

  return sentinel.next;
}

export default insertionSortList;
