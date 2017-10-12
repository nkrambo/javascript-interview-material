
import LinkedList from '../singly_linked_list';

describe('LinkedList', () => {
  test('should construct an empty list', () => {
    const list1 = new LinkedList();

    expect(list1.length).toBe(0);
    expect(list1.head).toBeNull();
  });

  test('should add an item to list', () => {
    const list2 = new LinkedList();
    list2.add(50, 0);
    list2.add(150, 0);

    expect(list2.length).toBe(2);
    expect(list2.head.value).toBe(150);
    expect(list2.head.next.value).toBe(50);
  });

  test('should remove an item from list', () => {
    const list3 = new LinkedList();
    list3.add(10, 0);
    list3.add(20, 0);
    list3.add(30, 0);
    list3.remove(0);

    expect(list3.head.value).toBe(20);
  });

  test('should value item from list', () => {
    const list4 = new LinkedList();
    list4.add(10, 0);

    expect(list4.get(0)).toEqual({ value: 10, next: null });
    expect(list4.length).toBe(1);
  });
});
