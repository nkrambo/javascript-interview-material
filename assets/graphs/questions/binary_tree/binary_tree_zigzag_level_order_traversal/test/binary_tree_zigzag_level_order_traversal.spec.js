
import zigzagLevelOrder from '../binary_tree_zigzag_level_order_traversal';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('zigzagLevelOrder()', () => {
  test('should return the zigzag level order traversal of a binary tree', () => {
    /**
    * Given binary tree [3, 9, 20, null, null, 15, 7]
    *
    *                  3
    *               ↙     ↘
    *             9         20
    *                     ↙   ↘
    *                   15      7
    *
    * return its zigzag level order traversal as:
    *
    * [
    *   [3],
    *   [20, 9],
    *   [15, 7]
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

    expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]]);
  });
});
