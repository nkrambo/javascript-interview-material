
/**
* Partition
*
* Write code to partition a linked list around a value x, such that all nodes
* less than x come before all nodes greater than or equal to x. If x is contained
* within the list, the values of x only need to be after the elements less than
* x (see below). The partition element x can appear anywhere in the 'right partition';
* it does not need to appear between the left and right partitions.
*
* Example:
* Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
* Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

/**
* partitionList()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list - linked list to partition
* @param {integer} pivot value to partition list at
* @return {object} returns the head node of partitioned list
*/

function partitionList(list, pivot) {

  // type check
  if (!(list instanceof LinkedList)) {
    new Error('partitionList: Expects first parameter of type [object LinkedList]');
  }

  // edge cases
  if (list.length < 2) {
    new Error('partitionList: Cannnot partition list of length 2 nodes or less.');
  }

  let head = list.head;
  let tail = list.head;

  let current = list.head;

  while (current !== null) {

    // insert node at head
    if (current.value < pivot) {
      current.next = head;
      head = current;

    // insert at tail
    } else {
      tail.next = current;
      tail = current;
    }

    current = current.next;
  }

  // tail.next = null;
  // return head;
}

export default partitionList;
