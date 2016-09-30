
/**
* Random Node
*
* Design and implement an algorithm which returns a random node from a binary
* search tree class. All nodes should be equally likely to be chosen.
*
* Solution:
* We could do something like keep an array of nodes and randomly select
* from here. However, then we have to track inserts, deletes etc... in O(n) time.
* We can do better.
*
* We could traverse randomly down the tree. The hard part with this approach is making sure that
* the probabilites of choosing each node are the same. Essentially, we need to return each
* random node with 1/n probability, n being the number of nodes in the tree.
*
* This get's a little tricky because whether we should randomly traverse left or right
* at each node is not 50/50. Even in a balanced tree, the number of nodes on each side might
* not be equal.
*
* When you think about it, the odds of picking something from either the left or right branch
* must be the sum of each probability. That is for example, the odds of going left should be
* LEFT_SIZE * 1/n, same for the right.
*
* This means that, at each node, we must know the size of the left and right. We can track size
* information on our class insert and delete methods, with a size property on each node.
*
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create node
    const node = {
      value,
      left: null,
      right: null,
      size: 1
    };

    if (this.root === null) {
      this.root = node;
      return;
    }

    // start at root
    let current = this.root;

    while (current) {
      node.size++;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        }
        current = current.left;

      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;

      // value === current, cannot insert duplicates
      } else {
        throw new Error('Cannot insert duplicate values');
      }
    }
    return;
  }

  /**
  * Get random node
  * Time - O(log n)
  *
  * @return {object} Returns a node object
  */

  getRandomNode() {}
}

export default BinarySearchTree;
