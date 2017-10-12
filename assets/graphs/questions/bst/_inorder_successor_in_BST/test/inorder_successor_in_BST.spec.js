//

// import BinarySearchTree from '../../../../data_structures/bst/bst';
// import { findNext, inorderSuccessor } from '../inorder_successor_in_BST';
//
// describe('findNext()', () => {
//   test('should return the successor value', () => {
//     /**
//     *                  5
//     *               ↙     ↘
//     *             2         7
//     *           ↙  ↘      ↙   ↘
//     *         1     4    6     8
//     */
//
//     const BST = new BinarySearchTree();
//     BST.insert(5);
//     BST.insert(2);
//     BST.insert(7);
//     BST.insert(4);
//     BST.insert(6);
//     BST.insert(8);
//     BST.insert(1);
//
//     expect(findNext(BST.find(2)).value).to.equal(4);
//     expect(findNext(BST.find(5)).value).to.equal(6);
//     expect(findNext(BST.find(1)).value).to.equal(2);
//     expect(findNext(BST.find(4)).value).to.equal(5);
//     expect(findNext(BST.find(7)).value).to.equal(8);
//     expect(findNext(BST.find(6)).value).to.equal(7);
//   });
// });
//
// describe('inorderSuccessor()', () => {
//   test('should return the successor value', () => {
//
//   });
// });
