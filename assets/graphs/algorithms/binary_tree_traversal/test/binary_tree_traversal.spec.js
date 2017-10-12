
import BST from '../../../data_structures/bst/bst';
import {
  inOrder,
  inOrderRecurse,
  preOrder,
  preOrderRecurse,
  postOrder,
  postOrderRecurse,
  levelOrder,
} from '../binary_tree_traversal';

describe('inOrder()', () => {
  test('should return an array of all binary tree nodes in-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    // in-order
    // [1, 2, 3, 4, 5, 6, 7]
    const order = inOrder(bst.root);
    expect(order[0]).toBe(1);
    expect(order[1]).toBe(2);
    expect(order[2]).toBe(3);
    expect(order[3]).toBe(4);
    expect(order[4]).toBe(5);
    expect(order[5]).toBe(6);
    expect(order[6]).toBe(7);

    // pass in callback
    // multiply node value by 2
    const modOrder = inOrder(bst.root, (node) => {
      node.value *= 2;
    });

    expect(modOrder[0]).toBe(2);
    expect(modOrder[1]).toBe(4);
    expect(modOrder[2]).toBe(6);
  });
});

describe('inOrderRecurse()', () => {
  test('should return an array of all binary tree nodes in-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    const order = [];
    inOrderRecurse(bst.root, order);

    expect(order[0]).toBe(1);
    expect(order[1]).toBe(2);
    expect(order[2]).toBe(3);
  });
});

describe('preOrder()', () => {
  test('should return an array of all binary tree nodes pre-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    // pre-order
    // [4, 2, 1, 3, 6, 5, 7]
    const order = preOrder(bst.root);
    expect(order[0]).toBe(4);
    expect(order[1]).toBe(2);
    expect(order[2]).toBe(1);
    expect(order[3]).toBe(3);
    expect(order[4]).toBe(6);
    expect(order[5]).toBe(5);
    expect(order[6]).toBe(7);

    // pass in callback
    const modOrder = preOrder(bst.root, (node) => {
      node.value *= 2;
    });

    expect(modOrder[0]).toBe(8);
    expect(modOrder[1]).toBe(4);
    expect(modOrder[2]).toBe(2);
  });
});

describe('preOrderRecurse()', () => {
  test('should return an array of all binary tree nodes pre-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    const order = [];
    preOrderRecurse(bst.root, order);

    expect(order[0]).toBe(4);
    expect(order[1]).toBe(2);
    expect(order[2]).toBe(1);
  });
});

describe('postOrder()', () => {
  test('should return an array of all binary tree nodes post-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    // post-order
    // [1, 3, 2, 5, 7, 6, 4]
    const order = postOrder(bst.root);
    expect(order[0]).toBe(1);
    expect(order[1]).toBe(3);
    expect(order[2]).toBe(2);
    expect(order[3]).toBe(5);
    expect(order[4]).toBe(7);
    expect(order[5]).toBe(6);
    expect(order[6]).toBe(4);

    // pass in callback
    const modOrder = postOrder(bst.root, (node) => {
      node.value *= 2;
    });

    expect(modOrder[0]).toBe(2);
    expect(modOrder[1]).toBe(6);
    expect(modOrder[2]).toBe(4);
  });
});

describe('postOrderRecurse()', () => {
  test('should return an array of all binary tree nodes post-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    const order = [];
    postOrderRecurse(bst.root, order);

    expect(order[0]).toBe(1);
    expect(order[1]).toBe(3);
    expect(order[2]).toBe(2);
  });
});

describe('levelOrder()', () => {
  test('should return an array of all binary tree nodes level-order', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    // level-order
    // [4, 2, 6, 1, 3, 5, 7]
    const order = levelOrder(bst.root);
    expect(order[0]).toBe(4);
    expect(order[1]).toBe(2);
    expect(order[2]).toBe(6);
    expect(order[3]).toBe(1);
    expect(order[4]).toBe(3);
    expect(order[5]).toBe(5);
    expect(order[6]).toBe(7);

    // pass in callback
    const modOrder = levelOrder(bst.root, (node) => {
      node.value *= 2;
    });

    expect(modOrder[0]).toBe(8);
    expect(modOrder[1]).toBe(4);
    expect(modOrder[2]).toBe(12);
  });
});
