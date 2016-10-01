
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
* So now, we can use a type of binary search to return a random node.
*
* Imagine our binary tree is in-order indexed from 0 - n, that is left to right.
* We generate a random index, from 0 to the size of the tree (from the root), then we
* traverse the tree searching for that index and return that node.
*
* Zero based, in-order indexing
*
*                  5
*               ↙     ↘
*             3         7
*           ↙  ↘      ↙   ↘
*         1     4    6     8
*       ↙  ↘
*     0     2
*
*
* Resources:
* https://www.youtube.com/watch?v=nj5jFhglw8U
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
      // size bump each node in branch
      current.size++;

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

  getRandomNode() {
    if (!this.root) return undefined;

    // generate random index
    let index = Math.ceil(Math.random() * this.root.size - 1); // minus 1 for zero based indexing

    // traverse from root
    let current = this.root;
    while (current) {
      // if we're at index
      if (index === this.getSize(current.left)) return current.value;

      // if index < current, go left
      if (index < this.getSize(current.left)) {
        current = current.left;

      // if index > current, go right and subtract left tree and parent node from index
      } else if (index > this.getSize(current.left)) {
        index = (index - this.getSize(current.left)) - 1;
        current = current.right;
      }
    }
  }

  // helper method to count subtree children
  getSize(node) {
    if (node === null) return 0;
    return node.size;
  }
}

export default BinarySearchTree;
