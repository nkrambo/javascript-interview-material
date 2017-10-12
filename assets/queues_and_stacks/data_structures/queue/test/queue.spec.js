
import Queue from '../queue';

describe('Queue', () => {
  test('should enqueue a new value', () => {
    const queueOne = new Queue();
    queueOne.enqueue(10);
    queueOne.enqueue(20);

    expect(queueOne.length).toBe(2);
    expect(queueOne.items[0]).toBe(10);
    expect(queueOne.items[1]).toBe(20);
  });

  test('should dequeue the first item', () => {
    const queueTwo = new Queue();
    queueTwo.enqueue(10);
    queueTwo.enqueue(20);

    const item = queueTwo.dequeue();
    expect(item).toBe(10);
    expect(queueTwo.length).toBe(1);
  });

  test('should return first item', () => {
    const queueThree = new Queue();
    queueThree.enqueue(10);
    queueThree.enqueue(20);

    expect(queueThree.peek()).toBe(10);
    expect(queueThree.length).toBe(2);
  });
});
