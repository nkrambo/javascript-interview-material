
/**
* Validate BST
*
* Implement a function to check if a binary tree is a valid BST
*/

/**
* Check BST
*
* Solution:
*
* We use the min/max solution here. Consider the condition we must meet to have
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
* Time: O(n)
* Space O(n)
*
* The time cost is easy: for valid binary search trees, we'll have to check all n nodes.
*
* Space is a little more complicated.
*
* Because we're doing a depth first search, nodeAndBoundsStack will hold at most
* d nodes where dd is the depth of the tree (the number of levels in the tree
* from the root node down to the lowest node). So we could say our space cost is O(d).
*
* The more unbalanced the tree gets, the closer d gets to n.
*
* In the worst case, the tree is a straight line of right children from the root
* where every node in that line also has a left child. The traversal will walk
* down the line of right children, adding a new left child to the stack at each step.
* When the traversal hits the rightmost node, the stack will hold half of the n
* total nodes in the tree. Half n is O(n), so our worst case space cost is O(n).
*
* @param {object} tree Binary search tree class to check
* @return {boolean} Returns true if the BST is valid, otherwise returns false
*/

function checkBST(tree) {

  // start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: tree.root, lowerBound: -Infinity, upperBound: Infinity});

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
