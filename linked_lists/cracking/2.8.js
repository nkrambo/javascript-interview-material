
// Loop detection

function loopDetectionSet(list) {
  let visited = new Set();
  let current = list.head;

  while (current) {
    if (visited.has(node)) {
      return node;

    } else {
      visited.add(node);
      node = node.next;
    }
  }

  return null;
}

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
