
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

    const listA = new ListNode(3);
    addNode(listA, 1);
    addNode(listA, 5);
    addNode(listA, 9);
    addNode(listA, 7);
    addNode(listA, 2);
    addNode(listA, 1);

    const listB = new ListNode(4);
    addNode(listB, 6);

    // point B(6) → A(7), intersection
    listB.next.next = listA.next.next.next.next;

    // return intersection
    const intersection = getIntersectionNode(listA, listB);
    expect(intersection.val).toBe(7);
    expect(intersection.next.val).toBe(2);
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
