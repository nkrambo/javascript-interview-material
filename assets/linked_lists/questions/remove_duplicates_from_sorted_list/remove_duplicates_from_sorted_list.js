
/**
* Remove Duplicates from Sorted List
*
* Tags: Linked List
* Leetcode: 83
*
* Given a sorted linked list, delete all duplicates such that each element appear
* only once.
*
* Example 1:
*
* Given: 1 → 1 → 2
* Return: 1 → 2
*
* Example 2:
*
* Given: 1 → 1 → 2 → 3 → 3
* Return: 1 → 2 → 3
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
* deleteDuplicates()
*
* Solution:
*
* This is a simple problem that merely tests your ability to manipulate list node
* pointers. Because the input list is sorted, we can determine if a node is a
* duplicate by comparing its value to the node after it in the list.
*
* If it is a duplicate, we change the next pointer of the current node so that it
* skips the next node and points directly to the one after the next node.
*
* Time: O(n)
* Space: O(1)
*
* Because each node in the list is checked exactly once to determine if it is a
* duplicate or not, the total run time is O(n), where nn is the number of nodes
* in the list.
*
* We do not use any additional space.
*
* @param {ListNode} head
* @return {ListNode}
*/

function deleteDuplicates(head) {
  let current = head;

  // step through list
  while (current !== null && current.next !== null) {
    // check if next value is a duplcate of current value
    if (current.next.val === current.val) {
      current.next = current.next.next; // update current pointer, skip duplicate

    // values are different, keep traversing
    } else {
      current = current.next;
    }
  }

  // return modified de-duped list
  return head;
}

export default deleteDuplicates;
