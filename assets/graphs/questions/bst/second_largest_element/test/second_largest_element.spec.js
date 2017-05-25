
import { expect } from 'chai';
import findSecondLargest from '../second_largest_element';
import BinarySearchTree from '../../../../data_structures/bst/bst';

describe('findSecondLargest()', () => {
  it('should return the second largest node, with no largest subtree', () => {
    const BST1 = new BinarySearchTree();
    BST1.insert(100);
    BST1.insert(50);
    BST1.insert(150);
    BST1.insert(110);
    BST1.insert(160);

    expect(findSecondLargest(BST1.root)).to.equal(150);
  });

  it('should return the second largest node, with a largest subtree', () => {
    const BST2 = new BinarySearchTree();
    BST2.insert(100);
    BST2.insert(50);
    BST2.insert(150);
    BST2.insert(110);
    BST2.insert(160);
    BST2.insert(155);
    BST2.insert(158);

    expect(findSecondLargest(BST2.root)).to.equal(158);
  });

  it('should throw an error', () => {
    const BST3 = new BinarySearchTree();
    BST3.insert(100);

    expect(function(){ findSecondLargest(BST3); }).to.throw (Error);
  });
});
