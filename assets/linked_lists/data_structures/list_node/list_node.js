
/**
* LeetCode Definition of List Node
*/

/**
* ListNode
*
* @constructor
* @param {*} val
* @return {object} returns a linked list node
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
* addNode
*
* @param {object} head
* @param {*} val
* @return {void}
*/

function addNode(head, val) { // eslint-disable-line
  if (head === null) return null;

  // get tail node
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  // add value
  current.next = new ListNode(val);
}

/**
* getLength
*
* @param {object} head
* @return {number}
*/

function getLength(head) {
  if (head === null) return null;

  let count = 1; // count the root node
  let current = head;
  while (current.next !== null) {
    count += 1;
    current = current.next;
  }

  return count;
}

export { ListNode, addNode, getLength };
