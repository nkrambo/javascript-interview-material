
import { expect } from 'chai';
import { invertTreeRecursive, invertTreeIterative } from '../invert_binary_tree';
import BinaryTree from '../../../../class/binary_tree/binary_tree';

describe('invertTreeRecursive()', () => {
  const test = new BinaryTree();
  test.insert(4);
  test.insert(2);
  test.insert(7);
  test.insert(1);
  test.insert(3);
  test.insert(6);
  test.insert(9);

  it('should invert a binary tree', () => {
    invertTreeRecursive(test.root);
    expect(test.root.value).to.equal(4);
    expect(test.root.left.value).to.equal(7);
  });
});

describe('invertTreeIterative()', () => {
  const test = new BinaryTree();
  test.insert(4);
  test.insert(2);
  test.insert(7);
  test.insert(1);
  test.insert(3);
  test.insert(6);
  test.insert(9);

  it('should invert a binary tree', () => {
    invertTreeIterative(test.root);
    expect(test.root.value).to.equal(4);
    expect(test.root.left.value).to.equal(7);
  });
});
