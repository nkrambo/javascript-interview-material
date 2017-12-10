
import mergeTwoLists from '../merge_two_sorted_lists';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('mergeTwoLists()', () => {
  const l1 = new ListNode(1);
  addNode(l1, 2);
  addNode(l1, 3);


  const l2 = new ListNode(6);
  addNode(l2, 9);
  addNode(l2, 10);

  test('should return the head of two merged sorted lists', () => {
    const merged = mergeTwoLists(l1, l2);
    expect(merged.val).toBe(1);
    expect(merged.next.next.next.val).toBe(6);
  });
});
