
/**
* Find Second Largest in BST
*
* Write a function to find the 2nd largest element in a binary search tree.
*/

/**
* Find 2nd largest
*
* Solution:
*
* Our first thought might be to do an in-order traversal of the BST and return
* the second-to-last item. This means looking at every node in the BST. That would
* take O(n) time and O(h) space, where hh is the max height of the tree
* (which is (log n) if the tree is balanced, but could be as much as nn if not).
*
* We can do better.
*
* Let's start by solving a simplified version of the problem and see if we can
* adapt our approach from there. How would we find the largest element in a BST?
*
* Well, the largest node is any valid BST is always the 'rightmost'.
*
* So we can start from the root and just step down right child pointers until we
* can't anymore (until the right child is null). At that point the current node
* is the largest in the whole tree. We can create a helper method for this. findLargest()
*
* So, using our helper to find the largest node, we can now find the second largest
* a little easier. There are a few cases to consider.
*
* 1. If we have a left subtree but not a right subtree, then the current node is
*    the largest overall (the 'rightmost') node. The second largest element must be
*    the largest element in the left subtree. We use our findLargest() function to
*    find the largest in that left subtree!
*
* 2. If we have a right child, but that right child node doesn't have any children,
*    then the right child must be the largest element and our current node must be
*    the second largest element!
*
* 3. Else, we have a right subtree with more than one element, so the largest and
*    second largest are somewhere in that subtree. So we step right.
*
* So simply, this boils down to 2 cases: the largest node has a left subtree or
* it doesn't.
*
* Time: O(h)
* Space: O(1)
*
* We're doing one walk down our BST, which means O(h) time, where h is the height
* of the tree (again, that's O(log n) if the tree is balanced, O(n) otherwise).
*
* @param {object} root Node of BST
* @return {number} Returns the value of the second largest node
*/

function findLargest(root) {
  let current = root;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(root) {
  if (!root.left && !root.right) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let current = root;

  while (current) {
    // case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // case: current is parent of largest, and
    // largest has no children, so
    // current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}

export default findSecondLargest;
