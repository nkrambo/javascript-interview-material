
/**
* Minimal Tree
*
* Given a sorted (increasing order) array with unique integer elements, write an
* algorithm to create a binary search tree with minimal height.
*/

/**
* Minimal Tree
*
* Solution:
*
* To create a tree of minimal height, we need to match the number of nodes in the
* left subtree to the number of nodes in the right subtree as much as possible.
* This means that we want the root to be the middle node of the array, since this
* would mean that half of the elements would be less than the root and half would
* be greater than it.
*
* This is much simpler because our input array is already sorted. We would need
* to sort it first if we wanted to proceed. If you think about it, we're basically
* performing a form of binary search, grabbing the middle index each time and
* inserting into our tree to achieve the most minimal tree possible.
*
* Like most tree problems, we could approach this recursively or iteratively.
* We'll look at both.
*
* Time: O(n)
* Space: O(n)
*
* We need to grab every index out of nums and insert into a new BST, so both our
* time and space complexities will be O(n).
*
* @param {array} nums sorted (increasing) unique integers
* @return {object} returns a minimal binary search tree created from nums
*/

import BinarySearchTree from '../../class/bst/bst';

function createMinimalBST(nums) {

//   // check length
//   if (nums.length === 0) return null;
//
//   // new tree
//   const BST = new BinarySearchTree();
//
//   let left = 0;
//   let right = nums.length - 1;
//   BST.insert(nums[Math.floor((left + right)/ 2)]);
//
//   const queue = [BST.root];
//
//   while (stack.length) {
//     const node = queue.shift();
//
//     // push
//     queue.push();
//   }
//
//   return BST;
}

function createMinimalBSTRecursive(nums) {

  // check length
  if (nums.length === 0) return null;

  // new tree
  const BST = new BinarySearchTree();

  // recursive insert
  insertNode(BST, nums, 0, nums.length - 1);

  return BST;
}

function insertNode(tree, nums, left, right) {

  if (left === right) {
    tree.insert(nums[left]);

  } else if (left < right) {
    // calculate middle index
    const mid = Math.floor((left + right) / 2);

    // insert
    tree.insert(nums[mid]);

    // recurse
    insertNode(tree, nums, left, mid - 1);
    insertNode(tree, nums, mid + 1, right);
  }
}

export { createMinimalBST, createMinimalBSTRecursive };
