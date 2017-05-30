//
// import { expect } from 'chai';
// import { swapPairsRecursive, swapPairs } from '../swap_nodes_in_pairs';
//
// describe('swapPairsRecursive()', () => {
//   it('should swap every pair of adjacent nodes and return the list head', () => {
//     // 1 -> 2 -> 3 -> 4
//     const l1 = new LinkedList();
//     l1.add(1, 0);
//     l1.add(2, 1);
//     l1.add(3, 2);
//     l1.add(4, 3);
//
//     // 2 -> 1 -> 4 -> 3
//     const swapped = swapPairsRecursive(l1.head);
//     expect(swapped.value).to.equal(2);
//     expect(swapped.next.value).to.equal(1);
//     expect(swapped.next.next.value).to.equal(4);
//   });
// });
//
// describe('swapPairs()', () => {
//   it('should swap every pair of adjacent nodes and return the list head', () => {
//     // 1 -> 2 -> 3 -> 4
//     const l2 = new LinkedList();
//     l2.add(1, 0);
//     l2.add(2, 1);
//     l2.add(3, 2);
//     l2.add(4, 3);
//
//     // 2 -> 1 -> 4 -> 3
//     const swapped = swapPairs(l2.head);
//     expect(swapped.value).to.equal(2);
//     expect(swapped.next.value).to.equal(1);
//     expect(swapped.next.next.value).to.equal(4);
//   });
// });
