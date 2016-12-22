
import { expect } from 'chai';
import BinaryTree from '../binary_tree';

const bt = new BinaryTree();
bt.insert(5);
bt.insert(-3);
bt.insert(6);
bt.insert(0);
bt.insert(1);

describe('BinaryTree', () => {
  it('should create a binary tree with BFS insertions', () => {
    expect(bt.root.value).to.equal(5);
    expect(bt.root.left.value).to.equal(-3);
    expect(bt.root.right.value).to.equal(6);
    expect(bt.root.right.right).to.equal(null);
    expect(bt.root.left.left.value).to.equal(0);
    expect(bt.root.left.right.value).to.equal(1);
  });
});
