
// Remove Kth to last
// @param {Number} position - The starting position of the range
// @return {Object} Returns a new LinkedList object

function printKthToLast(list, k) {

  // type check
  if (Object.prototype.toString.call(k) !== '[object Number]') {
    new Error('kthToLast: Expects a first parameter of type [Integer].');
  }

  // type check
  if (!(list instanceof LinkedList)) {
    new Error('kthToLast: Expects second parameter of type [Object LinkedList]');
  }

  let p1 = list.head;
  let p2 = list.head;

  for (let i = 0; i < k; i++) {
    if (p1 === null) return null; // out of bounds
    p1 = p1.next;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}
