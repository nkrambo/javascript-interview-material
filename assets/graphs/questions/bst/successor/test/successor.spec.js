
import { expect } from 'chai';
import BinarySearchTree from '../../../../data_structures/bst/bst';
import findNext from '../successor';

describe('findNext()', () => {
  it('should return the successor value', () => {
    const BST = new BinarySearchTree();
    BST.insert(4);
    BST.insert(1);
    BST.insert(2);
    BST.insert(3);
    BST.insert(5);
    BST.insert(6);
    BST.insert(7);

    expect(findNext(BST.find(2)).value).to.equal(3);
    expect(findNext(BST.find(5)).value).to.equal(6);
    expect(findNext(BST.find(1)).value).to.equal(2);
  });
});
