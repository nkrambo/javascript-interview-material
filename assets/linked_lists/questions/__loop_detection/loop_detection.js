
/**
* Loop Detection
*
* Types: Two Runner
*
* Given a circular linked list, implement an algorithm that returns the node at
* the beginning of the loop.
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
* Time: O(n)
* Space: O(n)
*
*
* @param {object} list linked list
* @return {object} returns a node at beginning of loop, if one exists, else null
*/

function loopDetectionSet(list) {
  let visited = new Set();
  let current = list.head;

  while (current.next !== null) {
    if (visited.has(current)) {
      return current;

    } else {
      visited.add(current);
      current = current.next;
    }
  }

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
