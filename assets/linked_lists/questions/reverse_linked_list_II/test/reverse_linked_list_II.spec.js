
import reverseBetween from '../reverse_linked_list_II';
import { ListNode } from '../../../data_structures/list_node/list_node';

// Given: 1 → 2 → 3 → 4 → 5 → NULL, 2, 4
// Return: 1 → 4 → 3 → 2 → 5 → NULL
describe('reverseBetween()', () => {
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);

  test('should reverse a linked list from m to n, in-place and in a single pass', () => {
    const reversed = reverseBetween(list, 2, 4);

    expect(reversed.val).toBe(1);
    expect(reversed.next.val).toBe(4);
  });
});
