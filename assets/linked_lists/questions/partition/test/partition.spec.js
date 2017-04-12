
import { expect } from 'chai';
import LinkedList from '../../../class/linked_list/linked_list';
import partitionList from '../partition';

describe('partitionList()', () => {
  it('should partition a linked list around a value x', () => {

    // 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
    const list = new LinkedList();
    list.add(1, 0);
    list.add(2, 0);
    list.add(10, 0);
    list.add(5, 0);
    list.add(8, 0);
    list.add(5, 0);
    list.add(3, 0);

    expect(list.head.next.value).to.equal(5);

    // partitions list around pivot (5)
    // 1 -> 2 -> 3 -> 5 -> 8 -> 5 -> 10
    const part = partitionList(list, 5);

    expect(part.value).to.equal(1);
  });
});
