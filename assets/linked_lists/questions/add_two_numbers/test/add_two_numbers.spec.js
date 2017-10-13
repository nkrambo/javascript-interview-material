
import addTwoNumbers from '../add_two_numbers';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('addTwoNumbers()', () => {
  test('should return the sum of the reverse of l1 and l2', () => {
    // 7 → 1 → 6
    const l1 = new ListNode(7);
    addNode(l1, 1);
    addNode(l1, 6);

    // 5 → 9 → 2
    const l2 = new ListNode(5);
    addNode(l2, 9);
    addNode(l2, 2);

    // that is, 617 + 295 = (2 → 1 → 9)
    const result = addTwoNumbers(l1, l2);

    expect(result.val).toBe(2);
    expect(result.next.val).toBe(1);
    expect(result.next.next.val).toBe(9);
  });
});
