
/**
* List of Depths
*
* Given a binary tree, design an algorithm which creates a linked list of all the nodes
* at each depth (e.g, if you have a tree with depth D, you'll have D linked lists).
*
* Solution: We do a BFS, keeping track of depths and creating a new list for each new
* depth we encounter and pushing it onto the results.
*
*/

/**
* Create list of depths
*
* Time: O(n)
*
* @param {object} tree Takes a binary tree class
* @return {array} Returns an array of linked lists
*/

import LinkedList from '../../../linked_lists/classes/linked_list/linked_list';

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
