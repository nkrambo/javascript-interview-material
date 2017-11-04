
import levelOrderBottom from '../binary_tree_level_order_traversal_II';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('levelOrderBottom()', () => {
  test('should return the bottom-up level order traversal of a binary tree', () => {
    /*
    *                  3
    *               ↙     ↘
    *             9         20
    *                     ↙   ↘
    *                   15     7
    *
    * [
    *   [15, 7],
    *   [9, 20],
    *   [3]
    * ]
    */

    // root
    const root = new TreeNode(3);

    // level 1
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);

    // level 2
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(levelOrderBottom(root)).toEqual([[15, 7], [9, 20], [3]]);
  });
});
