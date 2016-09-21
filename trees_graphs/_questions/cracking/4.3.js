
// Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g, if you have a tree with depth D, you'll have D linked lists)

/**
 * Travels through tree and adds values into a list of linked lists. Each level
 * of tree is represented in a linked list.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(N)
 */

import BinaryTree from 'BT_class';
import LinkedList from 'LinkedList_class';

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


