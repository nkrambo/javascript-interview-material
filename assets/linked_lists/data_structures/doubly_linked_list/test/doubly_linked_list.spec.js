
import { DoublyLinkedList, ListNode } from '../doubly_linked_list';

describe('DoublyLinkedList', () => {
  test('should construct an empty list', () => {
    const list = new DoublyLinkedList();

    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  });

  test('should insert at the head of the list', () => {
    const list = new DoublyLinkedList();

    list.unshift(5);
    expect(list.head.value).toBe(5);

    list.unshift(6);
    expect(list.head.value).toBe(6);
    expect(list.head.next.value).toBe(5);
  });

  test('should delete at the head of the list', () => {
    const list = new DoublyLinkedList();

    list.unshift(5);
    expect(list.head.value).toBe(5);

    const shift = list.shift();
    expect(shift).toBe(5);
    expect(list.head).toBeNull();
  });

  test('should insert at the end of the list', () => {
    const list = new DoublyLinkedList();

    list.push(5);
    expect(list.tail.value).toBe(5);

    list.push(6);
    expect(list.tail.value).toBe(6);
    expect(list.tail.prev.value).toBe(5);
  });

  test('should delete at the end of the list', () => {
    const list = new DoublyLinkedList();

    list.push(5);
    expect(list.tail.value).toBe(5);

    expect(list.pop()).toBe(5);
    expect(list.tail).toBeNull();
  });
});


describe('ListNode', () => {
  test('should construct a new list node', () => {
    const node = new ListNode(null, 5, null);

    expect(node.value).toBe(5);
  });
});
