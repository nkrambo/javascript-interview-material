
import { expect } from 'chai';
import { removeElement1, removeElement2 } from '../remove_element';

describe('removeElement1()', () => {
  it('should return the length of array with val removed', () => {
    expect(removeElement1([3, 2, 2, 3], 3)).to.equal(2); // [2, 2]
    expect(removeElement1([1, 2, 3, 5, 4], 4)).to.equal(4); // [1, 2, 3, 5]
    expect(removeElement1([1], 4)).to.equal(1); // [1]
  });
});

describe('removeElement2()', () => {
  it('should return the length of array with val removed', () => {
    expect(removeElement2([3, 2, 2, 3], 3)).to.equal(2); // [2, 2]
    expect(removeElement2([1, 2, 3, 5, 4], 4)).to.equal(4); // [1, 2, 3, 5]
    expect(removeElement2([1], 4)).to.equal(1); // [1]
  });
});
