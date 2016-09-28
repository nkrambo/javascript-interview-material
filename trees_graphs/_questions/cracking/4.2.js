
/**
 *
 * Minimal Tree
 *
 * Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
 *
 * Solution: As the list is already sorted the best way to create a balanced tree is by
 * adding the middle node (parent) then the children. The algorithm is basically
 * involves adding the middle element of which split of the array so that the
 * parent is added before the left and right children of each subtree.
 *
 * Time: O(N log N)
 * Additional space: O(N)
 *
 */

 import BinarySearchTree from 'BST';

 function createMinimalBST(array) {
   // type check
   if (!Array.isArray(array)) {
     throw new Error('createMinimalBST: Expects single parameter of [Array] type.');
   }

   // check length
   if (array.length === 0) return null;

   // New tree and kick off recursive insert
   const BST = new BinarySearchTree();
   insertNode(BST, array, 0, array.length - 1);

   return BST;
 }

 function insertNode(tree, array, start, end) {
   if (start === end) {
     tree.insert(array[start]);

   } else if (start < end) {
     const middle = start + Math.floor((end - start) / 2);
     tree.insert(array[middle]);
     insertNode(tree, array, start, middle - 1);
     insertNode(tree, array, middle + 1, end);
   }
 }

export default createMinimalBST;
