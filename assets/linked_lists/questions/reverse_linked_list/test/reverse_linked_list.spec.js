
import { reverseList, reverseListRecursive } from '../reverse_linked_list';

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

describe('reverseList()', () => {
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);

  test('should reverse a linked list', () => {
    const reversed = reverseList(list);

    expect(reversed.val).toBe(3);
    expect(reversed.next.next.val).toBe(1);
  });
});

describe('reverseListRecursive()', () => {
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);

  test('should reverse a linked list', () => {
    const reversed = reverseListRecursive(list);

    expect(reversed.val).toBe(3);
    expect(reversed.next.next.val).toBe(1);
  });
});
