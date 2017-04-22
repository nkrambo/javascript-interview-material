
import { expect } from 'chai';
import filter from '../filter';

describe('filter()', () => {
  it('should return a new array of filtered results', () => {
    const array = [1, 2, 3, 4, 5];
    const below4 = filter(array, (n) => n < 4);

    expect(below4).to.be.a('array');
    expect(below4.length).to.equal(3);
    expect(below4[0]).to.equal(1);
    expect(below4[below4.length - 1]).to.equal(3);
  });
});
