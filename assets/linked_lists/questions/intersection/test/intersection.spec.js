
import { expect } from 'chai';
import LinkedList from '../../../data_structures/singly_linked_list/singly_linked_list';
import intersection from '../intersection';

describe('intersection()', () => {
  /*
  *     3 -> 1 -> 5 -> 9
  *                    |
  *                    7 -> 2 -> 1
  *                    |
  *               4 -> 6
  */

  it('should return the intersecting node if two linked lists intersect', () => {
    const l1 = new LinkedList();
    l1.add(3, 0);
    l1.add(1, 1);
    l1.add(5, 2);
    l1.add(9, 3);
    l1.add(7, 4); // intersection
    l1.add(2, 5);
    l1.add(1, 6);

    const l2 = new LinkedList();
    l2.add(4, 0);
    l2.add(6, 1);

    // point to intersecting node
    l2.head.next.next = l1.get(4);
    l2.length = 5; // manually update length

    const intersect = intersection(l1, l2);
    expect(intersect.value).to.equal(7);
  });

  it('should return null if there is no intersection', () => {
    const l3 = new LinkedList();
    l3.add(1, 0);
    l3.add(2, 1);
    l3.add(3, 2);

    const l4 = new LinkedList();
    l4.add(1, 0);
    l4.add(2, 1);
    l4.add(3, 2);

    expect(intersection(l3, l4)).to.be.null;
  });
});
