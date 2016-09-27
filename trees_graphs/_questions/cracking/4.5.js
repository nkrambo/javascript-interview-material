
/**
 * Validate BST
 *
 * Implement a function to check if a binary tree is a valid BST
 *
 * Solution: We use the min/max solution here. Consider the condition we must meet to have
 * a valid BST. That is, all left nodes must be less than the current node, which must be
 * less than all the right nodes. We can use this to iterate through the tree and pass down
 * the min abd max values and verify this condition.
 *
 * We start with the root, which has a min = NULL and max = NULL. We branch left, checking
 * that these nodes are within the range of min = NULL, max = root.value. Then we branch right
 * checking that nodes are within min = root.value, max = NULL.
 *
 * We then proceed through the tree, updating the max as we go left and updating the min as
 * we go right. If anything fails these checks, we stop and return false.
 *
 */

/**
 * Check BST
 *
 * Time: O(n) - Any algorithm must touch all nodes, so this is the best we can do
 *
 * @param {object} tree Binary search tree class to check
 * @return {boolean} Returns true if the BST is valid, otherwise returns false
 */

function checkBST(tree) {

  // start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: tree.root, lowerBound: null, upperBound: null});

  // depth-first traversal
  while (nodeAndBoundsStack.length) {
    const nodeAndBounds = nodeAndBoundsStack.pop();
    const node = nodeAndBounds.node;
    const lowerBound = nodeAndBounds.lowerBound;
    const upperBound = nodeAndBounds.upperBound;

    // if this node is invalid, we return false right away
    if (node.value < lowerBound || node.value > upperBound) {
      return false;
    }

    if (node.left) {
      // this node must be less than the current node
      nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
    }

    if (node.right) {
      // this node must be greater than the current node
      nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
    }
  }

  // if none of the nodes were invalid, return true
  // (at this point we have checked all nodes)
  return true;
}

export default checkBST;
