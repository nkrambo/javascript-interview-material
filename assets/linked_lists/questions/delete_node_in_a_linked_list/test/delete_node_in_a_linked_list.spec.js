
import deleteNode from '../delete_node_in_a_linked_list';

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

describe('deleteNode()', () => {
  // 1 → 2 → 3
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);

  // remove two
  const two = list.next;
  deleteNode(two);

  // 1 → 3
  test('should', () => {
    expect(list.val).toBe(1);
    expect(list.next.val).toBe(3);
  });
});
