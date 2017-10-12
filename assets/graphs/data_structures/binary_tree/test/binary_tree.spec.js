
import BinaryTree from '../binary_tree';

const bt = new BinaryTree();
bt.insert(5);
bt.insert(-3);
bt.insert(6);
bt.insert(0);
bt.insert(1);

describe('BinaryTree', () => {
  test('should create a binary tree with BFS insertions', () => {
    expect(bt.root.value).toBe(5);
    expect(bt.root.left.value).toBe(-3);
    expect(bt.root.right.value).toBe(6);
    expect(bt.root.right.right).toBeNull();
    expect(bt.root.left.left.value).toBe(0);
    expect(bt.root.left.right.value).toBe(1);
  });
});
