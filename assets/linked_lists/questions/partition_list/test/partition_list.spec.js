
import partition from '../partition_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('partition()', () => {
  test('should partition a linked list around a value x', () => {
    // 1 → 4 → 3 → 2 → 5 → 2, x = 3
    const list = new ListNode(1);
    addNode(list, 4);
    addNode(list, 3);
    addNode(list, 2);
    addNode(list, 5);
    addNode(list, 2);

    const part = partition(list, 3);

    // 1 → 2 → 2 → 4 → 3 → 5
    expect(part.val).toBe(1);
  });
});
