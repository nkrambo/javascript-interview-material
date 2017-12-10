
/**
* Palindrome Linked List
*
* Tags: Two Pointer, Linked List
* Leetcode: 234
*
* Given a singly linked list, determine if it is a palindrome.
*
* Example:
* Input: 0 → 1 → 2 → 1 → 0
* Output: true
*
* Example:
* Input: 'a' → 'b' → 'a'
* Output: true
*
* Example:
* Input: 'f' → 'o' → 'o'
* Output: false
*
* Follow up:
*
* Could you do it in O(n) time and O(1) space?
*/

/**
* Definition for singly-linked list.
*
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

/**
* isPalindrome()
*
* Solution:
*
* We want to detect linked lists where the front half of the list is the reverse
* of the second half. How would we do that? By reversing the front half of the list.
* A stack can accomplish this.
*
* We need to push the first half of the elements onto a stack. We can do this in
* two different ways depending on whether or not we know the size of the linked
* list.
*
* If we know the size of the linked list, we can iterate through the first half
* of the elements in a standard for loop, pushing each element onto a stack. We
* must be careful, of course, to handle the case where the length of the linked
* list is odd.
*
* If we don't know size of the linked list, we can iterate through the linked list,
* using the fast runner / slow runner technique. At each step in the loop, we push
* the data from the slow runner onto the stack. When the fast runner hits the end
* of the list, the slow runner will have reached the middle of the linked list.
* By this point, the stack will have all the elements from the front of the linked
* list, but in reverse order.
*
* Now, we simply iterate through the rest of the linked list. At each iteration,
* we compare the node to the top of the stack. If we complete the iteration without
* finding a difference, then the linked list is a palindrome.
*
* Time: O(n)
* Space: O(1)
*
* @param {ListNode} head
* @return {boolean}
*/

function isPalindrome(head) {
  let slow = head;
  let fast = head;
  const stack = [];

  // push elements from first half into the stack. If we know the length of the list
  // we could just use a for loop instead of the runner.
  while (fast !== null && fast.next !== null) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // has odd number of elements
  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    const top = stack.pop();

    // if values are different then it's not a palindrome
    if (top !== slow.val) return false;
    slow = slow.next;
  }

  return true;
}

export default isPalindrome;
