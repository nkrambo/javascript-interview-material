
import { removeNthFromEnd, removeNthFromEndSP } from '../remove_nth_node_from_end_of_list';
import { ListNode, addNode, getLength } from '../../../data_structures/list_node/list_node';

describe('removeNthFromEnd()', () => {
  test('should return the head of a singly linked list with node, n, removed from the end', () => {
    /*
    *     1 → 2 → 3 → 4
    */

    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 4);

    expect(getLength(list)).toBe(4);

    /*
    *     Remove n = 1
    *
    *     1 → 2 → 4
    */

    const modifiedList = removeNthFromEnd(list, 2);
    expect(getLength(modifiedList)).toBe(3);
    expect(modifiedList.next.val).toBe(2);
    expect(modifiedList.next.next.val).toBe(4);
  });
});

describe('removeNthFromEndSP()', () => {
  test('should return the head of a singly linked list with node, n, removed from the end', () => {
    /*
    *     1 → 2 → 3 → 4
    */

    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 4);

    expect(getLength(list)).toBe(4);

    /*
    *     Remove n = 1
    *
    *     1 → 2 → 4
    */

    const modifiedList = removeNthFromEndSP(list, 2);
    expect(getLength(modifiedList)).toBe(3);
    expect(modifiedList.next.val).toBe(2);
    expect(modifiedList.next.next.val).toBe(4);
  });
});
