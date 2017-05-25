
import { expect } from 'chai';
import checkBST from '../valid_bst';
import BinarySearchTree from '../../../../data_structures/bst/bst';
import BinaryTree from '../../../../data_structures/binary_tree/binary_tree';

describe('checkBST()', () => {
  it('should return true if it is a valid BST', () => {
    const BST = new BinarySearchTree();
    BST.insert(100);
    BST.insert(50);
    BST.insert(150);
    BST.insert(25);
    BST.insert(125);

    expect(checkBST(BST)).to.be.true;
  });

  it('should return false if it is not a valid BST', () => {
    const binaryTree = new BinaryTree;
    binaryTree.insert(100);
    binaryTree.insert(150);
    binaryTree.insert(15);
    binaryTree.insert(150);
    binaryTree.insert(250);

    expect(checkBST(binaryTree)).to.be.false;
  });
});
