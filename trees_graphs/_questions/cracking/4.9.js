
/**
 * BST Sequences
 *
 * A binary search tree was created by traversing through an array from left to
 * right and inserting each element. Given a binary search tree with distinct elements,
 * print all possible arrays that could have led to this array.
 *
 * Solution: We know that the root element must be the first element in all possible arrays.
 * Once the root is inserted, all values less will go left and all values greater will go right.
 * It actually doesn't matter what order the remaining values go in.
 * Therefore we need to find all possible permutations of the remaining values other than the root
 * and return those.
 *
 */

 /**
  * All Sequences
  *
  * @param {object} treeRoot Node to start at
  * @return {array} Returns an array of arrays
  */

 function allSequences(treeRoot) {

 }

 export default allSequences;
