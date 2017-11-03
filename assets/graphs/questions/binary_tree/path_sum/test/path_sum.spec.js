
import hasPathSum from '../path_sum';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('hasPathSum()', () => {
  /*
  * Given the below binary tree and sum = 22,
  *
  *                  5
  *               ↙     ↘
  *             4         8
  *           ↙         ↙   ↘
  *         11        13      4
  *       ↙    ↘                ↘
  *     7        2                1
  */

  test('should return true if there exists a root-to-leaf path that equals sum', () => {
    // root
    const root = new TreeNode(5);

    // level 1
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);

    // level 2
    root.left.left = new TreeNode(11);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);

    // level 3
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    root.right.right.right = new TreeNode(1);

    expect(hasPathSum(root, 22)).toBeTruthy();
  });

  test('should return false if there is NOT a root-to-leaf path that equals sum', () => {
    /*
    * Given the below binary tree and sum = 4,
    *
    *                  5
    *               ↙     ↘
    *             4         8
    *           ↙         ↙   ↘
    *         11        13      4
    *       ↙    ↘                ↘
    *     7        2                1
    */

    // root
    const root = new TreeNode(5);

    // level 1
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);

    // level 2
    root.left.left = new TreeNode(11);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);

    // level 3
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    root.right.right.right = new TreeNode(1);

    expect(hasPathSum(root, 4)).toBeFalsy();
  });
});
