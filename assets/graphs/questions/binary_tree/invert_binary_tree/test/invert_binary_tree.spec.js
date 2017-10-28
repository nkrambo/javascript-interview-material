
import { invertTreeRecursive, invertTree } from '../invert_binary_tree';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

/*
*                  4
*               ↙     ↘
*             2         7
*           ↙  ↘      ↙   ↘
*         1     3    6     9
*
*             Inverted to
*
*                  4
*               ↙     ↘
*             7         2
*           ↙  ↘      ↙   ↘
*         9     6    3     1
*/

describe('invertTreeRecursive()', () => {
  test('should invert a binary tree', () => {
    // root
    const root = new TreeNode(4);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);

    // level 2
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const invert = invertTreeRecursive(root);

    expect(invert.val).toBe(4);
    expect(invert.left.val).toBe(7);
    expect(invert.right.val).toBe(2);
    expect(invert.left.right.val).toBe(6);
  });
});

describe('invertTree()', () => {
  test('should invert a binary tree', () => {
    // root
    const root = new TreeNode(4);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);

    // level 2
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const invert = invertTree(root);

    expect(invert.val).toBe(4);
    expect(invert.left.val).toBe(7);
    expect(invert.right.val).toBe(2);
    expect(invert.left.right.val).toBe(6);
  });
});
