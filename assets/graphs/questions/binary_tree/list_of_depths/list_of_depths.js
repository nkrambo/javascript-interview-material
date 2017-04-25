
/**
* List of Depths
*
* Tags: Binary Tree, DFS
*
* Given a binary tree, design an algorithm which creates a linked list of all the nodes
* at each depth (e.g, if you have a tree with depth D, you'll have D linked lists).
*/

/**
* createDepthLinkList()
*
* Solution:
*
* At first glance we might think that this problem requires a level-by-level traversal
* (BFS), this isn't actually necessary. We can traverse the graph in any way we like,
* provided we know which level we're on as do so.
*
* We will use a BFS however, keeping track of depths and creating a new list for
* each new depth we encounter and pushing it onto the results.
*
* Time: O(n)
* Space: O(n)
*
* @param {object} tree object
* @return {array} returns an array of linked lists representing nodes at each depth
*/

import LinkedList from '../../../../linked_lists/class/linked_list/linked_list';

function createDepthLinkList(tree) {
  const result = [];
  const depths = [];

  // queue
  const nodes = [[tree.root, 0]];

  while (nodes.length) {

    // dequeue
    const nodePair = nodes.shift();
    const node = nodePair[0];
    const depth = nodePair[1];

    // if new depth
    if (depths.indexOf(depth) < 0) {
      // add depth
      depths.push(depth);

      // new list
      const level = new LinkedList();
      level.add(node.value, 0);
      result.push(level);

    } else {
      result[depth].add(node.value, 0);
    }

    // enqueue
    if (node.right !== null) {
      nodes.push([node.right, depth + 1]);
    }

    if (node.left !== null) {
      nodes.push([node.left, depth + 1]);
    }
  }

  return result;
}

export default createDepthLinkList;
