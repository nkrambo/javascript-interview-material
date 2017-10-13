
import kthToLast from '../kth_to_last';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('kthToLast()', () => {
  test('should return the kth to last node', () => {
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 4);
    addNode(list, 5);

    const kth = kthToLast(2, list);
    expect(kth.val).toBe(4);
  });
});
