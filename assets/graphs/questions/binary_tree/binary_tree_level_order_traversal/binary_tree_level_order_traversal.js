
/**
* Binary Tree Level Order Traversal
*
* Tags: Tree, BFS
* Leetcode: 102
*
* Given a binary tree, return the level order traversal of its nodes' values.
* (ie, from left to right, level by level).
*
* Example:
*
* Given binary tree [3, 9, 20, null, null, 15, 7]
*
*                  3
*               ↙     ↘
*             9         20
*                     ↙   ↘
*                   15      7
*
* return its level order traversal as:
*
* [
*   [3],
*   [9, 20],
*   [15, 7]
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
* levelOrderTwoQueues()
*
* Solution:
*
* Trees can also be traversed in level-order, where we visit every node on a level
* before going to a lower level. This search is referred to as breadth-first search
* (BFS), as the search tree is broadened as much as possible on each depth before
* going to the next depth.
*
* For example, if we have the following BST an level-order traversal would return:
* [4, 2, 6, 1, 3, 5, 7].
*
*                4
*             ↙     ↘
*           2         6
*        ↙   ↘       ↙   ↘
*      1       3   5       7
*
* The big difference here is that BFS uses a queue instead of a stack.
*
* A level by level traversal is almost trivial, but to then handle each level
* is a little trickier. When we travese by level using a queue, we shifts nodes
* off the queue in a single sequence. How do we then distinguish between when a
* level starts or finishes?
*
* There's 3 approaces to this:
*
* 1. Use 2 queues
* 2. Use 1 queue and a delimiter
* 3. Use 1 queue and a count
*
* We'll go over each of these.
*
* https://www.youtube.com/watch?v=7uG0gLDbhsI&t=658s
*
* First, using 2 queues.
*
* This one is pretty straight forward.
*
* By using 2 queues, we can ensure that we push all the current level nodes into
* a single array and any of it's children (next level down), into our 2nd queue.
*
* Then, we basically do the same with the second queue, pushing all its nodes
* (enqueued from the first queue) into a single array and then enqueuing any
* children nodes back into queue one again... essentially repeating the process
* until all levels have been traversed.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderTwoQueues(root) {
  // check empty input
  if (!root) return [];

  const levels = [];

  // two queues
  const q1 = [root]; // start with the first
  const q2 = [];

  while (q1.length || q2.length) {
    let level = [];

    // push all queue nodes into level
    // push all children nodes into q2
    while (q1.length) {
      const node = q1.shift();
      level.push(node.val);
      if (node.left) q2.push(node.left);
      if (node.right) q2.push(node.right);
    }

    // push level from q1
    // clear out level for q2
    levels.push(level);
    level = [];

    // push all queue nodes into level
    // push all children nodes into q1
    while (q2.length) {
      const node = q2.shift();
      level.push(node.val);
      if (node.left) q1.push(node.left);
      if (node.right) q1.push(node.right);
    }

    // push level from q2
    // but...don't push an empty array
    if (level.length) {
      levels.push(level);
    }
  }

  return levels;
}

/**
* levelOrderDelimiter()
*
* Solution:
*
* In this approach we use a delimiter to separate levels in our traversal sequence.
*
* When we first enqueue our root node, we also place a 'null' value at the back
* of the queue.
*
* We now process our queue normally, adding the current nodes to the level array.
* Note that we pushing the children nodes (next level down) and they will now
* appear after the delimiter node.
*
* When we encounter a delimiter, we know that we have reached the end of the current
* level, so we push our current level, empty it and push another delimiter, so
* that we're ready to process the next level.
*
* It's worth noting, that this whole process is possible because we can trivially
* set the first delimiter after the root node, from there we can process every
* subsequent batch of children nodes.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderDelimiter(root) {
  // check empty input
  if (!root) return [];

  const levels = [];
  let level = [];

  // enqueue root node and initial delimiter
  const queue = [root, null];
  while (queue.length) {
    const node = queue.shift();

    // check if delimiter
    if (node) {
      level.push(node.val);

      // enqueue children nodes (next level down)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

    // hit delimiter node - null
    // push level and empty
    } else {
      levels.push(level);
      level = [];

      // if we another level to process - enqueue another delimiter at the back
      if (queue.length) {
        queue.push(null);
      }
    }
  }

  return levels;
}

/**
* levelOrderCount()
*
* Solution:
*
* This is probably the more complicated approach of them all in my opinion.
*
* We basically keep count of the number of children nodes that we enqueue, from
* the level above, then when we process those children we can decrement and know
* when we have seen all the nodes on that level.
*
* As soon as levelCount becomes 0 then we know that we've traversed all nodes in
* the current level.
*
* Time: O(n)
* Space: O(n)
*
* @param {TreeNode} root
* @return {number[][]}
*/

function levelOrderCount(root) {
  // check empty input
  if (!root) return [];

  const levels = [];
  let level = [];

  const queue = [root];
  let levelCount = 1;
  let currentCount = 0;

  while (queue.length) {
    while (levelCount > 0) {
      const node = queue.shift();
      level.push(node.val);

      // push the left children nodes (next level)
      if (node.left) {
        currentCount += 1;
        queue.push(node.left);
      }

      // push the right children nodes (next level)
      if (node.right) {
        currentCount += 1;
        queue.push(node.right);
      }

      levelCount -= 1;
    }
    levels.push(level);
    level = [];
    levelCount = currentCount;
    currentCount = 0;
  }

  return levels;
}

export { levelOrderTwoQueues, levelOrderDelimiter, levelOrderCount };
