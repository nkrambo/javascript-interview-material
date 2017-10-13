
import { detectCycleSet, detectCycle } from '../linked_list_cycle_II';
import { ListNode, addNode, getTail } from '../../../data_structures/list_node/list_node';

describe('detectCycleSet()', () => {
  test('should return the node at the beginning of a loop if a loop exists', () => {
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
    const startNode = detectCycleSet(list);
    expect(startNode.val).toBe(9);
  });

  test('should return null if there is no loop', () => {
    /*
    *     3 → 1 → 9
    */

    const list = new ListNode(3);
    addNode(list, 1);
    addNode(list, 9);
    expect(detectCycleSet(list)).toBeNull();
  });
});

describe('detectCycle()', () => {
  test('should return the node at the beginning of a loop if a loop exists', () => {
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
    const startNode = detectCycle(list);
    expect(startNode.val).toBe(9);
  });

  test('should return null if there is no loop', () => {
    /*
    *     3 → 1 → 9
    */

    const list = new ListNode(3);
    addNode(list, 1);
    addNode(list, 9);
    expect(detectCycle(list)).toBeNull();
  });
});
