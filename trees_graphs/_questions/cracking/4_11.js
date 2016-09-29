
/**
* Random Node
*
* Design and implement an algorithm which returns a random node from a binary
* search tree class. All nodes should be equally likely to be chosen.
*
* Solution:
*
*
*
*
*
*
*/

/**
* Get random node
*
* @param {object} treeRoot Tree class for a node to be selected randomly
* @return {object} Returns a node object
*/

function getRandomNode(treeRoot) {
  if (!this.root) {
    return undefined;
  }

  let idx = Math.ceil(Math.random() * this.root.size),
    node = this.root;
  while (idx > 0) {
    if (node.left) {
      if (idx === node.left.size + 1) {
        return node;
      }
      else if (idx <= node.left.size) {
        node = node.left;
      }
      else if (node.right) {
        idx -= node.left.size + 1;
        node = node.right;
      }
    }
    else {
      if (idx <= 1) {
        return node;
      }
      else if (node.right) {
        --idx;
        node = node.right;
      }
    }
  }

  throw new Error('Should never reach this code, this is just an assertion that we dont');
}

  export default getRandomNode;
