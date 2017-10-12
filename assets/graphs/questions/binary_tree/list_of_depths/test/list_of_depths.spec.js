
import BinaryTree from '../../../../data_structures/binary_tree/binary_tree';
import createDepthLinkList from '../list_of_depths';

describe('createDepthLinkList()', () => {
  test('should return an array of linked lists representing nodes at each level', () => {
    const tree = new BinaryTree();

    tree.insert(10); // root, height 1

    tree.insert(20); // height 2
    tree.insert(30);

    tree.insert(40); // height 3
    tree.insert(60);
    tree.insert(70);

    const levels = createDepthLinkList(tree);

    expect(levels.length).toBe(3);
    expect(levels[0].head.value).toBe(10);
    expect(levels[1].head.next.value).toBe(30);
  });
});
