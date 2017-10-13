
import { reverseList, reverseListRecursive } from '../reverse_linked_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('reverseList()', () => {
  const list = new ListNode(1);
  addNode(list, 2);
  addNode(list, 3);

  test('should reverse a linked list', () => {
    const reversed = reverseList(list);
    expect(reversed.val).toBe(3);
    expect(reversed.next.next.val).toBe(1);
  });
});

describe('reverseListRecursive()', () => {
  const list = new ListNode(1);
  addNode(list, 2);
  addNode(list, 3);

  test('should reverse a linked list', () => {
    const reversed = reverseListRecursive(list);
    expect(reversed.val).toBe(3);
    expect(reversed.next.next.val).toBe(1);
  });
});
