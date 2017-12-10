
import insertionSortList from '../insertion_sort_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('insertionSortList()', () => {
  test('should sort a linked list via insertion sort', () => {
    const list = new ListNode(3);
    addNode(list, 4);
    addNode(list, 1);
    addNode(list, 2);

    const sortedList = insertionSortList(list);
    expect(sortedList.val).toBe(1);
    expect(sortedList.next.val).toBe(2);
    expect(sortedList.next.next.val).toBe(3);
  });
});
