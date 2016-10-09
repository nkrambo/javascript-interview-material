
/**
* Remove Duplicates
*
* Write code to remove duplicates from an unsorted linked list.
*
* Follow up:
* How would you solve this problem if a temporary buffer is not allowed.
*/

/**
* removeDuplicates()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list - unsorted linked list
* @return {object} returns the modified list with duplicate values removed
*/

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

/**
* removeDuplicatesNoBuffer()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list - unsorted linked list
* @return {object} returns the modified list with duplicate values removed
*/

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

export { removeDuplicates, removeDuplicatesNoBuffer };
