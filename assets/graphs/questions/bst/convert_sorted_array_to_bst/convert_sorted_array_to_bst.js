
/**
* Convert Sorted Array to Binary Search Tree
*
* Tags: BST, Recursion, DFS
* Leetcode: 108
*
* Given an array where elements are sorted in ascending order, convert it to a
* height balanced BST.
*/

/**
* Definition for a binary tree node.
*
* function TreeNode(val) {
*   this.val = val;
*   this.left = this.right = null;
* }
*/

/**
* sortedArrayToBST()
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
* One way to implement this is to use a recursive process.
*
* The algorithm is as follows:
*
* 1) Get the Middle of the array and make it root.
* 2) Recursively do same for left half and right half.
*      a) Get the middle of left half and make it left child of the root
*         created in step 1.
*      b) Get the middle of right half and make it right child of the
*         root created in step 1.
*
* Time: O(n)
* Space: O(n)
*
* We need to grab every index out of nums and insert into a new BST, so both our
* time and space complexities will be O(n).
*
* @param {number[]} nums
* @return {TreeNode}
*/

import { TreeNode } from '../../../data_structures/tree_node/tree_node';

function sortedArrayToBST(nums) {
  // catch edge case
  if (!nums.length) return null;

  // recursive insert
  const head = helper(nums, 0, nums.length - 1);

  return head;
}

function helper(nums, left, right) {
  // base case
  if (left > right) return null;

  // calculate middle index, new node
  const mid = Math.floor((left + right) / 2);
  const node = new TreeNode(nums[mid]);

  // recurse
  node.left = helper(nums, left, mid - 1);
  node.right = helper(nums, mid + 1, right);

  return node;
}

/**
* sortedArrayToBSTIter()
*
* Solution:
*
* We can also solve this iteratively.
*
* It is very similar to doing a tree pre-order traversal, we use three stacks:
*
* 1) nodes - stores the node we're going to process next
* 2) leftIndex and rightIndex store the range where this node needs to read from the nums.
*
* Time: O(n)
* Space: O(n)
*
* @param {number[]} nums
* @return {TreeNode}
*/

function sortedArrayToBSTIter(nums) {
  // catch edge case
  if (!nums.length) return null;

  // 0 placeholder
  const head = new TreeNode(0);

  // 3 stacks
  const nodes = [head];
  const leftIndex = [0];
  const rightIndex = [nums.length - 1];

  while (nodes.length) {
    const node = nodes.pop();
    const left = leftIndex.pop();
    const right = rightIndex.pop();

    const mid = Math.floor((left + right) / 2);
    node.val = nums[mid];

    if (left <= mid - 1) {
      node.left = new TreeNode(0);
      nodes.push(node.left);
      leftIndex.push(left);
      rightIndex.push(mid - 1);
    }

    if (mid + 1 <= right) {
      node.right = new TreeNode(0);
      nodes.push(node.right);
      leftIndex.push(mid + 1);
      rightIndex.push(right);
    }
  }

  return head;
}

export { sortedArrayToBST, sortedArrayToBSTIter };
