
/**
* Insertion Sort List
*
* Tags: Linked List, Sort
* Leetcode: 147
*
* Sort a linked list using insertion sort.
*/

/**
* ListNode
*
* @constructor
* @param {*} val
* @return {object} returns a linked list node
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
* insertionSortList()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {ListNode} head
* @return {ListNode}
*/

function insertionSortList(head) {
  // catch edge, empty list
  if (head === null) return head;

  const sentinel = new ListNode(0); // new starter of the sorted list
  let cur = head; // the node will be inserted
  let pre = sentinel; // insert node between pre and pre.next
  let next = null; // the next node will be inserted

  // not the end of input list
  while (cur !== null) {
    next = cur.next;

    // find the right place to insert
    while (pre.next !== null && pre.next.val < cur.val) {
      pre = pre.next;
    }

    // insert between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;
    pre = sentinel;
    cur = next;
  }

  return sentinel.next;
}

export default insertionSortList;
