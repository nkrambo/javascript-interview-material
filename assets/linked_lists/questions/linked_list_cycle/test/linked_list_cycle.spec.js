
import { hasCycleSet, hasCyclePointers } from '../linked_list_cycle';
import { ListNode, addNode, getTail } from '../../../data_structures/list_node/list_node';

describe('hasCycleSet()', () => {
  test('should return TRUE if a linked list is cyclic', () => {
    /*
    *     3 → 1 → 9
    *             ↑ ↘
    *             4 ← 7
    */

    const list = new ListNode(3);
    addNode(list, 1);
    addNode(list, 9);
    addNode(list, 7);
    addNode(list, 4);

    // create cycle, 4 → 9
    getTail(list).next = list.next.next;
    expect(hasCycleSet(list)).toBeTruthy();
  });

  test('should return FALSE if a linked list is NOT cyclic', () => {
    /*
    *     3 → 1 → 9
    */

    const list = new ListNode(3);
    addNode(list, 1);
    addNode(list, 9);
    expect(hasCycleSet(list)).toBeFalsy();
  });
});

describe('hasCyclePointers()', () => {
  test('should return TRUE if a linked list is cyclic', () => {
    /*
    *     3 → 1 → 9
    *             ↑ ↘
    *             4 ← 7
    */

    const list = new ListNode(3);
    addNode(list, 1);
    addNode(list, 9);
    addNode(list, 7);
    addNode(list, 4);

    // create cycle, 4 → 9
    getTail(list).next = list.next.next;
    expect(hasCyclePointers(list)).toBeTruthy();
  });

  test('should return FALSE if a linked list is NOT cyclic', () => {
    /*
    *     3 → 1 → 9
    */

    const list = new ListNode(3);
    addNode(list, 1);
    addNode(list, 9);
    expect(hasCyclePointers(list)).toBeFalsy();
  });
});
