
/**
* Find Second Largest in BST
*
* Write a function to find the 2nd largest element in a binary search tree.
*
* Solution: We can start by easily finding the largest element, which is always the
* furthest right node. The second largest node will always be the parent of the largest node,
* unless the largest node has a left subtree. Then it will be the largest of this subtree.
* Therefore, these are the 2 cases that we check for in our solution.
*
*/

/**
* Find 2nd largest
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
