
/**
* Partition List
*
* Tags: Linked List, Two Pointers
* Leetcode: 86
*
* Given a linked list and a value x, partition it such that all nodes less than
* x come before nodes greater than or equal to x.
*
* You should preserve the original relative order of the nodes in each of the
* two partitions.
*
* Example:
*
* Input:  1 → 4 → 3 → 2 → 5 → 2, x = 3
* Output: 1 → 2 → 2 → 4 → 3 → 5
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
* partition()
*
* Solution:
*
* We rearrange the elements by growing the partitioned list at the head and the
* tail.

* In this approach we start a 'new' list (using the existing nodes). Elements
* bigger than the pivot element are put at the tail and elements smaller are put
* at the head. Each time we insert an element, we update either the head or the
* tail.
*
* Time: O(n)
* Space: O(n)
*
* Both our space and time complexities are O(n), where n is the number of elements
* in the list of the passed in head node.
*
* @param {object} head linked list head node
* @param {integer} x value to partition list at
* @return {object} returns the head node of partitioned list
*/
//
// function partition(head, x) {
//   let head = list.head;
//   let tail = list.head;
//   let current = list.head;
//
//   // step over all list items
//   while (current !== null) {
//     const next = current.next; // cache next
//
//     // check value against pivot
//     if (current.value < pivot) {
//       // insert node at head
//       current.next = head;
//       head = current;
//
//     // otherwise, insert at tail
//     } else {
//       tail.next = current;
//       tail = current;
//     }
//
//     // keep stepping
//     current = next;
//   }
//
//   // set our final tail node.next to null
//   tail.next = null;
//
//   return head;
// }
//
// export default partition;
