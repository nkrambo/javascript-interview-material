
import minDepth from '../minimum_depth_of_binary_tree';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('minDepth()', () => {
  test('should return the minimum depth of a binary tree', () => {
    /*
    *                  1
    *               ↙     ↘
    *             2         2
    */

    // root
    const t1 = new TreeNode(1);

    // level 1
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(2);

    expect(minDepth(t1)).toBe(2);

    /*
    *                  1
    */

    // root
    const t2 = new TreeNode(1);

    expect(minDepth(t2)).toBe(1);

    /*
    *                  1
    *               ↙     ↘
    *             2         2
    *          ↙
    *        5
    */

    // root
    const t3 = new TreeNode(1);

    // level 1
    t3.left = new TreeNode(2);
    t3.right = new TreeNode(2);

    // level 2
    t3.left.left = new TreeNode(5);

    expect(minDepth(t3)).toBe(2);
  });
});
