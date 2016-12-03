
/**
* Loop Detection
*
* Types: Two Runner
*
* Given a circular linked list, implement an algorithm that returns the node at
* the beginning of the loop.
*
* Careful, a cycle can occur in the middle of a list, or it can simply mean the
* last node links back to the first node. Does your function work for both?
*
* Definition:
* Circular linked list: A (corrupt) linked list in which a node's next pointer
* points to an earlier node, so as to make a loop in the linked list.
*
* Example:
* Input: A -> B -> C -> D -> E -> C [the same C as eariler]
* Output: C
*/

/**
* loopDetectionSet()
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
* @param {object} list linked list
* @return {object} returns a node at beginning of loop, if one exists, else null
*/

function loopDetectionSet(list) {
  const seen = new Set();
  let current = list.head;

  while (current) {
    // found loop
    if (seen.has(current)) {
      return current;
    }

    // otherwise, keep traversing
    seen.add(current);
    current = current.next;
  }

  // no loop found
  return null;
}

/**
* loopDetectionRunner()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list linked list
* @return {object} returns a node at beginning of loop, if one exists, else null
*/

function loopDetectionRunner(list) {
  let slow = fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break; // collision
  }

  // check for no loop
  if (fast === null || fast.next === null) return null;

  // move slow to head, keep fast at meeting point.
  // both are k steps from the loop start. If they move at the same pace they must
  // meet at the loop start.
  slow = list.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}

export { loopDetectionSet, loopDetectionRunner };
