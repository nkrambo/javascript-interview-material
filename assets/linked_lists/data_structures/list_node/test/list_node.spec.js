
import { ListNode, addNode, getLength } from '../list_node';

describe('ListNode', () => {
  test('should create a linked list node', () => {
    const root = new ListNode(1);
    expect(root).toEqual(expect.objectContaining({
      val: 1,
      next: null,
    }));
  });
});

describe('addNode', () => {
  test('should add a node to the end of a linked list', () => {
    const list = new ListNode(1);
    addNode(list, 2);
    expect(list.next.val).toBe(2);
  });
});

describe('getLength', () => {
  test('should return the length of a linked list', () => {
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    expect(getLength(list)).toBe(3);
  });
});
