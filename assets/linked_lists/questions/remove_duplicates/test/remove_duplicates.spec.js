
import { expect } from 'chai';
import LinkedList from '../../../class/linked_list/linked_list';
import { removeDuplicates, removeDuplicatesNoBuffer } from '../remove_duplicates';

describe('removeDuplicates()', () => {
  it('should remove duplicates from an unsorted linked list', () => {
    const list = new LinkedList();
    list.add(100, 0);
    list.add(200, 0);
    list.add(300, 0);
    list.add(300, 0);
    list.add(400, 0);

    expect(list.length).to.equal(5);
    expect(list.head.next.next.value).to.equal(300);

    // in-place removal of dups, removes 300
    removeDuplicates(list);

    expect(list.length).to.equal(4);
    expect(list.head.next.next.value).to.equal(200);
  });
});

describe('removeDuplicatesNoBuffer()', () => {
  it('should remove duplicates from an unsorted linked list', () => {
    const list = new LinkedList();
    list.add(100, 0);
    list.add(200, 0);
    list.add(300, 0);
    list.add(300, 0);
    list.add(400, 0);

    expect(list.length).to.equal(5);
    expect(list.head.next.next.value).to.equal(300);

    // in-place removal of dups, removes 300
    removeDuplicatesNoBuffer(list);

    expect(list.length).to.equal(4);
    expect(list.head.next.next.value).to.equal(200);
  });
});
