
import { levelOrderTwoQueues, levelOrderDelimiter, levelOrderCount } from '../binary_tree_level_order_traversal';
import { TreeNode } from '../../../../data_structures/tree_node/tree_node';

describe('levelOrderTwoQueues()', () => {
  test('should return a level order of values, as sub arrays', () => {
    /*
    *                4
    *             ↙     ↘
    *           2         6           [[4], [2, 6], [1, 3, 5, 7]]
    *        ↙   ↘       ↙   ↘
    *      1       3   5       7
    */

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

    expect(levelOrderTwoQueues(root)).toEqual([[4], [2, 6], [1, 3, 5, 7]]);
  });
});

describe('levelOrderDelimiter()', () => {
  test('should return a level order of values, as sub arrays', () => {
    /*
    *                4
    *             ↙     ↘
    *           2         6           [[4], [2, 6], [1, 3, 5, 7]]
    *        ↙   ↘       ↙   ↘
    *      1       3   5       7
    */

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

    expect(levelOrderDelimiter(root)).toEqual([[4], [2, 6], [1, 3, 5, 7]]);
  });
});

describe('levelOrderCount()', () => {
  test('should return a level order of values, as sub arrays', () => {
    /*
    *                4
    *             ↙     ↘
    *           2         6           [[4], [2, 6], [1, 3, 5, 7]]
    *        ↙   ↘       ↙   ↘
    *      1       3   5       7
    */

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

    expect(levelOrderCount(root)).toEqual([[4], [2, 6], [1, 3, 5, 7]]);
  });
});
