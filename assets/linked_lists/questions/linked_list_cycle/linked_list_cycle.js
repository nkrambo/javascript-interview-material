
/**
* Linked List Cycle
*
* Tags: Linked List, Two Pointer
* Leetcode: 141
*
* Given a linked list, determine if it has a cycle in it.
*
* Follow up:
* Can you solve it without using extra space?
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
* hasCycleSet()
*
* Solution:
*
* To detect if a list is cyclic, we can check whether a node had been visited before.
* Naturally, we could use a map or set for this.
*
* We go through each node one by one and record each node's reference (or memory address)
* in a set. If the current node is null, we have reached the end of the list and it
* must not be cyclic. If current node’s reference is in the set, then return true.
*
* Time: O(n)
* Space: O(n)
*
* We visit each of the n elements in the list at most once. Adding a node to the
* set costs only O(1) time.
*
* The space depends on the number of elements added to the set, which contains at
* most n elements.
*
* @param {ListNode} head
* @return {boolean}
*/

function hasCycleSet(head) {
  const seen = new Set();

  // step though list
  while (head !== null) {
    // seen node before
    if (seen.has(head)) return true;

    // otherwise, add node and keep traversing
    seen.add(head);
    head = head.next;
  }

  // fell through, no cycle
  return false;
}

/**
* hasCyclePointers()
*
* Solution:
*
* Imagine two runners running on a track at different speed. What happens when
* the track is actually a circle?
*
* The space complexity can be reduced to O(1) by considering two pointers at
* different speed - a slow pointer and a fast pointer. The slow pointer moves one
* step at a time while the fast pointer moves two steps at a time.
*
* If there is no cycle in the list, the fast pointer will eventually reach the
* end and we can return false in this case.
*
* Now consider a cyclic list and imagine the slow and fast pointers are two runners
* racing around a circle track. The fast runner will eventually meet the slow runner.
* Why? Consider this case (we name it case A) - The fast runner is just one step
* behind the slow runner. In the next iteration, they both increment one and two
* steps respectively and meet each other.
*
* How about other cases?
*
* For example, we have not considered cases where the fast runner is two or three
* steps behind the slow runner yet. This is simple, because in the next or next's
* next iteration, this case will be reduced to case A mentioned above.
*
* Time: O(n)
* Space: O(1)
*
* Let us denote n as the total number of nodes in the linked list. To analyze its
* time complexity, we consider the following two cases separately.
*
* 1. List has no cycle:
*
* The fast pointer reaches the end first and the run time depends on the list's
* length, which is O(n).
*
* 2. List has a cycle:
*
* We break down the movement of the slow pointer into two steps, the non-cyclic
* part and the cyclic part:
*
* a. The slow pointer takes "non-cyclic length" steps to enter the cycle. At this
*    point, the fast pointer has already reached the cycle.
*    number of iterations = non-cyclic lenght = n
*
* b. Both pointers are now in the cycle. Consider two runners running in a cycle
*    - the fast runner moves 2 steps while the slow runner moves 1 steps at a time.
*    Since the speed difference is 1, it takes (diff between 2 runners / diff of speed)
*    loops for the fast runner to catch up with the slow runner. As the distance
*    is at most "cyclic length K" and the speed difference is 1, we conclude that
*    number of iterations = almost "cyclic length k"
*
* Therefore, the worst case time complexity is O(N+K), which is O(n).
*
* @param {ListNode} head
* @return {boolean}
*/

function hasCyclePointers(head) {
  // catch edge
  if (head === null || head.next === null) return false;

  // hare and tortoise pointers
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    // reached the end of list, no cycle
    if (fast === null || fast.next === null) return false;

    // keep traversing
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

export { hasCycleSet, hasCyclePointers };
