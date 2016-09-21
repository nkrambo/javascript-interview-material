
// Implement a function to check if a binary tree is a valid BST

function bstChecker(treeRoot) {

  // start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

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
