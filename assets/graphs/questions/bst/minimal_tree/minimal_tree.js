
/**
* Minimal Tree
*
* Tags: BST, Recursion
*
* Given a sorted (increasing order) array with unique integer elements, write an
* algorithm to create a binary search tree with minimal height.
*/

/**
* minimal()
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
* So we can proceed constructing our tree in this fasion. The middle of each
* subsection of the array becomes the root of the node. The left half of the array
* will become our left subtree, and the right half of the array will become the
* right subtree.
*
* One way to implement this is to use a recursive process. Our insertNode()
* method is passed a subsection of the array and returns the root of a minimal
* tree for that array.
*
* The algorithm is as follows:
* 1. Insert into the tree the middle element of the array.
* 2. Insert (into the left subtree) the left subarray elements.
* 3. Insert (into the right subtree) the right subarray elements.
* 4. Recurse
*
* Time: O(n)
* Space: O(1)
*
* We need to grab every index out of nums and insert into a new BST, so both our
* time and space complexities will be O(n).
*
* @param {array} nums sorted (increasing) unique integers
* @return {object} returns a minimal binary search tree created from nums
*/

import BinarySearchTree from '../../../data_structures/bst/bst';

function minimal(nums) {
  // new tree
  const BST = new BinarySearchTree();

  // recursive insert
  insertNode(BST, nums, 0, nums.length - 1);

  return BST;
}

function insertNode(tree, nums, left, right) {
  // base case
  if (right < left) return null;

  // calculate middle index
  const mid = Math.floor((left + right) / 2);

  // insert
  tree.insert(nums[mid]);

  // recurse
  insertNode(tree, nums, left, mid - 1);
  insertNode(tree, nums, mid + 1, right);
}

export default minimal;
