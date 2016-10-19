
import { expect } from 'chai';
import isBalanced from '../balanced_tree';
import BinarySearchTree from '../../../class/bst/bst';

describe('isBalanced()', () => {
  it('should return true if tree is balanced', () => {
    const tree1 = new BinarySearchTree;
    tree1.insert(50);
    tree1.insert(30);
    tree1.insert(80);

    expect(isBalanced(tree1)).to.be.true;
  });

  it('should return false if tree is unbalanced', () => {
    const tree2 = new BinarySearchTree();
    tree2.insert(50);
    tree2.insert(20);
    tree2.insert(70);
    tree2.insert(10);
    tree2.insert(15);

    expect(isBalanced(tree2)).to.be.false;
  });
});
