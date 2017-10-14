
/**
* Remove Duplicates from Sorted List II
*
* Tags: Linked List
* Leetcode: 82
*
* Given a sorted linked list, delete all nodes that have duplicate numbers,
* leaving only distinct numbers from the original list.
*
* Example 1:
*
* Given 1 → 2 → 3 → 3 → 4 → 4 → 5
* Return 1 → 2 → 5
*
* Example 2:
*
* Given 1 → 1 → 1 → 2 → 3
* Return 2 → 3
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
* deleteDuplicates()
*
* Solution:
*
* The idea is to maintain a pointer (prev) to the node which just previous to the
* block of nodes we are checking for duplicates.
*
* For Example:
*
* Input : 23 → 28 → 28 → 35 → 49 → 49 → 53 → 53
* Output : 23 → 35
*
* The pointer prev would point to 23 while we check for duplicates for the node 28.
* Once we reach the last duplicate node with value 28 (name it current pointer),
* we can make the next field of prev node to be the next of current and update
* current=current.next. This would delete the block of nodes with value 28 which
* has duplicates.
*
* Time: O(n)
* Space: O(1)
*
* @param {ListNode} head
* @return {ListNode}
*/

function deleteDuplicates(head) {
  // catch edge
  if (head === null) return null;

  // create a dummy node that acts like a fake head of list pointing to the original head
  const sentinel = new ListNode(0);

  // dummy node points to the original head
  sentinel.next = head;
  let prev = sentinel;
  let current = head;

  // step through the list
  while (current !== null) {
    // until the current and previous values are same, keep updating current
    while (current.next !== null && current.val === current.next.val) {
      current = current.next;
    }

    // if current has unique value i.e current is not updated, Move the prev pointer to next node
    if (prev.next === current) {
      prev = prev.next;

    // when current is updated to the last duplicate value of that segment, make prev the next of current
    } else {
      prev.next = current.next;
    }

    // keep traversing
    current = current.next;
  }

  // update original head to the next of dummy node
  return sentinel.next;
}

export default deleteDuplicates;
