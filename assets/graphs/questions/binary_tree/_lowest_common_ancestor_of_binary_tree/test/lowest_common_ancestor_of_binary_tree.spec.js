
// import BinaryTree from '../../../../data_structures/binary_tree/binary_tree';
// import { withParents, withParentsAlt, lowestCommonAncestor } from '../lowest_common_ancestor_of_binary_tree';

// // new class with links to node parents
// class BinaryTreeWP extends BinaryTree {
//   insert(value) {
//     // create node
//     const node = {
//       value,
//       left: null,
//       right: null,
//       parent: null,
//     };
//
//     // check root
//     if (this.root === null) {
//       this.root = node;
//       return;
//     }
//
//     const queue = [this.root];
//
//     while (queue.length) {
//       // dequeue
//       const current = queue.shift();
//
//       // check to insert
//       if (current.left === null) {
//         node.parent = current;
//         current.left = node;
//         return;
//       } else if (current.right === null) {
//         node.parent = current;
//         current.right = node;
//         return;
//       }
//
//       // enqueue
//       if (current.left !== null) {
//         queue.push(current.left);
//       }
//
//       if (current.right !== null) {
//         queue.push(current.right);
//       }
//     }
//   }
// }

/**
*                1
*             ↙     ↘
*          2           3
*        ↙   ↘       ↙   ↘
*      4       5   6       7
*
*/

describe.skip('withParents()', () => {
  test('should find the lowest common ancestor (LCA)', () => {
    // const BT = new BinaryTreeWP();
    // BT.insert(1);
    // BT.insert(2);
    // BT.insert(3);
    // BT.insert(4);
    // BT.insert(5);
    // BT.insert(6);
    // BT.insert(7);
    //
    // const root = BT.root;
    // const two = BT.root.left;
    // const three = BT.root.right;
    // const four = BT.root.left.left;
    // const five = BT.root.left.right;
    // const seven = BT.root.right.right;

    // expect(withParents(two, three)).toBe(root);
    // expect(withParents(four, seven)).toBe(root);
    // expect(withParents(five, three)).toBe(root);
    // expect(withParents(five, four)).toBe(two);
  });
});

describe.skip('withParentsAlt()', () => {
  test('should find the lowest common ancestor (LCA)', () => {
    // const BT = new BinaryTreeWP();
    // BT.insert(1);
    // BT.insert(2);
    // BT.insert(3);
    // BT.insert(4);
    // BT.insert(5);
    // BT.insert(6);
    // BT.insert(7);
    //
    // const root = BT.root;
    // const two = BT.root.left;
    // const three = BT.root.right;
    // const four = BT.root.left.left;
    // const five = BT.root.left.right;
    // const seven = BT.root.right.right;

    // expect(withParentsAlt(root, two, three)).toBe(root);
    // expect(withParentsAlt(root, four, seven)).toBe(root);
    // expect(withParentsAlt(root, five, three)).toBe(root);
    // expect(withParentsAlt(root, five, four)).toBe(two);
  });
});

describe.skip('lowestCommonAncestor()', () => {
  test('should find the lowest common ancestor (LCA)', () => {

  });
});
