
// Partition
// @param {object} list - The LinkedList object to partitionList
// @param {integer} pivot - The value to partition the list at

// function partitionList(list, pivot) {
//
//   // type check
//   if (!(list instanceof LinkedList)) {
//     new Error('partitionList: Expects first parameter of type [object LinkedList]');
//   }
//
//   // edge cases
//   if (list.length < 2) {
//     new Error('partitionList: Cannnot partition list of length 2 nodes or less.');
//   }
//
//   let head = list.head;
//   let tail = list.head;
//
//   let current = list.head;
//
//   while (current !== null) {
//
//     // insert node at head
//     if (current.value < pivot) {
//       current.next = head;
//       head = current;
//
//     // insert at tail
//     } else {
//       tail.next = current;
//       tail = current;
//     }
//
//     current = current.next;
//   }
//
//   // tail.next = null;
//   // return head;
// }
