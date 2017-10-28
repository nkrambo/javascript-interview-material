
import { postorderTraversal, postorderTraversalRecurse } from '../binary_tree_postorder_traversal';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('postorderTraversal()', () => {
  /*
  *                4
  *             ↙     ↘              (left, right, root)
  *           2         6           [1, 3, 2, 5, 7, 6, 4]
  *        ↙   ↘       ↙   ↘
  *      1       3   5       7
  */

  test('should return the post-order values', () => {
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

    expect(postorderTraversal(root)).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });
});

describe('postorderTraversalRecurse()', () => {
  /*
  *                4
  *             ↙     ↘              (left, right, root)
  *           2         6           [1, 3, 2, 5, 7, 6, 4]
  *        ↙   ↘       ↙   ↘
  *      1       3   5       7
  */

  test('should return the post-order values', () => {
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

    expect(postorderTraversalRecurse(root)).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });
});
