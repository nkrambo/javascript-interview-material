
/**
* Reverse Linked List II
*
* Tags: Linked List
* Leetcode: 92
*
* Reverse a linked list from position m to n. Do it in-place and in one-pass.
*
* Example:
*
* Given: 1 → 2 → 3 → 4 → 5 → NULL, 2, 4
* Return: 1 → 4 → 3 → 2 → 5 → NULL
*
* Note:
*
* Given m, n satisfy the following condition:
* 1 ? m ? n ? length of list.
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
* reverseBetween()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {ListNode} head
* @param {number} m
* @param {number} n
* @return {ListNode}
*/

function reverseBetween(head, m, n) {
  // catch edge, empty list
  if (head === null) return null;

  // create a sentinel node to mark the head of this list
  const sentinel = new ListNode(0);
  sentinel.next = head;

  // make a pointer pre as a marker for the node before reversing
  let pre = sentinel;
  for (let i = 0; i < (m - 1); i += 1) {
    pre = pre.next;
  }

  const start = pre.next; // a pointer to the beginning of a sub-list that will be reversed
  let then = start.next; // a pointer to a node that will be reversed

  // 1 - 2 -3 - 4 - 5; m = 2; n = 4 ---> pre = 1, start = 2, then = 3
  // sentinel → 1 → 2 → 3 → 4 → 5
  for (let i = 0; i < (n - m); i += 1) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }

  // first reversing: sentinel → 1 - 3 - 2 - 4 - 5; pre = 1, start = 2, then = 4
  // second reversing: sentinel → 1 - 4 - 3 - 2 - 5; pre = 1, start = 2, then = 5 (finish)

  return sentinel.next;
}

export default reverseBetween;
