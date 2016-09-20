
class Tree {
  constructor() {
    this.root = null;
  }

  traverse(callback) {
    // We'll define a walk function that we can call recursively on every node
    // in the tree.
    function walk(node) {
      // First call the callback on the node.
      callback(node);
      // Then recursively call the walk function on all of its children.
      node.children.forEach(walk);
    }

    // Now kick the traversal process off.
    walk(this.root);
  }

  insert(value, parentValue) {
    const node = {
      value: value,
      children: []
    };

    // If there is no root, set node.
    if (this.root === null) {
      this.root = node;
      return;
    }

    // Otherwise traverse the entire tree and find a node with a matching value
    // and add the new node to its children.
    this.traverse(function(node) {
      if (node.value === parentValue) {
        node.children.push(node);
      }
    });
  }
}

const myTree = new Tree();
