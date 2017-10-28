
import { inorderTraversal, inorderTraversalRecurse } from '../binary_tree_inorder_traversal';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('inorderTraversal()', () => {
  /*
  *                4
  *             ↙     ↘                (left to right)
  *           2         6           [1, 2, 3, 4, 5, 6, 7]
  *        ↙   ↘       ↙   ↘
  *      1       3   5       7
  */

  test('should the in-order values from a binary tree', () => {
    // root
    const root = new TreeNode(4);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);

    // level 2
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);

    expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe('inorderTraversalRecurse()', () => {
  /*
  *                4
  *             ↙     ↘                (left to right)
  *           2         6           [1, 2, 3, 4, 5, 6, 7]
  *        ↙   ↘       ↙   ↘
  *      1       3   5       7
  */

  test('should the in-order values from a binary tree', () => {
    // root
    const root = new TreeNode(4);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);

    // level 2
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);

    expect(inorderTraversalRecurse(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
