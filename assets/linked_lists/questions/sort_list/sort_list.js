
import { ListNode } from '../../data_structures/list_node/list_node';

/**
* Sort List
*
* Tags: Linked List, Sort
* Leetcode: 148
*
* Sort a linked list in O(n log n) time using constant space complexity.
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
* sortList()
*
* Solution:
*
* We can take a merge sort apprach, as we know that this algorithm runs in O(n log n) time.
*
* Normally we would use this method on an array, that would give us some handy
* methods, but because we're dealing with linked lists it's a little trickier.
*
* This is a divide and conquer algorithm, so first we recusively keep dividing
* the list into left and right halves until we have broken them down into single
* node lists. These represent trivially sorted lists already.
*
* Then, we can build our final answer by merging these single node lists together,
* in sorted order, then lists of 2 nodes, then 3 etc... until there is only a single
* merged and sorted list to return.
*
* Notice how we divide in this algorithm. With an array we can easily grab then
* the middle index and splice the array in two. With lists, we have to use a 2
* pointer, hare and tortise method, or slow and fast runner. In this method, we
* know that our slow runner is halfway down the list, when the fast runner hits
* the end, as the fast runner takes 2 steps to the slow runners single steps.
* The we have out 'head' and 'slow' nodes, representing our 'left' and 'right' lists.
*
* Time: O(n log n)
* Space: O(1)
*
* @param {ListNode} head
* @return {ListNode}
*/

function sortList(head) {
  // base case: we have a list of 1 node, sorted by default
  if (head === null || head.next === null) return head;

  // step 1. cut the list to two halves
  // we use a hare and tortise method
  let prev = null;
  let slow = head;
  let fast = head;

  // hare takes 2 steps, tortise takes 1
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // we need to insert an end node to the left half
  prev.next = null;

  // step 2. recursively divide
  const l1 = sortList(head);
  const l2 = sortList(slow);

  // step 3. merge l1 and l2
  return merge(l1, l2);
}

function merge(l1, l2) {
  // we need a sentinel node
  const sentinel = new ListNode(0);
  let p = sentinel;

  // compare 'pairs' of node values
  while (l1 !== null && l2 !== null) {
    // left is less, insert and update list
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;

    // right is less, insert and update list
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    // keep moving result along
    p = p.next;
  }

  // catch any 'odd' nodes on either list and append them
  if (l1 !== null) p.next = l1;
  if (l2 !== null) p.next = l2;

  // remember, we're using a sentinel
  return sentinel.next;
}

export default sortList;
