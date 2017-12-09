
/**
* Linked List Cycle II
*
* Tags: Linked List, Map, Two Pointer
* Leetcode: 142
*
* Given a linked list, return the node where the cycle begins. If there is no
* cycle, return null.
*
* Careful, a cycle can occur in the middle of a list, or it can simply mean the
* last node links back to the first node. Does your function work for both?
*
* Note:
*
* Do not modify the linked list.
*
* Follow up:
*
* Can you solve it without using extra space?
*
* Example:
*
* Input:
*             D
*           ↗  ↘
* A → B → C  ←  E
*
* Output: C
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
* detectCycleSet()
*
* Solution:
*
* Because a cycle could result from the last node linking to the first node, we
* probably need to look at every node before we even see the start of our cycle
* again. So it seems like we can't do better than O(n) runtime.
*
* Using a set, we could store all the nodes we've seen so far. The algorithm is simple:
*
* 1. If the current node is already in our set, we have a cycle. Return current node.
* 2. If the current node is null we've hit the end of the list. Return null.
* 3. Else throw the current node in our set and keep going.
*
* Time: O(n)
* Space: O(n)
*
* Where (n) is the number if elements in our list. We can do better by getting a
* constant space complexity in our next solution.
*
* @param {object} head linked list node
* @return {object} returns a node at beginning of loop, if one exists, else null
*/

function detectCycleSet(head) {
  const seen = new Set();

  while (head !== null) {
    // found loop
    if (seen.has(head)) {
      return head;
    }

    // otherwise, keep traversing
    seen.add(head);
    head = head.next;
  }

  // no loop found
  return null;
}

/**
* detectCycle()
*
* Solution:
*
* Think about a looping list and a linear list. What happens when you traverse
* one versus the other?
*
* A linear list has an end node that doesn't have a next node. But a looped list
* will run forever. We know we don't have a loop if we ever reach an end node, but
* how can we tell if we've run into a loop?
*
* We can't just run our function for a really long time, because we'd never really
* know with certainty if we were in a loop or just a really long list.
*
* Imagine that you're running on a long, mountainous running trail that happens
* to be a loop. What are some ways you can tell you're running in a loop?
*
* One way is to look for landmarks. You could remember one specific point, and
* if you pass that point again, you know you're running in a loop. Can we use that
* principle here?
*
* Well, our cycle can occur after a non-cyclical "head" section in the beginning
* of our linked list. So we'd need to make sure we chose a "landmark" node that
* is in the cyclical "tail" and not in the non-cyclical "head." That seems impossible
* unless we already know whether or not there's a cycle...
*
* Think back to the running trail. Besides landmarks, what are some other ways you
* could tell you're running in a loop? What if you had another runner? (Remember,
* it’s a singly-linked list, so no running backwards!)
*
* A tempting approach could be to have the other runner stop and act as a "landmark,"
* and see if you pass her again. But we still have the problem of making sure our
* "landmark" is in the loop and not in the non-looping beginning of the trail.
*
* What if our "landmark" runner moves continuously but slowly?
*
* If we sprint quickly down the trail and the landmark runner jogs slowly, we will
* eventually "lap" (catch up to) the landmark runner!
*
* But what if there isn't a loop?
*
* Then we (the faster runner) will simply hit the end of the trail (or linked list).
*
* So let's make two variables, slowRunner and fastRunner. We'll start both on the
* first node, and every time slowRunner advances one node, we'll have fastRunner
* advance two nodes.
*
* If fastRunner catches up with slowRunner, we know we have a loop. If not, eventually
* fastRunner will hit the end of the linked list and we'll know we don't have a loop.
*
* This is also known as the 'tortoise and hare' technique for obvious reasons.
*
* You may be wondering if fastRunner might 'hop over' slowRunner completely, without
* ever colliding. That's not possible. Suppose that fastRunner did hop over slowRunner,
* such that slowRunner is at a spot (i) and fastRunner is at a spot (i + 1). In
* the previous step, slowRunner would be at spot (i - 1) and fastRunner would be
* at ((i + 1) - 2), or spot (i - 1). That is, they would heave collided.
*
* Time: O(n)
* Space: O(1)
*
* The runtime analysis is a little tricky. The worst case is when we do have a cycle,
* so we don't return until fastRunner equals slowRunner. But how long will that take?
*
* First, we notice that when both runners are circling around the cycle fastRunner
* can never skip over slowRunner. Why is this true?
*
* Suppose fastRunner had just skipped over slowRunner. fastRunner would only be
* 1 node ahead of slowRunner, since their speeds differ by only 1. So we would have
* something like this:
*
* [ ] → [s] → [f]
*
* What would the step right before this "skipping step" look like? fastRunner would
* be 2 nodes back, and slowRunner would be 1 node back. But wait, that means they
* would be at the same node! So fastRunner didn't skip over slowRunner! (This is
* a proof by contradiction.)
*
* Since fastRunner can't skip over slowRunner, at most slowRunner will run around
* the cycle once and fastRunner will run around twice. This gives us a runtime of
* O(n).
*
* For space, we store two variables no matter how long the linked list is, which
* gives us a space cost of O(1).
*
* @param {object} head linked list node
* @return {object} returns a node at beginning of loop, if one exists, else null
*/

function detectCycle(head) {
  // catch edge
  if (head === null || head.next === null) return null;

  // hare and tortoise pointers
  let slow = head;
  let fast = head;
  let isCycle = false;

  // until we hit the end of the list
  while (slow !== null && fast !== null) {
    slow = slow.next;
    if (fast.next === null) return null;
    fast = fast.next.next;

    if (slow === fast) { isCycle = true; break; }
  }

  if (!isCycle) return null;

  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // could return either slow or fast
  return slow;
}

export { detectCycleSet, detectCycle };
