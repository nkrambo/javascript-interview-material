
import { expect } from 'chai';
import BST from '../../../class/bst/bst';
import { inOrder } from '../binary_tree_traversal';

describe('inOrder()', () => {
  it('should return an array of all BST sequences', () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);
    bst.insert(7);

    // in-order
    const order = inOrder(bst.root);
    expect(order[0]).to.equal(1);
    expect(order[1]).to.equal(2);
    expect(order[2]).to.equal(3);
    expect(order[3]).to.equal(4);
    expect(order[4]).to.equal(5);
    expect(order[5]).to.equal(6);
    expect(order[6]).to.equal(7);

    // pass in callback
    const modOrder = inOrder(bst.root, (node) => {
      node.value *= 2;
    });

    expect(modOrder[0]).to.equal(2);
    expect(modOrder[1]).to.equal(4);
    expect(modOrder[2]).to.equal(6);
  });
});
