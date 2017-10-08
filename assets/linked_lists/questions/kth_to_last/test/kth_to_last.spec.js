
import { expect } from 'chai';
import kthToLast from '../kth_to_last';
import LinkedList from '../../../data_structures/singly_linked_list/singly_linked_list';

describe('kthToLast()', () => {
  test('should return the kth to last node', () => {
    const list = new LinkedList();
    list.add('Eccles', 0);
    list.add('Devil\'s Food', 0);
    list.add('Cheese', 0);
    list.add('Bundt', 0);
    list.add('Angel Food', 0);

    const kth = kthToLast(2, list.head);
    expect(kth.value).to.equal('Devil\'s Food');
  });
});
