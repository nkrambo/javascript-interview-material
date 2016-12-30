
import { expect } from 'chai';
import { reverseArrayIterator, range } from '../__iterator';

describe('reverseArrayIterator()', () => {
  it('should iterate the reverse of an array', () => {
    const it = reverseArrayIterator(['three', 'two', 'one']);

    expect(it.next().value).to.equal('one');
    expect(it.next().value).to.equal('two');
    expect(it.next().value).to.equal('three');

    expect(it.next().done).to.be.true;
  });
});

describe('range()', () => {
  it('should iterate the reverse of an array', () => {
    const numbers = [];
    for (let num of range(0, 5)) {
      numbers.push(num);
    }

    expect(numbers[0]).to.equal(1);
    expect(numbers[1]).to.equal(2);
    expect(numbers[2]).to.equal(3);
  });
});
