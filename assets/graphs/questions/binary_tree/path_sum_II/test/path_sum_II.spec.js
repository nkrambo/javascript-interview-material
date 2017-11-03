
import pathSum from '../path_sum_II';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('pathSum()', () => {
  test('should an array of all valid root-to-leaf paths that total to sum', () => {
    /*
    * Given the below binary tree and sum = 22,
    *
    *                  5
    *               ↙     ↘
    *             4         8
    *           ↙         ↙   ↘
    *         11        13      4
    *       ↙    ↘           ↙    ↘
    *     7        2       5        1
    *
    * Return:
    *
    * [
    *   [5, 4, 11, 2],
    *   [5, 8, 4, 5],
    * ]
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
    root.right.right.left = new TreeNode(5);
    root.right.right.right = new TreeNode(1);

    const paths = pathSum(root, 22);

    expect(paths.length).toBe(2);
    // expect(paths[0]).toEqual([5, 4, 11, 2]);
    // expect(paths[1]).toEqual([5, 8, 4, 5]);
  });

  // test('should an empty array if there are NO valid root-to-leaf paths that total to sum', () => {
  //   /*
  //   * Given the below binary tree and sum = 22,
  //   *
  //   *                  5
  //   *               ↙     ↘
  //   *             4         8
  //   *
  //   * Return: []
  //   */
  //
  //   // root
  //   const root = new TreeNode(5);
  //
  //   // level 1
  //   root.left = new TreeNode(4);
  //   root.right = new TreeNode(8);
  //
  //   const paths = pathSum(root, 22);
  //
  //   expect(paths.length).toBe(0);
  // });
});
