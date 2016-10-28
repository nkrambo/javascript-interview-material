
/**
* Intersection
*
* Given two (singly) linked lists, determine if the two lists intersect. Return
* the intersecting node. Note that the intersection is defined based on reference,
* not value. That is, if the kth node of the first list is the exact same node
* (by reference) as the jth node of the second linked list, then they are intersecting.
*/

/**
* intersection()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list1 linked list
* @param {object} list2 linked list
* @return {object} returns the intersecting node of list1 and list2, otherwise null.
*/

function intersection(list1, list2) {
//   if (list1 === null || list2 === null) return null;
//
//   // get tails and sizes
//   const result1 = getTailAndSize(list1);
//   const result2 = getTailAndSize(list2);
//
//   // if tails do not match, no intersection
//   if (result1.tail !== result2.tail) return null;
//
//   // set pointers to start of each list
//   const shorter = result1.size < results2.size ? list1 : list2;
//   const longer = result1.size < results2.size ? list2 : list1;
//
//   // advance the pointer for the longer list by diff in sizes
//   longer = getKthNode(longer, Math.abs(result1.size - result2.size));
//
//   // move pointers until you have a collision
//   while (shorter !== longer) {
//     shorter = shorter.next;
//     longer = longer.next;
//   }
//
//   // return either one
//   return longer;
// }
//
// function getKthNode(list, k) {
//   let current = list.head;
//
//   for (let i = 0; i < k; i++) {
//     current = current.next;
//   }
//
//   return current;
// }
//
// function getTailAndSize(list) {
//   if (list === null) return null;
//
//   let size = 1;
//   let current = list.head;
//
//   while (current.next !== null) {
//     size++;
//     current = current.next;
//   }
//
//   return {
//     size,
//     tail: current
//   };
}

export default intersection;
