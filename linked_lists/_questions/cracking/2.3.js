
// Remove middle node

function deleteMiddleNode(node) {
  if (node === null || node.next === null) return false;

  let next = node.next;
  node.value = next.value;
  node.next = next.next;
  return true;
}

