
import { expect } from 'chai';
import BinaryTree from '../../../../data_structures/binary_tree/binary_tree';
import { containsTree, containsTreeAlt } from '../check_subtree';

describe('containsTree1()', () => {
  it('should return true if T2 is a subtree of T1', () => {
    const t1 = new BinaryTree();
    t1.insert(4);
    t1.insert(2);
    t1.insert(6);
    t1.insert(1);
    t1.insert(3);
    t1.insert(5);
    t1.insert(7);

    const t2 = new BinaryTree();
    t2.insert(6);
    t2.insert(5);
    t2.insert(7);

    expect(containsTree(t1, t2)).to.be.true;
  });

  it('should return false if T2 is NOT a subtree of T1', () => {
    const t1 = new BinaryTree();
    t1.insert(4);
    t1.insert(2);
    t1.insert(6);
    t1.insert(1);
    t1.insert(3);
    t1.insert(5);
    t1.insert(7);

    const t2 = new BinaryTree();
    t2.insert(6);
    t2.insert(4);
    t2.insert(7);

    expect(containsTree(t1, t2)).to.be.false;
  });
});

describe('containsTreeAlt()', () => {
  it('should return true if T2 is a subtree of T1', () => {
    const t1 = new BinaryTree();
    t1.insert(4);
    t1.insert(2);
    t1.insert(6);
    t1.insert(1);
    t1.insert(3);
    t1.insert(5);
    t1.insert(7);

    const t2 = new BinaryTree();
    t2.insert(6);
    t2.insert(5);
    t2.insert(7);

    expect(containsTreeAlt(t1, t2)).to.be.true;
  });

  it('should return false if T2 is NOT a subtree of T1', () => {
    const t1 = new BinaryTree();
    t1.insert(4);
    t1.insert(2);
    t1.insert(6);
    t1.insert(1);
    t1.insert(3);
    t1.insert(5);
    t1.insert(7);

    const t2 = new BinaryTree();
    t2.insert(6);
    t2.insert(4);
    t2.insert(7);

    expect(containsTreeAlt(t1, t2)).to.be.false;
  });
});
