
import { expect } from 'chai';
import Heap from '../heap';

describe('Heap', () => {
  it('should construct a minimum heap by default', () => {
    const heap = new Heap();

    expect(heap.heap).to.be.a('array');
    expect(heap.compare).to.be.a('function');
    expect(heap.isEmpty()).to.be.true;

    heap.add(6);
    heap.add(3);
    heap.add(2);
    heap.add(11);
    heap.add(9);

    expect(heap.isEmpty()).to.be.false;
    expect(heap.heap.length).to.equal(5);
    expect(heap.top()).to.equal(2);

    expect(heap.extract()).to.equal(2);
    expect(heap.top()).to.equal(3);
  });
});
