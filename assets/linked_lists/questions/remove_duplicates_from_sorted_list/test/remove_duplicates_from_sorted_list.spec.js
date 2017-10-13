
import deleteDuplicates from '../remove_duplicates_from_sorted_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('deleteDuplicates()', () => {
  test('should remove duplicate values from a sorted linked list', () => {
    /*
    *     1 → 1 → 3 → 4 → 5
    */

    const list = new ListNode(1);
    addNode(list, 1);
    addNode(list, 3);
    addNode(list, 4);
    addNode(list, 5);

    const deDuped = deleteDuplicates(list);
    expect(deDuped.val).toBe(1);
    expect(deDuped.next.val).toBe(3);
  });
});
