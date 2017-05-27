
import { expect } from 'chai';
import BinarySearchTree from '../bst';

describe('BinarySearchTree', () => {
  it('should insert a value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);

    expect(BST.root.value).to.equal(5);
    expect(BST.root.right.value).to.equal(7);
    expect(BST.root.left.value).to.equal(2);
  });

  it('should find a value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);

    expect(BST.find(5).value).to.equal(5);
  });

  it('should check if the tree is empty', () => {
    const BST = new BinarySearchTree();
    expect(BST.isEmpty()).to.be.true;

    BST.insert(10);
    expect(BST.isEmpty()).to.be.false;
  });

  it('should return the largest value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    expect(BST.largest().value).to.equal(7);
  });

  it('should return the smallest value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    expect(BST.smallest().value).to.equal(2);
  });

  it('should return the next value', () => {
    /**
    *                  5
    *               ↙     ↘
    *             2         7
    *           ↙  ↘      ↙   ↘
    *         1     4    6     8
    */

    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);
    BST.insert(8);
    BST.insert(1);

    expect(BST.next(2).value).to.equal(4);
    expect(BST.next(5).value).to.equal(6);
    expect(BST.next(1).value).to.equal(2);
    expect(BST.next(4).value).to.equal(5);
    expect(BST.next(7).value).to.equal(8);
    expect(BST.next(6).value).to.equal(7);
  });

  it('should delete a value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    expect(BST.delete(7)).to.equal('Node removed');
  });

  it('should return a range of values', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);
    BST.insert(8);
    BST.insert(1);

    expect(BST.range(2, 7)).to.be.a('array');
    expect(BST.range(2, 7)).to.deep.equal([2, 4, 5, 6, 7]);
    expect(BST.range(1, 4)).to.deep.equal([1, 2, 4]);
    expect(BST.range(5, 7)).to.deep.equal([5, 6, 7]);
    expect(BST.range(5, 6)).to.deep.equal([5, 6]);
    expect(BST.range(1, 1)).to.deep.equal([1]);
    expect(BST.range(1, 8)).to.deep.equal([1, 2, 4, 5, 6, 7, 8]);
  });

  it('should perform a dfs', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    BST.dfs(BST.root, (node) => {
      node.value *= 2;
    });

    expect(BST.root.value).to.equal(10);
    expect(BST.root.left.value).to.equal(4);
  });

  it('should perform a bfs', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    BST.bfs(BST.root, (node) => {
      node.value *= 3;
    });

    expect(BST.root.value).to.equal(15);
    expect(BST.root.left.value).to.equal(6);
  });
});
