
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

 /*
  * Find
  * @param {number | string value}
  * @return {obect} Returns the found value object. If the tree does not contain
  * the value returns the closest leaf value object, else returns error if the
  * tree is empty.
  */

  find(value) {
    // if empty
    if (this.isEmpty()) {
      new Error('Tree is empty.');
    }

    // start from root
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

  /*
   * Insert
   * @param {number | string value}
   */

  insert(value) {
    // create node
    const node = {
      value,
      left: null,
      right: null,
      parent: null
    };

    // check root
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

  // isEmpty
  isEmpty() {
    return this.root ? false : true;
  }

  // largest
  largest(root) {
    let current = root || this.root;

    while (current) {
      if (current.right === null) return current;
      current = current.right;
    }
  }

  // smallest
  smallest(root) {
    let current = root || this.root;

    while (current) {
      if (current.left === null) return current;
      current = current.left;
    }
  }

  // next
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

  // delete
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

  // range
  range(start, end) {
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

  // DFS
  dfs(root) {
    const stack = [root || this.root];

    while (stack.length) {
      // pop frame
      let node = stack.pop();

      // do work here...
      console.log(node.value);

      // push frame
      if (node.right !== null) {
        stack.push(node.right);
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  }

  // BFS
  bfs(root) {
    const queue = [root || this.root];

    while (queue.length) {
      // dequeue
      let node = queue.shift();

      // do work here...
      console.log(node.value);

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

const BST = new BinarySearchTree();

// BST.insert(50);
// BST.insert(40);
// BST.insert(45);
// BST.insert(43);
// BST.insert(46);
// BST.insert(35);
// BST.insert(30);
// BST.insert(33);
// BST.insert(36);
//
// BST.insert(75);
// BST.insert(90);
// BST.insert(88);
// BST.insert(89);
// BST.insert(84);
// BST.insert(95);
// BST.insert(65);
// BST.insert(85);
// BST.insert(86);
