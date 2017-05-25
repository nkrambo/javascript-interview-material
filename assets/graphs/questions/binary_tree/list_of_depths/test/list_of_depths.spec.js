
import { expect } from 'chai';
import BinaryTree from '../../../../data_structures/binary_tree/binary_tree';
import createDepthLinkList from '../list_of_depths';

describe('createDepthLinkList()', () => {
  it('should return an array of linked lists representing nodes at each level', () => {
    const tree = new BinaryTree();

    tree.insert(10); // root, height 1

    tree.insert(20); // height 2
    tree.insert(30);

    tree.insert(40); // height 3
    tree.insert(60);
    tree.insert(70);

    const levels = createDepthLinkList(tree);

    expect(levels).to.be.a('array');
    expect(levels.length).to.equal(3);

    expect(levels[0].head.value).to.equal(10);
    expect(levels[1].head.next.value).to.equal(30);
  });
});
