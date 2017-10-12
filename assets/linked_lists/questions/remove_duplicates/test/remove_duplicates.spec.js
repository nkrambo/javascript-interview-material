
import LinkedList from '../../../data_structures/singly_linked_list/singly_linked_list';
import { removeDuplicates, removeDuplicatesNoBuffer } from '../remove_duplicates';

describe('removeDuplicates()', () => {
  test('should remove duplicates from an unsorted linked list', () => {
    const list = new LinkedList();
    list.add(100, 0);
    list.add(200, 0);
    list.add(300, 0);
    list.add(300, 0);
    list.add(400, 0);

    expect(list.length).toBe(5);
    expect(list.head.next.next.value).toBe(300);

    // in-place removal of dups, removes 300
    removeDuplicates(list);

    expect(list.length).toBe(4);
    expect(list.head.next.next.value).toBe(200);
  });
});

describe('removeDuplicatesNoBuffer()', () => {
  test('should remove duplicates from an unsorted linked list', () => {
    const list = new LinkedList();
    list.add(100, 0);
    list.add(200, 0);
    list.add(300, 0);
    list.add(300, 0);
    list.add(400, 0);

    expect(list.length).toBe(5);
    expect(list.head.next.next.value).toBe(300);

    // in-place removal of dups, removes 300
    removeDuplicatesNoBuffer(list);

    expect(list.length).to.equal(4);
    expect(list.head.next.next.value).toBe(200);
  });
});
