
import Heap from '../heap';

describe('Heap', () => {
  test('should construct a minimum heap by default', () => {
    const heap = new Heap();

    expect(heap.isEmpty()).toBeTruthy();

    heap.add(6);
    heap.add(3);
    heap.add(2);
    heap.add(11);
    heap.add(9);

    expect(heap.isEmpty()).toBeFalsy();
    expect(heap.heap.length).toBe(5);
    expect(heap.top()).toBe(2);

    expect(heap.extract()).toBe(2);
    expect(heap.top()).toBe(3);
  });
});
