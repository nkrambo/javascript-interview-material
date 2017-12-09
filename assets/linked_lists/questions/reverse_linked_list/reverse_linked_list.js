
/**
* Reverse Linked List
*
* Tags: Linked List
* Leetcode: 206
*
* Reverse a singly linked list.
*
* Hint:
*
* A linked list can be reversed either iteratively or recursively. Could you
* implement both?
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
* reverseList()
*
* Solution:
*
* Assume that we have linked list 1 → 2 → 3 → 0, we would like to change it to 0 ← 1 ← 2 ← 3.
*
* Our first thought might be to build our reversed list 'from the beginning',
* starting with the head of the final reversed linked list.
*
* The head of the reversed list will be the tail of the input list. To get to
* that node we'll have to walk through the whole list once (O(n) time). And that's
* just to get started.
*
* This is inefficient. We can reverse the list with just one walk from head to tail.
*
* We do this by changing the next pointer of each node to the previous node.
*
* In one pass from head to tail of our input list, we point each node's next pointer
* to the previous item.
*
* While we are traversing the list, we change the current node's next pointer to
* point to its previous element. Since a node does not have reference to its previous
* node, we must store its previous element beforehand. We also need another pointer
* to store the next node before changing the reference.
*
* The order of operations is important here! We're careful to copy current.next
* into next before setting current.next to previous. Otherwise 'stepping forward'
* at the end could actually mean stepping back to previous!
*
* We return previous because when we exit the list, current is null. Which means
* that the last node we visited—previous—was the tail of the original list, and
* thus the head of our reversed list.
*
* Do not forget to return the new head reference at the end!
*
* Keep in mind, this in-place reversal destroys the input linked list.
*
* Time: O(n)
* Space: O(1)
*
* We pass over the list only once, and maintain a constant number of variables in memory.
*
* @param {ListNode} head
* @return {ListNode}
*/

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}

/**
* reverseListRecursive()
*
* Solution:
*
* The recursive version is slightly trickier and the key is to work backwards.
* Assume that the rest of the list had already been reversed, now how do I reverse
* the front part?
*
* Let's assume the list is: n1 → ... → n(k-1) → n(k) → n(k+1) → ... → n(m) → Ø
*
* Assume from node n(k+1) to n(m) had been reversed and you are at node n(k).
*
* n(1) → ... → n(k-1) → n(k) → n(k+1) ← ... ← n(m)
*
* We want n(k+1)'s next node to point to n(k). So,
*
* n(k).next.next = n(k);
*
* We must be very careful that n(1)'s next must point to Ø. If we forget about this,
* our linked list has a cycle in it. This bug could be caught if we test our code
* with a linked list of size 2.
*
* Time: O(n)
* Space: O(n) - Note the additional space required.
*
* The extra space comes from implicit stack space due to recursion. The recursion
* could go up to n levels deep. So, our iterative approach would be the preferred
* solution.
*
* @param {ListNode} head
* @return {ListNode}
*/

function reverseListRecursive(head) {
  // base case
  if (head === null || head.next === null) return head;

  const p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return p;
}

export { reverseList, reverseListRecursive };
