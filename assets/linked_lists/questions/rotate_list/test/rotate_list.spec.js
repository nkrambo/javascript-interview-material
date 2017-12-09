
import rotateRight from '../rotate_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('rotateRight()', () => {
  test('should rotate a list by k spaces', () => {
    // 1 → 2 → 3 → 4 → 5
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 4);
    addNode(list, 5);

    // 4 → 5 → 1 → 2 → 3
    const rotated = rotateRight(list, 2);
    expect(rotated.val).toEqual(4);
    expect(rotated.next.val).toEqual(5);
    expect(rotated.next.next.val).toEqual(1);
  });
});
