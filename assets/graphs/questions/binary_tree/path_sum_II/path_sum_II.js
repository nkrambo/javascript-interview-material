
/**
* Path Sum II
*
* Tags: Tree, DFS
* Leetcode: 113
*
* Given a binary tree and a sum, find all root-to-leaf paths where each path's
* sum equals the given sum.
*
* Example:
*
* Given the below binary tree and sum = 22,
*
*                  5
*               ↙     ↘
*             4         8
*           ↙         ↙   ↘
*         11        13      4
*       ↙    ↘           ↙    ↘
*     7        2       5        1
*
* Return:
*
* [
*   [5, 4, 11, 2],
*   [5, 8, 4, 5],
* ]
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
* pathSum()
*
* Solution:
*
* This is pretty similiar to the 'path sum' problem.
*
* We solve this recursively again by subtracting the current node's value from the
* the sum as we traverse down a path. When we hit a leaf node, we check to see if
* the sum equals the current node. If so, we found a sum path, otherwise if we hit
* a non-summing leaf we just return and continue exploring other paths.
*
* We use a helper function for the recursion because we need to track a 'paths'
* array, that will hold our final results, and also a 'path' to track the current
* path.
*
* We have to push each node into the path so that we can push that path if we find
* a path sum. Note: we're using the ...spread operator to create a new copy
* of the path array into our results. If we just pushed it, we push a reference
* and the path would be modified by the path.pop() call. We don't want that.
*
* Finally, we remove nodes when the stack un-winds.
*
* https://www.youtube.com/watch?v=Jg4E4KZstFE
*
* Time: O(n)
* Space: O(log n)
*
* @param {TreeNode} root
* @param {number} sum
* @return {number[][]}
*/

function pathSum(root, sum) {
  const paths = [];
  const path = [];
  helper(root, sum, paths, path);
  return paths;
}

function helper(root, sum, paths, path) {
  // base case
  if (root === null) return;

  // add to path
  path.push(root.val);

  // found leaf AND valid sum path
  if (!root.left && !root.right && sum === root.val) {
    // deep copy using spread operator, or [].slice(0)
    // otherwise our path.pop() will overwrite our result
    paths.push([...path]);
  }

  // recurse left and right
  helper(root.left, sum - root.val, paths, path);
  helper(root.right, sum - root.val, paths, path);

  // remove nodes when we un-wind the stack
  path.pop();
}

export default pathSum;
