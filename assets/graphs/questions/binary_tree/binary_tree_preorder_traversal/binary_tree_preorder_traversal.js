
/**
* Binary Tree Preorder Traversal
*
* Tags: Stack, Tree
* Leetcode: 144
*
* Given a binary tree, return the preorder traversal of its nodes' values.
*
* For example:
*
* Given binary tree {1, #, 2, 3},
*
*                  1
*                    ↘
*                      2
*                     ↙
*                   3
*
* Return: [1, 2, 3].
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
* preorderTraversal()
*
* Solution:
*
* A pre-order traversal always 'visits' the current node first and then pushes
* current.right and current.left onto the stack. This means that all left children
* nodes are visited before any right children.
*
* For example, if we have the following BST an in-order traversal would return:
* [4, 2, 1, 3, 6, 5, 7].
*
* It is a DFS (self, left, right)
*
* We can see that the root node is the first visited and then the entire left path
* before any right children in the left subtree. Finally, we then visted nodes on
* the root node right subtree in the same manner.
*
* If you know you need to explore the roots before inspecting any leaves, you pick
* pre-order because you will encounter all the roots before all of the leaves.
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[]}
*/

function preorderTraversal(root) {
  const order = [];
  const stack = [];

  // check if input is null, otherwise push root
  if (root !== null) stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    order.push(node.val);

    // traverse right
    if (node.right !== null) {
      stack.push(node.right);
    }

    // traverse left
    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return order;
}

/**
* preorderTraversalRecurse()
*
* Solution:
*
* A simple recursive solution.
*
* Algorithm Preorder(tree)
*   1. Visit the root.
*   2. Traverse the left subtree, i.e., call Preorder(left-subtree)
*   3. Traverse the right subtree, i.e., call Preorder(right-subtree)
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[]}
*/

function preorderTraversalRecurse(root) {
  const order = [];
  helper(root, order);
  return order;
}

function helper(root, order) {
  if (root !== null) {
    order.push(root.val);

    // traverse left
    if (root.left !== null) {
      helper(root.left, order);
    }

    // traverse right
    if (root.right !== null) {
      helper(root.right, order);
    }
  }
}

export { preorderTraversal, preorderTraversalRecurse };
