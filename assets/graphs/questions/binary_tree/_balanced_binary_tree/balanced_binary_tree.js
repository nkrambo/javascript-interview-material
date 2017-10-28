
/**
* Balanced Binary Tree
*
* Tags: Binary Tree, DFS
* Leetcode: 110
*
* Given a binary tree, determine if it is height-balanced.
*
* For this problem, a height-balanced binary tree is defined as a binary tree in
* which the depth of the two subtrees of every node never differ by more than 1.
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
* Is balanced
*
* Solution:
*
* We do a depth-first walk through our tree, keeping track of the depth as we go.
* When we find a leaf, we throw its depth into an array of depths if we haven't
* seen that depth already.
*
* Each time we hit a leaf with a new depth, there are two ways that our tree might
* now be unbalanced:
*
* 1. There are more than 2 different leaf depths
* 2. There are exactly 2 leaf depths and they are more than 1 apart.
*
* Why are we doing a depth-first walk and not a breadth-first one? You could make
* a case for either. We chose depth-first because it reaches leaves faster, which
* allows us to short-circuit earlier in some cases.
*
* Time: O(n)
* Space: O(n)
*
* For time, the worst case is the tree is balanced and we have to iterate over all
* n nodes to make sure.
*
* For the space cost, we have two data structures to watch: depths and nodes.
* depths will never hold more than three elements, so we can write that off as O(1).
*
* Nodes will hold at most d nodes where dd is the depth of the tree (the number
* of levels in the tree from the root node down to the lowest node). So we could
* say our space cost is O(d).
*
* The more unbalanced the tree gets, the closer d gets to n. In the worst case,
* the tree is a straight line of right children from the root where every node in
* that line also has a left child. The traversal will walk down the line of right
* children, adding a new left child to nodes at each step. When the traversal hits
* the rightmost node, nodes will hold half of the nn total nodes in the tree.
* Half n is O(n), so our worst case space cost is O(n).
*
* @param {object} root tree node
* @return {boolean} Returns true if the tree is balanced, otherwise returns false
*/

function isBalanced(root) {
  // we short-circuit as soon as we find more than 2
  const depths = [];

  // stack, DFS
  const nodes = [];
  nodes.push([root, 0]);

  while (nodes.length) {
    // pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    // case: we found a leaf
    if (!node.left && !node.right) {
      // we only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // two ways we might now have an unbalanced tree:
        // 1) more than 2 different leaf depths
        // 2) 2 leaf depths that are more than 1 apart
        if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }

    // push onto stack
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }

      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

export default isBalanced;
