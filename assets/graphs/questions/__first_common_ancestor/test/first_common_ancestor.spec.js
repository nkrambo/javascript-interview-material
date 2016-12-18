
import { expect } from 'chai';
import BinaryTree from '../../../class/binary_tree/binary_tree';
import { withParents, withParentsAlt, withoutParents } from '../first_common_ancestor';

// new class with links to node parents
class BinaryTreeWP extends BinaryTree {
  constructor() {
    super();
  }

  insert(value) {

    // create node
    const node = {
      value,
      left: null,
      right: null,
      parent: null
    };

    // check root
    if (this.root === null) {
      this.root = node;
      return;
    }

    const queue = [this.root];

    while (queue.length) {

      // dequeue
      const current = queue.shift();

      // check to insert
      if (current.left === null) {
        node.parent = current;
        current.left = node;
        return;

      } else if (current.right === null) {
        node.parent = current;
        current.right = node;
        return;
      }

      // enqueue
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
}

/**
*                1
*             ↙     ↘
*          2           3
*        ↙   ↘       ↙   ↘
*      4       5   6       7
*
*/

describe('withParents()', () => {
  it('should find the first common ancestor', () => {
    const BT = new BinaryTreeWP();
    BT.insert(1);
    BT.insert(2);
    BT.insert(3);
    BT.insert(4);
    BT.insert(5);
    BT.insert(6);
    BT.insert(7);

    const root = BT.root;

    const two = BT.root.left;
    const three = BT.root.right;
    expect(withParents(two, three)).to.equal(root);

    const four = BT.root.left.left;
    const seven = BT.root.right.right;
    expect(withParents(four, seven)).to.equal(root);

    const five = BT.root.left.right;
    expect(withParents(five, three)).to.equal(root);

    expect(withParents(five, four)).to.equal(two);
  });
});

describe('withParentsAlt()', () => {
  it('should find the first common ancestor', () => {
    const BT = new BinaryTreeWP();
    BT.insert(1);
    BT.insert(2);
    BT.insert(3);
    BT.insert(4);
    BT.insert(5);
    BT.insert(6);
    BT.insert(7);

    const root = BT.root;

    const two = BT.root.left;
    const three = BT.root.right;
    expect(withParents(two, three)).to.equal(root);

    const four = BT.root.left.left;
    const seven = BT.root.right.right;
    expect(withParents(four, seven)).to.equal(root);

    const five = BT.root.left.right;
    expect(withParents(five, three)).to.equal(root);

    expect(withParents(five, four)).to.equal(two);  
  });
});

// describe('commonAncestor()', () => {
//   // it('should', () => {
//   //
//   // });
// });
