
/**
* BST Sequences
*
* A binary search tree was created by traversing through an array from left to
* right and inserting each element. Given a binary search tree with distinct elements,
* print all possible arrays that could have led to this tree.
*
* Example:
* Input:
*
*            2
*         ↙     ↘
*       1         3
*
* Output: [[2, 1, 3], [2, 3, 1]]
*
* Solution:
*
* It's useful to kick off this question with a good example.
*
*                    50
*                 ↙     ↘
*              20         60
*            ↙   ↘           ↘
*          10     25           70
*       ↙    ↘               ↙    ↘
*     5        15          65       80
*
* We should think about the ordering of items in a BST. Given a node, all nodes
* on its left must be less than all the nodes on its right. Once we reach a place
* without a node, we insert the new value there.
*
* What this means is that the very first element in our array must have been a 50
* in order to create the above tree. If it were anything else, then that value
* would have been the root instead.
*
* What else can we say? Some people jump to the conclusion that everything on the
* left must have been inserted before elements on the right, but that's not actually
* true. In fact, the reverse is true: the order of the left or right items doesn't
* matter.
*
* Once the 50 is inserted, all items less than 50 will be routed to the left and
* all items greater than 50 will be routed to the right. The 60 or the 20 could
* be inserted first, and it wouldn't matter.
*
* If we had all arrays that could have created the subtree rooted at 20 (call this
* arraySet20), and all arrays that could have created the subtree rooted at 60
* (call this arraySet60), how would that give us the full answer? We could just
* 'weave' each array from 'arraySet20' with each array from 'arraySet60', and then
* prepend each array with a 50.
*
* Here's what we mean by 'weaving'. We are merging two arrays in all possible ways,
* while keeping the elements within each array in the same relative order.
*
* array1: [1, 2]
* array2: [3, 4]
* weaved: [1, 2, 3, 4], [1, 3, 2, 4], [1, 3, 4, 2], [3, 1, 2, 4], [3, 1, 4, 2], [3, 4, 1, 2]
*
* Note that, as long as there aren't any duplicates in the original array sets,
* we won't have to worry that weaving will create duplicates.
*
* @param {object} node BST root node
* @return {array} returns an array of arrays
*/

// function bstSequences(node) {
//   const seqs = [];
//
//   if (node === null) {
//     seqs.push([]);
//     return seqs;
//   }
//
//   const prefix = [node.value];
//
//   // recurse left and right subtrees
//   const leftSeq = bstSequences(node.left);
//   const rightSeq = bstSequences(node.right);
//
//   // // weave together each list from the left and right sides
//   // leftSeq.forEach((left) => {
//   //   rightSeq.forEach((right) => {
//   //     const weaved = [];
//   //     weaveLists(left, right, weaved, prefix);
//   //     seqs.push(weaved);
//   //   });
//   // });
//
//   return seqs;
// }
//
// // function weaveLists(left, right, results, prefix) {
// //   if (left.length === 0 || right.length === 0) {
// //
// //   }
// // }
//
// export default bstSequences;
