
import insertionSortList from '../insertion_sort_list';

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

describe('insertionSortList()', () => {
  const list = new ListNode(3);
  list.next = new ListNode(4);
  list.next.next = new ListNode(1);
  list.next.next.next = new ListNode(2);

  test('should sort a linked list via insertion sort', () => {
    const sortedList = insertionSortList(list);
    expect(sortedList.val).toBe(1);
    expect(sortedList.next.val).toBe(2);
    expect(sortedList.next.next.val).toBe(3);
  });
});
