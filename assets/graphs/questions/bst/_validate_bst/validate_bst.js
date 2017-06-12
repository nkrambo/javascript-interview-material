
/**
* Validate BST
*
* Tags: BST, DFS
* Leetcode: 98
*
* Given a binary tree, determine if it is a valid binary search tree (BST).
*
* Assume a BST is defined as follows:
*
* 1. The left subtree of a node contains only nodes with keys less than the
*    node's key.
*
* 2. The right subtree of a node contains only nodes with keys greater than the
*    node's key.
*
* 3. Both the left and right subtrees must also be binary search trees.
*
* Example 1:
*
*        2
*     ↙     ↘
*   1         3
*
* Binary tree [2, 1, 3], return true.
*
* Example 2:
*
*        1
*     ↙     ↘
*   2         3
*
* Binary tree [1, 2, 3], return false.
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
* isValidBST()
*
* Solution:
*
* We use the min/max solution here. Consider the condition we must meet to have
* a valid BST. That is, all left nodes must be less than the current node, which must be
* less than all the right nodes. We can use this to iterate through the tree and pass down
* the min and max values and verify this condition.
*
* We start with the root, which has a min = -Infinity and max = Infinity. We branch left, checking
* that these nodes are within the range of min = -Infinity, max = root.value. Then we branch right
* checking that nodes are within min = root.value, max = Infinity.
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
* d nodes where d is the depth of the tree (the number of levels in the tree
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
* @param {object} root BST node
* @return {boolean} Returns true if the BST is valid, otherwise returns false
*/

// function isValidBST(root) {
//   // start at the root, with an arbitrarily low lower bound
//   // and an arbitrarily high upper bound
//   const stack = [{
//     node: root,
//     lower: -Infinity,
//     upper: Infinity,
//   }];
//
//   // depth-first traversal
//   while (stack.length) {
//     const pop = stack.pop();
//     const { node, lower, upper } = pop;
//
//     // if this node is invalid, we return false right away
//     if (node.value < lower || node.value > upper) return false;
//
//     if (node.left) {
//       // this node must be less than the current node
//       stack.push({
//         node: node.left,
//         lower,
//         upper: node.value,
//       });
//     }
//
//     if (node.right) {
//       // this node must be greater than the current node
//       stack.push({
//         node: node.right,
//         lower: node.value,
//         upper,
//       });
//     }
//   }
//
//   // if none of the nodes were invalid, return true
//   // (at this point we have checked all nodes)
//   return true;
// }
//
// export default isValidBST;
