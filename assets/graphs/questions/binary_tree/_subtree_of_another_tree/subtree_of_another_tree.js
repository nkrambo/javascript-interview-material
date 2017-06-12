
/**
* Subtree of Another Tree
*
* Tags: Binary Tree, DFS, BFS
* Leetcode: 572
*
* Given two non-empty binary trees s and t, check whether tree t has exactly the
* same structure and node values with a subtree of s. A subtree of s is a tree
* consists of a node in s and all of this node's descendants. The tree s could
* also be considered as a subtree of itself.
*
* Example 1:
*
* Given tree s:
*
*                  3
*               ↙     ↘
*             4         5
*           ↙  ↘
*         1     2
*
* Given tree t:
*
*                  4
*               ↙     ↘
*             1         2
*
* Return true, because t has the same structure and node values with a subtree of s.
*
* Example 2:
*
* Given tree s:
*
*                  3
*               ↙     ↘
*             4         5
*           ↙  ↘
*         1     2
*             ↙
*           0
*
* Given tree t:
*
*                  4
*               ↙     ↘
*             1         2
*
* Return false.
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
* isSubtree()
*
* Solution:
*
* One approach would be to compare string representations of traversals of each
* tree. If t is a substring of s, then it's a subtree. An in-order traversal
* would not work. This is because BST's can print the same in-order traversals
* even if their structure is different.
*
* We should use a pre-order traversal. Even here, trees with different structures
* could still have the same pre-order traversal. We can fix that by representing
* NULL nodes with a speacial character like 'X'. As long as we represent these
* nodes, the pre-order traversal of a tree will be unique. Therefore, two trees
* are identical if they have the same pre-order traversal using this method.
*
*
*                  1
*               ↙     ↘
*             2         3
*           ↙  ↘      ↙   ↘
*         4     X    X     X
*       ↙  ↘
*     X     X
*
* Example: 1, 2, 4, X, X, X, 3, X, X
*
* Now consider the subtree problem. If t's pre-order traversal is a substring of
* of s's pre-order traversal, then t's root element must be found in s.
*
* Time: O(n + m)
* Space: O(n + m)
*
* Where n and m are the nodes in s and t, respectively.
*
* @param {object} s parent tree
* @param {object} t subtree to check for in s
* @return {boolean} returns true if the subtree exists, otherwise returns false
*/

// function isSubtree(s, t) {
//   // an empty tree is always a subtree.
//   if (t === null) return true;
//
//   const sString = getOrderString(s);
//   const tString = getOrderString(t);
//
//   return sString.indexOf(tString) !== -1;
// }
//
// function getOrderString(root) {
//   if (root === null) return '';
//
//   let traversal = '';
//   const stack = [root];
//
//   while (stack.length) {
//     const node = stack.pop();
//
//     if (node === null) {
//       traversal = `${traversal}X`;
//     } else {
//       traversal = `${traversal}${node.value}`;
//       stack.push(node.right);
//       stack.push(node.left);
//     }
//   }
//
//   return traversal;
// }

/**
* isSubtreeAlt()
*
* Solution:
*
* An alternative approach would be to traverse s and node match we get from t
* to the root of t, we call matchTree(). The matchTree() method will compare the
* two trees to see if they're identical.
*
* Time: O(n + km)
* Space: O(log(n) + log(m)), better memory, which can be important for scalability
*
* Where n and m are the nodes in s and t, respectively. And k is the number of
* occurences of t's root in s.
*
* @param {object} s parent tree
* @param {object} t subtree to check for in s
* @return {boolean} returns true if the subtree exists, otherwise returns false
*/

// function isSubtreeAlt(s, t) {
//   if (t === null) return true; // an empty tree is always a subtree.
//
//   const queue = [s];
//
//   while (queue.length) {
//     const node = queue.shift();
//
//     if (node.value === t.value) {
//       if (matchTree(node, t)) return true;
//     }
//
//     if (node.left !== null) {
//       queue.push(node.left);
//     }
//
//     if (node.right !== null) {
//       queue.push(node.right);
//     }
//   }
//   return false;
// }
//
// function matchTree(r1, r2) {
//   // nothing left in subtree
//   if (r1 === null && r2 === null) {
//     return true;
//
//   // one tree is empty, no match
//   } else if (r1 === null || r2 === null) {
//     return false;
//
//   // values don't match
//   } else if (r1.value !== r2.value) {
//     return false;
//   }
//
//   return matchTree(r1.left, r2.left) && matchTree(r1.right, r2.right);
// }
//
// export { isSubtree, isSubtreeAlt };
