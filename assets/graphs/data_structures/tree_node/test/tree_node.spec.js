
import { TreeNode } from '../tree_node';

describe('TreeNode', () => {
  test('should create a tree node', () => {
    const root = new TreeNode(1);
    expect(root).toEqual(expect.objectContaining({
      val: 1,
      right: null,
      left: null,
    }));
  });
});
