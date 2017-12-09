
import sortList from '../sort_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('sortList()', () => {
  test('should sort a linked list in constant space and n log n time', () => {
    // 2 → 11 → 4 → 3 → 6 → 1 → 5
    const list = new ListNode(2);
    addNode(list, 11);
    addNode(list, 4);
    addNode(list, 3);
    addNode(list, 6);
    addNode(list, 1);
    addNode(list, 5);

    // 1 → 2 → 3 → 4 → 5 → 6 → 11
    const sorted = sortList(list);
    expect(sorted.val).toEqual(1);
    expect(sorted.next.val).toEqual(2);
    expect(sorted.next.next.val).toEqual(3);
    expect(sorted.next.next.next.val).toEqual(4);
  });
});
