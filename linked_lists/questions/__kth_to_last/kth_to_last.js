
/**
* Kth to Last
*
* You have a linked list and want to find the kth to last node.
*
* Write a function kthToLast() that takes an integer k and the headNode of a
* singly linked list, and returns the kth to last node in the list.
*
* For example:
*
* function LinkedListNode(value) {
*   this.value = value;
*   this.next = null;
* }
*
* let a = new LinkedListNode("Angel Food");
* let b = new LinkedListNode("Bundt");
* let c = new LinkedListNode("Cheese");
* let d = new LinkedListNode("Devil's Food");
* let e = new LinkedListNode("Eccles");
*
* a.next = b;
* b.next = c;
* c.next = d;
* d.next = e;
*
* kthToLast(2, a);
* // returns the node with value "Devil's Food" (the 2nd to last node)
*
*/

/**
* kthToLast()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {number} k integer position from last node
* @param {object} headNode head node of singly-linked
* @return {object} returns list node at kth position from last node
*/

function kthToLast(k, headNode) {

  // // type check
  // if (Object.prototype.toString.call(k) !== '[object Number]') {
  //   new Error('kthToLast: Expects a first parameter of type [Integer].');
  // }
  //
  // // type check
  // if (!(list instanceof LinkedList)) {
  //   new Error('kthToLast: Expects second parameter of type [Object LinkedList]');
  // }
  //
  // let p1 = list.head;
  // let p2 = list.head;
  //
  // for (let i = 0; i < k; i++) {
  //   if (p1 === null) return null; // out of bounds
  //   p1 = p1.next;
  // }
  //
  // while (p1 !== null) {
  //   p1 = p1.next;
  //   p2 = p2.next;
  // }
  //
  // return p2;
}

export default kthToLast;
