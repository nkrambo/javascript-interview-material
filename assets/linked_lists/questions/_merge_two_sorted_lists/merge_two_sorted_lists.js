
/**
* Merge Two Sorted Lists
*
* Tags: Linked List
* Leetcode: 21
*
* Merge two sorted linked lists and return it as a new list. The list should be
* made by splicing together the nodes of the first two lists.
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
* mergeTwoListsIter()
*
* Solution:
*
* There are actually a few ways that we could approach this problem. We could solve
* this iteratively and recursively. We'll look at both.
*
* Time: O(1)
* Space: O(1)
*
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

function mergeTwoListsIter(l1, l2) {
  let sentinel = new ListNode(0);
  let cur = sentinel;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;

    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    cur = cur.next;
  }

  cur.next = l1 || l2;
  return sentinel.next;
}

/**
* mergeTwoListsRecursive()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

function mergeTwoListsRecursive(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    return l1;

  } else {
    l2.next = mergeTwoListsRecursive(l1, l2.next);
    return l2;
  }
}

export { mergeTwoListsIter, mergeTwoListsRecursive };
