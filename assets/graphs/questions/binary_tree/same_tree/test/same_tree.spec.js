
import isSameTree from '../same_tree';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('isSameTree()', () => {
  test('should return true if two binary trees are equal', () => {
    /*
    *                  1                      1
    *               ↙     ↘                ↙     ↘
    *             2         5      &     2         5
    *              ↘      ↙   ↘           ↘      ↙   ↘
    *               4    6     3           4    6     3
    */

    // TREE 1
    // root
    const t1 = new TreeNode(1);

    // level 1
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(5);

    // level 2
    t1.left.right = new TreeNode(4);
    t1.right.left = new TreeNode(6);
    t1.right.right = new TreeNode(3);

    // TREE 2
    // root
    const t2 = new TreeNode(1);

    // level 1
    t2.left = new TreeNode(2);
    t2.right = new TreeNode(5);

    // level 2
    t2.left.right = new TreeNode(4);
    t2.right.left = new TreeNode(6);
    t2.right.right = new TreeNode(3);

    expect(isSameTree(t1, t2)).toBeTruthy();
  });

  test('should return false if two binary trees are NOT equal', () => {
    /*
    *                  1                      1
    *               ↙     ↘                ↙     ↘
    *             2         5      &     2         7
    *              ↘      ↙   ↘
    *               4    6     3
    */

    // TREE 1
    // root
    const t1 = new TreeNode(1);

    // level 1
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(5);

    // level 2
    t1.left.right = new TreeNode(4);
    t1.right.left = new TreeNode(6);
    t1.right.right = new TreeNode(3);

    // TREE 2
    // root
    const t2 = new TreeNode(1);

    // level 1
    t2.left = new TreeNode(2);
    t2.right = new TreeNode(7);

    expect(isSameTree(t1, t2)).toBeFalsy();
  });
});
