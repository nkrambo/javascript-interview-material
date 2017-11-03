
import { isSymmetricRecurse, isSymmetricIterative } from '../symmetric_tree';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('isSymmetricRecurse()', () => {
  test('should return true if a binary tree symmetric around its center', () => {
    /*
    *                  1
    *               ↙     ↘
    *             2         2
    *           ↙  ↘      ↙   ↘
    *         3     4    4     3
    */

    // root
    const root = new TreeNode(1);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);

    // level 2
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);

    expect(isSymmetricRecurse(root)).toBeTruthy();
  });

  test('should return false if a binary tree is NOT symmetric around its center', () => {
    /*
    *                  1
    *               ↙     ↘
    *             2         2
    *              ↘          ↘
    *               3          3
    */

    // root
    const root = new TreeNode(1);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    // level 2
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(3);

    expect(isSymmetricRecurse(root)).toBeFalsy();
  });
});

describe('isSymmetricIterative()', () => {
  test('should return true if a binary tree symmetric around its center', () => {
    /*
    *                  1
    *               ↙     ↘
    *             2         2
    *           ↙  ↘      ↙   ↘
    *         3     4    4     3
    */

    // root
    const root = new TreeNode(1);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);

    // level 2
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);

    expect(isSymmetricIterative(root)).toBeTruthy();
  });

  test('should return false if a binary tree is NOT symmetric around its center', () => {
    /*
    *                  1
    *               ↙     ↘
    *             2         2
    *              ↘          ↘
    *               3          3
    */

    // root
    const root = new TreeNode(1);

    // level 1
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    // level 2
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(3);

    expect(isSymmetricIterative(root)).toBeFalsy();
  });
});
