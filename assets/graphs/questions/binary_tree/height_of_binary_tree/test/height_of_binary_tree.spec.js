
import { expect } from 'chai';
import height from '../height_of_binary_tree';
import BinaryTree from '../../../../class/binary_tree/binary_tree';
import BST from '../../../../class/bst/bst';

describe('height()', () => {
  it('should return the maximum height of a Binary Tree', () => {
    const test = new BinaryTree();
    test.insert(4);
    test.insert(2);
    test.insert(7);
    test.insert(1);
    test.insert(3);
    test.insert(6);
    test.insert(9);

    expect(height(test.root)).to.equal(3);

    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(12);
    bst.insert(11);
    bst.insert(17);
    bst.insert(24);

    expect(height(bst.root)).to.equal(4);
  });
});
