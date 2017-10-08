
import { expect } from 'chai';
import Queue from '../queue';

describe('Queue', () => {
  test('should enqueue a new value', () => {
    const queueOne = new Queue();
    queueOne.enqueue(10);
    queueOne.enqueue(20);

    expect(queueOne.length).to.equal(2);
    expect(queueOne.items[0]).to.equal(10);
    expect(queueOne.items[1]).to.equal(20);
  });

  test('should dequeue the first item', () => {
    const queueTwo = new Queue();
    queueTwo.enqueue(10);
    queueTwo.enqueue(20);

    const item = queueTwo.dequeue();
    expect(item).to.equal(10);
    expect(queueTwo.length).to.equal(1);
  });

  test('should return first item', () => {
    const queueThree = new Queue();
    queueThree.enqueue(10);
    queueThree.enqueue(20);

    expect(queueThree.peek()).to.equal(10);
    expect(queueThree.length).to.equal(2);
  });
});
