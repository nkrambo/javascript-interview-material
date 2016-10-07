
// Remove Dups
// @param {object} list - Instance of LinkedList class, unsorted list
// @return {object} Returns the same modified list with duplicate values removed
// Time - O(n)
// Space - O(n)

function removeDuplicates(list) {

  // type check
  if (!(list instanceof LinkedList)) {
    throw new Error('removeDuplicates: Expects single parameter of class "LinkedList"');
  }

  // if only 1 item, there cannot be duplicates
  if (list.length <= 1) return list;

  const seen = new Set();

  // traverse from head, ref prev
  let previous = null;
  let current = list.head;

  while (current !== null) {

    if (seen.has(current.value)) {
      previous.next = current.next;
      list.length--;
    } else {
      seen.add(current.value);
      previous = current;
    }

    current = current.next;
  }
}

// Without a buffer
// Time - O(n^2) // not great
// Space - O(1)
function removeDuplicatesNoBuffer(list) {

  // type check
  if (!(list instanceof LinkedList)) {
    throw new Error('removeDuplicates: Expects single parameter of class "LinkedList"');
  }

  // if only 1 item, there cannot be duplicates
  if (list.length <= 1) return list;

  let current = list.head;

  while (current !== null) {
    let runner = current;

    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}

export default removeDuplicates;
