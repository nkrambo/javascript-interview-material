
import { expect } from 'chai';
import reverseLinkedList from '../reverse_linked_list';
import LinkedList from '../../../data_structures/singly_linked_list/singly_linked_list';

describe('reverseLinkedList()', () => {
  it('should reverse a linked list', () => {
    const list = new LinkedList();
    list.add(100, 0);
    list.add(200, 0);
    list.add(300, 0);
    list.add(400, 0);

    const reversed = reverseLinkedList(list);
    expect(reversed.head.value).to.equal(100);
  });
});
