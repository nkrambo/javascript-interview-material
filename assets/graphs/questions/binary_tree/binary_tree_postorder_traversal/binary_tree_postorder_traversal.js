
/**
* Binary Tree Postorder Traversal
*
* Tags: Stack, Tree
* Leetcode: 145
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
* Return: [3, 2, 1].
*
* Note: Recursive solution is trivial, could you do it iteratively?
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
* postorderTraversal()
*
* Solution:
*
* Post-order traversal is the most complicated method to traverse of these approaches.
* Basically, we defer visiting a node until we hit a leaf node and then we work
* our way back up the tree toward the root.
*
* It is a DFS (left, right, self)
*
* If you know you need to explore all the leaves before any nodes, you select
* post-order because you don't waste any time inspecting roots in search for leaves.
*
* For example, if we have the following BST an post-order traversal would return:
* [1, 3, 2, 5, 7, 6, 4].
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

function postorderTraversal(root) {
  const order = [];
  const stack = [];
  let lastNodeVisited = null;
  let node = root;

  while (stack.length || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      const peek = stack[stack.length - 1];

      // if right child exists and traversing node
      // from left child, then move right
      if (peek.right !== null && lastNodeVisited !== peek.right) {
        node = peek.right;
      } else {
        order.push(peek.val);
        lastNodeVisited = stack.pop();
      }
    }
  }

  return order;
}

/**
* postorderTraversalRecurse()
*
* Solution:
*
* A recursive solution.
*
* Algorithm Postorder(tree)
*   1. Traverse the left subtree, i.e., call Postorder(left-subtree)
*   2. Traverse the right subtree, i.e., call Postorder(right-subtree)
*   3. Visit the root.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[]}
*/

function postorderTraversalRecurse(root) {
  const order = [];
  helper(root, order);
  return order;
}

function helper(root, order) {
  if (root !== null) {
    // traverse left
    if (root.left !== null) {
      helper(root.left, order);
    }

    // traverse right
    if (root.right !== null) {
      helper(root.right, order);
    }

    order.push(root.val);
  }
}

export { postorderTraversal, postorderTraversalRecurse };
