
import buildTree from '../construct_binary_tree_from_preorder_and_inorder_traversal';

describe('buildTree()', () => {
  test('should construct a new binary tree from an pre-order and inorder traversal', () => {
    const preorder = [7, 10, 4, 3, 1, 2, 8, 11];
    const inorder = [4, 10, 3, 1, 7, 11, 8, 2];

    const tree = buildTree(preorder, inorder);

    expect(tree.val).toBe(7);
    expect(tree.left.val).toBe(10);
    expect(tree.right.val).toBe(2);
  });
});
