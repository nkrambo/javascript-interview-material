
/**
* Swap Pairs
*
* Given a linked list, swap every two adjacent nodes and return its head.
*
* Example:
* Input: 1 -> 2 -> 3 -> 4
* Output: 2 -> 1 -> 4 -> 3
*
* Your algorithm should use only constant space. You may not modify the values
* in the list, only nodes itself can be changed.
*/

/**
* swapPairsRecursive()
*
* Solution:
*
* We can solve this one recusively
*
* Time: O(n)
* Space: O(1)
*
* @param {object} head linked list head node
* @return {object} returns the same modified list head node
*/

function swapPairsRecursive(head) {
  if (head === null || head.next === null) return head;

  const newHead = head.next;
  head.next = swapPairsRecursive(head.next.next);
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
* Time: O(n)
* Space: O(1)
*
* @param {object} head linked list head node
* @return {object} returns the same modified list head node
*/

function swapPairs(head) {
  if (head == null || head.next == null) return head;

  let cur = head;
  let newHead = head.next;
  while (cur !== null && cur.next !== null) {
    let tmp = cur;
    cur = cur.next;
    tmp.next = cur.next;
    cur.next = tmp;
    cur = tmp.next;
    if (cur !== null && cur.next !== null) tmp.next = cur.next;
  }

  return newHead;
}

export {swapPairsRecursive, swapPairs};
