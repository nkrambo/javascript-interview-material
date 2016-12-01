
import { expect } from 'chai';
import LinkedList from '../../../class/linked_list/linked_list';
import sumLists from '../sum_lists';

describe('sumLists()', () => {
  it('should return the sum of the reverse of l1 and l2', () => {
    // 7 -> 1 -> 6
    const l1 = new LinkedList();
    l1.add(6, 0);
    l1.add(1, 0);
    l1.add(7, 0);

    // 5 -> 9 -> 2
    const l2 = new LinkedList();
    l2.add(2, 0);
    l2.add(9, 0);
    l2.add(5, 0);

    // that is, 617 + 295 = (2 -> 1 -> 9)
    const sum = sumLists(l1, l2);

    expect(sum.head.value).to.equal(2);
    expect(sum.head.next.value).to.equal(1);
    expect(sum.head.next.next.value).to.equal(9);
  });
});
