
/**
* Binary Tree In-Order Traversal
*
* Tags: Tree, Hash Table, Stack
* Leetcode: 94
*
* Given a binary tree, return the inorder traversal of its nodes' values.
*
* Example:
*
* Given: [1, null, 2, 3]
*
*          1
*            ↘
*              2
*            ↙
*          3
*
* Return: [1, 3, 2]
*
* Note:
*
* Recursive solution is trivial, could you do it iteratively?
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
* inorderTraversal()
*
* Solution:
*
* In-order traversal means to 'visit' the left branch, then the current node,
* and finally, the right branch. This is the most common traversal used.
*
* It's a type of DFS that looks simply like this:
*
* (DFS: left, self, right)
*
* In a BST, in-order traversal retrieves data in sorted order, i.e left to right.
*
* For example, if we have the following BST an in-order traversal would return
* all numbers are 'in-order' left to right.
*
*                4
*             ↙     ↘                (left to right)
*           2         6           [1, 2, 3, 4, 5, 6, 7]
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* If you know that the tree has an inherent sequence in the nodes, and you want
* to flatten the tree back into its original sequence, than an in-order traversal
* should be used. The tree would be flattened in the same way it was created. A
* pre-order or post-order traversal might not unwind the tree back into the sequence
* which was used to create it.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[]}
*/

function inorderTraversal(root) {
  const order = [];
  const stack = [];
  let node = root;

  while (stack.length || node !== null) {
    // traverse left
    if (node !== null) {
      stack.push(node);
      node = node.left;

    // otherwise, current visit node and push right
    } else {
      node = stack.pop();
      order.push(node.val);
      node = node.right;
    }
  }

  return order;
}

/**
* inorderTraversalRecurse()
*
* Solution:
*
* A simple recursive solution, using a helper function.
*
* Algorithm Inorder(tree)
*   1. Traverse the left subtree, i.e., call Inorder(left-subtree)
*   2. Visit the root.
*   3. Traverse the right subtree, i.e., call Inorder(right-subtree)
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[]}
*/

function inorderTraversalRecurse(root) {
  const order = [];
  helper(root, order);
  return order;
}

function helper(root, order) {
  if (root !== null) {
    // go left
    if (root.left !== null) {
      helper(root.left, order);
    }

    // push self val
    order.push(root.val);

    // go right
    if (root.right !== null) {
      helper(root.right, order);
    }
  }
}

export { inorderTraversal, inorderTraversalRecurse };
