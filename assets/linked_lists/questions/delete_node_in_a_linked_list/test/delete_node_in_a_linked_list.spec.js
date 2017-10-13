
import deleteNode from '../delete_node_in_a_linked_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('deleteNode()', () => {
  // 1 → 2 → 3
  const list = new ListNode(1);
  addNode(list, 2);
  addNode(list, 3);

  // remove two
  deleteNode(list.next);

  // 1 → 3
  test('should', () => {
    expect(list.val).toBe(1);
    expect(list.next.val).toBe(3);
  });
});
