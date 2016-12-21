
import { expect } from 'chai';
import BinaryTree from '../../../class/binary_tree/binary_tree';
import { pathSumBrute } from '../path_sum';

describe('pathSumBrute()', () => {
  it('should return the number of paths that sum to target', () => {

    /**
    *                  10
    *               ↙     ↘
    *             5         -4
    *          ↙   ↘      ↙    ↘
    *       -7       3  2        6
    *
    * With a target of 8, there should be 3 paths:
    * [[10, 5, -7], [5, 3], [10, -4, 2]]
    */

    const bt = new BinaryTree();
    bt.insert(10);
    bt.insert(5);
    bt.insert(-4);
    bt.insert(-7);
    bt.insert(3);
    bt.insert(2);
    bt.insert(6);

    expect(pathSumBrute(bt.root, 8)).to.equal(3);
  });
});
