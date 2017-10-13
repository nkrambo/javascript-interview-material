
import { removeDuplicates, removeDuplicatesNoBuffer } from '../remove_duplicates';
import { ListNode, addNode, getLength } from '../../../data_structures/list_node/list_node';

describe('removeDuplicates()', () => {
  test('should remove duplicates from an unsorted linked list', () => {
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 3);
    addNode(list, 4);

    expect(getLength(list)).toBe(5);

    // in-place removal of dups, removes 3
    removeDuplicates(list);

    expect(getLength(list)).toBe(4);
  });
});

describe('removeDuplicatesNoBuffer()', () => {
  test('should remove duplicates from an unsorted linked list', () => {
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 3);
    addNode(list, 4);

    expect(getLength(list)).toBe(5);

    // in-place removal of dups, removes 3
    removeDuplicatesNoBuffer(list);

    expect(getLength(list)).toBe(4);
  });
});
