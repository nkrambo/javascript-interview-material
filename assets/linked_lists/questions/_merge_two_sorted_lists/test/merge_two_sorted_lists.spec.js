
import { expect } from 'chai';
import { mergeTwoListsIter, mergeTwoListsRecursive } from '../merge_two_sorted_lists';

/**
* ListNode
*
* @constructor
* @param {*} val
* @return {object} returns a linked list node
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

describe('mergeTwoListsIter()', () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(3);

  const l2 = new ListNode(6);
  l2.next = new ListNode(9);
  l2.next.next = new ListNode(10);

  it('should return the head of two merged sorted lists', () => {
    const merged = mergeTwoListsIter(l1, l2);
    expect(merged).to.be.an('object');
    expect(merged.val).to.equal(1);
    expect(merged.next.next.next.val).to.equal(6);
  });
});

// describe('mergeTwoListsRecursive()', () => {
//   it('should return the head of two merged sorted lists', () => {
//     expect(mergeTwoListsRecursive())
//   });
// });
