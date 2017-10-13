
import { getIntersectionNode } from '../intersection_of_two_linked_lists';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('getIntersectionNode()', () => {
  test('should return the intersecting node if two linked lists intersect', () => {
    /*
    *     3 → 1 → 5 → 9
    *                   ↘
    *                    7 → 2 → 1
    *                   ↗
    *             4 → 6
    */

    // const listA = new ListNode(3);

    // listA.next = new ListNode(1);
    // listA.next.next = new ListNode(5);
    // listA.next.next.next = new ListNode(9);
    // listA.next.next.next.next = new ListNode(7);
    // listA.next.next = new ListNode(2);
    // listA.next.next = new ListNode(1);

    // const listB = new ListNode(4);
    // listB.next = new ListNode(6);
    //
    // expect(getIntersectionNode(listA, listB)).
  });

  test('should return null if there is no intersection', () => {
    /*
    *         3 → 1 → 5
    *
    *             4 → 6
    */

    const listA = new ListNode(3);
    addNode(listA, 1);
    addNode(listA, 5);

    const listB = new ListNode(4);
    addNode(listB, 6);

    expect(getIntersectionNode(listA, listB)).toBeNull();
  });
});
