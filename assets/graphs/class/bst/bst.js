
/**
* Binary Seaarch Tree (BST)
*
* Binary search trees are a fairly common form of tree for their ability to
* efficiently access, search, insert, and delete values all while keeping them
* in a sorted order.
*
* Imagine taking a sequence of numbers:
*
*     1  2  3  4  5  6  7
*
* And turning it into a tree starting from the center.
*
*              4
*           /     \
*        2           6
*      /   \       /  \
*     1     3     5    7
*    -^--^--^--^--^--^--^-
*     1  2  3  4  5  6  7
*
* This is how a binary tree works. Each node can have two children:
*
*     - Left: Less than parent node's value.
*     - Right: Greater than parent node's value.
*
* > Note: In order to make this work all values must be unique in the tree.
*
* This makes the traversal to find a value very efficient. Say we're trying to
* find the number 5 in our tree:
*
*             (4)         <--- 5 > 4, so move right.
*           /     \
*        2         (6)    <--- 5 < 6, so move left.
*      /   \       /  \
*     1     3    (5)   7 <--- We've reached 5!
*
* Notice how we only had to do 3 checks to reach the number 5. If we were to
* expand this tree to 1000 items. We'd go:
*
*   500 -> 250 -> 125 -> 62 -> 31 -> 15 -> 7 -> 3 -> 4 -> 5
*
* Only 10 checks for 1000 items!
*
* The other important thing about binary search trees is that they are similar
* to linked lists in the sense that you only need to update the immediately
* surrounding items when adding or removing a value.
*
*
*                      Access       Search       Insert       Delete
* -----------------------------------------------------------------------------
*            BST      O(log N)     O(log N)     O(log N)     O(log N)
*
*/

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  /**
  * find()
  *
  * @param {*} value to find
  * @return {object} returns the node with value if it exists, otherwise null
  */

  find(value) {

    // if empty
    if (this.isEmpty()) {
      new Error('Tree is empty.');
    }

    // start from root and traverse
    let current = this.root;
    while (current) {

      // if value is less than current, traverse left
      if (value < current.value) {

        if (current.left === null) return current; // return closest leaf
        current = current.left;

      // if value if larger than current, move right
      } else if (value > current.value) {

        if (current.right === null) return current; // return closest leaf
        current = current.right;

      // value === current.value, we found it!
      } else {
        return current;
      }
    }

  }

  /**
  * insert()
  *
  * @param {*} value to insert
  * @return {void}
  */

  insert(value) {

    // create node
    const node = {
      value,
      left: null,
      right: null,
      parent: null
    };

    // check if root is empty
    if (this.root === null) {
      this.root = node;
      return;
    }

    // search our tree for closest leaf
    const leaf = this.find(value);

    // check for duplicate
    if (leaf.value === value) {
      throw new Error('Tree already contains that value, cannot add duplicates.');
    }

    // attach parent node
    node.parent = leaf;

    // if value is larger than leaf value, insert right
    if (value > leaf.value) {
      leaf.right = node;

    // if value is larger than leaf value, insert right
    } else if (value < leaf.value) {
      leaf.left = node;
    }
  }

  /**
  * isEmpty()
  *
  * @return {boolean} returns true if the tree is empty, otherwise false
  */

  isEmpty() {
    return this.root ? false : true;
  }

  /**
  * largest()
  *
  * The largest value in a BST will always be the furthest right value. So, we
  * simply traverse as far right as we can.
  *
  * @param {object} root node of BST
  * @return {object} returns the node with largest value
  */

  largest(root) {
    let current = root || this.root;

    while (current) {
      if (current.right === null) return current;
      current = current.right;
    }
  }

  /**
  * smallest()
  *
  * The smallest value in a BST will always be the furthest left value. So, we
  * simply traverse as far left as we can.
  *
  * @param {object} root node of BST
  * @return {object} returns the node with smallest value
  */

  smallest(root) {
    let current = root || this.root;

    while (current) {
      if (current.left === null) return current;
      current = current.left;
    }
  }

  /**
  * next()
  *
  * If our precessor value has a right child, then the 'next' value will always
  * be the smallest value of that sub-tree, the furthest left.
  *
  * If our precessor value has no right child we traverse upward until we find
  * the first ancestor with a larger value.
  *
  * This is where having access to 'parent' nodes is handy.
  *
  * @param {*} value of precessor
  * @return {object} returns object of successor node if exists, otherwise null
  */

  next(value) {
    let node = this.find(value);

    // if we have a right child, get the smallest of that sub-tree
    if (node.right !== null) {
      return this.smallest(node.right);

    // there's no right child, we go up until we find an ancestor with a
    // value larger than node
    } else {
      while (node) {
        if (node.parent.value > node.value) return node;
        node = node.parent;
      }
    }
  }

  /**
  * delete()
  *
  * @param {*} value to delete
  * @return {string} returns a delete confirmation
  */

  delete(value) {

    // grab node
    let node = this.find(value);

    // check to see if we got actual node
    if (node.value !== value) {
      throw new Error('Value does not exist.');
    }

    // if no right node
    if (node.right === null) {

      // promote node.left if it exists
      if (node.left) {
        node.left.parent = node.parent;
        node = node.left;

      // remove node
      } else {
        node.parent.left = null;
      }

    } else {
      let next = this.next(node.value);

      // replace node by next
      node.value = next.value;

      // if next.right, promote right
      if (next.right) {
        next.right.parent = next.parent;
        next = next.right;
      }
    }

    return 'Node removed';
  }

  /**
  * range()
  * @todo failing test cases...
  *
  * Gets a range of values in the BST and returns them in an array.
  *
  * @param {*} start value of range
  * @param {*} end value of range
  * @return {array} returns an array of nodes within range of start - end
  */

  range(start, end) {

    // check for range error
    const smallest = this.smallest();
    const largest = this.largest();
    if (start < smallest.value || end > largest.value) {
      throw new Error('Parameters outside of tree range.');
    }

    // store our range
    const results = [];

    // traverse from start
    let current = this.find(start);

    while (current.value <= end) {
      results.push(current.value);
      current = this.next(current.value);
    }

    return results;
  }

  /**
  * dfs()
  *
  * Depth first search, uses a stack to process nodes.
  *
  * @param {object} root node of BST
  * @param {function} fn callback
  * @return {void} traverse BST depth first
  */

  dfs(root, fn) {
    const stack = [root || this.root];

    while (stack.length) {
      // pop frame
      let node = stack.pop();

      // do work here...
      fn(node);

      // push frame
      if (node.right !== null) {
        stack.push(node.right);
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  }

  /**
  * bfs()
  *
  * Breadth first search, level search, uses a queue to process nodes.
  *
  * @param {object} root node of BST
  * @param {function} fn callback
  * @return {void} traverse BST breadth first
  */

  bfs(root, fn) {
    const queue = [root || this.root];

    while (queue.length) {

      // dequeue
      let node = queue.shift();

      // do work here...
      fn(node);

      // enqueue
      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}

export default BinarySearchTree;
