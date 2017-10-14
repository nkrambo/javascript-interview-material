
import deleteDuplicates from '../remove_duplicates_from_sorted_list_II';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('deleteDuplicates()', () => {
  test('should remove alll occurences of duplicates in a linked list', () => {
    /*
    *     1 → 1 → 3 → 4 → 5
    */

    const list = new ListNode(1);
    addNode(list, 1);
    addNode(list, 3);
    addNode(list, 4);
    addNode(list, 5);

    const deDuped = deleteDuplicates(list);

    /*
    *     3 → 4 → 5
    */

    expect(deDuped.val).toBe(3);
    expect(deDuped.next.val).toBe(4);
  });
});
