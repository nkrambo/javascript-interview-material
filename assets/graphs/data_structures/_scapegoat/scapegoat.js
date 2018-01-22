

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

    node.left = null;
    node.right = null;
    this.size += 1;
    const scapegoat = this.findScapegoat(node);
    if (scapegoat === null) return;
    const temp = this.rebalance(scapegoat);

    // assign the correct pointers to and from scapegoat
    scapegoat.left = temp.left;
    scapegoat.right = temp.right;
    scapegoat.value = temp.key;
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
    function flatten(node, nodes) {
      // base case, hit leaf
      if (node === null) return;

      // recurse, in-order DFS
      flatten(node.left, nodes);
      nodes.push(node);
      flatten(node.right, nodes);
    }

    // binary search
    function buildTreeFromSortedList(nodes, start, end) {
      // base case
      if (start > end) return null;

      const mid = Math.ceil(start + ((end - start) / 2));
      const node = Node(nodes[mid].value);

      node.left = buildTreeFromSortedList(nodes, start, mid - 1);
      node.right = buildTreeFromSortedList(nodes, mid + 1, end);

      return node;
    }

    const nodes = [];
    flatten(root, nodes);
    return buildTreeFromSortedList(nodes, 0, nodes.length - 1);
  }

  delete(value) {}
}

export default ScapeGoat;
