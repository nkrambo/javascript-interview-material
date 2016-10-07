
/**
* Delete Middle Node
*
Delete a node from a singly-linked list ↴ , given only a variable pointing to that node.
The input could, for example, be the variable b below:
*
*/

/**
* deleteMiddleNode()
*
* Solution:
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {boolean} returns true if all characters in string are unique
*/

function deleteMiddleNode(node) {
  if (node === null || node.next === null) return false;

  let next = node.next;
  node.value = next.value;
  node.next = next.next;
  return true;
}

export default deleteMiddleNode;
