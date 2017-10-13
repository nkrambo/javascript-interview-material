
/**
* Delete Node in a Linked List
*
* Tags: Linked List
* Leetcode: 237
*
* Write a function to delete a node (except the tail) in a singly linked list,
* given only access to that node.
*
* Supposed the linked list is 1 → 2 → 3 → 4 and you are given the third node
* with value 3, the linked list should become 1 → 2 → 4 after calling your function.
*/

/**
* deleteNode()
*
* Solution:
*
* We don't know what the head of the list is, we only have a reference to the
* node we want to delete. So we can't traverse the list.
*
* When you think about how we normally 'delete' a node from a linked-list, we
* just change the previous node's pointer to skip the node we want to delete.
*
* For example:
*
* If we want to delete node (3), we point (2) → (4)
*
*        _ _ _ _
*       |       ↓
*   1 → 2 → 3 → 4 → 5 → NULL
*
* But, in this case, we don't even have access to the previous node either.
*
* So what we do is modify the current node instead of deleting it.
*
* We take the value and next from the input node's next node and copy them into
* the input node. Now the input node's previous node effectively skips the input
* node's old value! Pretty easy!
*
* It looks like so:
*
* If we are given node (3) to delete, we replace it's value with the node that
* comes after it, that is (4) and then set it's next to point 2 nodes down, (5).
*
*             (val)
*            _ _ _ _
*           |   ↓   ↓ (next)
*   1 → 2 → 3 → 4 → 5 → NULL
*
* A couple of things to consider.
*
* First, it doesn't work for deleting the last node in the list. We could change
* the node we're deleting to have a value of null, but the second-to-last node's
* next pointer would still point to a node, even though it should be null.
* This could work—we could treat this last, 'deleted' node with value null as a
* 'dead node' or a 'sentinel node', and adjust any node traversing code to stop
* traversing when it hits such a node. The trade-off there is we couldn't have
* non-dead nodes with values set to null. Instead we chose to throw an exception
* in this case.
*
* Second, this method can cause some unexpected side-effects. For example,
* let's say we call:
*
* let a = new LinkedListNode(3);
* let b = new LinkedListNode(8);
* let c = new LinkedListNode(2);
*
* a.next = b;
* b.next = c;
*
* deleteNode(b);
*
* There are two potential side-effects:
*
* 1. Any references to the input node have now effectively been reassigned to its
*    next node. In our example, we 'deleted' the node assigned to the variable b,
*    but in actuality we just gave it a new value (2) and a new next! If we had
*    another pointer to b somewhere else in our code and we were assuming it still
*    had its old value (8), that could cause bugs.
*
* 2. If there are pointers to the input node's original next node, those pointers
*    now point to a 'dangling' node (a node that's no longer reachable by walking
*    down our list). In our example above, c is now dangling. If we changed c, we'd
*    never encounter that new value by walking down our list from the head to the tail.
*
* Time: O(1)
* Space: O(1)
*
* Time and space complexity are both O(1).
*
* @param {ListNode} node
* @return {void} Do not return anything, modify node in-place instead.
*/

function deleteNode(node) {
  // get the input node's next node, the one we want to skip to
  const nextNode = node.next;

  if (nextNode) {
    // replace the input node's value and pointer with the next
    // node's value and pointer. the previous node now effectively
    // skips over the input node
    node.val = nextNode.val;
    node.next = nextNode.next;
  } else {
    // eep, we're trying to delete the last node!
    throw new Error('Can\'t delete the last node with this method!');
  }
}

export default deleteNode;
