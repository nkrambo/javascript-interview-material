
// import { isBalanced, isBalancedRecursive } from '../balanced_binary_tree';
import { isBalancedRecursive } from '../balanced_binary_tree';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

// describe('isBalanced()', () => {
//   test('should return true if tree is balanced', () => {
//     /*
//     *                  4
//     *               ↙     ↘
//     *             2         7
//     *           ↙  ↘      ↙   ↘
//     *         1     3    6     9
//     */
//
//     // root
//     const root = new TreeNode(4);
//
//     // level 1
//     root.left = new TreeNode(2);
//     root.right = new TreeNode(7);
//
//     // level 2
//     root.left.left = new TreeNode(1);
//     root.left.right = new TreeNode(3);
//     root.right.left = new TreeNode(6);
//     root.right.right = new TreeNode(9);
//
//     expect(isBalanced(root)).toBeTruthy();
//   });
//
//   test('should return false if tree is unbalanced', () => {
//     /*
//     *                  4
//     *               ↙     ↘
//     *             2         7
//     *           ↙  ↘      ↙
//     *         1     3    5
//     *                      ↘
//     *                        6
//     */
//
//     // root
//     const root = new TreeNode(10);
//
//     // level 1
//     root.left = new TreeNode(2);
//     root.right = new TreeNode(7);
//
//     // level 2
//     root.left.left = new TreeNode(1);
//     root.left.right = new TreeNode(3);
//     root.right.left = new TreeNode(5);
//     root.right.left.right = new TreeNode(6);
//
//     expect(isBalanced(test)).toBeFalsy();
//   });
// });

describe('isBalancedRecursive()', () => {
  test('should return true if tree is balanced', () => {
    /*
    *                  4
    *               ↙     ↘
    *             2         7
    *           ↙  ↘      ↙   ↘
    *         1     3    6     9
    */

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

    expect(isBalancedRecursive(root)).toBeTruthy();
  });

  // test('should return false if tree is unbalanced', () => {
  //   /*
  //   *                  4
  //   *               ↙     ↘
  //   *             2         7
  //   *           ↙  ↘      ↙
  //   *         1     3    5
  //   *                      ↘
  //   *                        6
  //   */
  //
  //   // root
  //   const root = new TreeNode(10);
  //
  //   // level 1
  //   root.left = new TreeNode(2);
  //   root.right = new TreeNode(7);
  //
  //   // level 2
  //   root.left.left = new TreeNode(1);
  //   root.left.right = new TreeNode(3);
  //   root.right.left = new TreeNode(5);
  //   root.right.left.right = new TreeNode(6);
  //
  //   expect(isBalancedRecursive(test)).toBeFalsy();
  // });
});
