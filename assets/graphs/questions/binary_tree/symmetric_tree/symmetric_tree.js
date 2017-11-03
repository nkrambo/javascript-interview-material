
/**
* Symmetric Tree
*
* Tags: Tree, DFS, BFS
* Leetcode: 101
*
* Given a binary tree, check whether it is a mirror of itself (ie, symmetric
* around its center).
*
* Example:
*
* This binary tree [1, 2, 2, 3, 4, 4, 3] is symmetric:
*
*                  1
*               ↙     ↘
*             2         2
*           ↙  ↘      ↙   ↘
*         3     4    4     3
*
* But the following [1, 2, 2, null, 3, null, 3] is not:
*
*                  1
*               ↙     ↘
*             2         2
*              ↘          ↘
*               3          3
*
* Note:
*
* Bonus points if you could solve it both recursively and iteratively.
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
* isSymmetricRecurse()
*
* Solution:
*
* A tree is symmetric if the left subtree is a mirror reflection of the right subtree.
*
* Therefore, the question is: when are two trees a mirror reflection of each other?
*
* Two trees are a mirror reflection of each other if:
*
* 1. Their two roots have the same value.
*
* 2. The right subtree of each tree is a mirror reflection of the left subtree
*    of the other tree.
*
* This is like a person looking at a mirror. The reflection in the mirror has the
* same head, but the reflection's right arm corresponds to the actual person's
* left arm, and vice versa.
*
*         (r)       |       (r)
*       ↙     ↘     |     ↙     ↘
*     P         Q   |   Q         P
*                   |
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {boolean}
*/

function isSymmetricRecurse(root) {
  return helper(root, root);
}

function helper(t1, t2) {
  // base 1 - hit leaf nodes of both mirror trees, must have fell through alright
  if (!t1 && !t2) return true;

  // base 2 - if only one is a leaf node, then the trees must not mirror
  if (!t1 || !t2) return false;

  return (t1.val === t2.val) // check if current values are equal, will return false if not
    && helper(t1.right, t2.left) // compare the right-hand of the left with the left-hand of the right
    && helper(t1.left, t2.right); // compare the left-hand of the left with the right-hand of the right
}

/**
* isSymmetricIterative()
*
* Solution:
*
* Instead of recursion, we can also use iteration with the aid of a queue. Each
* two consecutive nodes in the queue should be equal, and their subtrees a mirror
* of each other. Initially, the queue contains root and root. Then the algorithm
* works similarly to BFS, with some key differences. Each time, two nodes are extracted
* and their values compared. Then, the right and left children of the two nodes
* are inserted in the queue in opposite order. The algorithm is done when either
* the queue is empty, or we detect that the tree is not symmetric (i.e. we pull
* out two consecutive nodes from the queue that are unequal).
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {boolean}
*/

function isSymmetricIterative(root) {
  const queue = [root, root];

  while (queue.length) {
    const t1 = queue.shift();
    const t2 = queue.shift();
    if (!t1 && !t2) continue;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;

    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }

  return true;
}

export { isSymmetricRecurse, isSymmetricIterative };
