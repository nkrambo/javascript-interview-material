
/**
* Swap Pairs
*
* Tags: Linked List
* Leetcode: 24
*
* Given a linked list, swap every two adjacent nodes and return its head.
*
* Example:
*
* Given 1 → 2 → 3 → 4
* Return 2 → 1 → 4 → 3
*
* Your algorithm should use only constant space. You may not modify the values
* in the list, only nodes itself can be changed.
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
* swapPairsRecursive()
*
* Solution:
*
* We can solve this one recusively.
*
* Time: O(n)
* Space: O(n)
*
* @param {ListNode} head
* @return {ListNode}
*/

function swapPairsRecursive(head) {
  // base 1: we hit the end of the list, there are no more pairs
  // base 2: we hit the end of the list, we only have a single odd node
  if (head === null || head.next === null) return head;

  // cache new head
  const newHead = head.next;

  // recusively swap nodes
  head.next = swapPairsRecursive(head.next.next);

  // append the updated list and return new head
  newHead.next = head;
  return newHead;
}

/**
* swapPairs()
*
* Solution:
*
* This is the iterative solution to this problem.
*
* Pretty straight forward here.
*
* Remeber that we cannot modifiy values, onlt the actual nodes can be swaped.
*
* First, we cache the new head node to return later. This will be the head.next.
*
* Then we simply traverse and swap each pair of nodes. The swap can be a little
* tricky. We have to cache the current and then set the pointers accordingly.
* We then keep traversing if we have another pair to swap.
*
* Time: O(n)
* Space: O(1)
*
* @param {ListNode} head
* @return {ListNode}
*/

function swapPairs(head) {
  // check input
  if (head === null || head.next === null) return head;

  // assign new head
  let curr = head;
  const newHead = head.next;

  // while we have pairs, current and next, swap nodes
  while (curr !== null && curr.next !== null) {
    // stash current, swap nodes
    const temp = curr;
    curr = curr.next;
    temp.next = curr.next;
    curr.next = temp;

    // move current pointer
    // if we have another pair, temp is our new current
    curr = temp.next;
    if (curr !== null && curr.next !== null) temp.next = curr.next;
  }

  // remeber we need to return the new head
  return newHead;
}

export { swapPairsRecursive, swapPairs };
