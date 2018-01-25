

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class ScapeGoat {
  constructor() {
    this.root = null;
    this.size = 0;
    this.maxSize = 0;
  }

  insert(value) {
    const node = new Node(value);

    // base case - emoty in tree
    if (this.root === null) {
      this.root = node;
      return;
    }

    // search for leaf position
    let currentNode = this.root;
    let potentialParent;
    while (currentNode !== null) {
      potentialParent = currentNode;

      // traverse left or right
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    // found leaf - assign parents and siblings to the new node
    node.parent = potentialParent;
    if (value < node.parent.value) {
      node.parent.left = node;
    } else {
      node.parent.right = node;
    }

    // bump size
    this.size += 1;

    // find scapegoat
    const scapegoat = this.findScapegoat(node);
    if (scapegoat === null) return;
    const temp = this.rebalance(scapegoat);

    // assign the correct pointers to and from scapegoat
    scapegoat.left = temp.left;
    scapegoat.right = temp.right;
    scapegoat.value = temp.value;
    scapegoat.left.parent = scapegoat;
    scapegoat.right.parent = scapegoat;
  }

  findScapegoat(node) {
    if (node === this.root) return null;

    while (this.isBalancedAtNode(node)) {
      if (node === this.root) return null;
      node = node.parent;
    }

    return node;
  }

  isBalancedAtNode(node) {
    return Math.abs(this.sizeOfSubtree(node.left) - this.sizeOfSubtree(node.right)) <= 1;
  }

  sizeOfSubtree(node) {
    // base case, hit leaf
    if (node === null) return 0;

    // recurse
    return 1 + this.sizeOfSubtree(node.left) + this.sizeOfSubtree(node.right);
  }

  rebalance(root) {
    const nodes = [];
    this.flatten(root, nodes);
    return this.buildTreeFromSortedList(nodes, 0, nodes.length - 1);
  }

  // binary search
  buildTreeFromSortedList(nodes, start, end) {
    // base case
    if (start > end) return null;

    const mid = Math.ceil(start + ((end - start) / 2));
    const node = new Node(nodes[mid].value);

    node.left = this.buildTreeFromSortedList(nodes, start, mid - 1);
    node.right = this.buildTreeFromSortedList(nodes, mid + 1, end);

    return node;
  }

  // flatten into list
  flatten(node, nodes) {
    // base case, hit leaf
    if (node === null) return;

    // recurse, in-order DFS
    this.flatten(node.left, nodes);
    nodes.push(node);
    this.flatten(node.right, nodes);
  }

  delete(value) {}
}

export default ScapeGoat;
